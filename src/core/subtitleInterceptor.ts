export class SubtitleInterceptor extends EventTarget {
  private intervalId: number | null = null;
  private lastProcessedCue = -1;
  private cues: { text: string; startTime: number; endTime: number }[] = [];

  public async observe() {
    try {
      const playerResponse = (window as any).ytInitialPlayerResponse;
      if (!playerResponse) {
        console.error("ytInitialPlayerResponse not found.");
        return;
      }

      const captionTracks =
        playerResponse.captions?.playerCaptionsTracklistRenderer?.captionTracks;

      if (!captionTracks || captionTracks.length === 0) {
        console.error("No caption tracks found.");
        return;
      }

      // Prioritize non-auto-generated tracks
      const sortedTracks = captionTracks.sort((a: any, b: any) => {
        if (a.kind === "asr" && b.kind !== "asr") {
          return 1;
        }
        if (a.kind !== "asr" && b.kind === "asr") {
          return -1;
        }
        return 0;
      });

      const transcriptUrl = sortedTracks[0].baseUrl + "&fmt=json3";
      const response = await fetch(transcriptUrl);
      const transcript = await response.json();

      if (transcript.events) {
        this.cues = transcript.events.map((event: any) => ({
          text: event.segs
            .map((seg: any) => seg.utf8)
            .join(" ")
            .trim(),
          startTime: event.tStartMs / 1000,
          endTime: (event.tStartMs + event.dDurationMs) / 1000,
        }));
      }

      if (this.cues.length > 0) {
        this.startDispatching();
      }
    } catch (error) {
      console.error("Failed to intercept subtitles:", error);
    }
  }

  private startDispatching() {
    this.intervalId = window.setInterval(() => {
      const currentTime =
        document.querySelector<HTMLVideoElement>(".html5-main-video")
          ?.currentTime ?? 0;

      for (let i = this.lastProcessedCue + 1; i < this.cues.length; i++) {
        const cue = this.cues[i];
        if (currentTime >= cue.startTime && currentTime <= cue.endTime) {
          this.dispatchEvent(
            new CustomEvent("subtitle", {
              detail: {
                text: cue.text,
                startTime: cue.startTime,
                endTime: cue.endTime,
              },
            })
          );
          this.lastProcessedCue = i;
          break; // Process one cue per interval
        }
      }
    }, 100); // Check every 100ms
  }

  public disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.cues = [];
    this.lastProcessedCue = -1;
  }
}