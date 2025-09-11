// ==UserScript==
// @name           [VOT] - Voice Over Translation
// @name:de        [VOT] - Voice-Over-Video-Übersetzung
// @name:es        [VOT] - Traducción de vídeo en off
// @name:fr        [VOT] - Traduction vidéo voix-off
// @name:it        [VOT] - Traduzione Video fuori campo
// @name:ru        [VOT] - Закадровый перевод видео
// @name:zh        [VOT] - 画外音视频翻译
// @description    A small extension that adds a Yandex Browser video translation to other browsers
// @description:de Eine kleine Erweiterung, die eine Voice-over-Übersetzung von Videos aus dem Yandex-Browser zu anderen Browsern hinzufügt
// @description:es Una pequeña extensión que agrega una traducción de voz en off de un video de Yandex Browser a otros navegadores
// @description:fr Une petite extension qui ajoute la traduction vocale de la vidéo du Navigateur Yandex à d'autres navigateurs
// @description:it Una piccola estensione che aggiunge la traduzione vocale del video dal browser Yandex ad altri browser
// @description:ru Небольшое расширение, которое добавляет закадровый перевод видео из Яндекс Браузера в другие браузеры
// @description:zh 一个小扩展，它增加了视频从Yandex浏览器到其他浏览器的画外音翻译
// @grant          unsafeWindow
// @grant          GM_addStyle
// @grant          GM_deleteValue
// @grant          GM_listValues
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_xmlhttpRequest
// @grant          GM_notification
// @grant          GM_info
// @grant          window.focus
// @require        https://cdnjs.cloudflare.com/ajax/libs/hls.js/1.5.18/hls.light.min.js
// @require        https://gist.githubusercontent.com/ilyhalight/6eb5bb4dffc7ca9e3c57d6933e2452f3/raw/7ab38af2228d0bed13912e503bc8a9ee4b11828d/gm-addstyle-polyfill.js
// @match          *://*.youtube.com/*
// @match          *://*.youtube-nocookie.com/*
// @match          *://*.youtubekids.com/*
// @match          *://*.twitch.tv/*
// @match          *://*.xvideos.com/*
// @match          *://*.xvideos-ar.com/*
// @match          *://*.xvideos005.com/*
// @match          *://*.xv-ru.com/*
// @match          *://*.pornhub.com/*
// @match          *://*.pornhub.org/*
// @match          *://*.vk.com/*
// @match          *://*.vkvideo.ru/*
// @match          *://*.vk.ru/*
// @match          *://*.vimeo.com/*
// @match          *://*.imdb.com/*
// @match          *://*.9gag.com/*
// @match          *://*.twitter.com/*
// @match          *://*.x.com/*
// @match          *://*.facebook.com/*
// @match          *://*.rutube.ru/*
// @match          *://*.bilibili.com/*
// @match          *://my.mail.ru/*
// @match          *://*.bitchute.com/*
// @match          *://*.coursera.org/*
// @match          *://*.udemy.com/course/*
// @match          *://*.tiktok.com/*
// @match          *://*.douyin.com/*
// @match          *://rumble.com/*
// @match          *://*.eporner.com/*
// @match          *://*.dailymotion.com/*
// @match          *://*.ok.ru/*
// @match          *://trovo.live/*
// @match          *://disk.yandex.ru/*
// @match          *://disk.yandex.kz/*
// @match          *://disk.yandex.com/*
// @match          *://disk.yandex.com.am/*
// @match          *://disk.yandex.com.ge/*
// @match          *://disk.yandex.com.tr/*
// @match          *://disk.yandex.by/*
// @match          *://disk.yandex.az/*
// @match          *://disk.yandex.co.il/*
// @match          *://disk.yandex.ee/*
// @match          *://disk.yandex.lt/*
// @match          *://disk.yandex.lv/*
// @match          *://disk.yandex.md/*
// @match          *://disk.yandex.net/*
// @match          *://disk.yandex.tj/*
// @match          *://disk.yandex.tm/*
// @match          *://disk.yandex.uz/*
// @match          *://youtube.googleapis.com/embed/*
// @match          *://*.banned.video/*
// @match          *://*.madmaxworld.tv/*
// @match          *://*.weverse.io/*
// @match          *://*.newgrounds.com/*
// @match          *://*.egghead.io/*
// @match          *://*.youku.com/*
// @match          *://*.archive.org/*
// @match          *://*.patreon.com/*
// @match          *://*.reddit.com/*
// @match          *://*.kodik.info/*
// @match          *://*.kodik.biz/*
// @match          *://*.kodik.cc/*
// @match          *://*.kick.com/*
// @match          *://developer.apple.com/*
// @match          *://dev.epicgames.com/*
// @match          *://*.rapid-cloud.co/*
// @match          *://odysee.com/*
// @match          *://learning.sap.com/*
// @match          *://*.watchporn.to/*
// @match          *://*.linkedin.com/*
// @match          *://*.incestflix.net/*
// @match          *://*.incestflix.to/*
// @match          *://*.porntn.com/*
// @match          *://*.dzen.ru/*
// @match          *://*.cloudflarestream.com/*
// @match          *://*.loom.com/*
// @match          *://*.artstation.com/learning/*
// @match          *://*.rt.com/*
// @match          *://*.bitview.net/*
// @match          *://*.kickstarter.com/*
// @match          *://*.thisvid.com/*
// @match          *://*.ign.com/*
// @match          *://*.bunkr.site/*
// @match          *://*.bunkr.black/*
// @match          *://*.bunkr.cat/*
// @match          *://*.bunkr.media/*
// @match          *://*.bunkr.red/*
// @match          *://*.bunkr.ws/*
// @match          *://*.bunkr.org/*
// @match          *://*.bunkr.sk/*
// @match          *://*.bunkr.si/*
// @match          *://*.bunkr.su/*
// @match          *://*.bunkr.ci/*
// @match          *://*.bunkr.cr/*
// @match          *://*.bunkr.fi/*
// @match          *://*.bunkr.ph/*
// @match          *://*.bunkr.pk/*
// @match          *://*.bunkr.ps/*
// @match          *://*.bunkr.ru/*
// @match          *://*.bunkr.la/*
// @match          *://*.bunkr.is/*
// @match          *://*.bunkr.to/*
// @match          *://*.bunkr.ac/*
// @match          *://*.bunkr.ax/*
// @match          *://web.telegram.org/k/*
// @match          *://t2mc.toil.cc/*
// @match          *://mylearn.oracle.com/*
// @match          *://learn.deeplearning.ai/*
// @match          *://learn-staging.deeplearning.ai/*
// @match          *://learn-dev.deeplearning.ai/*
// @match          *://*.netacad.com/content/i2cs/*
// @match          *://*/*.mp4*
// @match          *://*/*.webm*
// @match          *://*.yewtu.be/*
// @match          *://yt.artemislena.eu/*
// @match          *://invidious.flokinet.to/*
// @match          *://iv.melmac.space/*
// @match          *://inv.nadeko.net/*
// @match          *://inv.tux.pizza/*
// @match          *://invidious.private.coffee/*
// @match          *://yt.drgnz.club/*
// @match          *://vid.puffyan.us/*
// @match          *://invidious.dhusch.de/*
// @match          *://*.piped.video/*
// @match          *://piped.tokhmi.xyz/*
// @match          *://piped.moomoo.me/*
// @match          *://piped.syncpundit.io/*
// @match          *://piped.mha.fi/*
// @match          *://watch.whatever.social/*
// @match          *://piped.garudalinux.org/*
// @match          *://efy.piped.pages.dev/*
// @match          *://watch.leptons.xyz/*
// @match          *://piped.lunar.icu/*
// @match          *://yt.dc09.ru/*
// @match          *://piped.mint.lgbt/*
// @match          *://*.il.ax/*
// @match          *://piped.privacy.com.de/*
// @match          *://piped.esmailelbob.xyz/*
// @match          *://piped.projectsegfau.lt/*
// @match          *://piped.in.projectsegfau.lt/*
// @match          *://piped.us.projectsegfau.lt/*
// @match          *://piped.privacydev.net/*
// @match          *://piped.palveluntarjoaja.eu/*
// @match          *://piped.smnz.de/*
// @match          *://piped.adminforge.de/*
// @match          *://piped.qdi.fi/*
// @match          *://piped.hostux.net/*
// @match          *://piped.chauvet.pro/*
// @match          *://piped.jotoma.de/*
// @match          *://piped.pfcd.me/*
// @match          *://piped.frontendfriendly.xyz/*
// @match          *://proxitok.pabloferreiro.es/*
// @match          *://proxitok.pussthecat.org/*
// @match          *://tok.habedieeh.re/*
// @match          *://proxitok.esmailelbob.xyz/*
// @match          *://proxitok.privacydev.net/*
// @match          *://tok.artemislena.eu/*
// @match          *://tok.adminforge.de/*
// @match          *://tt.vern.cc/*
// @match          *://cringe.whatever.social/*
// @match          *://proxitok.lunar.icu/*
// @match          *://proxitok.privacy.com.de/*
// @match          *://peertube.1312.media/*
// @match          *://tube.shanti.cafe/*
// @match          *://*.bee-tube.fr/*
// @match          *://video.sadmin.io/*
// @match          *://*.dalek.zone/*
// @match          *://review.peertube.biz/*
// @match          *://*.peervideo.club/*
// @match          *://tube.la-dina.net/*
// @match          *://peertube.tmp.rcp.tf/*
// @match          *://*.peertube.su/*
// @match          *://video.blender.org/*
// @match          *://videos.viorsan.com/*
// @match          *://tube-sciences-technologies.apps.education.fr/*
// @match          *://tube-numerique-educatif.apps.education.fr/*
// @match          *://tube-arts-lettres-sciences-humaines.apps.education.fr/*
// @match          *://*.beetoons.tv/*
// @match          *://comics.peertube.biz/*
// @match          *://*.makertube.net/*
// @match          *://*.poketube.fun/*
// @match          *://pt.sudovanilla.org/*
// @match          *://poke.ggtyler.dev/*
// @match          *://poke.uk2.littlekai.co.uk/*
// @match          *://poke.blahai.gay/*
// @match          *://*.ricktube.ru/*
// @match          *://*.coursehunter.net/*
// @match          *://*.coursetrain.net/*
// @exclude        file://*/*.mp4*
// @exclude        file://*/*.webm*
// @exclude        *://accounts.youtube.com/*
// @connect        yandex.ru
// @connect        disk.yandex.kz
// @connect        disk.yandex.com
// @connect        disk.yandex.com.am
// @connect        disk.yandex.com.ge
// @connect        disk.yandex.com.tr
// @connect        disk.yandex.by
// @connect        disk.yandex.az
// @connect        disk.yandex.co.il
// @connect        disk.yandex.ee
// @connect        disk.yandex.lt
// @connect        disk.yandex.lv
// @connect        disk.yandex.md
// @connect        disk.yandex.net
// @connect        disk.yandex.tj
// @connect        disk.yandex.tm
// @connect        disk.yandex.uz
// @connect        yandex.net
// @connect        timeweb.cloud
// @connect        raw.githubusercontent.com
// @connect        vimeo.com
// @connect        toil.cc
// @connect        deno.dev
// @connect        onrender.com
// @connect        workers.dev
// @connect        speed.cloudflare.com
// @connect        porntn.com
// @connect        googlevideo.com
// @namespace      vot
// @version        1.10.5
// @icon           https://translate.yandex.ru/icons/favicon.ico
// @author         Toil, SashaXser, MrSoczekXD, mynovelhost, sodapng
// @homepageURL    https://github.com/ilyhalight/voice-over-translation
// @updateURL      https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @downloadURL    https://raw.githubusercontent.com/ilyhalight/voice-over-translation/master/dist/vot.user.js
// @supportURL     https://github.com/ilyhalight/voice-over-translation/issues
// ==/UserScript==

(() => {
	var d = {
		"./node_modules/@google/genai/dist/web/index.mjs": (d, f, p) => {
			"use strict";
			p.d(f, { M4: () => GoogleGenAI });
			let m, h;
			function setDefaultBaseUrls(d) {
				m = d.geminiUrl, h = d.vertexUrl;
			}
			function getDefaultBaseUrls() {
				return {
					geminiUrl: m,
					vertexUrl: h
				};
			}
			function getBaseUrl(d, f, p, m) {
				var h, g;
				if (!d?.baseUrl) {
					let d = getDefaultBaseUrls();
					return f ? (h = d.vertexUrl) ?? p : (g = d.geminiUrl) ?? m;
				}
				return d.baseUrl;
			}
			class BaseModule {}
			function formatMap(d, f) {
				let p = /\{([^}]+)\}/g;
				return d.replace(p, (d, p) => {
					if (Object.prototype.hasOwnProperty.call(f, p)) {
						let d = f[p];
						return d == null ? "" : String(d);
					} else throw Error(`Key '${p}' not found in valueMap.`);
				});
			}
			function setValueByPath(d, f, p) {
				for (let m = 0; m < f.length - 1; m++) {
					let h = f[m];
					if (h.endsWith("[]")) {
						let g = h.slice(0, -2);
						if (!(g in d)) if (Array.isArray(p)) d[g] = Array.from({ length: p.length }, () => ({}));
						else throw Error(`Value must be a list given an array path ${h}`);
						if (Array.isArray(d[g])) {
							let h = d[g];
							if (Array.isArray(p)) for (let d = 0; d < h.length; d++) {
								let g = h[d];
								setValueByPath(g, f.slice(m + 1), p[d]);
							}
							else for (let d of h) setValueByPath(d, f.slice(m + 1), p);
						}
						return;
					} else if (h.endsWith("[0]")) {
						let g = h.slice(0, -3);
						g in d || (d[g] = [{}]);
						let _ = d[g];
						setValueByPath(_[0], f.slice(m + 1), p);
						return;
					}
					(!d[h] || typeof d[h] != "object") && (d[h] = {}), d = d[h];
				}
				let m = f[f.length - 1], h = d[m];
				if (h !== void 0) {
					if (!p || typeof p == "object" && Object.keys(p).length === 0 || p === h) return;
					if (typeof h == "object" && typeof p == "object" && h !== null && p !== null) Object.assign(h, p);
					else throw Error(`Cannot set value for an existing key. Key: ${m}`);
				} else if (m === "_self" && typeof p == "object" && p && !Array.isArray(p)) {
					let f = p;
					Object.assign(d, f);
				} else d[m] = p;
			}
			function getValueByPath(d, f) {
				try {
					if (f.length === 1 && f[0] === "_self") return d;
					for (let p = 0; p < f.length; p++) {
						if (typeof d != "object" || !d) return;
						let m = f[p];
						if (m.endsWith("[]")) {
							let h = m.slice(0, -2);
							if (h in d) {
								let m = d[h];
								return Array.isArray(m) ? m.map((d) => getValueByPath(d, f.slice(p + 1))) : void 0;
							} else return;
						} else d = d[m];
					}
					return d;
				} catch (d) {
					if (d instanceof TypeError) return;
					throw d;
				}
			}
			function tBytes$1(d) {
				if (typeof d != "string") throw Error("fromImageBytes must be a string");
				return d;
			}
			function getOperationParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["operationName"]);
				p != null && setValueByPath(f, ["_url", "operationName"], p);
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function fetchPredictOperationParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["operationName"]);
				p != null && setValueByPath(f, ["operationName"], p);
				let m = getValueByPath(d, ["resourceName"]);
				m != null && setValueByPath(f, ["_url", "resourceName"], m);
				let h = getValueByPath(d, ["config"]);
				return h != null && setValueByPath(f, ["config"], h), f;
			}
			function getOperationParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["operationName"]);
				p != null && setValueByPath(f, ["_url", "operationName"], p);
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function videoFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["video", "uri"]);
				p != null && setValueByPath(f, ["uri"], p);
				let m = getValueByPath(d, ["video", "encodedVideo"]);
				m != null && setValueByPath(f, ["videoBytes"], tBytes$1(m));
				let h = getValueByPath(d, ["encoding"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function generatedVideoFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				return p != null && setValueByPath(f, ["video"], videoFromMldev$1(p)), f;
			}
			function generateVideosResponseFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["generatedSamples"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => generatedVideoFromMldev$1(d))), setValueByPath(f, ["generatedVideos"], d);
				}
				let m = getValueByPath(d, ["raiMediaFilteredCount"]);
				m != null && setValueByPath(f, ["raiMediaFilteredCount"], m);
				let h = getValueByPath(d, ["raiMediaFilteredReasons"]);
				return h != null && setValueByPath(f, ["raiMediaFilteredReasons"], h), f;
			}
			function generateVideosOperationFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["metadata"]);
				m != null && setValueByPath(f, ["metadata"], m);
				let h = getValueByPath(d, ["done"]);
				h != null && setValueByPath(f, ["done"], h);
				let g = getValueByPath(d, ["error"]);
				g != null && setValueByPath(f, ["error"], g);
				let _ = getValueByPath(d, ["response", "generateVideoResponse"]);
				return _ != null && setValueByPath(f, ["response"], generateVideosResponseFromMldev$1(_)), f;
			}
			function videoFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["gcsUri"]);
				p != null && setValueByPath(f, ["uri"], p);
				let m = getValueByPath(d, ["bytesBase64Encoded"]);
				m != null && setValueByPath(f, ["videoBytes"], tBytes$1(m));
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function generatedVideoFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				return p != null && setValueByPath(f, ["video"], videoFromVertex$1(p)), f;
			}
			function generateVideosResponseFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["videos"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => generatedVideoFromVertex$1(d))), setValueByPath(f, ["generatedVideos"], d);
				}
				let m = getValueByPath(d, ["raiMediaFilteredCount"]);
				m != null && setValueByPath(f, ["raiMediaFilteredCount"], m);
				let h = getValueByPath(d, ["raiMediaFilteredReasons"]);
				return h != null && setValueByPath(f, ["raiMediaFilteredReasons"], h), f;
			}
			function generateVideosOperationFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["metadata"]);
				m != null && setValueByPath(f, ["metadata"], m);
				let h = getValueByPath(d, ["done"]);
				h != null && setValueByPath(f, ["done"], h);
				let g = getValueByPath(d, ["error"]);
				g != null && setValueByPath(f, ["error"], g);
				let _ = getValueByPath(d, ["response"]);
				return _ != null && setValueByPath(f, ["response"], generateVideosResponseFromVertex$1(_)), f;
			}
			var g;
			(function(d) {
				d.OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED", d.OUTCOME_OK = "OUTCOME_OK", d.OUTCOME_FAILED = "OUTCOME_FAILED", d.OUTCOME_DEADLINE_EXCEEDED = "OUTCOME_DEADLINE_EXCEEDED";
			})(g ||= {});
			var _;
			(function(d) {
				d.LANGUAGE_UNSPECIFIED = "LANGUAGE_UNSPECIFIED", d.PYTHON = "PYTHON";
			})(_ ||= {});
			var v;
			(function(d) {
				d.TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED", d.STRING = "STRING", d.NUMBER = "NUMBER", d.INTEGER = "INTEGER", d.BOOLEAN = "BOOLEAN", d.ARRAY = "ARRAY", d.OBJECT = "OBJECT", d.NULL = "NULL";
			})(v ||= {});
			var b;
			(function(d) {
				d.HARM_CATEGORY_UNSPECIFIED = "HARM_CATEGORY_UNSPECIFIED", d.HARM_CATEGORY_HATE_SPEECH = "HARM_CATEGORY_HATE_SPEECH", d.HARM_CATEGORY_DANGEROUS_CONTENT = "HARM_CATEGORY_DANGEROUS_CONTENT", d.HARM_CATEGORY_HARASSMENT = "HARM_CATEGORY_HARASSMENT", d.HARM_CATEGORY_SEXUALLY_EXPLICIT = "HARM_CATEGORY_SEXUALLY_EXPLICIT", d.HARM_CATEGORY_CIVIC_INTEGRITY = "HARM_CATEGORY_CIVIC_INTEGRITY", d.HARM_CATEGORY_IMAGE_HATE = "HARM_CATEGORY_IMAGE_HATE", d.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT = "HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT", d.HARM_CATEGORY_IMAGE_HARASSMENT = "HARM_CATEGORY_IMAGE_HARASSMENT", d.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT = "HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT";
			})(b ||= {});
			var x;
			(function(d) {
				d.HARM_BLOCK_METHOD_UNSPECIFIED = "HARM_BLOCK_METHOD_UNSPECIFIED", d.SEVERITY = "SEVERITY", d.PROBABILITY = "PROBABILITY";
			})(x ||= {});
			var C;
			(function(d) {
				d.HARM_BLOCK_THRESHOLD_UNSPECIFIED = "HARM_BLOCK_THRESHOLD_UNSPECIFIED", d.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", d.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", d.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", d.BLOCK_NONE = "BLOCK_NONE", d.OFF = "OFF";
			})(C ||= {});
			var w;
			(function(d) {
				d.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", d.MODE_DYNAMIC = "MODE_DYNAMIC";
			})(w ||= {});
			var T;
			(function(d) {
				d.AUTH_TYPE_UNSPECIFIED = "AUTH_TYPE_UNSPECIFIED", d.NO_AUTH = "NO_AUTH", d.API_KEY_AUTH = "API_KEY_AUTH", d.HTTP_BASIC_AUTH = "HTTP_BASIC_AUTH", d.GOOGLE_SERVICE_ACCOUNT_AUTH = "GOOGLE_SERVICE_ACCOUNT_AUTH", d.OAUTH = "OAUTH", d.OIDC_AUTH = "OIDC_AUTH";
			})(T ||= {});
			var E;
			(function(d) {
				d.API_SPEC_UNSPECIFIED = "API_SPEC_UNSPECIFIED", d.SIMPLE_SEARCH = "SIMPLE_SEARCH", d.ELASTIC_SEARCH = "ELASTIC_SEARCH";
			})(E ||= {});
			var D;
			(function(d) {
				d.URL_RETRIEVAL_STATUS_UNSPECIFIED = "URL_RETRIEVAL_STATUS_UNSPECIFIED", d.URL_RETRIEVAL_STATUS_SUCCESS = "URL_RETRIEVAL_STATUS_SUCCESS", d.URL_RETRIEVAL_STATUS_ERROR = "URL_RETRIEVAL_STATUS_ERROR", d.URL_RETRIEVAL_STATUS_PAYWALL = "URL_RETRIEVAL_STATUS_PAYWALL", d.URL_RETRIEVAL_STATUS_UNSAFE = "URL_RETRIEVAL_STATUS_UNSAFE";
			})(D ||= {});
			var O;
			(function(d) {
				d.FINISH_REASON_UNSPECIFIED = "FINISH_REASON_UNSPECIFIED", d.STOP = "STOP", d.MAX_TOKENS = "MAX_TOKENS", d.SAFETY = "SAFETY", d.RECITATION = "RECITATION", d.LANGUAGE = "LANGUAGE", d.OTHER = "OTHER", d.BLOCKLIST = "BLOCKLIST", d.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", d.SPII = "SPII", d.MALFORMED_FUNCTION_CALL = "MALFORMED_FUNCTION_CALL", d.IMAGE_SAFETY = "IMAGE_SAFETY", d.UNEXPECTED_TOOL_CALL = "UNEXPECTED_TOOL_CALL";
			})(O ||= {});
			var A;
			(function(d) {
				d.HARM_PROBABILITY_UNSPECIFIED = "HARM_PROBABILITY_UNSPECIFIED", d.NEGLIGIBLE = "NEGLIGIBLE", d.LOW = "LOW", d.MEDIUM = "MEDIUM", d.HIGH = "HIGH";
			})(A ||= {});
			var j;
			(function(d) {
				d.HARM_SEVERITY_UNSPECIFIED = "HARM_SEVERITY_UNSPECIFIED", d.HARM_SEVERITY_NEGLIGIBLE = "HARM_SEVERITY_NEGLIGIBLE", d.HARM_SEVERITY_LOW = "HARM_SEVERITY_LOW", d.HARM_SEVERITY_MEDIUM = "HARM_SEVERITY_MEDIUM", d.HARM_SEVERITY_HIGH = "HARM_SEVERITY_HIGH";
			})(j ||= {});
			var F;
			(function(d) {
				d.BLOCKED_REASON_UNSPECIFIED = "BLOCKED_REASON_UNSPECIFIED", d.SAFETY = "SAFETY", d.OTHER = "OTHER", d.BLOCKLIST = "BLOCKLIST", d.PROHIBITED_CONTENT = "PROHIBITED_CONTENT", d.IMAGE_SAFETY = "IMAGE_SAFETY";
			})(F ||= {});
			var U;
			(function(d) {
				d.TRAFFIC_TYPE_UNSPECIFIED = "TRAFFIC_TYPE_UNSPECIFIED", d.ON_DEMAND = "ON_DEMAND", d.PROVISIONED_THROUGHPUT = "PROVISIONED_THROUGHPUT";
			})(U ||= {});
			var W;
			(function(d) {
				d.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", d.TEXT = "TEXT", d.IMAGE = "IMAGE", d.AUDIO = "AUDIO";
			})(W ||= {});
			var G;
			(function(d) {
				d.MEDIA_RESOLUTION_UNSPECIFIED = "MEDIA_RESOLUTION_UNSPECIFIED", d.MEDIA_RESOLUTION_LOW = "MEDIA_RESOLUTION_LOW", d.MEDIA_RESOLUTION_MEDIUM = "MEDIA_RESOLUTION_MEDIUM", d.MEDIA_RESOLUTION_HIGH = "MEDIA_RESOLUTION_HIGH";
			})(G ||= {});
			var K;
			(function(d) {
				d.JOB_STATE_UNSPECIFIED = "JOB_STATE_UNSPECIFIED", d.JOB_STATE_QUEUED = "JOB_STATE_QUEUED", d.JOB_STATE_PENDING = "JOB_STATE_PENDING", d.JOB_STATE_RUNNING = "JOB_STATE_RUNNING", d.JOB_STATE_SUCCEEDED = "JOB_STATE_SUCCEEDED", d.JOB_STATE_FAILED = "JOB_STATE_FAILED", d.JOB_STATE_CANCELLING = "JOB_STATE_CANCELLING", d.JOB_STATE_CANCELLED = "JOB_STATE_CANCELLED", d.JOB_STATE_PAUSED = "JOB_STATE_PAUSED", d.JOB_STATE_EXPIRED = "JOB_STATE_EXPIRED", d.JOB_STATE_UPDATING = "JOB_STATE_UPDATING", d.JOB_STATE_PARTIALLY_SUCCEEDED = "JOB_STATE_PARTIALLY_SUCCEEDED";
			})(K ||= {});
			var q;
			(function(d) {
				d.TUNING_MODE_UNSPECIFIED = "TUNING_MODE_UNSPECIFIED", d.TUNING_MODE_FULL = "TUNING_MODE_FULL", d.TUNING_MODE_PEFT_ADAPTER = "TUNING_MODE_PEFT_ADAPTER";
			})(q ||= {});
			var J;
			(function(d) {
				d.ADAPTER_SIZE_UNSPECIFIED = "ADAPTER_SIZE_UNSPECIFIED", d.ADAPTER_SIZE_ONE = "ADAPTER_SIZE_ONE", d.ADAPTER_SIZE_TWO = "ADAPTER_SIZE_TWO", d.ADAPTER_SIZE_FOUR = "ADAPTER_SIZE_FOUR", d.ADAPTER_SIZE_EIGHT = "ADAPTER_SIZE_EIGHT", d.ADAPTER_SIZE_SIXTEEN = "ADAPTER_SIZE_SIXTEEN", d.ADAPTER_SIZE_THIRTY_TWO = "ADAPTER_SIZE_THIRTY_TWO";
			})(J ||= {});
			var Y;
			(function(d) {
				d.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED = "FEATURE_SELECTION_PREFERENCE_UNSPECIFIED", d.PRIORITIZE_QUALITY = "PRIORITIZE_QUALITY", d.BALANCED = "BALANCED", d.PRIORITIZE_COST = "PRIORITIZE_COST";
			})(Y ||= {});
			var X;
			(function(d) {
				d.UNSPECIFIED = "UNSPECIFIED", d.BLOCKING = "BLOCKING", d.NON_BLOCKING = "NON_BLOCKING";
			})(X ||= {});
			var Z;
			(function(d) {
				d.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", d.MODE_DYNAMIC = "MODE_DYNAMIC";
			})(Z ||= {});
			var Q;
			(function(d) {
				d.ENVIRONMENT_UNSPECIFIED = "ENVIRONMENT_UNSPECIFIED", d.ENVIRONMENT_BROWSER = "ENVIRONMENT_BROWSER";
			})(Q ||= {});
			var $;
			(function(d) {
				d.MODE_UNSPECIFIED = "MODE_UNSPECIFIED", d.AUTO = "AUTO", d.ANY = "ANY", d.NONE = "NONE", d.VALIDATED = "VALIDATED";
			})($ ||= {});
			var ee;
			(function(d) {
				d.BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE", d.BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE", d.BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH", d.BLOCK_NONE = "BLOCK_NONE";
			})(ee ||= {});
			var te;
			(function(d) {
				d.DONT_ALLOW = "DONT_ALLOW", d.ALLOW_ADULT = "ALLOW_ADULT", d.ALLOW_ALL = "ALLOW_ALL";
			})(te ||= {});
			var ne;
			(function(d) {
				d.auto = "auto", d.en = "en", d.ja = "ja", d.ko = "ko", d.hi = "hi", d.zh = "zh", d.pt = "pt", d.es = "es";
			})(ne ||= {});
			var re;
			(function(d) {
				d.MASK_MODE_DEFAULT = "MASK_MODE_DEFAULT", d.MASK_MODE_USER_PROVIDED = "MASK_MODE_USER_PROVIDED", d.MASK_MODE_BACKGROUND = "MASK_MODE_BACKGROUND", d.MASK_MODE_FOREGROUND = "MASK_MODE_FOREGROUND", d.MASK_MODE_SEMANTIC = "MASK_MODE_SEMANTIC";
			})(re ||= {});
			var ie;
			(function(d) {
				d.CONTROL_TYPE_DEFAULT = "CONTROL_TYPE_DEFAULT", d.CONTROL_TYPE_CANNY = "CONTROL_TYPE_CANNY", d.CONTROL_TYPE_SCRIBBLE = "CONTROL_TYPE_SCRIBBLE", d.CONTROL_TYPE_FACE_MESH = "CONTROL_TYPE_FACE_MESH";
			})(ie ||= {});
			var ae;
			(function(d) {
				d.SUBJECT_TYPE_DEFAULT = "SUBJECT_TYPE_DEFAULT", d.SUBJECT_TYPE_PERSON = "SUBJECT_TYPE_PERSON", d.SUBJECT_TYPE_ANIMAL = "SUBJECT_TYPE_ANIMAL", d.SUBJECT_TYPE_PRODUCT = "SUBJECT_TYPE_PRODUCT";
			})(ae ||= {});
			var oe;
			(function(d) {
				d.EDIT_MODE_DEFAULT = "EDIT_MODE_DEFAULT", d.EDIT_MODE_INPAINT_REMOVAL = "EDIT_MODE_INPAINT_REMOVAL", d.EDIT_MODE_INPAINT_INSERTION = "EDIT_MODE_INPAINT_INSERTION", d.EDIT_MODE_OUTPAINT = "EDIT_MODE_OUTPAINT", d.EDIT_MODE_CONTROLLED_EDITING = "EDIT_MODE_CONTROLLED_EDITING", d.EDIT_MODE_STYLE = "EDIT_MODE_STYLE", d.EDIT_MODE_BGSWAP = "EDIT_MODE_BGSWAP", d.EDIT_MODE_PRODUCT_IMAGE = "EDIT_MODE_PRODUCT_IMAGE";
			})(oe ||= {});
			var se;
			(function(d) {
				d.FOREGROUND = "FOREGROUND", d.BACKGROUND = "BACKGROUND", d.PROMPT = "PROMPT", d.SEMANTIC = "SEMANTIC", d.INTERACTIVE = "INTERACTIVE";
			})(se ||= {});
			var ce;
			(function(d) {
				d.ASSET = "ASSET", d.STYLE = "STYLE";
			})(ce ||= {});
			var le;
			(function(d) {
				d.OPTIMIZED = "OPTIMIZED", d.LOSSLESS = "LOSSLESS";
			})(le ||= {});
			var ue;
			(function(d) {
				d.STATE_UNSPECIFIED = "STATE_UNSPECIFIED", d.PROCESSING = "PROCESSING", d.ACTIVE = "ACTIVE", d.FAILED = "FAILED";
			})(ue ||= {});
			var de;
			(function(d) {
				d.SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED", d.UPLOADED = "UPLOADED", d.GENERATED = "GENERATED";
			})(de ||= {});
			var fe;
			(function(d) {
				d.MODALITY_UNSPECIFIED = "MODALITY_UNSPECIFIED", d.TEXT = "TEXT", d.IMAGE = "IMAGE", d.VIDEO = "VIDEO", d.AUDIO = "AUDIO", d.DOCUMENT = "DOCUMENT";
			})(fe ||= {});
			var pe;
			(function(d) {
				d.START_SENSITIVITY_UNSPECIFIED = "START_SENSITIVITY_UNSPECIFIED", d.START_SENSITIVITY_HIGH = "START_SENSITIVITY_HIGH", d.START_SENSITIVITY_LOW = "START_SENSITIVITY_LOW";
			})(pe ||= {});
			var me;
			(function(d) {
				d.END_SENSITIVITY_UNSPECIFIED = "END_SENSITIVITY_UNSPECIFIED", d.END_SENSITIVITY_HIGH = "END_SENSITIVITY_HIGH", d.END_SENSITIVITY_LOW = "END_SENSITIVITY_LOW";
			})(me ||= {});
			var he;
			(function(d) {
				d.ACTIVITY_HANDLING_UNSPECIFIED = "ACTIVITY_HANDLING_UNSPECIFIED", d.START_OF_ACTIVITY_INTERRUPTS = "START_OF_ACTIVITY_INTERRUPTS", d.NO_INTERRUPTION = "NO_INTERRUPTION";
			})(he ||= {});
			var ge;
			(function(d) {
				d.TURN_COVERAGE_UNSPECIFIED = "TURN_COVERAGE_UNSPECIFIED", d.TURN_INCLUDES_ONLY_ACTIVITY = "TURN_INCLUDES_ONLY_ACTIVITY", d.TURN_INCLUDES_ALL_INPUT = "TURN_INCLUDES_ALL_INPUT";
			})(ge ||= {});
			var _e;
			(function(d) {
				d.SCHEDULING_UNSPECIFIED = "SCHEDULING_UNSPECIFIED", d.SILENT = "SILENT", d.WHEN_IDLE = "WHEN_IDLE", d.INTERRUPT = "INTERRUPT";
			})(_e ||= {});
			var ve;
			(function(d) {
				d.SCALE_UNSPECIFIED = "SCALE_UNSPECIFIED", d.C_MAJOR_A_MINOR = "C_MAJOR_A_MINOR", d.D_FLAT_MAJOR_B_FLAT_MINOR = "D_FLAT_MAJOR_B_FLAT_MINOR", d.D_MAJOR_B_MINOR = "D_MAJOR_B_MINOR", d.E_FLAT_MAJOR_C_MINOR = "E_FLAT_MAJOR_C_MINOR", d.E_MAJOR_D_FLAT_MINOR = "E_MAJOR_D_FLAT_MINOR", d.F_MAJOR_D_MINOR = "F_MAJOR_D_MINOR", d.G_FLAT_MAJOR_E_FLAT_MINOR = "G_FLAT_MAJOR_E_FLAT_MINOR", d.G_MAJOR_E_MINOR = "G_MAJOR_E_MINOR", d.A_FLAT_MAJOR_F_MINOR = "A_FLAT_MAJOR_F_MINOR", d.A_MAJOR_G_FLAT_MINOR = "A_MAJOR_G_FLAT_MINOR", d.B_FLAT_MAJOR_G_MINOR = "B_FLAT_MAJOR_G_MINOR", d.B_MAJOR_A_FLAT_MINOR = "B_MAJOR_A_FLAT_MINOR";
			})(ve ||= {});
			var ye;
			(function(d) {
				d.MUSIC_GENERATION_MODE_UNSPECIFIED = "MUSIC_GENERATION_MODE_UNSPECIFIED", d.QUALITY = "QUALITY", d.DIVERSITY = "DIVERSITY", d.VOCALIZATION = "VOCALIZATION";
			})(ye ||= {});
			var be;
			(function(d) {
				d.PLAYBACK_CONTROL_UNSPECIFIED = "PLAYBACK_CONTROL_UNSPECIFIED", d.PLAY = "PLAY", d.PAUSE = "PAUSE", d.STOP = "STOP", d.RESET_CONTEXT = "RESET_CONTEXT";
			})(be ||= {});
			class FunctionResponse {}
			function createPartFromUri(d, f) {
				return { fileData: {
					fileUri: d,
					mimeType: f
				} };
			}
			function createPartFromText(d) {
				return { text: d };
			}
			function createPartFromFunctionCall(d, f) {
				return { functionCall: {
					name: d,
					args: f
				} };
			}
			function createPartFromFunctionResponse(d, f, p) {
				return { functionResponse: {
					id: d,
					name: f,
					response: p
				} };
			}
			function createPartFromBase64(d, f) {
				return { inlineData: {
					data: d,
					mimeType: f
				} };
			}
			function createPartFromCodeExecutionResult(d, f) {
				return { codeExecutionResult: {
					outcome: d,
					output: f
				} };
			}
			function createPartFromExecutableCode(d, f) {
				return { executableCode: {
					code: d,
					language: f
				} };
			}
			function _isPart(d) {
				return typeof d == "object" && d ? "fileData" in d || "text" in d || "functionCall" in d || "functionResponse" in d || "inlineData" in d || "videoMetadata" in d || "codeExecutionResult" in d || "executableCode" in d : !1;
			}
			function _toParts(d) {
				let f = [];
				if (typeof d == "string") f.push(createPartFromText(d));
				else if (_isPart(d)) f.push(d);
				else if (Array.isArray(d)) {
					if (d.length === 0) throw Error("partOrString cannot be an empty array");
					for (let p of d) if (typeof p == "string") f.push(createPartFromText(p));
					else if (_isPart(p)) f.push(p);
					else throw Error("element in PartUnion must be a Part object or string");
				} else throw Error("partOrString must be a Part object, string, or array");
				return f;
			}
			function createUserContent(d) {
				return {
					role: "user",
					parts: _toParts(d)
				};
			}
			function createModelContent(d) {
				return {
					role: "model",
					parts: _toParts(d)
				};
			}
			class HttpResponse {
				constructor(d) {
					let f = {};
					for (let p of d.headers.entries()) f[p[0]] = p[1];
					this.headers = f, this.responseInternal = d;
				}
				json() {
					return this.responseInternal.json();
				}
			}
			class GenerateContentResponsePromptFeedback {}
			class GenerateContentResponseUsageMetadata {}
			class GenerateContentResponse {
				get text() {
					var d, f, p, m, h, g, _, v;
					if ((m = (p = (f = (d = this.candidates)?.[0])?.content)?.parts)?.length === 0) return;
					this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning text from the first one.");
					let b = "", x = !1, C = [];
					for (let d of (v = (_ = (g = (h = this.candidates)?.[0])?.content)?.parts) ?? []) {
						for (let [f, p] of Object.entries(d)) f !== "text" && f !== "thought" && (p !== null || p !== void 0) && C.push(f);
						if (typeof d.text == "string") {
							if (typeof d.thought == "boolean" && d.thought) continue;
							x = !0, b += d.text;
						}
					}
					return C.length > 0 && console.warn(`there are non-text parts ${C} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), x ? b : void 0;
				}
				get data() {
					var d, f, p, m, h, g, _, v;
					if ((m = (p = (f = (d = this.candidates)?.[0])?.content)?.parts)?.length === 0) return;
					this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning data from the first one.");
					let b = "", x = [];
					for (let d of (v = (_ = (g = (h = this.candidates)?.[0])?.content)?.parts) ?? []) {
						for (let [f, p] of Object.entries(d)) f !== "inlineData" && (p !== null || p !== void 0) && x.push(f);
						d.inlineData && typeof d.inlineData.data == "string" && (b += atob(d.inlineData.data));
					}
					return x.length > 0 && console.warn(`there are non-data parts ${x} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), b.length > 0 ? btoa(b) : void 0;
				}
				get functionCalls() {
					var d, f, p, m, h, g, _, v;
					if ((m = (p = (f = (d = this.candidates)?.[0])?.content)?.parts)?.length === 0) return;
					this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning function calls from the first one.");
					let b = (v = (_ = (g = (h = this.candidates)?.[0])?.content)?.parts)?.filter((d) => d.functionCall).map((d) => d.functionCall).filter((d) => d !== void 0);
					if (b?.length !== 0) return b;
				}
				get executableCode() {
					var d, f, p, m, h, g, _, v, b;
					if ((m = (p = (f = (d = this.candidates)?.[0])?.content)?.parts)?.length === 0) return;
					this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning executable code from the first one.");
					let x = (v = (_ = (g = (h = this.candidates)?.[0])?.content)?.parts)?.filter((d) => d.executableCode).map((d) => d.executableCode).filter((d) => d !== void 0);
					if (x?.length !== 0) return (b = x?.[0])?.code;
				}
				get codeExecutionResult() {
					var d, f, p, m, h, g, _, v, b;
					if ((m = (p = (f = (d = this.candidates)?.[0])?.content)?.parts)?.length === 0) return;
					this.candidates && this.candidates.length > 1 && console.warn("there are multiple candidates in the response, returning code execution result from the first one.");
					let x = (v = (_ = (g = (h = this.candidates)?.[0])?.content)?.parts)?.filter((d) => d.codeExecutionResult).map((d) => d.codeExecutionResult).filter((d) => d !== void 0);
					if (x?.length !== 0) return (b = x?.[0])?.output;
				}
			}
			class EmbedContentResponse {}
			class GenerateImagesResponse {}
			class EditImageResponse {}
			class UpscaleImageResponse {}
			class RecontextImageResponse {}
			class SegmentImageResponse {}
			class ListModelsResponse {}
			class DeleteModelResponse {}
			class CountTokensResponse {}
			class ComputeTokensResponse {}
			class GenerateVideosResponse {}
			class GenerateVideosOperation {
				_fromAPIResponse({ apiResponse: d, isVertexAI: f }) {
					let p = new GenerateVideosOperation(), m, h = d;
					return m = f ? generateVideosOperationFromVertex$1(h) : generateVideosOperationFromMldev$1(h), Object.assign(p, m), p;
				}
			}
			class ListTuningJobsResponse {}
			class DeleteCachedContentResponse {}
			class ListCachedContentsResponse {}
			class ListFilesResponse {}
			class CreateFileResponse {}
			class DeleteFileResponse {}
			class InlinedResponse {}
			class SingleEmbedContentResponse {}
			class InlinedEmbedContentResponse {}
			class ListBatchJobsResponse {}
			class ReplayResponse {}
			class RawReferenceImage {
				toReferenceImageAPI() {
					let d = {
						referenceType: "REFERENCE_TYPE_RAW",
						referenceImage: this.referenceImage,
						referenceId: this.referenceId
					};
					return d;
				}
			}
			class MaskReferenceImage {
				toReferenceImageAPI() {
					let d = {
						referenceType: "REFERENCE_TYPE_MASK",
						referenceImage: this.referenceImage,
						referenceId: this.referenceId,
						maskImageConfig: this.config
					};
					return d;
				}
			}
			class ControlReferenceImage {
				toReferenceImageAPI() {
					let d = {
						referenceType: "REFERENCE_TYPE_CONTROL",
						referenceImage: this.referenceImage,
						referenceId: this.referenceId,
						controlImageConfig: this.config
					};
					return d;
				}
			}
			class StyleReferenceImage {
				toReferenceImageAPI() {
					let d = {
						referenceType: "REFERENCE_TYPE_STYLE",
						referenceImage: this.referenceImage,
						referenceId: this.referenceId,
						styleImageConfig: this.config
					};
					return d;
				}
			}
			class SubjectReferenceImage {
				toReferenceImageAPI() {
					let d = {
						referenceType: "REFERENCE_TYPE_SUBJECT",
						referenceImage: this.referenceImage,
						referenceId: this.referenceId,
						subjectImageConfig: this.config
					};
					return d;
				}
			}
			class LiveServerMessage {
				get text() {
					var d, f, p;
					let m = "", h = !1, g = [];
					for (let _ of (p = (f = (d = this.serverContent)?.modelTurn)?.parts) ?? []) {
						for (let [d, f] of Object.entries(_)) d !== "text" && d !== "thought" && f !== null && g.push(d);
						if (typeof _.text == "string") {
							if (typeof _.thought == "boolean" && _.thought) continue;
							h = !0, m += _.text;
						}
					}
					return g.length > 0 && console.warn(`there are non-text parts ${g} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`), h ? m : void 0;
				}
				get data() {
					var d, f, p;
					let m = "", h = [];
					for (let g of (p = (f = (d = this.serverContent)?.modelTurn)?.parts) ?? []) {
						for (let [d, f] of Object.entries(g)) d !== "inlineData" && f !== null && h.push(d);
						g.inlineData && typeof g.inlineData.data == "string" && (m += atob(g.inlineData.data));
					}
					return h.length > 0 && console.warn(`there are non-data parts ${h} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`), m.length > 0 ? btoa(m) : void 0;
				}
			}
			class LiveClientToolResponse {}
			class LiveSendToolResponseParameters {
				constructor() {
					this.functionResponses = [];
				}
			}
			class LiveMusicServerMessage {
				get audioChunk() {
					if (this.serverContent && this.serverContent.audioChunks && this.serverContent.audioChunks.length > 0) return this.serverContent.audioChunks[0];
				}
			}
			function tModel(d, f) {
				if (!f || typeof f != "string") throw Error("model is required and must be a string");
				if (d.isVertexAI()) {
					if (f.startsWith("publishers/") || f.startsWith("projects/") || f.startsWith("models/")) return f;
					if (f.indexOf("/") >= 0) {
						let d = f.split("/", 2);
						return `publishers/${d[0]}/models/${d[1]}`;
					} else return `publishers/google/models/${f}`;
				} else return f.startsWith("models/") || f.startsWith("tunedModels/") ? f : `models/${f}`;
			}
			function tCachesModel(d, f) {
				let p = tModel(d, f);
				return p ? p.startsWith("publishers/") && d.isVertexAI() ? `projects/${d.getProject()}/locations/${d.getLocation()}/${p}` : p.startsWith("models/") && d.isVertexAI() ? `projects/${d.getProject()}/locations/${d.getLocation()}/publishers/google/${p}` : p : "";
			}
			function tBlobs(d) {
				return Array.isArray(d) ? d.map((d) => tBlob(d)) : [tBlob(d)];
			}
			function tBlob(d) {
				if (typeof d == "object" && d) return d;
				throw Error(`Could not parse input as Blob. Unsupported blob type: ${typeof d}`);
			}
			function tImageBlob(d) {
				let f = tBlob(d);
				if (f.mimeType && f.mimeType.startsWith("image/")) return f;
				throw Error(`Unsupported mime type: ${f.mimeType}`);
			}
			function tAudioBlob(d) {
				let f = tBlob(d);
				if (f.mimeType && f.mimeType.startsWith("audio/")) return f;
				throw Error(`Unsupported mime type: ${f.mimeType}`);
			}
			function tPart(d) {
				if (d == null) throw Error("PartUnion is required");
				if (typeof d == "object") return d;
				if (typeof d == "string") return { text: d };
				throw Error(`Unsupported part type: ${typeof d}`);
			}
			function tParts(d) {
				if (d == null || Array.isArray(d) && d.length === 0) throw Error("PartListUnion is required");
				return Array.isArray(d) ? d.map((d) => tPart(d)) : [tPart(d)];
			}
			function _isContent(d) {
				return typeof d == "object" && !!d && "parts" in d && Array.isArray(d.parts);
			}
			function _isFunctionCallPart(d) {
				return typeof d == "object" && !!d && "functionCall" in d;
			}
			function _isFunctionResponsePart(d) {
				return typeof d == "object" && !!d && "functionResponse" in d;
			}
			function tContent(d) {
				if (d == null) throw Error("ContentUnion is required");
				return _isContent(d) ? d : {
					role: "user",
					parts: tParts(d)
				};
			}
			function tContentsForEmbed(d, f) {
				if (!f) return [];
				if (d.isVertexAI() && Array.isArray(f)) return f.flatMap((d) => {
					let f = tContent(d);
					return f.parts && f.parts.length > 0 && f.parts[0].text !== void 0 ? [f.parts[0].text] : [];
				});
				if (d.isVertexAI()) {
					let d = tContent(f);
					return d.parts && d.parts.length > 0 && d.parts[0].text !== void 0 ? [d.parts[0].text] : [];
				}
				return Array.isArray(f) ? f.map((d) => tContent(d)) : [tContent(f)];
			}
			function tContents(d) {
				if (d == null || Array.isArray(d) && d.length === 0) throw Error("contents are required");
				if (!Array.isArray(d)) {
					if (_isFunctionCallPart(d) || _isFunctionResponsePart(d)) throw Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");
					return [tContent(d)];
				}
				let f = [], p = [], m = _isContent(d[0]);
				for (let h of d) {
					let d = _isContent(h);
					if (d != m) throw Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");
					if (d) f.push(h);
					else if (_isFunctionCallPart(h) || _isFunctionResponsePart(h)) throw Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");
					else p.push(h);
				}
				return m || f.push({
					role: "user",
					parts: tParts(p)
				}), f;
			}
			function flattenTypeArrayToAnyOf(d, f) {
				d.includes("null") && (f.nullable = !0);
				let p = d.filter((d) => d !== "null");
				if (p.length === 1) f.type = Object.values(v).includes(p[0].toUpperCase()) ? p[0].toUpperCase() : v.TYPE_UNSPECIFIED;
				else {
					f.anyOf = [];
					for (let d of p) f.anyOf.push({ type: Object.values(v).includes(d.toUpperCase()) ? d.toUpperCase() : v.TYPE_UNSPECIFIED });
				}
			}
			function processJsonSchema(d) {
				let f = {}, p = ["items"], m = ["anyOf"], h = ["properties"];
				if (d.type && d.anyOf) throw Error("type and anyOf cannot be both populated.");
				let g = d.anyOf;
				g != null && g.length == 2 && (g[0].type === "null" ? (f.nullable = !0, d = g[1]) : g[1].type === "null" && (f.nullable = !0, d = g[0])), d.type instanceof Array && flattenTypeArrayToAnyOf(d.type, f);
				for (let [g, _] of Object.entries(d)) {
					if (_ == null) continue;
					if (g == "type") {
						if (_ === "null") throw Error("type: null can not be the only possible type for the field.");
						if (_ instanceof Array) continue;
						f.type = Object.values(v).includes(_.toUpperCase()) ? _.toUpperCase() : v.TYPE_UNSPECIFIED;
					} else if (p.includes(g)) f[g] = processJsonSchema(_);
					else if (m.includes(g)) {
						let d = [];
						for (let p of _) {
							if (p.type == "null") {
								f.nullable = !0;
								continue;
							}
							d.push(processJsonSchema(p));
						}
						f[g] = d;
					} else if (h.includes(g)) {
						let d = {};
						for (let [f, p] of Object.entries(_)) d[f] = processJsonSchema(p);
						f[g] = d;
					} else {
						if (g === "additionalProperties") continue;
						f[g] = _;
					}
				}
				return f;
			}
			function tSchema(d) {
				return processJsonSchema(d);
			}
			function tSpeechConfig(d) {
				if (typeof d == "object") return d;
				if (typeof d == "string") return { voiceConfig: { prebuiltVoiceConfig: { voiceName: d } } };
				throw Error(`Unsupported speechConfig type: ${typeof d}`);
			}
			function tLiveSpeechConfig(d) {
				if ("multiSpeakerVoiceConfig" in d) throw Error("multiSpeakerVoiceConfig is not supported in the live API.");
				return d;
			}
			function tTool(d) {
				if (d.functionDeclarations) for (let f of d.functionDeclarations) f.parameters && (Object.keys(f.parameters).includes("$schema") ? f.parametersJsonSchema || (f.parametersJsonSchema = f.parameters, delete f.parameters) : f.parameters = processJsonSchema(f.parameters)), f.response && (Object.keys(f.response).includes("$schema") ? f.responseJsonSchema || (f.responseJsonSchema = f.response, delete f.response) : f.response = processJsonSchema(f.response));
				return d;
			}
			function tTools(d) {
				if (d == null) throw Error("tools is required");
				if (!Array.isArray(d)) throw Error("tools is required and must be an array of Tools");
				let f = [];
				for (let p of d) f.push(p);
				return f;
			}
			function resourceName(d, f, p, m = 1) {
				let h = !f.startsWith(`${p}/`) && f.split("/").length === m;
				return d.isVertexAI() ? f.startsWith("projects/") ? f : f.startsWith("locations/") ? `projects/${d.getProject()}/${f}` : f.startsWith(`${p}/`) ? `projects/${d.getProject()}/locations/${d.getLocation()}/${f}` : h ? `projects/${d.getProject()}/locations/${d.getLocation()}/${p}/${f}` : f : h ? `${p}/${f}` : f;
			}
			function tCachedContentName(d, f) {
				if (typeof f != "string") throw Error("name must be a string");
				return resourceName(d, f, "cachedContents");
			}
			function tTuningJobStatus(d) {
				switch (d) {
					case "STATE_UNSPECIFIED": return "JOB_STATE_UNSPECIFIED";
					case "CREATING": return "JOB_STATE_RUNNING";
					case "ACTIVE": return "JOB_STATE_SUCCEEDED";
					case "FAILED": return "JOB_STATE_FAILED";
					default: return d;
				}
			}
			function tBytes(d) {
				return tBytes$1(d);
			}
			function _isFile(d) {
				return typeof d == "object" && !!d && "name" in d;
			}
			function isGeneratedVideo(d) {
				return typeof d == "object" && !!d && "video" in d;
			}
			function isVideo(d) {
				return typeof d == "object" && !!d && "uri" in d;
			}
			function tFileName(d) {
				var f;
				let p;
				if (_isFile(d) && (p = d.name), !(isVideo(d) && (p = d.uri, p === void 0)) && !(isGeneratedVideo(d) && (p = (f = d.video)?.uri, p === void 0))) {
					if (typeof d == "string" && (p = d), p === void 0) throw Error("Could not extract file name from the provided input.");
					if (p.startsWith("https://")) {
						let d = p.split("files/")[1], f = d.match(/[a-z0-9]+/);
						if (f === null) throw Error(`Could not extract file name from URI ${p}`);
						p = f[0];
					} else p.startsWith("files/") && (p = p.split("files/")[1]);
					return p;
				}
			}
			function tModelsUrl(d, f) {
				let p;
				return p = d.isVertexAI() ? f ? "publishers/google/models" : "models" : f ? "models" : "tunedModels", p;
			}
			function tExtractModels(d) {
				for (let f of [
					"models",
					"tunedModels",
					"publisherModels"
				]) if (hasField(d, f)) return d[f];
				return [];
			}
			function hasField(d, f) {
				return typeof d == "object" && !!d && f in d;
			}
			function mcpToGeminiTool(d, f = {}) {
				let p = d, m = {
					name: p.name,
					description: p.description,
					parametersJsonSchema: p.inputSchema
				};
				p.outputSchema && (m.responseJsonSchema = p.outputSchema), f.behavior && (m.behavior = f.behavior);
				let h = { functionDeclarations: [m] };
				return h;
			}
			function mcpToolsToGeminiTool(d, f = {}) {
				let p = [], m = new Set();
				for (let h of d) {
					let d = h.name;
					if (m.has(d)) throw Error(`Duplicate function name ${d} found in MCP tools. Please ensure function names are unique.`);
					m.add(d);
					let g = mcpToGeminiTool(h, f);
					g.functionDeclarations && p.push(...g.functionDeclarations);
				}
				return { functionDeclarations: p };
			}
			function tBatchJobSource(d, f) {
				let p;
				if (typeof f == "string") if (d.isVertexAI()) if (f.startsWith("gs://")) p = {
					format: "jsonl",
					gcsUri: [f]
				};
				else if (f.startsWith("bq://")) p = {
					format: "bigquery",
					bigqueryUri: f
				};
				else throw Error(`Unsupported string source for Vertex AI: ${f}`);
				else if (f.startsWith("files/")) p = { fileName: f };
				else throw Error(`Unsupported string source for Gemini API: ${f}`);
				else if (Array.isArray(f)) {
					if (d.isVertexAI()) throw Error("InlinedRequest[] is not supported in Vertex AI.");
					p = { inlinedRequests: f };
				} else p = f;
				let m = [p.gcsUri, p.bigqueryUri].filter(Boolean).length, h = [p.inlinedRequests, p.fileName].filter(Boolean).length;
				if (d.isVertexAI()) {
					if (h > 0 || m !== 1) throw Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.");
				} else if (m > 0 || h !== 1) throw Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");
				return p;
			}
			function tBatchJobDestination(d) {
				if (typeof d != "string") return d;
				let f = d;
				if (f.startsWith("gs://")) return {
					format: "jsonl",
					gcsUri: f
				};
				if (f.startsWith("bq://")) return {
					format: "bigquery",
					bigqueryUri: f
				};
				throw Error(`Unsupported destination: ${f}`);
			}
			function tRecvBatchJobDestination(d) {
				if (typeof d != "object" || !d) return {};
				let f = d, p = f.inlinedResponses;
				if (typeof p != "object" || !p) return d;
				let m = p, h = m.inlinedResponses;
				if (!Array.isArray(h) || h.length === 0) return d;
				let g = !1;
				for (let d of h) {
					if (typeof d != "object" || !d) continue;
					let f = d, p = f.response;
					if (typeof p != "object" || !p) continue;
					let m = p;
					if (m.embedding !== void 0) {
						g = !0;
						break;
					}
				}
				return g && (f.inlinedEmbedContentResponses = f.inlinedResponses, delete f.inlinedResponses), d;
			}
			function tBatchJobName(d, f) {
				let p = f;
				if (!d.isVertexAI()) {
					let d = /batches\/[^/]+$/;
					if (d.test(p)) return p.split("/").pop();
					throw Error(`Invalid batch job name: ${p}.`);
				}
				let m = /^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/;
				if (m.test(p)) return p.split("/").pop();
				if (/^\d+$/.test(p)) return p;
				throw Error(`Invalid batch job name: ${p}.`);
			}
			function tJobState(d) {
				let f = d;
				return f === "BATCH_STATE_UNSPECIFIED" ? "JOB_STATE_UNSPECIFIED" : f === "BATCH_STATE_PENDING" ? "JOB_STATE_PENDING" : f === "BATCH_STATE_SUCCEEDED" ? "JOB_STATE_SUCCEEDED" : f === "BATCH_STATE_FAILED" ? "JOB_STATE_FAILED" : f === "BATCH_STATE_CANCELLED" ? "JOB_STATE_CANCELLED" : f;
			}
			function videoMetadataToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToMldev$4(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataToMldev$4(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToMldev$4(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToMldev$4(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToMldev$4(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToMldev$4(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToMldev$4(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function schemaToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["anyOf"]);
				p != null && setValueByPath(f, ["anyOf"], p);
				let m = getValueByPath(d, ["default"]);
				m != null && setValueByPath(f, ["default"], m);
				let h = getValueByPath(d, ["description"]);
				h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["enum"]);
				g != null && setValueByPath(f, ["enum"], g);
				let _ = getValueByPath(d, ["example"]);
				_ != null && setValueByPath(f, ["example"], _);
				let v = getValueByPath(d, ["format"]);
				v != null && setValueByPath(f, ["format"], v);
				let b = getValueByPath(d, ["items"]);
				b != null && setValueByPath(f, ["items"], b);
				let x = getValueByPath(d, ["maxItems"]);
				x != null && setValueByPath(f, ["maxItems"], x);
				let C = getValueByPath(d, ["maxLength"]);
				C != null && setValueByPath(f, ["maxLength"], C);
				let w = getValueByPath(d, ["maxProperties"]);
				w != null && setValueByPath(f, ["maxProperties"], w);
				let T = getValueByPath(d, ["maximum"]);
				T != null && setValueByPath(f, ["maximum"], T);
				let E = getValueByPath(d, ["minItems"]);
				E != null && setValueByPath(f, ["minItems"], E);
				let D = getValueByPath(d, ["minLength"]);
				D != null && setValueByPath(f, ["minLength"], D);
				let O = getValueByPath(d, ["minProperties"]);
				O != null && setValueByPath(f, ["minProperties"], O);
				let A = getValueByPath(d, ["minimum"]);
				A != null && setValueByPath(f, ["minimum"], A);
				let j = getValueByPath(d, ["nullable"]);
				j != null && setValueByPath(f, ["nullable"], j);
				let F = getValueByPath(d, ["pattern"]);
				F != null && setValueByPath(f, ["pattern"], F);
				let U = getValueByPath(d, ["properties"]);
				U != null && setValueByPath(f, ["properties"], U);
				let W = getValueByPath(d, ["propertyOrdering"]);
				W != null && setValueByPath(f, ["propertyOrdering"], W);
				let G = getValueByPath(d, ["required"]);
				G != null && setValueByPath(f, ["required"], G);
				let K = getValueByPath(d, ["title"]);
				K != null && setValueByPath(f, ["title"], K);
				let q = getValueByPath(d, ["type"]);
				return q != null && setValueByPath(f, ["type"], q), f;
			}
			function safetySettingToMldev$1(d) {
				let f = {};
				if (getValueByPath(d, ["method"]) !== void 0) throw Error("method parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["category"]);
				p != null && setValueByPath(f, ["category"], p);
				let m = getValueByPath(d, ["threshold"]);
				return m != null && setValueByPath(f, ["threshold"], m), f;
			}
			function functionDeclarationToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["behavior"]);
				p != null && setValueByPath(f, ["behavior"], p);
				let m = getValueByPath(d, ["description"]);
				m != null && setValueByPath(f, ["description"], m);
				let h = getValueByPath(d, ["name"]);
				h != null && setValueByPath(f, ["name"], h);
				let g = getValueByPath(d, ["parameters"]);
				g != null && setValueByPath(f, ["parameters"], g);
				let _ = getValueByPath(d, ["parametersJsonSchema"]);
				_ != null && setValueByPath(f, ["parametersJsonSchema"], _);
				let v = getValueByPath(d, ["response"]);
				v != null && setValueByPath(f, ["response"], v);
				let b = getValueByPath(d, ["responseJsonSchema"]);
				return b != null && setValueByPath(f, ["responseJsonSchema"], b), f;
			}
			function intervalToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				if (p != null && setValueByPath(f, ["timeRangeFilter"], intervalToMldev$4(p)), getValueByPath(d, ["excludeDomains"]) !== void 0) throw Error("excludeDomains parameter is not supported in Gemini API.");
				return f;
			}
			function dynamicRetrievalConfigToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$4(p)), f;
			}
			function urlContextToMldev$4() {
				let d = {};
				return d;
			}
			function toolComputerUseToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToMldev$4(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToMldev$4(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				if (getValueByPath(d, ["retrieval"]) !== void 0) throw Error("retrieval parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["googleSearch"]);
				m != null && setValueByPath(f, ["googleSearch"], googleSearchToMldev$4(m));
				let h = getValueByPath(d, ["googleSearchRetrieval"]);
				if (h != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$4(h)), getValueByPath(d, ["enterpriseWebSearch"]) !== void 0) throw Error("enterpriseWebSearch parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["googleMaps"]) !== void 0) throw Error("googleMaps parameter is not supported in Gemini API.");
				let g = getValueByPath(d, ["urlContext"]);
				g != null && setValueByPath(f, ["urlContext"], urlContextToMldev$4());
				let _ = getValueByPath(d, ["computerUse"]);
				_ != null && setValueByPath(f, ["computerUse"], toolComputerUseToMldev$4(_));
				let v = getValueByPath(d, ["codeExecution"]);
				return v != null && setValueByPath(f, ["codeExecution"], v), f;
			}
			function functionCallingConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["allowedFunctionNames"]);
				return m != null && setValueByPath(f, ["allowedFunctionNames"], m), f;
			}
			function latLngToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["latitude"]);
				p != null && setValueByPath(f, ["latitude"], p);
				let m = getValueByPath(d, ["longitude"]);
				return m != null && setValueByPath(f, ["longitude"], m), f;
			}
			function retrievalConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["latLng"]);
				p != null && setValueByPath(f, ["latLng"], latLngToMldev$2(p));
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function toolConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["functionCallingConfig"]);
				p != null && setValueByPath(f, ["functionCallingConfig"], functionCallingConfigToMldev$2(p));
				let m = getValueByPath(d, ["retrievalConfig"]);
				return m != null && setValueByPath(f, ["retrievalConfig"], retrievalConfigToMldev$2(m)), f;
			}
			function prebuiltVoiceConfigToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["voiceName"]);
				return p != null && setValueByPath(f, ["voiceName"], p), f;
			}
			function voiceConfigToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["prebuiltVoiceConfig"]);
				return p != null && setValueByPath(f, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev$3(p)), f;
			}
			function speakerVoiceConfigToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["speaker"]);
				p != null && setValueByPath(f, ["speaker"], p);
				let m = getValueByPath(d, ["voiceConfig"]);
				return m != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev$3(m)), f;
			}
			function multiSpeakerVoiceConfigToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["speakerVoiceConfigs"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => speakerVoiceConfigToMldev$3(d))), setValueByPath(f, ["speakerVoiceConfigs"], d);
				}
				return f;
			}
			function speechConfigToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["voiceConfig"]);
				p != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev$3(p));
				let m = getValueByPath(d, ["multiSpeakerVoiceConfig"]);
				m != null && setValueByPath(f, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev$3(m));
				let h = getValueByPath(d, ["languageCode"]);
				return h != null && setValueByPath(f, ["languageCode"], h), f;
			}
			function thinkingConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["includeThoughts"]);
				p != null && setValueByPath(f, ["includeThoughts"], p);
				let m = getValueByPath(d, ["thinkingBudget"]);
				return m != null && setValueByPath(f, ["thinkingBudget"], m), f;
			}
			function generateContentConfigToMldev$1(d, f, p) {
				let m = {}, h = getValueByPath(f, ["systemInstruction"]);
				p !== void 0 && h != null && setValueByPath(p, ["systemInstruction"], contentToMldev$4(tContent(h)));
				let g = getValueByPath(f, ["temperature"]);
				g != null && setValueByPath(m, ["temperature"], g);
				let _ = getValueByPath(f, ["topP"]);
				_ != null && setValueByPath(m, ["topP"], _);
				let v = getValueByPath(f, ["topK"]);
				v != null && setValueByPath(m, ["topK"], v);
				let b = getValueByPath(f, ["candidateCount"]);
				b != null && setValueByPath(m, ["candidateCount"], b);
				let x = getValueByPath(f, ["maxOutputTokens"]);
				x != null && setValueByPath(m, ["maxOutputTokens"], x);
				let C = getValueByPath(f, ["stopSequences"]);
				C != null && setValueByPath(m, ["stopSequences"], C);
				let w = getValueByPath(f, ["responseLogprobs"]);
				w != null && setValueByPath(m, ["responseLogprobs"], w);
				let T = getValueByPath(f, ["logprobs"]);
				T != null && setValueByPath(m, ["logprobs"], T);
				let E = getValueByPath(f, ["presencePenalty"]);
				E != null && setValueByPath(m, ["presencePenalty"], E);
				let D = getValueByPath(f, ["frequencyPenalty"]);
				D != null && setValueByPath(m, ["frequencyPenalty"], D);
				let O = getValueByPath(f, ["seed"]);
				O != null && setValueByPath(m, ["seed"], O);
				let A = getValueByPath(f, ["responseMimeType"]);
				A != null && setValueByPath(m, ["responseMimeType"], A);
				let j = getValueByPath(f, ["responseSchema"]);
				j != null && setValueByPath(m, ["responseSchema"], schemaToMldev$1(tSchema(j)));
				let F = getValueByPath(f, ["responseJsonSchema"]);
				if (F != null && setValueByPath(m, ["responseJsonSchema"], F), getValueByPath(f, ["routingConfig"]) !== void 0) throw Error("routingConfig parameter is not supported in Gemini API.");
				if (getValueByPath(f, ["modelSelectionConfig"]) !== void 0) throw Error("modelSelectionConfig parameter is not supported in Gemini API.");
				let U = getValueByPath(f, ["safetySettings"]);
				if (p !== void 0 && U != null) {
					let d = U;
					Array.isArray(d) && (d = d.map((d) => safetySettingToMldev$1(d))), setValueByPath(p, ["safetySettings"], d);
				}
				let W = getValueByPath(f, ["tools"]);
				if (p !== void 0 && W != null) {
					let d = tTools(W);
					Array.isArray(d) && (d = d.map((d) => toolToMldev$4(tTool(d)))), setValueByPath(p, ["tools"], d);
				}
				let G = getValueByPath(f, ["toolConfig"]);
				if (p !== void 0 && G != null && setValueByPath(p, ["toolConfig"], toolConfigToMldev$2(G)), getValueByPath(f, ["labels"]) !== void 0) throw Error("labels parameter is not supported in Gemini API.");
				let K = getValueByPath(f, ["cachedContent"]);
				p !== void 0 && K != null && setValueByPath(p, ["cachedContent"], tCachedContentName(d, K));
				let q = getValueByPath(f, ["responseModalities"]);
				q != null && setValueByPath(m, ["responseModalities"], q);
				let J = getValueByPath(f, ["mediaResolution"]);
				J != null && setValueByPath(m, ["mediaResolution"], J);
				let Y = getValueByPath(f, ["speechConfig"]);
				if (Y != null && setValueByPath(m, ["speechConfig"], speechConfigToMldev$3(tSpeechConfig(Y))), getValueByPath(f, ["audioTimestamp"]) !== void 0) throw Error("audioTimestamp parameter is not supported in Gemini API.");
				let X = getValueByPath(f, ["thinkingConfig"]);
				return X != null && setValueByPath(m, ["thinkingConfig"], thinkingConfigToMldev$1(X)), m;
			}
			function inlinedRequestToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["request", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				if (h != null) {
					let d = tContents(h);
					Array.isArray(d) && (d = d.map((d) => contentToMldev$4(d))), setValueByPath(p, ["request", "contents"], d);
				}
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["request", "generationConfig"], generateContentConfigToMldev$1(d, g, p)), p;
			}
			function batchJobSourceToMldev(d, f) {
				let p = {};
				if (getValueByPath(f, ["format"]) !== void 0) throw Error("format parameter is not supported in Gemini API.");
				if (getValueByPath(f, ["gcsUri"]) !== void 0) throw Error("gcsUri parameter is not supported in Gemini API.");
				if (getValueByPath(f, ["bigqueryUri"]) !== void 0) throw Error("bigqueryUri parameter is not supported in Gemini API.");
				let m = getValueByPath(f, ["fileName"]);
				m != null && setValueByPath(p, ["fileName"], m);
				let h = getValueByPath(f, ["inlinedRequests"]);
				if (h != null) {
					let f = h;
					Array.isArray(f) && (f = f.map((f) => inlinedRequestToMldev(d, f))), setValueByPath(p, ["requests", "requests"], f);
				}
				return p;
			}
			function createBatchJobConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["displayName"]);
				if (f !== void 0 && m != null && setValueByPath(f, ["batch", "displayName"], m), getValueByPath(d, ["dest"]) !== void 0) throw Error("dest parameter is not supported in Gemini API.");
				return p;
			}
			function createBatchJobParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["src"]);
				h != null && setValueByPath(p, ["batch", "inputConfig"], batchJobSourceToMldev(d, tBatchJobSource(d, h)));
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], createBatchJobConfigToMldev(g, p)), p;
			}
			function embedContentConfigToMldev$1(d, f) {
				let p = {}, m = getValueByPath(d, ["taskType"]);
				f !== void 0 && m != null && setValueByPath(f, ["requests[]", "taskType"], m);
				let h = getValueByPath(d, ["title"]);
				f !== void 0 && h != null && setValueByPath(f, ["requests[]", "title"], h);
				let g = getValueByPath(d, ["outputDimensionality"]);
				if (f !== void 0 && g != null && setValueByPath(f, ["requests[]", "outputDimensionality"], g), getValueByPath(d, ["mimeType"]) !== void 0) throw Error("mimeType parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["autoTruncate"]) !== void 0) throw Error("autoTruncate parameter is not supported in Gemini API.");
				return p;
			}
			function embedContentBatchToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["contents"]);
				m != null && setValueByPath(p, [
					"requests[]",
					"request",
					"content"
				], tContentsForEmbed(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], embedContentConfigToMldev$1(h, p)), p;
			}
			function embeddingsBatchJobSourceToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["fileName"]);
				m != null && setValueByPath(p, ["file_name"], m);
				let h = getValueByPath(f, ["inlinedRequests"]);
				return h != null && setValueByPath(p, ["requests"], embedContentBatchToMldev(d, h)), p;
			}
			function createEmbeddingsBatchJobConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["displayName"]);
				return f !== void 0 && m != null && setValueByPath(f, ["batch", "displayName"], m), p;
			}
			function createEmbeddingsBatchJobParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["src"]);
				h != null && setValueByPath(p, ["batch", "inputConfig"], embeddingsBatchJobSourceToMldev(d, h));
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], createEmbeddingsBatchJobConfigToMldev(g, p)), p;
			}
			function getBatchJobParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tBatchJobName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function cancelBatchJobParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tBatchJobName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function listBatchJobsConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				if (f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h), getValueByPath(d, ["filter"]) !== void 0) throw Error("filter parameter is not supported in Gemini API.");
				return p;
			}
			function listBatchJobsParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listBatchJobsConfigToMldev(p, f)), f;
			}
			function deleteBatchJobParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tBatchJobName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function batchJobSourceToVertex(d) {
				let f = {}, p = getValueByPath(d, ["format"]);
				p != null && setValueByPath(f, ["instancesFormat"], p);
				let m = getValueByPath(d, ["gcsUri"]);
				m != null && setValueByPath(f, ["gcsSource", "uris"], m);
				let h = getValueByPath(d, ["bigqueryUri"]);
				if (h != null && setValueByPath(f, ["bigquerySource", "inputUri"], h), getValueByPath(d, ["fileName"]) !== void 0) throw Error("fileName parameter is not supported in Vertex AI.");
				if (getValueByPath(d, ["inlinedRequests"]) !== void 0) throw Error("inlinedRequests parameter is not supported in Vertex AI.");
				return f;
			}
			function batchJobDestinationToVertex(d) {
				let f = {}, p = getValueByPath(d, ["format"]);
				p != null && setValueByPath(f, ["predictionsFormat"], p);
				let m = getValueByPath(d, ["gcsUri"]);
				m != null && setValueByPath(f, ["gcsDestination", "outputUriPrefix"], m);
				let h = getValueByPath(d, ["bigqueryUri"]);
				if (h != null && setValueByPath(f, ["bigqueryDestination", "outputUri"], h), getValueByPath(d, ["fileName"]) !== void 0) throw Error("fileName parameter is not supported in Vertex AI.");
				if (getValueByPath(d, ["inlinedResponses"]) !== void 0) throw Error("inlinedResponses parameter is not supported in Vertex AI.");
				if (getValueByPath(d, ["inlinedEmbedContentResponses"]) !== void 0) throw Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");
				return f;
			}
			function createBatchJobConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["displayName"]);
				f !== void 0 && m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["dest"]);
				return f !== void 0 && h != null && setValueByPath(f, ["outputConfig"], batchJobDestinationToVertex(tBatchJobDestination(h))), p;
			}
			function createBatchJobParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["model"], tModel(d, m));
				let h = getValueByPath(f, ["src"]);
				h != null && setValueByPath(p, ["inputConfig"], batchJobSourceToVertex(tBatchJobSource(d, h)));
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], createBatchJobConfigToVertex(g, p)), p;
			}
			function getBatchJobParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tBatchJobName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function cancelBatchJobParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tBatchJobName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function listBatchJobsConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h);
				let g = getValueByPath(d, ["filter"]);
				return f !== void 0 && g != null && setValueByPath(f, ["_query", "filter"], g), p;
			}
			function listBatchJobsParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listBatchJobsConfigToVertex(p, f)), f;
			}
			function deleteBatchJobParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tBatchJobName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function videoMetadataFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataFromMldev$2(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobFromMldev$2(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataFromMldev$2(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallFromMldev$2(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partFromMldev$2(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function citationMetadataFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["citationSources"]);
				return p != null && setValueByPath(f, ["citations"], p), f;
			}
			function urlMetadataFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["retrievedUrl"]);
				p != null && setValueByPath(f, ["retrievedUrl"], p);
				let m = getValueByPath(d, ["urlRetrievalStatus"]);
				return m != null && setValueByPath(f, ["urlRetrievalStatus"], m), f;
			}
			function urlContextMetadataFromMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["urlMetadata"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => urlMetadataFromMldev$2(d))), setValueByPath(f, ["urlMetadata"], d);
				}
				return f;
			}
			function candidateFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["content"]);
				p != null && setValueByPath(f, ["content"], contentFromMldev$2(p));
				let m = getValueByPath(d, ["citationMetadata"]);
				m != null && setValueByPath(f, ["citationMetadata"], citationMetadataFromMldev$1(m));
				let h = getValueByPath(d, ["tokenCount"]);
				h != null && setValueByPath(f, ["tokenCount"], h);
				let g = getValueByPath(d, ["finishReason"]);
				g != null && setValueByPath(f, ["finishReason"], g);
				let _ = getValueByPath(d, ["urlContextMetadata"]);
				_ != null && setValueByPath(f, ["urlContextMetadata"], urlContextMetadataFromMldev$2(_));
				let v = getValueByPath(d, ["avgLogprobs"]);
				v != null && setValueByPath(f, ["avgLogprobs"], v);
				let b = getValueByPath(d, ["groundingMetadata"]);
				b != null && setValueByPath(f, ["groundingMetadata"], b);
				let x = getValueByPath(d, ["index"]);
				x != null && setValueByPath(f, ["index"], x);
				let C = getValueByPath(d, ["logprobsResult"]);
				C != null && setValueByPath(f, ["logprobsResult"], C);
				let w = getValueByPath(d, ["safetyRatings"]);
				return w != null && setValueByPath(f, ["safetyRatings"], w), f;
			}
			function generateContentResponseFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["candidates"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => candidateFromMldev$1(d))), setValueByPath(f, ["candidates"], d);
				}
				let h = getValueByPath(d, ["modelVersion"]);
				h != null && setValueByPath(f, ["modelVersion"], h);
				let g = getValueByPath(d, ["promptFeedback"]);
				g != null && setValueByPath(f, ["promptFeedback"], g);
				let _ = getValueByPath(d, ["responseId"]);
				_ != null && setValueByPath(f, ["responseId"], _);
				let v = getValueByPath(d, ["usageMetadata"]);
				return v != null && setValueByPath(f, ["usageMetadata"], v), f;
			}
			function jobErrorFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["details"]);
				p != null && setValueByPath(f, ["details"], p);
				let m = getValueByPath(d, ["code"]);
				m != null && setValueByPath(f, ["code"], m);
				let h = getValueByPath(d, ["message"]);
				return h != null && setValueByPath(f, ["message"], h), f;
			}
			function inlinedResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["response"]);
				p != null && setValueByPath(f, ["response"], generateContentResponseFromMldev$1(p));
				let m = getValueByPath(d, ["error"]);
				return m != null && setValueByPath(f, ["error"], jobErrorFromMldev(m)), f;
			}
			function contentEmbeddingFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["values"]);
				return p != null && setValueByPath(f, ["values"], p), f;
			}
			function singleEmbedContentResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["embedding"]);
				p != null && setValueByPath(f, ["embedding"], contentEmbeddingFromMldev$1(p));
				let m = getValueByPath(d, ["tokenCount"]);
				return m != null && setValueByPath(f, ["tokenCount"], m), f;
			}
			function inlinedEmbedContentResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["response"]);
				p != null && setValueByPath(f, ["response"], singleEmbedContentResponseFromMldev(p));
				let m = getValueByPath(d, ["error"]);
				return m != null && setValueByPath(f, ["error"], jobErrorFromMldev(m)), f;
			}
			function batchJobDestinationFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["responsesFile"]);
				p != null && setValueByPath(f, ["fileName"], p);
				let m = getValueByPath(d, ["inlinedResponses", "inlinedResponses"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => inlinedResponseFromMldev(d))), setValueByPath(f, ["inlinedResponses"], d);
				}
				let h = getValueByPath(d, ["inlinedEmbedContentResponses", "inlinedResponses"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => inlinedEmbedContentResponseFromMldev(d))), setValueByPath(f, ["inlinedEmbedContentResponses"], d);
				}
				return f;
			}
			function batchJobFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["metadata", "displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["metadata", "state"]);
				h != null && setValueByPath(f, ["state"], tJobState(h));
				let g = getValueByPath(d, ["metadata", "createTime"]);
				g != null && setValueByPath(f, ["createTime"], g);
				let _ = getValueByPath(d, ["metadata", "endTime"]);
				_ != null && setValueByPath(f, ["endTime"], _);
				let v = getValueByPath(d, ["metadata", "updateTime"]);
				v != null && setValueByPath(f, ["updateTime"], v);
				let b = getValueByPath(d, ["metadata", "model"]);
				b != null && setValueByPath(f, ["model"], b);
				let x = getValueByPath(d, ["metadata", "output"]);
				return x != null && setValueByPath(f, ["dest"], batchJobDestinationFromMldev(tRecvBatchJobDestination(x))), f;
			}
			function listBatchJobsResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["operations"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => batchJobFromMldev(d))), setValueByPath(f, ["batchJobs"], d);
				}
				return f;
			}
			function deleteResourceJobFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["done"]);
				h != null && setValueByPath(f, ["done"], h);
				let g = getValueByPath(d, ["error"]);
				return g != null && setValueByPath(f, ["error"], jobErrorFromMldev(g)), f;
			}
			function jobErrorFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["details"]);
				p != null && setValueByPath(f, ["details"], p);
				let m = getValueByPath(d, ["code"]);
				m != null && setValueByPath(f, ["code"], m);
				let h = getValueByPath(d, ["message"]);
				return h != null && setValueByPath(f, ["message"], h), f;
			}
			function batchJobSourceFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["instancesFormat"]);
				p != null && setValueByPath(f, ["format"], p);
				let m = getValueByPath(d, ["gcsSource", "uris"]);
				m != null && setValueByPath(f, ["gcsUri"], m);
				let h = getValueByPath(d, ["bigquerySource", "inputUri"]);
				return h != null && setValueByPath(f, ["bigqueryUri"], h), f;
			}
			function batchJobDestinationFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["predictionsFormat"]);
				p != null && setValueByPath(f, ["format"], p);
				let m = getValueByPath(d, ["gcsDestination", "outputUriPrefix"]);
				m != null && setValueByPath(f, ["gcsUri"], m);
				let h = getValueByPath(d, ["bigqueryDestination", "outputUri"]);
				return h != null && setValueByPath(f, ["bigqueryUri"], h), f;
			}
			function batchJobFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["state"]);
				h != null && setValueByPath(f, ["state"], tJobState(h));
				let g = getValueByPath(d, ["error"]);
				g != null && setValueByPath(f, ["error"], jobErrorFromVertex(g));
				let _ = getValueByPath(d, ["createTime"]);
				_ != null && setValueByPath(f, ["createTime"], _);
				let v = getValueByPath(d, ["startTime"]);
				v != null && setValueByPath(f, ["startTime"], v);
				let b = getValueByPath(d, ["endTime"]);
				b != null && setValueByPath(f, ["endTime"], b);
				let x = getValueByPath(d, ["updateTime"]);
				x != null && setValueByPath(f, ["updateTime"], x);
				let C = getValueByPath(d, ["model"]);
				C != null && setValueByPath(f, ["model"], C);
				let w = getValueByPath(d, ["inputConfig"]);
				w != null && setValueByPath(f, ["src"], batchJobSourceFromVertex(w));
				let T = getValueByPath(d, ["outputConfig"]);
				return T != null && setValueByPath(f, ["dest"], batchJobDestinationFromVertex(tRecvBatchJobDestination(T))), f;
			}
			function listBatchJobsResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["batchPredictionJobs"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => batchJobFromVertex(d))), setValueByPath(f, ["batchJobs"], d);
				}
				return f;
			}
			function deleteResourceJobFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["done"]);
				h != null && setValueByPath(f, ["done"], h);
				let g = getValueByPath(d, ["error"]);
				return g != null && setValueByPath(f, ["error"], jobErrorFromVertex(g)), f;
			}
			var xe;
			(function(d) {
				d.PAGED_ITEM_BATCH_JOBS = "batchJobs", d.PAGED_ITEM_MODELS = "models", d.PAGED_ITEM_TUNING_JOBS = "tuningJobs", d.PAGED_ITEM_FILES = "files", d.PAGED_ITEM_CACHED_CONTENTS = "cachedContents";
			})(xe ||= {});
			class Pager {
				constructor(d, f, p, m) {
					this.pageInternal = [], this.paramsInternal = {}, this.requestInternal = f, this.init(d, p, m);
				}
				init(d, f, p) {
					var m, h;
					this.nameInternal = d, this.pageInternal = f[this.nameInternal] || [], this.sdkHttpResponseInternal = f?.sdkHttpResponse, this.idxInternal = 0;
					let g = { config: {} };
					g = !p || Object.keys(p).length === 0 ? { config: {} } : typeof p == "object" ? Object.assign({}, p) : p, g.config && (g.config.pageToken = f.nextPageToken), this.paramsInternal = g, this.pageInternalSize = (h = (m = g.config)?.pageSize) ?? this.pageInternal.length;
				}
				initNextPage(d) {
					this.init(this.nameInternal, d, this.paramsInternal);
				}
				get page() {
					return this.pageInternal;
				}
				get name() {
					return this.nameInternal;
				}
				get pageSize() {
					return this.pageInternalSize;
				}
				get sdkHttpResponse() {
					return this.sdkHttpResponseInternal;
				}
				get params() {
					return this.paramsInternal;
				}
				get pageLength() {
					return this.pageInternal.length;
				}
				getItem(d) {
					return this.pageInternal[d];
				}
				[Symbol.asyncIterator]() {
					return {
						next: async () => {
							if (this.idxInternal >= this.pageLength) if (this.hasNextPage()) await this.nextPage();
							else return {
								value: void 0,
								done: !0
							};
							let d = this.getItem(this.idxInternal);
							return this.idxInternal += 1, {
								value: d,
								done: !1
							};
						},
						return: async () => ({
							value: void 0,
							done: !0
						})
					};
				}
				async nextPage() {
					if (!this.hasNextPage()) throw Error("No more pages to fetch.");
					let d = await this.requestInternal(this.params);
					return this.initNextPage(d), this.page;
				}
				hasNextPage() {
					var d;
					return (d = this.params.config)?.pageToken !== void 0;
				}
			}
			class Batches extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d, this.create = async (d) => {
						var f, p;
						if (this.apiClient.isVertexAI()) return d.config = this.formatDestination(d.src, d.config), this.createInternal(d);
						let m = d.src, h = Array.isArray(d.src) || m.inlinedRequests !== void 0;
						if (!h) return this.createInternal(d);
						let g = this.createInlinedGenerateContentRequest(d), _ = g.path, v = g.body, b = createBatchJobParametersToMldev(this.apiClient, d)._query || {}, x = this.apiClient.request({
							path: _,
							queryParams: b,
							body: JSON.stringify(v),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json());
						return x.then((d) => {
							let f = batchJobFromMldev(d);
							return f;
						});
					}, this.createEmbeddings = async (d) => {
						var f, p;
						if (console.warn("batches.createEmbeddings() is experimental and may change without notice."), this.apiClient.isVertexAI()) throw Error("Vertex AI does not support batches.createEmbeddings.");
						let m = d.src, h = m.inlinedRequests !== void 0;
						if (!h) return this.createEmbeddingsInternal(d);
						let g = this.createInlinedEmbedContentRequest(d), _ = g.path, v = g.body, b = createEmbeddingsBatchJobParametersToMldev(this.apiClient, d)._query || {}, x = this.apiClient.request({
							path: _,
							queryParams: b,
							body: JSON.stringify(v),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json());
						return x.then((d) => {
							let f = batchJobFromMldev(d);
							return f;
						});
					}, this.list = async (d = {}) => new Pager(xe.PAGED_ITEM_BATCH_JOBS, (d) => this.listInternal(d), await this.listInternal(d), d);
				}
				createInlinedGenerateContentRequest(d) {
					let f = createBatchJobParametersToMldev(this.apiClient, d), p = f._url, m = formatMap("{model}:batchGenerateContent", p), h = f.batch, g = h.inputConfig, _ = g.requests, v = _.requests, b = [];
					for (let d of v) {
						let f = Object.assign({}, d);
						if (f.systemInstruction) {
							let d = f.systemInstruction;
							delete f.systemInstruction;
							let p = f.request;
							p.systemInstruction = d, f.request = p;
						}
						b.push(f);
					}
					return _.requests = b, delete f.config, delete f._url, delete f._query, {
						path: m,
						body: f
					};
				}
				createInlinedEmbedContentRequest(d) {
					let f = createEmbeddingsBatchJobParametersToMldev(this.apiClient, d), p = f._url, m = formatMap("{model}:asyncBatchEmbedContent", p), h = f.batch, g = h.inputConfig, _ = g.requests, v = _.requests, b = [];
					delete _.config;
					for (let d of v) {
						let f = Object.assign({}, d), p = f.request;
						for (let d in f) d !== "request" && (p[d] = f[d], delete f[d]);
						b.push(f);
					}
					return _.requests = b, delete f.config, delete f._url, delete f._query, {
						path: m,
						body: f
					};
				}
				getGcsUri(d) {
					if (typeof d == "string") return d.startsWith("gs://") ? d : void 0;
					if (!Array.isArray(d) && d.gcsUri && d.gcsUri.length > 0) return d.gcsUri[0];
				}
				getBigqueryUri(d) {
					if (typeof d == "string") return d.startsWith("bq://") ? d : void 0;
					if (!Array.isArray(d)) return d.bigqueryUri;
				}
				formatDestination(d, f) {
					let p = f ? Object.assign({}, f) : {}, m = Date.now().toString();
					if (p.displayName ||= `genaiBatchJob_${m}`, p.dest === void 0) {
						let f = this.getGcsUri(d), h = this.getBigqueryUri(d);
						if (f) f.endsWith(".jsonl") ? p.dest = `${f.slice(0, -6)}/dest` : p.dest = `${f}_dest_${m}`;
						else if (h) p.dest = `${h}_dest_${m}`;
						else throw Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.");
					}
					return p;
				}
				async createInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = createBatchJobParametersToVertex(this.apiClient, d);
						return _ = formatMap("batchPredictionJobs", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = batchJobFromVertex(d);
							return f;
						});
					} else {
						let f = createBatchJobParametersToMldev(this.apiClient, d);
						return _ = formatMap("{model}:batchGenerateContent", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = batchJobFromMldev(d);
							return f;
						});
					}
				}
				async createEmbeddingsInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("This method is only supported by the Gemini Developer API.");
					{
						let _ = createEmbeddingsBatchJobParametersToMldev(this.apiClient, d);
						return h = formatMap("{model}:asyncBatchEmbedContent", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m.then((d) => {
							let f = batchJobFromMldev(d);
							return f;
						});
					}
				}
				async get(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = getBatchJobParametersToVertex(this.apiClient, d);
						return _ = formatMap("batchPredictionJobs/{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = batchJobFromVertex(d);
							return f;
						});
					} else {
						let f = getBatchJobParametersToMldev(this.apiClient, d);
						return _ = formatMap("batches/{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = batchJobFromMldev(d);
							return f;
						});
					}
				}
				async cancel(d) {
					var f, p, m, h;
					let g = "", _ = {};
					if (this.apiClient.isVertexAI()) {
						let m = cancelBatchJobParametersToVertex(this.apiClient, d);
						g = formatMap("batchPredictionJobs/{name}:cancel", m._url), _ = m._query, delete m.config, delete m._url, delete m._query, await this.apiClient.request({
							path: g,
							queryParams: _,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						});
					} else {
						let f = cancelBatchJobParametersToMldev(this.apiClient, d);
						g = formatMap("batches/{name}:cancel", f._url), _ = f._query, delete f.config, delete f._url, delete f._query, await this.apiClient.request({
							path: g,
							queryParams: _,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						});
					}
				}
				async listInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = listBatchJobsParametersToVertex(d);
						return _ = formatMap("batchPredictionJobs", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listBatchJobsResponseFromVertex(d), p = new ListBatchJobsResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = listBatchJobsParametersToMldev(d);
						return _ = formatMap("batches", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listBatchJobsResponseFromMldev(d), p = new ListBatchJobsResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async delete(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = deleteBatchJobParametersToVertex(this.apiClient, d);
						return _ = formatMap("batchPredictionJobs/{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "DELETE",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = deleteResourceJobFromVertex(d);
							return f;
						});
					} else {
						let f = deleteBatchJobParametersToMldev(this.apiClient, d);
						return _ = formatMap("batches/{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "DELETE",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = deleteResourceJobFromMldev(d);
							return f;
						});
					}
				}
			}
			function videoMetadataToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToMldev$3(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataToMldev$3(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToMldev$3(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToMldev$3(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToMldev$3(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToMldev$3(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToMldev$3(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function functionDeclarationToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["behavior"]);
				p != null && setValueByPath(f, ["behavior"], p);
				let m = getValueByPath(d, ["description"]);
				m != null && setValueByPath(f, ["description"], m);
				let h = getValueByPath(d, ["name"]);
				h != null && setValueByPath(f, ["name"], h);
				let g = getValueByPath(d, ["parameters"]);
				g != null && setValueByPath(f, ["parameters"], g);
				let _ = getValueByPath(d, ["parametersJsonSchema"]);
				_ != null && setValueByPath(f, ["parametersJsonSchema"], _);
				let v = getValueByPath(d, ["response"]);
				v != null && setValueByPath(f, ["response"], v);
				let b = getValueByPath(d, ["responseJsonSchema"]);
				return b != null && setValueByPath(f, ["responseJsonSchema"], b), f;
			}
			function intervalToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				if (p != null && setValueByPath(f, ["timeRangeFilter"], intervalToMldev$3(p)), getValueByPath(d, ["excludeDomains"]) !== void 0) throw Error("excludeDomains parameter is not supported in Gemini API.");
				return f;
			}
			function dynamicRetrievalConfigToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$3(p)), f;
			}
			function urlContextToMldev$3() {
				let d = {};
				return d;
			}
			function toolComputerUseToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToMldev$3(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToMldev$3(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				if (getValueByPath(d, ["retrieval"]) !== void 0) throw Error("retrieval parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["googleSearch"]);
				m != null && setValueByPath(f, ["googleSearch"], googleSearchToMldev$3(m));
				let h = getValueByPath(d, ["googleSearchRetrieval"]);
				if (h != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$3(h)), getValueByPath(d, ["enterpriseWebSearch"]) !== void 0) throw Error("enterpriseWebSearch parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["googleMaps"]) !== void 0) throw Error("googleMaps parameter is not supported in Gemini API.");
				let g = getValueByPath(d, ["urlContext"]);
				g != null && setValueByPath(f, ["urlContext"], urlContextToMldev$3());
				let _ = getValueByPath(d, ["computerUse"]);
				_ != null && setValueByPath(f, ["computerUse"], toolComputerUseToMldev$3(_));
				let v = getValueByPath(d, ["codeExecution"]);
				return v != null && setValueByPath(f, ["codeExecution"], v), f;
			}
			function functionCallingConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["allowedFunctionNames"]);
				return m != null && setValueByPath(f, ["allowedFunctionNames"], m), f;
			}
			function latLngToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["latitude"]);
				p != null && setValueByPath(f, ["latitude"], p);
				let m = getValueByPath(d, ["longitude"]);
				return m != null && setValueByPath(f, ["longitude"], m), f;
			}
			function retrievalConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["latLng"]);
				p != null && setValueByPath(f, ["latLng"], latLngToMldev$1(p));
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function toolConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["functionCallingConfig"]);
				p != null && setValueByPath(f, ["functionCallingConfig"], functionCallingConfigToMldev$1(p));
				let m = getValueByPath(d, ["retrievalConfig"]);
				return m != null && setValueByPath(f, ["retrievalConfig"], retrievalConfigToMldev$1(m)), f;
			}
			function createCachedContentConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["ttl"]);
				f !== void 0 && m != null && setValueByPath(f, ["ttl"], m);
				let h = getValueByPath(d, ["expireTime"]);
				f !== void 0 && h != null && setValueByPath(f, ["expireTime"], h);
				let g = getValueByPath(d, ["displayName"]);
				f !== void 0 && g != null && setValueByPath(f, ["displayName"], g);
				let _ = getValueByPath(d, ["contents"]);
				if (f !== void 0 && _ != null) {
					let d = tContents(_);
					Array.isArray(d) && (d = d.map((d) => contentToMldev$3(d))), setValueByPath(f, ["contents"], d);
				}
				let v = getValueByPath(d, ["systemInstruction"]);
				f !== void 0 && v != null && setValueByPath(f, ["systemInstruction"], contentToMldev$3(tContent(v)));
				let b = getValueByPath(d, ["tools"]);
				if (f !== void 0 && b != null) {
					let d = b;
					Array.isArray(d) && (d = d.map((d) => toolToMldev$3(d))), setValueByPath(f, ["tools"], d);
				}
				let x = getValueByPath(d, ["toolConfig"]);
				if (f !== void 0 && x != null && setValueByPath(f, ["toolConfig"], toolConfigToMldev$1(x)), getValueByPath(d, ["kmsKeyName"]) !== void 0) throw Error("kmsKeyName parameter is not supported in Gemini API.");
				return p;
			}
			function createCachedContentParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["model"], tCachesModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], createCachedContentConfigToMldev(h, p)), p;
			}
			function getCachedContentParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tCachedContentName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function deleteCachedContentParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tCachedContentName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function updateCachedContentConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["ttl"]);
				f !== void 0 && m != null && setValueByPath(f, ["ttl"], m);
				let h = getValueByPath(d, ["expireTime"]);
				return f !== void 0 && h != null && setValueByPath(f, ["expireTime"], h), p;
			}
			function updateCachedContentParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tCachedContentName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], updateCachedContentConfigToMldev(h, p)), p;
			}
			function listCachedContentsConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				return f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h), p;
			}
			function listCachedContentsParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listCachedContentsConfigToMldev(p, f)), f;
			}
			function videoMetadataToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["data"]);
				m != null && setValueByPath(f, ["data"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function fileDataToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["fileUri"]);
				m != null && setValueByPath(f, ["fileUri"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function functionCallToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToVertex$2(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToVertex$2(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToVertex$2(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToVertex$2(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToVertex$2(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function functionDeclarationToVertex$2(d) {
				let f = {};
				if (getValueByPath(d, ["behavior"]) !== void 0) throw Error("behavior parameter is not supported in Vertex AI.");
				let p = getValueByPath(d, ["description"]);
				p != null && setValueByPath(f, ["description"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["parameters"]);
				h != null && setValueByPath(f, ["parameters"], h);
				let g = getValueByPath(d, ["parametersJsonSchema"]);
				g != null && setValueByPath(f, ["parametersJsonSchema"], g);
				let _ = getValueByPath(d, ["response"]);
				_ != null && setValueByPath(f, ["response"], _);
				let v = getValueByPath(d, ["responseJsonSchema"]);
				return v != null && setValueByPath(f, ["responseJsonSchema"], v), f;
			}
			function intervalToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				p != null && setValueByPath(f, ["timeRangeFilter"], intervalToVertex$2(p));
				let m = getValueByPath(d, ["excludeDomains"]);
				return m != null && setValueByPath(f, ["excludeDomains"], m), f;
			}
			function dynamicRetrievalConfigToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToVertex$2(p)), f;
			}
			function enterpriseWebSearchToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["excludeDomains"]);
				return p != null && setValueByPath(f, ["excludeDomains"], p), f;
			}
			function apiKeyConfigToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["apiKeyString"]);
				return p != null && setValueByPath(f, ["apiKeyString"], p), f;
			}
			function authConfigToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["apiKeyConfig"]);
				p != null && setValueByPath(f, ["apiKeyConfig"], apiKeyConfigToVertex$2(p));
				let m = getValueByPath(d, ["authType"]);
				m != null && setValueByPath(f, ["authType"], m);
				let h = getValueByPath(d, ["googleServiceAccountConfig"]);
				h != null && setValueByPath(f, ["googleServiceAccountConfig"], h);
				let g = getValueByPath(d, ["httpBasicAuthConfig"]);
				g != null && setValueByPath(f, ["httpBasicAuthConfig"], g);
				let _ = getValueByPath(d, ["oauthConfig"]);
				_ != null && setValueByPath(f, ["oauthConfig"], _);
				let v = getValueByPath(d, ["oidcConfig"]);
				return v != null && setValueByPath(f, ["oidcConfig"], v), f;
			}
			function googleMapsToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["authConfig"]);
				return p != null && setValueByPath(f, ["authConfig"], authConfigToVertex$2(p)), f;
			}
			function urlContextToVertex$2() {
				let d = {};
				return d;
			}
			function toolComputerUseToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToVertex$2(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToVertex$2(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				let m = getValueByPath(d, ["retrieval"]);
				m != null && setValueByPath(f, ["retrieval"], m);
				let h = getValueByPath(d, ["googleSearch"]);
				h != null && setValueByPath(f, ["googleSearch"], googleSearchToVertex$2(h));
				let g = getValueByPath(d, ["googleSearchRetrieval"]);
				g != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToVertex$2(g));
				let _ = getValueByPath(d, ["enterpriseWebSearch"]);
				_ != null && setValueByPath(f, ["enterpriseWebSearch"], enterpriseWebSearchToVertex$2(_));
				let v = getValueByPath(d, ["googleMaps"]);
				v != null && setValueByPath(f, ["googleMaps"], googleMapsToVertex$2(v));
				let b = getValueByPath(d, ["urlContext"]);
				b != null && setValueByPath(f, ["urlContext"], urlContextToVertex$2());
				let x = getValueByPath(d, ["computerUse"]);
				x != null && setValueByPath(f, ["computerUse"], toolComputerUseToVertex$2(x));
				let C = getValueByPath(d, ["codeExecution"]);
				return C != null && setValueByPath(f, ["codeExecution"], C), f;
			}
			function functionCallingConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["allowedFunctionNames"]);
				return m != null && setValueByPath(f, ["allowedFunctionNames"], m), f;
			}
			function latLngToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["latitude"]);
				p != null && setValueByPath(f, ["latitude"], p);
				let m = getValueByPath(d, ["longitude"]);
				return m != null && setValueByPath(f, ["longitude"], m), f;
			}
			function retrievalConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["latLng"]);
				p != null && setValueByPath(f, ["latLng"], latLngToVertex$1(p));
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function toolConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["functionCallingConfig"]);
				p != null && setValueByPath(f, ["functionCallingConfig"], functionCallingConfigToVertex$1(p));
				let m = getValueByPath(d, ["retrievalConfig"]);
				return m != null && setValueByPath(f, ["retrievalConfig"], retrievalConfigToVertex$1(m)), f;
			}
			function createCachedContentConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["ttl"]);
				f !== void 0 && m != null && setValueByPath(f, ["ttl"], m);
				let h = getValueByPath(d, ["expireTime"]);
				f !== void 0 && h != null && setValueByPath(f, ["expireTime"], h);
				let g = getValueByPath(d, ["displayName"]);
				f !== void 0 && g != null && setValueByPath(f, ["displayName"], g);
				let _ = getValueByPath(d, ["contents"]);
				if (f !== void 0 && _ != null) {
					let d = tContents(_);
					Array.isArray(d) && (d = d.map((d) => contentToVertex$2(d))), setValueByPath(f, ["contents"], d);
				}
				let v = getValueByPath(d, ["systemInstruction"]);
				f !== void 0 && v != null && setValueByPath(f, ["systemInstruction"], contentToVertex$2(tContent(v)));
				let b = getValueByPath(d, ["tools"]);
				if (f !== void 0 && b != null) {
					let d = b;
					Array.isArray(d) && (d = d.map((d) => toolToVertex$2(d))), setValueByPath(f, ["tools"], d);
				}
				let x = getValueByPath(d, ["toolConfig"]);
				f !== void 0 && x != null && setValueByPath(f, ["toolConfig"], toolConfigToVertex$1(x));
				let C = getValueByPath(d, ["kmsKeyName"]);
				return f !== void 0 && C != null && setValueByPath(f, ["encryption_spec", "kmsKeyName"], C), p;
			}
			function createCachedContentParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["model"], tCachesModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], createCachedContentConfigToVertex(h, p)), p;
			}
			function getCachedContentParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tCachedContentName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function deleteCachedContentParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tCachedContentName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function updateCachedContentConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["ttl"]);
				f !== void 0 && m != null && setValueByPath(f, ["ttl"], m);
				let h = getValueByPath(d, ["expireTime"]);
				return f !== void 0 && h != null && setValueByPath(f, ["expireTime"], h), p;
			}
			function updateCachedContentParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["name"]);
				m != null && setValueByPath(p, ["_url", "name"], tCachedContentName(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], updateCachedContentConfigToVertex(h, p)), p;
			}
			function listCachedContentsConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				return f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h), p;
			}
			function listCachedContentsParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listCachedContentsConfigToVertex(p, f)), f;
			}
			function cachedContentFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["model"]);
				h != null && setValueByPath(f, ["model"], h);
				let g = getValueByPath(d, ["createTime"]);
				g != null && setValueByPath(f, ["createTime"], g);
				let _ = getValueByPath(d, ["updateTime"]);
				_ != null && setValueByPath(f, ["updateTime"], _);
				let v = getValueByPath(d, ["expireTime"]);
				v != null && setValueByPath(f, ["expireTime"], v);
				let b = getValueByPath(d, ["usageMetadata"]);
				return b != null && setValueByPath(f, ["usageMetadata"], b), f;
			}
			function deleteCachedContentResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				return p != null && setValueByPath(f, ["sdkHttpResponse"], p), f;
			}
			function listCachedContentsResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["cachedContents"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => cachedContentFromMldev(d))), setValueByPath(f, ["cachedContents"], d);
				}
				return f;
			}
			function cachedContentFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["model"]);
				h != null && setValueByPath(f, ["model"], h);
				let g = getValueByPath(d, ["createTime"]);
				g != null && setValueByPath(f, ["createTime"], g);
				let _ = getValueByPath(d, ["updateTime"]);
				_ != null && setValueByPath(f, ["updateTime"], _);
				let v = getValueByPath(d, ["expireTime"]);
				v != null && setValueByPath(f, ["expireTime"], v);
				let b = getValueByPath(d, ["usageMetadata"]);
				return b != null && setValueByPath(f, ["usageMetadata"], b), f;
			}
			function deleteCachedContentResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				return p != null && setValueByPath(f, ["sdkHttpResponse"], p), f;
			}
			function listCachedContentsResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["cachedContents"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => cachedContentFromVertex(d))), setValueByPath(f, ["cachedContents"], d);
				}
				return f;
			}
			class Caches extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d, this.list = async (d = {}) => new Pager(xe.PAGED_ITEM_CACHED_CONTENTS, (d) => this.listInternal(d), await this.listInternal(d), d);
				}
				async create(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = createCachedContentParametersToVertex(this.apiClient, d);
						return _ = formatMap("cachedContents", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = cachedContentFromVertex(d);
							return f;
						});
					} else {
						let f = createCachedContentParametersToMldev(this.apiClient, d);
						return _ = formatMap("cachedContents", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = cachedContentFromMldev(d);
							return f;
						});
					}
				}
				async get(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = getCachedContentParametersToVertex(this.apiClient, d);
						return _ = formatMap("{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = cachedContentFromVertex(d);
							return f;
						});
					} else {
						let f = getCachedContentParametersToMldev(this.apiClient, d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = cachedContentFromMldev(d);
							return f;
						});
					}
				}
				async delete(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = deleteCachedContentParametersToVertex(this.apiClient, d);
						return _ = formatMap("{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "DELETE",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = deleteCachedContentResponseFromVertex(d), p = new DeleteCachedContentResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = deleteCachedContentParametersToMldev(this.apiClient, d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "DELETE",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = deleteCachedContentResponseFromMldev(d), p = new DeleteCachedContentResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async update(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = updateCachedContentParametersToVertex(this.apiClient, d);
						return _ = formatMap("{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "PATCH",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = cachedContentFromVertex(d);
							return f;
						});
					} else {
						let f = updateCachedContentParametersToMldev(this.apiClient, d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "PATCH",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = cachedContentFromMldev(d);
							return f;
						});
					}
				}
				async listInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = listCachedContentsParametersToVertex(d);
						return _ = formatMap("cachedContents", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listCachedContentsResponseFromVertex(d), p = new ListCachedContentsResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = listCachedContentsParametersToMldev(d);
						return _ = formatMap("cachedContents", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listCachedContentsResponseFromMldev(d), p = new ListCachedContentsResponse();
							return Object.assign(p, f), p;
						});
					}
				}
			}
			function __values(d) {
				var f = typeof Symbol == "function" && Symbol.iterator, p = f && d[f], m = 0;
				if (p) return p.call(d);
				if (d && typeof d.length == "number") return { next: function() {
					return d && m >= d.length && (d = void 0), {
						value: d && d[m++],
						done: !d
					};
				} };
				throw TypeError(f ? "Object is not iterable." : "Symbol.iterator is not defined.");
			}
			function __await(d) {
				return this instanceof __await ? (this.v = d, this) : new __await(d);
			}
			function __asyncGenerator(d, f, p) {
				if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
				var m = p.apply(d, f || []), h, g = [];
				return h = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), h[Symbol.asyncIterator] = function() {
					return this;
				}, h;
				function awaitReturn(d) {
					return function(f) {
						return Promise.resolve(f).then(d, reject);
					};
				}
				function verb(d, f) {
					m[d] && (h[d] = function(f) {
						return new Promise(function(p, m) {
							g.push([
								d,
								f,
								p,
								m
							]) > 1 || resume(d, f);
						});
					}, f && (h[d] = f(h[d])));
				}
				function resume(d, f) {
					try {
						step(m[d](f));
					} catch (d) {
						settle(g[0][3], d);
					}
				}
				function step(d) {
					d.value instanceof __await ? Promise.resolve(d.value.v).then(fulfill, reject) : settle(g[0][2], d);
				}
				function fulfill(d) {
					resume("next", d);
				}
				function reject(d) {
					resume("throw", d);
				}
				function settle(d, f) {
					d(f), g.shift(), g.length && resume(g[0][0], g[0][1]);
				}
			}
			function __asyncValues(d) {
				if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
				var f = d[Symbol.asyncIterator], p;
				return f ? f.call(d) : (d = typeof __values == "function" ? __values(d) : d[Symbol.iterator](), p = {}, verb("next"), verb("throw"), verb("return"), p[Symbol.asyncIterator] = function() {
					return this;
				}, p);
				function verb(f) {
					p[f] = d[f] && function(p) {
						return new Promise(function(m, h) {
							p = d[f](p), settle(m, h, p.done, p.value);
						});
					};
				}
				function settle(d, f, p, m) {
					Promise.resolve(m).then(function(f) {
						d({
							value: f,
							done: p
						});
					}, f);
				}
			}
			typeof SuppressedError == "function" && SuppressedError;
			function isValidResponse(d) {
				var f;
				if (d.candidates == null || d.candidates.length === 0) return !1;
				let p = (f = d.candidates[0])?.content;
				return p === void 0 ? !1 : isValidContent(p);
			}
			function isValidContent(d) {
				if (d.parts === void 0 || d.parts.length === 0) return !1;
				for (let f of d.parts) if (f === void 0 || Object.keys(f).length === 0) return !1;
				return !0;
			}
			function validateHistory(d) {
				if (d.length !== 0) {
					for (let f of d) if (f.role !== "user" && f.role !== "model") throw Error(`Role must be user or model, but got ${f.role}.`);
				}
			}
			function extractCuratedHistory(d) {
				if (d === void 0 || d.length === 0) return [];
				let f = [], p = d.length, m = 0;
				for (; m < p;) if (d[m].role === "user") f.push(d[m]), m++;
				else {
					let h = [], g = !0;
					for (; m < p && d[m].role === "model";) h.push(d[m]), g && !isValidContent(d[m]) && (g = !1), m++;
					g ? f.push(...h) : f.pop();
				}
				return f;
			}
			class Chats {
				constructor(d, f) {
					this.modelsModule = d, this.apiClient = f;
				}
				create(d) {
					return new Chat(this.apiClient, this.modelsModule, d.model, d.config, structuredClone(d.history));
				}
			}
			class Chat {
				constructor(d, f, p, m = {}, h = []) {
					this.apiClient = d, this.modelsModule = f, this.model = p, this.config = m, this.history = h, this.sendPromise = Promise.resolve(), validateHistory(h);
				}
				async sendMessage(d) {
					var f;
					await this.sendPromise;
					let p = tContent(d.message), m = this.modelsModule.generateContent({
						model: this.model,
						contents: this.getHistory(!0).concat(p),
						config: (f = d.config) ?? this.config
					});
					return this.sendPromise = (async () => {
						var d, f, h;
						let g = await m, _ = (f = (d = g.candidates)?.[0])?.content, v = g.automaticFunctionCallingHistory, b = this.getHistory(!0).length, x = [];
						v != null && (x = (h = v.slice(b)) ?? []);
						let C = _ ? [_] : [];
						this.recordHistory(p, C, x);
					})(), await this.sendPromise.catch(() => {
						this.sendPromise = Promise.resolve();
					}), m;
				}
				async sendMessageStream(d) {
					var f;
					await this.sendPromise;
					let p = tContent(d.message), m = this.modelsModule.generateContentStream({
						model: this.model,
						contents: this.getHistory(!0).concat(p),
						config: (f = d.config) ?? this.config
					});
					this.sendPromise = m.then(() => void 0).catch(() => void 0);
					let h = await m, g = this.processStreamResponse(h, p);
					return g;
				}
				getHistory(d = !1) {
					let f = d ? extractCuratedHistory(this.history) : this.history;
					return structuredClone(f);
				}
				processStreamResponse(d, f) {
					var p, m;
					return __asyncGenerator(this, arguments, function* processStreamResponse_1() {
						var h, g, _, v;
						let b = [];
						try {
							for (var x = !0, C = __asyncValues(d), w; w = yield __await(C.next()), h = w.done, !h; x = !0) {
								v = w.value, x = !1;
								let d = v;
								if (isValidResponse(d)) {
									let f = (m = (p = d.candidates)?.[0])?.content;
									f !== void 0 && b.push(f);
								}
								yield yield __await(d);
							}
						} catch (d) {
							g = { error: d };
						} finally {
							try {
								!x && !h && (_ = C.return) && (yield __await(_.call(C)));
							} finally {
								if (g) throw g.error;
							}
						}
						this.recordHistory(f, b);
					});
				}
				recordHistory(d, f, p) {
					let m = [];
					f.length > 0 && f.every((d) => d.role !== void 0) ? m = f : m.push({
						role: "model",
						parts: []
					}), p && p.length > 0 ? this.history.push(...extractCuratedHistory(p)) : this.history.push(d), this.history.push(...m);
				}
			}
			class ApiError extends Error {
				constructor(d) {
					super(d.message), this.name = "ApiError", this.status = d.status, Object.setPrototypeOf(this, ApiError.prototype);
				}
			}
			function listFilesConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				return f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h), p;
			}
			function listFilesParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listFilesConfigToMldev(p, f)), f;
			}
			function fileStatusToMldev(d) {
				let f = {}, p = getValueByPath(d, ["details"]);
				p != null && setValueByPath(f, ["details"], p);
				let m = getValueByPath(d, ["message"]);
				m != null && setValueByPath(f, ["message"], m);
				let h = getValueByPath(d, ["code"]);
				return h != null && setValueByPath(f, ["code"], h), f;
			}
			function fileToMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["mimeType"]);
				h != null && setValueByPath(f, ["mimeType"], h);
				let g = getValueByPath(d, ["sizeBytes"]);
				g != null && setValueByPath(f, ["sizeBytes"], g);
				let _ = getValueByPath(d, ["createTime"]);
				_ != null && setValueByPath(f, ["createTime"], _);
				let v = getValueByPath(d, ["expirationTime"]);
				v != null && setValueByPath(f, ["expirationTime"], v);
				let b = getValueByPath(d, ["updateTime"]);
				b != null && setValueByPath(f, ["updateTime"], b);
				let x = getValueByPath(d, ["sha256Hash"]);
				x != null && setValueByPath(f, ["sha256Hash"], x);
				let C = getValueByPath(d, ["uri"]);
				C != null && setValueByPath(f, ["uri"], C);
				let w = getValueByPath(d, ["downloadUri"]);
				w != null && setValueByPath(f, ["downloadUri"], w);
				let T = getValueByPath(d, ["state"]);
				T != null && setValueByPath(f, ["state"], T);
				let E = getValueByPath(d, ["source"]);
				E != null && setValueByPath(f, ["source"], E);
				let D = getValueByPath(d, ["videoMetadata"]);
				D != null && setValueByPath(f, ["videoMetadata"], D);
				let O = getValueByPath(d, ["error"]);
				return O != null && setValueByPath(f, ["error"], fileStatusToMldev(O)), f;
			}
			function createFileParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["file"]);
				p != null && setValueByPath(f, ["file"], fileToMldev(p));
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function getFileParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["_url", "file"], tFileName(p));
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function deleteFileParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["_url", "file"], tFileName(p));
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function fileStatusFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["details"]);
				p != null && setValueByPath(f, ["details"], p);
				let m = getValueByPath(d, ["message"]);
				m != null && setValueByPath(f, ["message"], m);
				let h = getValueByPath(d, ["code"]);
				return h != null && setValueByPath(f, ["code"], h), f;
			}
			function fileFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["mimeType"]);
				h != null && setValueByPath(f, ["mimeType"], h);
				let g = getValueByPath(d, ["sizeBytes"]);
				g != null && setValueByPath(f, ["sizeBytes"], g);
				let _ = getValueByPath(d, ["createTime"]);
				_ != null && setValueByPath(f, ["createTime"], _);
				let v = getValueByPath(d, ["expirationTime"]);
				v != null && setValueByPath(f, ["expirationTime"], v);
				let b = getValueByPath(d, ["updateTime"]);
				b != null && setValueByPath(f, ["updateTime"], b);
				let x = getValueByPath(d, ["sha256Hash"]);
				x != null && setValueByPath(f, ["sha256Hash"], x);
				let C = getValueByPath(d, ["uri"]);
				C != null && setValueByPath(f, ["uri"], C);
				let w = getValueByPath(d, ["downloadUri"]);
				w != null && setValueByPath(f, ["downloadUri"], w);
				let T = getValueByPath(d, ["state"]);
				T != null && setValueByPath(f, ["state"], T);
				let E = getValueByPath(d, ["source"]);
				E != null && setValueByPath(f, ["source"], E);
				let D = getValueByPath(d, ["videoMetadata"]);
				D != null && setValueByPath(f, ["videoMetadata"], D);
				let O = getValueByPath(d, ["error"]);
				return O != null && setValueByPath(f, ["error"], fileStatusFromMldev(O)), f;
			}
			function listFilesResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["files"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => fileFromMldev(d))), setValueByPath(f, ["files"], d);
				}
				return f;
			}
			function createFileResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				return p != null && setValueByPath(f, ["sdkHttpResponse"], p), f;
			}
			function deleteFileResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				return p != null && setValueByPath(f, ["sdkHttpResponse"], p), f;
			}
			class Files extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d, this.list = async (d = {}) => new Pager(xe.PAGED_ITEM_FILES, (d) => this.listInternal(d), await this.listInternal(d), d);
				}
				async upload(d) {
					if (this.apiClient.isVertexAI()) throw Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");
					return this.apiClient.uploadFile(d.file, d.config).then((d) => {
						let f = fileFromMldev(d);
						return f;
					});
				}
				async download(d) {
					await this.apiClient.downloadFile(d);
				}
				async listInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("This method is only supported by the Gemini Developer API.");
					{
						let _ = listFilesParametersToMldev(d);
						return h = formatMap("files", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = listFilesResponseFromMldev(d), p = new ListFilesResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async createInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("This method is only supported by the Gemini Developer API.");
					{
						let _ = createFileParametersToMldev(d);
						return h = formatMap("upload/v1beta/files", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m.then((d) => {
							let f = createFileResponseFromMldev(d), p = new CreateFileResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async get(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("This method is only supported by the Gemini Developer API.");
					{
						let _ = getFileParametersToMldev(d);
						return h = formatMap("files/{file}", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m.then((d) => {
							let f = fileFromMldev(d);
							return f;
						});
					}
				}
				async delete(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("This method is only supported by the Gemini Developer API.");
					{
						let _ = deleteFileParametersToMldev(d);
						return h = formatMap("files/{file}", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "DELETE",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = deleteFileResponseFromMldev(d), p = new DeleteFileResponse();
							return Object.assign(p, f), p;
						});
					}
				}
			}
			function prebuiltVoiceConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["voiceName"]);
				return p != null && setValueByPath(f, ["voiceName"], p), f;
			}
			function voiceConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["prebuiltVoiceConfig"]);
				return p != null && setValueByPath(f, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev$2(p)), f;
			}
			function speakerVoiceConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["speaker"]);
				p != null && setValueByPath(f, ["speaker"], p);
				let m = getValueByPath(d, ["voiceConfig"]);
				return m != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev$2(m)), f;
			}
			function multiSpeakerVoiceConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["speakerVoiceConfigs"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => speakerVoiceConfigToMldev$2(d))), setValueByPath(f, ["speakerVoiceConfigs"], d);
				}
				return f;
			}
			function speechConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["voiceConfig"]);
				p != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev$2(p));
				let m = getValueByPath(d, ["multiSpeakerVoiceConfig"]);
				m != null && setValueByPath(f, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev$2(m));
				let h = getValueByPath(d, ["languageCode"]);
				return h != null && setValueByPath(f, ["languageCode"], h), f;
			}
			function videoMetadataToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToMldev$2(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataToMldev$2(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToMldev$2(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToMldev$2(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToMldev$2(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToMldev$2(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToMldev$2(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function functionDeclarationToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["behavior"]);
				p != null && setValueByPath(f, ["behavior"], p);
				let m = getValueByPath(d, ["description"]);
				m != null && setValueByPath(f, ["description"], m);
				let h = getValueByPath(d, ["name"]);
				h != null && setValueByPath(f, ["name"], h);
				let g = getValueByPath(d, ["parameters"]);
				g != null && setValueByPath(f, ["parameters"], g);
				let _ = getValueByPath(d, ["parametersJsonSchema"]);
				_ != null && setValueByPath(f, ["parametersJsonSchema"], _);
				let v = getValueByPath(d, ["response"]);
				v != null && setValueByPath(f, ["response"], v);
				let b = getValueByPath(d, ["responseJsonSchema"]);
				return b != null && setValueByPath(f, ["responseJsonSchema"], b), f;
			}
			function intervalToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				if (p != null && setValueByPath(f, ["timeRangeFilter"], intervalToMldev$2(p)), getValueByPath(d, ["excludeDomains"]) !== void 0) throw Error("excludeDomains parameter is not supported in Gemini API.");
				return f;
			}
			function dynamicRetrievalConfigToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$2(p)), f;
			}
			function urlContextToMldev$2() {
				let d = {};
				return d;
			}
			function toolComputerUseToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToMldev$2(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToMldev$2(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				if (getValueByPath(d, ["retrieval"]) !== void 0) throw Error("retrieval parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["googleSearch"]);
				m != null && setValueByPath(f, ["googleSearch"], googleSearchToMldev$2(m));
				let h = getValueByPath(d, ["googleSearchRetrieval"]);
				if (h != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$2(h)), getValueByPath(d, ["enterpriseWebSearch"]) !== void 0) throw Error("enterpriseWebSearch parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["googleMaps"]) !== void 0) throw Error("googleMaps parameter is not supported in Gemini API.");
				let g = getValueByPath(d, ["urlContext"]);
				g != null && setValueByPath(f, ["urlContext"], urlContextToMldev$2());
				let _ = getValueByPath(d, ["computerUse"]);
				_ != null && setValueByPath(f, ["computerUse"], toolComputerUseToMldev$2(_));
				let v = getValueByPath(d, ["codeExecution"]);
				return v != null && setValueByPath(f, ["codeExecution"], v), f;
			}
			function sessionResumptionConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["handle"]);
				if (p != null && setValueByPath(f, ["handle"], p), getValueByPath(d, ["transparent"]) !== void 0) throw Error("transparent parameter is not supported in Gemini API.");
				return f;
			}
			function audioTranscriptionConfigToMldev$1() {
				let d = {};
				return d;
			}
			function automaticActivityDetectionToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["disabled"]);
				p != null && setValueByPath(f, ["disabled"], p);
				let m = getValueByPath(d, ["startOfSpeechSensitivity"]);
				m != null && setValueByPath(f, ["startOfSpeechSensitivity"], m);
				let h = getValueByPath(d, ["endOfSpeechSensitivity"]);
				h != null && setValueByPath(f, ["endOfSpeechSensitivity"], h);
				let g = getValueByPath(d, ["prefixPaddingMs"]);
				g != null && setValueByPath(f, ["prefixPaddingMs"], g);
				let _ = getValueByPath(d, ["silenceDurationMs"]);
				return _ != null && setValueByPath(f, ["silenceDurationMs"], _), f;
			}
			function realtimeInputConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["automaticActivityDetection"]);
				p != null && setValueByPath(f, ["automaticActivityDetection"], automaticActivityDetectionToMldev$1(p));
				let m = getValueByPath(d, ["activityHandling"]);
				m != null && setValueByPath(f, ["activityHandling"], m);
				let h = getValueByPath(d, ["turnCoverage"]);
				return h != null && setValueByPath(f, ["turnCoverage"], h), f;
			}
			function slidingWindowToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["targetTokens"]);
				return p != null && setValueByPath(f, ["targetTokens"], p), f;
			}
			function contextWindowCompressionConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["triggerTokens"]);
				p != null && setValueByPath(f, ["triggerTokens"], p);
				let m = getValueByPath(d, ["slidingWindow"]);
				return m != null && setValueByPath(f, ["slidingWindow"], slidingWindowToMldev$1(m)), f;
			}
			function proactivityConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["proactiveAudio"]);
				return p != null && setValueByPath(f, ["proactiveAudio"], p), f;
			}
			function liveConnectConfigToMldev$1(d, f) {
				let p = {}, m = getValueByPath(d, ["generationConfig"]);
				f !== void 0 && m != null && setValueByPath(f, ["setup", "generationConfig"], m);
				let h = getValueByPath(d, ["responseModalities"]);
				f !== void 0 && h != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"responseModalities"
				], h);
				let g = getValueByPath(d, ["temperature"]);
				f !== void 0 && g != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"temperature"
				], g);
				let _ = getValueByPath(d, ["topP"]);
				f !== void 0 && _ != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"topP"
				], _);
				let v = getValueByPath(d, ["topK"]);
				f !== void 0 && v != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"topK"
				], v);
				let b = getValueByPath(d, ["maxOutputTokens"]);
				f !== void 0 && b != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"maxOutputTokens"
				], b);
				let x = getValueByPath(d, ["mediaResolution"]);
				f !== void 0 && x != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"mediaResolution"
				], x);
				let C = getValueByPath(d, ["seed"]);
				f !== void 0 && C != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"seed"
				], C);
				let w = getValueByPath(d, ["speechConfig"]);
				f !== void 0 && w != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"speechConfig"
				], speechConfigToMldev$2(tLiveSpeechConfig(w)));
				let T = getValueByPath(d, ["enableAffectiveDialog"]);
				f !== void 0 && T != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"enableAffectiveDialog"
				], T);
				let E = getValueByPath(d, ["systemInstruction"]);
				f !== void 0 && E != null && setValueByPath(f, ["setup", "systemInstruction"], contentToMldev$2(tContent(E)));
				let D = getValueByPath(d, ["tools"]);
				if (f !== void 0 && D != null) {
					let d = tTools(D);
					Array.isArray(d) && (d = d.map((d) => toolToMldev$2(tTool(d)))), setValueByPath(f, ["setup", "tools"], d);
				}
				let O = getValueByPath(d, ["sessionResumption"]);
				f !== void 0 && O != null && setValueByPath(f, ["setup", "sessionResumption"], sessionResumptionConfigToMldev$1(O));
				let A = getValueByPath(d, ["inputAudioTranscription"]);
				f !== void 0 && A != null && setValueByPath(f, ["setup", "inputAudioTranscription"], audioTranscriptionConfigToMldev$1());
				let j = getValueByPath(d, ["outputAudioTranscription"]);
				f !== void 0 && j != null && setValueByPath(f, ["setup", "outputAudioTranscription"], audioTranscriptionConfigToMldev$1());
				let F = getValueByPath(d, ["realtimeInputConfig"]);
				f !== void 0 && F != null && setValueByPath(f, ["setup", "realtimeInputConfig"], realtimeInputConfigToMldev$1(F));
				let U = getValueByPath(d, ["contextWindowCompression"]);
				f !== void 0 && U != null && setValueByPath(f, ["setup", "contextWindowCompression"], contextWindowCompressionConfigToMldev$1(U));
				let W = getValueByPath(d, ["proactivity"]);
				return f !== void 0 && W != null && setValueByPath(f, ["setup", "proactivity"], proactivityConfigToMldev$1(W)), p;
			}
			function liveConnectParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["setup", "model"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], liveConnectConfigToMldev$1(h, p)), p;
			}
			function activityStartToMldev() {
				let d = {};
				return d;
			}
			function activityEndToMldev() {
				let d = {};
				return d;
			}
			function liveSendRealtimeInputParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["media"]);
				p != null && setValueByPath(f, ["mediaChunks"], tBlobs(p));
				let m = getValueByPath(d, ["audio"]);
				m != null && setValueByPath(f, ["audio"], tAudioBlob(m));
				let h = getValueByPath(d, ["audioStreamEnd"]);
				h != null && setValueByPath(f, ["audioStreamEnd"], h);
				let g = getValueByPath(d, ["video"]);
				g != null && setValueByPath(f, ["video"], tImageBlob(g));
				let _ = getValueByPath(d, ["text"]);
				_ != null && setValueByPath(f, ["text"], _);
				let v = getValueByPath(d, ["activityStart"]);
				v != null && setValueByPath(f, ["activityStart"], activityStartToMldev());
				let b = getValueByPath(d, ["activityEnd"]);
				return b != null && setValueByPath(f, ["activityEnd"], activityEndToMldev()), f;
			}
			function weightedPromptToMldev(d) {
				let f = {}, p = getValueByPath(d, ["text"]);
				p != null && setValueByPath(f, ["text"], p);
				let m = getValueByPath(d, ["weight"]);
				return m != null && setValueByPath(f, ["weight"], m), f;
			}
			function liveMusicSetWeightedPromptsParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["weightedPrompts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => weightedPromptToMldev(d))), setValueByPath(f, ["weightedPrompts"], d);
				}
				return f;
			}
			function liveMusicGenerationConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["temperature"]);
				p != null && setValueByPath(f, ["temperature"], p);
				let m = getValueByPath(d, ["topK"]);
				m != null && setValueByPath(f, ["topK"], m);
				let h = getValueByPath(d, ["seed"]);
				h != null && setValueByPath(f, ["seed"], h);
				let g = getValueByPath(d, ["guidance"]);
				g != null && setValueByPath(f, ["guidance"], g);
				let _ = getValueByPath(d, ["bpm"]);
				_ != null && setValueByPath(f, ["bpm"], _);
				let v = getValueByPath(d, ["density"]);
				v != null && setValueByPath(f, ["density"], v);
				let b = getValueByPath(d, ["brightness"]);
				b != null && setValueByPath(f, ["brightness"], b);
				let x = getValueByPath(d, ["scale"]);
				x != null && setValueByPath(f, ["scale"], x);
				let C = getValueByPath(d, ["muteBass"]);
				C != null && setValueByPath(f, ["muteBass"], C);
				let w = getValueByPath(d, ["muteDrums"]);
				w != null && setValueByPath(f, ["muteDrums"], w);
				let T = getValueByPath(d, ["onlyBassAndDrums"]);
				T != null && setValueByPath(f, ["onlyBassAndDrums"], T);
				let E = getValueByPath(d, ["musicGenerationMode"]);
				return E != null && setValueByPath(f, ["musicGenerationMode"], E), f;
			}
			function liveMusicSetConfigParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["musicGenerationConfig"]);
				return p != null && setValueByPath(f, ["musicGenerationConfig"], liveMusicGenerationConfigToMldev(p)), f;
			}
			function liveMusicClientSetupToMldev(d) {
				let f = {}, p = getValueByPath(d, ["model"]);
				return p != null && setValueByPath(f, ["model"], p), f;
			}
			function liveMusicClientContentToMldev(d) {
				let f = {}, p = getValueByPath(d, ["weightedPrompts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => weightedPromptToMldev(d))), setValueByPath(f, ["weightedPrompts"], d);
				}
				return f;
			}
			function liveMusicClientMessageToMldev(d) {
				let f = {}, p = getValueByPath(d, ["setup"]);
				p != null && setValueByPath(f, ["setup"], liveMusicClientSetupToMldev(p));
				let m = getValueByPath(d, ["clientContent"]);
				m != null && setValueByPath(f, ["clientContent"], liveMusicClientContentToMldev(m));
				let h = getValueByPath(d, ["musicGenerationConfig"]);
				h != null && setValueByPath(f, ["musicGenerationConfig"], liveMusicGenerationConfigToMldev(h));
				let g = getValueByPath(d, ["playbackControl"]);
				return g != null && setValueByPath(f, ["playbackControl"], g), f;
			}
			function prebuiltVoiceConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["voiceName"]);
				return p != null && setValueByPath(f, ["voiceName"], p), f;
			}
			function voiceConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["prebuiltVoiceConfig"]);
				return p != null && setValueByPath(f, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToVertex$1(p)), f;
			}
			function speechConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["voiceConfig"]);
				if (p != null && setValueByPath(f, ["voiceConfig"], voiceConfigToVertex$1(p)), getValueByPath(d, ["multiSpeakerVoiceConfig"]) !== void 0) throw Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function videoMetadataToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["data"]);
				m != null && setValueByPath(f, ["data"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function fileDataToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["fileUri"]);
				m != null && setValueByPath(f, ["fileUri"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function functionCallToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToVertex$1(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToVertex$1(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToVertex$1(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToVertex$1(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToVertex$1(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function functionDeclarationToVertex$1(d) {
				let f = {};
				if (getValueByPath(d, ["behavior"]) !== void 0) throw Error("behavior parameter is not supported in Vertex AI.");
				let p = getValueByPath(d, ["description"]);
				p != null && setValueByPath(f, ["description"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["parameters"]);
				h != null && setValueByPath(f, ["parameters"], h);
				let g = getValueByPath(d, ["parametersJsonSchema"]);
				g != null && setValueByPath(f, ["parametersJsonSchema"], g);
				let _ = getValueByPath(d, ["response"]);
				_ != null && setValueByPath(f, ["response"], _);
				let v = getValueByPath(d, ["responseJsonSchema"]);
				return v != null && setValueByPath(f, ["responseJsonSchema"], v), f;
			}
			function intervalToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				p != null && setValueByPath(f, ["timeRangeFilter"], intervalToVertex$1(p));
				let m = getValueByPath(d, ["excludeDomains"]);
				return m != null && setValueByPath(f, ["excludeDomains"], m), f;
			}
			function dynamicRetrievalConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToVertex$1(p)), f;
			}
			function enterpriseWebSearchToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["excludeDomains"]);
				return p != null && setValueByPath(f, ["excludeDomains"], p), f;
			}
			function apiKeyConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["apiKeyString"]);
				return p != null && setValueByPath(f, ["apiKeyString"], p), f;
			}
			function authConfigToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["apiKeyConfig"]);
				p != null && setValueByPath(f, ["apiKeyConfig"], apiKeyConfigToVertex$1(p));
				let m = getValueByPath(d, ["authType"]);
				m != null && setValueByPath(f, ["authType"], m);
				let h = getValueByPath(d, ["googleServiceAccountConfig"]);
				h != null && setValueByPath(f, ["googleServiceAccountConfig"], h);
				let g = getValueByPath(d, ["httpBasicAuthConfig"]);
				g != null && setValueByPath(f, ["httpBasicAuthConfig"], g);
				let _ = getValueByPath(d, ["oauthConfig"]);
				_ != null && setValueByPath(f, ["oauthConfig"], _);
				let v = getValueByPath(d, ["oidcConfig"]);
				return v != null && setValueByPath(f, ["oidcConfig"], v), f;
			}
			function googleMapsToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["authConfig"]);
				return p != null && setValueByPath(f, ["authConfig"], authConfigToVertex$1(p)), f;
			}
			function urlContextToVertex$1() {
				let d = {};
				return d;
			}
			function toolComputerUseToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToVertex$1(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				let m = getValueByPath(d, ["retrieval"]);
				m != null && setValueByPath(f, ["retrieval"], m);
				let h = getValueByPath(d, ["googleSearch"]);
				h != null && setValueByPath(f, ["googleSearch"], googleSearchToVertex$1(h));
				let g = getValueByPath(d, ["googleSearchRetrieval"]);
				g != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToVertex$1(g));
				let _ = getValueByPath(d, ["enterpriseWebSearch"]);
				_ != null && setValueByPath(f, ["enterpriseWebSearch"], enterpriseWebSearchToVertex$1(_));
				let v = getValueByPath(d, ["googleMaps"]);
				v != null && setValueByPath(f, ["googleMaps"], googleMapsToVertex$1(v));
				let b = getValueByPath(d, ["urlContext"]);
				b != null && setValueByPath(f, ["urlContext"], urlContextToVertex$1());
				let x = getValueByPath(d, ["computerUse"]);
				x != null && setValueByPath(f, ["computerUse"], toolComputerUseToVertex$1(x));
				let C = getValueByPath(d, ["codeExecution"]);
				return C != null && setValueByPath(f, ["codeExecution"], C), f;
			}
			function sessionResumptionConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["handle"]);
				p != null && setValueByPath(f, ["handle"], p);
				let m = getValueByPath(d, ["transparent"]);
				return m != null && setValueByPath(f, ["transparent"], m), f;
			}
			function audioTranscriptionConfigToVertex() {
				let d = {};
				return d;
			}
			function automaticActivityDetectionToVertex(d) {
				let f = {}, p = getValueByPath(d, ["disabled"]);
				p != null && setValueByPath(f, ["disabled"], p);
				let m = getValueByPath(d, ["startOfSpeechSensitivity"]);
				m != null && setValueByPath(f, ["startOfSpeechSensitivity"], m);
				let h = getValueByPath(d, ["endOfSpeechSensitivity"]);
				h != null && setValueByPath(f, ["endOfSpeechSensitivity"], h);
				let g = getValueByPath(d, ["prefixPaddingMs"]);
				g != null && setValueByPath(f, ["prefixPaddingMs"], g);
				let _ = getValueByPath(d, ["silenceDurationMs"]);
				return _ != null && setValueByPath(f, ["silenceDurationMs"], _), f;
			}
			function realtimeInputConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["automaticActivityDetection"]);
				p != null && setValueByPath(f, ["automaticActivityDetection"], automaticActivityDetectionToVertex(p));
				let m = getValueByPath(d, ["activityHandling"]);
				m != null && setValueByPath(f, ["activityHandling"], m);
				let h = getValueByPath(d, ["turnCoverage"]);
				return h != null && setValueByPath(f, ["turnCoverage"], h), f;
			}
			function slidingWindowToVertex(d) {
				let f = {}, p = getValueByPath(d, ["targetTokens"]);
				return p != null && setValueByPath(f, ["targetTokens"], p), f;
			}
			function contextWindowCompressionConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["triggerTokens"]);
				p != null && setValueByPath(f, ["triggerTokens"], p);
				let m = getValueByPath(d, ["slidingWindow"]);
				return m != null && setValueByPath(f, ["slidingWindow"], slidingWindowToVertex(m)), f;
			}
			function proactivityConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["proactiveAudio"]);
				return p != null && setValueByPath(f, ["proactiveAudio"], p), f;
			}
			function liveConnectConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["generationConfig"]);
				f !== void 0 && m != null && setValueByPath(f, ["setup", "generationConfig"], m);
				let h = getValueByPath(d, ["responseModalities"]);
				f !== void 0 && h != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"responseModalities"
				], h);
				let g = getValueByPath(d, ["temperature"]);
				f !== void 0 && g != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"temperature"
				], g);
				let _ = getValueByPath(d, ["topP"]);
				f !== void 0 && _ != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"topP"
				], _);
				let v = getValueByPath(d, ["topK"]);
				f !== void 0 && v != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"topK"
				], v);
				let b = getValueByPath(d, ["maxOutputTokens"]);
				f !== void 0 && b != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"maxOutputTokens"
				], b);
				let x = getValueByPath(d, ["mediaResolution"]);
				f !== void 0 && x != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"mediaResolution"
				], x);
				let C = getValueByPath(d, ["seed"]);
				f !== void 0 && C != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"seed"
				], C);
				let w = getValueByPath(d, ["speechConfig"]);
				f !== void 0 && w != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"speechConfig"
				], speechConfigToVertex$1(tLiveSpeechConfig(w)));
				let T = getValueByPath(d, ["enableAffectiveDialog"]);
				f !== void 0 && T != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"enableAffectiveDialog"
				], T);
				let E = getValueByPath(d, ["systemInstruction"]);
				f !== void 0 && E != null && setValueByPath(f, ["setup", "systemInstruction"], contentToVertex$1(tContent(E)));
				let D = getValueByPath(d, ["tools"]);
				if (f !== void 0 && D != null) {
					let d = tTools(D);
					Array.isArray(d) && (d = d.map((d) => toolToVertex$1(tTool(d)))), setValueByPath(f, ["setup", "tools"], d);
				}
				let O = getValueByPath(d, ["sessionResumption"]);
				f !== void 0 && O != null && setValueByPath(f, ["setup", "sessionResumption"], sessionResumptionConfigToVertex(O));
				let A = getValueByPath(d, ["inputAudioTranscription"]);
				f !== void 0 && A != null && setValueByPath(f, ["setup", "inputAudioTranscription"], audioTranscriptionConfigToVertex());
				let j = getValueByPath(d, ["outputAudioTranscription"]);
				f !== void 0 && j != null && setValueByPath(f, ["setup", "outputAudioTranscription"], audioTranscriptionConfigToVertex());
				let F = getValueByPath(d, ["realtimeInputConfig"]);
				f !== void 0 && F != null && setValueByPath(f, ["setup", "realtimeInputConfig"], realtimeInputConfigToVertex(F));
				let U = getValueByPath(d, ["contextWindowCompression"]);
				f !== void 0 && U != null && setValueByPath(f, ["setup", "contextWindowCompression"], contextWindowCompressionConfigToVertex(U));
				let W = getValueByPath(d, ["proactivity"]);
				return f !== void 0 && W != null && setValueByPath(f, ["setup", "proactivity"], proactivityConfigToVertex(W)), p;
			}
			function liveConnectParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["setup", "model"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], liveConnectConfigToVertex(h, p)), p;
			}
			function activityStartToVertex() {
				let d = {};
				return d;
			}
			function activityEndToVertex() {
				let d = {};
				return d;
			}
			function liveSendRealtimeInputParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["media"]);
				p != null && setValueByPath(f, ["mediaChunks"], tBlobs(p));
				let m = getValueByPath(d, ["audio"]);
				m != null && setValueByPath(f, ["audio"], tAudioBlob(m));
				let h = getValueByPath(d, ["audioStreamEnd"]);
				h != null && setValueByPath(f, ["audioStreamEnd"], h);
				let g = getValueByPath(d, ["video"]);
				g != null && setValueByPath(f, ["video"], tImageBlob(g));
				let _ = getValueByPath(d, ["text"]);
				_ != null && setValueByPath(f, ["text"], _);
				let v = getValueByPath(d, ["activityStart"]);
				v != null && setValueByPath(f, ["activityStart"], activityStartToVertex());
				let b = getValueByPath(d, ["activityEnd"]);
				return b != null && setValueByPath(f, ["activityEnd"], activityEndToVertex()), f;
			}
			function liveServerSetupCompleteFromMldev() {
				let d = {};
				return d;
			}
			function videoMetadataFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataFromMldev$1(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobFromMldev$1(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataFromMldev$1(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallFromMldev$1(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partFromMldev$1(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function transcriptionFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["text"]);
				p != null && setValueByPath(f, ["text"], p);
				let m = getValueByPath(d, ["finished"]);
				return m != null && setValueByPath(f, ["finished"], m), f;
			}
			function urlMetadataFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["retrievedUrl"]);
				p != null && setValueByPath(f, ["retrievedUrl"], p);
				let m = getValueByPath(d, ["urlRetrievalStatus"]);
				return m != null && setValueByPath(f, ["urlRetrievalStatus"], m), f;
			}
			function urlContextMetadataFromMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["urlMetadata"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => urlMetadataFromMldev$1(d))), setValueByPath(f, ["urlMetadata"], d);
				}
				return f;
			}
			function liveServerContentFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["modelTurn"]);
				p != null && setValueByPath(f, ["modelTurn"], contentFromMldev$1(p));
				let m = getValueByPath(d, ["turnComplete"]);
				m != null && setValueByPath(f, ["turnComplete"], m);
				let h = getValueByPath(d, ["interrupted"]);
				h != null && setValueByPath(f, ["interrupted"], h);
				let g = getValueByPath(d, ["groundingMetadata"]);
				g != null && setValueByPath(f, ["groundingMetadata"], g);
				let _ = getValueByPath(d, ["generationComplete"]);
				_ != null && setValueByPath(f, ["generationComplete"], _);
				let v = getValueByPath(d, ["inputTranscription"]);
				v != null && setValueByPath(f, ["inputTranscription"], transcriptionFromMldev(v));
				let b = getValueByPath(d, ["outputTranscription"]);
				b != null && setValueByPath(f, ["outputTranscription"], transcriptionFromMldev(b));
				let x = getValueByPath(d, ["urlContextMetadata"]);
				return x != null && setValueByPath(f, ["urlContextMetadata"], urlContextMetadataFromMldev$1(x)), f;
			}
			function liveServerToolCallFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["functionCalls"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionCallFromMldev$1(d))), setValueByPath(f, ["functionCalls"], d);
				}
				return f;
			}
			function liveServerToolCallCancellationFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["ids"]);
				return p != null && setValueByPath(f, ["ids"], p), f;
			}
			function modalityTokenCountFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["modality"]);
				p != null && setValueByPath(f, ["modality"], p);
				let m = getValueByPath(d, ["tokenCount"]);
				return m != null && setValueByPath(f, ["tokenCount"], m), f;
			}
			function usageMetadataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["promptTokenCount"]);
				p != null && setValueByPath(f, ["promptTokenCount"], p);
				let m = getValueByPath(d, ["cachedContentTokenCount"]);
				m != null && setValueByPath(f, ["cachedContentTokenCount"], m);
				let h = getValueByPath(d, ["responseTokenCount"]);
				h != null && setValueByPath(f, ["responseTokenCount"], h);
				let g = getValueByPath(d, ["toolUsePromptTokenCount"]);
				g != null && setValueByPath(f, ["toolUsePromptTokenCount"], g);
				let _ = getValueByPath(d, ["thoughtsTokenCount"]);
				_ != null && setValueByPath(f, ["thoughtsTokenCount"], _);
				let v = getValueByPath(d, ["totalTokenCount"]);
				v != null && setValueByPath(f, ["totalTokenCount"], v);
				let b = getValueByPath(d, ["promptTokensDetails"]);
				if (b != null) {
					let d = b;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromMldev(d))), setValueByPath(f, ["promptTokensDetails"], d);
				}
				let x = getValueByPath(d, ["cacheTokensDetails"]);
				if (x != null) {
					let d = x;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromMldev(d))), setValueByPath(f, ["cacheTokensDetails"], d);
				}
				let C = getValueByPath(d, ["responseTokensDetails"]);
				if (C != null) {
					let d = C;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromMldev(d))), setValueByPath(f, ["responseTokensDetails"], d);
				}
				let w = getValueByPath(d, ["toolUsePromptTokensDetails"]);
				if (w != null) {
					let d = w;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromMldev(d))), setValueByPath(f, ["toolUsePromptTokensDetails"], d);
				}
				return f;
			}
			function liveServerGoAwayFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["timeLeft"]);
				return p != null && setValueByPath(f, ["timeLeft"], p), f;
			}
			function liveServerSessionResumptionUpdateFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["newHandle"]);
				p != null && setValueByPath(f, ["newHandle"], p);
				let m = getValueByPath(d, ["resumable"]);
				m != null && setValueByPath(f, ["resumable"], m);
				let h = getValueByPath(d, ["lastConsumedClientMessageIndex"]);
				return h != null && setValueByPath(f, ["lastConsumedClientMessageIndex"], h), f;
			}
			function liveServerMessageFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["setupComplete"]);
				p != null && setValueByPath(f, ["setupComplete"], liveServerSetupCompleteFromMldev());
				let m = getValueByPath(d, ["serverContent"]);
				m != null && setValueByPath(f, ["serverContent"], liveServerContentFromMldev(m));
				let h = getValueByPath(d, ["toolCall"]);
				h != null && setValueByPath(f, ["toolCall"], liveServerToolCallFromMldev(h));
				let g = getValueByPath(d, ["toolCallCancellation"]);
				g != null && setValueByPath(f, ["toolCallCancellation"], liveServerToolCallCancellationFromMldev(g));
				let _ = getValueByPath(d, ["usageMetadata"]);
				_ != null && setValueByPath(f, ["usageMetadata"], usageMetadataFromMldev(_));
				let v = getValueByPath(d, ["goAway"]);
				v != null && setValueByPath(f, ["goAway"], liveServerGoAwayFromMldev(v));
				let b = getValueByPath(d, ["sessionResumptionUpdate"]);
				return b != null && setValueByPath(f, ["sessionResumptionUpdate"], liveServerSessionResumptionUpdateFromMldev(b)), f;
			}
			function liveMusicServerSetupCompleteFromMldev() {
				let d = {};
				return d;
			}
			function weightedPromptFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["text"]);
				p != null && setValueByPath(f, ["text"], p);
				let m = getValueByPath(d, ["weight"]);
				return m != null && setValueByPath(f, ["weight"], m), f;
			}
			function liveMusicClientContentFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["weightedPrompts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => weightedPromptFromMldev(d))), setValueByPath(f, ["weightedPrompts"], d);
				}
				return f;
			}
			function liveMusicGenerationConfigFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["temperature"]);
				p != null && setValueByPath(f, ["temperature"], p);
				let m = getValueByPath(d, ["topK"]);
				m != null && setValueByPath(f, ["topK"], m);
				let h = getValueByPath(d, ["seed"]);
				h != null && setValueByPath(f, ["seed"], h);
				let g = getValueByPath(d, ["guidance"]);
				g != null && setValueByPath(f, ["guidance"], g);
				let _ = getValueByPath(d, ["bpm"]);
				_ != null && setValueByPath(f, ["bpm"], _);
				let v = getValueByPath(d, ["density"]);
				v != null && setValueByPath(f, ["density"], v);
				let b = getValueByPath(d, ["brightness"]);
				b != null && setValueByPath(f, ["brightness"], b);
				let x = getValueByPath(d, ["scale"]);
				x != null && setValueByPath(f, ["scale"], x);
				let C = getValueByPath(d, ["muteBass"]);
				C != null && setValueByPath(f, ["muteBass"], C);
				let w = getValueByPath(d, ["muteDrums"]);
				w != null && setValueByPath(f, ["muteDrums"], w);
				let T = getValueByPath(d, ["onlyBassAndDrums"]);
				T != null && setValueByPath(f, ["onlyBassAndDrums"], T);
				let E = getValueByPath(d, ["musicGenerationMode"]);
				return E != null && setValueByPath(f, ["musicGenerationMode"], E), f;
			}
			function liveMusicSourceMetadataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["clientContent"]);
				p != null && setValueByPath(f, ["clientContent"], liveMusicClientContentFromMldev(p));
				let m = getValueByPath(d, ["musicGenerationConfig"]);
				return m != null && setValueByPath(f, ["musicGenerationConfig"], liveMusicGenerationConfigFromMldev(m)), f;
			}
			function audioChunkFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				m != null && setValueByPath(f, ["mimeType"], m);
				let h = getValueByPath(d, ["sourceMetadata"]);
				return h != null && setValueByPath(f, ["sourceMetadata"], liveMusicSourceMetadataFromMldev(h)), f;
			}
			function liveMusicServerContentFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["audioChunks"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => audioChunkFromMldev(d))), setValueByPath(f, ["audioChunks"], d);
				}
				return f;
			}
			function liveMusicFilteredPromptFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["text"]);
				p != null && setValueByPath(f, ["text"], p);
				let m = getValueByPath(d, ["filteredReason"]);
				return m != null && setValueByPath(f, ["filteredReason"], m), f;
			}
			function liveMusicServerMessageFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["setupComplete"]);
				p != null && setValueByPath(f, ["setupComplete"], liveMusicServerSetupCompleteFromMldev());
				let m = getValueByPath(d, ["serverContent"]);
				m != null && setValueByPath(f, ["serverContent"], liveMusicServerContentFromMldev(m));
				let h = getValueByPath(d, ["filteredPrompt"]);
				return h != null && setValueByPath(f, ["filteredPrompt"], liveMusicFilteredPromptFromMldev(h)), f;
			}
			function liveServerSetupCompleteFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sessionId"]);
				return p != null && setValueByPath(f, ["sessionId"], p), f;
			}
			function videoMetadataFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["data"]);
				m != null && setValueByPath(f, ["data"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function fileDataFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["fileUri"]);
				m != null && setValueByPath(f, ["fileUri"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function functionCallFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataFromVertex$1(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobFromVertex$1(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataFromVertex$1(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallFromVertex$1(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentFromVertex$1(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partFromVertex$1(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function transcriptionFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["text"]);
				p != null && setValueByPath(f, ["text"], p);
				let m = getValueByPath(d, ["finished"]);
				return m != null && setValueByPath(f, ["finished"], m), f;
			}
			function liveServerContentFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["modelTurn"]);
				p != null && setValueByPath(f, ["modelTurn"], contentFromVertex$1(p));
				let m = getValueByPath(d, ["turnComplete"]);
				m != null && setValueByPath(f, ["turnComplete"], m);
				let h = getValueByPath(d, ["interrupted"]);
				h != null && setValueByPath(f, ["interrupted"], h);
				let g = getValueByPath(d, ["groundingMetadata"]);
				g != null && setValueByPath(f, ["groundingMetadata"], g);
				let _ = getValueByPath(d, ["generationComplete"]);
				_ != null && setValueByPath(f, ["generationComplete"], _);
				let v = getValueByPath(d, ["inputTranscription"]);
				v != null && setValueByPath(f, ["inputTranscription"], transcriptionFromVertex(v));
				let b = getValueByPath(d, ["outputTranscription"]);
				return b != null && setValueByPath(f, ["outputTranscription"], transcriptionFromVertex(b)), f;
			}
			function liveServerToolCallFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["functionCalls"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionCallFromVertex$1(d))), setValueByPath(f, ["functionCalls"], d);
				}
				return f;
			}
			function liveServerToolCallCancellationFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["ids"]);
				return p != null && setValueByPath(f, ["ids"], p), f;
			}
			function modalityTokenCountFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["modality"]);
				p != null && setValueByPath(f, ["modality"], p);
				let m = getValueByPath(d, ["tokenCount"]);
				return m != null && setValueByPath(f, ["tokenCount"], m), f;
			}
			function usageMetadataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["promptTokenCount"]);
				p != null && setValueByPath(f, ["promptTokenCount"], p);
				let m = getValueByPath(d, ["cachedContentTokenCount"]);
				m != null && setValueByPath(f, ["cachedContentTokenCount"], m);
				let h = getValueByPath(d, ["candidatesTokenCount"]);
				h != null && setValueByPath(f, ["responseTokenCount"], h);
				let g = getValueByPath(d, ["toolUsePromptTokenCount"]);
				g != null && setValueByPath(f, ["toolUsePromptTokenCount"], g);
				let _ = getValueByPath(d, ["thoughtsTokenCount"]);
				_ != null && setValueByPath(f, ["thoughtsTokenCount"], _);
				let v = getValueByPath(d, ["totalTokenCount"]);
				v != null && setValueByPath(f, ["totalTokenCount"], v);
				let b = getValueByPath(d, ["promptTokensDetails"]);
				if (b != null) {
					let d = b;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromVertex(d))), setValueByPath(f, ["promptTokensDetails"], d);
				}
				let x = getValueByPath(d, ["cacheTokensDetails"]);
				if (x != null) {
					let d = x;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromVertex(d))), setValueByPath(f, ["cacheTokensDetails"], d);
				}
				let C = getValueByPath(d, ["candidatesTokensDetails"]);
				if (C != null) {
					let d = C;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromVertex(d))), setValueByPath(f, ["responseTokensDetails"], d);
				}
				let w = getValueByPath(d, ["toolUsePromptTokensDetails"]);
				if (w != null) {
					let d = w;
					Array.isArray(d) && (d = d.map((d) => modalityTokenCountFromVertex(d))), setValueByPath(f, ["toolUsePromptTokensDetails"], d);
				}
				let T = getValueByPath(d, ["trafficType"]);
				return T != null && setValueByPath(f, ["trafficType"], T), f;
			}
			function liveServerGoAwayFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["timeLeft"]);
				return p != null && setValueByPath(f, ["timeLeft"], p), f;
			}
			function liveServerSessionResumptionUpdateFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["newHandle"]);
				p != null && setValueByPath(f, ["newHandle"], p);
				let m = getValueByPath(d, ["resumable"]);
				m != null && setValueByPath(f, ["resumable"], m);
				let h = getValueByPath(d, ["lastConsumedClientMessageIndex"]);
				return h != null && setValueByPath(f, ["lastConsumedClientMessageIndex"], h), f;
			}
			function liveServerMessageFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["setupComplete"]);
				p != null && setValueByPath(f, ["setupComplete"], liveServerSetupCompleteFromVertex(p));
				let m = getValueByPath(d, ["serverContent"]);
				m != null && setValueByPath(f, ["serverContent"], liveServerContentFromVertex(m));
				let h = getValueByPath(d, ["toolCall"]);
				h != null && setValueByPath(f, ["toolCall"], liveServerToolCallFromVertex(h));
				let g = getValueByPath(d, ["toolCallCancellation"]);
				g != null && setValueByPath(f, ["toolCallCancellation"], liveServerToolCallCancellationFromVertex(g));
				let _ = getValueByPath(d, ["usageMetadata"]);
				_ != null && setValueByPath(f, ["usageMetadata"], usageMetadataFromVertex(_));
				let v = getValueByPath(d, ["goAway"]);
				v != null && setValueByPath(f, ["goAway"], liveServerGoAwayFromVertex(v));
				let b = getValueByPath(d, ["sessionResumptionUpdate"]);
				return b != null && setValueByPath(f, ["sessionResumptionUpdate"], liveServerSessionResumptionUpdateFromVertex(b)), f;
			}
			function videoMetadataToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToMldev$1(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataToMldev$1(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToMldev$1(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToMldev$1(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToMldev$1(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToMldev$1(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToMldev$1(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function schemaToMldev(d) {
				let f = {}, p = getValueByPath(d, ["anyOf"]);
				p != null && setValueByPath(f, ["anyOf"], p);
				let m = getValueByPath(d, ["default"]);
				m != null && setValueByPath(f, ["default"], m);
				let h = getValueByPath(d, ["description"]);
				h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["enum"]);
				g != null && setValueByPath(f, ["enum"], g);
				let _ = getValueByPath(d, ["example"]);
				_ != null && setValueByPath(f, ["example"], _);
				let v = getValueByPath(d, ["format"]);
				v != null && setValueByPath(f, ["format"], v);
				let b = getValueByPath(d, ["items"]);
				b != null && setValueByPath(f, ["items"], b);
				let x = getValueByPath(d, ["maxItems"]);
				x != null && setValueByPath(f, ["maxItems"], x);
				let C = getValueByPath(d, ["maxLength"]);
				C != null && setValueByPath(f, ["maxLength"], C);
				let w = getValueByPath(d, ["maxProperties"]);
				w != null && setValueByPath(f, ["maxProperties"], w);
				let T = getValueByPath(d, ["maximum"]);
				T != null && setValueByPath(f, ["maximum"], T);
				let E = getValueByPath(d, ["minItems"]);
				E != null && setValueByPath(f, ["minItems"], E);
				let D = getValueByPath(d, ["minLength"]);
				D != null && setValueByPath(f, ["minLength"], D);
				let O = getValueByPath(d, ["minProperties"]);
				O != null && setValueByPath(f, ["minProperties"], O);
				let A = getValueByPath(d, ["minimum"]);
				A != null && setValueByPath(f, ["minimum"], A);
				let j = getValueByPath(d, ["nullable"]);
				j != null && setValueByPath(f, ["nullable"], j);
				let F = getValueByPath(d, ["pattern"]);
				F != null && setValueByPath(f, ["pattern"], F);
				let U = getValueByPath(d, ["properties"]);
				U != null && setValueByPath(f, ["properties"], U);
				let W = getValueByPath(d, ["propertyOrdering"]);
				W != null && setValueByPath(f, ["propertyOrdering"], W);
				let G = getValueByPath(d, ["required"]);
				G != null && setValueByPath(f, ["required"], G);
				let K = getValueByPath(d, ["title"]);
				K != null && setValueByPath(f, ["title"], K);
				let q = getValueByPath(d, ["type"]);
				return q != null && setValueByPath(f, ["type"], q), f;
			}
			function safetySettingToMldev(d) {
				let f = {};
				if (getValueByPath(d, ["method"]) !== void 0) throw Error("method parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["category"]);
				p != null && setValueByPath(f, ["category"], p);
				let m = getValueByPath(d, ["threshold"]);
				return m != null && setValueByPath(f, ["threshold"], m), f;
			}
			function functionDeclarationToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["behavior"]);
				p != null && setValueByPath(f, ["behavior"], p);
				let m = getValueByPath(d, ["description"]);
				m != null && setValueByPath(f, ["description"], m);
				let h = getValueByPath(d, ["name"]);
				h != null && setValueByPath(f, ["name"], h);
				let g = getValueByPath(d, ["parameters"]);
				g != null && setValueByPath(f, ["parameters"], g);
				let _ = getValueByPath(d, ["parametersJsonSchema"]);
				_ != null && setValueByPath(f, ["parametersJsonSchema"], _);
				let v = getValueByPath(d, ["response"]);
				v != null && setValueByPath(f, ["response"], v);
				let b = getValueByPath(d, ["responseJsonSchema"]);
				return b != null && setValueByPath(f, ["responseJsonSchema"], b), f;
			}
			function intervalToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				if (p != null && setValueByPath(f, ["timeRangeFilter"], intervalToMldev$1(p)), getValueByPath(d, ["excludeDomains"]) !== void 0) throw Error("excludeDomains parameter is not supported in Gemini API.");
				return f;
			}
			function dynamicRetrievalConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev$1(p)), f;
			}
			function urlContextToMldev$1() {
				let d = {};
				return d;
			}
			function toolComputerUseToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToMldev$1(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				if (getValueByPath(d, ["retrieval"]) !== void 0) throw Error("retrieval parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["googleSearch"]);
				m != null && setValueByPath(f, ["googleSearch"], googleSearchToMldev$1(m));
				let h = getValueByPath(d, ["googleSearchRetrieval"]);
				if (h != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToMldev$1(h)), getValueByPath(d, ["enterpriseWebSearch"]) !== void 0) throw Error("enterpriseWebSearch parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["googleMaps"]) !== void 0) throw Error("googleMaps parameter is not supported in Gemini API.");
				let g = getValueByPath(d, ["urlContext"]);
				g != null && setValueByPath(f, ["urlContext"], urlContextToMldev$1());
				let _ = getValueByPath(d, ["computerUse"]);
				_ != null && setValueByPath(f, ["computerUse"], toolComputerUseToMldev$1(_));
				let v = getValueByPath(d, ["codeExecution"]);
				return v != null && setValueByPath(f, ["codeExecution"], v), f;
			}
			function functionCallingConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["allowedFunctionNames"]);
				return m != null && setValueByPath(f, ["allowedFunctionNames"], m), f;
			}
			function latLngToMldev(d) {
				let f = {}, p = getValueByPath(d, ["latitude"]);
				p != null && setValueByPath(f, ["latitude"], p);
				let m = getValueByPath(d, ["longitude"]);
				return m != null && setValueByPath(f, ["longitude"], m), f;
			}
			function retrievalConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["latLng"]);
				p != null && setValueByPath(f, ["latLng"], latLngToMldev(p));
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function toolConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["functionCallingConfig"]);
				p != null && setValueByPath(f, ["functionCallingConfig"], functionCallingConfigToMldev(p));
				let m = getValueByPath(d, ["retrievalConfig"]);
				return m != null && setValueByPath(f, ["retrievalConfig"], retrievalConfigToMldev(m)), f;
			}
			function prebuiltVoiceConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["voiceName"]);
				return p != null && setValueByPath(f, ["voiceName"], p), f;
			}
			function voiceConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["prebuiltVoiceConfig"]);
				return p != null && setValueByPath(f, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev$1(p)), f;
			}
			function speakerVoiceConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["speaker"]);
				p != null && setValueByPath(f, ["speaker"], p);
				let m = getValueByPath(d, ["voiceConfig"]);
				return m != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev$1(m)), f;
			}
			function multiSpeakerVoiceConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["speakerVoiceConfigs"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => speakerVoiceConfigToMldev$1(d))), setValueByPath(f, ["speakerVoiceConfigs"], d);
				}
				return f;
			}
			function speechConfigToMldev$1(d) {
				let f = {}, p = getValueByPath(d, ["voiceConfig"]);
				p != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev$1(p));
				let m = getValueByPath(d, ["multiSpeakerVoiceConfig"]);
				m != null && setValueByPath(f, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev$1(m));
				let h = getValueByPath(d, ["languageCode"]);
				return h != null && setValueByPath(f, ["languageCode"], h), f;
			}
			function thinkingConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["includeThoughts"]);
				p != null && setValueByPath(f, ["includeThoughts"], p);
				let m = getValueByPath(d, ["thinkingBudget"]);
				return m != null && setValueByPath(f, ["thinkingBudget"], m), f;
			}
			function generateContentConfigToMldev(d, f, p) {
				let m = {}, h = getValueByPath(f, ["systemInstruction"]);
				p !== void 0 && h != null && setValueByPath(p, ["systemInstruction"], contentToMldev$1(tContent(h)));
				let g = getValueByPath(f, ["temperature"]);
				g != null && setValueByPath(m, ["temperature"], g);
				let _ = getValueByPath(f, ["topP"]);
				_ != null && setValueByPath(m, ["topP"], _);
				let v = getValueByPath(f, ["topK"]);
				v != null && setValueByPath(m, ["topK"], v);
				let b = getValueByPath(f, ["candidateCount"]);
				b != null && setValueByPath(m, ["candidateCount"], b);
				let x = getValueByPath(f, ["maxOutputTokens"]);
				x != null && setValueByPath(m, ["maxOutputTokens"], x);
				let C = getValueByPath(f, ["stopSequences"]);
				C != null && setValueByPath(m, ["stopSequences"], C);
				let w = getValueByPath(f, ["responseLogprobs"]);
				w != null && setValueByPath(m, ["responseLogprobs"], w);
				let T = getValueByPath(f, ["logprobs"]);
				T != null && setValueByPath(m, ["logprobs"], T);
				let E = getValueByPath(f, ["presencePenalty"]);
				E != null && setValueByPath(m, ["presencePenalty"], E);
				let D = getValueByPath(f, ["frequencyPenalty"]);
				D != null && setValueByPath(m, ["frequencyPenalty"], D);
				let O = getValueByPath(f, ["seed"]);
				O != null && setValueByPath(m, ["seed"], O);
				let A = getValueByPath(f, ["responseMimeType"]);
				A != null && setValueByPath(m, ["responseMimeType"], A);
				let j = getValueByPath(f, ["responseSchema"]);
				j != null && setValueByPath(m, ["responseSchema"], schemaToMldev(tSchema(j)));
				let F = getValueByPath(f, ["responseJsonSchema"]);
				if (F != null && setValueByPath(m, ["responseJsonSchema"], F), getValueByPath(f, ["routingConfig"]) !== void 0) throw Error("routingConfig parameter is not supported in Gemini API.");
				if (getValueByPath(f, ["modelSelectionConfig"]) !== void 0) throw Error("modelSelectionConfig parameter is not supported in Gemini API.");
				let U = getValueByPath(f, ["safetySettings"]);
				if (p !== void 0 && U != null) {
					let d = U;
					Array.isArray(d) && (d = d.map((d) => safetySettingToMldev(d))), setValueByPath(p, ["safetySettings"], d);
				}
				let W = getValueByPath(f, ["tools"]);
				if (p !== void 0 && W != null) {
					let d = tTools(W);
					Array.isArray(d) && (d = d.map((d) => toolToMldev$1(tTool(d)))), setValueByPath(p, ["tools"], d);
				}
				let G = getValueByPath(f, ["toolConfig"]);
				if (p !== void 0 && G != null && setValueByPath(p, ["toolConfig"], toolConfigToMldev(G)), getValueByPath(f, ["labels"]) !== void 0) throw Error("labels parameter is not supported in Gemini API.");
				let K = getValueByPath(f, ["cachedContent"]);
				p !== void 0 && K != null && setValueByPath(p, ["cachedContent"], tCachedContentName(d, K));
				let q = getValueByPath(f, ["responseModalities"]);
				q != null && setValueByPath(m, ["responseModalities"], q);
				let J = getValueByPath(f, ["mediaResolution"]);
				J != null && setValueByPath(m, ["mediaResolution"], J);
				let Y = getValueByPath(f, ["speechConfig"]);
				if (Y != null && setValueByPath(m, ["speechConfig"], speechConfigToMldev$1(tSpeechConfig(Y))), getValueByPath(f, ["audioTimestamp"]) !== void 0) throw Error("audioTimestamp parameter is not supported in Gemini API.");
				let X = getValueByPath(f, ["thinkingConfig"]);
				return X != null && setValueByPath(m, ["thinkingConfig"], thinkingConfigToMldev(X)), m;
			}
			function generateContentParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				if (h != null) {
					let d = tContents(h);
					Array.isArray(d) && (d = d.map((d) => contentToMldev$1(d))), setValueByPath(p, ["contents"], d);
				}
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["generationConfig"], generateContentConfigToMldev(d, g, p)), p;
			}
			function embedContentConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["taskType"]);
				f !== void 0 && m != null && setValueByPath(f, ["requests[]", "taskType"], m);
				let h = getValueByPath(d, ["title"]);
				f !== void 0 && h != null && setValueByPath(f, ["requests[]", "title"], h);
				let g = getValueByPath(d, ["outputDimensionality"]);
				if (f !== void 0 && g != null && setValueByPath(f, ["requests[]", "outputDimensionality"], g), getValueByPath(d, ["mimeType"]) !== void 0) throw Error("mimeType parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["autoTruncate"]) !== void 0) throw Error("autoTruncate parameter is not supported in Gemini API.");
				return p;
			}
			function embedContentParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				h != null && setValueByPath(p, ["requests[]", "content"], tContentsForEmbed(d, h));
				let g = getValueByPath(f, ["config"]);
				g != null && setValueByPath(p, ["config"], embedContentConfigToMldev(g, p));
				let _ = getValueByPath(f, ["model"]);
				return _ !== void 0 && setValueByPath(p, ["requests[]", "model"], tModel(d, _)), p;
			}
			function generateImagesConfigToMldev(d, f) {
				let p = {};
				if (getValueByPath(d, ["outputGcsUri"]) !== void 0) throw Error("outputGcsUri parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["negativePrompt"]) !== void 0) throw Error("negativePrompt parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["numberOfImages"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "sampleCount"], m);
				let h = getValueByPath(d, ["aspectRatio"]);
				f !== void 0 && h != null && setValueByPath(f, ["parameters", "aspectRatio"], h);
				let g = getValueByPath(d, ["guidanceScale"]);
				if (f !== void 0 && g != null && setValueByPath(f, ["parameters", "guidanceScale"], g), getValueByPath(d, ["seed"]) !== void 0) throw Error("seed parameter is not supported in Gemini API.");
				let _ = getValueByPath(d, ["safetyFilterLevel"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "safetySetting"], _);
				let v = getValueByPath(d, ["personGeneration"]);
				f !== void 0 && v != null && setValueByPath(f, ["parameters", "personGeneration"], v);
				let b = getValueByPath(d, ["includeSafetyAttributes"]);
				f !== void 0 && b != null && setValueByPath(f, ["parameters", "includeSafetyAttributes"], b);
				let x = getValueByPath(d, ["includeRaiReason"]);
				f !== void 0 && x != null && setValueByPath(f, ["parameters", "includeRaiReason"], x);
				let C = getValueByPath(d, ["language"]);
				f !== void 0 && C != null && setValueByPath(f, ["parameters", "language"], C);
				let w = getValueByPath(d, ["outputMimeType"]);
				f !== void 0 && w != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"mimeType"
				], w);
				let T = getValueByPath(d, ["outputCompressionQuality"]);
				if (f !== void 0 && T != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"compressionQuality"
				], T), getValueByPath(d, ["addWatermark"]) !== void 0) throw Error("addWatermark parameter is not supported in Gemini API.");
				let E = getValueByPath(d, ["imageSize"]);
				if (f !== void 0 && E != null && setValueByPath(f, ["parameters", "sampleImageSize"], E), getValueByPath(d, ["enhancePrompt"]) !== void 0) throw Error("enhancePrompt parameter is not supported in Gemini API.");
				return p;
			}
			function generateImagesParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["prompt"]);
				h != null && setValueByPath(p, ["instances[0]", "prompt"], h);
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], generateImagesConfigToMldev(g, p)), p;
			}
			function getModelParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "name"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function listModelsConfigToMldev(d, f, p) {
				let m = {}, h = getValueByPath(f, ["pageSize"]);
				p !== void 0 && h != null && setValueByPath(p, ["_query", "pageSize"], h);
				let g = getValueByPath(f, ["pageToken"]);
				p !== void 0 && g != null && setValueByPath(p, ["_query", "pageToken"], g);
				let _ = getValueByPath(f, ["filter"]);
				p !== void 0 && _ != null && setValueByPath(p, ["_query", "filter"], _);
				let v = getValueByPath(f, ["queryBase"]);
				return p !== void 0 && v != null && setValueByPath(p, ["_url", "models_url"], tModelsUrl(d, v)), m;
			}
			function listModelsParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["config"]);
				return m != null && setValueByPath(p, ["config"], listModelsConfigToMldev(d, m, p)), p;
			}
			function updateModelConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["displayName"]);
				f !== void 0 && m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["description"]);
				f !== void 0 && h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["defaultCheckpointId"]);
				return f !== void 0 && g != null && setValueByPath(f, ["defaultCheckpointId"], g), p;
			}
			function updateModelParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "name"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], updateModelConfigToMldev(h, p)), p;
			}
			function deleteModelParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "name"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function countTokensConfigToMldev(d) {
				let f = {};
				if (getValueByPath(d, ["systemInstruction"]) !== void 0) throw Error("systemInstruction parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["tools"]) !== void 0) throw Error("tools parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["generationConfig"]) !== void 0) throw Error("generationConfig parameter is not supported in Gemini API.");
				return f;
			}
			function countTokensParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				if (h != null) {
					let d = tContents(h);
					Array.isArray(d) && (d = d.map((d) => contentToMldev$1(d))), setValueByPath(p, ["contents"], d);
				}
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], countTokensConfigToMldev(g)), p;
			}
			function imageToMldev(d) {
				let f = {};
				if (getValueByPath(d, ["gcsUri"]) !== void 0) throw Error("gcsUri parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["imageBytes"]);
				p != null && setValueByPath(f, ["bytesBase64Encoded"], tBytes(p));
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function generateVideosSourceToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["prompt"]);
				f !== void 0 && m != null && setValueByPath(f, ["instances[0]", "prompt"], m);
				let h = getValueByPath(d, ["image"]);
				if (f !== void 0 && h != null && setValueByPath(f, ["instances[0]", "image"], imageToMldev(h)), getValueByPath(d, ["video"]) !== void 0) throw Error("video parameter is not supported in Gemini API.");
				return p;
			}
			function generateVideosConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["numberOfVideos"]);
				if (f !== void 0 && m != null && setValueByPath(f, ["parameters", "sampleCount"], m), getValueByPath(d, ["outputGcsUri"]) !== void 0) throw Error("outputGcsUri parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["fps"]) !== void 0) throw Error("fps parameter is not supported in Gemini API.");
				let h = getValueByPath(d, ["durationSeconds"]);
				if (f !== void 0 && h != null && setValueByPath(f, ["parameters", "durationSeconds"], h), getValueByPath(d, ["seed"]) !== void 0) throw Error("seed parameter is not supported in Gemini API.");
				let g = getValueByPath(d, ["aspectRatio"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "aspectRatio"], g);
				let _ = getValueByPath(d, ["resolution"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "resolution"], _);
				let v = getValueByPath(d, ["personGeneration"]);
				if (f !== void 0 && v != null && setValueByPath(f, ["parameters", "personGeneration"], v), getValueByPath(d, ["pubsubTopic"]) !== void 0) throw Error("pubsubTopic parameter is not supported in Gemini API.");
				let b = getValueByPath(d, ["negativePrompt"]);
				f !== void 0 && b != null && setValueByPath(f, ["parameters", "negativePrompt"], b);
				let x = getValueByPath(d, ["enhancePrompt"]);
				if (f !== void 0 && x != null && setValueByPath(f, ["parameters", "enhancePrompt"], x), getValueByPath(d, ["generateAudio"]) !== void 0) throw Error("generateAudio parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["lastFrame"]) !== void 0) throw Error("lastFrame parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["referenceImages"]) !== void 0) throw Error("referenceImages parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["mask"]) !== void 0) throw Error("mask parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["compressionQuality"]) !== void 0) throw Error("compressionQuality parameter is not supported in Gemini API.");
				return p;
			}
			function generateVideosParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["prompt"]);
				h != null && setValueByPath(p, ["instances[0]", "prompt"], h);
				let g = getValueByPath(f, ["image"]);
				if (g != null && setValueByPath(p, ["instances[0]", "image"], imageToMldev(g)), getValueByPath(f, ["video"]) !== void 0) throw Error("video parameter is not supported in Gemini API.");
				let _ = getValueByPath(f, ["source"]);
				_ != null && setValueByPath(p, ["config"], generateVideosSourceToMldev(_, p));
				let v = getValueByPath(f, ["config"]);
				return v != null && setValueByPath(p, ["config"], generateVideosConfigToMldev(v, p)), p;
			}
			function videoMetadataToVertex(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToVertex(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["data"]);
				m != null && setValueByPath(f, ["data"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function fileDataToVertex(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["fileUri"]);
				m != null && setValueByPath(f, ["fileUri"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function functionCallToVertex(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToVertex(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToVertex(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToVertex(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToVertex(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToVertex(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToVertex(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToVertex(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function schemaToVertex(d) {
				let f = {}, p = getValueByPath(d, ["anyOf"]);
				p != null && setValueByPath(f, ["anyOf"], p);
				let m = getValueByPath(d, ["default"]);
				m != null && setValueByPath(f, ["default"], m);
				let h = getValueByPath(d, ["description"]);
				h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["enum"]);
				g != null && setValueByPath(f, ["enum"], g);
				let _ = getValueByPath(d, ["example"]);
				_ != null && setValueByPath(f, ["example"], _);
				let v = getValueByPath(d, ["format"]);
				v != null && setValueByPath(f, ["format"], v);
				let b = getValueByPath(d, ["items"]);
				b != null && setValueByPath(f, ["items"], b);
				let x = getValueByPath(d, ["maxItems"]);
				x != null && setValueByPath(f, ["maxItems"], x);
				let C = getValueByPath(d, ["maxLength"]);
				C != null && setValueByPath(f, ["maxLength"], C);
				let w = getValueByPath(d, ["maxProperties"]);
				w != null && setValueByPath(f, ["maxProperties"], w);
				let T = getValueByPath(d, ["maximum"]);
				T != null && setValueByPath(f, ["maximum"], T);
				let E = getValueByPath(d, ["minItems"]);
				E != null && setValueByPath(f, ["minItems"], E);
				let D = getValueByPath(d, ["minLength"]);
				D != null && setValueByPath(f, ["minLength"], D);
				let O = getValueByPath(d, ["minProperties"]);
				O != null && setValueByPath(f, ["minProperties"], O);
				let A = getValueByPath(d, ["minimum"]);
				A != null && setValueByPath(f, ["minimum"], A);
				let j = getValueByPath(d, ["nullable"]);
				j != null && setValueByPath(f, ["nullable"], j);
				let F = getValueByPath(d, ["pattern"]);
				F != null && setValueByPath(f, ["pattern"], F);
				let U = getValueByPath(d, ["properties"]);
				U != null && setValueByPath(f, ["properties"], U);
				let W = getValueByPath(d, ["propertyOrdering"]);
				W != null && setValueByPath(f, ["propertyOrdering"], W);
				let G = getValueByPath(d, ["required"]);
				G != null && setValueByPath(f, ["required"], G);
				let K = getValueByPath(d, ["title"]);
				K != null && setValueByPath(f, ["title"], K);
				let q = getValueByPath(d, ["type"]);
				return q != null && setValueByPath(f, ["type"], q), f;
			}
			function modelSelectionConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["featureSelectionPreference"]);
				return p != null && setValueByPath(f, ["featureSelectionPreference"], p), f;
			}
			function safetySettingToVertex(d) {
				let f = {}, p = getValueByPath(d, ["method"]);
				p != null && setValueByPath(f, ["method"], p);
				let m = getValueByPath(d, ["category"]);
				m != null && setValueByPath(f, ["category"], m);
				let h = getValueByPath(d, ["threshold"]);
				return h != null && setValueByPath(f, ["threshold"], h), f;
			}
			function functionDeclarationToVertex(d) {
				let f = {};
				if (getValueByPath(d, ["behavior"]) !== void 0) throw Error("behavior parameter is not supported in Vertex AI.");
				let p = getValueByPath(d, ["description"]);
				p != null && setValueByPath(f, ["description"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["parameters"]);
				h != null && setValueByPath(f, ["parameters"], h);
				let g = getValueByPath(d, ["parametersJsonSchema"]);
				g != null && setValueByPath(f, ["parametersJsonSchema"], g);
				let _ = getValueByPath(d, ["response"]);
				_ != null && setValueByPath(f, ["response"], _);
				let v = getValueByPath(d, ["responseJsonSchema"]);
				return v != null && setValueByPath(f, ["responseJsonSchema"], v), f;
			}
			function intervalToVertex(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToVertex(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				p != null && setValueByPath(f, ["timeRangeFilter"], intervalToVertex(p));
				let m = getValueByPath(d, ["excludeDomains"]);
				return m != null && setValueByPath(f, ["excludeDomains"], m), f;
			}
			function dynamicRetrievalConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToVertex(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToVertex(p)), f;
			}
			function enterpriseWebSearchToVertex(d) {
				let f = {}, p = getValueByPath(d, ["excludeDomains"]);
				return p != null && setValueByPath(f, ["excludeDomains"], p), f;
			}
			function apiKeyConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["apiKeyString"]);
				return p != null && setValueByPath(f, ["apiKeyString"], p), f;
			}
			function authConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["apiKeyConfig"]);
				p != null && setValueByPath(f, ["apiKeyConfig"], apiKeyConfigToVertex(p));
				let m = getValueByPath(d, ["authType"]);
				m != null && setValueByPath(f, ["authType"], m);
				let h = getValueByPath(d, ["googleServiceAccountConfig"]);
				h != null && setValueByPath(f, ["googleServiceAccountConfig"], h);
				let g = getValueByPath(d, ["httpBasicAuthConfig"]);
				g != null && setValueByPath(f, ["httpBasicAuthConfig"], g);
				let _ = getValueByPath(d, ["oauthConfig"]);
				_ != null && setValueByPath(f, ["oauthConfig"], _);
				let v = getValueByPath(d, ["oidcConfig"]);
				return v != null && setValueByPath(f, ["oidcConfig"], v), f;
			}
			function googleMapsToVertex(d) {
				let f = {}, p = getValueByPath(d, ["authConfig"]);
				return p != null && setValueByPath(f, ["authConfig"], authConfigToVertex(p)), f;
			}
			function urlContextToVertex() {
				let d = {};
				return d;
			}
			function toolComputerUseToVertex(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToVertex(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToVertex(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				let m = getValueByPath(d, ["retrieval"]);
				m != null && setValueByPath(f, ["retrieval"], m);
				let h = getValueByPath(d, ["googleSearch"]);
				h != null && setValueByPath(f, ["googleSearch"], googleSearchToVertex(h));
				let g = getValueByPath(d, ["googleSearchRetrieval"]);
				g != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToVertex(g));
				let _ = getValueByPath(d, ["enterpriseWebSearch"]);
				_ != null && setValueByPath(f, ["enterpriseWebSearch"], enterpriseWebSearchToVertex(_));
				let v = getValueByPath(d, ["googleMaps"]);
				v != null && setValueByPath(f, ["googleMaps"], googleMapsToVertex(v));
				let b = getValueByPath(d, ["urlContext"]);
				b != null && setValueByPath(f, ["urlContext"], urlContextToVertex());
				let x = getValueByPath(d, ["computerUse"]);
				x != null && setValueByPath(f, ["computerUse"], toolComputerUseToVertex(x));
				let C = getValueByPath(d, ["codeExecution"]);
				return C != null && setValueByPath(f, ["codeExecution"], C), f;
			}
			function functionCallingConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["allowedFunctionNames"]);
				return m != null && setValueByPath(f, ["allowedFunctionNames"], m), f;
			}
			function latLngToVertex(d) {
				let f = {}, p = getValueByPath(d, ["latitude"]);
				p != null && setValueByPath(f, ["latitude"], p);
				let m = getValueByPath(d, ["longitude"]);
				return m != null && setValueByPath(f, ["longitude"], m), f;
			}
			function retrievalConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["latLng"]);
				p != null && setValueByPath(f, ["latLng"], latLngToVertex(p));
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function toolConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["functionCallingConfig"]);
				p != null && setValueByPath(f, ["functionCallingConfig"], functionCallingConfigToVertex(p));
				let m = getValueByPath(d, ["retrievalConfig"]);
				return m != null && setValueByPath(f, ["retrievalConfig"], retrievalConfigToVertex(m)), f;
			}
			function prebuiltVoiceConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["voiceName"]);
				return p != null && setValueByPath(f, ["voiceName"], p), f;
			}
			function voiceConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["prebuiltVoiceConfig"]);
				return p != null && setValueByPath(f, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToVertex(p)), f;
			}
			function speechConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["voiceConfig"]);
				if (p != null && setValueByPath(f, ["voiceConfig"], voiceConfigToVertex(p)), getValueByPath(d, ["multiSpeakerVoiceConfig"]) !== void 0) throw Error("multiSpeakerVoiceConfig parameter is not supported in Vertex AI.");
				let m = getValueByPath(d, ["languageCode"]);
				return m != null && setValueByPath(f, ["languageCode"], m), f;
			}
			function thinkingConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["includeThoughts"]);
				p != null && setValueByPath(f, ["includeThoughts"], p);
				let m = getValueByPath(d, ["thinkingBudget"]);
				return m != null && setValueByPath(f, ["thinkingBudget"], m), f;
			}
			function generateContentConfigToVertex(d, f, p) {
				let m = {}, h = getValueByPath(f, ["systemInstruction"]);
				p !== void 0 && h != null && setValueByPath(p, ["systemInstruction"], contentToVertex(tContent(h)));
				let g = getValueByPath(f, ["temperature"]);
				g != null && setValueByPath(m, ["temperature"], g);
				let _ = getValueByPath(f, ["topP"]);
				_ != null && setValueByPath(m, ["topP"], _);
				let v = getValueByPath(f, ["topK"]);
				v != null && setValueByPath(m, ["topK"], v);
				let b = getValueByPath(f, ["candidateCount"]);
				b != null && setValueByPath(m, ["candidateCount"], b);
				let x = getValueByPath(f, ["maxOutputTokens"]);
				x != null && setValueByPath(m, ["maxOutputTokens"], x);
				let C = getValueByPath(f, ["stopSequences"]);
				C != null && setValueByPath(m, ["stopSequences"], C);
				let w = getValueByPath(f, ["responseLogprobs"]);
				w != null && setValueByPath(m, ["responseLogprobs"], w);
				let T = getValueByPath(f, ["logprobs"]);
				T != null && setValueByPath(m, ["logprobs"], T);
				let E = getValueByPath(f, ["presencePenalty"]);
				E != null && setValueByPath(m, ["presencePenalty"], E);
				let D = getValueByPath(f, ["frequencyPenalty"]);
				D != null && setValueByPath(m, ["frequencyPenalty"], D);
				let O = getValueByPath(f, ["seed"]);
				O != null && setValueByPath(m, ["seed"], O);
				let A = getValueByPath(f, ["responseMimeType"]);
				A != null && setValueByPath(m, ["responseMimeType"], A);
				let j = getValueByPath(f, ["responseSchema"]);
				j != null && setValueByPath(m, ["responseSchema"], schemaToVertex(tSchema(j)));
				let F = getValueByPath(f, ["responseJsonSchema"]);
				F != null && setValueByPath(m, ["responseJsonSchema"], F);
				let U = getValueByPath(f, ["routingConfig"]);
				U != null && setValueByPath(m, ["routingConfig"], U);
				let W = getValueByPath(f, ["modelSelectionConfig"]);
				W != null && setValueByPath(m, ["modelConfig"], modelSelectionConfigToVertex(W));
				let G = getValueByPath(f, ["safetySettings"]);
				if (p !== void 0 && G != null) {
					let d = G;
					Array.isArray(d) && (d = d.map((d) => safetySettingToVertex(d))), setValueByPath(p, ["safetySettings"], d);
				}
				let K = getValueByPath(f, ["tools"]);
				if (p !== void 0 && K != null) {
					let d = tTools(K);
					Array.isArray(d) && (d = d.map((d) => toolToVertex(tTool(d)))), setValueByPath(p, ["tools"], d);
				}
				let q = getValueByPath(f, ["toolConfig"]);
				p !== void 0 && q != null && setValueByPath(p, ["toolConfig"], toolConfigToVertex(q));
				let J = getValueByPath(f, ["labels"]);
				p !== void 0 && J != null && setValueByPath(p, ["labels"], J);
				let Y = getValueByPath(f, ["cachedContent"]);
				p !== void 0 && Y != null && setValueByPath(p, ["cachedContent"], tCachedContentName(d, Y));
				let X = getValueByPath(f, ["responseModalities"]);
				X != null && setValueByPath(m, ["responseModalities"], X);
				let Z = getValueByPath(f, ["mediaResolution"]);
				Z != null && setValueByPath(m, ["mediaResolution"], Z);
				let Q = getValueByPath(f, ["speechConfig"]);
				Q != null && setValueByPath(m, ["speechConfig"], speechConfigToVertex(tSpeechConfig(Q)));
				let $ = getValueByPath(f, ["audioTimestamp"]);
				$ != null && setValueByPath(m, ["audioTimestamp"], $);
				let ee = getValueByPath(f, ["thinkingConfig"]);
				return ee != null && setValueByPath(m, ["thinkingConfig"], thinkingConfigToVertex(ee)), m;
			}
			function generateContentParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				if (h != null) {
					let d = tContents(h);
					Array.isArray(d) && (d = d.map((d) => contentToVertex(d))), setValueByPath(p, ["contents"], d);
				}
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["generationConfig"], generateContentConfigToVertex(d, g, p)), p;
			}
			function embedContentConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["taskType"]);
				f !== void 0 && m != null && setValueByPath(f, ["instances[]", "task_type"], m);
				let h = getValueByPath(d, ["title"]);
				f !== void 0 && h != null && setValueByPath(f, ["instances[]", "title"], h);
				let g = getValueByPath(d, ["outputDimensionality"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "outputDimensionality"], g);
				let _ = getValueByPath(d, ["mimeType"]);
				f !== void 0 && _ != null && setValueByPath(f, ["instances[]", "mimeType"], _);
				let v = getValueByPath(d, ["autoTruncate"]);
				return f !== void 0 && v != null && setValueByPath(f, ["parameters", "autoTruncate"], v), p;
			}
			function embedContentParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				h != null && setValueByPath(p, ["instances[]", "content"], tContentsForEmbed(d, h));
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], embedContentConfigToVertex(g, p)), p;
			}
			function generateImagesConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["outputGcsUri"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "storageUri"], m);
				let h = getValueByPath(d, ["negativePrompt"]);
				f !== void 0 && h != null && setValueByPath(f, ["parameters", "negativePrompt"], h);
				let g = getValueByPath(d, ["numberOfImages"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "sampleCount"], g);
				let _ = getValueByPath(d, ["aspectRatio"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "aspectRatio"], _);
				let v = getValueByPath(d, ["guidanceScale"]);
				f !== void 0 && v != null && setValueByPath(f, ["parameters", "guidanceScale"], v);
				let b = getValueByPath(d, ["seed"]);
				f !== void 0 && b != null && setValueByPath(f, ["parameters", "seed"], b);
				let x = getValueByPath(d, ["safetyFilterLevel"]);
				f !== void 0 && x != null && setValueByPath(f, ["parameters", "safetySetting"], x);
				let C = getValueByPath(d, ["personGeneration"]);
				f !== void 0 && C != null && setValueByPath(f, ["parameters", "personGeneration"], C);
				let w = getValueByPath(d, ["includeSafetyAttributes"]);
				f !== void 0 && w != null && setValueByPath(f, ["parameters", "includeSafetyAttributes"], w);
				let T = getValueByPath(d, ["includeRaiReason"]);
				f !== void 0 && T != null && setValueByPath(f, ["parameters", "includeRaiReason"], T);
				let E = getValueByPath(d, ["language"]);
				f !== void 0 && E != null && setValueByPath(f, ["parameters", "language"], E);
				let D = getValueByPath(d, ["outputMimeType"]);
				f !== void 0 && D != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"mimeType"
				], D);
				let O = getValueByPath(d, ["outputCompressionQuality"]);
				f !== void 0 && O != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"compressionQuality"
				], O);
				let A = getValueByPath(d, ["addWatermark"]);
				f !== void 0 && A != null && setValueByPath(f, ["parameters", "addWatermark"], A);
				let j = getValueByPath(d, ["imageSize"]);
				f !== void 0 && j != null && setValueByPath(f, ["parameters", "sampleImageSize"], j);
				let F = getValueByPath(d, ["enhancePrompt"]);
				return f !== void 0 && F != null && setValueByPath(f, ["parameters", "enhancePrompt"], F), p;
			}
			function generateImagesParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["prompt"]);
				h != null && setValueByPath(p, ["instances[0]", "prompt"], h);
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], generateImagesConfigToVertex(g, p)), p;
			}
			function imageToVertex(d) {
				let f = {}, p = getValueByPath(d, ["gcsUri"]);
				p != null && setValueByPath(f, ["gcsUri"], p);
				let m = getValueByPath(d, ["imageBytes"]);
				m != null && setValueByPath(f, ["bytesBase64Encoded"], tBytes(m));
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function maskReferenceConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["maskMode"]);
				p != null && setValueByPath(f, ["maskMode"], p);
				let m = getValueByPath(d, ["segmentationClasses"]);
				m != null && setValueByPath(f, ["maskClasses"], m);
				let h = getValueByPath(d, ["maskDilation"]);
				return h != null && setValueByPath(f, ["dilation"], h), f;
			}
			function controlReferenceConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["controlType"]);
				p != null && setValueByPath(f, ["controlType"], p);
				let m = getValueByPath(d, ["enableControlImageComputation"]);
				return m != null && setValueByPath(f, ["computeControl"], m), f;
			}
			function styleReferenceConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["styleDescription"]);
				return p != null && setValueByPath(f, ["styleDescription"], p), f;
			}
			function subjectReferenceConfigToVertex(d) {
				let f = {}, p = getValueByPath(d, ["subjectType"]);
				p != null && setValueByPath(f, ["subjectType"], p);
				let m = getValueByPath(d, ["subjectDescription"]);
				return m != null && setValueByPath(f, ["subjectDescription"], m), f;
			}
			function referenceImageAPIInternalToVertex(d) {
				let f = {}, p = getValueByPath(d, ["referenceImage"]);
				p != null && setValueByPath(f, ["referenceImage"], imageToVertex(p));
				let m = getValueByPath(d, ["referenceId"]);
				m != null && setValueByPath(f, ["referenceId"], m);
				let h = getValueByPath(d, ["referenceType"]);
				h != null && setValueByPath(f, ["referenceType"], h);
				let g = getValueByPath(d, ["maskImageConfig"]);
				g != null && setValueByPath(f, ["maskImageConfig"], maskReferenceConfigToVertex(g));
				let _ = getValueByPath(d, ["controlImageConfig"]);
				_ != null && setValueByPath(f, ["controlImageConfig"], controlReferenceConfigToVertex(_));
				let v = getValueByPath(d, ["styleImageConfig"]);
				v != null && setValueByPath(f, ["styleImageConfig"], styleReferenceConfigToVertex(v));
				let b = getValueByPath(d, ["subjectImageConfig"]);
				return b != null && setValueByPath(f, ["subjectImageConfig"], subjectReferenceConfigToVertex(b)), f;
			}
			function editImageConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["outputGcsUri"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "storageUri"], m);
				let h = getValueByPath(d, ["negativePrompt"]);
				f !== void 0 && h != null && setValueByPath(f, ["parameters", "negativePrompt"], h);
				let g = getValueByPath(d, ["numberOfImages"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "sampleCount"], g);
				let _ = getValueByPath(d, ["aspectRatio"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "aspectRatio"], _);
				let v = getValueByPath(d, ["guidanceScale"]);
				f !== void 0 && v != null && setValueByPath(f, ["parameters", "guidanceScale"], v);
				let b = getValueByPath(d, ["seed"]);
				f !== void 0 && b != null && setValueByPath(f, ["parameters", "seed"], b);
				let x = getValueByPath(d, ["safetyFilterLevel"]);
				f !== void 0 && x != null && setValueByPath(f, ["parameters", "safetySetting"], x);
				let C = getValueByPath(d, ["personGeneration"]);
				f !== void 0 && C != null && setValueByPath(f, ["parameters", "personGeneration"], C);
				let w = getValueByPath(d, ["includeSafetyAttributes"]);
				f !== void 0 && w != null && setValueByPath(f, ["parameters", "includeSafetyAttributes"], w);
				let T = getValueByPath(d, ["includeRaiReason"]);
				f !== void 0 && T != null && setValueByPath(f, ["parameters", "includeRaiReason"], T);
				let E = getValueByPath(d, ["language"]);
				f !== void 0 && E != null && setValueByPath(f, ["parameters", "language"], E);
				let D = getValueByPath(d, ["outputMimeType"]);
				f !== void 0 && D != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"mimeType"
				], D);
				let O = getValueByPath(d, ["outputCompressionQuality"]);
				f !== void 0 && O != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"compressionQuality"
				], O);
				let A = getValueByPath(d, ["addWatermark"]);
				f !== void 0 && A != null && setValueByPath(f, ["parameters", "addWatermark"], A);
				let j = getValueByPath(d, ["editMode"]);
				f !== void 0 && j != null && setValueByPath(f, ["parameters", "editMode"], j);
				let F = getValueByPath(d, ["baseSteps"]);
				return f !== void 0 && F != null && setValueByPath(f, [
					"parameters",
					"editConfig",
					"baseSteps"
				], F), p;
			}
			function editImageParametersInternalToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["prompt"]);
				h != null && setValueByPath(p, ["instances[0]", "prompt"], h);
				let g = getValueByPath(f, ["referenceImages"]);
				if (g != null) {
					let d = g;
					Array.isArray(d) && (d = d.map((d) => referenceImageAPIInternalToVertex(d))), setValueByPath(p, ["instances[0]", "referenceImages"], d);
				}
				let _ = getValueByPath(f, ["config"]);
				return _ != null && setValueByPath(p, ["config"], editImageConfigToVertex(_, p)), p;
			}
			function upscaleImageAPIConfigInternalToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["outputGcsUri"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "storageUri"], m);
				let h = getValueByPath(d, ["includeRaiReason"]);
				f !== void 0 && h != null && setValueByPath(f, ["parameters", "includeRaiReason"], h);
				let g = getValueByPath(d, ["outputMimeType"]);
				f !== void 0 && g != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"mimeType"
				], g);
				let _ = getValueByPath(d, ["outputCompressionQuality"]);
				f !== void 0 && _ != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"compressionQuality"
				], _);
				let v = getValueByPath(d, ["enhanceInputImage"]);
				f !== void 0 && v != null && setValueByPath(f, [
					"parameters",
					"upscaleConfig",
					"enhanceInputImage"
				], v);
				let b = getValueByPath(d, ["imagePreservationFactor"]);
				f !== void 0 && b != null && setValueByPath(f, [
					"parameters",
					"upscaleConfig",
					"imagePreservationFactor"
				], b);
				let x = getValueByPath(d, ["numberOfImages"]);
				f !== void 0 && x != null && setValueByPath(f, ["parameters", "sampleCount"], x);
				let C = getValueByPath(d, ["mode"]);
				return f !== void 0 && C != null && setValueByPath(f, ["parameters", "mode"], C), p;
			}
			function upscaleImageAPIParametersInternalToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["image"]);
				h != null && setValueByPath(p, ["instances[0]", "image"], imageToVertex(h));
				let g = getValueByPath(f, ["upscaleFactor"]);
				g != null && setValueByPath(p, [
					"parameters",
					"upscaleConfig",
					"upscaleFactor"
				], g);
				let _ = getValueByPath(f, ["config"]);
				return _ != null && setValueByPath(p, ["config"], upscaleImageAPIConfigInternalToVertex(_, p)), p;
			}
			function productImageToVertex(d) {
				let f = {}, p = getValueByPath(d, ["productImage"]);
				return p != null && setValueByPath(f, ["image"], imageToVertex(p)), f;
			}
			function recontextImageSourceToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["prompt"]);
				f !== void 0 && m != null && setValueByPath(f, ["instances[0]", "prompt"], m);
				let h = getValueByPath(d, ["personImage"]);
				f !== void 0 && h != null && setValueByPath(f, [
					"instances[0]",
					"personImage",
					"image"
				], imageToVertex(h));
				let g = getValueByPath(d, ["productImages"]);
				if (f !== void 0 && g != null) {
					let d = g;
					Array.isArray(d) && (d = d.map((d) => productImageToVertex(d))), setValueByPath(f, ["instances[0]", "productImages"], d);
				}
				return p;
			}
			function recontextImageConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["numberOfImages"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "sampleCount"], m);
				let h = getValueByPath(d, ["baseSteps"]);
				f !== void 0 && h != null && setValueByPath(f, [
					"parameters",
					"editConfig",
					"baseSteps"
				], h);
				let g = getValueByPath(d, ["outputGcsUri"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "storageUri"], g);
				let _ = getValueByPath(d, ["seed"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "seed"], _);
				let v = getValueByPath(d, ["safetyFilterLevel"]);
				f !== void 0 && v != null && setValueByPath(f, ["parameters", "safetySetting"], v);
				let b = getValueByPath(d, ["personGeneration"]);
				f !== void 0 && b != null && setValueByPath(f, ["parameters", "personGeneration"], b);
				let x = getValueByPath(d, ["addWatermark"]);
				f !== void 0 && x != null && setValueByPath(f, ["parameters", "addWatermark"], x);
				let C = getValueByPath(d, ["outputMimeType"]);
				f !== void 0 && C != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"mimeType"
				], C);
				let w = getValueByPath(d, ["outputCompressionQuality"]);
				f !== void 0 && w != null && setValueByPath(f, [
					"parameters",
					"outputOptions",
					"compressionQuality"
				], w);
				let T = getValueByPath(d, ["enhancePrompt"]);
				return f !== void 0 && T != null && setValueByPath(f, ["parameters", "enhancePrompt"], T), p;
			}
			function recontextImageParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["source"]);
				h != null && setValueByPath(p, ["config"], recontextImageSourceToVertex(h, p));
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], recontextImageConfigToVertex(g, p)), p;
			}
			function scribbleImageToVertex(d) {
				let f = {}, p = getValueByPath(d, ["image"]);
				return p != null && setValueByPath(f, ["image"], imageToVertex(p)), f;
			}
			function segmentImageSourceToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["prompt"]);
				f !== void 0 && m != null && setValueByPath(f, ["instances[0]", "prompt"], m);
				let h = getValueByPath(d, ["image"]);
				f !== void 0 && h != null && setValueByPath(f, ["instances[0]", "image"], imageToVertex(h));
				let g = getValueByPath(d, ["scribbleImage"]);
				return f !== void 0 && g != null && setValueByPath(f, ["instances[0]", "scribble"], scribbleImageToVertex(g)), p;
			}
			function segmentImageConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["mode"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "mode"], m);
				let h = getValueByPath(d, ["maxPredictions"]);
				f !== void 0 && h != null && setValueByPath(f, ["parameters", "maxPredictions"], h);
				let g = getValueByPath(d, ["confidenceThreshold"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "confidenceThreshold"], g);
				let _ = getValueByPath(d, ["maskDilation"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "maskDilation"], _);
				let v = getValueByPath(d, ["binaryColorThreshold"]);
				return f !== void 0 && v != null && setValueByPath(f, ["parameters", "binaryColorThreshold"], v), p;
			}
			function segmentImageParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["source"]);
				h != null && setValueByPath(p, ["config"], segmentImageSourceToVertex(h, p));
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], segmentImageConfigToVertex(g, p)), p;
			}
			function getModelParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "name"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function listModelsConfigToVertex(d, f, p) {
				let m = {}, h = getValueByPath(f, ["pageSize"]);
				p !== void 0 && h != null && setValueByPath(p, ["_query", "pageSize"], h);
				let g = getValueByPath(f, ["pageToken"]);
				p !== void 0 && g != null && setValueByPath(p, ["_query", "pageToken"], g);
				let _ = getValueByPath(f, ["filter"]);
				p !== void 0 && _ != null && setValueByPath(p, ["_query", "filter"], _);
				let v = getValueByPath(f, ["queryBase"]);
				return p !== void 0 && v != null && setValueByPath(p, ["_url", "models_url"], tModelsUrl(d, v)), m;
			}
			function listModelsParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["config"]);
				return m != null && setValueByPath(p, ["config"], listModelsConfigToVertex(d, m, p)), p;
			}
			function updateModelConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["displayName"]);
				f !== void 0 && m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["description"]);
				f !== void 0 && h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["defaultCheckpointId"]);
				return f !== void 0 && g != null && setValueByPath(f, ["defaultCheckpointId"], g), p;
			}
			function updateModelParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], updateModelConfigToVertex(h, p)), p;
			}
			function deleteModelParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "name"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], h), p;
			}
			function countTokensConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["systemInstruction"]);
				f !== void 0 && m != null && setValueByPath(f, ["systemInstruction"], contentToVertex(tContent(m)));
				let h = getValueByPath(d, ["tools"]);
				if (f !== void 0 && h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => toolToVertex(d))), setValueByPath(f, ["tools"], d);
				}
				let g = getValueByPath(d, ["generationConfig"]);
				return f !== void 0 && g != null && setValueByPath(f, ["generationConfig"], g), p;
			}
			function countTokensParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				if (h != null) {
					let d = tContents(h);
					Array.isArray(d) && (d = d.map((d) => contentToVertex(d))), setValueByPath(p, ["contents"], d);
				}
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], countTokensConfigToVertex(g, p)), p;
			}
			function computeTokensParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["contents"]);
				if (h != null) {
					let d = tContents(h);
					Array.isArray(d) && (d = d.map((d) => contentToVertex(d))), setValueByPath(p, ["contents"], d);
				}
				let g = getValueByPath(f, ["config"]);
				return g != null && setValueByPath(p, ["config"], g), p;
			}
			function videoToVertex(d) {
				let f = {}, p = getValueByPath(d, ["uri"]);
				p != null && setValueByPath(f, ["gcsUri"], p);
				let m = getValueByPath(d, ["videoBytes"]);
				m != null && setValueByPath(f, ["bytesBase64Encoded"], tBytes(m));
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function generateVideosSourceToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["prompt"]);
				f !== void 0 && m != null && setValueByPath(f, ["instances[0]", "prompt"], m);
				let h = getValueByPath(d, ["image"]);
				f !== void 0 && h != null && setValueByPath(f, ["instances[0]", "image"], imageToVertex(h));
				let g = getValueByPath(d, ["video"]);
				return f !== void 0 && g != null && setValueByPath(f, ["instances[0]", "video"], videoToVertex(g)), p;
			}
			function videoGenerationReferenceImageToVertex(d) {
				let f = {}, p = getValueByPath(d, ["image"]);
				p != null && setValueByPath(f, ["image"], imageToVertex(p));
				let m = getValueByPath(d, ["referenceType"]);
				return m != null && setValueByPath(f, ["referenceType"], m), f;
			}
			function videoGenerationMaskToVertex(d) {
				let f = {}, p = getValueByPath(d, ["image"]);
				p != null && setValueByPath(f, ["_self"], imageToVertex(p));
				let m = getValueByPath(d, ["maskMode"]);
				return m != null && setValueByPath(f, ["maskMode"], m), f;
			}
			function generateVideosConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["numberOfVideos"]);
				f !== void 0 && m != null && setValueByPath(f, ["parameters", "sampleCount"], m);
				let h = getValueByPath(d, ["outputGcsUri"]);
				f !== void 0 && h != null && setValueByPath(f, ["parameters", "storageUri"], h);
				let g = getValueByPath(d, ["fps"]);
				f !== void 0 && g != null && setValueByPath(f, ["parameters", "fps"], g);
				let _ = getValueByPath(d, ["durationSeconds"]);
				f !== void 0 && _ != null && setValueByPath(f, ["parameters", "durationSeconds"], _);
				let v = getValueByPath(d, ["seed"]);
				f !== void 0 && v != null && setValueByPath(f, ["parameters", "seed"], v);
				let b = getValueByPath(d, ["aspectRatio"]);
				f !== void 0 && b != null && setValueByPath(f, ["parameters", "aspectRatio"], b);
				let x = getValueByPath(d, ["resolution"]);
				f !== void 0 && x != null && setValueByPath(f, ["parameters", "resolution"], x);
				let C = getValueByPath(d, ["personGeneration"]);
				f !== void 0 && C != null && setValueByPath(f, ["parameters", "personGeneration"], C);
				let w = getValueByPath(d, ["pubsubTopic"]);
				f !== void 0 && w != null && setValueByPath(f, ["parameters", "pubsubTopic"], w);
				let T = getValueByPath(d, ["negativePrompt"]);
				f !== void 0 && T != null && setValueByPath(f, ["parameters", "negativePrompt"], T);
				let E = getValueByPath(d, ["enhancePrompt"]);
				f !== void 0 && E != null && setValueByPath(f, ["parameters", "enhancePrompt"], E);
				let D = getValueByPath(d, ["generateAudio"]);
				f !== void 0 && D != null && setValueByPath(f, ["parameters", "generateAudio"], D);
				let O = getValueByPath(d, ["lastFrame"]);
				f !== void 0 && O != null && setValueByPath(f, ["instances[0]", "lastFrame"], imageToVertex(O));
				let A = getValueByPath(d, ["referenceImages"]);
				if (f !== void 0 && A != null) {
					let d = A;
					Array.isArray(d) && (d = d.map((d) => videoGenerationReferenceImageToVertex(d))), setValueByPath(f, ["instances[0]", "referenceImages"], d);
				}
				let j = getValueByPath(d, ["mask"]);
				f !== void 0 && j != null && setValueByPath(f, ["instances[0]", "mask"], videoGenerationMaskToVertex(j));
				let F = getValueByPath(d, ["compressionQuality"]);
				return f !== void 0 && F != null && setValueByPath(f, ["parameters", "compressionQuality"], F), p;
			}
			function generateVideosParametersToVertex(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["_url", "model"], tModel(d, m));
				let h = getValueByPath(f, ["prompt"]);
				h != null && setValueByPath(p, ["instances[0]", "prompt"], h);
				let g = getValueByPath(f, ["image"]);
				g != null && setValueByPath(p, ["instances[0]", "image"], imageToVertex(g));
				let _ = getValueByPath(f, ["video"]);
				_ != null && setValueByPath(p, ["instances[0]", "video"], videoToVertex(_));
				let v = getValueByPath(f, ["source"]);
				v != null && setValueByPath(p, ["config"], generateVideosSourceToVertex(v, p));
				let b = getValueByPath(f, ["config"]);
				return b != null && setValueByPath(p, ["config"], generateVideosConfigToVertex(b, p)), p;
			}
			function videoMetadataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataFromMldev(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobFromMldev(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataFromMldev(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallFromMldev(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partFromMldev(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function citationMetadataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["citationSources"]);
				return p != null && setValueByPath(f, ["citations"], p), f;
			}
			function urlMetadataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["retrievedUrl"]);
				p != null && setValueByPath(f, ["retrievedUrl"], p);
				let m = getValueByPath(d, ["urlRetrievalStatus"]);
				return m != null && setValueByPath(f, ["urlRetrievalStatus"], m), f;
			}
			function urlContextMetadataFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["urlMetadata"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => urlMetadataFromMldev(d))), setValueByPath(f, ["urlMetadata"], d);
				}
				return f;
			}
			function candidateFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["content"]);
				p != null && setValueByPath(f, ["content"], contentFromMldev(p));
				let m = getValueByPath(d, ["citationMetadata"]);
				m != null && setValueByPath(f, ["citationMetadata"], citationMetadataFromMldev(m));
				let h = getValueByPath(d, ["tokenCount"]);
				h != null && setValueByPath(f, ["tokenCount"], h);
				let g = getValueByPath(d, ["finishReason"]);
				g != null && setValueByPath(f, ["finishReason"], g);
				let _ = getValueByPath(d, ["urlContextMetadata"]);
				_ != null && setValueByPath(f, ["urlContextMetadata"], urlContextMetadataFromMldev(_));
				let v = getValueByPath(d, ["avgLogprobs"]);
				v != null && setValueByPath(f, ["avgLogprobs"], v);
				let b = getValueByPath(d, ["groundingMetadata"]);
				b != null && setValueByPath(f, ["groundingMetadata"], b);
				let x = getValueByPath(d, ["index"]);
				x != null && setValueByPath(f, ["index"], x);
				let C = getValueByPath(d, ["logprobsResult"]);
				C != null && setValueByPath(f, ["logprobsResult"], C);
				let w = getValueByPath(d, ["safetyRatings"]);
				return w != null && setValueByPath(f, ["safetyRatings"], w), f;
			}
			function generateContentResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["candidates"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => candidateFromMldev(d))), setValueByPath(f, ["candidates"], d);
				}
				let h = getValueByPath(d, ["modelVersion"]);
				h != null && setValueByPath(f, ["modelVersion"], h);
				let g = getValueByPath(d, ["promptFeedback"]);
				g != null && setValueByPath(f, ["promptFeedback"], g);
				let _ = getValueByPath(d, ["responseId"]);
				_ != null && setValueByPath(f, ["responseId"], _);
				let v = getValueByPath(d, ["usageMetadata"]);
				return v != null && setValueByPath(f, ["usageMetadata"], v), f;
			}
			function contentEmbeddingFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["values"]);
				return p != null && setValueByPath(f, ["values"], p), f;
			}
			function embedContentMetadataFromMldev() {
				let d = {};
				return d;
			}
			function embedContentResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["embeddings"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => contentEmbeddingFromMldev(d))), setValueByPath(f, ["embeddings"], d);
				}
				let h = getValueByPath(d, ["metadata"]);
				return h != null && setValueByPath(f, ["metadata"], embedContentMetadataFromMldev()), f;
			}
			function imageFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["bytesBase64Encoded"]);
				p != null && setValueByPath(f, ["imageBytes"], tBytes(p));
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function safetyAttributesFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["safetyAttributes", "categories"]);
				p != null && setValueByPath(f, ["categories"], p);
				let m = getValueByPath(d, ["safetyAttributes", "scores"]);
				m != null && setValueByPath(f, ["scores"], m);
				let h = getValueByPath(d, ["contentType"]);
				return h != null && setValueByPath(f, ["contentType"], h), f;
			}
			function generatedImageFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				p != null && setValueByPath(f, ["image"], imageFromMldev(p));
				let m = getValueByPath(d, ["raiFilteredReason"]);
				m != null && setValueByPath(f, ["raiFilteredReason"], m);
				let h = getValueByPath(d, ["_self"]);
				return h != null && setValueByPath(f, ["safetyAttributes"], safetyAttributesFromMldev(h)), f;
			}
			function generateImagesResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["predictions"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => generatedImageFromMldev(d))), setValueByPath(f, ["generatedImages"], d);
				}
				let h = getValueByPath(d, ["positivePromptSafetyAttributes"]);
				return h != null && setValueByPath(f, ["positivePromptSafetyAttributes"], safetyAttributesFromMldev(h)), f;
			}
			function tunedModelInfoFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["baseModel"]);
				p != null && setValueByPath(f, ["baseModel"], p);
				let m = getValueByPath(d, ["createTime"]);
				m != null && setValueByPath(f, ["createTime"], m);
				let h = getValueByPath(d, ["updateTime"]);
				return h != null && setValueByPath(f, ["updateTime"], h), f;
			}
			function modelFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["description"]);
				h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["version"]);
				g != null && setValueByPath(f, ["version"], g);
				let _ = getValueByPath(d, ["_self"]);
				_ != null && setValueByPath(f, ["tunedModelInfo"], tunedModelInfoFromMldev(_));
				let v = getValueByPath(d, ["inputTokenLimit"]);
				v != null && setValueByPath(f, ["inputTokenLimit"], v);
				let b = getValueByPath(d, ["outputTokenLimit"]);
				b != null && setValueByPath(f, ["outputTokenLimit"], b);
				let x = getValueByPath(d, ["supportedGenerationMethods"]);
				return x != null && setValueByPath(f, ["supportedActions"], x), f;
			}
			function listModelsResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["_self"]);
				if (h != null) {
					let d = tExtractModels(h);
					Array.isArray(d) && (d = d.map((d) => modelFromMldev(d))), setValueByPath(f, ["models"], d);
				}
				return f;
			}
			function deleteModelResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				return p != null && setValueByPath(f, ["sdkHttpResponse"], p), f;
			}
			function countTokensResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["totalTokens"]);
				m != null && setValueByPath(f, ["totalTokens"], m);
				let h = getValueByPath(d, ["cachedContentTokenCount"]);
				return h != null && setValueByPath(f, ["cachedContentTokenCount"], h), f;
			}
			function videoFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["video", "uri"]);
				p != null && setValueByPath(f, ["uri"], p);
				let m = getValueByPath(d, ["video", "encodedVideo"]);
				m != null && setValueByPath(f, ["videoBytes"], tBytes(m));
				let h = getValueByPath(d, ["encoding"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function generatedVideoFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				return p != null && setValueByPath(f, ["video"], videoFromMldev(p)), f;
			}
			function generateVideosResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["generatedSamples"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => generatedVideoFromMldev(d))), setValueByPath(f, ["generatedVideos"], d);
				}
				let m = getValueByPath(d, ["raiMediaFilteredCount"]);
				m != null && setValueByPath(f, ["raiMediaFilteredCount"], m);
				let h = getValueByPath(d, ["raiMediaFilteredReasons"]);
				return h != null && setValueByPath(f, ["raiMediaFilteredReasons"], h), f;
			}
			function generateVideosOperationFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["metadata"]);
				m != null && setValueByPath(f, ["metadata"], m);
				let h = getValueByPath(d, ["done"]);
				h != null && setValueByPath(f, ["done"], h);
				let g = getValueByPath(d, ["error"]);
				g != null && setValueByPath(f, ["error"], g);
				let _ = getValueByPath(d, ["response", "generateVideoResponse"]);
				return _ != null && setValueByPath(f, ["response"], generateVideosResponseFromMldev(_)), f;
			}
			function videoMetadataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["data"]);
				m != null && setValueByPath(f, ["data"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function fileDataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["displayName"]);
				p != null && setValueByPath(f, ["displayName"], p);
				let m = getValueByPath(d, ["fileUri"]);
				m != null && setValueByPath(f, ["fileUri"], m);
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function functionCallFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataFromVertex(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobFromVertex(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataFromVertex(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallFromVertex(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partFromVertex(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function citationMetadataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["citations"]);
				return p != null && setValueByPath(f, ["citations"], p), f;
			}
			function urlMetadataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["retrievedUrl"]);
				p != null && setValueByPath(f, ["retrievedUrl"], p);
				let m = getValueByPath(d, ["urlRetrievalStatus"]);
				return m != null && setValueByPath(f, ["urlRetrievalStatus"], m), f;
			}
			function urlContextMetadataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["urlMetadata"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => urlMetadataFromVertex(d))), setValueByPath(f, ["urlMetadata"], d);
				}
				return f;
			}
			function candidateFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["content"]);
				p != null && setValueByPath(f, ["content"], contentFromVertex(p));
				let m = getValueByPath(d, ["citationMetadata"]);
				m != null && setValueByPath(f, ["citationMetadata"], citationMetadataFromVertex(m));
				let h = getValueByPath(d, ["finishMessage"]);
				h != null && setValueByPath(f, ["finishMessage"], h);
				let g = getValueByPath(d, ["finishReason"]);
				g != null && setValueByPath(f, ["finishReason"], g);
				let _ = getValueByPath(d, ["urlContextMetadata"]);
				_ != null && setValueByPath(f, ["urlContextMetadata"], urlContextMetadataFromVertex(_));
				let v = getValueByPath(d, ["avgLogprobs"]);
				v != null && setValueByPath(f, ["avgLogprobs"], v);
				let b = getValueByPath(d, ["groundingMetadata"]);
				b != null && setValueByPath(f, ["groundingMetadata"], b);
				let x = getValueByPath(d, ["index"]);
				x != null && setValueByPath(f, ["index"], x);
				let C = getValueByPath(d, ["logprobsResult"]);
				C != null && setValueByPath(f, ["logprobsResult"], C);
				let w = getValueByPath(d, ["safetyRatings"]);
				return w != null && setValueByPath(f, ["safetyRatings"], w), f;
			}
			function generateContentResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["candidates"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => candidateFromVertex(d))), setValueByPath(f, ["candidates"], d);
				}
				let h = getValueByPath(d, ["createTime"]);
				h != null && setValueByPath(f, ["createTime"], h);
				let g = getValueByPath(d, ["modelVersion"]);
				g != null && setValueByPath(f, ["modelVersion"], g);
				let _ = getValueByPath(d, ["promptFeedback"]);
				_ != null && setValueByPath(f, ["promptFeedback"], _);
				let v = getValueByPath(d, ["responseId"]);
				v != null && setValueByPath(f, ["responseId"], v);
				let b = getValueByPath(d, ["usageMetadata"]);
				return b != null && setValueByPath(f, ["usageMetadata"], b), f;
			}
			function contentEmbeddingStatisticsFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["truncated"]);
				p != null && setValueByPath(f, ["truncated"], p);
				let m = getValueByPath(d, ["token_count"]);
				return m != null && setValueByPath(f, ["tokenCount"], m), f;
			}
			function contentEmbeddingFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["values"]);
				p != null && setValueByPath(f, ["values"], p);
				let m = getValueByPath(d, ["statistics"]);
				return m != null && setValueByPath(f, ["statistics"], contentEmbeddingStatisticsFromVertex(m)), f;
			}
			function embedContentMetadataFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["billableCharacterCount"]);
				return p != null && setValueByPath(f, ["billableCharacterCount"], p), f;
			}
			function embedContentResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["predictions[]", "embeddings"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => contentEmbeddingFromVertex(d))), setValueByPath(f, ["embeddings"], d);
				}
				let h = getValueByPath(d, ["metadata"]);
				return h != null && setValueByPath(f, ["metadata"], embedContentMetadataFromVertex(h)), f;
			}
			function imageFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["gcsUri"]);
				p != null && setValueByPath(f, ["gcsUri"], p);
				let m = getValueByPath(d, ["bytesBase64Encoded"]);
				m != null && setValueByPath(f, ["imageBytes"], tBytes(m));
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function safetyAttributesFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["safetyAttributes", "categories"]);
				p != null && setValueByPath(f, ["categories"], p);
				let m = getValueByPath(d, ["safetyAttributes", "scores"]);
				m != null && setValueByPath(f, ["scores"], m);
				let h = getValueByPath(d, ["contentType"]);
				return h != null && setValueByPath(f, ["contentType"], h), f;
			}
			function generatedImageFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				p != null && setValueByPath(f, ["image"], imageFromVertex(p));
				let m = getValueByPath(d, ["raiFilteredReason"]);
				m != null && setValueByPath(f, ["raiFilteredReason"], m);
				let h = getValueByPath(d, ["_self"]);
				h != null && setValueByPath(f, ["safetyAttributes"], safetyAttributesFromVertex(h));
				let g = getValueByPath(d, ["prompt"]);
				return g != null && setValueByPath(f, ["enhancedPrompt"], g), f;
			}
			function generateImagesResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["predictions"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => generatedImageFromVertex(d))), setValueByPath(f, ["generatedImages"], d);
				}
				let h = getValueByPath(d, ["positivePromptSafetyAttributes"]);
				return h != null && setValueByPath(f, ["positivePromptSafetyAttributes"], safetyAttributesFromVertex(h)), f;
			}
			function editImageResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["predictions"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => generatedImageFromVertex(d))), setValueByPath(f, ["generatedImages"], d);
				}
				return f;
			}
			function upscaleImageResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["predictions"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => generatedImageFromVertex(d))), setValueByPath(f, ["generatedImages"], d);
				}
				return f;
			}
			function recontextImageResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["predictions"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => generatedImageFromVertex(d))), setValueByPath(f, ["generatedImages"], d);
				}
				return f;
			}
			function entityLabelFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["label"]);
				p != null && setValueByPath(f, ["label"], p);
				let m = getValueByPath(d, ["score"]);
				return m != null && setValueByPath(f, ["score"], m), f;
			}
			function generatedImageMaskFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				p != null && setValueByPath(f, ["mask"], imageFromVertex(p));
				let m = getValueByPath(d, ["labels"]);
				if (m != null) {
					let d = m;
					Array.isArray(d) && (d = d.map((d) => entityLabelFromVertex(d))), setValueByPath(f, ["labels"], d);
				}
				return f;
			}
			function segmentImageResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["predictions"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => generatedImageMaskFromVertex(d))), setValueByPath(f, ["generatedMasks"], d);
				}
				return f;
			}
			function endpointFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["endpoint"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["deployedModelId"]);
				return m != null && setValueByPath(f, ["deployedModelId"], m), f;
			}
			function tunedModelInfoFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["labels", "google-vertex-llm-tuning-base-model-id"]);
				p != null && setValueByPath(f, ["baseModel"], p);
				let m = getValueByPath(d, ["createTime"]);
				m != null && setValueByPath(f, ["createTime"], m);
				let h = getValueByPath(d, ["updateTime"]);
				return h != null && setValueByPath(f, ["updateTime"], h), f;
			}
			function checkpointFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["checkpointId"]);
				p != null && setValueByPath(f, ["checkpointId"], p);
				let m = getValueByPath(d, ["epoch"]);
				m != null && setValueByPath(f, ["epoch"], m);
				let h = getValueByPath(d, ["step"]);
				return h != null && setValueByPath(f, ["step"], h), f;
			}
			function modelFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["displayName"]);
				m != null && setValueByPath(f, ["displayName"], m);
				let h = getValueByPath(d, ["description"]);
				h != null && setValueByPath(f, ["description"], h);
				let g = getValueByPath(d, ["versionId"]);
				g != null && setValueByPath(f, ["version"], g);
				let _ = getValueByPath(d, ["deployedModels"]);
				if (_ != null) {
					let d = _;
					Array.isArray(d) && (d = d.map((d) => endpointFromVertex(d))), setValueByPath(f, ["endpoints"], d);
				}
				let v = getValueByPath(d, ["labels"]);
				v != null && setValueByPath(f, ["labels"], v);
				let b = getValueByPath(d, ["_self"]);
				b != null && setValueByPath(f, ["tunedModelInfo"], tunedModelInfoFromVertex(b));
				let x = getValueByPath(d, ["defaultCheckpointId"]);
				x != null && setValueByPath(f, ["defaultCheckpointId"], x);
				let C = getValueByPath(d, ["checkpoints"]);
				if (C != null) {
					let d = C;
					Array.isArray(d) && (d = d.map((d) => checkpointFromVertex(d))), setValueByPath(f, ["checkpoints"], d);
				}
				return f;
			}
			function listModelsResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["_self"]);
				if (h != null) {
					let d = tExtractModels(h);
					Array.isArray(d) && (d = d.map((d) => modelFromVertex(d))), setValueByPath(f, ["models"], d);
				}
				return f;
			}
			function deleteModelResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				return p != null && setValueByPath(f, ["sdkHttpResponse"], p), f;
			}
			function countTokensResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["totalTokens"]);
				return m != null && setValueByPath(f, ["totalTokens"], m), f;
			}
			function computeTokensResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["tokensInfo"]);
				return m != null && setValueByPath(f, ["tokensInfo"], m), f;
			}
			function videoFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["gcsUri"]);
				p != null && setValueByPath(f, ["uri"], p);
				let m = getValueByPath(d, ["bytesBase64Encoded"]);
				m != null && setValueByPath(f, ["videoBytes"], tBytes(m));
				let h = getValueByPath(d, ["mimeType"]);
				return h != null && setValueByPath(f, ["mimeType"], h), f;
			}
			function generatedVideoFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["_self"]);
				return p != null && setValueByPath(f, ["video"], videoFromVertex(p)), f;
			}
			function generateVideosResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["videos"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => generatedVideoFromVertex(d))), setValueByPath(f, ["generatedVideos"], d);
				}
				let m = getValueByPath(d, ["raiMediaFilteredCount"]);
				m != null && setValueByPath(f, ["raiMediaFilteredCount"], m);
				let h = getValueByPath(d, ["raiMediaFilteredReasons"]);
				return h != null && setValueByPath(f, ["raiMediaFilteredReasons"], h), f;
			}
			function generateVideosOperationFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["name"], p);
				let m = getValueByPath(d, ["metadata"]);
				m != null && setValueByPath(f, ["metadata"], m);
				let h = getValueByPath(d, ["done"]);
				h != null && setValueByPath(f, ["done"], h);
				let g = getValueByPath(d, ["error"]);
				g != null && setValueByPath(f, ["error"], g);
				let _ = getValueByPath(d, ["response"]);
				return _ != null && setValueByPath(f, ["response"], generateVideosResponseFromVertex(_)), f;
			}
			let Se = "Content-Type", Ce = "X-Server-Timeout", we = "User-Agent", Te = "x-goog-api-client", Ee = "1.19.0", De = `google-genai-sdk/${Ee}`, Oe = "v1beta1", ke = "v1beta", Ae = /^data: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
			class ApiClient {
				constructor(d) {
					var f, p;
					this.clientOptions = Object.assign(Object.assign({}, d), {
						project: d.project,
						location: d.location,
						apiKey: d.apiKey,
						vertexai: d.vertexai
					});
					let m = {};
					this.clientOptions.vertexai ? (m.apiVersion = (f = this.clientOptions.apiVersion) ?? Oe, m.baseUrl = this.baseUrlFromProjectLocation(), this.normalizeAuthParameters()) : (m.apiVersion = (p = this.clientOptions.apiVersion) ?? ke, m.baseUrl = "https://generativelanguage.googleapis.com/"), m.headers = this.getDefaultHeaders(), this.clientOptions.httpOptions = m, d.httpOptions && (this.clientOptions.httpOptions = this.patchHttpOptions(m, d.httpOptions));
				}
				baseUrlFromProjectLocation() {
					return this.clientOptions.project && this.clientOptions.location && this.clientOptions.location !== "global" ? `https://${this.clientOptions.location}-aiplatform.googleapis.com/` : "https://aiplatform.googleapis.com/";
				}
				normalizeAuthParameters() {
					if (this.clientOptions.project && this.clientOptions.location) {
						this.clientOptions.apiKey = void 0;
						return;
					}
					this.clientOptions.project = void 0, this.clientOptions.location = void 0;
				}
				isVertexAI() {
					var d;
					return (d = this.clientOptions.vertexai) ?? !1;
				}
				getProject() {
					return this.clientOptions.project;
				}
				getLocation() {
					return this.clientOptions.location;
				}
				getApiVersion() {
					if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.apiVersion !== void 0) return this.clientOptions.httpOptions.apiVersion;
					throw Error("API version is not set.");
				}
				getBaseUrl() {
					if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.baseUrl !== void 0) return this.clientOptions.httpOptions.baseUrl;
					throw Error("Base URL is not set.");
				}
				getRequestUrl() {
					return this.getRequestUrlInternal(this.clientOptions.httpOptions);
				}
				getHeaders() {
					if (this.clientOptions.httpOptions && this.clientOptions.httpOptions.headers !== void 0) return this.clientOptions.httpOptions.headers;
					throw Error("Headers are not set.");
				}
				getRequestUrlInternal(d) {
					if (!d || d.baseUrl === void 0 || d.apiVersion === void 0) throw Error("HTTP options are not correctly set.");
					let f = d.baseUrl.endsWith("/") ? d.baseUrl.slice(0, -1) : d.baseUrl, p = [f];
					return d.apiVersion && d.apiVersion !== "" && p.push(d.apiVersion), p.join("/");
				}
				getBaseResourcePath() {
					return `projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`;
				}
				getApiKey() {
					return this.clientOptions.apiKey;
				}
				getWebsocketBaseUrl() {
					let d = this.getBaseUrl(), f = new URL(d);
					return f.protocol = f.protocol == "http:" ? "ws" : "wss", f.toString();
				}
				setBaseUrl(d) {
					if (this.clientOptions.httpOptions) this.clientOptions.httpOptions.baseUrl = d;
					else throw Error("HTTP options are not correctly set.");
				}
				constructUrl(d, f, p) {
					let m = [this.getRequestUrlInternal(f)];
					p && m.push(this.getBaseResourcePath()), d !== "" && m.push(d);
					let h = new URL(`${m.join("/")}`);
					return h;
				}
				shouldPrependVertexProjectPath(d) {
					return !(this.clientOptions.apiKey || !this.clientOptions.vertexai || d.path.startsWith("projects/") || d.httpMethod === "GET" && d.path.startsWith("publishers/google/models"));
				}
				async request(d) {
					let f = this.clientOptions.httpOptions;
					d.httpOptions && (f = this.patchHttpOptions(this.clientOptions.httpOptions, d.httpOptions));
					let p = this.shouldPrependVertexProjectPath(d), m = this.constructUrl(d.path, f, p);
					if (d.queryParams) for (let [f, p] of Object.entries(d.queryParams)) m.searchParams.append(f, String(p));
					let h = {};
					if (d.httpMethod === "GET") {
						if (d.body && d.body !== "{}") throw Error("Request body should be empty for GET request, but got non empty request body");
					} else h.body = d.body;
					return h = await this.includeExtraHttpOptionsToRequestInit(h, f, d.abortSignal), this.unaryApiCall(m, h, d.httpMethod);
				}
				patchHttpOptions(d, f) {
					let p = JSON.parse(JSON.stringify(d));
					for (let [d, m] of Object.entries(f)) typeof m == "object" ? p[d] = Object.assign(Object.assign({}, p[d]), m) : m !== void 0 && (p[d] = m);
					return p;
				}
				async requestStream(d) {
					let f = this.clientOptions.httpOptions;
					d.httpOptions && (f = this.patchHttpOptions(this.clientOptions.httpOptions, d.httpOptions));
					let p = this.shouldPrependVertexProjectPath(d), m = this.constructUrl(d.path, f, p);
					(!m.searchParams.has("alt") || m.searchParams.get("alt") !== "sse") && m.searchParams.set("alt", "sse");
					let h = {};
					return h.body = d.body, h = await this.includeExtraHttpOptionsToRequestInit(h, f, d.abortSignal), this.streamApiCall(m, h, d.httpMethod);
				}
				async includeExtraHttpOptionsToRequestInit(d, f, p) {
					if (f && f.timeout || p) {
						let m = new AbortController(), h = m.signal;
						if (f.timeout && f?.timeout > 0) {
							let d = setTimeout(() => m.abort(), f.timeout);
							d && typeof d.unref == "function" && d.unref();
						}
						p && p.addEventListener("abort", () => {
							m.abort();
						}), d.signal = h;
					}
					return f && f.extraBody !== null && includeExtraBodyToRequestInit(d, f.extraBody), d.headers = await this.getHeadersInternal(f), d;
				}
				async unaryApiCall(d, f, p) {
					return this.apiCall(d.toString(), Object.assign(Object.assign({}, f), { method: p })).then(async (d) => (await throwErrorIfNotOK(d), new HttpResponse(d))).catch((d) => {
						throw d instanceof Error ? d : Error(JSON.stringify(d));
					});
				}
				async streamApiCall(d, f, p) {
					return this.apiCall(d.toString(), Object.assign(Object.assign({}, f), { method: p })).then(async (d) => (await throwErrorIfNotOK(d), this.processStreamResponse(d))).catch((d) => {
						throw d instanceof Error ? d : Error(JSON.stringify(d));
					});
				}
				processStreamResponse(d) {
					var f;
					return __asyncGenerator(this, arguments, function* processStreamResponse_1() {
						let p = (f = d?.body)?.getReader(), m = new TextDecoder("utf-8");
						if (!p) throw Error("Response body is empty");
						try {
							let f = "";
							for (;;) {
								let { done: h, value: g } = yield __await(p.read());
								if (h) {
									if (f.trim().length > 0) throw Error("Incomplete JSON segment at the end");
									break;
								}
								let _ = m.decode(g, { stream: !0 });
								try {
									let d = JSON.parse(_);
									if ("error" in d) {
										let f = JSON.parse(JSON.stringify(d.error)), p = f.status, m = f.code, h = `got status: ${p}. ${JSON.stringify(d)}`;
										if (m >= 400 && m < 600) {
											let d = new ApiError({
												message: h,
												status: m
											});
											throw d;
										}
									}
								} catch (d) {
									let f = d;
									if (f.name === "ApiError") throw d;
								}
								f += _;
								let v = f.match(Ae);
								for (; v;) {
									let p = v[1];
									try {
										let m = new Response(p, {
											headers: d?.headers,
											status: d?.status,
											statusText: d?.statusText
										});
										yield yield __await(new HttpResponse(m)), f = f.slice(v[0].length), v = f.match(Ae);
									} catch (d) {
										throw Error(`exception parsing stream chunk ${p}. ${d}`);
									}
								}
							}
						} finally {
							p.releaseLock();
						}
					});
				}
				async apiCall(d, f) {
					return fetch(d, f).catch((d) => {
						throw Error(`exception ${d} sending request`);
					});
				}
				getDefaultHeaders() {
					let d = {}, f = De + " " + this.clientOptions.userAgentExtra;
					return d[we] = f, d[Te] = f, d[Se] = "application/json", d;
				}
				async getHeadersInternal(d) {
					let f = new Headers();
					if (d && d.headers) {
						for (let [p, m] of Object.entries(d.headers)) f.append(p, m);
						d.timeout && d.timeout > 0 && f.append(Ce, String(Math.ceil(d.timeout / 1e3)));
					}
					return await this.clientOptions.auth.addAuthHeaders(f), f;
				}
				async uploadFile(d, f) {
					var p;
					let m = {};
					f != null && (m.mimeType = f.mimeType, m.name = f.name, m.displayName = f.displayName), m.name && !m.name.startsWith("files/") && (m.name = `files/${m.name}`);
					let h = this.clientOptions.uploader, g = await h.stat(d);
					m.sizeBytes = String(g.size);
					let _ = (p = f?.mimeType) ?? g.type;
					if (_ === void 0 || _ === "") throw Error("Can not determine mimeType. Please provide mimeType in the config.");
					m.mimeType = _;
					let v = await this.fetchUploadUrl(m, f);
					return h.upload(d, v, this);
				}
				async downloadFile(d) {
					let f = this.clientOptions.downloader;
					await f.download(d, this);
				}
				async fetchUploadUrl(d, f) {
					var p;
					let m = {};
					m = f?.httpOptions ? f.httpOptions : {
						apiVersion: "",
						headers: {
							"Content-Type": "application/json",
							"X-Goog-Upload-Protocol": "resumable",
							"X-Goog-Upload-Command": "start",
							"X-Goog-Upload-Header-Content-Length": `${d.sizeBytes}`,
							"X-Goog-Upload-Header-Content-Type": `${d.mimeType}`
						}
					};
					let h = { file: d }, g = await this.request({
						path: formatMap("upload/v1beta/files", h._url),
						body: JSON.stringify(h),
						httpMethod: "POST",
						httpOptions: m
					});
					if (!g || !g?.headers) throw Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");
					let _ = (p = g?.headers)?.["x-goog-upload-url"];
					if (_ === void 0) throw Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");
					return _;
				}
			}
			async function throwErrorIfNotOK(d) {
				var f;
				if (d === void 0) throw Error("response is undefined");
				if (!d.ok) {
					let p = d.status, m;
					m = (f = d.headers.get("content-type"))?.includes("application/json") ? await d.json() : { error: {
						message: await d.text(),
						code: d.status,
						status: d.statusText
					} };
					let h = JSON.stringify(m);
					if (p >= 400 && p < 600) {
						let d = new ApiError({
							message: h,
							status: p
						});
						throw d;
					}
					throw Error(h);
				}
			}
			function includeExtraBodyToRequestInit(d, f) {
				if (!f || Object.keys(f).length === 0) return;
				if (d.body instanceof Blob) {
					console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");
					return;
				}
				let p = {};
				if (typeof d.body == "string" && d.body.length > 0) try {
					let f = JSON.parse(d.body);
					if (typeof f == "object" && f && !Array.isArray(f)) p = f;
					else {
						console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");
						return;
					}
				} catch {
					console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");
					return;
				}
				function deepMerge(d, f) {
					let p = Object.assign({}, d);
					for (let d in f) if (Object.prototype.hasOwnProperty.call(f, d)) {
						let m = f[d], h = p[d];
						m && typeof m == "object" && !Array.isArray(m) && h && typeof h == "object" && !Array.isArray(h) ? p[d] = deepMerge(h, m) : (h && m && typeof h != typeof m && console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${d}". Original type: ${typeof h}, New type: ${typeof m}. Overwriting.`), p[d] = m);
					}
					return p;
				}
				let m = deepMerge(p, f);
				d.body = JSON.stringify(m);
			}
			let je = "mcp_used/unknown", Me = !1;
			function hasMcpToolUsage(d) {
				for (let f of d) if (isMcpCallableTool(f) || typeof f == "object" && "inputSchema" in f) return !0;
				return Me;
			}
			function setMcpUsageHeader(d) {
				var f;
				let p = (f = d[Te]) ?? "";
				d[Te] = (p + ` ${je}`).trimStart();
			}
			function isMcpCallableTool(d) {
				return typeof d == "object" && !!d && d instanceof McpCallableTool;
			}
			function listAllTools(d, f = 100) {
				return __asyncGenerator(this, arguments, function* listAllTools_1() {
					let p, m = 0;
					for (; m < f;) {
						let f = yield __await(d.listTools({ cursor: p }));
						for (let d of f.tools) yield yield __await(d), m++;
						if (!f.nextCursor) break;
						p = f.nextCursor;
					}
				});
			}
			class McpCallableTool {
				constructor(d = [], f) {
					this.mcpTools = [], this.functionNameToMcpClient = {}, this.mcpClients = d, this.config = f;
				}
				static create(d, f) {
					return new McpCallableTool(d, f);
				}
				async initialize() {
					var d, f, p, m;
					if (this.mcpTools.length > 0) return;
					let h = {}, g = [];
					for (let x of this.mcpClients) try {
						for (var _ = !0, v = (f = void 0, __asyncValues(listAllTools(x))), b; b = await v.next(), d = b.done, !d; _ = !0) {
							m = b.value, _ = !1;
							let d = m;
							g.push(d);
							let f = d.name;
							if (h[f]) throw Error(`Duplicate function name ${f} found in MCP tools. Please ensure function names are unique.`);
							h[f] = x;
						}
					} catch (d) {
						f = { error: d };
					} finally {
						try {
							!_ && !d && (p = v.return) && await p.call(v);
						} finally {
							if (f) throw f.error;
						}
					}
					this.mcpTools = g, this.functionNameToMcpClient = h;
				}
				async tool() {
					return await this.initialize(), mcpToolsToGeminiTool(this.mcpTools, this.config);
				}
				async callTool(d) {
					await this.initialize();
					let f = [];
					for (let p of d) if (p.name in this.functionNameToMcpClient) {
						let d = this.functionNameToMcpClient[p.name], m;
						this.config.timeout && (m = { timeout: this.config.timeout });
						let h = await d.callTool({
							name: p.name,
							arguments: p.args
						}, void 0, m);
						f.push({ functionResponse: {
							name: p.name,
							response: h.isError ? { error: h } : h
						} });
					}
					return f;
				}
			}
			function isMcpClient(d) {
				return typeof d == "object" && !!d && "listTools" in d && typeof d.listTools == "function";
			}
			function mcpToTool(...d) {
				if (Me = !0, d.length === 0) throw Error("No MCP clients provided");
				let f = d[d.length - 1];
				return isMcpClient(f) ? McpCallableTool.create(d, {}) : McpCallableTool.create(d.slice(0, d.length - 1), f);
			}
			async function handleWebSocketMessage$1(d, f, p) {
				let m = new LiveMusicServerMessage(), h;
				h = p.data instanceof Blob ? JSON.parse(await p.data.text()) : JSON.parse(p.data);
				let g = liveMusicServerMessageFromMldev(h);
				Object.assign(m, g), f(m);
			}
			class LiveMusic {
				constructor(d, f, p) {
					this.apiClient = d, this.auth = f, this.webSocketFactory = p;
				}
				async connect(d) {
					var f, p;
					if (this.apiClient.isVertexAI()) throw Error("Live music is not supported for Vertex AI.");
					console.warn("Live music generation is experimental and may change in future versions.");
					let m = this.apiClient.getWebsocketBaseUrl(), h = this.apiClient.getApiVersion(), g = mapToHeaders$1(this.apiClient.getDefaultHeaders()), _ = this.apiClient.getApiKey(), v = `${m}/ws/google.ai.generativelanguage.${h}.GenerativeService.BidiGenerateMusic?key=${_}`, onopenResolve = () => {}, b = new Promise((d) => {
						onopenResolve = d;
					}), x = d.callbacks, onopenAwaitedCallback = function() {
						onopenResolve({});
					}, C = this.apiClient, w = {
						onopen: onopenAwaitedCallback,
						onmessage: (d) => {
							handleWebSocketMessage$1(C, x.onmessage, d);
						},
						onerror: (f = x?.onerror) ?? function(d) {},
						onclose: (p = x?.onclose) ?? function(d) {}
					}, T = this.webSocketFactory.create(v, headersToMap$1(g), w);
					T.connect(), await b;
					let E = tModel(this.apiClient, d.model), D = liveMusicClientSetupToMldev({ model: E }), O = liveMusicClientMessageToMldev({ setup: D });
					return T.send(JSON.stringify(O)), new LiveMusicSession(T, this.apiClient);
				}
			}
			class LiveMusicSession {
				constructor(d, f) {
					this.conn = d, this.apiClient = f;
				}
				async setWeightedPrompts(d) {
					if (!d.weightedPrompts || Object.keys(d.weightedPrompts).length === 0) throw Error("Weighted prompts must be set and contain at least one entry.");
					let f = liveMusicSetWeightedPromptsParametersToMldev(d), p = liveMusicClientContentToMldev(f);
					this.conn.send(JSON.stringify({ clientContent: p }));
				}
				async setMusicGenerationConfig(d) {
					d.musicGenerationConfig ||= {};
					let f = liveMusicSetConfigParametersToMldev(d), p = liveMusicClientMessageToMldev(f);
					this.conn.send(JSON.stringify(p));
				}
				sendPlaybackControl(d) {
					let f = liveMusicClientMessageToMldev({ playbackControl: d });
					this.conn.send(JSON.stringify(f));
				}
				play() {
					this.sendPlaybackControl(be.PLAY);
				}
				pause() {
					this.sendPlaybackControl(be.PAUSE);
				}
				stop() {
					this.sendPlaybackControl(be.STOP);
				}
				resetContext() {
					this.sendPlaybackControl(be.RESET_CONTEXT);
				}
				close() {
					this.conn.close();
				}
			}
			function headersToMap$1(d) {
				let f = {};
				return d.forEach((d, p) => {
					f[p] = d;
				}), f;
			}
			function mapToHeaders$1(d) {
				let f = new Headers();
				for (let [p, m] of Object.entries(d)) f.append(p, m);
				return f;
			}
			let Ne = "FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";
			async function handleWebSocketMessage(d, f, p) {
				let m = new LiveServerMessage(), h;
				h = p.data instanceof Blob ? await p.data.text() : p.data instanceof ArrayBuffer ? new TextDecoder().decode(p.data) : p.data;
				let g = JSON.parse(h);
				if (d.isVertexAI()) {
					let d = liveServerMessageFromVertex(g);
					Object.assign(m, d);
				} else {
					let d = liveServerMessageFromMldev(g);
					Object.assign(m, d);
				}
				f(m);
			}
			class Live {
				constructor(d, f, p) {
					this.apiClient = d, this.auth = f, this.webSocketFactory = p, this.music = new LiveMusic(this.apiClient, this.auth, this.webSocketFactory);
				}
				async connect(d) {
					var f, p, m, h, g, _;
					if (d.config && d.config.httpOptions) throw Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");
					let v = this.apiClient.getWebsocketBaseUrl(), b = this.apiClient.getApiVersion(), x, C = this.apiClient.getHeaders();
					d.config && d.config.tools && hasMcpToolUsage(d.config.tools) && setMcpUsageHeader(C);
					let w = mapToHeaders(C);
					if (this.apiClient.isVertexAI()) x = `${v}/ws/google.cloud.aiplatform.${b}.LlmBidiService/BidiGenerateContent`, await this.auth.addAuthHeaders(w);
					else {
						let d = this.apiClient.getApiKey(), f = "BidiGenerateContent", p = "key";
						d?.startsWith("auth_tokens/") && (console.warn("Warning: Ephemeral token support is experimental and may change in future versions."), b !== "v1alpha" && console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."), f = "BidiGenerateContentConstrained", p = "access_token"), x = `${v}/ws/google.ai.generativelanguage.${b}.GenerativeService.${f}?${p}=${d}`;
					}
					let onopenResolve = () => {}, T = new Promise((d) => {
						onopenResolve = d;
					}), E = d.callbacks, onopenAwaitedCallback = function() {
						var d;
						(d = E?.onopen)?.call(E), onopenResolve({});
					}, D = this.apiClient, O = {
						onopen: onopenAwaitedCallback,
						onmessage: (d) => {
							handleWebSocketMessage(D, E.onmessage, d);
						},
						onerror: (f = E?.onerror) ?? function(d) {},
						onclose: (p = E?.onclose) ?? function(d) {}
					}, A = this.webSocketFactory.create(x, headersToMap(w), O);
					A.connect(), await T;
					let j = tModel(this.apiClient, d.model);
					if (this.apiClient.isVertexAI() && j.startsWith("publishers/")) {
						let d = this.apiClient.getProject(), f = this.apiClient.getLocation();
						j = `projects/${d}/locations/${f}/` + j;
					}
					let F = {};
					this.apiClient.isVertexAI() && (m = d.config)?.responseModalities === void 0 && (d.config === void 0 ? d.config = { responseModalities: [W.AUDIO] } : d.config.responseModalities = [W.AUDIO]), (h = d.config)?.generationConfig && console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");
					let U = (_ = (g = d.config)?.tools) ?? [], G = [];
					for (let d of U) if (this.isCallableTool(d)) {
						let f = d;
						G.push(await f.tool());
					} else G.push(d);
					G.length > 0 && (d.config.tools = G);
					let K = {
						model: j,
						config: d.config,
						callbacks: d.callbacks
					};
					return F = this.apiClient.isVertexAI() ? liveConnectParametersToVertex(this.apiClient, K) : liveConnectParametersToMldev(this.apiClient, K), delete F.config, A.send(JSON.stringify(F)), new Session(A, this.apiClient);
				}
				isCallableTool(d) {
					return "callTool" in d && typeof d.callTool == "function";
				}
			}
			let Pe = { turnComplete: !0 };
			class Session {
				constructor(d, f) {
					this.conn = d, this.apiClient = f;
				}
				tLiveClientContent(d, f) {
					if (f.turns !== null && f.turns !== void 0) {
						let p = [];
						try {
							p = tContents(f.turns), p = d.isVertexAI() ? p.map((d) => contentToVertex(d)) : p.map((d) => contentToMldev$1(d));
						} catch {
							throw Error(`Failed to parse client content "turns", type: '${typeof f.turns}'`);
						}
						return { clientContent: {
							turns: p,
							turnComplete: f.turnComplete
						} };
					}
					return { clientContent: { turnComplete: f.turnComplete } };
				}
				tLiveClienttToolResponse(d, f) {
					let p = [];
					if (f.functionResponses == null || (p = Array.isArray(f.functionResponses) ? f.functionResponses : [f.functionResponses], p.length === 0)) throw Error("functionResponses is required.");
					for (let f of p) {
						if (typeof f != "object" || !f || !("name" in f) || !("response" in f)) throw Error(`Could not parse function response, type '${typeof f}'.`);
						if (!d.isVertexAI() && !("id" in f)) throw Error(Ne);
					}
					let m = { toolResponse: { functionResponses: p } };
					return m;
				}
				sendClientContent(d) {
					d = Object.assign(Object.assign({}, Pe), d);
					let f = this.tLiveClientContent(this.apiClient, d);
					this.conn.send(JSON.stringify(f));
				}
				sendRealtimeInput(d) {
					let f = {};
					f = this.apiClient.isVertexAI() ? { realtimeInput: liveSendRealtimeInputParametersToVertex(d) } : { realtimeInput: liveSendRealtimeInputParametersToMldev(d) }, this.conn.send(JSON.stringify(f));
				}
				sendToolResponse(d) {
					if (d.functionResponses == null) throw Error("Tool response parameters are required.");
					let f = this.tLiveClienttToolResponse(this.apiClient, d);
					this.conn.send(JSON.stringify(f));
				}
				close() {
					this.conn.close();
				}
			}
			function headersToMap(d) {
				let f = {};
				return d.forEach((d, p) => {
					f[p] = d;
				}), f;
			}
			function mapToHeaders(d) {
				let f = new Headers();
				for (let [p, m] of Object.entries(d)) f.append(p, m);
				return f;
			}
			let Fe = 10;
			function shouldDisableAfc(d) {
				var f, p, m;
				if ((f = d?.automaticFunctionCalling)?.disable) return !0;
				let h = !1;
				for (let f of (p = d?.tools) ?? []) if (isCallableTool(f)) {
					h = !0;
					break;
				}
				if (!h) return !0;
				let g = (m = d?.automaticFunctionCalling)?.maximumRemoteCalls;
				return g && (g < 0 || !Number.isInteger(g)) || g == 0 ? (console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:", g), !0) : !1;
			}
			function isCallableTool(d) {
				return "callTool" in d && typeof d.callTool == "function";
			}
			function hasCallableTools(d) {
				var f, p, m;
				return (m = (p = (f = d.config)?.tools)?.some((d) => isCallableTool(d))) ?? !1;
			}
			function hasNonCallableTools(d) {
				var f, p, m;
				return (m = (p = (f = d.config)?.tools)?.some((d) => !isCallableTool(d))) ?? !1;
			}
			function shouldAppendAfcHistory(d) {
				var f;
				return !(f = d?.automaticFunctionCalling)?.ignoreCallHistory;
			}
			class Models extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d, this.generateContent = async (d) => {
						var f, p, m, h, g;
						let _ = await this.processParamsMaybeAddMcpUsage(d);
						if (this.maybeMoveToResponseJsonSchem(d), !hasCallableTools(d) || shouldDisableAfc(d.config)) return await this.generateContentInternal(_);
						if (hasNonCallableTools(d)) throw Error("Automatic function calling with CallableTools and Tools is not yet supported.");
						let v, b, x = tContents(_.contents), C = (m = (p = (f = _.config)?.automaticFunctionCalling)?.maximumRemoteCalls) ?? Fe, w = 0;
						for (; w < C && (v = await this.generateContentInternal(_), !(!v.functionCalls || v.functionCalls.length === 0));) {
							let f = v.candidates[0].content, p = [];
							for (let f of (g = (h = d.config)?.tools) ?? []) if (isCallableTool(f)) {
								let d = f, m = await d.callTool(v.functionCalls);
								p.push(...m);
							}
							w++, b = {
								role: "user",
								parts: p
							}, _.contents = tContents(_.contents), _.contents.push(f), _.contents.push(b), shouldAppendAfcHistory(_.config) && (x.push(f), x.push(b));
						}
						return shouldAppendAfcHistory(_.config) && (v.automaticFunctionCallingHistory = x), v;
					}, this.generateContentStream = async (d) => {
						if (this.maybeMoveToResponseJsonSchem(d), shouldDisableAfc(d.config)) {
							let f = await this.processParamsMaybeAddMcpUsage(d);
							return await this.generateContentStreamInternal(f);
						} else return await this.processAfcStream(d);
					}, this.generateImages = async (d) => await this.generateImagesInternal(d).then((d) => {
						var f;
						let p, m = [];
						if (d?.generatedImages) for (let h of d.generatedImages) h && h?.safetyAttributes && (f = h?.safetyAttributes)?.contentType === "Positive Prompt" ? p = h?.safetyAttributes : m.push(h);
						let h;
						return h = p ? {
							generatedImages: m,
							positivePromptSafetyAttributes: p,
							sdkHttpResponse: d.sdkHttpResponse
						} : {
							generatedImages: m,
							sdkHttpResponse: d.sdkHttpResponse
						}, h;
					}), this.list = async (d) => {
						var f;
						let p = { queryBase: !0 }, m = Object.assign(Object.assign({}, p), d?.config), h = { config: m };
						if (this.apiClient.isVertexAI() && !h.config.queryBase) {
							if ((f = h.config)?.filter) throw Error("Filtering tuned models list for Vertex AI is not currently supported");
							h.config.filter = "labels.tune-type:*";
						}
						return new Pager(xe.PAGED_ITEM_MODELS, (d) => this.listInternal(d), await this.listInternal(h), h);
					}, this.editImage = async (d) => {
						let f = {
							model: d.model,
							prompt: d.prompt,
							referenceImages: [],
							config: d.config
						};
						return d.referenceImages && d.referenceImages && (f.referenceImages = d.referenceImages.map((d) => d.toReferenceImageAPI())), await this.editImageInternal(f);
					}, this.upscaleImage = async (d) => {
						let f = {
							numberOfImages: 1,
							mode: "upscale"
						};
						d.config && (f = Object.assign(Object.assign({}, f), d.config));
						let p = {
							model: d.model,
							image: d.image,
							upscaleFactor: d.upscaleFactor,
							config: f
						};
						return await this.upscaleImageInternal(p);
					}, this.generateVideos = async (d) => {
						if ((d.prompt || d.image || d.video) && d.source) throw Error("Source and prompt/image/video are mutually exclusive. Please only use source.");
						return await this.generateVideosInternal(d);
					};
				}
				maybeMoveToResponseJsonSchem(d) {
					d.config && d.config.responseSchema && (d.config.responseJsonSchema || Object.keys(d.config.responseSchema).includes("$schema") && (d.config.responseJsonSchema = d.config.responseSchema, delete d.config.responseSchema));
				}
				async processParamsMaybeAddMcpUsage(d) {
					var f, p, m;
					let h = (f = d.config)?.tools;
					if (!h) return d;
					let g = await Promise.all(h.map(async (d) => {
						if (isCallableTool(d)) {
							let f = d;
							return await f.tool();
						}
						return d;
					})), _ = {
						model: d.model,
						contents: d.contents,
						config: Object.assign(Object.assign({}, d.config), { tools: g })
					};
					if (_.config.tools = g, d.config && d.config.tools && hasMcpToolUsage(d.config.tools)) {
						let f = (m = (p = d.config.httpOptions)?.headers) ?? {}, h = Object.assign({}, f);
						Object.keys(h).length === 0 && (h = this.apiClient.getDefaultHeaders()), setMcpUsageHeader(h), _.config.httpOptions = Object.assign(Object.assign({}, d.config.httpOptions), { headers: h });
					}
					return _;
				}
				async initAfcToolsMap(d) {
					var f, p, m;
					let h = new Map();
					for (let g of (p = (f = d.config)?.tools) ?? []) if (isCallableTool(g)) {
						let d = g, f = await d.tool();
						for (let p of (m = f.functionDeclarations) ?? []) {
							if (!p.name) throw Error("Function declaration name is required.");
							if (h.has(p.name)) throw Error(`Duplicate tool declaration name: ${p.name}`);
							h.set(p.name, d);
						}
					}
					return h;
				}
				async processAfcStream(d) {
					var f, p, m;
					let h = (m = (p = (f = d.config)?.automaticFunctionCalling)?.maximumRemoteCalls) ?? Fe, g = !1, _ = 0, v = await this.initAfcToolsMap(d);
					return function(d, f, p) {
						var m, v;
						return __asyncGenerator(this, arguments, function* () {
							for (var b, x, C, w; _ < h;) {
								g && (_++, g = !1);
								let O = yield __await(d.processParamsMaybeAddMcpUsage(p)), A = yield __await(d.generateContentStreamInternal(O)), j = [], F = [];
								try {
									for (var T = !0, E = (x = void 0, __asyncValues(A)), D; D = yield __await(E.next()), b = D.done, !b; T = !0) {
										w = D.value, T = !1;
										let d = w;
										if (yield yield __await(d), d.candidates && (m = d.candidates[0])?.content) {
											F.push(d.candidates[0].content);
											for (let p of (v = d.candidates[0].content.parts) ?? []) if (_ < h && p.functionCall) {
												if (!p.functionCall.name) throw Error("Function call name was not returned by the model.");
												if (f.has(p.functionCall.name)) {
													let d = yield __await(f.get(p.functionCall.name).callTool([p.functionCall]));
													j.push(...d);
												} else throw Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${f.keys()}, mising tool: ${p.functionCall.name}`);
											}
										}
									}
								} catch (d) {
									x = { error: d };
								} finally {
									try {
										!T && !b && (C = E.return) && (yield __await(C.call(E)));
									} finally {
										if (x) throw x.error;
									}
								}
								if (j.length > 0) {
									g = !0;
									let d = new GenerateContentResponse();
									d.candidates = [{ content: {
										role: "user",
										parts: j
									} }], yield yield __await(d);
									let f = [];
									f.push(...F), f.push({
										role: "user",
										parts: j
									});
									let m = tContents(p.contents).concat(f);
									p.contents = m;
								} else break;
							}
						});
					}(this, v, d);
				}
				async generateContentInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = generateContentParametersToVertex(this.apiClient, d);
						return _ = formatMap("{model}:generateContent", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = generateContentResponseFromVertex(d), p = new GenerateContentResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = generateContentParametersToMldev(this.apiClient, d);
						return _ = formatMap("{model}:generateContent", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = generateContentResponseFromMldev(d), p = new GenerateContentResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async generateContentStreamInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = generateContentParametersToVertex(this.apiClient, d);
						_ = formatMap("{model}:streamGenerateContent?alt=sse", m._url), v = m._query, delete m.config, delete m._url, delete m._query;
						let h = this.apiClient;
						return g = h.requestStream({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}), g.then(function(d) {
							return __asyncGenerator(this, arguments, function* () {
								var f, p, m, h;
								try {
									for (var g = !0, _ = __asyncValues(d), v; v = yield __await(_.next()), f = v.done, !f; g = !0) {
										h = v.value, g = !1;
										let d = h, f = generateContentResponseFromVertex(yield __await(d.json()));
										f.sdkHttpResponse = { headers: d.headers };
										let p = new GenerateContentResponse();
										Object.assign(p, f), yield yield __await(p);
									}
								} catch (d) {
									p = { error: d };
								} finally {
									try {
										!g && !f && (m = _.return) && (yield __await(m.call(_)));
									} finally {
										if (p) throw p.error;
									}
								}
							});
						});
					} else {
						let f = generateContentParametersToMldev(this.apiClient, d);
						_ = formatMap("{model}:streamGenerateContent?alt=sse", f._url), v = f._query, delete f.config, delete f._url, delete f._query;
						let p = this.apiClient;
						return g = p.requestStream({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}), g.then(function(d) {
							return __asyncGenerator(this, arguments, function* () {
								var f, p, m, h;
								try {
									for (var g = !0, _ = __asyncValues(d), v; v = yield __await(_.next()), f = v.done, !f; g = !0) {
										h = v.value, g = !1;
										let d = h, f = generateContentResponseFromMldev(yield __await(d.json()));
										f.sdkHttpResponse = { headers: d.headers };
										let p = new GenerateContentResponse();
										Object.assign(p, f), yield yield __await(p);
									}
								} catch (d) {
									p = { error: d };
								} finally {
									try {
										!g && !f && (m = _.return) && (yield __await(m.call(_)));
									} finally {
										if (p) throw p.error;
									}
								}
							});
						});
					}
				}
				async embedContent(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = embedContentParametersToVertex(this.apiClient, d);
						return _ = formatMap("{model}:predict", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = embedContentResponseFromVertex(d), p = new EmbedContentResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = embedContentParametersToMldev(this.apiClient, d);
						return _ = formatMap("{model}:batchEmbedContents", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = embedContentResponseFromMldev(d), p = new EmbedContentResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async generateImagesInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = generateImagesParametersToVertex(this.apiClient, d);
						return _ = formatMap("{model}:predict", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = generateImagesResponseFromVertex(d), p = new GenerateImagesResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = generateImagesParametersToMldev(this.apiClient, d);
						return _ = formatMap("{model}:predict", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = generateImagesResponseFromMldev(d), p = new GenerateImagesResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async editImageInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = editImageParametersInternalToVertex(this.apiClient, d);
						return h = formatMap("{model}:predict", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = editImageResponseFromVertex(d), p = new EditImageResponse();
							return Object.assign(p, f), p;
						});
					} else throw Error("This method is only supported by the Vertex AI.");
				}
				async upscaleImageInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = upscaleImageAPIParametersInternalToVertex(this.apiClient, d);
						return h = formatMap("{model}:predict", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = upscaleImageResponseFromVertex(d), p = new UpscaleImageResponse();
							return Object.assign(p, f), p;
						});
					} else throw Error("This method is only supported by the Vertex AI.");
				}
				async recontextImage(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = recontextImageParametersToVertex(this.apiClient, d);
						return h = formatMap("{model}:predict", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m.then((d) => {
							let f = recontextImageResponseFromVertex(d), p = new RecontextImageResponse();
							return Object.assign(p, f), p;
						});
					} else throw Error("This method is only supported by the Vertex AI.");
				}
				async segmentImage(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = segmentImageParametersToVertex(this.apiClient, d);
						return h = formatMap("{model}:predict", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m.then((d) => {
							let f = segmentImageResponseFromVertex(d), p = new SegmentImageResponse();
							return Object.assign(p, f), p;
						});
					} else throw Error("This method is only supported by the Vertex AI.");
				}
				async get(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = getModelParametersToVertex(this.apiClient, d);
						return _ = formatMap("{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = modelFromVertex(d);
							return f;
						});
					} else {
						let f = getModelParametersToMldev(this.apiClient, d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = modelFromMldev(d);
							return f;
						});
					}
				}
				async listInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = listModelsParametersToVertex(this.apiClient, d);
						return _ = formatMap("{models_url}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listModelsResponseFromVertex(d), p = new ListModelsResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = listModelsParametersToMldev(this.apiClient, d);
						return _ = formatMap("{models_url}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listModelsResponseFromMldev(d), p = new ListModelsResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async update(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = updateModelParametersToVertex(this.apiClient, d);
						return _ = formatMap("{model}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "PATCH",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = modelFromVertex(d);
							return f;
						});
					} else {
						let f = updateModelParametersToMldev(this.apiClient, d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "PATCH",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = modelFromMldev(d);
							return f;
						});
					}
				}
				async delete(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = deleteModelParametersToVertex(this.apiClient, d);
						return _ = formatMap("{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "DELETE",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = deleteModelResponseFromVertex(d), p = new DeleteModelResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = deleteModelParametersToMldev(this.apiClient, d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "DELETE",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = deleteModelResponseFromMldev(d), p = new DeleteModelResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async countTokens(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = countTokensParametersToVertex(this.apiClient, d);
						return _ = formatMap("{model}:countTokens", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = countTokensResponseFromVertex(d), p = new CountTokensResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = countTokensParametersToMldev(this.apiClient, d);
						return _ = formatMap("{model}:countTokens", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = countTokensResponseFromMldev(d), p = new CountTokensResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async computeTokens(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = computeTokensParametersToVertex(this.apiClient, d);
						return h = formatMap("{model}:computeTokens", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = computeTokensResponseFromVertex(d), p = new ComputeTokensResponse();
							return Object.assign(p, f), p;
						});
					} else throw Error("This method is only supported by the Vertex AI.");
				}
				async generateVideosInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = generateVideosParametersToVertex(this.apiClient, d);
						return _ = formatMap("{model}:predictLongRunning", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = generateVideosOperationFromVertex(d), p = new GenerateVideosOperation();
							return Object.assign(p, f), p;
						});
					} else {
						let f = generateVideosParametersToMldev(this.apiClient, d);
						return _ = formatMap("{model}:predictLongRunning", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g.then((d) => {
							let f = generateVideosOperationFromMldev(d), p = new GenerateVideosOperation();
							return Object.assign(p, f), p;
						});
					}
				}
			}
			class Operations extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d;
				}
				async getVideosOperation(d) {
					let f = d.operation, p = d.config;
					if (f.name === void 0 || f.name === "") throw Error("Operation name is required.");
					if (this.apiClient.isVertexAI()) {
						let d = f.name.split("/operations/")[0], m;
						p && "httpOptions" in p && (m = p.httpOptions);
						let h = await this.fetchPredictVideosOperationInternal({
							operationName: f.name,
							resourceName: d,
							config: { httpOptions: m }
						});
						return f._fromAPIResponse({
							apiResponse: h,
							isVertexAI: !0
						});
					} else {
						let d = await this.getVideosOperationInternal({
							operationName: f.name,
							config: p
						});
						return f._fromAPIResponse({
							apiResponse: d,
							isVertexAI: !1
						});
					}
				}
				async get(d) {
					let f = d.operation, p = d.config;
					if (f.name === void 0 || f.name === "") throw Error("Operation name is required.");
					if (this.apiClient.isVertexAI()) {
						let d = f.name.split("/operations/")[0], m;
						p && "httpOptions" in p && (m = p.httpOptions);
						let h = await this.fetchPredictVideosOperationInternal({
							operationName: f.name,
							resourceName: d,
							config: { httpOptions: m }
						});
						return f._fromAPIResponse({
							apiResponse: h,
							isVertexAI: !0
						});
					} else {
						let d = await this.getVideosOperationInternal({
							operationName: f.name,
							config: p
						});
						return f._fromAPIResponse({
							apiResponse: d,
							isVertexAI: !1
						});
					}
				}
				async getVideosOperationInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = getOperationParametersToVertex(d);
						return _ = formatMap("{operationName}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), g;
					} else {
						let f = getOperationParametersToMldev(d);
						return _ = formatMap("{operationName}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json()), g;
					}
				}
				async fetchPredictVideosOperationInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = fetchPredictOperationParametersToVertex(d);
						return h = formatMap("{resourceName}:fetchPredictOperation", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m;
					} else throw Error("This method is only supported by the Vertex AI.");
				}
			}
			function prebuiltVoiceConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["voiceName"]);
				return p != null && setValueByPath(f, ["voiceName"], p), f;
			}
			function voiceConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["prebuiltVoiceConfig"]);
				return p != null && setValueByPath(f, ["prebuiltVoiceConfig"], prebuiltVoiceConfigToMldev(p)), f;
			}
			function speakerVoiceConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["speaker"]);
				p != null && setValueByPath(f, ["speaker"], p);
				let m = getValueByPath(d, ["voiceConfig"]);
				return m != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev(m)), f;
			}
			function multiSpeakerVoiceConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["speakerVoiceConfigs"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => speakerVoiceConfigToMldev(d))), setValueByPath(f, ["speakerVoiceConfigs"], d);
				}
				return f;
			}
			function speechConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["voiceConfig"]);
				p != null && setValueByPath(f, ["voiceConfig"], voiceConfigToMldev(p));
				let m = getValueByPath(d, ["multiSpeakerVoiceConfig"]);
				m != null && setValueByPath(f, ["multiSpeakerVoiceConfig"], multiSpeakerVoiceConfigToMldev(m));
				let h = getValueByPath(d, ["languageCode"]);
				return h != null && setValueByPath(f, ["languageCode"], h), f;
			}
			function videoMetadataToMldev(d) {
				let f = {}, p = getValueByPath(d, ["fps"]);
				p != null && setValueByPath(f, ["fps"], p);
				let m = getValueByPath(d, ["endOffset"]);
				m != null && setValueByPath(f, ["endOffset"], m);
				let h = getValueByPath(d, ["startOffset"]);
				return h != null && setValueByPath(f, ["startOffset"], h), f;
			}
			function blobToMldev(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["data"]);
				p != null && setValueByPath(f, ["data"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function fileDataToMldev(d) {
				let f = {};
				if (getValueByPath(d, ["displayName"]) !== void 0) throw Error("displayName parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["fileUri"]);
				p != null && setValueByPath(f, ["fileUri"], p);
				let m = getValueByPath(d, ["mimeType"]);
				return m != null && setValueByPath(f, ["mimeType"], m), f;
			}
			function functionCallToMldev(d) {
				let f = {}, p = getValueByPath(d, ["id"]);
				p != null && setValueByPath(f, ["id"], p);
				let m = getValueByPath(d, ["args"]);
				m != null && setValueByPath(f, ["args"], m);
				let h = getValueByPath(d, ["name"]);
				return h != null && setValueByPath(f, ["name"], h), f;
			}
			function partToMldev(d) {
				let f = {}, p = getValueByPath(d, ["videoMetadata"]);
				p != null && setValueByPath(f, ["videoMetadata"], videoMetadataToMldev(p));
				let m = getValueByPath(d, ["thought"]);
				m != null && setValueByPath(f, ["thought"], m);
				let h = getValueByPath(d, ["inlineData"]);
				h != null && setValueByPath(f, ["inlineData"], blobToMldev(h));
				let g = getValueByPath(d, ["fileData"]);
				g != null && setValueByPath(f, ["fileData"], fileDataToMldev(g));
				let _ = getValueByPath(d, ["thoughtSignature"]);
				_ != null && setValueByPath(f, ["thoughtSignature"], _);
				let v = getValueByPath(d, ["functionCall"]);
				v != null && setValueByPath(f, ["functionCall"], functionCallToMldev(v));
				let b = getValueByPath(d, ["codeExecutionResult"]);
				b != null && setValueByPath(f, ["codeExecutionResult"], b);
				let x = getValueByPath(d, ["executableCode"]);
				x != null && setValueByPath(f, ["executableCode"], x);
				let C = getValueByPath(d, ["functionResponse"]);
				C != null && setValueByPath(f, ["functionResponse"], C);
				let w = getValueByPath(d, ["text"]);
				return w != null && setValueByPath(f, ["text"], w), f;
			}
			function contentToMldev(d) {
				let f = {}, p = getValueByPath(d, ["parts"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => partToMldev(d))), setValueByPath(f, ["parts"], d);
				}
				let m = getValueByPath(d, ["role"]);
				return m != null && setValueByPath(f, ["role"], m), f;
			}
			function functionDeclarationToMldev(d) {
				let f = {}, p = getValueByPath(d, ["behavior"]);
				p != null && setValueByPath(f, ["behavior"], p);
				let m = getValueByPath(d, ["description"]);
				m != null && setValueByPath(f, ["description"], m);
				let h = getValueByPath(d, ["name"]);
				h != null && setValueByPath(f, ["name"], h);
				let g = getValueByPath(d, ["parameters"]);
				g != null && setValueByPath(f, ["parameters"], g);
				let _ = getValueByPath(d, ["parametersJsonSchema"]);
				_ != null && setValueByPath(f, ["parametersJsonSchema"], _);
				let v = getValueByPath(d, ["response"]);
				v != null && setValueByPath(f, ["response"], v);
				let b = getValueByPath(d, ["responseJsonSchema"]);
				return b != null && setValueByPath(f, ["responseJsonSchema"], b), f;
			}
			function intervalToMldev(d) {
				let f = {}, p = getValueByPath(d, ["startTime"]);
				p != null && setValueByPath(f, ["startTime"], p);
				let m = getValueByPath(d, ["endTime"]);
				return m != null && setValueByPath(f, ["endTime"], m), f;
			}
			function googleSearchToMldev(d) {
				let f = {}, p = getValueByPath(d, ["timeRangeFilter"]);
				if (p != null && setValueByPath(f, ["timeRangeFilter"], intervalToMldev(p)), getValueByPath(d, ["excludeDomains"]) !== void 0) throw Error("excludeDomains parameter is not supported in Gemini API.");
				return f;
			}
			function dynamicRetrievalConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["mode"]);
				p != null && setValueByPath(f, ["mode"], p);
				let m = getValueByPath(d, ["dynamicThreshold"]);
				return m != null && setValueByPath(f, ["dynamicThreshold"], m), f;
			}
			function googleSearchRetrievalToMldev(d) {
				let f = {}, p = getValueByPath(d, ["dynamicRetrievalConfig"]);
				return p != null && setValueByPath(f, ["dynamicRetrievalConfig"], dynamicRetrievalConfigToMldev(p)), f;
			}
			function urlContextToMldev() {
				let d = {};
				return d;
			}
			function toolComputerUseToMldev(d) {
				let f = {}, p = getValueByPath(d, ["environment"]);
				return p != null && setValueByPath(f, ["environment"], p), f;
			}
			function toolToMldev(d) {
				let f = {}, p = getValueByPath(d, ["functionDeclarations"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => functionDeclarationToMldev(d))), setValueByPath(f, ["functionDeclarations"], d);
				}
				if (getValueByPath(d, ["retrieval"]) !== void 0) throw Error("retrieval parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["googleSearch"]);
				m != null && setValueByPath(f, ["googleSearch"], googleSearchToMldev(m));
				let h = getValueByPath(d, ["googleSearchRetrieval"]);
				if (h != null && setValueByPath(f, ["googleSearchRetrieval"], googleSearchRetrievalToMldev(h)), getValueByPath(d, ["enterpriseWebSearch"]) !== void 0) throw Error("enterpriseWebSearch parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["googleMaps"]) !== void 0) throw Error("googleMaps parameter is not supported in Gemini API.");
				let g = getValueByPath(d, ["urlContext"]);
				g != null && setValueByPath(f, ["urlContext"], urlContextToMldev());
				let _ = getValueByPath(d, ["computerUse"]);
				_ != null && setValueByPath(f, ["computerUse"], toolComputerUseToMldev(_));
				let v = getValueByPath(d, ["codeExecution"]);
				return v != null && setValueByPath(f, ["codeExecution"], v), f;
			}
			function sessionResumptionConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["handle"]);
				if (p != null && setValueByPath(f, ["handle"], p), getValueByPath(d, ["transparent"]) !== void 0) throw Error("transparent parameter is not supported in Gemini API.");
				return f;
			}
			function audioTranscriptionConfigToMldev() {
				let d = {};
				return d;
			}
			function automaticActivityDetectionToMldev(d) {
				let f = {}, p = getValueByPath(d, ["disabled"]);
				p != null && setValueByPath(f, ["disabled"], p);
				let m = getValueByPath(d, ["startOfSpeechSensitivity"]);
				m != null && setValueByPath(f, ["startOfSpeechSensitivity"], m);
				let h = getValueByPath(d, ["endOfSpeechSensitivity"]);
				h != null && setValueByPath(f, ["endOfSpeechSensitivity"], h);
				let g = getValueByPath(d, ["prefixPaddingMs"]);
				g != null && setValueByPath(f, ["prefixPaddingMs"], g);
				let _ = getValueByPath(d, ["silenceDurationMs"]);
				return _ != null && setValueByPath(f, ["silenceDurationMs"], _), f;
			}
			function realtimeInputConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["automaticActivityDetection"]);
				p != null && setValueByPath(f, ["automaticActivityDetection"], automaticActivityDetectionToMldev(p));
				let m = getValueByPath(d, ["activityHandling"]);
				m != null && setValueByPath(f, ["activityHandling"], m);
				let h = getValueByPath(d, ["turnCoverage"]);
				return h != null && setValueByPath(f, ["turnCoverage"], h), f;
			}
			function slidingWindowToMldev(d) {
				let f = {}, p = getValueByPath(d, ["targetTokens"]);
				return p != null && setValueByPath(f, ["targetTokens"], p), f;
			}
			function contextWindowCompressionConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["triggerTokens"]);
				p != null && setValueByPath(f, ["triggerTokens"], p);
				let m = getValueByPath(d, ["slidingWindow"]);
				return m != null && setValueByPath(f, ["slidingWindow"], slidingWindowToMldev(m)), f;
			}
			function proactivityConfigToMldev(d) {
				let f = {}, p = getValueByPath(d, ["proactiveAudio"]);
				return p != null && setValueByPath(f, ["proactiveAudio"], p), f;
			}
			function liveConnectConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["generationConfig"]);
				f !== void 0 && m != null && setValueByPath(f, ["setup", "generationConfig"], m);
				let h = getValueByPath(d, ["responseModalities"]);
				f !== void 0 && h != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"responseModalities"
				], h);
				let g = getValueByPath(d, ["temperature"]);
				f !== void 0 && g != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"temperature"
				], g);
				let _ = getValueByPath(d, ["topP"]);
				f !== void 0 && _ != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"topP"
				], _);
				let v = getValueByPath(d, ["topK"]);
				f !== void 0 && v != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"topK"
				], v);
				let b = getValueByPath(d, ["maxOutputTokens"]);
				f !== void 0 && b != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"maxOutputTokens"
				], b);
				let x = getValueByPath(d, ["mediaResolution"]);
				f !== void 0 && x != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"mediaResolution"
				], x);
				let C = getValueByPath(d, ["seed"]);
				f !== void 0 && C != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"seed"
				], C);
				let w = getValueByPath(d, ["speechConfig"]);
				f !== void 0 && w != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"speechConfig"
				], speechConfigToMldev(tLiveSpeechConfig(w)));
				let T = getValueByPath(d, ["enableAffectiveDialog"]);
				f !== void 0 && T != null && setValueByPath(f, [
					"setup",
					"generationConfig",
					"enableAffectiveDialog"
				], T);
				let E = getValueByPath(d, ["systemInstruction"]);
				f !== void 0 && E != null && setValueByPath(f, ["setup", "systemInstruction"], contentToMldev(tContent(E)));
				let D = getValueByPath(d, ["tools"]);
				if (f !== void 0 && D != null) {
					let d = tTools(D);
					Array.isArray(d) && (d = d.map((d) => toolToMldev(tTool(d)))), setValueByPath(f, ["setup", "tools"], d);
				}
				let O = getValueByPath(d, ["sessionResumption"]);
				f !== void 0 && O != null && setValueByPath(f, ["setup", "sessionResumption"], sessionResumptionConfigToMldev(O));
				let A = getValueByPath(d, ["inputAudioTranscription"]);
				f !== void 0 && A != null && setValueByPath(f, ["setup", "inputAudioTranscription"], audioTranscriptionConfigToMldev());
				let j = getValueByPath(d, ["outputAudioTranscription"]);
				f !== void 0 && j != null && setValueByPath(f, ["setup", "outputAudioTranscription"], audioTranscriptionConfigToMldev());
				let F = getValueByPath(d, ["realtimeInputConfig"]);
				f !== void 0 && F != null && setValueByPath(f, ["setup", "realtimeInputConfig"], realtimeInputConfigToMldev(F));
				let U = getValueByPath(d, ["contextWindowCompression"]);
				f !== void 0 && U != null && setValueByPath(f, ["setup", "contextWindowCompression"], contextWindowCompressionConfigToMldev(U));
				let W = getValueByPath(d, ["proactivity"]);
				return f !== void 0 && W != null && setValueByPath(f, ["setup", "proactivity"], proactivityConfigToMldev(W)), p;
			}
			function liveConnectConstraintsToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["model"]);
				m != null && setValueByPath(p, ["setup", "model"], tModel(d, m));
				let h = getValueByPath(f, ["config"]);
				return h != null && setValueByPath(p, ["config"], liveConnectConfigToMldev(h, p)), p;
			}
			function createAuthTokenConfigToMldev(d, f, p) {
				let m = {}, h = getValueByPath(f, ["expireTime"]);
				p !== void 0 && h != null && setValueByPath(p, ["expireTime"], h);
				let g = getValueByPath(f, ["newSessionExpireTime"]);
				p !== void 0 && g != null && setValueByPath(p, ["newSessionExpireTime"], g);
				let _ = getValueByPath(f, ["uses"]);
				p !== void 0 && _ != null && setValueByPath(p, ["uses"], _);
				let v = getValueByPath(f, ["liveConnectConstraints"]);
				p !== void 0 && v != null && setValueByPath(p, ["bidiGenerateContentSetup"], liveConnectConstraintsToMldev(d, v));
				let b = getValueByPath(f, ["lockAdditionalFields"]);
				return p !== void 0 && b != null && setValueByPath(p, ["fieldMask"], b), m;
			}
			function createAuthTokenParametersToMldev(d, f) {
				let p = {}, m = getValueByPath(f, ["config"]);
				return m != null && setValueByPath(p, ["config"], createAuthTokenConfigToMldev(d, m, p)), p;
			}
			function authTokenFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				return p != null && setValueByPath(f, ["name"], p), f;
			}
			function getFieldMasks(d) {
				let f = [];
				for (let p in d) if (Object.prototype.hasOwnProperty.call(d, p)) {
					let m = d[p];
					if (typeof m == "object" && m && Object.keys(m).length > 0) {
						let d = Object.keys(m).map((d) => `${p}.${d}`);
						f.push(...d);
					} else f.push(p);
				}
				return f.join(",");
			}
			function convertBidiSetupToTokenSetup(d, f) {
				let p = null, m = d.bidiGenerateContentSetup;
				if (typeof m == "object" && m && "setup" in m) {
					let f = m.setup;
					typeof f == "object" && f ? (d.bidiGenerateContentSetup = f, p = f) : delete d.bidiGenerateContentSetup;
				} else m !== void 0 && delete d.bidiGenerateContentSetup;
				let h = d.fieldMask;
				if (p) {
					let m = getFieldMasks(p);
					if (Array.isArray(f?.lockAdditionalFields) && f?.lockAdditionalFields.length === 0) m ? d.fieldMask = m : delete d.fieldMask;
					else if (f?.lockAdditionalFields && f.lockAdditionalFields.length > 0 && h !== null && Array.isArray(h) && h.length > 0) {
						let f = [
							"temperature",
							"topK",
							"topP",
							"maxOutputTokens",
							"responseModalities",
							"seed",
							"speechConfig"
						], p = [];
						h.length > 0 && (p = h.map((d) => f.includes(d) ? `generationConfig.${d}` : d));
						let g = [];
						m && g.push(m), p.length > 0 && g.push(...p), g.length > 0 ? d.fieldMask = g.join(",") : delete d.fieldMask;
					} else delete d.fieldMask;
				} else h !== null && Array.isArray(h) && h.length > 0 ? d.fieldMask = h.join(",") : delete d.fieldMask;
				return d;
			}
			class Tokens extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d;
				}
				async create(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("The client.tokens.create method is only supported by the Gemini Developer API.");
					{
						let _ = createAuthTokenParametersToMldev(this.apiClient, d);
						h = formatMap("auth_tokens", _._url), g = _._query, delete _.config, delete _._url, delete _._query;
						let v = convertBidiSetupToTokenSetup(_, d.config);
						return m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(v),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json()), m.then((d) => {
							let f = authTokenFromMldev(d);
							return f;
						});
					}
				}
			}
			function getTuningJobParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["_url", "name"], p);
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function listTuningJobsConfigToMldev(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h);
				let g = getValueByPath(d, ["filter"]);
				return f !== void 0 && g != null && setValueByPath(f, ["_query", "filter"], g), p;
			}
			function listTuningJobsParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listTuningJobsConfigToMldev(p, f)), f;
			}
			function cancelTuningJobParametersToMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["_url", "name"], p);
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function tuningExampleToMldev(d) {
				let f = {}, p = getValueByPath(d, ["textInput"]);
				p != null && setValueByPath(f, ["textInput"], p);
				let m = getValueByPath(d, ["output"]);
				return m != null && setValueByPath(f, ["output"], m), f;
			}
			function tuningDatasetToMldev(d) {
				let f = {};
				if (getValueByPath(d, ["gcsUri"]) !== void 0) throw Error("gcsUri parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["vertexDatasetResource"]) !== void 0) throw Error("vertexDatasetResource parameter is not supported in Gemini API.");
				let p = getValueByPath(d, ["examples"]);
				if (p != null) {
					let d = p;
					Array.isArray(d) && (d = d.map((d) => tuningExampleToMldev(d))), setValueByPath(f, ["examples", "examples"], d);
				}
				return f;
			}
			function createTuningJobConfigToMldev(d, f) {
				let p = {};
				if (getValueByPath(d, ["validationDataset"]) !== void 0) throw Error("validationDataset parameter is not supported in Gemini API.");
				let m = getValueByPath(d, ["tunedModelDisplayName"]);
				if (f !== void 0 && m != null && setValueByPath(f, ["displayName"], m), getValueByPath(d, ["description"]) !== void 0) throw Error("description parameter is not supported in Gemini API.");
				let h = getValueByPath(d, ["epochCount"]);
				f !== void 0 && h != null && setValueByPath(f, [
					"tuningTask",
					"hyperparameters",
					"epochCount"
				], h);
				let g = getValueByPath(d, ["learningRateMultiplier"]);
				if (g != null && setValueByPath(p, [
					"tuningTask",
					"hyperparameters",
					"learningRateMultiplier"
				], g), getValueByPath(d, ["exportLastCheckpointOnly"]) !== void 0) throw Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["preTunedModelCheckpointId"]) !== void 0) throw Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");
				if (getValueByPath(d, ["adapterSize"]) !== void 0) throw Error("adapterSize parameter is not supported in Gemini API.");
				let _ = getValueByPath(d, ["batchSize"]);
				f !== void 0 && _ != null && setValueByPath(f, [
					"tuningTask",
					"hyperparameters",
					"batchSize"
				], _);
				let v = getValueByPath(d, ["learningRate"]);
				if (f !== void 0 && v != null && setValueByPath(f, [
					"tuningTask",
					"hyperparameters",
					"learningRate"
				], v), getValueByPath(d, ["labels"]) !== void 0) throw Error("labels parameter is not supported in Gemini API.");
				return p;
			}
			function createTuningJobParametersPrivateToMldev(d) {
				let f = {}, p = getValueByPath(d, ["baseModel"]);
				p != null && setValueByPath(f, ["baseModel"], p);
				let m = getValueByPath(d, ["preTunedModel"]);
				m != null && setValueByPath(f, ["preTunedModel"], m);
				let h = getValueByPath(d, ["trainingDataset"]);
				h != null && setValueByPath(f, ["tuningTask", "trainingData"], tuningDatasetToMldev(h));
				let g = getValueByPath(d, ["config"]);
				return g != null && setValueByPath(f, ["config"], createTuningJobConfigToMldev(g, f)), f;
			}
			function getTuningJobParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["_url", "name"], p);
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function listTuningJobsConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["pageSize"]);
				f !== void 0 && m != null && setValueByPath(f, ["_query", "pageSize"], m);
				let h = getValueByPath(d, ["pageToken"]);
				f !== void 0 && h != null && setValueByPath(f, ["_query", "pageToken"], h);
				let g = getValueByPath(d, ["filter"]);
				return f !== void 0 && g != null && setValueByPath(f, ["_query", "filter"], g), p;
			}
			function listTuningJobsParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["config"]);
				return p != null && setValueByPath(f, ["config"], listTuningJobsConfigToVertex(p, f)), f;
			}
			function cancelTuningJobParametersToVertex(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["_url", "name"], p);
				let m = getValueByPath(d, ["config"]);
				return m != null && setValueByPath(f, ["config"], m), f;
			}
			function tuningDatasetToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["gcsUri"]);
				f !== void 0 && m != null && setValueByPath(f, ["supervisedTuningSpec", "trainingDatasetUri"], m);
				let h = getValueByPath(d, ["vertexDatasetResource"]);
				if (f !== void 0 && h != null && setValueByPath(f, ["supervisedTuningSpec", "trainingDatasetUri"], h), getValueByPath(d, ["examples"]) !== void 0) throw Error("examples parameter is not supported in Vertex AI.");
				return p;
			}
			function tuningValidationDatasetToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["gcsUri"]);
				m != null && setValueByPath(p, ["validationDatasetUri"], m);
				let h = getValueByPath(d, ["vertexDatasetResource"]);
				return f !== void 0 && h != null && setValueByPath(f, ["supervisedTuningSpec", "trainingDatasetUri"], h), p;
			}
			function createTuningJobConfigToVertex(d, f) {
				let p = {}, m = getValueByPath(d, ["validationDataset"]);
				f !== void 0 && m != null && setValueByPath(f, ["supervisedTuningSpec"], tuningValidationDatasetToVertex(m, p));
				let h = getValueByPath(d, ["tunedModelDisplayName"]);
				f !== void 0 && h != null && setValueByPath(f, ["tunedModelDisplayName"], h);
				let g = getValueByPath(d, ["description"]);
				f !== void 0 && g != null && setValueByPath(f, ["description"], g);
				let _ = getValueByPath(d, ["epochCount"]);
				f !== void 0 && _ != null && setValueByPath(f, [
					"supervisedTuningSpec",
					"hyperParameters",
					"epochCount"
				], _);
				let v = getValueByPath(d, ["learningRateMultiplier"]);
				f !== void 0 && v != null && setValueByPath(f, [
					"supervisedTuningSpec",
					"hyperParameters",
					"learningRateMultiplier"
				], v);
				let b = getValueByPath(d, ["exportLastCheckpointOnly"]);
				f !== void 0 && b != null && setValueByPath(f, ["supervisedTuningSpec", "exportLastCheckpointOnly"], b);
				let x = getValueByPath(d, ["preTunedModelCheckpointId"]);
				x != null && setValueByPath(p, ["preTunedModel", "checkpointId"], x);
				let C = getValueByPath(d, ["adapterSize"]);
				if (f !== void 0 && C != null && setValueByPath(f, [
					"supervisedTuningSpec",
					"hyperParameters",
					"adapterSize"
				], C), getValueByPath(d, ["batchSize"]) !== void 0) throw Error("batchSize parameter is not supported in Vertex AI.");
				if (getValueByPath(d, ["learningRate"]) !== void 0) throw Error("learningRate parameter is not supported in Vertex AI.");
				let w = getValueByPath(d, ["labels"]);
				return f !== void 0 && w != null && setValueByPath(f, ["labels"], w), p;
			}
			function createTuningJobParametersPrivateToVertex(d) {
				let f = {}, p = getValueByPath(d, ["baseModel"]);
				p != null && setValueByPath(f, ["baseModel"], p);
				let m = getValueByPath(d, ["preTunedModel"]);
				m != null && setValueByPath(f, ["preTunedModel"], m);
				let h = getValueByPath(d, ["trainingDataset"]);
				h != null && setValueByPath(f, ["supervisedTuningSpec", "trainingDatasetUri"], tuningDatasetToVertex(h, f));
				let g = getValueByPath(d, ["config"]);
				return g != null && setValueByPath(f, ["config"], createTuningJobConfigToVertex(g, f)), f;
			}
			function tunedModelFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["name"]);
				p != null && setValueByPath(f, ["model"], p);
				let m = getValueByPath(d, ["name"]);
				return m != null && setValueByPath(f, ["endpoint"], m), f;
			}
			function tuningJobFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["state"]);
				h != null && setValueByPath(f, ["state"], tTuningJobStatus(h));
				let g = getValueByPath(d, ["createTime"]);
				g != null && setValueByPath(f, ["createTime"], g);
				let _ = getValueByPath(d, ["tuningTask", "startTime"]);
				_ != null && setValueByPath(f, ["startTime"], _);
				let v = getValueByPath(d, ["tuningTask", "completeTime"]);
				v != null && setValueByPath(f, ["endTime"], v);
				let b = getValueByPath(d, ["updateTime"]);
				b != null && setValueByPath(f, ["updateTime"], b);
				let x = getValueByPath(d, ["description"]);
				x != null && setValueByPath(f, ["description"], x);
				let C = getValueByPath(d, ["baseModel"]);
				C != null && setValueByPath(f, ["baseModel"], C);
				let w = getValueByPath(d, ["_self"]);
				w != null && setValueByPath(f, ["tunedModel"], tunedModelFromMldev(w));
				let T = getValueByPath(d, ["customBaseModel"]);
				T != null && setValueByPath(f, ["customBaseModel"], T);
				let E = getValueByPath(d, ["experiment"]);
				E != null && setValueByPath(f, ["experiment"], E);
				let D = getValueByPath(d, ["labels"]);
				D != null && setValueByPath(f, ["labels"], D);
				let O = getValueByPath(d, ["outputUri"]);
				O != null && setValueByPath(f, ["outputUri"], O);
				let A = getValueByPath(d, ["pipelineJob"]);
				A != null && setValueByPath(f, ["pipelineJob"], A);
				let j = getValueByPath(d, ["serviceAccount"]);
				j != null && setValueByPath(f, ["serviceAccount"], j);
				let F = getValueByPath(d, ["tunedModelDisplayName"]);
				return F != null && setValueByPath(f, ["tunedModelDisplayName"], F), f;
			}
			function listTuningJobsResponseFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["tunedModels"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => tuningJobFromMldev(d))), setValueByPath(f, ["tuningJobs"], d);
				}
				return f;
			}
			function tuningOperationFromMldev(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["metadata"]);
				h != null && setValueByPath(f, ["metadata"], h);
				let g = getValueByPath(d, ["done"]);
				g != null && setValueByPath(f, ["done"], g);
				let _ = getValueByPath(d, ["error"]);
				return _ != null && setValueByPath(f, ["error"], _), f;
			}
			function tunedModelCheckpointFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["checkpointId"]);
				p != null && setValueByPath(f, ["checkpointId"], p);
				let m = getValueByPath(d, ["epoch"]);
				m != null && setValueByPath(f, ["epoch"], m);
				let h = getValueByPath(d, ["step"]);
				h != null && setValueByPath(f, ["step"], h);
				let g = getValueByPath(d, ["endpoint"]);
				return g != null && setValueByPath(f, ["endpoint"], g), f;
			}
			function tunedModelFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["model"]);
				p != null && setValueByPath(f, ["model"], p);
				let m = getValueByPath(d, ["endpoint"]);
				m != null && setValueByPath(f, ["endpoint"], m);
				let h = getValueByPath(d, ["checkpoints"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => tunedModelCheckpointFromVertex(d))), setValueByPath(f, ["checkpoints"], d);
				}
				return f;
			}
			function tuningJobFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["name"]);
				m != null && setValueByPath(f, ["name"], m);
				let h = getValueByPath(d, ["state"]);
				h != null && setValueByPath(f, ["state"], tTuningJobStatus(h));
				let g = getValueByPath(d, ["createTime"]);
				g != null && setValueByPath(f, ["createTime"], g);
				let _ = getValueByPath(d, ["startTime"]);
				_ != null && setValueByPath(f, ["startTime"], _);
				let v = getValueByPath(d, ["endTime"]);
				v != null && setValueByPath(f, ["endTime"], v);
				let b = getValueByPath(d, ["updateTime"]);
				b != null && setValueByPath(f, ["updateTime"], b);
				let x = getValueByPath(d, ["error"]);
				x != null && setValueByPath(f, ["error"], x);
				let C = getValueByPath(d, ["description"]);
				C != null && setValueByPath(f, ["description"], C);
				let w = getValueByPath(d, ["baseModel"]);
				w != null && setValueByPath(f, ["baseModel"], w);
				let T = getValueByPath(d, ["tunedModel"]);
				T != null && setValueByPath(f, ["tunedModel"], tunedModelFromVertex(T));
				let E = getValueByPath(d, ["preTunedModel"]);
				E != null && setValueByPath(f, ["preTunedModel"], E);
				let D = getValueByPath(d, ["supervisedTuningSpec"]);
				D != null && setValueByPath(f, ["supervisedTuningSpec"], D);
				let O = getValueByPath(d, ["tuningDataStats"]);
				O != null && setValueByPath(f, ["tuningDataStats"], O);
				let A = getValueByPath(d, ["encryptionSpec"]);
				A != null && setValueByPath(f, ["encryptionSpec"], A);
				let j = getValueByPath(d, ["partnerModelTuningSpec"]);
				j != null && setValueByPath(f, ["partnerModelTuningSpec"], j);
				let F = getValueByPath(d, ["customBaseModel"]);
				F != null && setValueByPath(f, ["customBaseModel"], F);
				let U = getValueByPath(d, ["experiment"]);
				U != null && setValueByPath(f, ["experiment"], U);
				let W = getValueByPath(d, ["labels"]);
				W != null && setValueByPath(f, ["labels"], W);
				let G = getValueByPath(d, ["outputUri"]);
				G != null && setValueByPath(f, ["outputUri"], G);
				let K = getValueByPath(d, ["pipelineJob"]);
				K != null && setValueByPath(f, ["pipelineJob"], K);
				let q = getValueByPath(d, ["serviceAccount"]);
				q != null && setValueByPath(f, ["serviceAccount"], q);
				let J = getValueByPath(d, ["tunedModelDisplayName"]);
				return J != null && setValueByPath(f, ["tunedModelDisplayName"], J), f;
			}
			function listTuningJobsResponseFromVertex(d) {
				let f = {}, p = getValueByPath(d, ["sdkHttpResponse"]);
				p != null && setValueByPath(f, ["sdkHttpResponse"], p);
				let m = getValueByPath(d, ["nextPageToken"]);
				m != null && setValueByPath(f, ["nextPageToken"], m);
				let h = getValueByPath(d, ["tuningJobs"]);
				if (h != null) {
					let d = h;
					Array.isArray(d) && (d = d.map((d) => tuningJobFromVertex(d))), setValueByPath(f, ["tuningJobs"], d);
				}
				return f;
			}
			class Tunings extends BaseModule {
				constructor(d) {
					super(), this.apiClient = d, this.get = async (d) => await this.getInternal(d), this.list = async (d = {}) => new Pager(xe.PAGED_ITEM_TUNING_JOBS, (d) => this.listInternal(d), await this.listInternal(d), d), this.tune = async (d) => {
						if (this.apiClient.isVertexAI()) if (d.baseModel.startsWith("projects/")) {
							let f = { tunedModelName: d.baseModel }, p = Object.assign(Object.assign({}, d), { preTunedModel: f });
							return p.baseModel = void 0, await this.tuneInternal(p);
						} else {
							let f = Object.assign({}, d);
							return await this.tuneInternal(f);
						}
						else {
							let f = Object.assign({}, d), p = await this.tuneMldevInternal(f), m = "";
							p.metadata !== void 0 && p.metadata.tunedModel !== void 0 ? m = p.metadata.tunedModel : p.name !== void 0 && p.name.includes("/operations/") && (m = p.name.split("/operations/")[0]);
							let h = {
								name: m,
								state: K.JOB_STATE_QUEUED
							};
							return h;
						}
					};
				}
				async getInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = getTuningJobParametersToVertex(d);
						return _ = formatMap("{name}", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = tuningJobFromVertex(d);
							return f;
						});
					} else {
						let f = getTuningJobParametersToMldev(d);
						return _ = formatMap("{name}", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = tuningJobFromMldev(d);
							return f;
						});
					}
				}
				async listInternal(d) {
					var f, p, m, h;
					let g, _ = "", v = {};
					if (this.apiClient.isVertexAI()) {
						let m = listTuningJobsParametersToVertex(d);
						return _ = formatMap("tuningJobs", m._url), v = m._query, delete m.config, delete m._url, delete m._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(m),
							httpMethod: "GET",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listTuningJobsResponseFromVertex(d), p = new ListTuningJobsResponse();
							return Object.assign(p, f), p;
						});
					} else {
						let f = listTuningJobsParametersToMldev(d);
						return _ = formatMap("tunedModels", f._url), v = f._query, delete f.config, delete f._url, delete f._query, g = this.apiClient.request({
							path: _,
							queryParams: v,
							body: JSON.stringify(f),
							httpMethod: "GET",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), g.then((d) => {
							let f = listTuningJobsResponseFromMldev(d), p = new ListTuningJobsResponse();
							return Object.assign(p, f), p;
						});
					}
				}
				async cancel(d) {
					var f, p, m, h;
					let g = "", _ = {};
					if (this.apiClient.isVertexAI()) {
						let m = cancelTuningJobParametersToVertex(d);
						g = formatMap("{name}:cancel", m._url), _ = m._query, delete m.config, delete m._url, delete m._query, await this.apiClient.request({
							path: g,
							queryParams: _,
							body: JSON.stringify(m),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						});
					} else {
						let f = cancelTuningJobParametersToMldev(d);
						g = formatMap("{name}:cancel", f._url), _ = f._query, delete f.config, delete f._url, delete f._query, await this.apiClient.request({
							path: g,
							queryParams: _,
							body: JSON.stringify(f),
							httpMethod: "POST",
							httpOptions: (m = d.config)?.httpOptions,
							abortSignal: (h = d.config)?.abortSignal
						});
					}
				}
				async tuneInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) {
						let _ = createTuningJobParametersPrivateToVertex(d);
						return h = formatMap("tuningJobs", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = tuningJobFromVertex(d);
							return f;
						});
					} else throw Error("This method is only supported by the Vertex AI.");
				}
				async tuneMldevInternal(d) {
					var f, p;
					let m, h = "", g = {};
					if (this.apiClient.isVertexAI()) throw Error("This method is only supported by the Gemini Developer API.");
					{
						let _ = createTuningJobParametersPrivateToMldev(d);
						return h = formatMap("tunedModels", _._url), g = _._query, delete _.config, delete _._url, delete _._query, m = this.apiClient.request({
							path: h,
							queryParams: g,
							body: JSON.stringify(_),
							httpMethod: "POST",
							httpOptions: (f = d.config)?.httpOptions,
							abortSignal: (p = d.config)?.abortSignal
						}).then((d) => d.json().then((f) => {
							let p = f;
							return p.sdkHttpResponse = { headers: d.headers }, p;
						})), m.then((d) => {
							let f = tuningOperationFromMldev(d);
							return f;
						});
					}
				}
			}
			class BrowserDownloader {
				async download(d, f) {
					throw Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.");
				}
			}
			let Ie = 1024 * 1024 * 8, Le = 3, Re = 1e3, ze = 2, Be = "x-goog-upload-status";
			async function uploadBlob(d, f, p) {
				var m, h, g;
				let _ = 0, v = 0, b = new HttpResponse(new Response()), x = "upload";
				for (_ = d.size; v < _;) {
					let g = Math.min(Ie, _ - v), C = d.slice(v, v + g);
					v + g >= _ && (x += ", finalize");
					let w = 0, T = Re;
					for (; w < Le && (b = await p.request({
						path: "",
						body: C,
						httpMethod: "POST",
						httpOptions: {
							apiVersion: "",
							baseUrl: f,
							headers: {
								"X-Goog-Upload-Command": x,
								"X-Goog-Upload-Offset": String(v),
								"Content-Length": String(g)
							}
						}
					}), !(m = b?.headers)?.[Be]);) w++, await sleep(T), T *= ze;
					if (v += g, (h = b?.headers)?.[Be] !== "active") break;
					if (_ <= v) throw Error("All content has been uploaded, but the upload status is not finalized.");
				}
				let C = await b?.json();
				if ((g = b?.headers)?.[Be] !== "final") throw Error("Failed to upload file: Upload status is not finalized.");
				return C.file;
			}
			async function getBlobStat(d) {
				let f = {
					size: d.size,
					type: d.type
				};
				return f;
			}
			function sleep(d) {
				return new Promise((f) => setTimeout(f, d));
			}
			class BrowserUploader {
				async upload(d, f, p) {
					if (typeof d == "string") throw Error("File path is not supported in browser uploader.");
					return await uploadBlob(d, f, p);
				}
				async stat(d) {
					if (typeof d == "string") throw Error("File path is not supported in browser uploader.");
					return await getBlobStat(d);
				}
			}
			class BrowserWebSocketFactory {
				create(d, f, p) {
					return new BrowserWebSocket(d, f, p);
				}
			}
			class BrowserWebSocket {
				constructor(d, f, p) {
					this.url = d, this.headers = f, this.callbacks = p;
				}
				connect() {
					this.ws = new WebSocket(this.url), this.ws.onopen = this.callbacks.onopen, this.ws.onerror = this.callbacks.onerror, this.ws.onclose = this.callbacks.onclose, this.ws.onmessage = this.callbacks.onmessage;
				}
				send(d) {
					if (this.ws === void 0) throw Error("WebSocket is not connected");
					this.ws.send(d);
				}
				close() {
					if (this.ws === void 0) throw Error("WebSocket is not connected");
					this.ws.close();
				}
			}
			let Ve = "x-goog-api-key";
			class WebAuth {
				constructor(d) {
					this.apiKey = d;
				}
				async addAuthHeaders(d) {
					if (d.get(Ve) === null) {
						if (this.apiKey.startsWith("auth_tokens/")) throw Error("Ephemeral tokens are only supported by the live API.");
						if (!this.apiKey) throw Error("API key is missing. Please provide a valid API key.");
						d.append(Ve, this.apiKey);
					}
				}
			}
			let He = "gl-node/";
			class GoogleGenAI {
				constructor(d) {
					var f;
					if (d.apiKey == null) throw Error("An API Key must be set when running in a browser");
					if (d.project || d.location) throw Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");
					this.vertexai = (f = d.vertexai) ?? !1, this.apiKey = d.apiKey;
					let p = getBaseUrl(d.httpOptions, d.vertexai, void 0, void 0);
					p && (d.httpOptions ? d.httpOptions.baseUrl = p : d.httpOptions = { baseUrl: p }), this.apiVersion = d.apiVersion;
					let m = new WebAuth(this.apiKey);
					this.apiClient = new ApiClient({
						auth: m,
						apiVersion: this.apiVersion,
						apiKey: this.apiKey,
						vertexai: this.vertexai,
						httpOptions: d.httpOptions,
						userAgentExtra: He + "web",
						uploader: new BrowserUploader(),
						downloader: new BrowserDownloader()
					}), this.models = new Models(this.apiClient), this.live = new Live(this.apiClient, m, new BrowserWebSocketFactory()), this.batches = new Batches(this.apiClient), this.chats = new Chats(this.models, this.apiClient), this.caches = new Caches(this.apiClient), this.files = new Files(this.apiClient), this.operations = new Operations(this.apiClient), this.authTokens = new Tokens(this.apiClient), this.tunings = new Tunings(this.apiClient);
				}
			}
		},
		"./node_modules/@vot.js/core/dist/client.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						Ay: () => VOTClient,
						Pu: () => VOTWorkerClient
					});
					var h = p("./node_modules/@vot.js/shared/dist/data/config.js"), g = p("./node_modules/@vot.js/shared/dist/utils/logger.js"), _ = p("./node_modules/@vot.js/shared/dist/protos/yandex.js"), v = p("./node_modules/@vot.js/shared/dist/secure.js"), b = p("./node_modules/@vot.js/shared/dist/utils/utils.js"), x = p("./node_modules/@vot.js/core/dist/protobuf.js"), C = p("./node_modules/@vot.js/core/dist/types/yandex.js"), w = p("./node_modules/@vot.js/core/dist/utils/vot.js"), T = p("./src/utils/VOTLocalizedError.js"), E = d([T]);
					T = (E.then ? (await E)() : E)[0];
					class VOTJSError extends Error {
						data;
						constructor(d, f = void 0) {
							super(d), this.data = f, this.name = "VOTJSError", this.message = d;
						}
					}
					class MinimalClient {
						host;
						schema;
						fetch;
						fetchOpts;
						sessions = {};
						userAgent = h.A.userAgent;
						headers = {
							"User-Agent": this.userAgent,
							Accept: "application/x-protobuf",
							"Accept-Language": "en",
							"Content-Type": "application/x-protobuf",
							Pragma: "no-cache",
							"Cache-Control": "no-cache"
						};
						hostSchemaRe = /(http(s)?):\/\//;
						constructor({ host: d = h.A.host, fetchFn: f = b.u9, fetchOpts: p = {}, headers: m = {} } = {}) {
							let g = this.hostSchemaRe.exec(d)?.[1];
							this.host = g ? d.replace(`${g}://`, "") : d, this.schema = g ?? "https", this.fetch = f, this.fetchOpts = p, this.headers = {
								...this.headers,
								...m
							};
						}
						async request(d, f, p = {}, m = "POST") {
							let h = this.getOpts(new Blob([f]), p, m);
							try {
								let f = await this.fetch(`${this.schema}://${this.host}${d}`, h), p = await f.arrayBuffer();
								return {
									success: f.status === 200,
									data: p
								};
							} catch (d) {
								return {
									success: !1,
									data: d?.message
								};
							}
						}
						async requestJSON(d, f = null, p = {}, m = "POST") {
							let h = this.getOpts(f, {
								"Content-Type": "application/json",
								...p
							}, m);
							try {
								let f = await this.fetch(`${this.schema}://${this.host}${d}`, h), p = await f.json();
								return {
									success: f.status === 200,
									data: p
								};
							} catch (d) {
								return {
									success: !1,
									data: d?.message
								};
							}
						}
						getOpts(d, f = {}, p = "POST") {
							return {
								method: p,
								headers: {
									...this.headers,
									...f
								},
								body: d,
								...this.fetchOpts
							};
						}
						async getSession(d) {
							let f = (0, b.lg)(), p = this.sessions[d];
							if (p && p.timestamp + p.expires > f) return p;
							let { secretKey: m, expires: h, uuid: g } = await this.createSession(d);
							return this.sessions[d] = {
								secretKey: m,
								expires: h,
								timestamp: f,
								uuid: g
							}, this.sessions[d];
						}
						async createSession(d) {
							let f = (0, v.yk)(), p = x.P.encodeSessionRequest(f, d), m = await this.request("/session/create", p, { "Vtrans-Signature": await (0, v.dD)(p) });
							if (!m.success) throw new VOTJSError("Failed to request create session", m);
							let h = x.P.decodeSessionResponse(m.data);
							return {
								...h,
								uuid: f
							};
						}
					}
					class VOTClient extends MinimalClient {
						hostVOT;
						schemaVOT;
						apiToken;
						requestLang;
						responseLang;
						paths = {
							videoTranslation: "/video-translation/translate",
							videoTranslationFailAudio: "/video-translation/fail-audio-js",
							videoTranslationAudio: "/video-translation/audio",
							videoTranslationCache: "/video-translation/cache",
							videoSubtitles: "/video-subtitles/get-subtitles",
							streamPing: "/stream-translation/ping-stream",
							streamTranslation: "/stream-translation/translate-stream"
						};
						isCustomLink(d) {
							return !!(/\.(m3u8|m4(a|v)|mpd)/.exec(d) ?? /^https:\/\/cdn\.qstv\.on\.epicgames\.com/.exec(d));
						}
						headersVOT = {
							"User-Agent": `vot.js/${h.A.version}`,
							"Content-Type": "application/json",
							Pragma: "no-cache",
							"Cache-Control": "no-cache"
						};
						constructor({ host: d, hostVOT: f = h.A.hostVOT, fetchFn: p, fetchOpts: m, requestLang: g = "en", responseLang: _ = "ru", apiToken: v, headers: b } = {}) {
							super({
								host: d,
								fetchFn: p,
								fetchOpts: m,
								headers: b
							});
							let x = this.hostSchemaRe.exec(f)?.[1];
							this.hostVOT = x ? f.replace(`${x}://`, "") : f, this.schemaVOT = x ?? "https", this.requestLang = g, this.responseLang = _, this.apiToken = v;
						}
						get apiTokenHeader() {
							return this.apiToken ? { Authorization: `OAuth ${this.apiToken}` } : {};
						}
						async requestVOT(d, f, p = {}) {
							let m = this.getOpts(JSON.stringify(f), {
								...this.headersVOT,
								...p
							});
							try {
								let f = await this.fetch(`${this.schemaVOT}://${this.hostVOT}${d}`, m), p = await f.json();
								return {
									success: f.status === 200,
									data: p
								};
							} catch (d) {
								return {
									success: !1,
									data: d?.message
								};
							}
						}
						async translateVideoYAImpl({ videoData: d, requestLang: f = this.requestLang, responseLang: p = this.responseLang, translationHelp: m = null, headers: _ = {}, extraOpts: b = {}, shouldSendFailedAudio: w = !0 }) {
							let { url: E, duration: D = h.A.defaultDuration } = d, O = await this.getSession("video-translation"), A = x.S.encodeTranslationRequest(E, D, f, p, m, b), j = this.paths.videoTranslation, F = await (0, v.C0)("Vtrans", O, A, j), U = b.useLivelyVoice ? this.apiTokenHeader : {}, W = await this.request(j, A, {
								...F,
								...U,
								..._
							});
							if (!W.success) throw new T.n("requestTranslationFailed");
							let G = x.S.decodeTranslationResponse(W.data);
							g.A.log("translateVideo", G);
							let { status: K, translationId: q } = G;
							switch (K) {
								case C.v.FAILED: throw G?.message ? new VOTJSError("Yandex couldn't translate video", G) : new T.n("requestTranslationFailed");
								case C.v.FINISHED:
								case C.v.PART_CONTENT:
									if (!G.url) throw new T.n("audioNotReceived");
									return {
										translationId: q,
										translated: !0,
										url: G.url,
										status: K,
										remainingTime: G.remainingTime ?? -1
									};
								case C.v.WAITING:
								case C.v.LONG_WAITING: return {
									translationId: q,
									translated: !1,
									status: K,
									remainingTime: G.remainingTime
								};
								case C.v.AUDIO_REQUESTED: return E.startsWith("https://youtu.be/") && w ? (await this.requestVtransFailAudio(E), await this.requestVtransAudio(E, G.translationId, {
									audioFile: new Uint8Array(),
									fileId: C.J.WEB_API_GET_ALL_GENERATING_URLS_DATA_FROM_IFRAME
								}), await this.translateVideoYAImpl({
									videoData: d,
									requestLang: f,
									responseLang: p,
									translationHelp: m,
									headers: _,
									shouldSendFailedAudio: !1
								})) : {
									translationId: q,
									translated: !1,
									status: K,
									remainingTime: G.remainingTime ?? -1
								};
								case C.v.SESSION_REQUIRED: throw new VOTJSError("Yandex auth required to translate video. See docs for more info", G);
								default: throw g.A.error("Unknown response", G), new VOTJSError("Unknown response from Yandex", G);
							}
						}
						async translateVideoVOTImpl({ url: d, videoId: f, service: p, requestLang: m = this.requestLang, responseLang: h = this.responseLang, headers: g = {}, provider: _ = "yandex" }) {
							let v = (0, w.p)(p, f, d), b = await this.requestVOT(this.paths.videoTranslation, {
								provider: _,
								service: v.service,
								video_id: v.videoId,
								from_lang: m,
								to_lang: h,
								raw_video: d
							}, { ...g });
							if (!b.success) throw new T.n("requestTranslationFailed");
							let x = b.data;
							switch (x.status) {
								case "failed": throw new VOTJSError("Yandex couldn't translate video", x);
								case "success":
									if (!x.translated_url) throw new T.n("audioNotReceived");
									return {
										translationId: String(x.id),
										translated: !0,
										url: x.translated_url,
										status: 1,
										remainingTime: -1
									};
								case "waiting": return {
									translationId: "",
									translated: !1,
									remainingTime: x.remaining_time,
									status: 2,
									message: x.message
								};
							}
						}
						async requestVtransFailAudio(d) {
							let f = await this.requestJSON(this.paths.videoTranslationFailAudio, JSON.stringify({ video_url: d }), void 0, "PUT");
							if (!f.data || typeof f.data == "string" || f.data.status !== 1) throw new VOTJSError("Failed to request to fake video translation fail audio js", f);
							return f;
						}
						async requestVtransAudio(d, f, p, m, h = {}) {
							let g = await this.getSession("video-translation"), _ = x.S.isPartialAudioBuffer(p) ? x.S.encodeTranslationAudioRequest(d, f, p, m) : x.S.encodeTranslationAudioRequest(d, f, p, void 0), b = this.paths.videoTranslationAudio, C = await (0, v.C0)("Vtrans", g, _, b), w = await this.request(b, _, {
								...C,
								...h
							}, "PUT");
							if (!w.success) throw new VOTJSError("Failed to request video translation audio", w);
							return x.S.decodeTranslationAudioResponse(w.data);
						}
						async translateVideoCache({ videoData: d, requestLang: f = this.requestLang, responseLang: p = this.responseLang, headers: m = {} }) {
							let { url: g, duration: _ = h.A.defaultDuration } = d, b = await this.getSession("video-translation"), C = x.S.encodeTranslationCacheRequest(g, _, f, p), w = this.paths.videoTranslationCache, T = await (0, v.C0)("Vtrans", b, C, w), E = await this.request(w, C, {
								...T,
								...m
							}, "POST");
							if (!E.success) throw new VOTJSError("Failed to request video translation cache", E);
							return x.S.decodeTranslationCacheResponse(E.data);
						}
						async translateVideo({ videoData: d, requestLang: f = this.requestLang, responseLang: p = this.responseLang, translationHelp: m = null, headers: h = {}, extraOpts: g = {}, shouldSendFailedAudio: _ = !0 }) {
							let { url: v, videoId: b, host: x } = d;
							return this.isCustomLink(v) ? await this.translateVideoVOTImpl({
								url: v,
								videoId: b,
								service: x,
								requestLang: f,
								responseLang: p,
								headers: h,
								provider: g.useLivelyVoice ? "yandex_lively" : "yandex"
							}) : await this.translateVideoYAImpl({
								videoData: d,
								requestLang: f,
								responseLang: p,
								translationHelp: m,
								headers: h,
								extraOpts: g,
								shouldSendFailedAudio: _
							});
						}
						async getSubtitlesYAImpl({ videoData: d, requestLang: f = this.requestLang, headers: p = {} }) {
							let { url: m } = d, h = await this.getSession("video-translation"), g = x.S.encodeSubtitlesRequest(m, f), _ = this.paths.videoSubtitles, b = await (0, v.C0)("Vsubs", h, g, _), C = await this.request(_, g, {
								...b,
								...p
							});
							if (!C.success) throw new VOTJSError("Failed to request video subtitles", C);
							let w = x.S.decodeSubtitlesResponse(C.data), T = w.subtitles.map((d) => {
								let { language: f, url: p, translatedLanguage: m, translatedUrl: h } = d;
								return {
									language: f,
									url: p,
									translatedLanguage: m,
									translatedUrl: h
								};
							});
							return {
								waiting: w.waiting,
								subtitles: T
							};
						}
						async getSubtitlesVOTImpl({ url: d, videoId: f, service: p, headers: m = {} }) {
							let h = (0, w.p)(p, f, d), g = await this.requestVOT(this.paths.videoSubtitles, {
								provider: "yandex",
								service: h.service,
								video_id: h.videoId
							}, m);
							if (!g.success) throw new VOTJSError("Failed to request video subtitles", g);
							let _ = g.data, v = _.reduce((d, f) => {
								if (!f.lang_from) return d;
								let p = _.find((d) => d.lang === f.lang_from);
								return p && d.push({
									language: p.lang,
									url: p.subtitle_url,
									translatedLanguage: f.lang,
									translatedUrl: f.subtitle_url
								}), d;
							}, []);
							return {
								waiting: !1,
								subtitles: v
							};
						}
						async getSubtitles({ videoData: d, requestLang: f = this.requestLang, headers: p = {} }) {
							let { url: m, videoId: h, host: g } = d;
							return this.isCustomLink(m) ? await this.getSubtitlesVOTImpl({
								url: m,
								videoId: h,
								service: g,
								headers: p
							}) : await this.getSubtitlesYAImpl({
								videoData: d,
								requestLang: f,
								headers: p
							});
						}
						async pingStream({ pingId: d, headers: f = {} }) {
							let p = await this.getSession("video-translation"), m = x.S.encodeStreamPingRequest(d), h = this.paths.streamPing, g = await (0, v.C0)("Vtrans", p, m, h), _ = await this.request(h, m, {
								...g,
								...f
							});
							if (!_.success) throw new VOTJSError("Failed to request stream ping", _);
							return !0;
						}
						async translateStream({ videoData: d, requestLang: f = this.requestLang, responseLang: p = this.responseLang, headers: m = {} }) {
							let { url: h } = d;
							if (this.isCustomLink(h)) throw new T.n("VOTStreamNotSupportedUrl");
							let b = await this.getSession("video-translation"), C = x.S.encodeStreamRequest(h, f, p), w = this.paths.streamTranslation, E = await (0, v.C0)("Vtrans", b, C, w), D = await this.request(w, C, {
								...E,
								...m
							});
							if (!D.success) throw new VOTJSError("Failed to request stream translation", D);
							let O = x.S.decodeStreamResponse(D.data), A = O.interval;
							switch (A) {
								case _.q8.NO_CONNECTION:
								case _.q8.TRANSLATING: return {
									translated: !1,
									interval: A,
									message: A === _.q8.NO_CONNECTION ? "streamNoConnectionToServer" : "translationTakeFewMinutes"
								};
								case _.q8.STREAMING: return {
									translated: !0,
									interval: A,
									pingId: O.pingId,
									result: O.translatedInfo
								};
								default: throw g.A.error("Unknown response", O), new VOTJSError("Unknown response from Yandex", O);
							}
						}
					}
					class VOTWorkerClient extends VOTClient {
						constructor(d = {}) {
							d.host = d.host ?? h.A.hostWorker, super(d);
						}
						async request(d, f, p = {}, m = "POST") {
							let h = this.getOpts(JSON.stringify({
								headers: {
									...this.headers,
									...p
								},
								body: Array.from(f)
							}), { "Content-Type": "application/json" }, m);
							try {
								let f = await this.fetch(`${this.schema}://${this.host}${d}`, h), p = await f.arrayBuffer();
								return {
									success: f.status === 200,
									data: p
								};
							} catch (d) {
								return {
									success: !1,
									data: d?.message
								};
							}
						}
						async requestJSON(d, f = null, p = {}, m = "POST") {
							let h = this.getOpts(JSON.stringify({
								headers: {
									...this.headers,
									"Content-Type": "application/json",
									Accept: "application/json",
									...p
								},
								body: f
							}), {
								Accept: "application/json",
								"Content-Type": "application/json"
							}, m);
							try {
								let f = await this.fetch(`${this.schema}://${this.host}${d}`, h), p = await f.json();
								return {
									success: f.status === 200,
									data: p
								};
							} catch (d) {
								return {
									success: !1,
									data: d?.message
								};
							}
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./node_modules/@vot.js/core/dist/protobuf.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				P: () => YandexSessionProtobuf,
				S: () => YandexVOTProtobuf
			});
			var m = p("./node_modules/@vot.js/shared/dist/protos/yandex.js");
			class YandexVOTProtobuf {
				static encodeTranslationRequest(d, f, p, h, g, { forceSourceLang: _ = !1, wasStream: v = !1, videoTitle: b = "", bypassCache: x = !1, useLivelyVoice: C = !1, firstRequest: w = !0 } = {}) {
					return m.yy.encode({
						url: d,
						firstRequest: w,
						duration: f,
						unknown0: 1,
						language: p,
						forceSourceLang: _,
						unknown1: 0,
						translationHelp: g ?? [],
						responseLanguage: h,
						wasStream: v,
						unknown2: 1,
						unknown3: 2,
						bypassCache: x,
						useLivelyVoice: C,
						videoTitle: b
					}).finish();
				}
				static decodeTranslationResponse(d) {
					return m.AJ.decode(new Uint8Array(d));
				}
				static encodeTranslationCacheRequest(d, f, p, h) {
					return m.Yx.encode({
						url: d,
						duration: f,
						language: p,
						responseLanguage: h
					}).finish();
				}
				static decodeTranslationCacheResponse(d) {
					return m.ZK.decode(new Uint8Array(d));
				}
				static isPartialAudioBuffer(d) {
					return "chunkId" in d;
				}
				static encodeTranslationAudioRequest(d, f, p, h) {
					return h && YandexVOTProtobuf.isPartialAudioBuffer(p) ? m.Y7.encode({
						url: d,
						translationId: f,
						partialAudioInfo: {
							...h,
							audioBuffer: p
						}
					}).finish() : m.Y7.encode({
						url: d,
						translationId: f,
						audioInfo: p
					}).finish();
				}
				static decodeTranslationAudioResponse(d) {
					return m.Wi.decode(new Uint8Array(d));
				}
				static encodeSubtitlesRequest(d, f) {
					return m.P4.encode({
						url: d,
						language: f
					}).finish();
				}
				static decodeSubtitlesResponse(d) {
					return m.LD.decode(new Uint8Array(d));
				}
				static encodeStreamPingRequest(d) {
					return m.kO.encode({ pingId: d }).finish();
				}
				static encodeStreamRequest(d, f, p) {
					return m.Xv.encode({
						url: d,
						language: f,
						responseLanguage: p,
						unknown0: 1,
						unknown1: 0
					}).finish();
				}
				static decodeStreamResponse(d) {
					return m.n_.decode(new Uint8Array(d));
				}
			}
			class YandexSessionProtobuf {
				static encodeSessionRequest(d, f) {
					return m.ls.encode({
						uuid: d,
						module: f
					}).finish();
				}
				static decodeSessionResponse(d) {
					return m.Bv.decode(new Uint8Array(d));
				}
			}
		},
		"./node_modules/@vot.js/core/dist/types/service.js": (d, f, p) => {
			"use strict";
			p.d(f, { r: () => m });
			var m;
			(function(d) {
				d.custom = "custom", d.directlink = "custom", d.youtube = "youtube", d.piped = "piped", d.invidious = "invidious", d.vk = "vk", d.nine_gag = "nine_gag", d.gag = "nine_gag", d.twitch = "twitch", d.proxitok = "proxitok", d.tiktok = "tiktok", d.vimeo = "vimeo", d.xvideos = "xvideos", d.pornhub = "pornhub", d.twitter = "twitter", d.x = "twitter", d.rumble = "rumble", d.facebook = "facebook", d.rutube = "rutube", d.coub = "coub", d.bilibili = "bilibili", d.mail_ru = "mailru", d.mailru = "mailru", d.bitchute = "bitchute", d.eporner = "eporner", d.peertube = "peertube", d.dailymotion = "dailymotion", d.trovo = "trovo", d.yandexdisk = "yandexdisk", d.ok_ru = "okru", d.okru = "okru", d.googledrive = "googledrive", d.bannedvideo = "bannedvideo", d.weverse = "weverse", d.newgrounds = "newgrounds", d.egghead = "egghead", d.youku = "youku", d.archive = "archive", d.kodik = "kodik", d.patreon = "patreon", d.reddit = "reddit", d.kick = "kick", d.apple_developer = "apple_developer", d.appledeveloper = "apple_developer", d.poketube = "poketube", d.epicgames = "epicgames", d.odysee = "odysee", d.coursehunterLike = "coursehunterLike", d.sap = "sap", d.watchpornto = "watchpornto", d.linkedin = "linkedin", d.ricktube = "ricktube", d.incestflix = "incestflix", d.porntn = "porntn", d.dzen = "dzen", d.cloudflarestream = "cloudflarestream", d.loom = "loom", d.rtnews = "rtnews", d.bitview = "bitview", d.thisvid = "thisvid", d.ign = "ign", d.bunkr = "bunkr", d.imdb = "imdb", d.telegram = "telegram";
			})(m ||= {});
		},
		"./node_modules/@vot.js/core/dist/types/yandex.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				J: () => h,
				v: () => m
			});
			var m;
			(function(d) {
				d[d.FAILED = 0] = "FAILED", d[d.FINISHED = 1] = "FINISHED", d[d.WAITING = 2] = "WAITING", d[d.LONG_WAITING = 3] = "LONG_WAITING", d[d.PART_CONTENT = 5] = "PART_CONTENT", d[d.AUDIO_REQUESTED = 6] = "AUDIO_REQUESTED", d[d.SESSION_REQUIRED = 7] = "SESSION_REQUIRED";
			})(m ||= {});
			var h;
			(function(d) {
				d.WEB_API_VIDEO_SRC_FROM_IFRAME = "web_api_video_src_from_iframe", d.WEB_API_VIDEO_SRC = "web_api_video_src", d.WEB_API_GET_ALL_GENERATING_URLS_DATA_FROM_IFRAME = "web_api_get_all_generating_urls_data_from_iframe", d.WEB_API_GET_ALL_GENERATING_URLS_DATA_FROM_IFRAME_TMP_EXP = "web_api_get_all_generating_urls_data_from_iframe_tmp_exp", d.WEB_API_REPLACED_FETCH_INSIDE_IFRAME = "web_api_replaced_fetch_inside_iframe", d.ANDROID_API = "android_api", d.WEB_API_SLOW = "web_api_slow", d.WEB_API_STEAL_SIG_AND_N = "web_api_steal_sig_and_n", d.WEB_API_COMBINED = "web_api_get_all_generating_urls_data_from_iframe,web_api_steal_sig_and_n";
			})(h ||= {});
		},
		"./node_modules/@vot.js/core/dist/utils/videoData.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				$: () => m,
				A: () => VideoDataError
			});
			class VideoDataError extends Error {
				constructor(d) {
					super(d), this.name = "VideoDataError", this.message = d;
				}
			}
			let m = /(file:\/\/(\/)?|(http(s)?:\/\/)(127\.0\.0\.1|localhost|192\.168\.(\d){1,3}\.(\d){1,3}))/;
		},
		"./node_modules/@vot.js/core/dist/utils/vot.js": (d, f, p) => {
			"use strict";
			p.d(f, { p: () => convertVOT });
			var m = p("./node_modules/@vot.js/core/dist/types/service.js");
			function convertVOT(d, f, p) {
				return d === m.r.patreon ? {
					service: "mux",
					videoId: new URL(p).pathname.slice(1)
				} : {
					service: d,
					videoId: f
				};
			}
		},
		"./node_modules/@vot.js/ext/dist/client.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						A: () => VOTClient,
						P: () => VOTWorkerClient
					});
					var h = p("./node_modules/@vot.js/core/dist/client.js"), g = p("./node_modules/@vot.js/shared/dist/secure.js"), _ = d([h]);
					h = (_.then ? (await _)() : _)[0];
					class VOTClient extends h.Ay {
						constructor(d) {
							super(d), this.headers = {
								...g.MG,
								...this.headers
							};
						}
					}
					class VOTWorkerClient extends h.Pu {
						constructor(d) {
							super(d), this.headers = {
								...g.MG,
								...this.headers
							};
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./node_modules/@vot.js/ext/dist/data/sites.js": (d, f, p) => {
			"use strict";
			p.d(f, { A: () => _ });
			var m = p("./node_modules/@vot.js/core/dist/types/service.js"), h = p("./node_modules/@vot.js/shared/dist/data/alternativeUrls.js"), g = p("./node_modules/@vot.js/ext/dist/types/service.js");
			let _ = [
				{
					additionalData: "mobile",
					host: m.r.youtube,
					url: "https://youtu.be/",
					match: /^m.youtube.com$/,
					selector: ".player-container",
					needExtraData: !0
				},
				{
					host: m.r.youtube,
					url: "https://youtu.be/",
					match: /^(www.)?youtube(-nocookie|kids)?.com$/,
					selector: ".html5-video-container:not(#inline-player *)",
					needExtraData: !0
				},
				{
					host: m.r.invidious,
					url: "https://youtu.be/",
					match: h.Xm,
					selector: "#player",
					needBypassCSP: !0
				},
				{
					host: m.r.piped,
					url: "https://youtu.be/",
					match: h.Jo,
					selector: ".shaka-video-container",
					needBypassCSP: !0
				},
				{
					host: m.r.poketube,
					url: "https://youtu.be/",
					match: h.sx,
					selector: ".video-player-container"
				},
				{
					host: m.r.ricktube,
					url: "https://youtu.be/",
					match: h.My,
					selector: "#oframeplayer > pjsdiv:has(video)"
				},
				{
					additionalData: "mobile",
					host: m.r.vk,
					url: "https://vk.com/video?z=",
					match: [/^m.vk.(com|ru)$/, /^m.vkvideo.ru$/],
					selector: "vk-video-player",
					shadowRoot: !0,
					needExtraData: !0
				},
				{
					additionalData: "clips",
					host: m.r.vk,
					url: "https://vk.com/video?z=",
					match: /^(www.|m.)?vk.(com|ru)$/,
					selector: "div[data-testid=\"clipcontainer-video\"]",
					needExtraData: !0
				},
				{
					host: m.r.vk,
					url: "https://vk.com/video?z=",
					match: [/^(www.|m.)?vk.(com|ru)$/, /^(www.|m.)?vkvideo.ru$/],
					selector: ".videoplayer_media",
					needExtraData: !0
				},
				{
					host: m.r.nine_gag,
					url: "https://9gag.com/gag/",
					match: /^9gag.com$/,
					selector: ".video-post",
					needExtraData: !0
				},
				{
					host: m.r.twitch,
					url: "https://twitch.tv/",
					match: [
						/^m.twitch.tv$/,
						/^(www.)?twitch.tv$/,
						/^clips.twitch.tv$/,
						/^player.twitch.tv$/
					],
					needExtraData: !0,
					selector: ".video-ref, main > div > section > div > div > div"
				},
				{
					host: m.r.proxitok,
					url: "https://www.tiktok.com/",
					match: h.TP,
					selector: ".column.has-text-centered"
				},
				{
					host: m.r.tiktok,
					url: "https://www.tiktok.com/",
					match: /^(www.)?tiktok.com$/,
					selector: null
				},
				{
					host: g.Q.douyin,
					url: "https://www.douyin.com/",
					match: /^(www.)?douyin.com/,
					selector: ".xg-video-container",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: m.r.vimeo,
					url: "https://vimeo.com/",
					match: /^vimeo.com$/,
					needExtraData: !0,
					selector: ".player"
				},
				{
					host: m.r.vimeo,
					url: "https://player.vimeo.com/",
					match: /^player.vimeo.com$/,
					additionalData: "embed",
					needExtraData: !0,
					needBypassCSP: !0,
					selector: ".player"
				},
				{
					host: m.r.xvideos,
					url: "https://www.xvideos.com/",
					match: [
						/^(www.)?xvideos(-ar)?.com$/,
						/^(www.)?xvideos(\d\d\d).com$/,
						/^(www.)?xv-ru.com$/
					],
					selector: "#hlsplayer",
					needBypassCSP: !0
				},
				{
					host: m.r.pornhub,
					url: "https://rt.pornhub.com/view_video.php?viewkey=",
					match: /^[a-z]+.pornhub.(com|org)$/,
					selector: ".mainPlayerDiv > .video-element-wrapper-js > div",
					eventSelector: ".mgp_eventCatcher"
				},
				{
					additionalData: "embed",
					host: m.r.pornhub,
					url: "https://rt.pornhub.com/view_video.php?viewkey=",
					match: (d) => /^[a-z]+.pornhub.(com|org)$/.exec(d.host) && d.pathname.startsWith("/embed/"),
					selector: "#player"
				},
				{
					host: m.r.twitter,
					url: "https://twitter.com/i/status/",
					match: /^(twitter|x).com$/,
					selector: "div[data-testid=\"videoComponent\"] > div:nth-child(1) > div",
					eventSelector: "div[data-testid=\"videoPlayer\"]",
					needBypassCSP: !0
				},
				{
					host: m.r.rumble,
					url: "https://rumble.com/",
					match: /^rumble.com$/,
					selector: "#videoPlayer > .videoPlayer-Rumble-cls > div"
				},
				{
					host: m.r.facebook,
					url: "https://facebook.com/",
					match: (d) => d.host.includes("facebook.com") && d.pathname.includes("/videos/"),
					selector: "div[role=\"main\"] div[data-pagelet$=\"video\" i]",
					needBypassCSP: !0
				},
				{
					additionalData: "reels",
					host: m.r.facebook,
					url: "https://facebook.com/",
					match: (d) => d.host.includes("facebook.com") && d.pathname.includes("/reel/"),
					selector: "div[role=\"main\"]",
					needBypassCSP: !0
				},
				{
					host: m.r.rutube,
					url: "https://rutube.ru/video/",
					match: /^rutube.ru$/,
					selector: ".video-player > div > div > div:nth-child(2)"
				},
				{
					additionalData: "embed",
					host: m.r.rutube,
					url: "https://rutube.ru/video/",
					match: /^rutube.ru$/,
					selector: "#app > div > div"
				},
				{
					host: m.r.bilibili,
					url: "https://www.bilibili.com/",
					match: /^(www|m|player).bilibili.com$/,
					selector: ".bpx-player-video-wrap"
				},
				{
					additionalData: "old",
					host: m.r.bilibili,
					url: "https://www.bilibili.com/",
					match: /^(www|m).bilibili.com$/,
					selector: null
				},
				{
					host: m.r.mailru,
					url: "https://my.mail.ru/",
					match: /^my.mail.ru$/,
					selector: "#b-video-wrapper"
				},
				{
					host: m.r.bitchute,
					url: "https://www.bitchute.com/video/",
					match: /^(www.)?bitchute.com$/,
					selector: ".video-js"
				},
				{
					host: m.r.eporner,
					url: "https://www.eporner.com/",
					match: /^(www.)?eporner.com$/,
					selector: ".vjs-v7"
				},
				{
					host: m.r.peertube,
					url: "stub",
					match: h.fV,
					selector: ".vjs-v7"
				},
				{
					host: m.r.dailymotion,
					url: "https://dai.ly/",
					match: /^geo([\d]+)?.dailymotion.com$/,
					selector: ".player"
				},
				{
					host: m.r.trovo,
					url: "https://trovo.live/s/",
					match: /^trovo.live$/,
					selector: ".player-video"
				},
				{
					host: m.r.yandexdisk,
					url: "https://yadi.sk/",
					match: /^disk.yandex.(ru|kz|com(\.(am|ge|tr))?|by|az|co\.il|ee|lt|lv|md|net|tj|tm|uz)$/,
					selector: ".video-player__player > div:nth-child(1)",
					eventSelector: ".video-player__player",
					needBypassCSP: !0,
					needExtraData: !0
				},
				{
					host: m.r.okru,
					url: "https://ok.ru/video/",
					match: /^ok.ru$/,
					selector: "vk-video-player",
					shadowRoot: !0
				},
				{
					host: m.r.googledrive,
					url: "https://drive.google.com/file/d/",
					match: /^youtube.googleapis.com$/,
					selector: ".html5-video-container"
				},
				{
					host: m.r.bannedvideo,
					url: "https://madmaxworld.tv/watch?id=",
					match: /^(www.)?banned.video|madmaxworld.tv$/,
					selector: ".vjs-v7",
					needExtraData: !0
				},
				{
					host: m.r.weverse,
					url: "https://weverse.io/",
					match: /^weverse.io$/,
					selector: ".webplayer-internal-source-wrapper",
					needExtraData: !0
				},
				{
					host: m.r.newgrounds,
					url: "https://www.newgrounds.com/",
					match: /^(www.)?newgrounds.com$/,
					selector: ".ng-video-player"
				},
				{
					host: m.r.egghead,
					url: "https://egghead.io/",
					match: /^egghead.io$/,
					selector: ".cueplayer-react-video-holder"
				},
				{
					host: m.r.youku,
					url: "https://v.youku.com/",
					match: /^v.youku.com$/,
					selector: "#ykPlayer"
				},
				{
					host: m.r.archive,
					url: "https://archive.org/details/",
					match: /^archive.org$/,
					selector: ".jw-media"
				},
				{
					host: m.r.kodik,
					url: "stub",
					match: /^kodik.(info|biz|cc)$/,
					selector: ".fp-player",
					needExtraData: !0
				},
				{
					host: m.r.patreon,
					url: "stub",
					match: /^(www.)?patreon.com$/,
					selector: "div[data-tag=\"post-card\"] div[elevation=\"subtle\"] > div > div > div > div",
					needExtraData: !0
				},
				{
					additionalData: "old",
					host: m.r.reddit,
					url: "stub",
					match: /^old.reddit.com$/,
					selector: ".reddit-video-player-root",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: m.r.reddit,
					url: "stub",
					match: /^(www.|new.)?reddit.com$/,
					selector: "div[slot=post-media-container]",
					shadowRoot: !0,
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: m.r.kick,
					url: "https://kick.com/",
					match: /^kick.com$/,
					selector: "#injected-embedded-channel-player-video > div",
					needExtraData: !0
				},
				{
					host: m.r.appledeveloper,
					url: "https://developer.apple.com/",
					match: /^developer.apple.com$/,
					selector: ".developer-video-player",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: m.r.epicgames,
					url: "https://dev.epicgames.com/community/learning/",
					match: /^dev.epicgames.com$/,
					selector: ".vjs-v7",
					needExtraData: !0
				},
				{
					host: m.r.odysee,
					url: "stub",
					match: /^odysee.com$/,
					selector: ".vjs-v7",
					needExtraData: !0
				},
				{
					host: m.r.coursehunterLike,
					url: "stub",
					match: h.r,
					selector: "#oframeplayer > pjsdiv:has(video)",
					needExtraData: !0
				},
				{
					host: m.r.sap,
					url: "https://learning.sap.com/courses/",
					match: /^learning.sap.com$/,
					selector: ".playkit-container",
					eventSelector: ".playkit-player",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: g.Q.udemy,
					url: "https://www.udemy.com/",
					match: /udemy.com$/,
					selector: "div[data-purpose=\"curriculum-item-viewer-content\"] > section > div > div > div > div:nth-of-type(2)",
					needExtraData: !0
				},
				{
					host: g.Q.coursera,
					url: "https://www.coursera.org/",
					match: /coursera.org$/,
					selector: ".vjs-v8",
					needExtraData: !0
				},
				{
					host: m.r.watchpornto,
					url: "https://watchporn.to/",
					match: /^watchporn.to$/,
					selector: ".fp-player"
				},
				{
					host: m.r.linkedin,
					url: "https://www.linkedin.com/learning/",
					match: /^(www.)?linkedin.com$/,
					selector: ".vjs-v7",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: m.r.incestflix,
					url: "https://www.incestflix.net/watch/",
					match: /^(www.)?incestflix.(net|to|com)$/,
					selector: "#incflix-stream",
					needExtraData: !0
				},
				{
					host: m.r.porntn,
					url: "https://porntn.com/videos/",
					match: /^porntn.com$/,
					selector: ".fp-player",
					needExtraData: !0
				},
				{
					host: m.r.dzen,
					url: "https://dzen.ru/video/watch/",
					match: /^dzen.ru$/,
					selector: ".zen-ui-video-video-player"
				},
				{
					host: m.r.cloudflarestream,
					url: "stub",
					match: /^(watch|embed|iframe|customer-[^.]+).cloudflarestream.com$/,
					selector: null
				},
				{
					host: m.r.loom,
					url: "https://www.loom.com/share/",
					match: /^(www.)?loom.com$/,
					selector: ".VideoLayersContainer",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: g.Q.artstation,
					url: "https://www.artstation.com/learning/",
					match: /^(www.)?artstation.com$/,
					selector: ".vjs-v7",
					needExtraData: !0
				},
				{
					host: m.r.rtnews,
					url: "https://www.rt.com/",
					match: /^(www.)?rt.com$/,
					selector: ".jw-media",
					needExtraData: !0
				},
				{
					host: m.r.bitview,
					url: "https://www.bitview.net/watch?v=",
					match: /^(www.)?bitview.net$/,
					selector: ".vlScreen",
					needExtraData: !0
				},
				{
					host: g.Q.kickstarter,
					url: "https://www.kickstarter.com/",
					match: /^(www.)?kickstarter.com/,
					selector: ".ksr-video-player",
					needExtraData: !0
				},
				{
					host: m.r.thisvid,
					url: "https://thisvid.com/",
					match: /^(www.)?thisvid.com$/,
					selector: ".fp-player"
				},
				{
					additionalData: "regional",
					host: m.r.ign,
					url: "https://de.ign.com/",
					match: /^(\w{2}.)?ign.com$/,
					needExtraData: !0,
					selector: ".video-container"
				},
				{
					host: m.r.ign,
					url: "https://www.ign.com/",
					match: /^(www.)?ign.com$/,
					selector: ".player",
					needExtraData: !0
				},
				{
					host: m.r.bunkr,
					url: "https://bunkr.site/",
					match: /^bunkr\.(site|black|cat|media|red|site|ws|org|s[kiu]|c[ir]|fi|p[hks]|ru|la|is|to|a[cx])$/,
					needExtraData: !0,
					selector: ".plyr__video-wrapper"
				},
				{
					host: m.r.imdb,
					url: "https://www.imdb.com/video/",
					match: /^(www\.)?imdb\.com$/,
					selector: ".jw-media"
				},
				{
					host: m.r.telegram,
					url: "https://t.me/",
					match: (d) => /^web\.telegram\.org$/.test(d.hostname) && d.pathname.startsWith("/k"),
					selector: ".ckin__player"
				},
				{
					host: g.Q.oraclelearn,
					url: "https://mylearn.oracle.com/ou/course/",
					match: /^mylearn\.oracle\.com/,
					selector: ".vjs-v7",
					needExtraData: !0,
					needBypassCSP: !0
				},
				{
					host: g.Q.deeplearningai,
					url: "https://learn.deeplearning.ai/courses/",
					match: /^learn(-dev|-staging)?\.deeplearning\.ai/,
					selector: ".lesson-video-player",
					needExtraData: !0
				},
				{
					host: g.Q.netacad,
					url: "https://www.netacad.com/",
					match: /^(www\.)?netacad\.com/,
					selector: ".vjs-v8",
					needExtraData: !0
				},
				{
					host: m.r.custom,
					url: "stub",
					match: (d) => /([^.]+)\.(mp4|webm)/.test(d.pathname),
					rawResult: !0
				}
			];
		},
		"./node_modules/@vot.js/ext/dist/helpers/base.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				a: () => VideoHelperError,
				q: () => BaseHelper
			});
			var m = p("./node_modules/@vot.js/shared/dist/utils/utils.js");
			class VideoHelperError extends Error {
				constructor(d) {
					super(d), this.name = "VideoHelper", this.message = d;
				}
			}
			class BaseHelper {
				API_ORIGIN = window.location.origin;
				fetch;
				extraInfo;
				referer;
				origin;
				service;
				video;
				language;
				constructor({ fetchFn: d = m.u9, extraInfo: f = !0, referer: p = document.referrer ?? `${window.location.origin}/`, origin: h = window.location.origin, service: g, video: _, language: v = "en" } = {}) {
					this.fetch = d, this.extraInfo = f, this.referer = p, this.origin = /^(http(s)?):\/\//.test(String(h)) ? h : window.location.origin, this.service = g, this.video = _, this.language = v;
				}
				async getVideoData(d) {}
				async getVideoId(d) {}
				returnBaseData(d) {
					if (this.service) return {
						url: this.service.url + d,
						videoId: d,
						host: this.service.host,
						duration: void 0
					};
				}
			}
		},
		"./node_modules/@vot.js/ext/dist/helpers/index.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				JW: () => D,
				Ay: () => VideoHelper
			});
			var m = p("./node_modules/@vot.js/core/dist/types/service.js"), h = p("./node_modules/@vot.js/ext/dist/types/service.js"), g = p("./node_modules/@vot.js/ext/dist/helpers/base.js"), _ = p("./node_modules/@vot.js/shared/dist/utils/logger.js");
			class AppleDeveloperHelper extends g.q {
				API_ORIGIN = "https://developer.apple.com";
				async getVideoData(d) {
					try {
						let d = document.querySelector("meta[property='og:video']")?.content;
						if (!d) throw new g.a("Failed to find content url");
						return { url: d };
					} catch (f) {
						_.A.error(`Failed to get apple developer video data by video ID: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return /videos\/play\/([^/]+)\/([\d]+)/.exec(d.pathname)?.[0];
				}
			}
			class ArchiveHelper extends g.q {
				async getVideoId(d) {
					return /(details|embed)\/([^/]+)/.exec(d.pathname)?.[2];
				}
			}
			var v = p("./node_modules/@vot.js/shared/dist/utils/utils.js");
			class ArtstationHelper extends g.q {
				API_ORIGIN = "https://www.artstation.com/api/v2/learning";
				getCSRFToken() {
					return document.querySelector("meta[name=\"public-csrf-token\"]")?.content;
				}
				async getCourseInfo(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/courses/${d}/autoplay.json`, {
							method: "POST",
							headers: { "PUBLIC-CSRF-TOKEN": this.getCSRFToken() }
						});
						return await f.json();
					} catch (f) {
						return _.A.error(`Failed to get artstation course info by courseId: ${d}.`, f.message), !1;
					}
				}
				async getVideoUrl(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/quicksilver/video_url.json?chapter_id=${d}`), p = await f.json();
						return p.url.replace("qsep://", "https://");
					} catch (f) {
						return _.A.error(`Failed to get artstation video url by chapterId: ${d}.`, f.message), !1;
					}
				}
				async getVideoData(d) {
					let [, f, , , p] = d.split("/"), m = await this.getCourseInfo(f);
					if (!m) return;
					let h = m.chapters.find((d) => d.hash_id === p);
					if (!h) return;
					let g = await this.getVideoUrl(h.id);
					if (!g) return;
					let { title: _, duration: b, subtitles: x } = h, C = x.filter((d) => d.format === "vtt").map((d) => ({
						language: (0, v.ec)(d.locale),
						source: "artstation",
						format: "vtt",
						url: d.file_url
					}));
					return {
						url: g,
						title: _,
						duration: b,
						subtitles: C
					};
				}
				async getVideoId(d) {
					return /courses\/(\w{3,5})\/([^/]+)\/chapters\/(\w{3,5})/.exec(d.pathname)?.[0];
				}
			}
			class BannedVideoHelper extends g.q {
				API_ORIGIN = "https://api.banned.video";
				async getVideoInfo(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/graphql`, {
							method: "POST",
							body: JSON.stringify({
								operationName: "GetVideo",
								query: "query GetVideo($id: String!) {\n            getVideo(id: $id) {\n              title\n              description: summary\n              duration: videoDuration\n              videoUrl: directUrl\n              isStream: live\n            }\n          }",
								variables: { id: d }
							}),
							headers: {
								"User-Agent": "bannedVideoFrontEnd",
								"apollographql-client-name": "banned-web",
								"apollographql-client-version": "1.3",
								"content-type": "application/json"
							}
						});
						return await f.json();
					} catch (f) {
						return console.error(`Failed to get bannedvideo video info by videoId: ${d}.`, f.message), !1;
					}
				}
				async getVideoData(d) {
					let f = await this.getVideoInfo(d);
					if (!f) return;
					let { videoUrl: p, duration: m, isStream: h, description: g, title: _ } = f.data.getVideo;
					return {
						url: p,
						duration: m,
						isStream: h,
						title: _,
						description: g
					};
				}
				async getVideoId(d) {
					return d.searchParams.get("id") ?? void 0;
				}
			}
			class BilibiliHelper extends g.q {
				async getVideoId(d) {
					let f = /bangumi\/play\/([^/]+)/.exec(d.pathname)?.[0];
					if (f) return f;
					let p = d.searchParams.get("bvid");
					if (p) return `video/${p}`;
					let m = /video\/([^/]+)/.exec(d.pathname)?.[0];
					return m && d.searchParams.get("p") !== null && (m += `/?p=${d.searchParams.get("p")}`), m;
				}
			}
			class BitchuteHelper extends g.q {
				async getVideoId(d) {
					return /(video|embed)\/([^/]+)/.exec(d.pathname)?.[2];
				}
			}
			class BitviewHelper extends g.q {
				async getVideoData(d) {
					try {
						let d = document.querySelector(".vlScreen > video")?.src;
						if (!d) throw new g.a("Failed to find video URL");
						return { url: d };
					} catch (f) {
						_.A.error(`Failed to get Bitview data by videoId: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return d.searchParams.get("v");
				}
			}
			class BunkrHelper extends g.q {
				async getVideoData(d) {
					let f = document.querySelector("#player > source[type=\"video/mp4\"]")?.src;
					if (f) return { url: f };
				}
				async getVideoId(d) {
					return /\/f\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class CloudflareStreamHelper extends g.q {
				async getVideoId(d) {
					return d.pathname + d.search;
				}
			}
			class CoursehunterLikeHelper extends g.q {
				API_ORIGIN = this.origin ?? "https://coursehunter.net";
				async getCourseId() {
					let d = window.course_id;
					return d === void 0 ? document.querySelector("input[name=\"course_id\"]")?.value : String(d);
				}
				async getLessonsData(d) {
					let f = window.lessons;
					if (f?.length) return f;
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/api/v1/course/${d}/lessons`);
						return await f.json();
					} catch (f) {
						_.A.error(`Failed to get CoursehunterLike lessons data by courseId: ${d}, because ${f.message}`);
						return;
					}
				}
				getLessondId(d) {
					let f = d.split("?lesson=")?.[1];
					if (f) return +f;
					let p = document.querySelector(".lessons-item_active");
					return f = p?.dataset?.index, f ? +f : 1;
				}
				async getVideoData(d) {
					let f = await this.getCourseId();
					if (!f) return;
					let p = await this.getLessonsData(f);
					if (!p) return;
					let m = this.getLessondId(d), h = p?.[m - 1], { file: g, duration: _, title: b } = h;
					if (g) return {
						url: (0, v.fl)(g),
						duration: _,
						title: b
					};
				}
				async getVideoId(d) {
					let f = /course\/([^/]+)/.exec(d.pathname)?.[0];
					return f ? f + d.search : void 0;
				}
			}
			class VideoJSHelper extends g.q {
				SUBTITLE_SOURCE = "videojs";
				SUBTITLE_FORMAT = "vtt";
				static getPlayer() {
					return document.querySelector(".video-js")?.player;
				}
				getVideoDataByPlayer(d) {
					try {
						let f = VideoJSHelper.getPlayer();
						if (!f) throw Error(`Video player doesn't have player option, videoId ${d}`);
						let p = f.duration(), m = Array.isArray(f.currentSources) ? f.currentSources : f.getCache()?.sources, { tracks_: h } = f.textTracks(), g = m.find((d) => d.type === "video/mp4" || d.type === "video/webm");
						if (!g) throw Error(`Failed to find video url for videoID ${d}`);
						let _ = h.filter((d) => d.src && d.kind !== "metadata").map((d) => ({
							language: (0, v.ec)(d.language),
							source: this.SUBTITLE_SOURCE,
							format: this.SUBTITLE_FORMAT,
							url: d.src
						}));
						return {
							url: g.src,
							duration: p,
							subtitles: _
						};
					} catch (d) {
						_.A.error("Failed to get videojs video data", d.message);
						return;
					}
				}
			}
			var b = p("./node_modules/@vot.js/shared/dist/data/consts.js");
			class CourseraHelper extends VideoJSHelper {
				API_ORIGIN = "https://www.coursera.org/api";
				SUBTITLE_SOURCE = "coursera";
				async getCourseData(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/onDemandCourses.v1/${d}`), p = await f.json();
						return p?.elements?.[0];
					} catch (f) {
						_.A.error(`Failed to get course data by courseId: ${d}`, f.message);
						return;
					}
				}
				static getPlayer() {
					return VideoJSHelper.getPlayer();
				}
				async getVideoData(d) {
					let f = this.getVideoDataByPlayer(d);
					if (!f) return;
					let { options_: p } = CourseraHelper.getPlayer() ?? {};
					!f.subtitles?.length && p && (f.subtitles = p.tracks.map((d) => ({
						url: d.src,
						language: (0, v.ec)(d.srclang),
						source: this.SUBTITLE_SOURCE,
						format: this.SUBTITLE_FORMAT
					})));
					let m = p?.courseId;
					if (!m) return f;
					let h = "en", g = await this.getCourseData(m);
					if (g) {
						let { primaryLanguageCodes: [d] } = g;
						h = d ? (0, v.ec)(d) : "en";
					}
					b.xm.includes(h) || (h = "en");
					let x = f.subtitles.find((d) => d.language === h) ?? f.subtitles?.[0], C = x?.url;
					C || _.A.warn("Failed to find any subtitle file");
					let { url: w, duration: T } = f, E = C ? [{
						target: "subtitles_file_url",
						targetUrl: C
					}, {
						target: "video_file_url",
						targetUrl: w
					}] : null;
					return {
						...C ? {
							url: this.service?.url + d,
							translationHelp: E
						} : {
							url: w,
							translationHelp: E
						},
						detectedLanguage: h,
						duration: T
					};
				}
				async getVideoId(d) {
					let f = /learn\/([^/]+)\/lecture\/([^/]+)/.exec(d.pathname) ?? /lecture\/([^/]+)\/([^/]+)/.exec(d.pathname);
					return f?.[0];
				}
			}
			class DailymotionHelper extends g.q {
				async getVideoId(d) {
					let f = Array.from(document.querySelectorAll("*")).filter((d) => d.innerHTML.trim().includes(".m3u8")), p = f?.[1]?.lastChild?.src;
					return p ? /\/video\/(\w+)\.m3u8/.exec(p)?.[1] : void 0;
				}
			}
			class DeeplearningAIHelper extends g.q {
				async getVideoData(d) {
					if (!this.video) return;
					let f = this.video.querySelector("source[type=\"application/x-mpegurl\"]")?.src;
					if (f) return { url: f };
				}
				async getVideoId(d) {
					return /courses\/(([^/]+)\/lesson\/([^/]+)\/([^/]+))/.exec(d.pathname)?.[1];
				}
			}
			class DouyinHelper extends g.q {
				static getPlayer() {
					if (!(typeof player > "u")) return player;
				}
				async getVideoData(d) {
					let f = DouyinHelper.getPlayer();
					if (!f) return;
					let { config: { url: p, duration: m, lang: h, isLive: g } } = f;
					if (!p) return;
					let _ = p.find((d) => d.src.includes("www.douyin.com/aweme/v1/play/"));
					if (_) return {
						url: (0, v.fl)(_.src),
						duration: m,
						isStream: g,
						...b.xm.includes(h) ? { detectedLanguage: h } : {}
					};
				}
				async getVideoId(d) {
					let f = /video\/([\d]+)/.exec(d.pathname)?.[0];
					return f || DouyinHelper.getPlayer()?.config.vid;
				}
			}
			class DzenHelper extends g.q {
				async getVideoId(d) {
					return /video\/watch\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class EggheadHelper extends g.q {
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			class EpicGamesHelper extends g.q {
				API_ORIGIN = "https://dev.epicgames.com/community/api/learning";
				async getPostInfo(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/post.json?hash_id=${d}`);
						return await f.json();
					} catch (f) {
						return _.A.error(`Failed to get epicgames post info by videoId: ${d}.`, f.message), !1;
					}
				}
				getVideoBlock() {
					let d = /videoUrl\s?=\s"([^"]+)"?/, f = Array.from(document.body.querySelectorAll("script")).find((f) => d.exec(f.innerHTML));
					if (!f) return;
					let p = f.innerHTML.trim(), m = d.exec(p)?.[1]?.replace("qsep://", "https://");
					if (!m) return;
					let h = /sources\s?=\s(\[([^\]]+)\])?/.exec(p)?.[1];
					if (!h) return {
						playlistUrl: m,
						subtitles: []
					};
					try {
						h = (h.replace(/src:(\s)+?(videoUrl)/g, "src:\"removed\"").substring(0, h.lastIndexOf("},")) + "]").split("\n").map((d) => d.replace(/([^\s]+):\s?(?!.*\1)/, "\"$1\":")).join("\n");
						let d = JSON.parse(h), f = d.filter((d) => d.type === "captions");
						return {
							playlistUrl: m,
							subtitles: f
						};
					} catch {
						return {
							playlistUrl: m,
							subtitles: []
						};
					}
				}
				async getVideoData(d) {
					let f = d.split(":")?.[1], p = await this.getPostInfo(f);
					if (!p) return;
					let m = this.getVideoBlock();
					if (!m) return;
					let { playlistUrl: h, subtitles: g } = m, { title: _, description: b } = p, x = g.map((d) => ({
						language: (0, v.ec)(d.srclang),
						source: "epicgames",
						format: "vtt",
						url: d.src
					}));
					return {
						url: h,
						title: _,
						description: b,
						subtitles: x
					};
				}
				async getVideoId(d) {
					return new Promise((d) => {
						let f = "https://dev.epicgames.com", p = btoa(window.location.href);
						window.addEventListener("message", (p) => {
							if (p.origin !== f || !(typeof p.data == "string" && p.data.startsWith("getVideoId:"))) return;
							let m = p.data.replace("getVideoId:", "");
							return d(m);
						}), window.top.postMessage(`getVideoId:${p}`, f);
					});
				}
			}
			class EpornerHelper extends g.q {
				async getVideoId(d) {
					return /video-([^/]+)\/([^/]+)/.exec(d.pathname)?.[0];
				}
			}
			class FacebookHelper extends g.q {
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			class GoogleDriveHelper extends g.q {
				getPlayerData() {
					let d = document.querySelector("#movie_player");
					return d?.getVideoData?.call() ?? void 0;
				}
				async getVideoId(d) {
					return this.getPlayerData()?.video_id;
				}
			}
			var x = p("./node_modules/@vot.js/core/dist/utils/videoData.js");
			class IgnHelper extends g.q {
				getVideoDataBySource(d) {
					let f = document.querySelector(".icms.video > source[type=\"video/mp4\"][data-quality=\"360\"]")?.src;
					return f ? { url: (0, v.fl)(f) } : this.returnBaseData(d);
				}
				getVideoDataByNext(d) {
					try {
						let d = document.getElementById("__NEXT_DATA__")?.textContent;
						if (!d) throw new x.A("Not found __NEXT_DATA__ content");
						let f = JSON.parse(d), { props: { pageProps: { page: { description: p, title: m, video: { videoMetadata: { duration: h }, assets: g } } } } } = f, _ = g.find((d) => d.height === 360 && d.url.includes(".mp4"))?.url;
						if (!_) throw new x.A("Not found video URL in assets");
						return {
							url: (0, v.fl)(_),
							duration: h,
							title: m,
							description: p
						};
					} catch (f) {
						return _.A.warn(`Failed to get ign video data by video ID: ${d}, because ${f.message}. Using clear link instead...`), this.returnBaseData(d);
					}
				}
				async getVideoData(d) {
					return document.getElementById("__NEXT_DATA__") ? this.getVideoDataByNext(d) : this.getVideoDataBySource(d);
				}
				async getVideoId(d) {
					return /([^/]+)\/([\d]+)\/video\/([^/]+)/.exec(d.pathname)?.[0] ?? /\/videos\/([^/]+)/.exec(d.pathname)?.[0];
				}
			}
			class IMDbHelper extends g.q {
				async getVideoId(d) {
					return /video\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class IncestflixHelper extends g.q {
				async getVideoData(d) {
					try {
						let d = document.querySelector("#incflix-stream source:first-of-type");
						if (!d) throw new g.a("Failed to find source element");
						let f = d.getAttribute("src");
						if (!f) throw new g.a("Failed to find source link");
						let p = new URL(f.startsWith("//") ? `https:${f}` : f);
						return p.searchParams.append("media-proxy", "video.mp4"), { url: (0, v.fl)(p) };
					} catch (f) {
						_.A.error(`Failed to get Incestflix data by videoId: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return /\/watch\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class KickHelper extends g.q {
				API_ORIGIN = "https://kick.com/api";
				async getClipInfo(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/v2/clips/${d}`), p = await f.json(), { clip_url: m, duration: h, title: g } = p.clip;
						return {
							url: m,
							duration: h,
							title: g
						};
					} catch (f) {
						_.A.error(`Failed to get kick clip info by clipId: ${d}.`, f.message);
						return;
					}
				}
				async getVideoInfo(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/v1/video/${d}`), p = await f.json(), { source: m, livestream: h } = p, { session_title: g, duration: _ } = h;
						return {
							url: m,
							duration: Math.round(_ / 1e3),
							title: g
						};
					} catch (f) {
						_.A.error(`Failed to get kick video info by videoId: ${d}.`, f.message);
						return;
					}
				}
				async getVideoData(d) {
					return d.startsWith("videos") ? await this.getVideoInfo(d.replace("videos/", "")) : await this.getClipInfo(d.replace("clips/", ""));
				}
				async getVideoId(d) {
					return /([^/]+)\/((videos|clips)\/([^/]+))/.exec(d.pathname)?.[2];
				}
			}
			class KickstarterHelper extends g.q {
				async getVideoData(d) {
					try {
						let d = document.querySelector(".ksr-video-player > video"), f = d?.querySelector("source[type^='video/mp4']")?.src;
						if (!f) throw new g.a("Failed to find video URL");
						let p = d?.querySelectorAll("track") ?? [];
						return {
							url: f,
							subtitles: Array.from(p).reduce((d, f) => {
								let p = f.getAttribute("srclang"), m = f.getAttribute("src");
								return !p || !m || d.push({
									language: (0, v.ec)(p),
									url: m,
									format: "vtt",
									source: "kickstarter"
								}), d;
							}, [])
						};
					} catch (f) {
						_.A.error(`Failed to get Kickstarter data by videoId: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			var C = p("./node_modules/@vot.js/shared/dist/data/config.js");
			class KodikHelper extends g.q {
				API_ORIGIN = window.location.origin;
				getSecureData(d) {
					try {
						let [f, p, m] = d.split("/").filter((d) => d), h = Array.from(document.getElementsByTagName("script")), _ = h.filter((d) => d.innerHTML.includes(`videoId = "${p}"`) || d.innerHTML.includes(`serialId = Number(${p})`));
						if (!_.length) throw new g.a("Failed to find secure script");
						let v = /'{[^']+}'/.exec(_[0].textContent.trim())?.[0];
						if (!v) throw new g.a("Secure json wasn't found in secure script");
						let b = JSON.parse(v.replaceAll("'", ""));
						if (f !== "serial") return {
							videoType: f,
							videoId: p,
							hash: m,
							...b
						};
						let x = h.find((d) => d.innerHTML.includes("var videoInfo = {}"))?.textContent?.trim();
						if (!x) throw new g.a("Failed to find videoInfo content");
						let C = /videoInfo\.type\s+?=\s+?'([^']+)'/.exec(x)?.[1], w = /videoInfo\.id\s+?=\s+?'([^']+)'/.exec(x)?.[1], T = /videoInfo\.hash\s+?=\s+?'([^']+)'/.exec(x)?.[1];
						if (!C || !w || !T) throw new g.a("Failed to parse videoInfo content");
						return {
							videoType: C,
							videoId: w,
							hash: T,
							...b
						};
					} catch (f) {
						return _.A.error(`Failed to get kodik secure data by videoPath: ${d}.`, f.message), !1;
					}
				}
				async getFtor(d) {
					let { videoType: f, videoId: p, hash: m, d: h, d_sign: g, pd: v, pd_sign: b, ref: x, ref_sign: w } = d;
					try {
						let d = await this.fetch(this.API_ORIGIN + "/ftor", {
							method: "POST",
							headers: {
								"User-Agent": C.A.userAgent,
								Origin: this.API_ORIGIN,
								Referer: `${this.API_ORIGIN}/${f}/${p}/${m}/360p`
							},
							body: new URLSearchParams({
								d: h,
								d_sign: g,
								pd: v,
								pd_sign: b,
								ref: decodeURIComponent(x),
								ref_sign: w,
								bad_user: "false",
								cdn_is_working: "true",
								info: "{}",
								type: f,
								hash: m,
								id: p
							})
						});
						return await d.json();
					} catch (d) {
						return _.A.error(`Failed to get kodik video data (type: ${f}, id: ${p}, hash: ${m})`, d.message), !1;
					}
				}
				decryptUrl(d) {
					let f = atob(d.replace(/[a-zA-Z]/g, function(d) {
						let f = d.charCodeAt(0) + 18, p = d <= "Z" ? 90 : 122;
						return String.fromCharCode(p >= f ? f : f - 26);
					}));
					return "https:" + f;
				}
				async getVideoData(d) {
					let f = this.getSecureData(d);
					if (!f) return;
					let p = await this.getFtor(f);
					if (!p) return;
					let m = Object.entries(p.links[p.default.toString()]), h = m.find(([, d]) => d.type === "application/x-mpegURL")?.[1];
					if (h) return { url: h.src.startsWith("//") ? `https:${h.src}` : this.decryptUrl(h.src) };
				}
				async getVideoId(d) {
					return /\/(uv|video|seria|episode|season|serial)\/([^/]+)\/([^/]+)\/([\d]+)p/.exec(d.pathname)?.[0];
				}
			}
			class LinkedinHelper extends VideoJSHelper {
				SUBTITLE_SOURCE = "linkedin";
				async getVideoData(d) {
					let f = this.getVideoDataByPlayer(d);
					if (!f) return;
					let { url: p, duration: m, subtitles: h } = f;
					return {
						url: (0, v.fl)(new URL(p)),
						duration: m,
						subtitles: h
					};
				}
				async getVideoId(d) {
					return /\/learning\/(([^/]+)\/([^/]+))/.exec(d.pathname)?.[1];
				}
			}
			var w = p("./node_modules/@vot.js/shared/dist/index.js");
			class LoomHelper extends g.q {
				getClientVersion() {
					if (!(typeof SENTRY_RELEASE > "u")) return SENTRY_RELEASE.id;
				}
				async getVideoData(d) {
					try {
						let f = this.getClientVersion();
						if (!f) throw new g.a("Failed to get client version");
						let p = await this.fetch("https://www.loom.com/graphql", {
							headers: {
								"User-Agent": w.$W.userAgent,
								"content-type": "application/json",
								"x-loom-request-source": `loom_web_${f}`,
								"apollographql-client-name": "web",
								"apollographql-client-version": f,
								"Alt-Used": "www.loom.com"
							},
							body: `{"operationName":"FetchCaptions","variables":{"videoId":"${d}"},"query":"query FetchCaptions($videoId: ID!, $password: String) {\\n  fetchVideoTranscript(videoId: $videoId, password: $password) {\\n    ... on VideoTranscriptDetails {\\n      id\\n      captions_source_url\\n      language\\n      __typename\\n    }\\n    ... on GenericError {\\n      message\\n      __typename\\n    }\\n    __typename\\n  }\\n}"}`,
							method: "POST"
						});
						if (p.status !== 200) throw new g.a("Failed to get data from graphql");
						let m = await p.json(), h = m.data.fetchVideoTranscript;
						if (h.__typename === "GenericError") throw new g.a(h.message);
						return {
							url: this.service.url + d,
							subtitles: [{
								format: "vtt",
								language: (0, v.ec)(h.language),
								source: "loom",
								url: h.captions_source_url
							}]
						};
					} catch (f) {
						return _.A.error(`Failed to get Loom video data, because: ${f.message}`), this.returnBaseData(d);
					}
				}
				async getVideoId(d) {
					return /(embed|share)\/([^/]+)?/.exec(d.pathname)?.[2];
				}
			}
			class MailRuHelper extends g.q {
				API_ORIGIN = "https://my.mail.ru";
				async getVideoMeta(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/+/video/meta/${d}?xemail=&ajax_call=1&func_name=&mna=&mnb=&ext=1&_=${new Date().getTime()}`);
						return await f.json();
					} catch (d) {
						_.A.error("Failed to get mail.ru video data", d.message);
						return;
					}
				}
				async getVideoId(d) {
					let f = d.pathname;
					if (/\/(v|mail|bk|inbox)\//.exec(f)) return f.slice(1);
					let p = /video\/embed\/([^/]+)/.exec(f)?.[1];
					if (!p) return;
					let m = await this.getVideoMeta(p);
					if (m) return m.meta.url.replace("//my.mail.ru/", "");
				}
			}
			class NetacadHelper extends VideoJSHelper {
				SUBTITLE_SOURCE = "netacad";
				async getVideoData(d) {
					let f = this.getVideoDataByPlayer(d);
					if (!f) return;
					let { url: p, duration: m, subtitles: h } = f;
					return {
						url: (0, v.fl)(new URL(p)),
						duration: m,
						subtitles: h
					};
				}
				async getVideoId(d) {
					return d.pathname + d.search;
				}
			}
			class NewgroundsHelper extends g.q {
				async getVideoId(d) {
					return /([^/]+)\/(view)\/([^/]+)/.exec(d.pathname)?.[0];
				}
			}
			class NineGAGHelper extends g.q {
				async getVideoData(d) {
					let f = this.returnBaseData(d);
					if (!f) return f;
					try {
						if (!this.video) throw Error("Video element not found");
						let d = this.video.querySelector("source[type^=\"video/mp4\"], source[type^=\"video/webm\"]")?.src;
						if (!d || !/^https?:\/\//.test(d)) throw Error("Video source not found");
						return {
							...f,
							translationHelp: [{
								target: "video_file_url",
								targetUrl: d
							}]
						};
					} catch {
						return f;
					}
				}
				async getVideoId(d) {
					return /gag\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class OdyseeHelper extends g.q {
				API_ORIGIN = "https://odysee.com";
				async getVideoData(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/${d}`), p = await f.text(), m = /"contentUrl":(\s)?"([^"]+)"/.exec(p)?.[2];
						if (!m) throw new g.a("Odysee url doesn't parsed");
						return { url: m };
					} catch (f) {
						_.A.error(`Failed to get odysee video data by video ID: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			class OKRuHelper extends g.q {
				async getVideoId(d) {
					return /\/video\/(\d+)/.exec(d.pathname)?.[1];
				}
			}
			class OracleLearnHelper extends VideoJSHelper {
				SUBTITLE_SOURCE = "oraclelearn";
				async getVideoData(d) {
					let f = this.getVideoDataByPlayer(d);
					if (!f) return;
					let { url: p, duration: m, subtitles: h } = f, g = this.returnBaseData(d), _ = (0, v.fl)(new URL(p));
					return g ? {
						url: g.url,
						duration: m,
						subtitles: h,
						translationHelp: [{
							target: "video_file_url",
							targetUrl: _
						}]
					} : {
						url: _,
						duration: m,
						subtitles: h
					};
				}
				async getVideoId(d) {
					return /\/ou\/course\/(([^/]+)\/(\d+)\/(\d+))/.exec(d.pathname)?.[1];
				}
			}
			class PatreonHelper extends g.q {
				API_ORIGIN = "https://www.patreon.com/api";
				async getPosts(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/posts/${d}?json-api-use-default-includes=false`);
						return await f.json();
					} catch (f) {
						return _.A.error(`Failed to get patreon posts by postId: ${d}.`, f.message), !1;
					}
				}
				async getVideoData(d) {
					let f = await this.getPosts(d);
					if (!f) return;
					let p = f.data.attributes.post_file.url;
					if (p) return { url: p };
				}
				async getVideoId(d) {
					let f = /posts\/([^/]+)/.exec(d.pathname)?.[1];
					if (f) return f.replace(/[^\d.]/g, "");
				}
			}
			class PeertubeHelper extends g.q {
				async getVideoId(d) {
					return /\/w\/([^/]+)/.exec(d.pathname)?.[0];
				}
			}
			class PornhubHelper extends g.q {
				async getVideoId(d) {
					return d.searchParams.get("viewkey") ?? /embed\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class PornTNHelper extends g.q {
				async getVideoData(d) {
					try {
						if (typeof flashvars > "u") return;
						let { rnd: d, video_url: f, video_title: p } = flashvars;
						if (!f || !d) throw new g.a("Failed to find video source or rnd");
						let m = new URL(f);
						m.searchParams.append("rnd", d), _.A.log("PornTN get_file link", m.href);
						let h = await this.fetch(m.href, { method: "head" }), b = new URL(h.url);
						_.A.log("PornTN cdn link", b.href);
						let x = (0, v.fl)(b);
						return {
							url: x,
							title: p
						};
					} catch (f) {
						_.A.error(`Failed to get PornTN data by videoId: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return /\/videos\/(([^/]+)\/([^/]+))/.exec(d.pathname)?.[1];
				}
			}
			class RedditHelper extends g.q {
				API_ORIGIN = "https://www.reddit.com";
				async getContentUrl(d) {
					if (this.service?.additionalData !== "old") return document.querySelector("shreddit-player-2")?.src;
					let f = document.querySelector("[data-hls-url]");
					return f?.dataset.hlsUrl?.replaceAll("&amp;", "&");
				}
				async getVideoData(d) {
					try {
						let f = await this.getContentUrl(d);
						if (!f) throw new g.a("Failed to find content url");
						return { url: decodeURIComponent(f) };
					} catch (f) {
						_.A.error(`Failed to get reddit video data by video ID: ${d}`, f.message);
						return;
					}
				}
				async getVideoId(d) {
					return /\/r\/(([^/]+)\/([^/]+)\/([^/]+)\/([^/]+))/.exec(d.pathname)?.[1];
				}
			}
			class RtNewsHelper extends g.q {
				async getVideoData(d) {
					let f = document.querySelector(".jw-video, .media__video_noscript");
					if (!f) return;
					let p = f.getAttribute("src");
					if (p) return p.endsWith(".MP4") && (p = (0, v.fl)(p)), {
						videoId: d,
						url: p
					};
				}
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			class RumbleHelper extends g.q {
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			class RutubeHelper extends g.q {
				async getVideoId(d) {
					return /(?:video|embed)\/([^/]+)/.exec(d.pathname)?.[1];
				}
			}
			class SapHelper extends g.q {
				API_ORIGIN = "https://learning.sap.com/";
				async requestKaltura(d, f, p) {
					let m = "html5:v3.17.22", h = "3.3.0";
					try {
						let g = await this.fetch(`https://${d}/api_v3/service/multirequest`, {
							method: "POST",
							body: JSON.stringify({
								1: {
									service: "session",
									action: "startWidgetSession",
									widgetId: `_${f}`
								},
								2: {
									service: "baseEntry",
									action: "list",
									ks: "{1:result:ks}",
									filter: { redirectFromEntryId: p },
									responseProfile: {
										type: 1,
										fields: "id,referenceId,name,description,dataUrl,duration,flavorParamsIds,type,dvrStatus,externalSourceType,createdAt,updatedAt,endDate,plays,views,downloadUrl,creatorId"
									}
								},
								3: {
									service: "baseEntry",
									action: "getPlaybackContext",
									entryId: "{2:result:objects:0:id}",
									ks: "{1:result:ks}",
									contextDataParams: {
										objectType: "KalturaContextDataParams",
										flavorTags: "all"
									}
								},
								apiVersion: h,
								format: 1,
								ks: "",
								clientTag: m,
								partnerId: f
							}),
							headers: { "Content-Type": "application/json" }
						});
						return await g.json();
					} catch (d) {
						_.A.error("Failed to request kaltura data", d.message);
						return;
					}
				}
				async getKalturaData(d) {
					try {
						let f = document.querySelector("script[data-nscript=\"beforeInteractive\"]");
						if (!f) throw new g.a("Failed to find script element");
						let p = /https:\/\/([^"]+)\/p\/([^"]+)\/embedPlaykitJs\/uiconf_id\/([^"]+)/.exec(f?.src);
						if (!p) throw new g.a(`Failed to get sap data for videoId: ${d}`);
						let [, m, h] = p, _ = document.querySelector("#shadow")?.firstChild?.getAttribute("id");
						if (!_) {
							let d = document.querySelector("#__NEXT_DATA__");
							if (!d) throw new g.a("Failed to find next data element");
							_ = /"sourceId":\s?"([^"]+)"/.exec(d.innerText)?.[1];
						}
						if (!m || Number.isNaN(+h) || !_) throw new g.a(`One of the necessary parameters for getting a link to a sap video in wasn't found for ${d}. Params: kalturaDomain = ${m}, partnerId = ${h}, entryId = ${_}`);
						return await this.requestKaltura(m, h, _);
					} catch (d) {
						_.A.error("Failed to get kaltura data", d.message);
						return;
					}
				}
				async getVideoData(d) {
					let f = await this.getKalturaData(d);
					if (!f) return;
					let [, p, m] = f, { duration: h } = p.objects[0], g = m.sources.find((d) => d.format === "url" && d.protocols === "http,https" && d.url.includes(".mp4"))?.url;
					if (!g) return;
					let _ = m.playbackCaptions.map((d) => ({
						language: (0, v.ec)(d.languageCode),
						source: "sap",
						format: "vtt",
						url: d.webVttUrl,
						isAutoGenerated: d.label.includes("auto-generated")
					}));
					return {
						url: g,
						subtitles: _,
						duration: h
					};
				}
				async getVideoId(d) {
					return /((courses|learning-journeys)\/([^/]+)(\/[^/]+)?)/.exec(d.pathname)?.[1];
				}
			}
			class TelegramHelper extends g.q {
				static getMediaViewer() {
					if (!(typeof appMediaViewer > "u")) return appMediaViewer;
				}
				async getVideoId(d) {
					let f = TelegramHelper.getMediaViewer();
					if (!f || f.live) return;
					let p = f.target.message;
					if (p.peer_id._ !== "peerChannel") return;
					let m = p.media;
					if (m._ !== "messageMediaDocument" || m.document.type !== "video") return;
					let h = p.mid & 4294967295, g = await f.managers.appPeersManager.getPeerUsername(p.peerId);
					return `${g}/${h}`;
				}
			}
			class ThisVidHelper extends g.q {
				async getVideoId(d) {
					return /(videos|embed)\/[^/]+/.exec(d.pathname)?.[0];
				}
			}
			class TikTokHelper extends g.q {
				async getVideoId(d) {
					return /([^/]+)\/video\/([^/]+)/.exec(d.pathname)?.[0];
				}
			}
			class TrovoHelper extends g.q {
				async getVideoId(d) {
					let f = d.searchParams.get("vid"), p = /([^/]+)\/([\d]+)/.exec(d.pathname)?.[0];
					if (!(!f || !p)) return `${p}?vid=${f}`;
				}
			}
			class TwitchHelper extends g.q {
				API_ORIGIN = "https://clips.twitch.tv";
				async getClipLink(d, f) {
					let p = document.querySelector("script[type='application/ld+json']"), m = d.slice(1);
					if (p) {
						let d = JSON.parse(p.innerText), f = d["@graph"].find((d) => d["@type"] === "VideoObject")?.creator.url;
						if (!f) throw new g.a("Failed to find channel link");
						let h = f.replace("https://www.twitch.tv/", "");
						return `${h}/clip/${m}`;
					}
					let h = m === "embed", _ = document.querySelector(h ? ".tw-link[data-test-selector='stream-info-card-component__stream-avatar-link']" : ".clips-player a:not([class])");
					if (!_) return;
					let v = _.href.replace("https://www.twitch.tv/", "");
					return `${v}/clip/${h ? f : m}`;
				}
				async getVideoData(d) {
					let f = document.querySelector("[data-a-target=\"stream-title\"], [data-test-selector=\"stream-info-card-component__subtitle\"]")?.innerText, p = !!document.querySelector("[data-a-target=\"animated-channel-viewers-count\"], .channel-status-info--live, .top-bar--pointer-enabled .tw-channel-status-text-indicator");
					return {
						url: this.service.url + d,
						isStream: p,
						title: f
					};
				}
				async getVideoId(d) {
					let f = d.pathname;
					if (/^m\.twitch\.tv$/.test(f)) return /videos\/([^/]+)/.exec(d.href)?.[0] ?? f.slice(1);
					if (/^player\.twitch\.tv$/.test(d.hostname)) return `videos/${d.searchParams.get("video")}`;
					let p = /([^/]+)\/(?:clip)\/([^/]+)/.exec(f);
					if (p) return p[0];
					let m = /^clips\.twitch\.tv$/.test(d.hostname);
					if (m) return await this.getClipLink(f, d.searchParams.get("clip"));
					let h = /(?:videos)\/([^/]+)/.exec(f);
					if (h) return h[0];
					let g = document.querySelector(".home-offline-hero .tw-link");
					if (g?.href) {
						let d = new URL(g.href);
						return /(?:videos)\/([^/]+)/.exec(d.pathname)?.[0];
					}
					return document.querySelector(".persistent-player") ? f : void 0;
				}
			}
			class TwitterHelper extends g.q {
				async getVideoId(d) {
					let f = /status\/([^/]+)/.exec(d.pathname)?.[1];
					if (f) return f;
					let p = this.video?.closest("[data-testid=\"tweet\"]"), m = p?.querySelector("a[role=\"link\"][aria-label]")?.href;
					return m ? /status\/([^/]+)/.exec(m)?.[1] : void 0;
				}
			}
			class UdemyHelper extends g.q {
				API_ORIGIN = "https://www.udemy.com/api-2.0";
				getModuleData() {
					let d = document.querySelector(".ud-app-loader[data-module-id='course-taking']"), f = d?.dataset?.moduleArgs;
					if (f) return JSON.parse(f);
				}
				getLectureId() {
					return /learn\/lecture\/([^/]+)/.exec(window.location.pathname)?.[1];
				}
				isErrorData(d) {
					return Object.hasOwn(d, "error");
				}
				async getLectureData(d, f) {
					try {
						let p = await this.fetch(`${this.API_ORIGIN}/users/me/subscribed-courses/${d}/lectures/${f}/?` + new URLSearchParams({
							"fields[lecture]": "title,description,asset",
							"fields[asset]": "length,media_sources,captions"
						}).toString()), m = await p.json();
						if (this.isErrorData(m)) throw new g.a(m.detail ?? "unknown error");
						return m;
					} catch (p) {
						_.A.error(`Failed to get lecture data by courseId: ${d} and lectureId: ${f}`, p.message);
						return;
					}
				}
				async getCourseLang(d) {
					try {
						let f = await this.fetch(`${this.API_ORIGIN}/users/me/subscribed-courses/${d}?` + new URLSearchParams({ "fields[course]": "locale" }).toString()), p = await f.json();
						if (this.isErrorData(p)) throw new g.a(p.detail ?? "unknown error");
						return p;
					} catch (f) {
						_.A.error(`Failed to get course lang by courseId: ${d}`, f.message);
						return;
					}
				}
				findVideoUrl(d) {
					return d?.find((d) => d.type === "video/mp4")?.src;
				}
				findSubtitleUrl(d, f) {
					let p = d?.find((d) => (0, v.ec)(d.locale_id) === f) ?? d?.find((d) => (0, v.ec)(d.locale_id) === "en") ?? d?.[0];
					return p?.url;
				}
				async getVideoData(d) {
					let f = this.getModuleData();
					if (!f) return;
					let { courseId: p } = f, m = this.getLectureId();
					if (_.A.log(`[Udemy] courseId: ${p}, lectureId: ${m}`), !m) return;
					let h = await this.getLectureData(p, m);
					if (!h) return;
					let { title: g, description: x, asset: C } = h, { length: w, media_sources: T, captions: E } = C, D = this.findVideoUrl(T);
					if (!D) {
						_.A.log("Failed to find .mp4 video file in media_sources", T);
						return;
					}
					let O = "en", A = await this.getCourseLang(p);
					if (A) {
						let { locale: { locale: d } } = A;
						O = d ? (0, v.ec)(d) : O;
					}
					b.xm.includes(O) || (O = "en");
					let j = this.findSubtitleUrl(E, O);
					return j || _.A.log("Failed to find subtitle file in captions", E), {
						...j ? {
							url: this.service?.url + d,
							translationHelp: [{
								target: "subtitles_file_url",
								targetUrl: j
							}, {
								target: "video_file_url",
								targetUrl: D
							}],
							detectedLanguage: O
						} : {
							url: D,
							translationHelp: null
						},
						duration: w,
						title: g,
						description: x
					};
				}
				async getVideoId(d) {
					return d.pathname.slice(1);
				}
			}
			class VimeoHelper extends g.q {
				API_KEY = "";
				DEFAULT_SITE_ORIGIN = "https://vimeo.com";
				SITE_ORIGIN = this.service?.url?.slice(0, -1) ?? this.DEFAULT_SITE_ORIGIN;
				isErrorData(d) {
					return Object.hasOwn(d, "error");
				}
				isPrivatePlayer() {
					return this.referer && !this.referer.includes("vimeo.com") && this.origin.endsWith("player.vimeo.com");
				}
				async getViewerData() {
					try {
						let d = await this.fetch("https://vimeo.com/_next/viewer"), f = await d.json(), { apiUrl: p, jwt: m } = f;
						return this.API_ORIGIN = `https://${p}`, this.API_KEY = `jwt ${m}`, f;
					} catch (d) {
						return _.A.error("Failed to get default viewer data.", d.message), !1;
					}
				}
				async getVideoInfo(d) {
					try {
						let f = new URLSearchParams({ fields: "name,link,description,duration" }).toString(), p = await this.fetch(`${this.API_ORIGIN}/videos/${d}?${f}`, { headers: { Authorization: this.API_KEY } }), m = await p.json();
						if (this.isErrorData(m)) throw Error(m.developer_message ?? m.error);
						return m;
					} catch (f) {
						return _.A.error(`Failed to get video info by video ID: ${d}`, f.message), !1;
					}
				}
				async getPrivateVideoSource(d) {
					try {
						let { default_cdn: f, cdns: p } = d.dash, m = p[f].url, h = await this.fetch(m);
						if (h.status !== 200) throw new g.a(await h.text());
						let _ = await h.json(), v = new URL(_.base_url, m), b = _.audio.find((d) => d.mime_type === "audio/mp4" && d.format === "dash");
						if (!b) throw new g.a("Failed to find video data");
						let x = b.segments?.[0]?.url;
						if (!x) throw new g.a("Failed to find first segment url");
						let [C, w] = x.split("?", 2), T = new URLSearchParams(w);
						return T.delete("range"), new URL(`${b.base_url}${C}?${T.toString()}`, v).href;
					} catch (d) {
						return _.A.error("Failed to get private video source", d.message), !1;
					}
				}
				async getPrivateVideoInfo(d) {
					try {
						if (typeof playerConfig > "u") return;
						let f = await this.getPrivateVideoSource(playerConfig.request.files);
						if (!f) throw new g.a("Failed to get private video source");
						let { video: { title: p, duration: m }, request: { text_tracks: h } } = playerConfig;
						return {
							url: `${this.SITE_ORIGIN}/${d}`,
							video_url: f,
							title: p,
							duration: m,
							subs: h
						};
					} catch (f) {
						return _.A.error(`Failed to get private video info by video ID: ${d}`, f.message), !1;
					}
				}
				async getSubsInfo(d) {
					try {
						let f = new URLSearchParams({
							per_page: "100",
							fields: "language,type,link"
						}).toString(), p = await this.fetch(`${this.API_ORIGIN}/videos/${d}/texttracks?${f}`, { headers: { Authorization: this.API_KEY } }), m = await p.json();
						if (this.isErrorData(m)) throw Error(m.developer_message ?? m.error);
						return m.data;
					} catch (f) {
						return _.A.error(`Failed to get subtitles info by video ID: ${d}`, f.message), [];
					}
				}
				async getVideoData(d) {
					let f = this.isPrivatePlayer();
					if (f) {
						let f = await this.getPrivateVideoInfo(d);
						if (!f) return;
						let { url: p, subs: m, video_url: h, title: g, duration: _ } = f, b = m.map((d) => ({
							language: (0, v.ec)(d.lang),
							source: "vimeo",
							format: "vtt",
							url: this.SITE_ORIGIN + d.url,
							isAutoGenerated: d.lang.includes("autogenerated")
						})), x = b.length ? [{
							target: "video_file_url",
							targetUrl: h
						}, {
							target: "subtitles_file_url",
							targetUrl: b[0].url
						}] : null;
						return {
							...x ? {
								url: p,
								translationHelp: x
							} : { url: h },
							subtitles: b,
							title: g,
							duration: _
						};
					}
					if (!this.extraInfo) return this.returnBaseData(d);
					d.includes("/") && (d = d.replace("/", ":"));
					let p = await this.getViewerData();
					if (!p) return this.returnBaseData(d);
					let m = await this.getVideoInfo(d);
					if (!m) return this.returnBaseData(d);
					let h = await this.getSubsInfo(d), g = h.map((d) => ({
						language: (0, v.ec)(d.language),
						source: "vimeo",
						format: "vtt",
						url: d.link,
						isAutoGenerated: d.language.includes("autogen")
					})), { link: _, duration: b, name: x, description: C } = m;
					return {
						url: _,
						title: x,
						description: C,
						subtitles: g,
						duration: b
					};
				}
				async getVideoId(d) {
					let f = /video\/[^/]+$/.exec(d.pathname)?.[0];
					if (this.isPrivatePlayer()) return f;
					if (f) {
						let p = d.searchParams.get("h"), m = f.replace("video/", "");
						return p ? `${m}/${p}` : m;
					}
					let p = /channels\/[^/]+\/([^/]+)/.exec(d.pathname)?.[1] ?? /groups\/[^/]+\/videos\/([^/]+)/.exec(d.pathname)?.[1] ?? /(showcase|album)\/[^/]+\/video\/([^/]+)/.exec(d.pathname)?.[2];
					return p || /([^/]+\/)?[^/]+$/.exec(d.pathname)?.[0];
				}
			}
			class VKHelper extends g.q {
				static getPlayer() {
					if (!(typeof Videoview > "u")) return Videoview?.getPlayerObject?.call(void 0);
				}
				async getVideoData(d) {
					let f = VKHelper.getPlayer();
					if (!f) return this.returnBaseData(d);
					try {
						let { description: p, duration: m, md_title: h } = f.vars, g = new DOMParser(), _ = g.parseFromString(p, "text/html"), b = Array.from(_.body.childNodes).filter((d) => d.nodeName !== "BR").map((d) => d.textContent).join("\n"), x;
						return Object.hasOwn(f.vars, "subs") && (x = f.vars.subs.map((d) => ({
							language: (0, v.ec)(d.lang),
							source: "vk",
							format: "vtt",
							url: d.url,
							isAutoGenerated: !!d.is_auto
						}))), {
							url: this.service.url + d,
							title: h,
							description: b,
							duration: m,
							subtitles: x
						};
					} catch (f) {
						return _.A.error(`Failed to get VK video data, because: ${f.message}`), this.returnBaseData(d);
					}
				}
				async getVideoId(d) {
					let f = /^\/(video|clip)-?\d{8,9}_\d{9}$/.exec(d.pathname);
					if (f) return f[0].slice(1);
					let p = /\/playlist\/[^/]+\/(video-?\d{8,9}_\d{9})/.exec(d.pathname);
					if (p) return p[1];
					let m = d.searchParams.get("z");
					if (m) return m.split("/")[0];
					let h = d.searchParams.get("oid"), g = d.searchParams.get("id");
					if (h && g) return `video-${Math.abs(parseInt(h))}_${g}`;
				}
			}
			class WatchPornToHelper extends g.q {
				async getVideoId(d) {
					return /(video|embed)\/(\d+)(\/[^/]+\/)?/.exec(d.pathname)?.[0];
				}
			}
			var T = p("./node_modules/@vot.js/shared/dist/secure.js");
			class WeverseHelper extends g.q {
				API_ORIGIN = "https://global.apis.naver.com/weverse/wevweb";
				API_APP_ID = "be4d79eb8fc7bd008ee82c8ec4ff6fd4";
				API_HMAC_KEY = "1b9cb6378d959b45714bec49971ade22e6e24e42";
				HEADERS = {
					Accept: "application/json, text/plain, */*",
					Origin: "https://weverse.io",
					Referer: "https://weverse.io/"
				};
				getURLData() {
					return {
						appId: this.API_APP_ID,
						language: "en",
						os: "WEB",
						platform: "WEB",
						wpf: "pc"
					};
				}
				async createHash(d) {
					let f = Date.now(), p = d.substring(0, Math.min(255, d.length)) + f, m = await (0, T.bT)(this.API_HMAC_KEY, p);
					if (!m) throw new g.a("Failed to get weverse HMAC signature");
					return {
						wmsgpad: f.toString(),
						wmd: m
					};
				}
				async getHashURLParams(d) {
					let f = await this.createHash(d);
					return new URLSearchParams(f).toString();
				}
				async getPostPreview(d) {
					let f = `/post/v1.0/post-${d}/preview?` + new URLSearchParams({
						fieldSet: "postForPreview",
						...this.getURLData()
					}).toString();
					try {
						let d = await this.getHashURLParams(f), p = await this.fetch(this.API_ORIGIN + f + "&" + d, { headers: this.HEADERS });
						return await p.json();
					} catch (f) {
						return _.A.error(`Failed to get weverse post preview by postId: ${d}`, f.message), !1;
					}
				}
				async getVideoInKey(d) {
					let f = `/video/v1.1/vod/${d}/inKey?` + new URLSearchParams({
						gcc: "RU",
						...this.getURLData()
					}).toString();
					try {
						let d = await this.getHashURLParams(f), p = await this.fetch(this.API_ORIGIN + f + "&" + d, {
							method: "POST",
							headers: this.HEADERS
						});
						return await p.json();
					} catch (f) {
						return _.A.error(`Failed to get weverse InKey by videoId: ${d}`, f.message), !1;
					}
				}
				async getVideoInfo(d, f, p) {
					let m = Date.now();
					try {
						let h = new URLSearchParams({
							key: f,
							sid: p,
							nonce: m.toString(),
							devt: "html5_pc",
							prv: "N",
							aup: "N",
							stpb: "N",
							cpl: "en",
							env: "prod",
							lc: "en",
							adi: JSON.stringify([{ adSystem: null }]),
							adu: "/"
						}).toString(), g = await this.fetch(`https://global.apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${d}?` + h, { headers: this.HEADERS });
						return await g.json();
					} catch (m) {
						return _.A.error(`Failed to get weverse video info (infraVideoId: ${d}, inkey: ${f}, serviceId: ${p}`, m.message), !1;
					}
				}
				extractVideoInfo(d) {
					return d.find((d) => d.useP2P === !1 && d.source.includes(".mp4"));
				}
				async getVideoData(d) {
					let f = await this.getPostPreview(d);
					if (!f) return;
					let { videoId: p, serviceId: m, infraVideoId: h } = f.extension.video;
					if (!(p && m && h)) return;
					let g = await this.getVideoInKey(p);
					if (!g) return;
					let _ = await this.getVideoInfo(h, g.inKey, m);
					if (!_) return;
					let v = this.extractVideoInfo(_.videos.list);
					if (v) return {
						url: v.source,
						duration: v.duration
					};
				}
				async getVideoId(d) {
					return /([^/]+)\/(live|media)\/([^/]+)/.exec(d.pathname)?.[3];
				}
			}
			class XVideosHelper extends g.q {
				async getVideoId(d) {
					return /[^/]+\/[^/]+$/.exec(d.pathname)?.[0];
				}
			}
			class YandexDiskHelper extends g.q {
				API_ORIGIN = window.location.origin;
				CLIENT_PREFIX = "/client/disk";
				INLINE_PREFIX = "/i/";
				DISK_PREFIX = "/d/";
				isErrorData(d) {
					return Object.hasOwn(d, "error");
				}
				async getClientVideoData(d) {
					let f = new URL(window.location.href), p = f.searchParams.get("idDialog");
					if (!p) return;
					let m = document.querySelector("#preloaded-data");
					if (m) try {
						let d = JSON.parse(m.innerText), { idClient: f, sk: h } = d.config, _ = await this.fetch(this.API_ORIGIN + "/models-v2?m=mpfs/info", {
							method: "POST",
							body: JSON.stringify({
								apiMethod: "mpfs/info",
								connection_id: f,
								requestParams: { path: p },
								sk: h
							}),
							headers: { "Content-Type": "application/json" }
						}), v = await _.json();
						if (this.isErrorData(v)) throw new g.a(v.error?.message ?? v.error?.code);
						if (v?.type !== "file") throw new g.a("Failed to get resource info");
						let { meta: { short_url: b, video_info: x }, name: C } = v;
						if (!x) throw new g.a("There's no video open right now");
						if (!b) throw new g.a("Access to the video is limited");
						let w = this.clearTitle(C), T = Math.round(x.duration / 1e3);
						return {
							url: b,
							title: w,
							duration: T
						};
					} catch (f) {
						_.A.error(`Failed to get yandex disk video data by video ID: ${d}, because ${f.message}`);
						return;
					}
				}
				clearTitle(d) {
					return d.replace(/(\.[^.]+)$/, "");
				}
				getBodyHash(d, f) {
					let p = JSON.stringify({
						hash: d,
						sk: f
					});
					return encodeURIComponent(p);
				}
				async fetchList(d, f) {
					let p = this.getBodyHash(d, f), m = await this.fetch(this.API_ORIGIN + "/public/api/fetch-list", {
						method: "POST",
						body: p
					}), h = await m.json();
					if (Object.hasOwn(h, "error")) throw new g.a("Failed to fetch folder list");
					return h.resources;
				}
				async getDownloadUrl(d, f) {
					let p = this.getBodyHash(d, f), m = await this.fetch(this.API_ORIGIN + "/public/api/download-url", {
						method: "POST",
						body: p
					}), h = await m.json();
					if (h.error) throw new g.a("Failed to get download url");
					return h.data.url;
				}
				async getDiskVideoData(d) {
					try {
						let f = document.getElementById("store-prefetch");
						if (!f) throw new g.a("Failed to get prefetch data");
						let p = d.split("/").slice(3);
						if (!p.length) throw new g.a("Failed to find video file path");
						let m = JSON.parse(f.innerText), { resources: h, rootResourceId: _, environment: { sk: b } } = m, x = h[_], C = p.length - 1, w = p.filter((d, f) => f !== C).join("/"), T = Object.values(h);
						w.includes("/") && (T = await this.fetchList(`${x.hash}:/${w}`, b));
						let E = T.find((d) => d.name === p[C]);
						if (!E) throw new g.a("Failed to find resource");
						if (E && E.type === "dir") throw new g.a("Path is dir, but expected file");
						let { meta: { short_url: D, mediatype: O, videoDuration: A }, path: j, name: F } = E;
						if (O !== "video") throw new g.a("Resource isn't a video");
						let U = this.clearTitle(F), W = Math.round(A / 1e3);
						if (D) return {
							url: D,
							duration: W,
							title: U
						};
						let G = await this.getDownloadUrl(j, b);
						return {
							url: (0, v.fl)(new URL(G)),
							duration: W,
							title: U
						};
					} catch (f) {
						_.A.error(`Failed to get yandex disk video data by disk video ID: ${d}`, f.message);
						return;
					}
				}
				async getVideoData(d) {
					return d.startsWith(this.INLINE_PREFIX) || /^\/d\/([^/]+)$/.exec(d) ? { url: this.service.url + d.slice(1) } : (d = decodeURIComponent(d), d.startsWith(this.CLIENT_PREFIX) ? await this.getClientVideoData(d) : await this.getDiskVideoData(d));
				}
				async getVideoId(d) {
					if (d.pathname.startsWith(this.CLIENT_PREFIX)) return d.pathname + d.search;
					let f = /\/i\/([^/]+)/.exec(d.pathname)?.[0];
					return f || (/\/d\/([^/]+)/.exec(d.pathname) ? d.pathname : void 0);
				}
			}
			class YoukuHelper extends g.q {
				async getVideoId(d) {
					return /v_show\/id_[\w=]+/.exec(d.pathname)?.[0];
				}
			}
			var E = p("./node_modules/@vot.js/ext/dist/helpers/youtube.js");
			let D = {
				[m.r.mailru]: MailRuHelper,
				[m.r.weverse]: WeverseHelper,
				[m.r.kodik]: KodikHelper,
				[m.r.patreon]: PatreonHelper,
				[m.r.reddit]: RedditHelper,
				[m.r.bannedvideo]: BannedVideoHelper,
				[m.r.kick]: KickHelper,
				[m.r.appledeveloper]: AppleDeveloperHelper,
				[m.r.epicgames]: EpicGamesHelper,
				[m.r.odysee]: OdyseeHelper,
				[m.r.coursehunterLike]: CoursehunterLikeHelper,
				[m.r.twitch]: TwitchHelper,
				[m.r.sap]: SapHelper,
				[m.r.linkedin]: LinkedinHelper,
				[m.r.vimeo]: VimeoHelper,
				[m.r.yandexdisk]: YandexDiskHelper,
				[m.r.vk]: VKHelper,
				[m.r.trovo]: TrovoHelper,
				[m.r.incestflix]: IncestflixHelper,
				[m.r.porntn]: PornTNHelper,
				[m.r.googledrive]: GoogleDriveHelper,
				[m.r.bilibili]: BilibiliHelper,
				[m.r.xvideos]: XVideosHelper,
				[m.r.watchpornto]: WatchPornToHelper,
				[m.r.archive]: ArchiveHelper,
				[m.r.dailymotion]: DailymotionHelper,
				[m.r.youku]: YoukuHelper,
				[m.r.egghead]: EggheadHelper,
				[m.r.newgrounds]: NewgroundsHelper,
				[m.r.okru]: OKRuHelper,
				[m.r.peertube]: PeertubeHelper,
				[m.r.eporner]: EpornerHelper,
				[m.r.bitchute]: BitchuteHelper,
				[m.r.rutube]: RutubeHelper,
				[m.r.facebook]: FacebookHelper,
				[m.r.rumble]: RumbleHelper,
				[m.r.twitter]: TwitterHelper,
				[m.r.pornhub]: PornhubHelper,
				[m.r.tiktok]: TikTokHelper,
				[m.r.proxitok]: TikTokHelper,
				[m.r.nine_gag]: NineGAGHelper,
				[m.r.youtube]: E.A,
				[m.r.ricktube]: E.A,
				[m.r.invidious]: E.A,
				[m.r.poketube]: E.A,
				[m.r.piped]: E.A,
				[m.r.dzen]: DzenHelper,
				[m.r.cloudflarestream]: CloudflareStreamHelper,
				[m.r.loom]: LoomHelper,
				[m.r.rtnews]: RtNewsHelper,
				[m.r.bitview]: BitviewHelper,
				[m.r.thisvid]: ThisVidHelper,
				[m.r.ign]: IgnHelper,
				[m.r.bunkr]: BunkrHelper,
				[m.r.imdb]: IMDbHelper,
				[m.r.telegram]: TelegramHelper,
				[h.Q.udemy]: UdemyHelper,
				[h.Q.coursera]: CourseraHelper,
				[h.Q.douyin]: DouyinHelper,
				[h.Q.artstation]: ArtstationHelper,
				[h.Q.kickstarter]: KickstarterHelper,
				[h.Q.oraclelearn]: OracleLearnHelper,
				[h.Q.deeplearningai]: DeeplearningAIHelper,
				[h.Q.netacad]: NetacadHelper
			};
			class VideoHelper {
				helpersData;
				constructor(d = {}) {
					this.helpersData = d;
				}
				getHelper(d) {
					return new D[d](this.helpersData);
				}
			}
		},
		"./node_modules/@vot.js/ext/dist/helpers/youtube.js": (d, f, p) => {
			"use strict";
			p.d(f, { A: () => YoutubeHelper });
			var m = p("./node_modules/@vot.js/ext/dist/helpers/base.js"), h = p("./node_modules/@vot.js/shared/dist/data/consts.js"), g = p("./node_modules/@vot.js/shared/dist/utils/logger.js"), _ = p("./node_modules/@vot.js/shared/dist/utils/utils.js");
			class YoutubeHelper extends m.q {
				static isMobile() {
					return /^m\.youtube\.com$/.test(window.location.hostname);
				}
				static getPlayer() {
					return window.location.pathname.startsWith("/shorts/") && !YoutubeHelper.isMobile() ? document.querySelector("#shorts-player") : document.querySelector("#movie_player");
				}
				static getPlayerResponse() {
					return YoutubeHelper.getPlayer()?.getPlayerResponse?.call(void 0);
				}
				static getPlayerData() {
					return YoutubeHelper.getPlayer()?.getVideoData?.call(void 0);
				}
				static getVolume() {
					let d = YoutubeHelper.getPlayer();
					return d?.getVolume ? d.getVolume() / 100 : 1;
				}
				static setVolume(d) {
					let f = YoutubeHelper.getPlayer();
					return f?.setVolume ? (f.setVolume(Math.round(d * 100)), !0) : !1;
				}
				static isMuted() {
					let d = YoutubeHelper.getPlayer();
					return d?.isMuted ? d.isMuted() : !1;
				}
				static videoSeek(d, f) {
					g.A.log("videoSeek", f);
					let p = YoutubeHelper.getPlayer()?.getProgressState()?.seekableEnd ?? d.currentTime, m = p - f;
					d.currentTime = m;
				}
				static getPoToken() {
					let d = YoutubeHelper.getPlayer();
					if (!d) return;
					let f = d.getAudioTrack?.call(void 0);
					if (!f?.captionTracks?.length) return;
					let p = f.captionTracks.find((d) => d.url.includes("&pot="));
					if (p) return /&pot=([^&]+)/.exec(p.url)?.[1];
				}
				static getGlobalConfig() {
					return typeof yt < "u" ? yt?.config_ : typeof ytcfg < "u" ? ytcfg?.data_ : void 0;
				}
				static getDeviceParams() {
					let d = YoutubeHelper.getGlobalConfig();
					if (!d) return "c=WEB";
					let f = d.INNERTUBE_CONTEXT?.client, p = new URLSearchParams(d.DEVICE);
					return p.delete("ceng"), p.delete("cengver"), p.set("c", f?.clientName ?? d.INNERTUBE_CLIENT_NAME), p.set("cver", f?.clientVersion ?? d.INNERTUBE_CLIENT_VERSION), p.set("cplayer", "UNIPLAYER"), p.toString();
				}
				static getSubtitles(d) {
					let f = YoutubeHelper.getPlayerResponse(), p = f?.captions?.playerCaptionsTracklistRenderer;
					if (!p) return [];
					let m = p.captionTracks ?? [], h = p.translationLanguages ?? [], v = h.find((f) => f.languageCode === d), b = m.find((d) => d?.kind === "asr"), x = b?.languageCode ?? "en", C = m.reduce((f, p) => {
						if (!("languageCode" in p)) return f;
						let m = p.languageCode ? (0, _.ec)(p.languageCode) : void 0, h = p.baseUrl;
						if (!m || !h) return f;
						let g = `${h.startsWith("http") ? h : `${window.location.origin}/${h}`}&fmt=json3`;
						return f.push({
							source: "youtube",
							format: "json",
							language: m,
							isAutoGenerated: p?.kind === "asr",
							url: g
						}), v && p.isTranslatable && p.languageCode === x && d !== m && f.push({
							source: "youtube",
							format: "json",
							language: d,
							isAutoGenerated: p?.kind === "asr",
							translatedFromLanguage: m,
							url: `${g}&tlang=${d}`
						}), f;
					}, []);
					return g.A.log("youtube subtitles:", C), C;
				}
				static getLanguage() {
					if (!YoutubeHelper.isMobile()) {
						let d = YoutubeHelper.getPlayer(), f = d?.getAudioTrack?.call(void 0)?.getLanguageInfo();
						if (f && f.id !== "und") return (0, _.ec)(f.id.split(".")[0]);
					}
					let d = YoutubeHelper.getPlayerResponse(), f = d?.captions?.playerCaptionsTracklistRenderer.captionTracks.find((d) => d.kind === "asr" && d.languageCode);
					return f ? (0, _.ec)(f.languageCode) : void 0;
				}
				async getVideoData(d) {
					let { title: f } = YoutubeHelper.getPlayerData() ?? {}, { shortDescription: p, isLive: m, title: g } = YoutubeHelper.getPlayerResponse()?.videoDetails ?? {}, _ = YoutubeHelper.getSubtitles(this.language), v = YoutubeHelper.getLanguage();
					v && !h.xm.includes(v) && (v = void 0);
					let b = YoutubeHelper.getPlayer()?.getDuration?.call(void 0) ?? void 0;
					return {
						url: this.service.url + d,
						isStream: m,
						title: g,
						localizedTitle: f,
						detectedLanguage: v,
						description: p,
						subtitles: _,
						duration: b
					};
				}
				async getVideoId(d) {
					if (d.hostname === "youtu.be" && (d.search = `?v=${d.pathname.replace("/", "")}`, d.pathname = "/watch"), d.searchParams.has("enablejsapi")) {
						let f = YoutubeHelper.getPlayer()?.getVideoUrl();
						d = f ? new URL(f) : d;
					}
					return /(?:watch|embed|shorts|live)\/([^/]+)/.exec(d.pathname)?.[1] ?? d.searchParams.get("v");
				}
			}
		},
		"./node_modules/@vot.js/ext/dist/index.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						Ay: () => h.A,
						Pu: () => h.P
					});
					var h = p("./node_modules/@vot.js/ext/dist/client.js"), g = p("./node_modules/@vot.js/ext/dist/utils/videoData.js"), _ = p("./node_modules/@vot.js/ext/dist/data/sites.js"), v = p("./node_modules/@vot.js/ext/dist/types/index.js"), b = p("./node_modules/@vot.js/ext/dist/helpers/index.js"), x = d([h]);
					h = (x.then ? (await x)() : x)[0], m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./node_modules/@vot.js/ext/dist/types/index.js": (d, f, p) => {
			"use strict";
			var m = p("./node_modules/@vot.js/ext/dist/types/service.js");
		},
		"./node_modules/@vot.js/ext/dist/types/service.js": (d, f, p) => {
			"use strict";
			p.d(f, { Q: () => h });
			var m = p("./node_modules/@vot.js/core/dist/types/service.js"), h;
			(function(d) {
				d.udemy = "udemy", d.coursera = "coursera", d.douyin = "douyin", d.artstation = "artstation", d.kickstarter = "kickstarter", d.oraclelearn = "oraclelearn", d.deeplearningai = "deeplearningai", d.netacad = "netacad";
			})(h ||= {});
			let g = {
				...m.r,
				...h
			};
		},
		"./node_modules/@vot.js/ext/dist/utils/videoData.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				cQ: () => getService,
				jY: () => getVideoID
			});
			var m = p("./node_modules/@vot.js/core/dist/types/service.js"), h = p("./node_modules/@vot.js/core/dist/utils/videoData.js"), g = p("./node_modules/@vot.js/ext/dist/data/sites.js"), _ = p("./node_modules/@vot.js/ext/dist/helpers/index.js");
			function getService() {
				if (h.$.exec(window.location.href)) return [];
				let d = window.location.hostname, f = new URL(window.location.href), isMatches = (p) => p instanceof RegExp ? p.test(d) : typeof p == "string" ? d.includes(p) : typeof p == "function" ? p(f) : !1;
				return g.A.filter((d) => (Array.isArray(d.match) ? d.match.some(isMatches) : isMatches(d.match)) && d.host && d.url);
			}
			async function getVideoID(d, f = {}) {
				let p = new URL(window.location.href), h = d.host;
				if (Object.keys(_.JW).includes(h)) {
					let d = new _.Ay(f).getHelper(h);
					return await d.getVideoId(p);
				}
				return h === m.r.custom ? p.href : void 0;
			}
			async function getVideoData(d, f = {}) {
				let p = await getVideoID(d, f);
				if (!p) throw new VideoDataError(`Entered unsupported link: "${d.host}"`);
				let m = window.location.origin;
				if ([
					CoreVideoService.peertube,
					CoreVideoService.coursehunterLike,
					CoreVideoService.cloudflarestream
				].includes(d.host) && (d.url = m), d.rawResult) return {
					url: p,
					videoId: p,
					host: d.host,
					duration: void 0
				};
				if (!d.needExtraData) return {
					url: d.url + p,
					videoId: p,
					host: d.host,
					duration: void 0
				};
				let h = new VideoHelper({
					...f,
					service: d,
					origin: m
				}).getHelper(d.host), g = await h.getVideoData(p);
				if (!g) throw new VideoDataError(`Failed to get video raw url for ${d.host}`);
				return {
					...g,
					videoId: p,
					host: d.host
				};
			}
		},
		"./node_modules/@vot.js/shared/dist/data/alternativeUrls.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				Jo: () => h,
				My: () => b,
				TP: () => g,
				Xm: () => m,
				fV: () => _,
				r: () => C,
				sx: () => v
			});
			let m = [
				"yewtu.be",
				"yt.artemislena.eu",
				"invidious.flokinet.to",
				"iv.melmac.space",
				"inv.nadeko.net",
				"inv.tux.pizza",
				"invidious.private.coffee",
				"yt.drgnz.club",
				"vid.puffyan.us",
				"invidious.dhusch.de"
			], h = "piped.video,piped.tokhmi.xyz,piped.moomoo.me,piped.syncpundit.io,piped.mha.fi,watch.whatever.social,piped.garudalinux.org,efy.piped.pages.dev,watch.leptons.xyz,piped.lunar.icu,yt.dc09.ru,piped.mint.lgbt,il.ax,piped.privacy.com.de,piped.esmailelbob.xyz,piped.projectsegfau.lt,piped.in.projectsegfau.lt,piped.us.projectsegfau.lt,piped.privacydev.net,piped.palveluntarjoaja.eu,piped.smnz.de,piped.adminforge.de,piped.qdi.fi,piped.hostux.net,piped.chauvet.pro,piped.jotoma.de,piped.pfcd.me,piped.frontendfriendly.xyz".split(","), g = [
				"proxitok.pabloferreiro.es",
				"proxitok.pussthecat.org",
				"tok.habedieeh.re",
				"proxitok.esmailelbob.xyz",
				"proxitok.privacydev.net",
				"tok.artemislena.eu",
				"tok.adminforge.de",
				"tt.vern.cc",
				"cringe.whatever.social",
				"proxitok.lunar.icu",
				"proxitok.privacy.com.de"
			], _ = [
				"peertube.1312.media",
				"tube.shanti.cafe",
				"bee-tube.fr",
				"video.sadmin.io",
				"dalek.zone",
				"review.peertube.biz",
				"peervideo.club",
				"tube.la-dina.net",
				"peertube.tmp.rcp.tf",
				"peertube.su",
				"video.blender.org",
				"videos.viorsan.com",
				"tube-sciences-technologies.apps.education.fr",
				"tube-numerique-educatif.apps.education.fr",
				"tube-arts-lettres-sciences-humaines.apps.education.fr",
				"beetoons.tv",
				"comics.peertube.biz",
				"makertube.net"
			], v = [
				"poketube.fun",
				"pt.sudovanilla.org",
				"poke.ggtyler.dev",
				"poke.uk2.littlekai.co.uk",
				"poke.blahai.gay"
			], b = ["ricktube.ru"], x = null, C = ["coursehunter.net", "coursetrain.net"];
		},
		"./node_modules/@vot.js/shared/dist/data/config.js": (d, f, p) => {
			"use strict";
			p.d(f, { A: () => m });
			let m = {
				host: "api.browser.yandex.ru",
				hostVOT: "vot.toil.cc/v1",
				hostWorker: "vot-worker.toil.cc",
				mediaProxy: "media-proxy.toil.cc",
				userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 YaBrowser/25.4.0.0 Safari/537.36",
				componentVersion: "25.6.0.2259",
				hmac: "bt8xH3VOlb4mqf0nqAibnDOoiPlXsisf",
				defaultDuration: 343,
				minChunkSize: 5295308,
				loggerLevel: 1,
				version: "2.4.12"
			};
		},
		"./node_modules/@vot.js/shared/dist/data/consts.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				EG: () => g,
				Xh: () => h,
				xm: () => m
			});
			let m = [
				"auto",
				"ru",
				"en",
				"zh",
				"ko",
				"lt",
				"lv",
				"ar",
				"fr",
				"it",
				"es",
				"de",
				"ja"
			], h = [
				"ru",
				"en",
				"kk"
			], g = [
				"srt",
				"vtt",
				"json"
			];
		},
		"./node_modules/@vot.js/shared/dist/index.js": (d, f, p) => {
			"use strict";
			p.d(f, { $W: () => m.A });
			var m = p("./node_modules/@vot.js/shared/dist/data/config.js"), h = p("./node_modules/@vot.js/shared/dist/protos/yandex.js"), g = p("./node_modules/@vot.js/shared/dist/utils/logger.js"), _ = p("./node_modules/@vot.js/shared/dist/utils/utils.js"), v = p("./node_modules/@vot.js/shared/dist/types/logger.js"), b;
			(function(d) {
				d.Channel = "Channel", d.Video = "Video";
			})(b ||= {});
		},
		"./node_modules/@vot.js/shared/dist/protos/yandex.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				q8: () => E,
				kO: () => te,
				Xv: () => $,
				n_: () => ee,
				P4: () => X,
				LD: () => Z,
				Y7: () => q,
				Wi: () => J,
				Yx: () => F,
				ZK: () => U,
				yy: () => O,
				AJ: () => A,
				ls: () => ne,
				Bv: () => re
			});
			function varint64read() {
				let d = 0, f = 0;
				for (let p = 0; p < 28; p += 7) {
					let m = this.buf[this.pos++];
					if (d |= (m & 127) << p, !(m & 128)) return this.assertBounds(), [d, f];
				}
				let p = this.buf[this.pos++];
				if (d |= (p & 15) << 28, f = (p & 112) >> 4, !(p & 128)) return this.assertBounds(), [d, f];
				for (let p = 3; p <= 31; p += 7) {
					let m = this.buf[this.pos++];
					if (f |= (m & 127) << p, !(m & 128)) return this.assertBounds(), [d, f];
				}
				throw Error("invalid varint");
			}
			function varint64write(d, f, p) {
				for (let m = 0; m < 28; m += 7) {
					let h = d >>> m, g = !(!(h >>> 7) && f == 0), _ = (g ? h | 128 : h) & 255;
					if (p.push(_), !g) return;
				}
				let m = d >>> 28 & 15 | (f & 7) << 4, h = !!(f >> 3);
				if (p.push((h ? m | 128 : m) & 255), h) {
					for (let d = 3; d < 31; d += 7) {
						let m = f >>> d, h = !!(m >>> 7), g = (h ? m | 128 : m) & 255;
						if (p.push(g), !h) return;
					}
					p.push(f >>> 31 & 1);
				}
			}
			let m = 4294967296;
			function int64FromString(d) {
				let f = d[0] === "-";
				f && (d = d.slice(1));
				let p = 1e6, h = 0, g = 0;
				function add1e6digit(f, _) {
					let v = Number(d.slice(f, _));
					g *= p, h = h * p + v, h >= m && (g += h / m | 0, h %= m);
				}
				return add1e6digit(-24, -18), add1e6digit(-18, -12), add1e6digit(-12, -6), add1e6digit(-6), f ? negate(h, g) : newBits(h, g);
			}
			function int64ToString(d, f) {
				let p = newBits(d, f), m = p.hi & 2147483648;
				m && (p = negate(p.lo, p.hi));
				let h = uInt64ToString(p.lo, p.hi);
				return m ? "-" + h : h;
			}
			function uInt64ToString(d, f) {
				if ({lo: d, hi: f} = toUnsigned(d, f), f <= 2097151) return String(m * f + d);
				let p = d & 16777215, h = (d >>> 24 | f << 8) & 16777215, g = f >> 16 & 65535, _ = p + h * 6777216 + g * 6710656, v = h + g * 8147497, b = g * 2, x = 1e7;
				return _ >= x && (v += Math.floor(_ / x), _ %= x), v >= x && (b += Math.floor(v / x), v %= x), b.toString() + decimalFrom1e7WithLeadingZeros(v) + decimalFrom1e7WithLeadingZeros(_);
			}
			function toUnsigned(d, f) {
				return {
					lo: d >>> 0,
					hi: f >>> 0
				};
			}
			function newBits(d, f) {
				return {
					lo: d | 0,
					hi: f | 0
				};
			}
			function negate(d, f) {
				return f = ~f, d ? d = ~d + 1 : f += 1, newBits(d, f);
			}
			let decimalFrom1e7WithLeadingZeros = (d) => {
				let f = String(d);
				return "0000000".slice(f.length) + f;
			};
			function varint32write(d, f) {
				if (d >= 0) {
					for (; d > 127;) f.push(d & 127 | 128), d >>>= 7;
					f.push(d);
				} else {
					for (let p = 0; p < 9; p++) f.push(d & 127 | 128), d >>= 7;
					f.push(1);
				}
			}
			function varint32read() {
				let d = this.buf[this.pos++], f = d & 127;
				if (!(d & 128) || (d = this.buf[this.pos++], f |= (d & 127) << 7, !(d & 128)) || (d = this.buf[this.pos++], f |= (d & 127) << 14, !(d & 128)) || (d = this.buf[this.pos++], f |= (d & 127) << 21, !(d & 128))) return this.assertBounds(), f;
				d = this.buf[this.pos++], f |= (d & 15) << 28;
				for (let f = 5; d & 128 && f < 10; f++) d = this.buf[this.pos++];
				if (d & 128) throw Error("invalid varint");
				return this.assertBounds(), f >>> 0;
			}
			let h = makeInt64Support();
			function makeInt64Support() {
				let d = new DataView(new ArrayBuffer(8)), f = typeof BigInt == "function" && typeof d.getBigInt64 == "function" && typeof d.getBigUint64 == "function" && typeof d.setBigInt64 == "function" && typeof d.setBigUint64 == "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
				if (f) {
					let f = BigInt("-9223372036854775808"), p = BigInt("9223372036854775807"), m = BigInt("0"), h = BigInt("18446744073709551615");
					return {
						zero: BigInt(0),
						supported: !0,
						parse(d) {
							let m = typeof d == "bigint" ? d : BigInt(d);
							if (m > p || m < f) throw Error(`invalid int64: ${d}`);
							return m;
						},
						uParse(d) {
							let f = typeof d == "bigint" ? d : BigInt(d);
							if (f > h || f < m) throw Error(`invalid uint64: ${d}`);
							return f;
						},
						enc(f) {
							return d.setBigInt64(0, this.parse(f), !0), {
								lo: d.getInt32(0, !0),
								hi: d.getInt32(4, !0)
							};
						},
						uEnc(f) {
							return d.setBigInt64(0, this.uParse(f), !0), {
								lo: d.getInt32(0, !0),
								hi: d.getInt32(4, !0)
							};
						},
						dec(f, p) {
							return d.setInt32(0, f, !0), d.setInt32(4, p, !0), d.getBigInt64(0, !0);
						},
						uDec(f, p) {
							return d.setInt32(0, f, !0), d.setInt32(4, p, !0), d.getBigUint64(0, !0);
						}
					};
				}
				return {
					zero: "0",
					supported: !1,
					parse(d) {
						return typeof d != "string" && (d = d.toString()), assertInt64String(d), d;
					},
					uParse(d) {
						return typeof d != "string" && (d = d.toString()), assertUInt64String(d), d;
					},
					enc(d) {
						return typeof d != "string" && (d = d.toString()), assertInt64String(d), int64FromString(d);
					},
					uEnc(d) {
						return typeof d != "string" && (d = d.toString()), assertUInt64String(d), int64FromString(d);
					},
					dec(d, f) {
						return int64ToString(d, f);
					},
					uDec(d, f) {
						return uInt64ToString(d, f);
					}
				};
			}
			function assertInt64String(d) {
				if (!/^-?[0-9]+$/.test(d)) throw Error("invalid int64: " + d);
			}
			function assertUInt64String(d) {
				if (!/^[0-9]+$/.test(d)) throw Error("invalid uint64: " + d);
			}
			let g = Symbol.for("@bufbuild/protobuf/text-encoding");
			function configureTextEncoding(d) {
				globalThis[g] = d;
			}
			function getTextEncoding() {
				if (globalThis[g] == null) {
					let d = new globalThis.TextEncoder(), f = new globalThis.TextDecoder();
					globalThis[g] = {
						encodeUtf8(f) {
							return d.encode(f);
						},
						decodeUtf8(d) {
							return f.decode(d);
						},
						checkUtf8(d) {
							try {
								return encodeURIComponent(d), !0;
							} catch {
								return !1;
							}
						}
					};
				}
				return globalThis[g];
			}
			var _;
			(function(d) {
				d[d.Varint = 0] = "Varint", d[d.Bit64 = 1] = "Bit64", d[d.LengthDelimited = 2] = "LengthDelimited", d[d.StartGroup = 3] = "StartGroup", d[d.EndGroup = 4] = "EndGroup", d[d.Bit32 = 5] = "Bit32";
			})(_ ||= {});
			let v = 34028234663852886e22, b = -34028234663852886e22, x = 4294967295, C = 2147483647, w = -2147483648;
			class BinaryWriter {
				constructor(d = getTextEncoding().encodeUtf8) {
					this.encodeUtf8 = d, this.stack = [], this.chunks = [], this.buf = [];
				}
				finish() {
					this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
					let d = 0;
					for (let f = 0; f < this.chunks.length; f++) d += this.chunks[f].length;
					let f = new Uint8Array(d), p = 0;
					for (let d = 0; d < this.chunks.length; d++) f.set(this.chunks[d], p), p += this.chunks[d].length;
					return this.chunks = [], f;
				}
				fork() {
					return this.stack.push({
						chunks: this.chunks,
						buf: this.buf
					}), this.chunks = [], this.buf = [], this;
				}
				join() {
					let d = this.finish(), f = this.stack.pop();
					if (!f) throw Error("invalid state, fork stack empty");
					return this.chunks = f.chunks, this.buf = f.buf, this.uint32(d.byteLength), this.raw(d);
				}
				tag(d, f) {
					return this.uint32((d << 3 | f) >>> 0);
				}
				raw(d) {
					return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(d), this;
				}
				uint32(d) {
					for (assertUInt32(d); d > 127;) this.buf.push(d & 127 | 128), d >>>= 7;
					return this.buf.push(d), this;
				}
				int32(d) {
					return assertInt32(d), varint32write(d, this.buf), this;
				}
				bool(d) {
					return this.buf.push(d ? 1 : 0), this;
				}
				bytes(d) {
					return this.uint32(d.byteLength), this.raw(d);
				}
				string(d) {
					let f = this.encodeUtf8(d);
					return this.uint32(f.byteLength), this.raw(f);
				}
				float(d) {
					assertFloat32(d);
					let f = new Uint8Array(4);
					return new DataView(f.buffer).setFloat32(0, d, !0), this.raw(f);
				}
				double(d) {
					let f = new Uint8Array(8);
					return new DataView(f.buffer).setFloat64(0, d, !0), this.raw(f);
				}
				fixed32(d) {
					assertUInt32(d);
					let f = new Uint8Array(4);
					return new DataView(f.buffer).setUint32(0, d, !0), this.raw(f);
				}
				sfixed32(d) {
					assertInt32(d);
					let f = new Uint8Array(4);
					return new DataView(f.buffer).setInt32(0, d, !0), this.raw(f);
				}
				sint32(d) {
					return assertInt32(d), d = (d << 1 ^ d >> 31) >>> 0, varint32write(d, this.buf), this;
				}
				sfixed64(d) {
					let f = new Uint8Array(8), p = new DataView(f.buffer), m = h.enc(d);
					return p.setInt32(0, m.lo, !0), p.setInt32(4, m.hi, !0), this.raw(f);
				}
				fixed64(d) {
					let f = new Uint8Array(8), p = new DataView(f.buffer), m = h.uEnc(d);
					return p.setInt32(0, m.lo, !0), p.setInt32(4, m.hi, !0), this.raw(f);
				}
				int64(d) {
					let f = h.enc(d);
					return varint64write(f.lo, f.hi, this.buf), this;
				}
				sint64(d) {
					let f = h.enc(d), p = f.hi >> 31, m = f.lo << 1 ^ p, g = (f.hi << 1 | f.lo >>> 31) ^ p;
					return varint64write(m, g, this.buf), this;
				}
				uint64(d) {
					let f = h.uEnc(d);
					return varint64write(f.lo, f.hi, this.buf), this;
				}
			}
			class BinaryReader {
				constructor(d, f = getTextEncoding().decodeUtf8) {
					this.decodeUtf8 = f, this.varint64 = varint64read, this.uint32 = varint32read, this.buf = d, this.len = d.length, this.pos = 0, this.view = new DataView(d.buffer, d.byteOffset, d.byteLength);
				}
				tag() {
					let d = this.uint32(), f = d >>> 3, p = d & 7;
					if (f <= 0 || p < 0 || p > 5) throw Error("illegal tag: field no " + f + " wire type " + p);
					return [f, p];
				}
				skip(d, f) {
					let p = this.pos;
					switch (d) {
						case _.Varint:
							for (; this.buf[this.pos++] & 128;);
							break;
						case _.Bit64: this.pos += 4;
						case _.Bit32:
							this.pos += 4;
							break;
						case _.LengthDelimited:
							let p = this.uint32();
							this.pos += p;
							break;
						case _.StartGroup:
							for (;;) {
								let [d, p] = this.tag();
								if (p === _.EndGroup) {
									if (f !== void 0 && d !== f) throw Error("invalid end group tag");
									break;
								}
								this.skip(p, d);
							}
							break;
						default: throw Error("cant skip wire type " + d);
					}
					return this.assertBounds(), this.buf.subarray(p, this.pos);
				}
				assertBounds() {
					if (this.pos > this.len) throw RangeError("premature EOF");
				}
				int32() {
					return this.uint32() | 0;
				}
				sint32() {
					let d = this.uint32();
					return d >>> 1 ^ -(d & 1);
				}
				int64() {
					return h.dec(...this.varint64());
				}
				uint64() {
					return h.uDec(...this.varint64());
				}
				sint64() {
					let [d, f] = this.varint64(), p = -(d & 1);
					return d = (d >>> 1 | (f & 1) << 31) ^ p, f = f >>> 1 ^ p, h.dec(d, f);
				}
				bool() {
					let [d, f] = this.varint64();
					return d !== 0 || f !== 0;
				}
				fixed32() {
					return this.view.getUint32((this.pos += 4) - 4, !0);
				}
				sfixed32() {
					return this.view.getInt32((this.pos += 4) - 4, !0);
				}
				fixed64() {
					return h.uDec(this.sfixed32(), this.sfixed32());
				}
				sfixed64() {
					return h.dec(this.sfixed32(), this.sfixed32());
				}
				float() {
					return this.view.getFloat32((this.pos += 4) - 4, !0);
				}
				double() {
					return this.view.getFloat64((this.pos += 8) - 8, !0);
				}
				bytes() {
					let d = this.uint32(), f = this.pos;
					return this.pos += d, this.assertBounds(), this.buf.subarray(f, f + d);
				}
				string() {
					return this.decodeUtf8(this.bytes());
				}
			}
			function assertInt32(d) {
				if (typeof d == "string") d = Number(d);
				else if (typeof d != "number") throw Error("invalid int32: " + typeof d);
				if (!Number.isInteger(d) || d > C || d < w) throw Error("invalid int32: " + d);
			}
			function assertUInt32(d) {
				if (typeof d == "string") d = Number(d);
				else if (typeof d != "number") throw Error("invalid uint32: " + typeof d);
				if (!Number.isInteger(d) || d > x || d < 0) throw Error("invalid uint32: " + d);
			}
			function assertFloat32(d) {
				if (typeof d == "string") {
					let f = d;
					if (d = Number(d), Number.isNaN(d) && f !== "NaN") throw Error("invalid float32: " + f);
				} else if (typeof d != "number") throw Error("invalid float32: " + typeof d);
				if (Number.isFinite(d) && (d > v || d < b)) throw Error("invalid float32: " + d);
			}
			let T = "";
			var E;
			(function(d) {
				d[d.NO_CONNECTION = 0] = "NO_CONNECTION", d[d.TRANSLATING = 10] = "TRANSLATING", d[d.STREAMING = 20] = "STREAMING", d[d.UNRECOGNIZED = -1] = "UNRECOGNIZED";
			})(E ||= {});
			function streamIntervalFromJSON(d) {
				switch (d) {
					case 0:
					case "NO_CONNECTION": return E.NO_CONNECTION;
					case 10:
					case "TRANSLATING": return E.TRANSLATING;
					case 20:
					case "STREAMING": return E.STREAMING;
					case -1:
					case "UNRECOGNIZED":
					default: return E.UNRECOGNIZED;
				}
			}
			function streamIntervalToJSON(d) {
				switch (d) {
					case E.NO_CONNECTION: return "NO_CONNECTION";
					case E.TRANSLATING: return "TRANSLATING";
					case E.STREAMING: return "STREAMING";
					case E.UNRECOGNIZED:
					default: return "UNRECOGNIZED";
				}
			}
			function createBaseVideoTranslationHelpObject() {
				return {
					target: "",
					targetUrl: ""
				};
			}
			let D = {
				encode(d, f = new BinaryWriter()) {
					return d.target !== "" && f.uint32(10).string(d.target), d.targetUrl !== "" && f.uint32(18).string(d.targetUrl), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationHelpObject();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.target = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.targetUrl = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						target: isSet(d.target) ? globalThis.String(d.target) : "",
						targetUrl: isSet(d.targetUrl) ? globalThis.String(d.targetUrl) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.target !== "" && (f.target = d.target), d.targetUrl !== "" && (f.targetUrl = d.targetUrl), f;
				},
				create(d) {
					return D.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationHelpObject();
					return f.target = d.target ?? "", f.targetUrl = d.targetUrl ?? "", f;
				}
			};
			function createBaseVideoTranslationRequest() {
				return {
					url: "",
					deviceId: void 0,
					firstRequest: !1,
					duration: 0,
					unknown0: 0,
					language: "",
					forceSourceLang: !1,
					unknown1: 0,
					translationHelp: [],
					wasStream: !1,
					responseLanguage: "",
					unknown2: 0,
					unknown3: 0,
					bypassCache: !1,
					useLivelyVoice: !1,
					videoTitle: ""
				};
			}
			let O = {
				encode(d, f = new BinaryWriter()) {
					d.url !== "" && f.uint32(26).string(d.url), d.deviceId !== void 0 && f.uint32(34).string(d.deviceId), d.firstRequest !== !1 && f.uint32(40).bool(d.firstRequest), d.duration !== 0 && f.uint32(49).double(d.duration), d.unknown0 !== 0 && f.uint32(56).int32(d.unknown0), d.language !== "" && f.uint32(66).string(d.language), d.forceSourceLang !== !1 && f.uint32(72).bool(d.forceSourceLang), d.unknown1 !== 0 && f.uint32(80).int32(d.unknown1);
					for (let p of d.translationHelp) D.encode(p, f.uint32(90).fork()).join();
					return d.wasStream !== !1 && f.uint32(104).bool(d.wasStream), d.responseLanguage !== "" && f.uint32(114).string(d.responseLanguage), d.unknown2 !== 0 && f.uint32(120).int32(d.unknown2), d.unknown3 !== 0 && f.uint32(128).int32(d.unknown3), d.bypassCache !== !1 && f.uint32(136).bool(d.bypassCache), d.useLivelyVoice !== !1 && f.uint32(144).bool(d.useLivelyVoice), d.videoTitle !== "" && f.uint32(154).string(d.videoTitle), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 3:
								if (d !== 26) break;
								h.url = p.string();
								continue;
							case 4:
								if (d !== 34) break;
								h.deviceId = p.string();
								continue;
							case 5:
								if (d !== 40) break;
								h.firstRequest = p.bool();
								continue;
							case 6:
								if (d !== 49) break;
								h.duration = p.double();
								continue;
							case 7:
								if (d !== 56) break;
								h.unknown0 = p.int32();
								continue;
							case 8:
								if (d !== 66) break;
								h.language = p.string();
								continue;
							case 9:
								if (d !== 72) break;
								h.forceSourceLang = p.bool();
								continue;
							case 10:
								if (d !== 80) break;
								h.unknown1 = p.int32();
								continue;
							case 11:
								if (d !== 90) break;
								h.translationHelp.push(D.decode(p, p.uint32()));
								continue;
							case 13:
								if (d !== 104) break;
								h.wasStream = p.bool();
								continue;
							case 14:
								if (d !== 114) break;
								h.responseLanguage = p.string();
								continue;
							case 15:
								if (d !== 120) break;
								h.unknown2 = p.int32();
								continue;
							case 16:
								if (d !== 128) break;
								h.unknown3 = p.int32();
								continue;
							case 17:
								if (d !== 136) break;
								h.bypassCache = p.bool();
								continue;
							case 18:
								if (d !== 144) break;
								h.useLivelyVoice = p.bool();
								continue;
							case 19:
								if (d !== 154) break;
								h.videoTitle = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						deviceId: isSet(d.deviceId) ? globalThis.String(d.deviceId) : void 0,
						firstRequest: isSet(d.firstRequest) ? globalThis.Boolean(d.firstRequest) : !1,
						duration: isSet(d.duration) ? globalThis.Number(d.duration) : 0,
						unknown0: isSet(d.unknown0) ? globalThis.Number(d.unknown0) : 0,
						language: isSet(d.language) ? globalThis.String(d.language) : "",
						forceSourceLang: isSet(d.forceSourceLang) ? globalThis.Boolean(d.forceSourceLang) : !1,
						unknown1: isSet(d.unknown1) ? globalThis.Number(d.unknown1) : 0,
						translationHelp: globalThis.Array.isArray(d?.translationHelp) ? d.translationHelp.map((d) => D.fromJSON(d)) : [],
						wasStream: isSet(d.wasStream) ? globalThis.Boolean(d.wasStream) : !1,
						responseLanguage: isSet(d.responseLanguage) ? globalThis.String(d.responseLanguage) : "",
						unknown2: isSet(d.unknown2) ? globalThis.Number(d.unknown2) : 0,
						unknown3: isSet(d.unknown3) ? globalThis.Number(d.unknown3) : 0,
						bypassCache: isSet(d.bypassCache) ? globalThis.Boolean(d.bypassCache) : !1,
						useLivelyVoice: isSet(d.useLivelyVoice) ? globalThis.Boolean(d.useLivelyVoice) : !1,
						videoTitle: isSet(d.videoTitle) ? globalThis.String(d.videoTitle) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.url !== "" && (f.url = d.url), d.deviceId !== void 0 && (f.deviceId = d.deviceId), d.firstRequest !== !1 && (f.firstRequest = d.firstRequest), d.duration !== 0 && (f.duration = d.duration), d.unknown0 !== 0 && (f.unknown0 = Math.round(d.unknown0)), d.language !== "" && (f.language = d.language), d.forceSourceLang !== !1 && (f.forceSourceLang = d.forceSourceLang), d.unknown1 !== 0 && (f.unknown1 = Math.round(d.unknown1)), d.translationHelp?.length && (f.translationHelp = d.translationHelp.map((d) => D.toJSON(d))), d.wasStream !== !1 && (f.wasStream = d.wasStream), d.responseLanguage !== "" && (f.responseLanguage = d.responseLanguage), d.unknown2 !== 0 && (f.unknown2 = Math.round(d.unknown2)), d.unknown3 !== 0 && (f.unknown3 = Math.round(d.unknown3)), d.bypassCache !== !1 && (f.bypassCache = d.bypassCache), d.useLivelyVoice !== !1 && (f.useLivelyVoice = d.useLivelyVoice), d.videoTitle !== "" && (f.videoTitle = d.videoTitle), f;
				},
				create(d) {
					return O.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationRequest();
					return f.url = d.url ?? "", f.deviceId = d.deviceId ?? void 0, f.firstRequest = d.firstRequest ?? !1, f.duration = d.duration ?? 0, f.unknown0 = d.unknown0 ?? 0, f.language = d.language ?? "", f.forceSourceLang = d.forceSourceLang ?? !1, f.unknown1 = d.unknown1 ?? 0, f.translationHelp = d.translationHelp?.map((d) => D.fromPartial(d)) || [], f.wasStream = d.wasStream ?? !1, f.responseLanguage = d.responseLanguage ?? "", f.unknown2 = d.unknown2 ?? 0, f.unknown3 = d.unknown3 ?? 0, f.bypassCache = d.bypassCache ?? !1, f.useLivelyVoice = d.useLivelyVoice ?? !1, f.videoTitle = d.videoTitle ?? "", f;
				}
			};
			function createBaseVideoTranslationResponse() {
				return {
					url: void 0,
					duration: void 0,
					status: 0,
					remainingTime: void 0,
					unknown0: void 0,
					translationId: "",
					language: void 0,
					message: void 0,
					isLivelyVoice: !1,
					unknown2: void 0,
					shouldRetry: void 0,
					unknown3: void 0
				};
			}
			let A = {
				encode(d, f = new BinaryWriter()) {
					return d.url !== void 0 && f.uint32(10).string(d.url), d.duration !== void 0 && f.uint32(17).double(d.duration), d.status !== 0 && f.uint32(32).int32(d.status), d.remainingTime !== void 0 && f.uint32(40).int32(d.remainingTime), d.unknown0 !== void 0 && f.uint32(48).int32(d.unknown0), d.translationId !== "" && f.uint32(58).string(d.translationId), d.language !== void 0 && f.uint32(66).string(d.language), d.message !== void 0 && f.uint32(74).string(d.message), d.isLivelyVoice !== !1 && f.uint32(80).bool(d.isLivelyVoice), d.unknown2 !== void 0 && f.uint32(88).int32(d.unknown2), d.shouldRetry !== void 0 && f.uint32(96).int32(d.shouldRetry), d.unknown3 !== void 0 && f.uint32(104).int32(d.unknown3), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationResponse();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.url = p.string();
								continue;
							case 2:
								if (d !== 17) break;
								h.duration = p.double();
								continue;
							case 4:
								if (d !== 32) break;
								h.status = p.int32();
								continue;
							case 5:
								if (d !== 40) break;
								h.remainingTime = p.int32();
								continue;
							case 6:
								if (d !== 48) break;
								h.unknown0 = p.int32();
								continue;
							case 7:
								if (d !== 58) break;
								h.translationId = p.string();
								continue;
							case 8:
								if (d !== 66) break;
								h.language = p.string();
								continue;
							case 9:
								if (d !== 74) break;
								h.message = p.string();
								continue;
							case 10:
								if (d !== 80) break;
								h.isLivelyVoice = p.bool();
								continue;
							case 11:
								if (d !== 88) break;
								h.unknown2 = p.int32();
								continue;
							case 12:
								if (d !== 96) break;
								h.shouldRetry = p.int32();
								continue;
							case 13:
								if (d !== 104) break;
								h.unknown3 = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						url: isSet(d.url) ? globalThis.String(d.url) : void 0,
						duration: isSet(d.duration) ? globalThis.Number(d.duration) : void 0,
						status: isSet(d.status) ? globalThis.Number(d.status) : 0,
						remainingTime: isSet(d.remainingTime) ? globalThis.Number(d.remainingTime) : void 0,
						unknown0: isSet(d.unknown0) ? globalThis.Number(d.unknown0) : void 0,
						translationId: isSet(d.translationId) ? globalThis.String(d.translationId) : "",
						language: isSet(d.language) ? globalThis.String(d.language) : void 0,
						message: isSet(d.message) ? globalThis.String(d.message) : void 0,
						isLivelyVoice: isSet(d.isLivelyVoice) ? globalThis.Boolean(d.isLivelyVoice) : !1,
						unknown2: isSet(d.unknown2) ? globalThis.Number(d.unknown2) : void 0,
						shouldRetry: isSet(d.shouldRetry) ? globalThis.Number(d.shouldRetry) : void 0,
						unknown3: isSet(d.unknown3) ? globalThis.Number(d.unknown3) : void 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.url !== void 0 && (f.url = d.url), d.duration !== void 0 && (f.duration = d.duration), d.status !== 0 && (f.status = Math.round(d.status)), d.remainingTime !== void 0 && (f.remainingTime = Math.round(d.remainingTime)), d.unknown0 !== void 0 && (f.unknown0 = Math.round(d.unknown0)), d.translationId !== "" && (f.translationId = d.translationId), d.language !== void 0 && (f.language = d.language), d.message !== void 0 && (f.message = d.message), d.isLivelyVoice !== !1 && (f.isLivelyVoice = d.isLivelyVoice), d.unknown2 !== void 0 && (f.unknown2 = Math.round(d.unknown2)), d.shouldRetry !== void 0 && (f.shouldRetry = Math.round(d.shouldRetry)), d.unknown3 !== void 0 && (f.unknown3 = Math.round(d.unknown3)), f;
				},
				create(d) {
					return A.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationResponse();
					return f.url = d.url ?? void 0, f.duration = d.duration ?? void 0, f.status = d.status ?? 0, f.remainingTime = d.remainingTime ?? void 0, f.unknown0 = d.unknown0 ?? void 0, f.translationId = d.translationId ?? "", f.language = d.language ?? void 0, f.message = d.message ?? void 0, f.isLivelyVoice = d.isLivelyVoice ?? !1, f.unknown2 = d.unknown2 ?? void 0, f.shouldRetry = d.shouldRetry ?? void 0, f.unknown3 = d.unknown3 ?? void 0, f;
				}
			};
			function createBaseVideoTranslationCacheItem() {
				return {
					status: 0,
					remainingTime: void 0,
					message: void 0,
					unknown0: void 0
				};
			}
			let j = {
				encode(d, f = new BinaryWriter()) {
					return d.status !== 0 && f.uint32(8).int32(d.status), d.remainingTime !== void 0 && f.uint32(16).int32(d.remainingTime), d.message !== void 0 && f.uint32(26).string(d.message), d.unknown0 !== void 0 && f.uint32(32).int32(d.unknown0), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationCacheItem();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 8) break;
								h.status = p.int32();
								continue;
							case 2:
								if (d !== 16) break;
								h.remainingTime = p.int32();
								continue;
							case 3:
								if (d !== 26) break;
								h.message = p.string();
								continue;
							case 4:
								if (d !== 32) break;
								h.unknown0 = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						status: isSet(d.status) ? globalThis.Number(d.status) : 0,
						remainingTime: isSet(d.remainingTime) ? globalThis.Number(d.remainingTime) : void 0,
						message: isSet(d.message) ? globalThis.String(d.message) : void 0,
						unknown0: isSet(d.unknown0) ? globalThis.Number(d.unknown0) : void 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.status !== 0 && (f.status = Math.round(d.status)), d.remainingTime !== void 0 && (f.remainingTime = Math.round(d.remainingTime)), d.message !== void 0 && (f.message = d.message), d.unknown0 !== void 0 && (f.unknown0 = Math.round(d.unknown0)), f;
				},
				create(d) {
					return j.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationCacheItem();
					return f.status = d.status ?? 0, f.remainingTime = d.remainingTime ?? void 0, f.message = d.message ?? void 0, f.unknown0 = d.unknown0 ?? void 0, f;
				}
			};
			function createBaseVideoTranslationCacheRequest() {
				return {
					url: "",
					duration: 0,
					language: "",
					responseLanguage: ""
				};
			}
			let F = {
				encode(d, f = new BinaryWriter()) {
					return d.url !== "" && f.uint32(10).string(d.url), d.duration !== 0 && f.uint32(17).double(d.duration), d.language !== "" && f.uint32(26).string(d.language), d.responseLanguage !== "" && f.uint32(34).string(d.responseLanguage), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationCacheRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.url = p.string();
								continue;
							case 2:
								if (d !== 17) break;
								h.duration = p.double();
								continue;
							case 3:
								if (d !== 26) break;
								h.language = p.string();
								continue;
							case 4:
								if (d !== 34) break;
								h.responseLanguage = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						duration: isSet(d.duration) ? globalThis.Number(d.duration) : 0,
						language: isSet(d.language) ? globalThis.String(d.language) : "",
						responseLanguage: isSet(d.responseLanguage) ? globalThis.String(d.responseLanguage) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.url !== "" && (f.url = d.url), d.duration !== 0 && (f.duration = d.duration), d.language !== "" && (f.language = d.language), d.responseLanguage !== "" && (f.responseLanguage = d.responseLanguage), f;
				},
				create(d) {
					return F.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationCacheRequest();
					return f.url = d.url ?? "", f.duration = d.duration ?? 0, f.language = d.language ?? "", f.responseLanguage = d.responseLanguage ?? "", f;
				}
			};
			function createBaseVideoTranslationCacheResponse() {
				return {
					default: void 0,
					cloning: void 0
				};
			}
			let U = {
				encode(d, f = new BinaryWriter()) {
					return d.default !== void 0 && j.encode(d.default, f.uint32(10).fork()).join(), d.cloning !== void 0 && j.encode(d.cloning, f.uint32(18).fork()).join(), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationCacheResponse();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.default = j.decode(p, p.uint32());
								continue;
							case 2:
								if (d !== 18) break;
								h.cloning = j.decode(p, p.uint32());
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						default: isSet(d.default) ? j.fromJSON(d.default) : void 0,
						cloning: isSet(d.cloning) ? j.fromJSON(d.cloning) : void 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.default !== void 0 && (f.default = j.toJSON(d.default)), d.cloning !== void 0 && (f.cloning = j.toJSON(d.cloning)), f;
				},
				create(d) {
					return U.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationCacheResponse();
					return f.default = d.default !== void 0 && d.default !== null ? j.fromPartial(d.default) : void 0, f.cloning = d.cloning !== void 0 && d.cloning !== null ? j.fromPartial(d.cloning) : void 0, f;
				}
			};
			function createBaseAudioBufferObject() {
				return {
					audioFile: new Uint8Array(),
					fileId: ""
				};
			}
			let W = {
				encode(d, f = new BinaryWriter()) {
					return d.audioFile.length !== 0 && f.uint32(18).bytes(d.audioFile), d.fileId !== "" && f.uint32(10).string(d.fileId), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseAudioBufferObject();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 2:
								if (d !== 18) break;
								h.audioFile = p.bytes();
								continue;
							case 1:
								if (d !== 10) break;
								h.fileId = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						audioFile: isSet(d.audioFile) ? bytesFromBase64(d.audioFile) : new Uint8Array(),
						fileId: isSet(d.fileId) ? globalThis.String(d.fileId) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.audioFile.length !== 0 && (f.audioFile = base64FromBytes(d.audioFile)), d.fileId !== "" && (f.fileId = d.fileId), f;
				},
				create(d) {
					return W.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseAudioBufferObject();
					return f.audioFile = d.audioFile ?? new Uint8Array(), f.fileId = d.fileId ?? "", f;
				}
			};
			function createBasePartialAudioBufferObject() {
				return {
					audioFile: new Uint8Array(),
					chunkId: 0
				};
			}
			let G = {
				encode(d, f = new BinaryWriter()) {
					return d.audioFile.length !== 0 && f.uint32(18).bytes(d.audioFile), d.chunkId !== 0 && f.uint32(8).int32(d.chunkId), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBasePartialAudioBufferObject();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 2:
								if (d !== 18) break;
								h.audioFile = p.bytes();
								continue;
							case 1:
								if (d !== 8) break;
								h.chunkId = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						audioFile: isSet(d.audioFile) ? bytesFromBase64(d.audioFile) : new Uint8Array(),
						chunkId: isSet(d.chunkId) ? globalThis.Number(d.chunkId) : 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.audioFile.length !== 0 && (f.audioFile = base64FromBytes(d.audioFile)), d.chunkId !== 0 && (f.chunkId = Math.round(d.chunkId)), f;
				},
				create(d) {
					return G.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBasePartialAudioBufferObject();
					return f.audioFile = d.audioFile ?? new Uint8Array(), f.chunkId = d.chunkId ?? 0, f;
				}
			};
			function createBaseChunkAudioObject() {
				return {
					audioBuffer: void 0,
					audioPartsLength: 0,
					fileId: "",
					version: 0
				};
			}
			let K = {
				encode(d, f = new BinaryWriter()) {
					return d.audioBuffer !== void 0 && G.encode(d.audioBuffer, f.uint32(10).fork()).join(), d.audioPartsLength !== 0 && f.uint32(16).int32(d.audioPartsLength), d.fileId !== "" && f.uint32(26).string(d.fileId), d.version !== 0 && f.uint32(32).int32(d.version), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseChunkAudioObject();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.audioBuffer = G.decode(p, p.uint32());
								continue;
							case 2:
								if (d !== 16) break;
								h.audioPartsLength = p.int32();
								continue;
							case 3:
								if (d !== 26) break;
								h.fileId = p.string();
								continue;
							case 4:
								if (d !== 32) break;
								h.version = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						audioBuffer: isSet(d.audioBuffer) ? G.fromJSON(d.audioBuffer) : void 0,
						audioPartsLength: isSet(d.audioPartsLength) ? globalThis.Number(d.audioPartsLength) : 0,
						fileId: isSet(d.fileId) ? globalThis.String(d.fileId) : "",
						version: isSet(d.version) ? globalThis.Number(d.version) : 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.audioBuffer !== void 0 && (f.audioBuffer = G.toJSON(d.audioBuffer)), d.audioPartsLength !== 0 && (f.audioPartsLength = Math.round(d.audioPartsLength)), d.fileId !== "" && (f.fileId = d.fileId), d.version !== 0 && (f.version = Math.round(d.version)), f;
				},
				create(d) {
					return K.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseChunkAudioObject();
					return f.audioBuffer = d.audioBuffer !== void 0 && d.audioBuffer !== null ? G.fromPartial(d.audioBuffer) : void 0, f.audioPartsLength = d.audioPartsLength ?? 0, f.fileId = d.fileId ?? "", f.version = d.version ?? 0, f;
				}
			};
			function createBaseVideoTranslationAudioRequest() {
				return {
					translationId: "",
					url: "",
					partialAudioInfo: void 0,
					audioInfo: void 0
				};
			}
			let q = {
				encode(d, f = new BinaryWriter()) {
					return d.translationId !== "" && f.uint32(10).string(d.translationId), d.url !== "" && f.uint32(18).string(d.url), d.partialAudioInfo !== void 0 && K.encode(d.partialAudioInfo, f.uint32(34).fork()).join(), d.audioInfo !== void 0 && W.encode(d.audioInfo, f.uint32(50).fork()).join(), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationAudioRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.translationId = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.url = p.string();
								continue;
							case 4:
								if (d !== 34) break;
								h.partialAudioInfo = K.decode(p, p.uint32());
								continue;
							case 6:
								if (d !== 50) break;
								h.audioInfo = W.decode(p, p.uint32());
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						translationId: isSet(d.translationId) ? globalThis.String(d.translationId) : "",
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						partialAudioInfo: isSet(d.partialAudioInfo) ? K.fromJSON(d.partialAudioInfo) : void 0,
						audioInfo: isSet(d.audioInfo) ? W.fromJSON(d.audioInfo) : void 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.translationId !== "" && (f.translationId = d.translationId), d.url !== "" && (f.url = d.url), d.partialAudioInfo !== void 0 && (f.partialAudioInfo = K.toJSON(d.partialAudioInfo)), d.audioInfo !== void 0 && (f.audioInfo = W.toJSON(d.audioInfo)), f;
				},
				create(d) {
					return q.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationAudioRequest();
					return f.translationId = d.translationId ?? "", f.url = d.url ?? "", f.partialAudioInfo = d.partialAudioInfo !== void 0 && d.partialAudioInfo !== null ? K.fromPartial(d.partialAudioInfo) : void 0, f.audioInfo = d.audioInfo !== void 0 && d.audioInfo !== null ? W.fromPartial(d.audioInfo) : void 0, f;
				}
			};
			function createBaseVideoTranslationAudioResponse() {
				return {
					status: 0,
					remainingChunks: []
				};
			}
			let J = {
				encode(d, f = new BinaryWriter()) {
					d.status !== 0 && f.uint32(8).int32(d.status);
					for (let p of d.remainingChunks) f.uint32(18).string(p);
					return f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseVideoTranslationAudioResponse();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 8) break;
								h.status = p.int32();
								continue;
							case 2:
								if (d !== 18) break;
								h.remainingChunks.push(p.string());
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						status: isSet(d.status) ? globalThis.Number(d.status) : 0,
						remainingChunks: globalThis.Array.isArray(d?.remainingChunks) ? d.remainingChunks.map((d) => globalThis.String(d)) : []
					};
				},
				toJSON(d) {
					let f = {};
					return d.status !== 0 && (f.status = Math.round(d.status)), d.remainingChunks?.length && (f.remainingChunks = d.remainingChunks), f;
				},
				create(d) {
					return J.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseVideoTranslationAudioResponse();
					return f.status = d.status ?? 0, f.remainingChunks = d.remainingChunks?.map((d) => d) || [], f;
				}
			};
			function createBaseSubtitlesObject() {
				return {
					language: "",
					url: "",
					unknown0: 0,
					translatedLanguage: "",
					translatedUrl: "",
					unknown1: 0,
					unknown2: 0
				};
			}
			let Y = {
				encode(d, f = new BinaryWriter()) {
					return d.language !== "" && f.uint32(10).string(d.language), d.url !== "" && f.uint32(18).string(d.url), d.unknown0 !== 0 && f.uint32(24).int32(d.unknown0), d.translatedLanguage !== "" && f.uint32(34).string(d.translatedLanguage), d.translatedUrl !== "" && f.uint32(42).string(d.translatedUrl), d.unknown1 !== 0 && f.uint32(48).int32(d.unknown1), d.unknown2 !== 0 && f.uint32(56).int32(d.unknown2), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseSubtitlesObject();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.language = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.url = p.string();
								continue;
							case 3:
								if (d !== 24) break;
								h.unknown0 = p.int32();
								continue;
							case 4:
								if (d !== 34) break;
								h.translatedLanguage = p.string();
								continue;
							case 5:
								if (d !== 42) break;
								h.translatedUrl = p.string();
								continue;
							case 6:
								if (d !== 48) break;
								h.unknown1 = p.int32();
								continue;
							case 7:
								if (d !== 56) break;
								h.unknown2 = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						language: isSet(d.language) ? globalThis.String(d.language) : "",
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						unknown0: isSet(d.unknown0) ? globalThis.Number(d.unknown0) : 0,
						translatedLanguage: isSet(d.translatedLanguage) ? globalThis.String(d.translatedLanguage) : "",
						translatedUrl: isSet(d.translatedUrl) ? globalThis.String(d.translatedUrl) : "",
						unknown1: isSet(d.unknown1) ? globalThis.Number(d.unknown1) : 0,
						unknown2: isSet(d.unknown2) ? globalThis.Number(d.unknown2) : 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.language !== "" && (f.language = d.language), d.url !== "" && (f.url = d.url), d.unknown0 !== 0 && (f.unknown0 = Math.round(d.unknown0)), d.translatedLanguage !== "" && (f.translatedLanguage = d.translatedLanguage), d.translatedUrl !== "" && (f.translatedUrl = d.translatedUrl), d.unknown1 !== 0 && (f.unknown1 = Math.round(d.unknown1)), d.unknown2 !== 0 && (f.unknown2 = Math.round(d.unknown2)), f;
				},
				create(d) {
					return Y.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseSubtitlesObject();
					return f.language = d.language ?? "", f.url = d.url ?? "", f.unknown0 = d.unknown0 ?? 0, f.translatedLanguage = d.translatedLanguage ?? "", f.translatedUrl = d.translatedUrl ?? "", f.unknown1 = d.unknown1 ?? 0, f.unknown2 = d.unknown2 ?? 0, f;
				}
			};
			function createBaseSubtitlesRequest() {
				return {
					url: "",
					language: ""
				};
			}
			let X = {
				encode(d, f = new BinaryWriter()) {
					return d.url !== "" && f.uint32(10).string(d.url), d.language !== "" && f.uint32(18).string(d.language), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseSubtitlesRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.url = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.language = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						language: isSet(d.language) ? globalThis.String(d.language) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.url !== "" && (f.url = d.url), d.language !== "" && (f.language = d.language), f;
				},
				create(d) {
					return X.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseSubtitlesRequest();
					return f.url = d.url ?? "", f.language = d.language ?? "", f;
				}
			};
			function createBaseSubtitlesResponse() {
				return {
					waiting: !1,
					subtitles: []
				};
			}
			let Z = {
				encode(d, f = new BinaryWriter()) {
					d.waiting !== !1 && f.uint32(8).bool(d.waiting);
					for (let p of d.subtitles) Y.encode(p, f.uint32(18).fork()).join();
					return f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseSubtitlesResponse();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 8) break;
								h.waiting = p.bool();
								continue;
							case 2:
								if (d !== 18) break;
								h.subtitles.push(Y.decode(p, p.uint32()));
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						waiting: isSet(d.waiting) ? globalThis.Boolean(d.waiting) : !1,
						subtitles: globalThis.Array.isArray(d?.subtitles) ? d.subtitles.map((d) => Y.fromJSON(d)) : []
					};
				},
				toJSON(d) {
					let f = {};
					return d.waiting !== !1 && (f.waiting = d.waiting), d.subtitles?.length && (f.subtitles = d.subtitles.map((d) => Y.toJSON(d))), f;
				},
				create(d) {
					return Z.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseSubtitlesResponse();
					return f.waiting = d.waiting ?? !1, f.subtitles = d.subtitles?.map((d) => Y.fromPartial(d)) || [], f;
				}
			};
			function createBaseStreamTranslationObject() {
				return {
					url: "",
					timestamp: ""
				};
			}
			let Q = {
				encode(d, f = new BinaryWriter()) {
					return d.url !== "" && f.uint32(10).string(d.url), d.timestamp !== "" && f.uint32(18).string(d.timestamp), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseStreamTranslationObject();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.url = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.timestamp = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						timestamp: isSet(d.timestamp) ? globalThis.String(d.timestamp) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.url !== "" && (f.url = d.url), d.timestamp !== "" && (f.timestamp = d.timestamp), f;
				},
				create(d) {
					return Q.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseStreamTranslationObject();
					return f.url = d.url ?? "", f.timestamp = d.timestamp ?? "", f;
				}
			};
			function createBaseStreamTranslationRequest() {
				return {
					url: "",
					language: "",
					responseLanguage: "",
					unknown0: 0,
					unknown1: 0
				};
			}
			let $ = {
				encode(d, f = new BinaryWriter()) {
					return d.url !== "" && f.uint32(10).string(d.url), d.language !== "" && f.uint32(18).string(d.language), d.responseLanguage !== "" && f.uint32(26).string(d.responseLanguage), d.unknown0 !== 0 && f.uint32(40).int32(d.unknown0), d.unknown1 !== 0 && f.uint32(48).int32(d.unknown1), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseStreamTranslationRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.url = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.language = p.string();
								continue;
							case 3:
								if (d !== 26) break;
								h.responseLanguage = p.string();
								continue;
							case 5:
								if (d !== 40) break;
								h.unknown0 = p.int32();
								continue;
							case 6:
								if (d !== 48) break;
								h.unknown1 = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						url: isSet(d.url) ? globalThis.String(d.url) : "",
						language: isSet(d.language) ? globalThis.String(d.language) : "",
						responseLanguage: isSet(d.responseLanguage) ? globalThis.String(d.responseLanguage) : "",
						unknown0: isSet(d.unknown0) ? globalThis.Number(d.unknown0) : 0,
						unknown1: isSet(d.unknown1) ? globalThis.Number(d.unknown1) : 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.url !== "" && (f.url = d.url), d.language !== "" && (f.language = d.language), d.responseLanguage !== "" && (f.responseLanguage = d.responseLanguage), d.unknown0 !== 0 && (f.unknown0 = Math.round(d.unknown0)), d.unknown1 !== 0 && (f.unknown1 = Math.round(d.unknown1)), f;
				},
				create(d) {
					return $.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseStreamTranslationRequest();
					return f.url = d.url ?? "", f.language = d.language ?? "", f.responseLanguage = d.responseLanguage ?? "", f.unknown0 = d.unknown0 ?? 0, f.unknown1 = d.unknown1 ?? 0, f;
				}
			};
			function createBaseStreamTranslationResponse() {
				return {
					interval: 0,
					translatedInfo: void 0,
					pingId: void 0
				};
			}
			let ee = {
				encode(d, f = new BinaryWriter()) {
					return d.interval !== 0 && f.uint32(8).int32(d.interval), d.translatedInfo !== void 0 && Q.encode(d.translatedInfo, f.uint32(18).fork()).join(), d.pingId !== void 0 && f.uint32(24).int32(d.pingId), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseStreamTranslationResponse();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 8) break;
								h.interval = p.int32();
								continue;
							case 2:
								if (d !== 18) break;
								h.translatedInfo = Q.decode(p, p.uint32());
								continue;
							case 3:
								if (d !== 24) break;
								h.pingId = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						interval: isSet(d.interval) ? streamIntervalFromJSON(d.interval) : 0,
						translatedInfo: isSet(d.translatedInfo) ? Q.fromJSON(d.translatedInfo) : void 0,
						pingId: isSet(d.pingId) ? globalThis.Number(d.pingId) : void 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.interval !== 0 && (f.interval = streamIntervalToJSON(d.interval)), d.translatedInfo !== void 0 && (f.translatedInfo = Q.toJSON(d.translatedInfo)), d.pingId !== void 0 && (f.pingId = Math.round(d.pingId)), f;
				},
				create(d) {
					return ee.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseStreamTranslationResponse();
					return f.interval = d.interval ?? 0, f.translatedInfo = d.translatedInfo !== void 0 && d.translatedInfo !== null ? Q.fromPartial(d.translatedInfo) : void 0, f.pingId = d.pingId ?? void 0, f;
				}
			};
			function createBaseStreamPingRequest() {
				return { pingId: 0 };
			}
			let te = {
				encode(d, f = new BinaryWriter()) {
					return d.pingId !== 0 && f.uint32(8).int32(d.pingId), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseStreamPingRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 8) break;
								h.pingId = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return { pingId: isSet(d.pingId) ? globalThis.Number(d.pingId) : 0 };
				},
				toJSON(d) {
					let f = {};
					return d.pingId !== 0 && (f.pingId = Math.round(d.pingId)), f;
				},
				create(d) {
					return te.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseStreamPingRequest();
					return f.pingId = d.pingId ?? 0, f;
				}
			};
			function createBaseYandexSessionRequest() {
				return {
					uuid: "",
					module: ""
				};
			}
			let ne = {
				encode(d, f = new BinaryWriter()) {
					return d.uuid !== "" && f.uint32(10).string(d.uuid), d.module !== "" && f.uint32(18).string(d.module), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseYandexSessionRequest();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.uuid = p.string();
								continue;
							case 2:
								if (d !== 18) break;
								h.module = p.string();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						uuid: isSet(d.uuid) ? globalThis.String(d.uuid) : "",
						module: isSet(d.module) ? globalThis.String(d.module) : ""
					};
				},
				toJSON(d) {
					let f = {};
					return d.uuid !== "" && (f.uuid = d.uuid), d.module !== "" && (f.module = d.module), f;
				},
				create(d) {
					return ne.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseYandexSessionRequest();
					return f.uuid = d.uuid ?? "", f.module = d.module ?? "", f;
				}
			};
			function createBaseYandexSessionResponse() {
				return {
					secretKey: "",
					expires: 0
				};
			}
			let re = {
				encode(d, f = new BinaryWriter()) {
					return d.secretKey !== "" && f.uint32(10).string(d.secretKey), d.expires !== 0 && f.uint32(16).int32(d.expires), f;
				},
				decode(d, f) {
					let p = d instanceof BinaryReader ? d : new BinaryReader(d), m = f === void 0 ? p.len : p.pos + f, h = createBaseYandexSessionResponse();
					for (; p.pos < m;) {
						let d = p.uint32();
						switch (d >>> 3) {
							case 1:
								if (d !== 10) break;
								h.secretKey = p.string();
								continue;
							case 2:
								if (d !== 16) break;
								h.expires = p.int32();
								continue;
						}
						if ((d & 7) == 4 || d === 0) break;
						p.skip(d & 7);
					}
					return h;
				},
				fromJSON(d) {
					return {
						secretKey: isSet(d.secretKey) ? globalThis.String(d.secretKey) : "",
						expires: isSet(d.expires) ? globalThis.Number(d.expires) : 0
					};
				},
				toJSON(d) {
					let f = {};
					return d.secretKey !== "" && (f.secretKey = d.secretKey), d.expires !== 0 && (f.expires = Math.round(d.expires)), f;
				},
				create(d) {
					return re.fromPartial(d ?? {});
				},
				fromPartial(d) {
					let f = createBaseYandexSessionResponse();
					return f.secretKey = d.secretKey ?? "", f.expires = d.expires ?? 0, f;
				}
			};
			function bytesFromBase64(d) {
				if (globalThis.Buffer) return Uint8Array.from(globalThis.Buffer.from(d, "base64"));
				{
					let f = globalThis.atob(d), p = new Uint8Array(f.length);
					for (let d = 0; d < f.length; ++d) p[d] = f.charCodeAt(d);
					return p;
				}
			}
			function base64FromBytes(d) {
				if (globalThis.Buffer) return globalThis.Buffer.from(d).toString("base64");
				{
					let f = [];
					return d.forEach((d) => {
						f.push(globalThis.String.fromCharCode(d));
					}), globalThis.btoa(f.join(""));
				}
			}
			function isSet(d) {
				return d != null;
			}
		},
		"./node_modules/@vot.js/shared/dist/secure.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				C0: () => getSecYaHeaders,
				MG: () => v,
				bT: () => getHmacSha1,
				dD: () => getSignature,
				yk: () => getUUID
			});
			var m = p("./node_modules/@vot.js/shared/dist/data/config.js"), h = p("./node_modules/@vot.js/shared/dist/utils/logger.js");
			let { componentVersion: g } = m.A;
			async function getCrypto() {
				return typeof window < "u" && window.crypto ? window.crypto : await Promise.resolve().then(function webpackMissingModule() {
					var d = Error("Cannot find module 'node:crypto'");
					throw d.code = "MODULE_NOT_FOUND", d;
				});
			}
			let _ = new TextEncoder();
			async function signHMAC(d, f, p) {
				let m = await getCrypto(), h = await m.subtle.importKey("raw", _.encode(f), {
					name: "HMAC",
					hash: { name: d }
				}, !1, ["sign", "verify"]);
				return await m.subtle.sign("HMAC", h, p);
			}
			async function getSignature(d) {
				let f = await signHMAC("SHA-256", m.A.hmac, d);
				return new Uint8Array(f).reduce((d, f) => d + f.toString(16).padStart(2, "0"), "");
			}
			async function getSecYaHeaders(d, f, p, m) {
				let { secretKey: h, uuid: v } = f, b = `${v}:${m}:${g}`, x = _.encode(b), C = await getSignature(x);
				if (d === "Ya-Summary") return {
					[`X-${d}-Sk`]: h,
					[`X-${d}-Token`]: `${C}:${b}`
				};
				let w = await getSignature(p);
				return {
					[`${d}-Signature`]: w,
					[`Sec-${d}-Sk`]: h,
					[`Sec-${d}-Token`]: `${C}:${b}`
				};
			}
			function getUUID() {
				let d = "0123456789ABCDEF", f = "";
				for (let p = 0; p < 32; p++) {
					let p = Math.floor(Math.random() * 16);
					f += d[p];
				}
				return f;
			}
			async function getHmacSha1(d, f) {
				try {
					let p = _.encode(f), m = await signHMAC("SHA-1", d, p);
					return btoa(String.fromCharCode(...new Uint8Array(m)));
				} catch (d) {
					return h.A.error(d), !1;
				}
			}
			let v = {
				"sec-ch-ua": `"Chromium";v="134", "YaBrowser";v="${g.slice(0, 5)}", "Not?A_Brand";v="24", "Yowser";v="2.5"`,
				"sec-ch-ua-full-version-list": `"Chromium";v="134.0.6998.543", "YaBrowser";v="${g}", "Not?A_Brand";v="24.0.0.0", "Yowser";v="2.5"`,
				"Sec-Fetch-Mode": "no-cors"
			};
		},
		"./node_modules/@vot.js/shared/dist/types/logger.js": (d, f, p) => {
			"use strict";
			p.d(f, { T: () => m });
			var m;
			(function(d) {
				d[d.DEBUG = 0] = "DEBUG", d[d.INFO = 1] = "INFO", d[d.WARN = 2] = "WARN", d[d.ERROR = 3] = "ERROR", d[d.SILENCE = 4] = "SILENCE";
			})(m ||= {});
		},
		"./node_modules/@vot.js/shared/dist/utils/logger.js": (d, f, p) => {
			"use strict";
			p.d(f, { A: () => Logger });
			var m = p("./node_modules/@vot.js/shared/dist/data/config.js"), h = p("./node_modules/@vot.js/shared/dist/types/logger.js");
			class Logger {
				static prefix = `[vot.js v${m.A.version}]`;
				static canLog(d) {
					return m.A.loggerLevel <= d;
				}
				static log(...d) {
					Logger.canLog(h.T.DEBUG) && console.log(Logger.prefix, ...d);
				}
				static info(...d) {
					Logger.canLog(h.T.INFO) && console.info(Logger.prefix, ...d);
				}
				static warn(...d) {
					Logger.canLog(h.T.WARN) && console.warn(Logger.prefix, ...d);
				}
				static error(...d) {
					Logger.canLog(h.T.ERROR) && console.error(Logger.prefix, ...d);
				}
			}
		},
		"./node_modules/@vot.js/shared/dist/utils/subs.js": (d, f, p) => {
			"use strict";
			p.d(f, { vk: () => convertSubs });
			function convertToStrTime(d, f = ",") {
				let p = d / 1e3, m = Math.floor(p / 3600), h = Math.floor(p % 3600 / 60), g = Math.floor(p % 60), _ = Math.floor(d % 1e3);
				return `${m.toString().padStart(2, "0")}:${h.toString().padStart(2, "0")}:${g.toString().padStart(2, "0")}${f}${_.toString().padStart(3, "0")}`;
			}
			function convertToMSTime(d) {
				let f = d.split(" ")?.[0]?.split(":");
				f.length < 3 && f.unshift("00");
				let [p, m, h] = f, g = +h.replace(/[,.]/, ""), _ = m * 6e4, v = p * 36e5;
				return v + _ + g;
			}
			function convertSubsFromJSON(d, f = "srt") {
				let p = f === "vtt", m = p ? "." : ",", h = d.subtitles.map((d, f) => {
					let h = p ? "" : `${f + 1}\n`;
					return h + `${convertToStrTime(d.startMs, m)} --> ${convertToStrTime(d.startMs + d.durationMs, m)}\n${d.text}\n\n`;
				}).join("").trim();
				return p ? `WEBVTT\n\n${h}` : h;
			}
			function convertSubsToJSON(d, f = "srt") {
				let p = d.split(/\r?\n\r?\n/g);
				f === "vtt" && p.shift(), /^\d+\r?\n/.exec(p?.[0] ?? "") && (f = "srt");
				let m = +(f === "srt"), h = p.reduce((d, f) => {
					let p = f.trim().split("\n"), h = p[m], g = p.slice(m + 1).join("\n");
					if ((p.length !== 2 || !f.includes(" --> ")) && !h?.includes(" --> ")) return d.length === 0 || (d[d.length - 1].text += `\n\n${p.join("\n")}`), d;
					let [_, v] = h.split(" --> "), b = convertToMSTime(_), x = convertToMSTime(v), C = x - b;
					return d.push({
						text: g,
						startMs: b,
						durationMs: C,
						speakerId: "0"
					}), d;
				}, []);
				return {
					containsTokens: !1,
					subtitles: h
				};
			}
			function getSubsFormat(d) {
				return typeof d == "string" ? /^(WEBVTT([^\n]+)?)(\r?\n)/.exec(d) ? "vtt" : "srt" : "json";
			}
			function convertSubs(d, f = "srt") {
				let p = getSubsFormat(d);
				return p === f ? d : p === "json" ? convertSubsFromJSON(d, f) : (d = convertSubsToJSON(d, p), f === "json" ? d : convertSubsFromJSON(d, f));
			}
		},
		"./node_modules/@vot.js/shared/dist/utils/utils.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				ec: () => normalizeLang,
				fl: () => proxyMedia,
				lg: () => getTimestamp,
				u9: () => fetchWithTimeout
			});
			var m = p("./node_modules/@vot.js/shared/dist/data/config.js");
			let h = {
				afr: "af",
				aka: "ak",
				alb: "sq",
				amh: "am",
				ara: "ar",
				arm: "hy",
				asm: "as",
				aym: "ay",
				aze: "az",
				baq: "eu",
				bel: "be",
				ben: "bn",
				bos: "bs",
				bul: "bg",
				bur: "my",
				cat: "ca",
				chi: "zh",
				cos: "co",
				cze: "cs",
				dan: "da",
				div: "dv",
				dut: "nl",
				eng: "en",
				epo: "eo",
				est: "et",
				ewe: "ee",
				fin: "fi",
				fre: "fr",
				fry: "fy",
				geo: "ka",
				ger: "de",
				gla: "gd",
				gle: "ga",
				glg: "gl",
				gre: "el",
				grn: "gn",
				guj: "gu",
				hat: "ht",
				hau: "ha",
				hin: "hi",
				hrv: "hr",
				hun: "hu",
				ibo: "ig",
				ice: "is",
				ind: "id",
				ita: "it",
				jav: "jv",
				jpn: "ja",
				kan: "kn",
				kaz: "kk",
				khm: "km",
				kin: "rw",
				kir: "ky",
				kor: "ko",
				kur: "ku",
				lao: "lo",
				lat: "la",
				lav: "lv",
				lin: "ln",
				lit: "lt",
				ltz: "lb",
				lug: "lg",
				mac: "mk",
				mal: "ml",
				mao: "mi",
				mar: "mr",
				may: "ms",
				mlg: "mg",
				mlt: "mt",
				mon: "mn",
				nep: "ne",
				nor: "no",
				nya: "ny",
				ori: "or",
				orm: "om",
				pan: "pa",
				per: "fa",
				pol: "pl",
				por: "pt",
				pus: "ps",
				que: "qu",
				rum: "ro",
				rus: "ru",
				san: "sa",
				sin: "si",
				slo: "sk",
				slv: "sl",
				smo: "sm",
				sna: "sn",
				snd: "sd",
				som: "so",
				sot: "st",
				spa: "es",
				srp: "sr",
				sun: "su",
				swa: "sw",
				swe: "sv",
				tam: "ta",
				tat: "tt",
				tel: "te",
				tgk: "tg",
				tha: "th",
				tir: "ti",
				tso: "ts",
				tuk: "tk",
				tur: "tr",
				uig: "ug",
				ukr: "uk",
				urd: "ur",
				uzb: "uz",
				vie: "vi",
				wel: "cy",
				xho: "xh",
				yid: "yi",
				yor: "yo",
				zul: "zu"
			};
			async function fetchWithTimeout(d, f = { headers: { "User-Agent": m.A.userAgent } }) {
				let { timeout: p = 3e3,...h } = f, g = new AbortController(), _ = setTimeout(() => g.abort(), p), v = await fetch(d, {
					signal: g.signal,
					...h
				});
				return clearTimeout(_), v;
			}
			function getTimestamp() {
				return Math.floor(Date.now() / 1e3);
			}
			function normalizeLang(d) {
				return d.length === 3 ? h[d] : d.toLowerCase().split(/[_;-]/)[0].trim();
			}
			function proxyMedia(d, f = "mp4") {
				let p = `https://${m.A.mediaProxy}/v1/proxy/video.${f}?format=base64&force=true`;
				return d instanceof URL ? `${p}&url=${btoa(d.href)}&origin=${d.origin}&referer=${d.origin}` : `${p}&url=${btoa(d)}`;
			}
		},
		"./node_modules/bowser/es5.js": function(d) {
			(function(f, p) {
				d.exports = p();
			})(this, function() {
				return function(d) {
					var f = {};
					function r(p) {
						if (f[p]) return f[p].exports;
						var m = f[p] = {
							i: p,
							l: !1,
							exports: {}
						};
						return d[p].call(m.exports, m, m.exports, r), m.l = !0, m.exports;
					}
					return r.m = d, r.c = f, r.d = function(d, f, p) {
						r.o(d, f) || Object.defineProperty(d, f, {
							enumerable: !0,
							get: p
						});
					}, r.r = function(d) {
						typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(d, "__esModule", { value: !0 });
					}, r.t = function(d, f) {
						if (1 & f && (d = r(d)), 8 & f || 4 & f && typeof d == "object" && d && d.__esModule) return d;
						var p = Object.create(null);
						if (r.r(p), Object.defineProperty(p, "default", {
							enumerable: !0,
							value: d
						}), 2 & f && typeof d != "string") for (var m in d) r.d(p, m, function(f) {
							return d[f];
						}.bind(null, m));
						return p;
					}, r.n = function(d) {
						var f = d && d.__esModule ? function() {
							return d.default;
						} : function() {
							return d;
						};
						return r.d(f, "a", f), f;
					}, r.o = function(d, f) {
						return Object.prototype.hasOwnProperty.call(d, f);
					}, r.p = "", r(r.s = 90);
				}({
					17: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m = p(18), h = function() {
							function e() {}
							return e.getFirstMatch = function(d, f) {
								var p = f.match(d);
								return p && p.length > 0 && p[1] || "";
							}, e.getSecondMatch = function(d, f) {
								var p = f.match(d);
								return p && p.length > 1 && p[2] || "";
							}, e.matchAndReturnConst = function(d, f, p) {
								if (d.test(f)) return p;
							}, e.getWindowsVersionName = function(d) {
								switch (d) {
									case "NT": return "NT";
									case "XP": return "XP";
									case "NT 5.0": return "2000";
									case "NT 5.1": return "XP";
									case "NT 5.2": return "2003";
									case "NT 6.0": return "Vista";
									case "NT 6.1": return "7";
									case "NT 6.2": return "8";
									case "NT 6.3": return "8.1";
									case "NT 10.0": return "10";
									default: return;
								}
							}, e.getMacOSVersionName = function(d) {
								var f = d.split(".").splice(0, 2).map(function(d) {
									return parseInt(d, 10) || 0;
								});
								if (f.push(0), f[0] === 10) switch (f[1]) {
									case 5: return "Leopard";
									case 6: return "Snow Leopard";
									case 7: return "Lion";
									case 8: return "Mountain Lion";
									case 9: return "Mavericks";
									case 10: return "Yosemite";
									case 11: return "El Capitan";
									case 12: return "Sierra";
									case 13: return "High Sierra";
									case 14: return "Mojave";
									case 15: return "Catalina";
									default: return;
								}
							}, e.getAndroidVersionName = function(d) {
								var f = d.split(".").splice(0, 2).map(function(d) {
									return parseInt(d, 10) || 0;
								});
								if (f.push(0), !(f[0] === 1 && f[1] < 5)) return f[0] === 1 && f[1] < 6 ? "Cupcake" : f[0] === 1 && f[1] >= 6 ? "Donut" : f[0] === 2 && f[1] < 2 ? "Eclair" : f[0] === 2 && f[1] === 2 ? "Froyo" : f[0] === 2 && f[1] > 2 ? "Gingerbread" : f[0] === 3 ? "Honeycomb" : f[0] === 4 && f[1] < 1 ? "Ice Cream Sandwich" : f[0] === 4 && f[1] < 4 ? "Jelly Bean" : f[0] === 4 && f[1] >= 4 ? "KitKat" : f[0] === 5 ? "Lollipop" : f[0] === 6 ? "Marshmallow" : f[0] === 7 ? "Nougat" : f[0] === 8 ? "Oreo" : f[0] === 9 ? "Pie" : void 0;
							}, e.getVersionPrecision = function(d) {
								return d.split(".").length;
							}, e.compareVersions = function(d, f, p) {
								p === void 0 && (p = !1);
								var m = e.getVersionPrecision(d), h = e.getVersionPrecision(f), g = Math.max(m, h), _ = 0, v = e.map([d, f], function(d) {
									var f = g - e.getVersionPrecision(d), p = d + Array(f + 1).join(".0");
									return e.map(p.split("."), function(d) {
										return Array(20 - d.length).join("0") + d;
									}).reverse();
								});
								for (p && (_ = g - Math.min(m, h)), --g; g >= _;) {
									if (v[0][g] > v[1][g]) return 1;
									if (v[0][g] === v[1][g]) {
										if (g === _) return 0;
										--g;
									} else if (v[0][g] < v[1][g]) return -1;
								}
							}, e.map = function(d, f) {
								var p, m = [];
								if (Array.prototype.map) return Array.prototype.map.call(d, f);
								for (p = 0; p < d.length; p += 1) m.push(f(d[p]));
								return m;
							}, e.find = function(d, f) {
								var p, m;
								if (Array.prototype.find) return Array.prototype.find.call(d, f);
								for (p = 0, m = d.length; p < m; p += 1) {
									var h = d[p];
									if (f(h, p)) return h;
								}
							}, e.assign = function(d) {
								for (var f, p, m = d, h = arguments.length, g = Array(h > 1 ? h - 1 : 0), _ = 1; _ < h; _++) g[_ - 1] = arguments[_];
								if (Object.assign) return Object.assign.apply(Object, [d].concat(g));
								var o = function() {
									var d = g[f];
									typeof d == "object" && d && Object.keys(d).forEach(function(f) {
										m[f] = d[f];
									});
								};
								for (f = 0, p = g.length; f < p; f += 1) o();
								return d;
							}, e.getBrowserAlias = function(d) {
								return m.BROWSER_ALIASES_MAP[d];
							}, e.getBrowserTypeByAlias = function(d) {
								return m.BROWSER_MAP[d] || "";
							}, e;
						}();
						f.default = h, d.exports = f.default;
					},
					18: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.ENGINE_MAP = f.OS_MAP = f.PLATFORMS_MAP = f.BROWSER_MAP = f.BROWSER_ALIASES_MAP = void 0, f.BROWSER_ALIASES_MAP = {
							"Amazon Silk": "amazon_silk",
							"Android Browser": "android",
							Bada: "bada",
							BlackBerry: "blackberry",
							Chrome: "chrome",
							Chromium: "chromium",
							Electron: "electron",
							Epiphany: "epiphany",
							Firefox: "firefox",
							Focus: "focus",
							Generic: "generic",
							"Google Search": "google_search",
							Googlebot: "googlebot",
							"Internet Explorer": "ie",
							"K-Meleon": "k_meleon",
							Maxthon: "maxthon",
							"Microsoft Edge": "edge",
							"MZ Browser": "mz",
							"NAVER Whale Browser": "naver",
							Opera: "opera",
							"Opera Coast": "opera_coast",
							PhantomJS: "phantomjs",
							Puffin: "puffin",
							QupZilla: "qupzilla",
							QQ: "qq",
							QQLite: "qqlite",
							Safari: "safari",
							Sailfish: "sailfish",
							"Samsung Internet for Android": "samsung_internet",
							SeaMonkey: "seamonkey",
							Sleipnir: "sleipnir",
							Swing: "swing",
							Tizen: "tizen",
							"UC Browser": "uc",
							Vivaldi: "vivaldi",
							"WebOS Browser": "webos",
							WeChat: "wechat",
							"Yandex Browser": "yandex",
							Roku: "roku"
						}, f.BROWSER_MAP = {
							amazon_silk: "Amazon Silk",
							android: "Android Browser",
							bada: "Bada",
							blackberry: "BlackBerry",
							chrome: "Chrome",
							chromium: "Chromium",
							electron: "Electron",
							epiphany: "Epiphany",
							firefox: "Firefox",
							focus: "Focus",
							generic: "Generic",
							googlebot: "Googlebot",
							google_search: "Google Search",
							ie: "Internet Explorer",
							k_meleon: "K-Meleon",
							maxthon: "Maxthon",
							edge: "Microsoft Edge",
							mz: "MZ Browser",
							naver: "NAVER Whale Browser",
							opera: "Opera",
							opera_coast: "Opera Coast",
							phantomjs: "PhantomJS",
							puffin: "Puffin",
							qupzilla: "QupZilla",
							qq: "QQ Browser",
							qqlite: "QQ Browser Lite",
							safari: "Safari",
							sailfish: "Sailfish",
							samsung_internet: "Samsung Internet for Android",
							seamonkey: "SeaMonkey",
							sleipnir: "Sleipnir",
							swing: "Swing",
							tizen: "Tizen",
							uc: "UC Browser",
							vivaldi: "Vivaldi",
							webos: "WebOS Browser",
							wechat: "WeChat",
							yandex: "Yandex Browser"
						}, f.PLATFORMS_MAP = {
							tablet: "tablet",
							mobile: "mobile",
							desktop: "desktop",
							tv: "tv"
						}, f.OS_MAP = {
							WindowsPhone: "Windows Phone",
							Windows: "Windows",
							MacOS: "macOS",
							iOS: "iOS",
							Android: "Android",
							WebOS: "WebOS",
							BlackBerry: "BlackBerry",
							Bada: "Bada",
							Tizen: "Tizen",
							Linux: "Linux",
							ChromeOS: "Chrome OS",
							PlayStation4: "PlayStation 4",
							Roku: "Roku"
						}, f.ENGINE_MAP = {
							EdgeHTML: "EdgeHTML",
							Blink: "Blink",
							Trident: "Trident",
							Presto: "Presto",
							Gecko: "Gecko",
							WebKit: "WebKit"
						};
					},
					90: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m, h = (m = p(91)) && m.__esModule ? m : { default: m }, g = p(18);
						function a(d, f) {
							for (var p = 0; p < f.length; p++) {
								var m = f[p];
								m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(d, m.key, m);
							}
						}
						var _ = function() {
							function e() {}
							var d, f, p;
							return e.getParser = function(d, f) {
								if (f === void 0 && (f = !1), typeof d != "string") throw Error("UserAgent should be a string");
								return new h.default(d, f);
							}, e.parse = function(d) {
								return new h.default(d).getResult();
							}, d = e, p = [
								{
									key: "BROWSER_MAP",
									get: function() {
										return g.BROWSER_MAP;
									}
								},
								{
									key: "ENGINE_MAP",
									get: function() {
										return g.ENGINE_MAP;
									}
								},
								{
									key: "OS_MAP",
									get: function() {
										return g.OS_MAP;
									}
								},
								{
									key: "PLATFORMS_MAP",
									get: function() {
										return g.PLATFORMS_MAP;
									}
								}
							], (f = null) && a(d.prototype, f), p && a(d, p), e;
						}();
						f.default = _, d.exports = f.default;
					},
					91: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m = u(p(92)), h = u(p(93)), g = u(p(94)), _ = u(p(95)), v = u(p(17));
						function u(d) {
							return d && d.__esModule ? d : { default: d };
						}
						var b = function() {
							function e(d, f) {
								if (f === void 0 && (f = !1), d == null || d === "") throw Error("UserAgent parameter can't be empty");
								this._ua = d, this.parsedResult = {}, !0 !== f && this.parse();
							}
							var d = e.prototype;
							return d.getUA = function() {
								return this._ua;
							}, d.test = function(d) {
								return d.test(this._ua);
							}, d.parseBrowser = function() {
								var d = this;
								this.parsedResult.browser = {};
								var f = v.default.find(m.default, function(f) {
									if (typeof f.test == "function") return f.test(d);
									if (f.test instanceof Array) return f.test.some(function(f) {
										return d.test(f);
									});
									throw Error("Browser's test function is not valid");
								});
								return f && (this.parsedResult.browser = f.describe(this.getUA())), this.parsedResult.browser;
							}, d.getBrowser = function() {
								return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
							}, d.getBrowserName = function(d) {
								return d ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
							}, d.getBrowserVersion = function() {
								return this.getBrowser().version;
							}, d.getOS = function() {
								return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
							}, d.parseOS = function() {
								var d = this;
								this.parsedResult.os = {};
								var f = v.default.find(h.default, function(f) {
									if (typeof f.test == "function") return f.test(d);
									if (f.test instanceof Array) return f.test.some(function(f) {
										return d.test(f);
									});
									throw Error("Browser's test function is not valid");
								});
								return f && (this.parsedResult.os = f.describe(this.getUA())), this.parsedResult.os;
							}, d.getOSName = function(d) {
								var f = this.getOS().name;
								return d ? String(f).toLowerCase() || "" : f || "";
							}, d.getOSVersion = function() {
								return this.getOS().version;
							}, d.getPlatform = function() {
								return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
							}, d.getPlatformType = function(d) {
								d === void 0 && (d = !1);
								var f = this.getPlatform().type;
								return d ? String(f).toLowerCase() || "" : f || "";
							}, d.parsePlatform = function() {
								var d = this;
								this.parsedResult.platform = {};
								var f = v.default.find(g.default, function(f) {
									if (typeof f.test == "function") return f.test(d);
									if (f.test instanceof Array) return f.test.some(function(f) {
										return d.test(f);
									});
									throw Error("Browser's test function is not valid");
								});
								return f && (this.parsedResult.platform = f.describe(this.getUA())), this.parsedResult.platform;
							}, d.getEngine = function() {
								return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
							}, d.getEngineName = function(d) {
								return d ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
							}, d.parseEngine = function() {
								var d = this;
								this.parsedResult.engine = {};
								var f = v.default.find(_.default, function(f) {
									if (typeof f.test == "function") return f.test(d);
									if (f.test instanceof Array) return f.test.some(function(f) {
										return d.test(f);
									});
									throw Error("Browser's test function is not valid");
								});
								return f && (this.parsedResult.engine = f.describe(this.getUA())), this.parsedResult.engine;
							}, d.parse = function() {
								return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
							}, d.getResult = function() {
								return v.default.assign({}, this.parsedResult);
							}, d.satisfies = function(d) {
								var f = this, p = {}, m = 0, h = {}, g = 0;
								if (Object.keys(d).forEach(function(f) {
									var _ = d[f];
									typeof _ == "string" ? (h[f] = _, g += 1) : typeof _ == "object" && (p[f] = _, m += 1);
								}), m > 0) {
									var _ = Object.keys(p), b = v.default.find(_, function(d) {
										return f.isOS(d);
									});
									if (b) {
										var x = this.satisfies(p[b]);
										if (x !== void 0) return x;
									}
									var C = v.default.find(_, function(d) {
										return f.isPlatform(d);
									});
									if (C) {
										var w = this.satisfies(p[C]);
										if (w !== void 0) return w;
									}
								}
								if (g > 0) {
									var T = Object.keys(h), E = v.default.find(T, function(d) {
										return f.isBrowser(d, !0);
									});
									if (E !== void 0) return this.compareVersion(h[E]);
								}
							}, d.isBrowser = function(d, f) {
								f === void 0 && (f = !1);
								var p = this.getBrowserName().toLowerCase(), m = d.toLowerCase(), h = v.default.getBrowserTypeByAlias(m);
								return f && h && (m = h.toLowerCase()), m === p;
							}, d.compareVersion = function(d) {
								var f = [0], p = d, m = !1, h = this.getBrowserVersion();
								if (typeof h == "string") return d[0] === ">" || d[0] === "<" ? (p = d.substr(1), d[1] === "=" ? (m = !0, p = d.substr(2)) : f = [], d[0] === ">" ? f.push(1) : f.push(-1)) : d[0] === "=" ? p = d.substr(1) : d[0] === "~" && (m = !0, p = d.substr(1)), f.indexOf(v.default.compareVersions(h, p, m)) > -1;
							}, d.isOS = function(d) {
								return this.getOSName(!0) === String(d).toLowerCase();
							}, d.isPlatform = function(d) {
								return this.getPlatformType(!0) === String(d).toLowerCase();
							}, d.isEngine = function(d) {
								return this.getEngineName(!0) === String(d).toLowerCase();
							}, d.is = function(d, f) {
								return f === void 0 && (f = !1), this.isBrowser(d, f) || this.isOS(d) || this.isPlatform(d);
							}, d.some = function(d) {
								var f = this;
								return d === void 0 && (d = []), d.some(function(d) {
									return f.is(d);
								});
							}, e;
						}();
						f.default = b, d.exports = f.default;
					},
					92: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m, h = (m = p(17)) && m.__esModule ? m : { default: m }, g = /version\/(\d+(\.?_?\d+)+)/i, _ = [
							{
								test: [/googlebot/i],
								describe: function(d) {
									var f = { name: "Googlebot" }, p = h.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/opera/i],
								describe: function(d) {
									var f = { name: "Opera" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/opr\/|opios/i],
								describe: function(d) {
									var f = { name: "Opera" }, p = h.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/SamsungBrowser/i],
								describe: function(d) {
									var f = { name: "Samsung Internet for Android" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/Whale/i],
								describe: function(d) {
									var f = { name: "NAVER Whale Browser" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/MZBrowser/i],
								describe: function(d) {
									var f = { name: "MZ Browser" }, p = h.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/focus/i],
								describe: function(d) {
									var f = { name: "Focus" }, p = h.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/swing/i],
								describe: function(d) {
									var f = { name: "Swing" }, p = h.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/coast/i],
								describe: function(d) {
									var f = { name: "Opera Coast" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/opt\/\d+(?:.?_?\d+)+/i],
								describe: function(d) {
									var f = { name: "Opera Touch" }, p = h.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/yabrowser/i],
								describe: function(d) {
									var f = { name: "Yandex Browser" }, p = h.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/ucbrowser/i],
								describe: function(d) {
									var f = { name: "UC Browser" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/Maxthon|mxios/i],
								describe: function(d) {
									var f = { name: "Maxthon" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/epiphany/i],
								describe: function(d) {
									var f = { name: "Epiphany" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/puffin/i],
								describe: function(d) {
									var f = { name: "Puffin" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/sleipnir/i],
								describe: function(d) {
									var f = { name: "Sleipnir" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/k-meleon/i],
								describe: function(d) {
									var f = { name: "K-Meleon" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/micromessenger/i],
								describe: function(d) {
									var f = { name: "WeChat" }, p = h.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/qqbrowser/i],
								describe: function(d) {
									var f = { name: /qqbrowserlite/i.test(d) ? "QQ Browser Lite" : "QQ Browser" }, p = h.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/msie|trident/i],
								describe: function(d) {
									var f = { name: "Internet Explorer" }, p = h.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/\sedg\//i],
								describe: function(d) {
									var f = { name: "Microsoft Edge" }, p = h.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/edg([ea]|ios)/i],
								describe: function(d) {
									var f = { name: "Microsoft Edge" }, p = h.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/vivaldi/i],
								describe: function(d) {
									var f = { name: "Vivaldi" }, p = h.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/seamonkey/i],
								describe: function(d) {
									var f = { name: "SeaMonkey" }, p = h.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/sailfish/i],
								describe: function(d) {
									var f = { name: "Sailfish" }, p = h.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/silk/i],
								describe: function(d) {
									var f = { name: "Amazon Silk" }, p = h.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/phantom/i],
								describe: function(d) {
									var f = { name: "PhantomJS" }, p = h.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/slimerjs/i],
								describe: function(d) {
									var f = { name: "SlimerJS" }, p = h.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
								describe: function(d) {
									var f = { name: "BlackBerry" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/(web|hpw)[o0]s/i],
								describe: function(d) {
									var f = { name: "WebOS Browser" }, p = h.default.getFirstMatch(g, d) || h.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/bada/i],
								describe: function(d) {
									var f = { name: "Bada" }, p = h.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/tizen/i],
								describe: function(d) {
									var f = { name: "Tizen" }, p = h.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/qupzilla/i],
								describe: function(d) {
									var f = { name: "QupZilla" }, p = h.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/firefox|iceweasel|fxios/i],
								describe: function(d) {
									var f = { name: "Firefox" }, p = h.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/electron/i],
								describe: function(d) {
									var f = { name: "Electron" }, p = h.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/MiuiBrowser/i],
								describe: function(d) {
									var f = { name: "Miui" }, p = h.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/chromium/i],
								describe: function(d) {
									var f = { name: "Chromium" }, p = h.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, d) || h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/chrome|crios|crmo/i],
								describe: function(d) {
									var f = { name: "Chrome" }, p = h.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/GSA/i],
								describe: function(d) {
									var f = { name: "Google Search" }, p = h.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: function(d) {
									var f = !d.test(/like android/i), p = d.test(/android/i);
									return f && p;
								},
								describe: function(d) {
									var f = { name: "Android Browser" }, p = h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/playstation 4/i],
								describe: function(d) {
									var f = { name: "PlayStation 4" }, p = h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/safari|applewebkit/i],
								describe: function(d) {
									var f = { name: "Safari" }, p = h.default.getFirstMatch(g, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/.*/i],
								describe: function(d) {
									var f = d.search("\\(") === -1 ? /^(.*)\/(.*) / : /^(.*)\/(.*)[ \t]\((.*)/;
									return {
										name: h.default.getFirstMatch(f, d),
										version: h.default.getSecondMatch(f, d)
									};
								}
							}
						];
						f.default = _, d.exports = f.default;
					},
					93: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m, h = (m = p(17)) && m.__esModule ? m : { default: m }, g = p(18), _ = [
							{
								test: [/Roku\/DVP/],
								describe: function(d) {
									var f = h.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, d);
									return {
										name: g.OS_MAP.Roku,
										version: f
									};
								}
							},
							{
								test: [/windows phone/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, d);
									return {
										name: g.OS_MAP.WindowsPhone,
										version: f
									};
								}
							},
							{
								test: [/windows /i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, d), p = h.default.getWindowsVersionName(f);
									return {
										name: g.OS_MAP.Windows,
										version: f,
										versionName: p
									};
								}
							},
							{
								test: [/Macintosh(.*?) FxiOS(.*?)\//],
								describe: function(d) {
									var f = { name: g.OS_MAP.iOS }, p = h.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/macintosh/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, d).replace(/[_\s]/g, "."), p = h.default.getMacOSVersionName(f), m = {
										name: g.OS_MAP.MacOS,
										version: f
									};
									return p && (m.versionName = p), m;
								}
							},
							{
								test: [/(ipod|iphone|ipad)/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, d).replace(/[_\s]/g, ".");
									return {
										name: g.OS_MAP.iOS,
										version: f
									};
								}
							},
							{
								test: function(d) {
									var f = !d.test(/like android/i), p = d.test(/android/i);
									return f && p;
								},
								describe: function(d) {
									var f = h.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, d), p = h.default.getAndroidVersionName(f), m = {
										name: g.OS_MAP.Android,
										version: f
									};
									return p && (m.versionName = p), m;
								}
							},
							{
								test: [/(web|hpw)[o0]s/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, d), p = { name: g.OS_MAP.WebOS };
									return f && f.length && (p.version = f), p;
								}
							},
							{
								test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, d) || h.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, d) || h.default.getFirstMatch(/\bbb(\d+)/i, d);
									return {
										name: g.OS_MAP.BlackBerry,
										version: f
									};
								}
							},
							{
								test: [/bada/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, d);
									return {
										name: g.OS_MAP.Bada,
										version: f
									};
								}
							},
							{
								test: [/tizen/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, d);
									return {
										name: g.OS_MAP.Tizen,
										version: f
									};
								}
							},
							{
								test: [/linux/i],
								describe: function() {
									return { name: g.OS_MAP.Linux };
								}
							},
							{
								test: [/CrOS/],
								describe: function() {
									return { name: g.OS_MAP.ChromeOS };
								}
							},
							{
								test: [/PlayStation 4/],
								describe: function(d) {
									var f = h.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, d);
									return {
										name: g.OS_MAP.PlayStation4,
										version: f
									};
								}
							}
						];
						f.default = _, d.exports = f.default;
					},
					94: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m, h = (m = p(17)) && m.__esModule ? m : { default: m }, g = p(18), _ = [
							{
								test: [/googlebot/i],
								describe: function() {
									return {
										type: "bot",
										vendor: "Google"
									};
								}
							},
							{
								test: [/huawei/i],
								describe: function(d) {
									var f = h.default.getFirstMatch(/(can-l01)/i, d) && "Nova", p = {
										type: g.PLATFORMS_MAP.mobile,
										vendor: "Huawei"
									};
									return f && (p.model = f), p;
								}
							},
							{
								test: [/nexus\s*(?:7|8|9|10).*/i],
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.tablet,
										vendor: "Nexus"
									};
								}
							},
							{
								test: [/ipad/i],
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.tablet,
										vendor: "Apple",
										model: "iPad"
									};
								}
							},
							{
								test: [/Macintosh(.*?) FxiOS(.*?)\//],
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.tablet,
										vendor: "Apple",
										model: "iPad"
									};
								}
							},
							{
								test: [/kftt build/i],
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.tablet,
										vendor: "Amazon",
										model: "Kindle Fire HD 7"
									};
								}
							},
							{
								test: [/silk/i],
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.tablet,
										vendor: "Amazon"
									};
								}
							},
							{
								test: [/tablet(?! pc)/i],
								describe: function() {
									return { type: g.PLATFORMS_MAP.tablet };
								}
							},
							{
								test: function(d) {
									var f = d.test(/ipod|iphone/i), p = d.test(/like (ipod|iphone)/i);
									return f && !p;
								},
								describe: function(d) {
									var f = h.default.getFirstMatch(/(ipod|iphone)/i, d);
									return {
										type: g.PLATFORMS_MAP.mobile,
										vendor: "Apple",
										model: f
									};
								}
							},
							{
								test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.mobile,
										vendor: "Nexus"
									};
								}
							},
							{
								test: [/[^-]mobi/i],
								describe: function() {
									return { type: g.PLATFORMS_MAP.mobile };
								}
							},
							{
								test: function(d) {
									return d.getBrowserName(!0) === "blackberry";
								},
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.mobile,
										vendor: "BlackBerry"
									};
								}
							},
							{
								test: function(d) {
									return d.getBrowserName(!0) === "bada";
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.mobile };
								}
							},
							{
								test: function(d) {
									return d.getBrowserName() === "windows phone";
								},
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.mobile,
										vendor: "Microsoft"
									};
								}
							},
							{
								test: function(d) {
									var f = Number(String(d.getOSVersion()).split(".")[0]);
									return d.getOSName(!0) === "android" && f >= 3;
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.tablet };
								}
							},
							{
								test: function(d) {
									return d.getOSName(!0) === "android";
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.mobile };
								}
							},
							{
								test: function(d) {
									return d.getOSName(!0) === "macos";
								},
								describe: function() {
									return {
										type: g.PLATFORMS_MAP.desktop,
										vendor: "Apple"
									};
								}
							},
							{
								test: function(d) {
									return d.getOSName(!0) === "windows";
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.desktop };
								}
							},
							{
								test: function(d) {
									return d.getOSName(!0) === "linux";
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.desktop };
								}
							},
							{
								test: function(d) {
									return d.getOSName(!0) === "playstation 4";
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.tv };
								}
							},
							{
								test: function(d) {
									return d.getOSName(!0) === "roku";
								},
								describe: function() {
									return { type: g.PLATFORMS_MAP.tv };
								}
							}
						];
						f.default = _, d.exports = f.default;
					},
					95: function(d, f, p) {
						"use strict";
						f.__esModule = !0, f.default = void 0;
						var m, h = (m = p(17)) && m.__esModule ? m : { default: m }, g = p(18), _ = [
							{
								test: function(d) {
									return d.getBrowserName(!0) === "microsoft edge";
								},
								describe: function(d) {
									if (/\sedg\//i.test(d)) return { name: g.ENGINE_MAP.Blink };
									var f = h.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, d);
									return {
										name: g.ENGINE_MAP.EdgeHTML,
										version: f
									};
								}
							},
							{
								test: [/trident/i],
								describe: function(d) {
									var f = { name: g.ENGINE_MAP.Trident }, p = h.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: function(d) {
									return d.test(/presto/i);
								},
								describe: function(d) {
									var f = { name: g.ENGINE_MAP.Presto }, p = h.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: function(d) {
									var f = d.test(/gecko/i), p = d.test(/like gecko/i);
									return f && !p;
								},
								describe: function(d) {
									var f = { name: g.ENGINE_MAP.Gecko }, p = h.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							},
							{
								test: [/(apple)?webkit\/537\.36/i],
								describe: function() {
									return { name: g.ENGINE_MAP.Blink };
								}
							},
							{
								test: [/(apple)?webkit/i],
								describe: function(d) {
									var f = { name: g.ENGINE_MAP.WebKit }, p = h.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, d);
									return p && (f.version = p), f;
								}
							}
						];
						f.default = _, d.exports = f.default;
					}
				});
			});
		},
		"./node_modules/browser-id3-writer/dist/browser-id3-writer.mjs": (d, f, p) => {
			"use strict";
			p.d(f, { Q: () => o });
			function e(d) {
				return String(d).split("").map((d) => d.charCodeAt(0));
			}
			function t(d) {
				return new Uint8Array(e(d));
			}
			function a(d) {
				let f = new ArrayBuffer(2 * d.length), p = new Uint8Array(f);
				return new Uint16Array(f).set(e(d)), p;
			}
			function r(d) {
				let f = 255;
				return [
					d >>> 24 & f,
					d >>> 16 & f,
					d >>> 8 & f,
					d & f
				];
			}
			function n(d) {
				return 11 + d;
			}
			function s(d, f, p, m) {
				return 11 + f + 1 + 1 + (m ? 2 + 2 * (p + 1) : p + 1) + d;
			}
			function i(d) {
				let f = 0;
				return d.forEach((d) => {
					f += 2 + 2 * d[0].length + 2 + 2 + 2 * d[1].length + 2;
				}), 11 + f;
			}
			function c(d, f) {
				let p = 2 * f, m = 0;
				return d.forEach((d) => {
					m += 2 + 2 * d[0].length + 2 + 4;
				}), 18 + p + 2 + m;
			}
			class o {
				_setIntegerFrame(d, f) {
					let p = parseInt(f, 10);
					this.frames.push({
						name: d,
						value: p,
						size: n(p.toString().length)
					});
				}
				_setStringFrame(d, f) {
					let p = f.toString(), m = 13 + 2 * p.length;
					d === "TDAT" && (m = n(p.length)), this.frames.push({
						name: d,
						value: p,
						size: m
					});
				}
				_setPictureFrame(d, f, p, m) {
					let h = function(d) {
						if (!d || !d.length) return null;
						if (d[0] === 255 && d[1] === 216 && d[2] === 255) return "image/jpeg";
						if (d[0] === 137 && d[1] === 80 && d[2] === 78 && d[3] === 71) return "image/png";
						if (d[0] === 71 && d[1] === 73 && d[2] === 70) return "image/gif";
						if (d[8] === 87 && d[9] === 69 && d[10] === 66 && d[11] === 80) return "image/webp";
						let f = d[0] === 73 && d[1] === 73 && d[2] === 42 && d[3] === 0, p = d[0] === 77 && d[1] === 77 && d[2] === 0 && d[3] === 42;
						return f || p ? "image/tiff" : d[0] === 66 && d[1] === 77 ? "image/bmp" : d[0] === 0 && d[1] === 0 && d[2] === 1 && d[3] === 0 ? "image/x-icon" : null;
					}(new Uint8Array(f)), g = p.toString();
					if (!h) throw Error("Unknown picture MIME type");
					p || (m = !1), this.frames.push({
						name: "APIC",
						value: f,
						pictureType: d,
						mimeType: h,
						useUnicodeEncoding: m,
						description: g,
						size: s(f.byteLength, h.length, g.length, m)
					});
				}
				_setLyricsFrame(d, f, p) {
					let m = d.split("").map((d) => d.charCodeAt(0)), h = f.toString(), g = p.toString();
					var _, v;
					this.frames.push({
						name: "USLT",
						value: g,
						language: m,
						description: h,
						size: (_ = h.length, v = g.length, 16 + 2 * _ + 2 + 2 + 2 * v)
					});
				}
				_setCommentFrame(d, f, p) {
					let m = d.split("").map((d) => d.charCodeAt(0)), h = f.toString(), g = p.toString();
					var _, v;
					this.frames.push({
						name: "COMM",
						value: g,
						language: m,
						description: h,
						size: (_ = h.length, v = g.length, 16 + 2 * _ + 2 + 2 + 2 * v)
					});
				}
				_setPrivateFrame(d, f) {
					let p = d.toString();
					var m, h;
					this.frames.push({
						name: "PRIV",
						value: f,
						id: p,
						size: (m = p.length, h = f.byteLength, 10 + m + 1 + h)
					});
				}
				_setUserStringFrame(d, f) {
					let p = d.toString(), m = f.toString();
					var h, g;
					this.frames.push({
						name: "TXXX",
						description: p,
						value: m,
						size: (h = p.length, g = m.length, 13 + 2 * h + 2 + 2 + 2 * g)
					});
				}
				_setUrlLinkFrame(d, f) {
					let p = f.toString();
					var m;
					this.frames.push({
						name: d,
						value: p,
						size: (m = p.length, 10 + m)
					});
				}
				_setPairedTextFrame(d, f) {
					this.frames.push({
						name: d,
						value: f,
						size: i(f)
					});
				}
				_setSynchronisedLyricsFrame(d, f, p, m, h) {
					let g = h.toString(), _ = m.split("").map((d) => d.charCodeAt(0));
					this.frames.push({
						name: "SYLT",
						value: f,
						language: _,
						description: g,
						type: d,
						timestampFormat: p,
						size: c(f, g.length)
					});
				}
				constructor(d) {
					if (!d || typeof d != "object" || !("byteLength" in d)) throw Error("First argument should be an instance of ArrayBuffer or Buffer");
					this.arrayBuffer = d, this.padding = 4096, this.frames = [], this.url = "";
				}
				setFrame(d, f) {
					switch (d) {
						case "TPE1":
						case "TCOM":
						case "TCON": {
							if (!Array.isArray(f)) throw Error(`${d} frame value should be an array of strings`);
							let p = d === "TCON" ? ";" : "/", m = f.join(p);
							this._setStringFrame(d, m);
							break;
						}
						case "TLAN":
						case "TIT1":
						case "TIT2":
						case "TIT3":
						case "TALB":
						case "TPE2":
						case "TPE3":
						case "TPE4":
						case "TRCK":
						case "TPOS":
						case "TMED":
						case "TPUB":
						case "TCOP":
						case "TKEY":
						case "TEXT":
						case "TDAT":
						case "TCMP":
						case "TSRC":
							this._setStringFrame(d, f);
							break;
						case "TBPM":
						case "TLEN":
						case "TYER":
							this._setIntegerFrame(d, f);
							break;
						case "USLT":
							if (f.language = f.language || "eng", typeof f != "object" || !("description" in f) || !("lyrics" in f)) throw Error("USLT frame value should be an object with keys description and lyrics");
							if (f.language && !f.language.match(/[a-z]{3}/i)) throw Error("Language must be coded following the ISO 639-2 standards");
							this._setLyricsFrame(f.language, f.description, f.lyrics);
							break;
						case "APIC":
							if (typeof f != "object" || !("type" in f) || !("data" in f) || !("description" in f)) throw Error("APIC frame value should be an object with keys type, data and description");
							if (f.type < 0 || f.type > 20) throw Error("Incorrect APIC frame picture type");
							this._setPictureFrame(f.type, f.data, f.description, !!f.useUnicodeEncoding);
							break;
						case "TXXX":
							if (typeof f != "object" || !("description" in f) || !("value" in f)) throw Error("TXXX frame value should be an object with keys description and value");
							this._setUserStringFrame(f.description, f.value);
							break;
						case "WCOM":
						case "WCOP":
						case "WOAF":
						case "WOAR":
						case "WOAS":
						case "WORS":
						case "WPAY":
						case "WPUB":
							this._setUrlLinkFrame(d, f);
							break;
						case "COMM":
							if (f.language = f.language || "eng", typeof f != "object" || !("description" in f) || !("text" in f)) throw Error("COMM frame value should be an object with keys description and text");
							if (f.language && !f.language.match(/[a-z]{3}/i)) throw Error("Language must be coded following the ISO 639-2 standards");
							this._setCommentFrame(f.language, f.description, f.text);
							break;
						case "PRIV":
							if (typeof f != "object" || !("id" in f) || !("data" in f)) throw Error("PRIV frame value should be an object with keys id and data");
							this._setPrivateFrame(f.id, f.data);
							break;
						case "IPLS":
							if (!Array.isArray(f) || !Array.isArray(f[0])) throw Error("IPLS frame value should be an array of pairs");
							this._setPairedTextFrame(d, f);
							break;
						case "SYLT":
							if (typeof f != "object" || !("type" in f) || !("text" in f) || !("timestampFormat" in f)) throw Error("SYLT frame value should be an object with keys type, text and timestampFormat");
							if (!Array.isArray(f.text) || !Array.isArray(f.text[0])) throw Error("SYLT frame text value should be an array of pairs");
							if (f.type < 0 || f.type > 6) throw Error("Incorrect SYLT frame content type");
							if (f.timestampFormat < 1 || f.timestampFormat > 2) throw Error("Incorrect SYLT frame time stamp format");
							f.language = f.language || "eng", f.description = f.description || "", this._setSynchronisedLyricsFrame(f.type, f.text, f.timestampFormat, f.language, f.description);
							break;
						default: throw Error(`Unsupported frame ${d}`);
					}
					return this;
				}
				removeTag() {
					if (this.arrayBuffer.byteLength < 10) return;
					let d = new Uint8Array(this.arrayBuffer), f = d[3], p = ((m = [
						d[6],
						d[7],
						d[8],
						d[9]
					])[0] << 21) + (m[1] << 14) + (m[2] << 7) + m[3] + 10;
					var m, h;
					(h = d)[0] !== 73 || h[1] !== 68 || h[2] !== 51 || f < 2 || f > 4 || (this.arrayBuffer = new Uint8Array(d.subarray(p)).buffer);
				}
				addTag() {
					this.removeTag();
					let d = [255, 254], f = 10 + this.frames.reduce((d, f) => d + f.size, 0) + this.padding, p = new ArrayBuffer(this.arrayBuffer.byteLength + f), m = new Uint8Array(p), h = 0, g = [];
					return g = [
						73,
						68,
						51,
						3
					], m.set(g, h), h += g.length, h++, h++, g = function(d) {
						let f = 127;
						return [
							d >>> 21 & f,
							d >>> 14 & f,
							d >>> 7 & f,
							d & f
						];
					}(f - 10), m.set(g, h), h += g.length, this.frames.forEach((f) => {
						switch (g = t(f.name), m.set(g, h), h += g.length, g = r(f.size - 10), m.set(g, h), h += g.length, h += 2, f.name) {
							case "WCOM":
							case "WCOP":
							case "WOAF":
							case "WOAR":
							case "WOAS":
							case "WORS":
							case "WPAY":
							case "WPUB":
								g = t(f.value), m.set(g, h), h += g.length;
								break;
							case "TPE1":
							case "TCOM":
							case "TCON":
							case "TLAN":
							case "TIT1":
							case "TIT2":
							case "TIT3":
							case "TALB":
							case "TPE2":
							case "TPE3":
							case "TPE4":
							case "TRCK":
							case "TPOS":
							case "TKEY":
							case "TMED":
							case "TPUB":
							case "TCOP":
							case "TEXT":
							case "TSRC":
								g = [1].concat(d), m.set(g, h), h += g.length, g = a(f.value), m.set(g, h), h += g.length;
								break;
							case "TXXX":
							case "USLT":
							case "COMM":
								g = [1], f.name !== "USLT" && f.name !== "COMM" || (g = g.concat(f.language)), g = g.concat(d), m.set(g, h), h += g.length, g = a(f.description), m.set(g, h), h += g.length, g = [0, 0].concat(d), m.set(g, h), h += g.length, g = a(f.value), m.set(g, h), h += g.length;
								break;
							case "TBPM":
							case "TLEN":
							case "TDAT":
							case "TYER":
								h++, g = t(f.value), m.set(g, h), h += g.length;
								break;
							case "PRIV":
								g = t(f.id), m.set(g, h), h += g.length, h++, m.set(new Uint8Array(f.value), h), h += f.value.byteLength;
								break;
							case "APIC":
								g = [f.useUnicodeEncoding ? 1 : 0], m.set(g, h), h += g.length, g = t(f.mimeType), m.set(g, h), h += g.length, g = [0, f.pictureType], m.set(g, h), h += g.length, f.useUnicodeEncoding ? (g = [].concat(d), m.set(g, h), h += g.length, g = a(f.description), m.set(g, h), h += g.length, h += 2) : (g = t(f.description), m.set(g, h), h += g.length, h++), m.set(new Uint8Array(f.value), h), h += f.value.byteLength;
								break;
							case "IPLS":
								g = [1], m.set(g, h), h += g.length, f.value.forEach((f) => {
									g = [].concat(d), m.set(g, h), h += g.length, g = a(f[0].toString()), m.set(g, h), h += g.length, g = [0, 0].concat(d), m.set(g, h), h += g.length, g = a(f[1].toString()), m.set(g, h), h += g.length, g = [0, 0], m.set(g, h), h += g.length;
								});
								break;
							case "SYLT": g = [1].concat(f.language, f.timestampFormat, f.type), m.set(g, h), h += g.length, g = [].concat(d), m.set(g, h), h += g.length, g = a(f.description), m.set(g, h), h += g.length, h += 2, f.value.forEach((f) => {
								g = [].concat(d), m.set(g, h), h += g.length, g = a(f[0].toString()), m.set(g, h), h += g.length, g = [0, 0], m.set(g, h), h += g.length, g = r(f[1]), m.set(g, h), h += g.length;
							});
						}
					}), h += this.padding, m.set(new Uint8Array(this.arrayBuffer), h), this.arrayBuffer = p, p;
				}
				getBlob() {
					return new Blob([this.arrayBuffer], { type: "audio/mpeg" });
				}
				getURL() {
					return this.url ||= URL.createObjectURL(this.getBlob()), this.url;
				}
				revokeURL() {
					URL.revokeObjectURL(this.url);
				}
			}
		},
		"./node_modules/chaimu/dist/index.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				Ay: () => Chaimu,
				GZ: () => initAudioContext
			});
			let m = {
				version: "1.0.6",
				debug: !1,
				fetchFn: fetch.bind(window)
			}, h = { log: (...d) => {
				if (m.debug) return console.log(`%c✦ chaimu.js v${m.version} ✦`, "background: #000; color: #fff; padding: 0 8px", ...d);
			} }, g = [
				"playing",
				"ratechange",
				"play",
				"waiting",
				"pause",
				"seeked"
			];
			function initAudioContext() {
				let d = window.AudioContext || window.webkitAudioContext;
				return d ? new d() : void 0;
			}
			class BasePlayer {
				static name = "BasePlayer";
				chaimu;
				fetch;
				_src;
				fetchOpts;
				constructor(d, f) {
					this.chaimu = d, this._src = f, this.fetch = this.chaimu.fetchFn, this.fetchOpts = this.chaimu.fetchOpts;
				}
				async init() {
					return this;
				}
				async clear() {
					return this;
				}
				lipSync(d = !1) {
					return this;
				}
				handleVideoEvent = (d) => (h.log(`handle video ${d.type}`), this.lipSync(d.type), this);
				removeVideoEvents() {
					for (let d of g) this.chaimu.video?.removeEventListener(d, this.handleVideoEvent);
					return this;
				}
				addVideoEvents() {
					for (let d of g) this.chaimu.video?.addEventListener(d, this.handleVideoEvent);
					return this;
				}
				async play() {
					return this;
				}
				async pause() {
					return this;
				}
				get name() {
					return this.constructor.name;
				}
				set src(d) {
					this._src = d;
				}
				get src() {
					return this._src;
				}
				get currentSrc() {
					return this._src;
				}
				set volume(d) {}
				get volume() {
					return 0;
				}
				get playbackRate() {
					return 0;
				}
				set playbackRate(d) {}
				get currentTime() {
					return 0;
				}
			}
			class AudioPlayer extends BasePlayer {
				static name = "AudioPlayer";
				audio;
				gainNode;
				audioSource;
				constructor(d, f) {
					super(d, f), this.updateAudio();
				}
				initAudioBooster() {
					return this.chaimu.audioContext ? (this.disconnectAudioNodes(), this.gainNode = this.chaimu.audioContext.createGain(), this.gainNode.connect(this.chaimu.audioContext.destination), this.audioSource = this.chaimu.audioContext.createMediaElementSource(this.audio), this.audioSource.connect(this.gainNode), this) : this;
				}
				disconnectAudioNodes() {
					this.audioSource && (this.audioSource.disconnect(), this.audioSource = void 0), this.gainNode && (this.gainNode.disconnect(), this.gainNode = void 0);
				}
				updateAudio() {
					return this.audio = new Audio(this.src), this.audio.crossOrigin = "anonymous", this;
				}
				async init() {
					return this.updateAudio(), this.initAudioBooster(), this;
				}
				audioErrorHandle = (d) => {
					console.error("[AudioPlayer]", d);
				};
				lipSync(d = !1) {
					if (h.log("[AudioPlayer] lipsync video", this.chaimu.video), !this.chaimu.video) return this;
					if (this.audio.currentTime = this.chaimu.video.currentTime, this.audio.playbackRate = this.chaimu.video.playbackRate, !d) return h.log("[AudioPlayer] lipsync mode isn't set"), this;
					switch (h.log(`[AudioPlayer] lipsync mode is ${d}`), d) {
						case "play":
						case "playing":
						case "seeked": return this.chaimu.video.paused || this.syncPlay(), this;
						case "pause":
						case "waiting": return this.pause(), this;
						default: return this;
					}
				}
				async clear() {
					return this.audio.pause(), this.audio.src = "", this.audio.removeAttribute("src"), this.disconnectAudioNodes(), this;
				}
				syncPlay() {
					return h.log("[AudioPlayer] sync play called"), this.audio && this.audio.play().catch(this.audioErrorHandle), this;
				}
				async play() {
					return h.log("[AudioPlayer] play called"), this.audio && await this.audio.play().catch(this.audioErrorHandle), this;
				}
				async pause() {
					return h.log("[AudioPlayer] pause called"), this.audio && this.audio.pause(), this;
				}
				set src(d) {
					if (this._src = d, !d) {
						this.clear();
						return;
					}
					this.audio.src = d;
				}
				get src() {
					return this._src;
				}
				get currentSrc() {
					return this.audio.currentSrc;
				}
				set volume(d) {
					if (this.gainNode) {
						this.gainNode.gain.value = d;
						return;
					}
					this.audio.volume = d;
				}
				get volume() {
					return this.gainNode ? this.gainNode.gain.value : this.audio.volume;
				}
				get playbackRate() {
					return this.audio.playbackRate;
				}
				set playbackRate(d) {
					this.audio.playbackRate = d;
				}
				get currentTime() {
					return this.audio.currentTime;
				}
			}
			class ChaimuPlayer extends BasePlayer {
				static name = "ChaimuPlayer";
				audioBuffer;
				audioElement;
				mediaElementSource;
				gainNode;
				blobUrl;
				isClearing = !1;
				isInitializing = !1;
				clearingPromise;
				async fetchAudio() {
					if (!this._src) throw Error("No audio source provided");
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					h.log(`[ChaimuPlayer] Fetching audio from ${this._src}...`);
					let d;
					try {
						let f = await this.fetch(this._src, this.fetchOpts);
						h.log("[ChaimuPlayer] Decoding fetched audio...");
						let p = await f.arrayBuffer(), m = new Blob([p]);
						d = URL.createObjectURL(m), this.audioBuffer = await this.chaimu.audioContext.decodeAudioData(p), this.blobUrl && URL.revokeObjectURL(this.blobUrl), this.blobUrl = d, d = void 0;
					} catch (f) {
						throw d && URL.revokeObjectURL(d), Error(`Failed to fetch audio file, because ${f.message}`);
					}
					return this;
				}
				initAudioBooster() {
					return this.chaimu.audioContext ? (this.disconnectAudioNodes(), this.gainNode = this.chaimu.audioContext.createGain(), this) : this;
				}
				disconnectAudioNodes() {
					this.mediaElementSource && (this.mediaElementSource.disconnect(), this.mediaElementSource = void 0), this.gainNode && (this.gainNode.disconnect(), this.gainNode = void 0);
				}
				async init() {
					if (this.isInitializing) throw Error("Initialization already in progress");
					this.isInitializing = !0;
					try {
						return await this.fetchAudio(), this.initAudioBooster(), this.createAudioElement(), this;
					} finally {
						this.isInitializing = !1;
					}
				}
				createAudioElement() {
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					if (!this.blobUrl) throw Error("No blob URL available.");
					let d = new Audio(this.blobUrl);
					d.crossOrigin = "anonymous", "preservesPitch" in d && (d.preservesPitch = !0, "mozPreservesPitch" in d && (d.mozPreservesPitch = !0), "webkitPreservesPitch" in d && (d.webkitPreservesPitch = !0)), this.audioElement = d, this.mediaElementSource = this.chaimu.audioContext.createMediaElementSource(d), this.mediaElementSource.connect(this.gainNode), this.gainNode.connect(this.chaimu.audioContext.destination);
				}
				lipSync(d = !1) {
					if (h.log("[ChaimuPlayer] lipsync video", this.chaimu.video, this), !this.chaimu.video) return this;
					if (!d) return h.log("[ChaimuPlayer] lipsync mode isn't set"), this;
					switch (h.log(`[ChaimuPlayer] lipsync mode is ${d}`), d) {
						case "play":
						case "playing":
						case "ratechange":
						case "seeked": return this.chaimu.video.paused || this.start(), this;
						case "pause":
						case "waiting": return this.pause(), this;
						default: return this;
					}
				}
				async reopenCtx() {
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					try {
						this.chaimu.audioContext.state !== "closed" && await this.chaimu.audioContext.close();
					} catch (d) {
						h.log("[ChaimuPlayer] Failed to close audio context:", d);
					}
					return this.chaimu.audioContext = initAudioContext(), this;
				}
				async clear() {
					if (this.isClearing && this.clearingPromise) return this.clearingPromise;
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					return h.log("clear audio context"), this.isClearing = !0, this.clearingPromise = (async () => {
						try {
							await this.pause(), this.audioElement && (this.audioElement.pause(), this.audioElement = void 0), this.blobUrl && (URL.revokeObjectURL(this.blobUrl), this.blobUrl = void 0), this.disconnectAudioNodes();
							let d = this.gainNode ? this.gainNode.gain.value : 1;
							return await this.reopenCtx(), this.chaimu.audioContext && (this.initAudioBooster(), this.volume = d), this;
						} finally {
							this.isClearing = !1, this.clearingPromise = void 0;
						}
					})(), this.clearingPromise;
				}
				async start() {
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					if (!this.audioElement) throw Error("Audio element is missing");
					return this.isClearing && this.clearingPromise && (h.log("The other cleaner is still running, waiting..."), await this.clearingPromise), h.log("starting audio via HTMLAudioElement"), await this.play(), this.chaimu.video && (this.audioElement.currentTime = this.chaimu.video.currentTime, this.audioElement.playbackRate = this.chaimu.video.playbackRate), this.audioElement.play().catch((d) => h.log("[ChaimuPlayer] Play audioElement failed:", d)), this;
				}
				async pause() {
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					return this.audioElement && this.audioElement.pause(), this.chaimu.audioContext.state === "running" && await this.chaimu.audioContext.suspend(), this;
				}
				async play() {
					if (!this.chaimu.audioContext) throw Error("No audio context available");
					return await this.chaimu.audioContext.resume(), this;
				}
				set src(d) {
					this._src = d;
				}
				get src() {
					return this._src;
				}
				get currentSrc() {
					return this._src;
				}
				set volume(d) {
					this.gainNode && (this.gainNode.gain.value = d);
				}
				get volume() {
					return this.gainNode ? this.gainNode.gain.value : 0;
				}
				set playbackRate(d) {
					this.audioElement && (this.audioElement.playbackRate = d);
				}
				get playbackRate() {
					return this.audioElement ? this.audioElement.playbackRate : this.chaimu.video?.playbackRate ?? 1;
				}
				get currentTime() {
					return this.chaimu.video?.currentTime ?? 0;
				}
			}
			class Chaimu {
				_debug = !1;
				audioContext;
				player;
				video;
				fetchFn;
				fetchOpts;
				constructor({ url: d, video: f, debug: p = !1, fetchFn: h = m.fetchFn, fetchOpts: g = {}, preferAudio: _ = !1 }) {
					this._debug = m.debug = p, this.fetchFn = h, this.fetchOpts = g, this.audioContext = initAudioContext(), this.player = this.audioContext && !_ ? new ChaimuPlayer(this, d) : new AudioPlayer(this, d), this.video = f;
				}
				async init() {
					await this.player.init(), this.video && !this.video.paused && this.player.lipSync("play"), this.player.addVideoEvents();
				}
				set debug(d) {
					this._debug = m.debug = d;
				}
				get debug() {
					return this._debug;
				}
			}
		},
		"./node_modules/edge-tts-universal/dist/browser.js": (d, f, p) => {
			"use strict";
			var EdgeTTSBrowser = class {
				constructor(d, f = "Microsoft Server Speech Text to Speech Voice (en-US, EmmaMultilingualNeural)", p = {}) {
					this.ws = null, this.WSS_URL = "wss://speech.platform.bing.com/consumer/speech/synthesize/readaloud/edge/v1", this.TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4", this.text = d, this.voice = f, this.rate = p.rate || "+0%", this.volume = p.volume || "+0%", this.pitch = p.pitch || "+0Hz";
				}
				async synthesize() {
					if (await this.connect(), !this.ws || this.ws.readyState !== WebSocket.OPEN) throw Error("WebSocket is not connected.");
					return this.ws.send(this.createSpeechConfig()), this.ws.send(this.createSSML()), new Promise((d, f) => {
						let p = [], m = [];
						this.ws && (this.ws.onmessage = (d) => {
							if (typeof d.data == "string") {
								let { headers: f, body: p } = this.parseMessage(d.data);
								if (f.Path === "audio.metadata") try {
									let d = JSON.parse(p);
									if (d.Metadata && Array.isArray(d.Metadata)) {
										let f = d.Metadata.filter((d) => d.Type === "WordBoundary" && d.Data).map((d) => ({
											offset: d.Data.Offset,
											duration: d.Data.Duration,
											text: d.Data.text.Text
										}));
										m = m.concat(f);
									}
								} catch {}
								else f.Path === "turn.end" && this.ws && this.ws.close();
							} else d.data instanceof Blob && d.data.arrayBuffer().then((d) => {
								let f = new DataView(d), m = f.getUint16(0);
								if (d.byteLength > m + 2) {
									let f = new Uint8Array(d, m + 2);
									p.push(f);
								}
							});
						}, this.ws.onclose = () => {
							let f = new Blob(p, { type: "audio/mpeg" });
							d({
								audio: f,
								subtitle: m
							});
						}, this.ws.onerror = (d) => {
							f(d);
						});
					});
				}
				connect() {
					let d = this.generateConnectionId(), f = this.generateSecMsGec(), p = `${this.WSS_URL}?TrustedClientToken=${this.TRUSTED_CLIENT_TOKEN}&ConnectionId=${d}&Sec-MS-GEC=${f}&Sec-MS-GEC-Version=1-130.0.2849.68`;
					return this.ws = new WebSocket(p), new Promise((d, f) => {
						if (!this.ws) return f(Error("WebSocket not initialized"));
						this.ws.onopen = () => {
							d();
						}, this.ws.onerror = (d) => {
							f(d);
						};
					});
				}
				parseMessage(d) {
					let f = d.split("\r\n\r\n"), p = f[0].split("\r\n"), m = {};
					return p.forEach((d) => {
						let [f, p] = d.split(":", 2);
						f && p && (m[f.trim()] = p.trim());
					}), {
						headers: m,
						body: f[1] || ""
					};
				}
				createSpeechConfig() {
					let d = { context: { synthesis: { audio: {
						metadataoptions: {
							sentenceBoundaryEnabled: !1,
							wordBoundaryEnabled: !0
						},
						outputFormat: "audio-24khz-48kbitrate-mono-mp3"
					} } } };
					return `X-Timestamp:${this.getTimestamp()}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
${JSON.stringify(d)}`;
				}
				createSSML() {
					let d = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
      <voice name='${this.voice}'>
        <prosody pitch='${this.pitch}' rate='${this.rate}' volume='${this.volume}'>
          ${this.escapeXml(this.text)}
        </prosody>
      </voice>
    </speak>`;
					return `X-RequestId:${this.generateConnectionId()}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${this.getTimestamp()}Z\r
Path:ssml\r
\r
${d}`;
				}
				generateConnectionId() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (d) => {
						let f = Math.random() * 16 | 0, p = d === "x" ? f : f & 3 | 8;
						return p.toString(16);
					});
				}
				getTimestamp() {
					return new Date().toISOString().replace(/[:-]|\.\d{3}/g, "");
				}
				escapeXml(d) {
					return d.replace(/[<>&'"]/g, (d) => {
						switch (d) {
							case "<": return "&lt;";
							case ">": return "&gt;";
							case "&": return "&amp;";
							case "'": return "&apos;";
							case "\"": return "&quot;";
							default: return d;
						}
					});
				}
				async generateSecMsGec() {
					let d = 11644473600, f = 1e9, p = Date.now() / 1e3;
					p += d, p -= p % 300, p *= f / 100;
					let m = `${p.toFixed(0)}${this.TRUSTED_CLIENT_TOKEN}`, h = new TextEncoder(), g = h.encode(m), _ = await crypto.subtle.digest("SHA-256", g), v = Array.from(new Uint8Array(_));
					return v.map((d) => d.toString(16).padStart(2, "0")).join("").toUpperCase();
				}
			};
			function browserConnectId() {
				let d = new Uint8Array(16);
				crypto.getRandomValues(d), d[6] = d[6] & 15 | 64, d[8] = d[8] & 63 | 128;
				let f = Array.from(d, (d) => d.toString(16).padStart(2, "0")).join(""), p = `${f.slice(0, 8)}-${f.slice(8, 12)}-${f.slice(12, 16)}-${f.slice(16, 20)}-${f.slice(20, 32)}`;
				return p.replace(/-/g, "");
			}
			function browserEscape(d) {
				return d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
			}
			function browserUnescape(d) {
				return d.replace(/&quot;/g, "\"").replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
			}
			function browserRemoveIncompatibleCharacters(d) {
				return d.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, " ");
			}
			function browserDateToString() {
				return new Date().toUTCString().replace("GMT", "GMT+0000 (Coordinated Universal Time)");
			}
			function browserMkssml(d, f, p, m, h) {
				return `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${d}'><prosody pitch='${m}' rate='${f}' volume='${p}'>${h}</prosody></voice></speak>`;
			}
			function browserSsmlHeadersPlusData(d, f, p) {
				return `X-RequestId:${d}\r
Content-Type:application/ssml+xml\r
X-Timestamp:${f}Z\r
Path:ssml\r
\r
${p}`;
			}
			var EdgeTTSException = class extends Error {
				constructor(d) {
					super(d), this.name = "EdgeTTSException";
				}
			}, SkewAdjustmentError = class extends EdgeTTSException {
				constructor(d) {
					super(d), this.name = "SkewAdjustmentError";
				}
			}, UnknownResponse = class extends EdgeTTSException {
				constructor(d) {
					super(d), this.name = "UnknownResponse";
				}
			}, UnexpectedResponse = class extends EdgeTTSException {
				constructor(d) {
					super(d), this.name = "UnexpectedResponse";
				}
			}, NoAudioReceived = class extends EdgeTTSException {
				constructor(d) {
					super(d), this.name = "NoAudioReceived";
				}
			}, WebSocketError = class extends EdgeTTSException {
				constructor(d) {
					super(d), this.name = "WebSocketError";
				}
			}, ValueError = class extends EdgeTTSException {
				constructor(d) {
					super(d), this.name = "ValueError";
				}
			}, m = class _TTSConfig {
				constructor({ voice: d, rate: f = "+0%", volume: p = "+0%", pitch: m = "+0Hz" }) {
					this.voice = d, this.rate = f, this.volume = p, this.pitch = m, this.validate();
				}
				validate() {
					let d = /^([a-z]{2,})-([A-Z]{2,})-(.+Neural)$/.exec(this.voice);
					if (d) {
						let [, f] = d, [, , p, m] = d;
						if (m.includes("-")) {
							let d = m.split("-");
							p += `-${d[0]}`, m = d[1];
						}
						this.voice = `Microsoft Server Speech Text to Speech Voice (${f}-${p}, ${m})`;
					}
					_TTSConfig.validateStringParam("voice", this.voice, /^Microsoft Server Speech Text to Speech Voice \(.+,.+\)$/), _TTSConfig.validateStringParam("rate", this.rate, /^[+-]\d+%$/), _TTSConfig.validateStringParam("volume", this.volume, /^[+-]\d+%$/), _TTSConfig.validateStringParam("pitch", this.pitch, /^[+-]\d+Hz$/);
				}
				static validateStringParam(d, f, p) {
					if (typeof f != "string") throw TypeError(`${d} must be a string`);
					if (!p.test(f)) throw new ValueError(`Invalid ${d} '${f}'.`);
				}
			}, h = "speech.platform.bing.com/consumer/speech/synthesize/readaloud", g = "6A5AA1D4EAFF4E9FB37E23D68491D6F4", _ = null, v = null, b = "en-US-EmmaMultilingualNeural", x = "130.0.2849.68", C = x.split(".")[0], w = null, T = {
				"User-Agent": `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${C}.0.0.0 Safari/537.36 Edg/${C}.0.0.0`,
				"Accept-Encoding": "gzip, deflate, br",
				"Accept-Language": "en-US,en;q=0.9"
			}, E = {
				...T,
				Authority: "speech.platform.bing.com",
				"Sec-CH-UA": `" Not;A Brand";v="99", "Microsoft Edge";v="${C}", "Chromium";v="${C}"`,
				"Sec-CH-UA-Mobile": "?0",
				Accept: "*/*",
				"Sec-Fetch-Site": "none",
				"Sec-Fetch-Mode": "cors",
				"Sec-Fetch-Dest": "empty"
			}, D = 11644473600, O = 1e9, A = class _BrowserDRM {
				static adjClockSkewSeconds(d) {
					_BrowserDRM.clockSkewSeconds += d;
				}
				static getUnixTimestamp() {
					return Date.now() / 1e3 + _BrowserDRM.clockSkewSeconds;
				}
				static parseRfc2616Date(d) {
					try {
						return new Date(d).getTime() / 1e3;
					} catch {
						return null;
					}
				}
				static handleClientResponseError(d) {
					if (!d.headers) throw new SkewAdjustmentError("No headers in response.");
					let f = d.headers.date || d.headers.Date;
					if (!f) throw new SkewAdjustmentError("No server date in headers.");
					let p = _BrowserDRM.parseRfc2616Date(f);
					if (p === null) throw new SkewAdjustmentError(`Failed to parse server date: ${f}`);
					let m = _BrowserDRM.getUnixTimestamp();
					_BrowserDRM.adjClockSkewSeconds(p - m);
				}
				static async generateSecMsGec() {
					let d = _BrowserDRM.getUnixTimestamp();
					d += D, d -= d % 300, d *= O / 100;
					let f = `${d.toFixed(0)}${g}`, p = new TextEncoder(), m = p.encode(f), h = await crypto.subtle.digest("SHA-256", m), _ = Array.from(new Uint8Array(h));
					return _.map((d) => d.toString(16).padStart(2, "0")).join("").toUpperCase();
				}
			};
			A.clockSkewSeconds = 0;
			var j = null, BrowserBuffer = class {
				static from(d, f) {
					if (typeof d == "string") return new TextEncoder().encode(d);
					if (d instanceof ArrayBuffer) return new Uint8Array(d);
					if (d instanceof Uint8Array) return d;
					throw Error("Unsupported input type for BrowserBuffer.from");
				}
				static concat(d) {
					let f = d.reduce((d, f) => d + f.length, 0), p = new Uint8Array(f), m = 0;
					for (let f of d) p.set(f, m), m += f.length;
					return p;
				}
			};
			function browserGetHeadersAndDataFromText(d) {
				let f = new TextDecoder().decode(d), p = f.indexOf("\r\n\r\n"), m = {};
				if (p !== -1) {
					let d = f.substring(0, p), h = d.split("\r\n");
					for (let d of h) {
						let [f, p] = d.split(":", 2);
						f && p && (m[f] = p.trim());
					}
				}
				let h = new TextEncoder().encode(f.substring(0, p + 4)).length;
				return [m, d.slice(h)];
			}
			function browserGetHeadersAndDataFromBinary(d) {
				if (d.length < 2) throw Error("Message too short to contain header length");
				let f = d[0] << 8 | d[1], p = {};
				if (f > 0 && f + 2 <= d.length) {
					let m = d.slice(2, f + 2), h = new TextDecoder().decode(m), g = h.split("\r\n");
					for (let d of g) {
						let [f, m] = d.split(":", 2);
						f && m && (p[f] = m.trim());
					}
				}
				return [p, d.slice(f + 2)];
			}
			function browserSplitTextByByteLength(d, f) {
				return function* () {
					let p = new TextEncoder().encode(d);
					for (; p.length > f;) {
						let d = f, m = p.slice(0, f), h = new TextDecoder().decode(m), g = h.lastIndexOf("\n"), _ = h.lastIndexOf(" ");
						g > 0 ? d = new TextEncoder().encode(h.substring(0, g)).length : _ > 0 && (d = new TextEncoder().encode(h.substring(0, _)).length);
						let v = p.slice(0, d), b = new TextDecoder().decode(v).trim();
						b && (yield new TextEncoder().encode(b)), p = p.slice(d);
					}
					let m = new TextDecoder().decode(p).trim();
					m && (yield new TextEncoder().encode(m));
				}();
			}
			var BrowserCommunicate = class {
				constructor(d, f = {}) {
					if (this.state = {
						partialText: BrowserBuffer.from(""),
						offsetCompensation: 0,
						lastDurationOffset: 0,
						streamWasCalled: !1
					}, this.ttsConfig = new m({
						voice: f.voice || b,
						rate: f.rate,
						volume: f.volume,
						pitch: f.pitch
					}), typeof d != "string") throw TypeError("text must be a string");
					this.texts = browserSplitTextByByteLength(browserEscape(browserRemoveIncompatibleCharacters(d)), 4096), this.connectionTimeout = f.connectionTimeout;
				}
				parseMetadata(d) {
					let f = JSON.parse(new TextDecoder().decode(d));
					for (let d of f.Metadata) {
						let f = d.Type;
						if (f === "WordBoundary") {
							let p = d.Data.Offset + this.state.offsetCompensation, m = d.Data.Duration;
							return {
								type: f,
								offset: p,
								duration: m,
								text: browserUnescape(d.Data.text.Text)
							};
						}
						if (f === "SessionEnd") continue;
						throw new UnknownResponse(`Unknown metadata type: ${f}`);
					}
					throw new UnexpectedResponse("No WordBoundary metadata found");
				}
				async *_stream() {
					let d = `${_}&Sec-MS-GEC=${await j.generateSecMsGec()}&Sec-MS-GEC-Version=${w}&ConnectionId=${browserConnectId()}`, f = new WebSocket(d), p = [], m = null, h;
					this.connectionTimeout && (h = window.setTimeout(() => {
						f.close(), p.push(new WebSocketError("Connection timeout")), m && m();
					}, this.connectionTimeout)), f.onmessage = (d) => {
						h && (window.clearTimeout(h), h = void 0);
						let g = d.data;
						if (typeof g == "string") {
							let [d, m] = browserGetHeadersAndDataFromText(BrowserBuffer.from(g)), h = d.Path;
							if (h === "audio.metadata") try {
								let d = this.parseMetadata(m);
								this.state.lastDurationOffset = d.offset + d.duration, p.push(d);
							} catch (d) {
								p.push(d);
							}
							else h === "turn.end" ? (this.state.offsetCompensation = this.state.lastDurationOffset, f.close()) : h !== "response" && h !== "turn.start" && p.push(new UnknownResponse(`Unknown path received: ${h}`));
						} else if (g instanceof ArrayBuffer) {
							let d = BrowserBuffer.from(g);
							if (d.length < 2) p.push(new UnexpectedResponse("We received a binary message, but it is missing the header length."));
							else {
								let [f, m] = browserGetHeadersAndDataFromBinary(d);
								if (f.Path !== "audio") p.push(new UnexpectedResponse("Received binary message, but the path is not audio."));
								else {
									let d = f["Content-Type"];
									d === "audio/mpeg" ? m.length === 0 ? p.push(new UnexpectedResponse("Received binary message, but it is missing the audio data.")) : p.push({
										type: "audio",
										data: m
									}) : m.length > 0 && p.push(new UnexpectedResponse("Received binary message, but with an unexpected Content-Type."));
								}
							}
						} else g instanceof Blob && g.arrayBuffer().then((d) => {
							let f = BrowserBuffer.from(d);
							if (f.length < 2) p.push(new UnexpectedResponse("We received a binary message, but it is missing the header length."));
							else {
								let [d, m] = browserGetHeadersAndDataFromBinary(f);
								if (d.Path !== "audio") p.push(new UnexpectedResponse("Received binary message, but the path is not audio."));
								else {
									let f = d["Content-Type"];
									f === "audio/mpeg" ? m.length === 0 ? p.push(new UnexpectedResponse("Received binary message, but it is missing the audio data.")) : p.push({
										type: "audio",
										data: m
									}) : m.length > 0 && p.push(new UnexpectedResponse("Received binary message, but with an unexpected Content-Type."));
								}
							}
							m && m();
						});
						m && m();
					}, f.onerror = (d) => {
						h && (window.clearTimeout(h), h = void 0), p.push(new WebSocketError("WebSocket error occurred")), m && m();
					}, f.onclose = () => {
						h && (window.clearTimeout(h), h = void 0), p.push("close"), m && m();
					}, await new Promise((d, p) => {
						f.onopen = () => {
							h && (window.clearTimeout(h), h = void 0), d();
						}, this.connectionTimeout && setTimeout(() => {
							f.readyState === WebSocket.CONNECTING && (f.close(), p(new WebSocketError("Connection timeout")));
						}, this.connectionTimeout);
					}), f.send(`X-Timestamp:${browserDateToString()}\r
Content-Type:application/json; charset=utf-8\r
Path:speech.config\r
\r
{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"true"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r
`), f.send(browserSsmlHeadersPlusData(browserConnectId(), browserDateToString(), browserMkssml(this.ttsConfig.voice, this.ttsConfig.rate, this.ttsConfig.volume, this.ttsConfig.pitch, new TextDecoder().decode(this.state.partialText))));
					let g = !1;
					for (;;) if (p.length > 0) {
						let d = p.shift();
						if (d === "close") {
							if (!g) throw new NoAudioReceived("No audio was received.");
							break;
						} else if (d instanceof Error) throw d;
						else d.type === "audio" && (g = !0), yield d;
					} else await new Promise((d) => {
						m = d, setTimeout(d, 50);
					});
				}
				async *stream() {
					if (this.state.streamWasCalled) throw Error("stream can only be called once.");
					this.state.streamWasCalled = !0;
					for (let d of this.texts) {
						this.state.partialText = d;
						for await (let d of this._stream()) yield d;
					}
				}
			};
			function concatUint8Arrays(d) {
				if (d.length === 0) return new Uint8Array();
				if (d.length === 1) return d[0];
				let f = d.reduce((d, f) => d + f.length, 0), p = new Uint8Array(f), m = 0;
				for (let f of d) f.length > 0 && (p.set(f, m), m += f.length);
				return p;
			}
			var BrowserEdgeTTS = class {
				constructor(d, f = "Microsoft Server Speech Text to Speech Voice (en-US, EmmaMultilingualNeural)", p = {}) {
					this.text = d, this.voice = f, this.rate = p.rate || "+0%", this.volume = p.volume || "+0%", this.pitch = p.pitch || "+0Hz";
				}
				async synthesize() {
					let d = new BrowserCommunicate(this.text, {
						voice: this.voice,
						rate: this.rate,
						volume: this.volume,
						pitch: this.pitch
					}), f = [], p = [];
					for await (let m of d.stream()) m.type === "audio" && m.data ? f.push(m.data) : m.type === "WordBoundary" && m.offset !== void 0 && m.duration !== void 0 && m.text !== void 0 && p.push({
						offset: m.offset,
						duration: m.duration,
						text: m.text
					});
					let m = concatUint8Arrays(f), h = new Blob([m], { type: "audio/mpeg" });
					return {
						audio: h,
						subtitle: p
					};
				}
			};
			function formatTimestamp(d, f) {
				let p = Math.floor(d / 1e7), m = Math.floor(p / 3600), h = Math.floor(p % 3600 / 60), g = p % 60, _ = Math.floor(d % 1e7 / 1e4), v = f === "vtt" ? "." : ",";
				return `${padNumber(m)}:${padNumber(h)}:${padNumber(g)}${v}${padNumber(_, 3)}`;
			}
			function padNumber(d, f = 2) {
				return d.toString().padStart(f, "0");
			}
			function createVTT(d) {
				let f = "WEBVTT\n\n";
				return d.forEach((d, p) => {
					let m = formatTimestamp(d.offset, "vtt"), h = formatTimestamp(d.offset + d.duration, "vtt");
					f += `${p + 1}
`, f += `${m} --> ${h}
`, f += `${d.text}

`;
				}), f;
			}
			function createSRT(d) {
				let f = "";
				return d.forEach((d, p) => {
					let m = formatTimestamp(d.offset, "srt"), h = formatTimestamp(d.offset + d.duration, "srt");
					f += `${p + 1}
`, f += `${m} --> ${h}
`, f += `${d.text}

`;
				}), f;
			}
			var BrowserFetchError = class extends Error {
				constructor(d, f) {
					super(d), this.name = "BrowserFetchError", this.response = f;
				}
			};
			async function _listVoices() {
				let d = `${v}&Sec-MS-GEC=${await j.generateSecMsGec()}&Sec-MS-GEC-Version=${w}`;
				try {
					let f = await fetch(d, { headers: E });
					if (!f.ok) {
						let d = {};
						throw f.headers.forEach((f, p) => {
							d[p] = f;
						}), new BrowserFetchError(`HTTP ${f.status}`, {
							status: f.status,
							headers: d
						});
					}
					let p = await f.json();
					for (let d of p) d.VoiceTag.ContentCategories = d.VoiceTag.ContentCategories.map((d) => d.trim()), d.VoiceTag.VoicePersonalities = d.VoiceTag.VoicePersonalities.map((d) => d.trim());
					return p;
				} catch (d) {
					throw d instanceof BrowserFetchError ? d : new BrowserFetchError(d instanceof Error ? d.message : "Unknown fetch error");
				}
			}
			async function listVoices() {
				try {
					return await _listVoices();
				} catch (d) {
					if (d instanceof BrowserFetchError && d.response?.status === 403) return j.handleClientResponseError(d.response), await _listVoices();
					throw d;
				}
			}
			var F = class _BrowserVoicesManager {
				constructor() {
					this.voices = [], this.calledCreate = !1;
				}
				static async create(d) {
					let f = new _BrowserVoicesManager(), p = d ?? await listVoices();
					return f.voices = p.map((d) => ({
						...d,
						Language: d.Locale.split("-")[0]
					})), f.calledCreate = !0, f;
				}
				find(d) {
					if (!this.calledCreate) throw Error("BrowserVoicesManager.find() called before BrowserVoicesManager.create()");
					return this.voices.filter((f) => Object.entries(d).every(([d, p]) => f[d] === p));
				}
			};
			function formatTime(d) {
				let f = Math.floor(d / 3600), p = Math.floor(d % 3600 / 60), m = Math.floor(d % 60), h = Math.round((d - Math.floor(d)) * 1e3), pad = (d, f = 2) => d.toString().padStart(f, "0");
				return `${pad(f)}:${pad(p)}:${pad(m)},${pad(h, 3)}`;
			}
			var SubMaker = class {
				constructor() {
					this.cues = [];
				}
				feed(d) {
					if (d.type !== "WordBoundary" || d.offset === void 0 || d.duration === void 0 || d.text === void 0) throw new ValueError("Invalid message type, expected 'WordBoundary' with offset, duration and text");
					let f = d.offset / 1e7, p = (d.offset + d.duration) / 1e7;
					this.cues.push({
						index: this.cues.length + 1,
						start: f,
						end: p,
						content: d.text
					});
				}
				mergeCues(d) {
					if (d <= 0) throw new ValueError("Invalid number of words to merge, expected > 0");
					if (this.cues.length === 0) return;
					let f = [], p = this.cues[0];
					for (let m of this.cues.slice(1)) p.content.split(" ").length < d ? p = {
						...p,
						end: m.end,
						content: `${p.content} ${m.content}`
					} : (f.push(p), p = m);
					f.push(p), this.cues = f.map((d, f) => ({
						...d,
						index: f + 1
					}));
				}
				getSrt() {
					return this.cues.map((d) => `${d.index}\r
${formatTime(d.start)} --> ${formatTime(d.end)}\r
${d.content}\r
`).join("\r\n");
				}
				toString() {
					return this.getSrt();
				}
			};
		},
		"./node_modules/lit-html/lit-html.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				JW: () => G,
				XX: () => B,
				qy: () => W
			});
			let m = globalThis, h = m.trustedTypes, g = h ? h.createPolicy("lit-html", { createHTML: (d) => d }) : void 0, _ = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, b = "?" + v, x = `<${b}>`, C = document, l = () => C.createComment(""), c = (d) => d === null || typeof d != "object" && typeof d != "function", w = Array.isArray, u = (d) => w(d) || typeof d?.[Symbol.iterator] == "function", T = "[ 	\n\f\r]", E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, D = /-->/g, O = />/g, A = RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), j = /'/g, F = /"/g, U = /^(?:script|style|textarea|title)$/i, y = (d) => (f, ...p) => ({
				_$litType$: d,
				strings: f,
				values: p
			}), W = y(1), G = y(2), K = y(3), q = Symbol.for("lit-noChange"), J = Symbol.for("lit-nothing"), Y = new WeakMap(), X = C.createTreeWalker(C, 129);
			function P(d, f) {
				if (!w(d) || !d.hasOwnProperty("raw")) throw Error("invalid template strings array");
				return g === void 0 ? f : g.createHTML(f);
			}
			let V = (d, f) => {
				let p = d.length - 1, m = [], h, g = f === 2 ? "<svg>" : f === 3 ? "<math>" : "", b = E;
				for (let f = 0; f < p; f++) {
					let p = d[f], C, w, T = -1, W = 0;
					for (; W < p.length && (b.lastIndex = W, w = b.exec(p), w !== null);) W = b.lastIndex, b === E ? w[1] === "!--" ? b = D : w[1] === void 0 ? w[2] === void 0 ? w[3] !== void 0 && (b = A) : (U.test(w[2]) && (h = RegExp("</" + w[2], "g")), b = A) : b = O : b === A ? w[0] === ">" ? (b = h ?? E, T = -1) : w[1] === void 0 ? T = -2 : (T = b.lastIndex - w[2].length, C = w[1], b = w[3] === void 0 ? A : w[3] === "\"" ? F : j) : b === F || b === j ? b = A : b === D || b === O ? b = E : (b = A, h = void 0);
					let G = b === A && d[f + 1].startsWith("/>") ? " " : "";
					g += b === E ? p + x : T >= 0 ? (m.push(C), p.slice(0, T) + _ + p.slice(T) + v + G) : p + v + (T === -2 ? f : G);
				}
				return [P(d, g + (d[p] || "<?>") + (f === 2 ? "</svg>" : f === 3 ? "</math>" : "")), m];
			};
			class N {
				constructor({ strings: d, _$litType$: f }, p) {
					let m;
					this.parts = [];
					let g = 0, x = 0, C = d.length - 1, w = this.parts, [T, E] = V(d, f);
					if (this.el = N.createElement(T, p), X.currentNode = this.el.content, f === 2 || f === 3) {
						let d = this.el.content.firstChild;
						d.replaceWith(...d.childNodes);
					}
					for (; (m = X.nextNode()) !== null && w.length < C;) {
						if (m.nodeType === 1) {
							if (m.hasAttributes()) for (let d of m.getAttributeNames()) if (d.endsWith(_)) {
								let f = E[x++], p = m.getAttribute(d).split(v), h = /([.?@])?(.*)/.exec(f);
								w.push({
									type: 1,
									index: g,
									name: h[2],
									strings: p,
									ctor: h[1] === "." ? H : h[1] === "?" ? I : h[1] === "@" ? L : k
								}), m.removeAttribute(d);
							} else d.startsWith(v) && (w.push({
								type: 6,
								index: g
							}), m.removeAttribute(d));
							if (U.test(m.tagName)) {
								let d = m.textContent.split(v), f = d.length - 1;
								if (f > 0) {
									m.textContent = h ? h.emptyScript : "";
									for (let p = 0; p < f; p++) m.append(d[p], l()), X.nextNode(), w.push({
										type: 2,
										index: ++g
									});
									m.append(d[f], l());
								}
							}
						} else if (m.nodeType === 8) if (m.data === b) w.push({
							type: 2,
							index: g
						});
						else {
							let d = -1;
							for (; (d = m.data.indexOf(v, d + 1)) !== -1;) w.push({
								type: 7,
								index: g
							}), d += v.length - 1;
						}
						g++;
					}
				}
				static createElement(d, f) {
					let p = C.createElement("template");
					return p.innerHTML = d, p;
				}
			}
			function S(d, f, p = d, m) {
				if (f === q) return f;
				let h = m === void 0 ? p._$Cl : p._$Co?.[m], g = c(f) ? void 0 : f._$litDirective$;
				return h?.constructor !== g && (h?._$AO?.(!1), g === void 0 ? h = void 0 : (h = new g(d), h._$AT(d, p, m)), m === void 0 ? p._$Cl = h : (p._$Co ??= [])[m] = h), h !== void 0 && (f = S(d, h._$AS(d, f.values), h, m)), f;
			}
			class M {
				constructor(d, f) {
					this._$AV = [], this._$AN = void 0, this._$AD = d, this._$AM = f;
				}
				get parentNode() {
					return this._$AM.parentNode;
				}
				get _$AU() {
					return this._$AM._$AU;
				}
				u(d) {
					let { el: { content: f }, parts: p } = this._$AD, m = (d?.creationScope ?? C).importNode(f, !0);
					X.currentNode = m;
					let h = X.nextNode(), g = 0, _ = 0, v = p[0];
					for (; v !== void 0;) {
						if (g === v.index) {
							let f;
							v.type === 2 ? f = new R(h, h.nextSibling, this, d) : v.type === 1 ? f = new v.ctor(h, v.name, v.strings, this, d) : v.type === 6 && (f = new z(h, this, d)), this._$AV.push(f), v = p[++_];
						}
						g !== v?.index && (h = X.nextNode(), g++);
					}
					return X.currentNode = C, m;
				}
				p(d) {
					let f = 0;
					for (let p of this._$AV) p !== void 0 && (p.strings === void 0 ? p._$AI(d[f]) : (p._$AI(d, p, f), f += p.strings.length - 2)), f++;
				}
			}
			class R {
				get _$AU() {
					return this._$AM?._$AU ?? this._$Cv;
				}
				constructor(d, f, p, m) {
					this.type = 2, this._$AH = J, this._$AN = void 0, this._$AA = d, this._$AB = f, this._$AM = p, this.options = m, this._$Cv = m?.isConnected ?? !0;
				}
				get parentNode() {
					let d = this._$AA.parentNode, f = this._$AM;
					return f !== void 0 && d?.nodeType === 11 && (d = f.parentNode), d;
				}
				get startNode() {
					return this._$AA;
				}
				get endNode() {
					return this._$AB;
				}
				_$AI(d, f = this) {
					d = S(this, d, f), c(d) ? d === J || d == null || d === "" ? (this._$AH !== J && this._$AR(), this._$AH = J) : d !== this._$AH && d !== q && this._(d) : d._$litType$ === void 0 ? d.nodeType === void 0 ? u(d) ? this.k(d) : this._(d) : this.T(d) : this.$(d);
				}
				O(d) {
					return this._$AA.parentNode.insertBefore(d, this._$AB);
				}
				T(d) {
					this._$AH !== d && (this._$AR(), this._$AH = this.O(d));
				}
				_(d) {
					this._$AH !== J && c(this._$AH) ? this._$AA.nextSibling.data = d : this.T(C.createTextNode(d)), this._$AH = d;
				}
				$(d) {
					let { values: f, _$litType$: p } = d, m = typeof p == "number" ? this._$AC(d) : (p.el === void 0 && (p.el = N.createElement(P(p.h, p.h[0]), this.options)), p);
					if (this._$AH?._$AD === m) this._$AH.p(f);
					else {
						let d = new M(m, this), p = d.u(this.options);
						d.p(f), this.T(p), this._$AH = d;
					}
				}
				_$AC(d) {
					let f = Y.get(d.strings);
					return f === void 0 && Y.set(d.strings, f = new N(d)), f;
				}
				k(d) {
					w(this._$AH) || (this._$AH = [], this._$AR());
					let f = this._$AH, p, m = 0;
					for (let h of d) m === f.length ? f.push(p = new R(this.O(l()), this.O(l()), this, this.options)) : p = f[m], p._$AI(h), m++;
					m < f.length && (this._$AR(p && p._$AB.nextSibling, m), f.length = m);
				}
				_$AR(d = this._$AA.nextSibling, f) {
					for (this._$AP?.(!1, !0, f); d && d !== this._$AB;) {
						let f = d.nextSibling;
						d.remove(), d = f;
					}
				}
				setConnected(d) {
					this._$AM === void 0 && (this._$Cv = d, this._$AP?.(d));
				}
			}
			class k {
				get tagName() {
					return this.element.tagName;
				}
				get _$AU() {
					return this._$AM._$AU;
				}
				constructor(d, f, p, m, h) {
					this.type = 1, this._$AH = J, this._$AN = void 0, this.element = d, this.name = f, this._$AM = m, this.options = h, p.length > 2 || p[0] !== "" || p[1] !== "" ? (this._$AH = Array(p.length - 1).fill(new String()), this.strings = p) : this._$AH = J;
				}
				_$AI(d, f = this, p, m) {
					let h = this.strings, g = !1;
					if (h === void 0) d = S(this, d, f, 0), g = !c(d) || d !== this._$AH && d !== q, g && (this._$AH = d);
					else {
						let m = d, _, v;
						for (d = h[0], _ = 0; _ < h.length - 1; _++) v = S(this, m[p + _], f, _), v === q && (v = this._$AH[_]), g ||= !c(v) || v !== this._$AH[_], v === J ? d = J : d !== J && (d += (v ?? "") + h[_ + 1]), this._$AH[_] = v;
					}
					g && !m && this.j(d);
				}
				j(d) {
					d === J ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, d ?? "");
				}
			}
			class H extends k {
				constructor() {
					super(...arguments), this.type = 3;
				}
				j(d) {
					this.element[this.name] = d === J ? void 0 : d;
				}
			}
			class I extends k {
				constructor() {
					super(...arguments), this.type = 4;
				}
				j(d) {
					this.element.toggleAttribute(this.name, !!d && d !== J);
				}
			}
			class L extends k {
				constructor(d, f, p, m, h) {
					super(d, f, p, m, h), this.type = 5;
				}
				_$AI(d, f = this) {
					if ((d = S(this, d, f, 0) ?? J) === q) return;
					let p = this._$AH, m = d === J && p !== J || d.capture !== p.capture || d.once !== p.once || d.passive !== p.passive, h = d !== J && (p === J || m);
					m && this.element.removeEventListener(this.name, this, p), h && this.element.addEventListener(this.name, this, d), this._$AH = d;
				}
				handleEvent(d) {
					typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, d) : this._$AH.handleEvent(d);
				}
			}
			class z {
				constructor(d, f, p) {
					this.element = d, this.type = 6, this._$AN = void 0, this._$AM = f, this.options = p;
				}
				get _$AU() {
					return this._$AM._$AU;
				}
				_$AI(d) {
					S(this, d);
				}
			}
			let Z = {
				M: _,
				P: v,
				A: b,
				C: 1,
				L: V,
				R: M,
				D: u,
				V: S,
				I: R,
				H: k,
				N: I,
				U: L,
				B: H,
				F: z
			}, Q = m.litHtmlPolyfillSupport;
			Q?.(N, R), (m.litHtmlVersions ??= []).push("3.3.0");
			let B = (d, f, p) => {
				let m = p?.renderBefore ?? f, h = m._$litPart$;
				if (h === void 0) {
					let d = p?.renderBefore ?? null;
					m._$litPart$ = h = new R(f.insertBefore(l(), d), d, void 0, p ?? {});
				}
				return h._$AI(d), h;
			};
		},
		"./node_modules/requestidlecallback-polyfill/index.js": () => {
			window.requestIdleCallback = window.requestIdleCallback || function(d) {
				var f = Date.now();
				return setTimeout(function() {
					d({
						didTimeout: !1,
						timeRemaining: function() {
							return Math.max(0, 50 - (Date.now() - f));
						}
					});
				}, 1);
			}, window.cancelIdleCallback = window.cancelIdleCallback || function(d) {
				clearTimeout(d);
			};
		},
		"./src/audioDownloader/iframe.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { q: () => initAudioDownloaderIframe });
					var h = p("./src/utils/debug.ts"), g = p("./src/utils/iframeConnector.ts"), _ = p("./src/audioDownloader/shared.ts"), v = p("./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/iframe.ts"), b = d([g, v]);
					[g, v] = b.then ? (await b)() : b;
					let handleIframeMessage = async ({ data: d }) => {
						if (d?.messageDirection === "request") try {
							switch (d.messageType) {
								case "get-download-audio-data-in-iframe":
									await (0, v.H)(d.payload);
									break;
								default: h.A.log(`NOT IMPLEMENTED: ${d.messageType}`, d.payload);
							}
						} catch (d) {
							console.error("[VOT] Main world bridge", { error: d });
						}
					};
					function initAudioDownloaderIframe() {
						return (0, g.Io)(_.D5, handleIframeMessage);
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/audioDownloader/index.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { I: () => AudioDownloader });
					var h = p("./node_modules/@vot.js/core/dist/types/yandex.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/utils/debug.ts"), v = p("./src/audioDownloader/strategies/index.ts"), b = p("./src/audioDownloader/strategies/utils.ts"), x = d([v, b]);
					[v, b] = x.then ? (await x)() : x;
					async function handleCommonAudioDownloadRequest({ audioDownloader: d, translationId: f, videoId: p, signal: m }) {
						let h = await v.W[d.strategy]({
							videoId: p,
							returnByParts: !0,
							signal: m
						});
						if (!h) throw Error("Audio downloader. Can not get audio data");
						_.A.log("Audio downloader. Url found", { audioDownloadType: d.strategy });
						let { getMediaBuffers: g, mediaPartsLength: b, fileId: x } = h;
						if (b < 2) {
							let { value: m } = await g().next();
							if (!m) throw Error("Audio downloader. Empty audio");
							d.onDownloadedAudio.dispatch(f, {
								videoId: p,
								fileId: x,
								audioData: m
							});
							return;
						}
						let C = 0;
						for await (let m of g()) {
							if (!m) throw Error("Audio downloader. Empty audio");
							d.onDownloadedPartialAudio.dispatch(f, {
								videoId: p,
								fileId: x,
								audioData: m,
								version: 1,
								index: C,
								amount: b
							}), C++;
						}
					}
					async function mainWorldMessageHandler({ data: d }) {
						try {
							if (d?.messageDirection !== "request") return;
							switch (d.messageType) {
								case "get-download-audio-data-in-main-world":
									await (0, b.hy)("get-download-audio-data-in-iframe", d);
									break;
							}
						} catch (d) {
							console.error("[VOT] Main world bridge", { error: d });
						}
					}
					class AudioDownloader {
						onDownloadedAudio = new g.Z();
						onDownloadedPartialAudio = new g.Z();
						onDownloadAudioError = new g.Z();
						strategy;
						constructor(d = h.J.WEB_API_GET_ALL_GENERATING_URLS_DATA_FROM_IFRAME) {
							this.strategy = d, _.A.log("Audio downloader created", { strategy: d });
						}
						async runAudioDownload(d, f, p) {
							window.addEventListener("message", mainWorldMessageHandler);
							try {
								await handleCommonAudioDownloadRequest({
									audioDownloader: this,
									translationId: f,
									videoId: d,
									signal: p
								}), _.A.log("Audio downloader. Audio download finished", { videoId: d });
							} catch (f) {
								console.error("Audio downloader. Failed to download audio", f), this.onDownloadAudioError.dispatch(d);
							}
							window.removeEventListener("message", mainWorldMessageHandler);
						}
						addEventListener(d, f) {
							switch (d) {
								case "downloadedAudio":
									this.onDownloadedAudio.addListener(f);
									break;
								case "downloadedPartialAudio":
									this.onDownloadedPartialAudio.addListener(f);
									break;
								case "downloadAudioError":
									this.onDownloadAudioError.addListener(f);
									break;
							}
							return this;
						}
						removeEventListener(d, f) {
							switch (d) {
								case "downloadedAudio":
									this.onDownloadedAudio.removeListener(f);
									break;
								case "downloadedPartialAudio":
									this.onDownloadedPartialAudio.removeListener(f);
									break;
								case "downloadAudioError":
									this.onDownloadAudioError.removeListener(f);
									break;
							}
							return this;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/audioDownloader/shared.ts": (d, f, p) => {
			"use strict";
			p.d(f, {
				Aj: () => v,
				D5: () => g,
				RZ: () => deserializeRequestInit,
				SZ: () => serializeResponse,
				cP: () => w,
				ds: () => C,
				kV: () => b,
				ov: () => _,
				pr: () => h,
				rh: () => getRequestUrl,
				sU: () => x,
				yA: () => serializeRequestInit
			});
			var m = p("./node_modules/@vot.js/shared/dist/index.js");
			let h = "vot_iframe_player", g = "service", _ = "www.youtube.com", v = m.$W.minChunkSize, b = .9, x = [
				6e4,
				8e4,
				15e4,
				33e4,
				46e4
			], C = 15e3, w = .9, getRequestUrl = (d) => typeof d == "string" ? d : d.url;
			function serializeRequestInit(d) {
				let f = new Uint8Array([120, 0]);
				if (typeof d == "string") return {
					body: f,
					cache: "no-store",
					credentials: "include",
					method: "POST"
				};
				let { headers: p, cache: m, credentials: h, integrity: g, keepalive: _, method: v, mode: b, redirect: x, referrer: C, referrerPolicy: w } = d, T = [...p.entries()];
				return {
					body: f,
					cache: m,
					credentials: h,
					headersEntries: T,
					integrity: g,
					keepalive: _,
					method: v,
					mode: b,
					redirect: x,
					referrer: C,
					referrerPolicy: w
				};
			}
			function deserializeRequestInit(d) {
				let { headersEntries: f,...p } = d, m = new Headers(f);
				return {
					...p,
					headers: m
				};
			}
			function serializeResponse(d) {
				let { ok: f, redirected: p, status: m, statusText: h, type: g, url: _ } = d;
				return {
					ok: f,
					redirected: p,
					status: m,
					statusText: h,
					type: g,
					url: _
				};
			}
		},
		"./src/audioDownloader/strategies/index.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { W: () => v });
					var h = p("./node_modules/@vot.js/core/dist/types/yandex.js"), g = p("./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/index.ts"), _ = d([g]);
					g = (_.then ? (await _)() : _)[0];
					let v = { [h.J.WEB_API_GET_ALL_GENERATING_URLS_DATA_FROM_IFRAME]: g.$ };
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/audioDownloader/strategies/utils.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						Lm: () => getChunkRangesFromAdaptiveFormat,
						bB: () => getChunkRangesPartsFromAdaptiveFormat,
						hy: () => sendRequestToIframe,
						iz: () => mergeBuffers,
						qk: () => makeFileId
					});
					var h = p("./src/utils/iframeConnector.ts"), g = p("./src/audioDownloader/shared.ts"), _ = d([h]);
					h = (_.then ? (await _)() : _)[0];
					let v = null;
					function getChunkRangesPartsFromContentLength(d) {
						if (d < 1) throw Error("Audio downloader. WEB API. contentLength must be at least 1");
						let f = Math.round(d * g.kV), p = [], m = [], h = 0, _ = 0, v = 0, b = Math.min(g.sU[_], d);
						for (; b < d;) {
							let d = b < f;
							m.push({
								start: v,
								end: b,
								mustExist: d
							}), h += b - v, h >= g.Aj && (p.push(m), m = [], h = 0), _ < g.sU.length - 1 && _++, v = b + 1, b += g.sU[_];
						}
						return b = d, m.push({
							start: v,
							end: b,
							mustExist: !1
						}), p.push(m), p;
					}
					function parseContentLength({ contentLength: d }) {
						if (typeof d != "string") throw Error(`Audio downloader. WEB API. Content length (${d}) is not a string`);
						let f = Number.parseInt(d);
						if (!Number.isFinite(f)) throw Error(`Audio downloader. WEB API. Parsed content length is not finite (${f})`);
						return f;
					}
					function getChunkRangesPartsFromAdaptiveFormat(d) {
						let f = parseContentLength(d), p = getChunkRangesPartsFromContentLength(f);
						if (!p.length) throw Error("Audio downloader. WEB API. No chunk parts generated");
						return p;
					}
					function getChunkRangesFromContentLength(d) {
						if (d < 1) throw Error("Audio downloader. WEB API. contentLength cannot be less than 1");
						let f = Math.round(d * g.kV), p = [], m = 0, h = 0, _ = Math.min(g.sU[m], d);
						for (; _ < d;) {
							let d = _ < f;
							p.push({
								start: h,
								end: _,
								mustExist: d
							}), m !== g.sU.length - 1 && m++, h = _ + 1, _ += g.sU[m];
						}
						return p.push({
							start: h,
							end: d,
							mustExist: !1
						}), p;
					}
					function getChunkRangesFromAdaptiveFormat(d) {
						let f = parseContentLength(d), p = getChunkRangesFromContentLength(f);
						if (!p.length) throw Error("Audio downloader. WEB API. Empty chunk ranges");
						return p;
					}
					function mergeBuffers(d) {
						let f = d.reduce((d, f) => d + f.byteLength, 0), p = new Uint8Array(f), m = 0;
						for (let f of d) p.set(new Uint8Array(f), m), m += f.byteLength;
						return p;
					}
					async function sendRequestToIframe(d, f) {
						let { videoId: p } = f.payload, m = `https://${g.ov}/embed/${p}?autoplay=0&mute=1`;
						try {
							let p = await (0, h.IA)(v, m, g.pr, g.D5);
							if (!(0, h.yB)(g.pr)) throw Error("Audio downloader. WEB API. Service iframe deleted");
							p.contentWindow?.postMessage({
								messageId: (0, h.Ok)(),
								messageType: d,
								messageDirection: "request",
								payload: f,
								error: f.error
							}, "*");
						} catch (d) {
							f.error = d, f.messageDirection = "response", window.postMessage(f, "*");
						}
					}
					function makeFileId(d, f, p) {
						return JSON.stringify({
							downloadType: d,
							itag: f,
							minChunkSize: g.Aj,
							fileSize: p
						});
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/consts.ts": (d, f, p) => {
			"use strict";
			p.d(f, {
				Cp: () => m,
				Vf: () => g,
				kX: () => h,
				l4: () => _,
				su: () => v
			});
			let m = "Audio downloader. WEB API. Can not get getGeneratingAudioUrlsDataFromIframe due to timeout", h = "Audio downloader. WEB API. Incorrect response on fetch media url", g = "Audio downloader. WEB API. Can not fetch media url", _ = "Audio downloader. WEB API. Can not get array buffer from media url", v = new TextDecoder("ascii");
		},
		"./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/helpers.ts": (d, f, p) => {
			"use strict";
			p.d(f, {
				DA: () => getUrlFromArrayBuffer,
				ay: () => patchMediaUrl,
				eN: () => isChunkLengthAcceptable
			});
			var m = p("./src/audioDownloader/shared.ts"), h = p("./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/consts.ts");
			let g = 1;
			function patchMediaUrl(d, { start: f, end: p }) {
				let m = new URL(d);
				return m.searchParams.set("range", `${f}-${p}`), m.searchParams.set("rn", String(g++)), m.searchParams.delete("ump"), m.toString();
			}
			function isChunkLengthAcceptable(d, { start: f, end: p }) {
				let h = p - f;
				return h > m.ds && d.byteLength < m.ds ? !1 : Math.min(h, d.byteLength) / Math.max(h, d.byteLength) > m.cP;
			}
			let getUrlFromArrayBuffer = (d) => h.su.decode(d).match(/https:\/\/.*$/)?.[0];
		},
		"./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/iframe.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { H: () => getDownloadAudioData });
					var h = p("./node_modules/@vot.js/ext/dist/helpers/youtube.js"), g = p("./src/utils/debug.ts"), _ = p("./src/utils/utils.ts"), v = p("./src/audioDownloader/shared.ts"), b = d([_]);
					_ = (b.then ? (await b)() : b)[0];
					let x = "", getAdaptiveFormats = () => h.A.getPlayerResponse()?.streamingData?.adaptiveFormats;
					async function isEncodedRequest(d, f) {
						if (!d.includes("googlevideo.com/videoplayback") || typeof f == "string") return !1;
						try {
							let d = f.clone().body?.getReader();
							if (!d) return !1;
							let p = 0;
							for (;;) {
								let { done: f, value: m } = await d.read();
								if (f) break;
								if (p += m.length, p > 2) return !0;
							}
						} catch {}
						return !1;
					}
					function selectBestAudioFormat() {
						let d = getAdaptiveFormats();
						if (!d?.length) {
							let f = d ? "Empty adaptive formats" : "Cannot get adaptive formats";
							throw Error(`Audio downloader. WEB API. ${f}`);
						}
						let f = d.filter(({ audioQuality: d, mimeType: f }) => d || f?.includes("audio"));
						if (!f.length) throw Error("Audio downloader. WEB API. No audio adaptive formats");
						let p = f.filter(({ itag: d }) => d === 251).sort(({ contentLength: d }, { contentLength: f }) => d && f ? Number.parseInt(d) - Number.parseInt(f) : -1);
						return p.at(-1) ?? f[0];
					}
					let waitForPlayer = async () => (await (0, _.UV)(() => !!h.A.getPlayer(), 1e4), h.A.getPlayer()), loadVideo = async (d) => {
						let f = await waitForPlayer();
						if (d.messageId !== x) throw Error("Audio downloader. Download started for another video while getting player");
						if (!f?.loadVideoById) throw Error("Audio downloader. There is no player.loadVideoById in iframe");
						f.loadVideoById(d.payload.videoId), f.pauseVideo?.(), f.mute?.(), setTimeout(() => {
							if (d.messageId !== x) {
								console.error("Audio Downloader. Download started for another video while waiting to repause video");
								return;
							}
							if (!f) {
								console.error("[Critical] Audio Downloader. Player not found in iframe after timeout");
								return;
							}
							f.pauseVideo?.();
						}, 1e3);
					};
					async function getDownloadAudioData(d) {
						try {
							x = d.messageId, g.A.log("getDownloadAudioData", d);
							let f = unsafeWindow.fetch;
							unsafeWindow.fetch = async (p, m) => {
								p instanceof URL && (p = p.toString());
								let h = (0, v.rh)(p);
								if (await isEncodedRequest(h, p)) return window.parent.postMessage({
									...d,
									messageDirection: "response",
									error: "Audio downloader. Detected encoded request."
								}, "*"), unsafeWindow.fetch = f, f(p, m);
								let g = await f(p, m);
								return d.messageId === x ? (h.includes("&itag=251&") && (unsafeWindow.fetch = f, window.parent.postMessage({
									...d,
									messageDirection: "response",
									payload: {
										requestInfo: h,
										requestInit: m || (0, v.yA)(p),
										adaptiveFormat: selectBestAudioFormat(),
										itag: 251
									}
								}, "*")), g) : (unsafeWindow.fetch = f, g);
							}, await loadVideo(d);
						} catch (f) {
							window.parent.postMessage({
								...d,
								messageDirection: "response",
								error: f
							}, "*");
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/index.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { $: () => getAudioFromWebApiWithReplacedFetch });
					var h = p("./node_modules/@vot.js/core/dist/types/yandex.js"), g = p("./src/utils/debug.ts"), _ = p("./src/utils/gm.ts"), v = p("./src/utils/iframeConnector.ts"), b = p("./src/utils/utils.ts"), x = p("./src/audioDownloader/shared.ts"), C = p("./src/audioDownloader/strategies/utils.ts"), w = p("./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/consts.ts"), T = p("./src/audioDownloader/strategies/webApiGetAllGeneratingUrlsData/helpers.ts"), E = d([
						_,
						v,
						b,
						C
					]);
					[_, v, b, C] = E.then ? (await E)() : E;
					let D = h.J.WEB_API_GET_ALL_GENERATING_URLS_DATA_FROM_IFRAME, getDownloadAudioDataInMainWorld = (d) => (0, v.hG)("get-download-audio-data-in-main-world", d);
					async function getGeneratingAudioUrlsDataFromIframe(d) {
						try {
							return await Promise.race([getDownloadAudioDataInMainWorld({ videoId: d }), (0, b.wR)(2e4, w.Cp)]);
						} catch (d) {
							let f = d instanceof Error && d.message === w.Cp;
							throw g.A.log("getGeneratingAudioUrlsDataFromIframe error", d), Error(f ? w.Cp : "Audio downloader. WEB API. Failed to get audio data");
						}
					}
					async function fetchMediaWithMeta({ mediaUrl: d, chunkRange: f, requestInit: p, signal: m, isUrlChanged: h = !1 }) {
						let v = (0, T.ay)(d, f), b;
						try {
							if (b = await (0, _.G3)(v, {
								...p,
								signal: m
							}), !b.ok) {
								let d = (0, x.SZ)(b);
								throw console.error(w.kX, d), Error(w.kX);
							}
						} catch (d) {
							throw d instanceof Error && d.message === w.kX ? d : (console.error(w.Vf, {
								mediaUrl: v,
								error: d
							}), Error(w.Vf));
						}
						let C;
						try {
							C = await b.arrayBuffer();
						} catch (d) {
							throw console.error(w.l4, {
								mediaUrl: v,
								error: d
							}), Error(w.l4);
						}
						if (g.A.log("isChunkLengthAcceptable", (0, T.eN)(C, f), C.byteLength, f), (0, T.eN)(C, f)) return {
							media: C,
							url: h ? d : null,
							isAcceptableLast: !1
						};
						let E = (0, T.DA)(C);
						if (g.A.log("redirectedUrl", E), E) return fetchMediaWithMeta({
							mediaUrl: E,
							chunkRange: f,
							requestInit: p,
							signal: m,
							isUrlChanged: !0
						});
						if (!f.mustExist) return {
							media: C,
							url: null,
							isAcceptableLast: !0
						};
						throw Error(`Audio downloader. WEB API. Can not get redirected media url ${v}`);
					}
					async function fetchMediaWithMetaByChunkRanges(d, f, p, m) {
						let h = d, g = [], _ = !1;
						for (let d of p) {
							let p = await fetchMediaWithMeta({
								mediaUrl: h,
								chunkRange: d,
								requestInit: f,
								signal: m
							});
							if (p.url && (h = p.url), g.push(p.media), _ = p.isAcceptableLast, _) break;
						}
						return {
							media: (0, C.iz)(g),
							url: h,
							isAcceptableLast: _
						};
					}
					async function getAudioFromWebApiWithReplacedFetch({ videoId: d, returnByParts: f = !1, signal: p }) {
						let { requestInit: m, requestInfo: h, adaptiveFormat: g, itag: _ } = await getGeneratingAudioUrlsDataFromIframe(d);
						if (!h) throw Error("Audio downloader. WEB API. Can not get requestInfo");
						let v = (0, x.rh)(h), b = (0, x.yA)(h), w = (0, x.RZ)(b), T = m || w;
						return {
							fileId: (0, C.qk)(D, _, g.contentLength),
							mediaPartsLength: f ? (0, C.bB)(g).length : 1,
							async *getMediaBuffers() {
								if (f) {
									let d = (0, C.bB)(g);
									for (let f of d) {
										let { media: d, url: m, isAcceptableLast: h } = await fetchMediaWithMetaByChunkRanges(v, T, f, p);
										if (m && (v = m), yield d, h) break;
									}
								} else {
									let d = (0, C.Lm)(g), { media: f } = await fetchMediaWithMetaByChunkRanges(v, T, d, p);
									yield f;
								}
							}
						};
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/config/config.js": (d, f, p) => {
			"use strict";
			p.d(f, {
				Ek: () => E,
				JD: () => D,
				K2: () => F,
				Pm: () => g,
				T8: () => O,
				Wl: () => U,
				cL: () => C,
				hx: () => T,
				k$: () => v,
				mE: () => j,
				px: () => A,
				qU: () => G,
				r4: () => K,
				rl: () => m,
				se: () => h,
				sl: () => b,
				tZ: () => _,
				vZ: () => W,
				xW: () => x
			});
			let m = "api.browser.yandex.ru", h = "media-proxy.toil.cc/v1/proxy/m3u8", g = "vot-worker.toil.cc", _ = "https://vot.toil.cc/v1", v = "https://translate.toil.cc/v2", b = "https://rust-server-531j.onrender.com/detect", x = "https://t2mc.toil.cc", C = "https://avatars.mds.yandex.net/get-yapic", w = "ilyhalight/voice-over-translation", T = `https://raw.githubusercontent.com/${w}`, E = `https://github.com/${w}`, D = 15, O = 900, A = 5, j = "yandexbrowser", F = "yandexbrowser", U = ["Tampermonkey", "Violentmonkey"], W = [
				"UA",
				"LV",
				"LT"
			], G = 1e3, K = "2025-05-09";
		},
		"./src/core/auth.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { L: () => initAuth });
					var h = p("./src/utils/storage.ts"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					async function handleAuthCallbackPage() {
						let { access_token: d, expires_in: f } = Object.fromEntries(new URLSearchParams(window.location.hash.slice(1)));
						if (!d || !f) throw Error("[VOT] Invalid token response");
						let p = parseInt(f);
						if (Number.isNaN(p)) throw Error("[VOT] Invalid expires_in value");
						await h.d.set("account", {
							token: d,
							expires: Date.now() + p * 1e3,
							username: void 0,
							avatarId: void 0
						});
					}
					async function handleProfilePage() {
						let { avatar_id: d, username: f } = _userData;
						if (!d || !f) throw Error("[VOT] Invalid user data");
						let p = await h.d.get("account");
						if (!p) throw Error("[VOT] No account data found");
						await h.d.set("account", {
							...p,
							username: f,
							avatarId: d
						});
					}
					async function initAuth() {
						if (window.location.pathname === "/auth/callback") return await handleAuthCallbackPage();
						if (window.location.pathname === "/my/profile") return await handleProfilePage();
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/core/cacheManager.ts": (d, f, p) => {
			"use strict";
			p.d(f, { G: () => CacheManager });
			class CacheManager {
				cache;
				constructor() {
					this.cache = new Map();
				}
				get(d) {
					return this.cache.get(d);
				}
				set(d, f) {
					return this.cache.set(d, f), this;
				}
				delete(d) {
					return this.cache.delete(d), this;
				}
				getTranslation(d) {
					let f = this.get(d);
					return f ? f.translation : void 0;
				}
				setTranslation(d, f) {
					let p = this.get(d) || {};
					p.translation = f, this.set(d, p);
				}
				getSubtitles(d) {
					let f = this.get(d);
					return f ? f.subtitles : void 0;
				}
				setSubtitles(d, f) {
					let p = this.get(d) || {};
					p.subtitles = f, this.set(d, p);
				}
				deleteSubtitles(d) {
					let f = this.get(d);
					f && (f.subtitles = void 0, this.set(d, f));
				}
			}
		},
		"./src/core/eventImpl.ts": (d, f, p) => {
			"use strict";
			p.d(f, { Z: () => EventImpl });
			class EventImpl {
				listeners;
				constructor() {
					this.listeners = new Set();
				}
				addListener(d) {
					if (this.listeners.has(d)) throw Error("[VOT] The listener has already been added.");
					this.listeners.add(d);
				}
				removeListener(d) {
					this.listeners.delete(d);
				}
				dispatch(...d) {
					for (let f of this.listeners) try {
						f(...d);
					} catch (d) {
						console.error("[VOT]", d);
					}
				}
				clear() {
					this.listeners.clear();
				}
			}
		},
		"./src/core/translationHandler.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { F: () => VOTTranslationHandler });
					var h = p("./node_modules/@vot.js/core/dist/types/yandex.js"), g = p("./src/audioDownloader/index.ts"), _ = p("./src/localization/localizationProvider.ts"), v = p("./src/utils/debug.ts"), b = p("./src/utils/localization.ts"), x = p("./src/utils/utils.ts"), C = p("./src/utils/VOTLocalizedError.js"), w = d([
						g,
						_,
						b,
						x,
						C
					]);
					[g, _, b, x, C] = w.then ? (await w)() : w;
					class VOTTranslationHandler {
						videoHandler;
						audioDownloader;
						downloading;
						constructor(d) {
							this.videoHandler = d, this.audioDownloader = new g.I(), this.downloading = !1, this.audioDownloader.addEventListener("downloadedAudio", async (d, f) => {
								if (v.A.log("downloadedAudio", f), !this.downloading) {
									v.A.log("skip downloadedAudio");
									return;
								}
								let { videoId: p, fileId: m, audioData: h } = f, g = this.getCanonicalUrl(p);
								try {
									await this.videoHandler.votClient.requestVtransAudio(g, d, {
										audioFile: h,
										fileId: m
									});
								} catch {}
								this.downloading = !1;
							}).addEventListener("downloadedPartialAudio", async (d, f) => {
								if (v.A.log("downloadedPartialAudio", f), !this.downloading) {
									v.A.log("skip downloadedPartialAudio");
									return;
								}
								let { audioData: p, fileId: m, videoId: h, amount: g, version: _, index: b } = f, x = this.getCanonicalUrl(h);
								try {
									await this.videoHandler.votClient.requestVtransAudio(x, d, {
										audioFile: p,
										chunkId: b
									}, {
										audioPartsLength: g,
										fileId: m,
										version: _
									});
								} catch {
									this.downloading = !1;
								}
								b === g - 1 && (this.downloading = !1);
							}).addEventListener("downloadAudioError", async (d) => {
								if (!this.downloading) {
									v.A.log("skip downloadAudioError");
									return;
								}
								v.A.log(`Failed to download audio ${d}`);
								let f = this.getCanonicalUrl(d);
								await this.videoHandler.votClient.requestVtransFailAudio(f), this.downloading = !1;
							});
						}
						getCanonicalUrl(d) {
							return `https://youtu.be/${d}`;
						}
						isWaitingStreamRes(d) {
							return !!d.message;
						}
						async translateVideoImpl(d, f, p, m = null, g = !1, C = new AbortController().signal) {
							clearTimeout(this.videoHandler.autoRetry), this.downloading = !1, v.A.log(d, `Translate video (requestLang: ${f}, responseLang: ${p})`);
							try {
								if (C.aborted) throw Error("AbortError");
								let w = this.videoHandler.isLivelyVoiceAllowed() && this.videoHandler.data?.useLivelyVoice, T = await this.videoHandler.votClient.translateVideo({
									videoData: d,
									requestLang: f,
									responseLang: p,
									translationHelp: m,
									extraOpts: {
										useLivelyVoice: w,
										videoTitle: this.videoHandler.videoData?.title
									},
									shouldSendFailedAudio: g
								});
								if (v.A.log("Translate video result", T), C.aborted) throw Error("AbortError");
								if (T.translated && T.remainingTime < 1) return v.A.log("Video translation finished with this data: ", T), T;
								let E = T.message ?? _.j.get("translationTakeFewMinutes");
								if (await this.videoHandler.updateTranslationErrorMsg(T.remainingTime > 0 ? (0, b.o)(T.remainingTime) : E), T.status === h.v.AUDIO_REQUESTED && this.videoHandler.isYouTubeHosts()) {
									if (v.A.log("Start audio download"), this.downloading = !0, await this.audioDownloader.runAudioDownload(d.videoId, T.translationId, C), v.A.log("waiting downloading finish"), await (0, x.UV)(() => !this.downloading || C.aborted, 15e3), C.aborted) throw v.A.log("aborted after audio downloader vtrans"), Error("AbortError");
									return await this.translateVideoImpl(d, f, p, m, !0, C);
								}
							} catch (m) {
								if (m.message === "AbortError") return v.A.log("aborted video translation"), null;
								await this.videoHandler.updateTranslationErrorMsg(m.data?.message ?? m), console.error("[VOT]", m);
								let h = `${d.videoId}_${f}_${p}_${this.videoHandler.data?.useLivelyVoice}`;
								return this.videoHandler.cacheManager.setTranslation(h, { error: m }), null;
							}
							return new Promise((h) => {
								this.videoHandler.autoRetry = setTimeout(async () => {
									h(await this.translateVideoImpl(d, f, p, m, !0, C));
								}, 2e4);
							});
						}
						async translateStreamImpl(d, f, p, m = new AbortController().signal) {
							clearTimeout(this.videoHandler.autoRetry), v.A.log(d, `Translate stream (requestLang: ${f}, responseLang: ${p})`);
							try {
								if (m.aborted) throw Error("AbortError");
								let h = await this.videoHandler.votClient.translateStream({
									videoData: d,
									requestLang: f,
									responseLang: p
								});
								if (m.aborted) throw Error("AbortError");
								if (v.A.log("Translate stream result", h), !h.translated && h.interval === 10) return await this.videoHandler.updateTranslationErrorMsg(_.j.get("translationTakeFewMinutes")), new Promise((g) => {
									this.videoHandler.autoRetry = setTimeout(async () => {
										g(await this.translateStreamImpl(d, f, p, m));
									}, h.interval * 1e3);
								});
								if (this.isWaitingStreamRes(h)) throw v.A.log(`Stream translation aborted! Message: ${h.message}`), new C.n("streamNoConnectionToServer");
								if (!h.result) throw v.A.log("Failed to find translation result! Data:", h), new C.n("audioNotReceived");
								return v.A.log("Stream translated successfully. Running...", h), this.videoHandler.streamPing = setInterval(async () => {
									v.A.log("Ping stream translation", h.pingId), this.videoHandler.votClient.pingStream({ pingId: h.pingId });
								}, h.interval * 1e3), h;
							} catch (d) {
								return d.message === "AbortError" ? (v.A.log("aborted stream translation"), null) : (console.error("[VOT] Failed to translate stream", d), await this.videoHandler.updateTranslationErrorMsg(d.data?.message ?? d), null);
							}
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/core/ttsHandler.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { X: () => VOTTTSHandler });
					var h = p("./src/utils/tts.ts"), g = p("./src/utils/storage.ts"), _ = d([h, g]);
					[h, g] = _.then ? (await _)() : _;
					class VOTTTSHandler {
						audioContext = null;
						audioQueue = [];
						isPlaying = !1;
						constructor() {
							this.initAudioContext();
						}
						async initAudioContext() {
							try {
								typeof window < "u" && window.AudioContext && (this.audioContext = new (window.AudioContext || window.webkitAudioContext)());
							} catch (d) {
								console.warn("[VOT] Failed to initialize AudioContext", d);
							}
						}
						async speakText(d, f = "en") {
							try {
								let p = await g.d.get("ttsSettings", {
									voice: "en-US-JennyNeural",
									rate: 1,
									volume: 1,
									pitch: 1,
									service: "edge-tts"
								}), m = await (0, h.O2)(f), _ = await (0, h.D4)({
									text: d,
									voice: m,
									rate: p.rate,
									volume: p.volume,
									pitch: p.pitch
								});
								await this.playAudio(_.audioBuffer);
							} catch (d) {
								throw console.error("[VOT] Error speaking text", d), d;
							}
						}
						async speakTextStream(d, f = "en", p) {
							try {
								let m = await g.d.get("ttsSettings", {
									voice: "en-US-JennyNeural",
									rate: 1,
									volume: 1,
									pitch: 1,
									service: "edge-tts"
								}), _ = await (0, h.O2)(f);
								await (0, h.ZN)({
									text: d,
									voice: _,
									rate: m.rate,
									volume: m.volume,
									pitch: m.pitch
								}, p);
							} catch (d) {
								throw console.error("[VOT] Error speaking text stream", d), d;
							}
						}
						async playAudio(d) {
							if (!this.audioContext && (await this.initAudioContext(), !this.audioContext)) throw Error("AudioContext not available");
							try {
								let f = await this.audioContext.decodeAudioData(d.slice(0)), p = this.audioContext.createBufferSource();
								return p.buffer = f, p.connect(this.audioContext.destination), p.start(0), new Promise((d) => {
									p.onended = () => d();
								});
							} catch (d) {
								throw console.error("[VOT] Error playing audio", d), d;
							}
						}
						async queueAudio(d) {
							this.audioQueue.push(d), this.isPlaying || await this.processAudioQueue();
						}
						async processAudioQueue() {
							if (this.audioQueue.length === 0) {
								this.isPlaying = !1;
								return;
							}
							this.isPlaying = !0;
							let d = this.audioQueue.shift();
							if (d) try {
								await this.playAudio(d);
							} catch (d) {
								console.error("[VOT] Error playing queued audio", d);
							}
							await this.processAudioQueue();
						}
						async stop() {
							this.audioContext && await this.audioContext.suspend(), this.audioQueue = [], this.isPlaying = !1;
						}
						async resume() {
							this.audioContext && await this.audioContext.resume();
						}
						async destroy() {
							await this.stop(), this.audioContext && (this.audioContext.close(), this.audioContext = null);
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/core/videoManager.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { k: () => VOTVideoManager });
					var h = p("./src/core/ttsHandler.ts"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					class VOTVideoManager {
						translationHandler;
						ttsHandler;
						isSpeaking = !1;
						constructor(d) {
							this.translationHandler = d, this.ttsHandler = new h.X();
						}
						async speakTranslation(d, f = "en") {
							try {
								this.isSpeaking && await this.ttsHandler.stop(), this.isSpeaking = !0, await this.ttsHandler.speakText(d, f), this.isSpeaking = !1;
							} catch (d) {
								throw console.error("[VOT] Error speaking translation", d), this.isSpeaking = !1, d;
							}
						}
						async speakTranslationStream(d, f = "en") {
							try {
								this.isSpeaking && await this.ttsHandler.stop(), this.isSpeaking = !0, await this.ttsHandler.speakTextStream(d, f), this.isSpeaking = !1;
							} catch (d) {
								throw console.error("[VOT] Error speaking translation stream", d), this.isSpeaking = !1, d;
							}
						}
						async stopSpeaking() {
							await this.ttsHandler.stop(), this.isSpeaking = !1;
						}
						async resumeSpeaking() {
							await this.ttsHandler.resume();
						}
						async destroy() {
							await this.ttsHandler.destroy(), this.isSpeaking = !1;
						}
						getTTSHandler() {
							return this.ttsHandler;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/index.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { k: () => Q });
					var h = p("./node_modules/@vot.js/ext/dist/index.js"), g = p("./node_modules/@vot.js/ext/dist/helpers/youtube.js"), _ = p("./node_modules/@vot.js/ext/dist/utils/videoData.js"), v = p("./node_modules/chaimu/dist/index.js"), b = p("./src/audioDownloader/iframe.ts"), x = p("./src/config/config.js"), C = p("./src/core/auth.ts"), w = p("./src/core/cacheManager.ts"), T = p("./src/core/translationHandler.ts"), E = p("./src/core/videoManager.ts"), D = p("./src/localization/localizationProvider.ts"), O = p("./src/subtitles.js"), A = p("./src/ui/components/hotkeyButton.ts"), j = p("./src/ui/manager.ts"), F = p("./src/utils/debug.ts"), U = p("./src/utils/gm.ts"), W = p("./src/utils/iframeConnector.ts"), G = p("./src/utils/storage.ts"), K = p("./src/utils/translateApis.ts"), q = p("./src/utils/utils.ts"), J = p("./src/utils/VideoObserver.js"), Y = p("./src/utils/VOTLocalizedError.js"), X = p("./src/utils/volume.ts"), Z = d([
						h,
						b,
						C,
						T,
						E,
						D,
						O,
						A,
						j,
						U,
						W,
						G,
						K,
						q,
						Y
					]);
					[h, b, C, T, E, D, O, A, j, U, W, G, K, q, Y] = Z.then ? (await Z)() : Z;
					let Q;
					class VideoHandler {
						translateFromLang = "auto";
						translateToLang = q.HD;
						timer;
						data;
						videoData;
						firstPlay = !0;
						audioContext = (0, v.GZ)();
						hls;
						votClient;
						audioPlayer;
						abortController;
						actionsAbortController;
						cacheManager;
						downloadTranslationUrl = null;
						autoRetry;
						streamPing;
						votOpts;
						volumeOnStart;
						tempOriginalVolume;
						tempVolume;
						firstSyncVolume = !0;
						longWaitingResCount = 0;
						subtitles = [];
						constructor(d, f, p) {
							F.A.log("[VideoHandler] add video:", d, "container:", f, this), this.video = d, this.container = f, this.site = p, this.abortController = new AbortController(), this.actionsAbortController = new AbortController(), this.uiManager = new j.o({
								root: this.container,
								portalContainer: this.getPortalContainer(),
								tooltipLayoutRoot: this.getTooltipLayoutRoot(),
								data: this.data,
								videoHandler: this
							}), this.translationHandler = new T.F(this), this.videoManager = new E.k(this), this.cacheManager = new w.G();
						}
						getPortalContainer() {
							return this.site.host === "youtube" && this.site.additionalData !== "mobile" ? this.container.parentElement : this.container;
						}
						getTooltipLayoutRoot() {
							switch (this.site.host) {
								case "kickstarter": return document.getElementById("react-project-header");
								case "custom": return;
								default: return this.container;
							}
						}
						getEventContainer() {
							return this.site.eventSelector ? this.site.host === "twitter" ? this.container.closest(this.site.eventSelector) : document.querySelector(this.site.eventSelector) : this.container;
						}
						async autoTranslate() {
							if (this.firstPlay && this.data.autoTranslate && this.videoData.videoId) {
								this.firstPlay = !1;
								try {
									this.videoManager.videoValidator(), await this.uiManager.handleTranslationBtnClick();
								} catch (d) {
									console.error("[VOT]", d);
									return;
								}
							}
						}
						getPreferAudio() {
							return !this.audioContext || !this.data.newAudioPlayer || this.videoData.isStream ? !0 : this.data.newAudioPlayer && !this.data.onlyBypassMediaCSP ? !1 : !this.site.needBypassCSP;
						}
						createPlayer() {
							let d = this.getPreferAudio();
							return F.A.log("preferAudio:", d), this.audioPlayer = new v.Ay({
								video: this.video,
								debug: !1,
								fetchFn: U.G3,
								fetchOpts: { timeout: 0 },
								preferAudio: d
							}), this;
						}
						async init() {
							if (!this.initialized) {
								if (this.data = await G.d.getValues({
									autoTranslate: !1,
									dontTranslateLanguages: [q.HD],
									enabledDontTranslateLanguages: !0,
									enabledAutoVolume: !0,
									autoVolume: x.JD,
									buttonPos: "default",
									showVideoSlider: !0,
									syncVolume: !1,
									downloadWithName: U.yx,
									sendNotifyOnComplete: !1,
									subtitlesMaxLength: 300,
									highlightWords: !1,
									subtitlesFontSize: 20,
									subtitlesOpacity: 20,
									subtitlesDownloadFormat: "srt",
									responseLanguage: q.HD,
									defaultVolume: 100,
									onlyBypassMediaCSP: Number(!!this.audioContext),
									newAudioPlayer: Number(!!this.audioContext),
									showPiPButton: !1,
									translateAPIErrors: !0,
									translationService: x.mE,
									detectService: x.K2,
									translationHotkey: null,
									m3u8ProxyHost: x.se,
									proxyWorkerHost: x.Pm,
									translateProxyEnabled: 0,
									translateProxyEnabledDefault: !0,
									audioBooster: !1,
									useLivelyVoice: !1,
									autoHideButtonDelay: x.qU,
									useAudioDownload: U.B0,
									compatVersion: "",
									account: {},
									localeHash: "",
									localeUpdatedAt: 0
								}), this.data.compatVersion !== x.r4 && (this.data = await (0, G._)(this.data), await G.d.set("compatVersion", x.r4)), this.uiManager.data = this.data, this.tempVolume = this.data.defaultVolume, console.log("[VOT] data from db: ", this.data), !this.data.translateProxyEnabled && U.up && (this.data.translateProxyEnabled = 1), !Q) try {
									let d = await (0, U.G3)("https://speed.cloudflare.com/meta", { timeout: 7e3 });
									({country: Q} = await d.json());
								} catch (d) {
									console.error("[VOT] Error getting country:", d);
								}
								x.vZ.includes(Q) && this.data.translateProxyEnabledDefault && (this.data.translateProxyEnabled = 2), F.A.log("translateProxyEnabled", this.data.translateProxyEnabled, this.data.translateProxyEnabledDefault), F.A.log("Extension compatibility passed..."), this.initVOTClient(), this.uiManager.initUI(), this.uiManager.initUIEvents(), this.subtitlesWidget = new O.o(this.video, this.getPortalContainer(), this.site, this.uiManager.votOverlayView.votOverlayPortal, this.getTooltipLayoutRoot()), this.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength), this.subtitlesWidget.setHighlightWords(this.data.highlightWords), this.subtitlesWidget.setFontSize(this.data.subtitlesFontSize), this.subtitlesWidget.setOpacity(this.data.subtitlesOpacity), this.createPlayer(), this.setSelectMenuValues(this.videoData.detectedLanguage, this.data.responseLanguage ?? "ru"), this.translateToLang = this.data.responseLanguage ?? "ru", this.initExtraEvents(), await this.autoTranslate(), this.initialized = !0;
							}
						}
						initVOTClient() {
							return this.votOpts = {
								fetchFn: U.G3,
								fetchOpts: { signal: this.actionsAbortController.signal },
								apiToken: this.data.account?.token,
								hostVOT: x.tZ,
								host: this.data.translateProxyEnabled ? this.data.proxyWorkerHost : x.rl
							}, this.votClient = new (this.data.translateProxyEnabled ? h.Pu : h.Ay)(this.votOpts), this;
						}
						transformBtn(d, f) {
							return this.uiManager.transformBtn(d, f), this;
						}
						hasActiveSource() {
							return !!(this.audioPlayer.player.src || this.hls?.url);
						}
						initExtraEvents() {
							let { signal: d } = this.abortController, addExtraEventListener = (f, p, m) => {
								f.addEventListener(p, m, { signal: d });
							}, addExtraEventListeners = (d, f, p) => {
								for (let m of f) addExtraEventListener(d, m, p);
							};
							if (this.resizeObserver = new ResizeObserver((d) => {
								for (let f of d) this.uiManager.votOverlayView.votMenu.container.style.setProperty("--vot-container-height", `${f.contentRect.height}px`);
								let { position: f, direction: p } = this.uiManager.votOverlayView.calcButtonLayout(this.data?.buttonPos);
								this.uiManager.votOverlayView.updateButtonLayout(f, p);
							}), this.resizeObserver.observe(this.video), this.uiManager.votOverlayView.votMenu.container.style.setProperty("--vot-container-height", `${this.video.getBoundingClientRect().height}px`), ["youtube", "googledrive"].includes(this.site.host) && this.site.additionalData !== "mobile") {
								this.syncVolumeObserver = new MutationObserver((d) => {
									if (!(!this.audioPlayer.player.src || !this.data.syncVolume)) {
										for (let f of d) if (f.type === "attributes" && f.attributeName === "aria-valuenow") {
											if (this.firstSyncVolume) {
												this.firstSyncVolume = !1;
												return;
											}
											let d = this.isMuted() ? 0 : this.getVideoVolume() * 100, f = Math.round(d);
											this.data.defaultVolume = f, this.audioPlayer.player.volume = this.data.defaultVolume / 100, this.syncVolumeWrapper("video", f);
										}
									}
								});
								let d = document.querySelector(".ytp-volume-panel");
								d && this.syncVolumeObserver.observe(d, {
									attributes: !0,
									subtree: !0
								});
							}
							document.addEventListener("click", (d) => {
								let f = d.target, p = this.uiManager.votOverlayView.votButton.container, m = this.uiManager.votOverlayView.votMenu.container, h = this.container, g = this.uiManager.votSettingsView.dialog.container, _ = document.querySelector(".vot-dialog-temp"), v = p.contains(f), b = m.contains(f), x = h.contains(f), C = g.contains(f), w = _?.contains(f) ?? !1;
								F.A.log(`[document click] ${v} ${b} ${x} ${C} ${w}`), !v && !b && !C && !w && (x || this.uiManager.votOverlayView.updateButtonOpacity(0), this.uiManager.votOverlayView.votMenu.hidden = !0);
							}, { signal: d });
							let f = new Set();
							document.addEventListener("keydown", async (d) => {
								if (d.repeat) return;
								f.add(d.code);
								let p = document.activeElement, m = ["input", "textarea"].includes(p.tagName.toLowerCase()) || p.isContentEditable;
								if (m) return;
								let h = (0, A._)(f);
								F.A.log(`combo: ${h}`), F.A.log(`this.data.translationHotkey: ${this.data.translationHotkey}`), h === this.data.translationHotkey && await this.uiManager.handleTranslationBtnClick();
							}, { signal: d }), document.addEventListener("blur", () => {
								f.clear();
							}), document.addEventListener("keyup", (d) => {
								f.delete(d.code);
							}, { signal: d });
							let p = this.getEventContainer();
							p && addExtraEventListeners(p, ["pointermove", "pointerout"], this.resetTimer), addExtraEventListener(this.uiManager.votOverlayView.votButton.container, "pointermove", this.changeOpacityOnEvent), addExtraEventListener(this.uiManager.votOverlayView.votMenu.container, "pointermove", this.changeOpacityOnEvent), this.site.host !== "xvideos" && addExtraEventListener(document, "touchmove", this.resetTimer), this.site.host === "youtube" && (this.container.draggable = !1), addExtraEventListener(this.video, "canplay", async () => {
								this.site.host === "rutube" && this.video.src || await this.setCanPlay();
							}), addExtraEventListener(this.video, "emptied", async () => {
								let d = await (0, _.jY)(this.site, {
									fetchFn: U.G3,
									video: this.video
								});
								this.video.src && this.videoData && d === this.videoData.videoId || (F.A.log("lipsync mode is emptied"), this.videoData = void 0, this.stopTranslation());
							}), ["rutube", "ok"].includes(this.site.host) || addExtraEventListener(this.video, "volumechange", () => {
								this.syncVideoVolumeSlider();
							}), this.site.host === "youtube" && !this.site.additionalData && addExtraEventListener(document, "yt-page-data-updated", async () => {
								F.A.log("yt-page-data-updated"), window.location.pathname.includes("/shorts/") && await this.setCanPlay();
							});
						}
						async setCanPlay() {
							let d = await (0, _.jY)(this.site, {
								fetchFn: U.G3,
								video: this.video
							});
							this.videoData && d === this.videoData.videoId || (await this.handleSrcChanged(), await this.autoTranslate(), F.A.log("lipsync mode is canplay"));
						}
						resetTimer = () => {
							clearTimeout(this.timer), this.uiManager.votOverlayView.updateButtonOpacity(1), this.timer = setTimeout(() => {
								this.uiManager.votOverlayView.updateButtonOpacity(0);
							}, this.data.autoHideButtonDelay);
						};
						changeOpacityOnEvent = (d) => {
							clearTimeout(this.timer), this.uiManager.votOverlayView.updateButtonOpacity(1), d.stopPropagation();
						};
						async changeSubtitlesLang(d) {
							if (F.A.log("[onchange] subtitles", d), this.uiManager.votOverlayView.subtitlesSelect.setSelectedValue(d), d === "disabled") this.subtitlesWidget.setContent(null), this.uiManager.votOverlayView.downloadSubtitlesButton.hidden = !0, this.yandexSubtitles = null;
							else {
								let f = this.subtitles.at(Number.parseInt(d));
								if (this.data.translateProxyEnabled === 2 && f.url.startsWith("https://brosubs.s3-private.mds.yandex.net/vtrans/")) {
									let d = f.url.replace("https://brosubs.s3-private.mds.yandex.net/vtrans/", "");
									f.url = `https://${this.data.proxyWorkerHost}/video-subtitles/subtitles-proxy/${d}`, console.log(`[VOT] Subs proxied via ${f.url}`);
								}
								this.yandexSubtitles = await O.I.fetchSubtitles(f), this.subtitlesWidget.setContent(this.yandexSubtitles, f.language), this.uiManager.votOverlayView.downloadSubtitlesButton.hidden = !1;
							}
						}
						async updateSubtitlesLangSelect() {
							if (!this.subtitles || this.subtitles.length === 0) {
								let d = [{
									label: D.j.get("VOTSubtitlesDisabled"),
									value: "disabled",
									selected: !0,
									disabled: !1
								}];
								this.uiManager.votOverlayView.subtitlesSelect.updateItems(d), await this.changeSubtitlesLang(d[0].value);
								return;
							}
							let d = [{
								label: D.j.get("VOTSubtitlesDisabled"),
								value: "disabled",
								selected: !0,
								disabled: !1
							}, ...this.subtitles.map((d, f) => ({
								label: (D.j.get(`langs.${d.language}`) ?? d.language.toUpperCase()) + (d.translatedFromLanguage ? ` ${D.j.get("VOTTranslatedFrom")} ${D.j.get(`langs.${d.translatedFromLanguage}`) ?? d.translatedFromLanguage.toUpperCase()}` : "") + (d.source === "yandex" ? "" : `, ${window.location.hostname}`) + (d.isAutoGenerated ? ` (${D.j.get("VOTAutogenerated")})` : ""),
								value: f,
								selected: !1,
								disabled: !1
							}))];
							this.uiManager.votOverlayView.subtitlesSelect.updateItems(d), await this.changeSubtitlesLang(d[0].value);
						}
						async loadSubtitles() {
							if (!this.videoData?.videoId) {
								console.error(`[VOT] ${D.j.getDefault("VOTNoVideoIDFound")}`), this.subtitles = [];
								return;
							}
							let d = `${this.videoData.videoId}_${this.videoData.detectedLanguage}_${this.videoData.responseLanguage}_${this.data.useLivelyVoice}`;
							try {
								let f = this.cacheManager.getSubtitles(d);
								f || (f = await O.I.getSubtitles(this.votClient, this.videoData), this.cacheManager.setSubtitles(d, f)), this.subtitles = f;
							} catch (d) {
								console.error("[VOT] Failed to load subtitles:", d), this.subtitles = [];
							}
							await this.updateSubtitlesLangSelect();
						}
						isLivelyVoiceAllowed() {
							return !(this.videoData.detectedLanguage !== "en" || this.videoData.responseLanguage !== "ru" || !this.data.account?.token);
						}
						getVideoVolume() {
							return this.videoManager.getVideoVolume();
						}
						setVideoVolume(d) {
							return this.videoManager.setVideoVolume(d), this;
						}
						isMuted() {
							return this.videoManager.isMuted();
						}
						syncVideoVolumeSlider() {
							this.videoManager.syncVideoVolumeSlider();
						}
						setSelectMenuValues(d, f) {
							this.videoManager.setSelectMenuValues(d, f);
						}
						syncVolumeWrapper(d, f) {
							let p = d === "translation" ? this.uiManager.votOverlayView.videoVolumeSlider : this.uiManager.votOverlayView.translationVolumeSlider, m = (0, X.q)(d === "translation" ? this.video : this.audioPlayer.player, f, p.value, d === "translation" ? this.tempVolume : this.tempOriginalVolume);
							p.value = m, this.tempOriginalVolume = d === "translation" ? m : f, this.tempVolume = d === "translation" ? f : m;
						}
						async getVideoData() {
							return await this.videoManager.getVideoData();
						}
						videoValidator() {
							return this.videoManager.videoValidator();
						}
						stopTranslate() {
							this.audioPlayer.player.removeVideoEvents(), this.audioPlayer.player.clear(), this.audioPlayer.player.src = void 0, F.A.log("audioPlayer after stopTranslate", this.audioPlayer), this.uiManager.votOverlayView.videoVolumeSlider.hidden = !0, this.uiManager.votOverlayView.translationVolumeSlider.hidden = !0, this.uiManager.votOverlayView.downloadTranslationButton.hidden = !0, this.downloadTranslationUrl = null, this.longWaitingResCount = 0, this.transformBtn("none", D.j.get("translateVideo")), F.A.log(`Volume on start: ${this.volumeOnStart}`), this.volumeOnStart && this.setVideoVolume(this.volumeOnStart), clearInterval(this.streamPing), clearTimeout(this.autoRetry), this.hls?.destroy(), this.firstSyncVolume = !0, this.actionsAbortController = new AbortController();
						}
						async updateTranslationErrorMsg(d) {
							let f = D.j.get("translationTake"), p = D.j.lang;
							if (this.longWaitingResCount = d === D.j.get("translationTakeAboutMinute") ? this.longWaitingResCount + 1 : 0, F.A.log("longWaitingResCount", this.longWaitingResCount), this.longWaitingResCount > x.px && (d = new Y.n("TranslationDelayed")), F.A.log("updateTranslationErrorMsg message", d), d?.name === "VOTLocalizedError") this.transformBtn("error", d.localizedMessage);
							else if (d instanceof Error) this.transformBtn("error", d?.message);
							else if (this.data.translateAPIErrors && p !== "ru" && !d?.includes(f)) {
								this.uiManager.votOverlayView.votButton.loading = !0;
								let f = await (0, K.Tl)(d, "ru", p);
								this.transformBtn("error", f);
							} else this.transformBtn("error", d);
							[
								"Подготавливаем перевод",
								"Видео передано в обработку",
								"Ожидаем перевод видео",
								"Загружаем переведенное аудио"
							].includes(d) && (this.uiManager.votOverlayView.votButton.loading = !0);
						}
						afterUpdateTranslation(d) {
							let f = this.uiManager.votOverlayView.votButton.container.dataset.status === "success";
							this.uiManager.votOverlayView.videoVolumeSlider.hidden = !this.data.showVideoSlider || !f, this.uiManager.votOverlayView.translationVolumeSlider.hidden = !f, this.data.enabledAutoVolume && (this.uiManager.votOverlayView.videoVolumeSlider.value = this.data.autoVolume), this.videoData.isStream || (this.uiManager.votOverlayView.downloadTranslationButton.hidden = !1, this.downloadTranslationUrl = d), F.A.log("afterUpdateTranslation downloadTranslationUrl", this.downloadTranslationUrl), this.data.sendNotifyOnComplete && this.longWaitingResCount && f && GM_notification({
								text: D.j.get("VOTTranslationCompletedNotify").replace("{0}", window.location.hostname),
								title: GM_info.script.name,
								timeout: 5e3,
								silent: !0,
								tag: "VOTTranslationCompleted",
								onclick: () => {
									window.focus();
								}
							});
						}
						async validateAudioUrl(d) {
							try {
								let f = this.isMultiMethodS3(d) ? { method: "HEAD" } : { headers: { range: "bytes=0-0" } }, p = await (0, U.G3)(d, f);
								if (F.A.log("Test audio response", p), p.ok) return F.A.log("Valid audioUrl", d), d;
								F.A.log("Yandex returned not valid audio, trying to fix..."), this.videoData.detectedLanguage = "auto";
								let m = await this.translationHandler.translateVideoImpl(this.videoData, this.videoData.detectedLanguage, this.videoData.responseLanguage, this.videoData.translationHelp, !this.data.useAudioDownload, this.actionsAbortController.signal);
								this.setSelectMenuValues(this.videoData.detectedLanguage, this.videoData.responseLanguage), d = m.url, F.A.log("Fixed audio audioUrl", d);
							} catch (d) {
								F.A.log("Test audio error:", d);
							}
							return d;
						}
						proxifyAudio(d) {
							return this.data.translateProxyEnabled === 2 && d.startsWith("https://vtrans.s3-private.mds.yandex.net/tts/prod/") && (d = d.replace("https://vtrans.s3-private.mds.yandex.net/tts/prod/", `https://${this.data.proxyWorkerHost}/video-translation/audio-proxy/`), console.log(`[VOT] Audio proxied via ${d}`)), d;
						}
						isMultiMethodS3(d) {
							return d.startsWith("https://vtrans.s3-private.mds.yandex.net/tts/prod/") || d.startsWith(`https://${this.data.proxyWorkerHost}/video-translation/audio-proxy/`);
						}
						async updateTranslation(d) {
							d !== this.audioPlayer.player.currentSrc && (d = await this.validateAudioUrl(this.proxifyAudio(d))), this.audioPlayer.player.src !== d && (this.audioPlayer.player.src = d);
							try {
								this.audioPlayer.init();
							} catch (d) {
								F.A.log("this.audioPlayer.init() error", d), this.transformBtn("error", d.message);
							}
							this.setupAudioSettings(), this.site.host === "twitter" && document.querySelector("button[data-testid=\"app-bar-back\"][role=\"button\"]").addEventListener("click", this.stopTranslation), this.transformBtn("success", D.j.get("disableTranslate")), this.afterUpdateTranslation(d);
						}
						async translateFunc(d, f, p, m, h) {
							console.log("[VOT] Video Data: ", this.videoData), F.A.log("Run videoValidator"), this.videoValidator(), this.uiManager.votOverlayView.votButton.loading = !0, this.volumeOnStart = this.getVideoVolume();
							let _ = `${d}_${p}_${m}_${this.data.useLivelyVoice}`, v = this.cacheManager.getTranslation(_);
							if (v?.url) {
								await this.updateTranslation(v.url), F.A.log("[translateFunc] Cached translation was received");
								return;
							}
							if (v?.error) {
								F.A.log("Skip translation - previous attempt failed"), await this.updateTranslationErrorMsg(v.error.data?.message);
								return;
							}
							if (f) {
								let d = await this.translationHandler.translateStreamImpl(this.videoData, p, m, this.actionsAbortController.signal);
								if (!d) {
									F.A.log("Skip translation");
									return;
								}
								this.transformBtn("success", D.j.get("disableTranslate"));
								try {
									this.hls = (0, q.CK)(), this.audioPlayer.init();
								} catch (d) {
									F.A.log("this.audioPlayer.init() error", d), this.transformBtn("error", d.message);
								}
								let f = this.setHLSSource(d.result.url);
								return this.site.host === "youtube" && g.A.videoSeek(this.video, 10), this.setupAudioSettings(), !this.video.src && !this.video.currentSrc && !this.video.srcObject ? this.stopTranslation() : this.afterUpdateTranslation(f);
							}
							let b = await this.translationHandler.translateVideoImpl(this.videoData, p, m, h, !this.data.useAudioDownload, this.actionsAbortController.signal);
							if (F.A.log("[translateRes]", b), !b) {
								F.A.log("Skip translation");
								return;
							}
							await this.updateTranslation(b.url);
							let x = this.cacheManager.getSubtitles(_);
							x?.some((d) => d.source === "yandex" && d.translatedFromLanguage === this.videoData.detectedLanguage && d.language === this.videoData.responseLanguage) || (this.cacheManager.deleteSubtitles(_), this.subtitles = []), this.cacheManager.setTranslation(_, {
								videoId: d,
								from: p,
								to: m,
								url: this.downloadTranslationUrl,
								useLivelyVoice: this.data?.useLivelyVoice
							});
						}
						isYouTubeHosts() {
							return [
								"youtube",
								"invidious",
								"piped",
								"poketube",
								"ricktube"
							].includes(this.site.host);
						}
						setupHLS(d) {
							this.hls.on(Hls.Events.MEDIA_ATTACHED, function() {
								F.A.log("audio and hls.js are now bound together !");
							}), this.hls.on(Hls.Events.MANIFEST_PARSED, function(d) {
								F.A.log(`manifest loaded, found ${d?.levels?.length} quality level`);
							}), this.hls.loadSource(d), this.hls.attachMedia(this.audioPlayer.player.audio), this.hls.on(Hls.Events.ERROR, function(d) {
								if (d.fatal) switch (d.type) {
									case Hls.ErrorTypes.MEDIA_ERROR:
										console.log("fatal media error encountered, try to recover"), this.hls.recoverMediaError();
										break;
									case Hls.ErrorTypes.NETWORK_ERROR:
										console.error("fatal network error encountered", d);
										break;
									default:
										this.hls.destroy();
										break;
								}
							}), F.A.log(this.hls);
						}
						setHLSSource(d) {
							let f = `https://${this.data.m3u8ProxyHost}/?all=yes&origin=${encodeURIComponent("https://strm.yandex.ru")}&referer=${encodeURIComponent("https://strm.yandex.ru")}&url=${encodeURIComponent(d)}`;
							if (this.hls) this.setupHLS(f);
							else if (this.audioPlayer.player.audio.canPlayType("application/vnd.apple.mpegurl")) this.audioPlayer.player.src = f;
							else throw new Y.n("audioFormatNotSupported");
							return f;
						}
						setupAudioSettings() {
							typeof this.data.defaultVolume == "number" && (this.audioPlayer.player.volume = this.data.defaultVolume / 100), this.data.enabledAutoVolume && this.setVideoVolume((this.data.autoVolume / 100).toFixed(2));
						}
						stopTranslation = () => {
							this.stopTranslate(), this.syncVideoVolumeSlider();
						};
						async handleSrcChanged() {
							F.A.log("[VideoHandler] src changed", this), this.firstPlay = !0, this.stopTranslation();
							let d = !this.video.src && !this.video.currentSrc && !this.video.srcObject;
							this.uiManager.votOverlayView.votButton.container.hidden = d, d && (this.uiManager.votOverlayView.votMenu.hidden = d), this.site.selector || (this.container = this.video.parentElement), this.container.contains(this.uiManager.votOverlayView.votButton.container) || this.container.append(this.uiManager.votOverlayView.votButton.container, this.uiManager.votOverlayView.votMenu.container), this.videoData = await this.getVideoData();
							let f = `${this.videoData.videoId}_${this.videoData.detectedLanguage}_${this.videoData.responseLanguage}_${this.data.useLivelyVoice}`;
							this.subtitles = this.cacheManager.getSubtitles(f), await this.updateSubtitlesLangSelect(), this.translateToLang = this.data.responseLanguage ?? "ru", this.setSelectMenuValues(this.videoData.detectedLanguage, this.videoData.responseLanguage), this.actionsAbortController = new AbortController();
						}
						async release() {
							F.A.log("[VideoHandler] release"), this.initialized = !1, this.releaseExtraEvents(), this.subtitlesWidget.release(), this.uiManager.release();
						}
						collectReportInfo() {
							let d = `${q.R5.os.name} ${q.R5.os.version}`, f = `<details>
<summary>Autogenerated by VOT:</summary>
<ul>
  <li>OS: ${d}</li>
  <li>Browser: ${q.R5.browser.name} ${q.R5.browser.version}</li>
  <li>Loader: ${GM_info.scriptHandler} v${GM_info.version}</li>
  <li>Script version: ${GM_info.script.version}</li>
  <li>URL: <code>${window.location.href}</code></li>
  <li>Lang: <code>${this.videoData.detectedLanguage}</code> -> <code>${this.videoData.responseLanguage}</code> (Lively voice: ${this.data.useLivelyVoice} | Audio download: ${this.data.useAudioDownload})</li>
  <li>Player: ${this.data.newAudioPlayer ? "New" : "Old"} (CSP only: ${this.data.onlyBypassMediaCSP})</li>
  <li>Proxying mode: ${this.data.translateProxyEnabled}</li>
</ul>
</details>`, p = `1-bug-report-${D.j.lang === "ru" ? "ru" : "en"}.yml`;
							return {
								assignees: "ilyhalight",
								template: p,
								os: d,
								"script-version": GM_info.script.version,
								"additional-info": f
							};
						}
						releaseExtraEvents() {
							this.abortController.abort(), this.resizeObserver?.disconnect(), ["youtube", "googledrive"].includes(this.site.host) && this.site.additionalData !== "mobile" && this.syncVolumeObserver?.disconnect();
						}
					}
					let $ = new J.c(), ee = new WeakMap();
					function climb(d, f) {
						if (!d || !f) return null;
						if (d instanceof Document) return d.querySelector(f);
						let p = d.closest(f);
						if (p) return p;
						let m = d.getRootNode();
						return climb(m instanceof ShadowRoot ? m.host : m, f);
					}
					function findContainer(d, f) {
						if (F.A.log("findContainer", d, f), d.shadowRoot) {
							let p = climb(f, d.selector);
							return F.A.log("findContainer with site.shadowRoot", p), p ?? f.parentElement;
						}
						if (F.A.log("findContainer without shadowRoot"), !d.selector) return f.parentElement;
						let p = document.querySelectorAll(d.selector);
						return Array.from(p).find((d) => d.contains(f)) ?? f.parentElement;
					}
					function initIframeInteractor() {
						let d = { "https://dev.epicgames.com": {
							targetOrigin: "https://dev.epicgames.com",
							dataFilter: (d) => typeof d == "string" && d.startsWith("getVideoId:"),
							extractVideoId: (d) => d.pathname.split("/").slice(-2, -1)[0],
							iframeSelector: (d) => `electra-player > iframe[src="${d}"]`,
							responseFormatter: (d, f) => `${f}:${d}`,
							processRequest: (d) => {
								let f = d.replace("getVideoId:", "");
								return atob(f);
							}
						} }, f = Object.entries(d).find(([d]) => window.location.origin === d && (d !== "https://dev.epicgames.com" || window.location.pathname.includes("/community/learning/")))?.[1];
						f && window.addEventListener("message", (d) => {
							try {
								if (d.origin !== f.targetOrigin || !f.dataFilter(d.data)) return;
								let p = new URL(window.location.href), m = f.extractVideoId(p);
								if (!m) return;
								let h = f.processRequest?.(d.data) || p.href, g = typeof f.iframeSelector == "function" ? f.iframeSelector(h) : f.iframeSelector, _ = document.querySelector(g);
								if (!_?.contentWindow) return;
								let v = f.responseFormatter(m, d.data);
								_.contentWindow.postMessage(v, f.targetOrigin);
							} catch (d) {
								console.error("Iframe communication error:", d);
							}
						});
					}
					async function main() {
						if (console.log("[VOT] Loading extension..."), (0, W.d4)() && window.location.hash.includes(W.WF)) return (0, b.q)();
						if (window.location.origin === x.xW) return await (0, C.L)();
						await D.j.update(), F.A.log(`Selected menu language: ${D.j.lang}`), initIframeInteractor(), $.onVideoAdded.addListener(async (d) => {
							if (ee.has(d)) return;
							let f, p = (0, _.cQ)().find((p) => (f = findContainer(p, d), !!f));
							if (p) {
								["peertube", "directlink"].includes(p.host) && (p.url = window.location.origin);
								try {
									let m = new VideoHandler(d, f, p);
									m.videoData = await m.getVideoData(), await m.init(), ee.set(d, m);
								} catch (d) {
									console.error("[VOT] Failed to initialize videoHandler", d);
								}
							}
						}), $.onVideoRemoved.addListener(async (d) => {
							ee.has(d) && (await ee.get(d).release(), ee.delete(d));
						}), $.enable();
					}
					main().catch((d) => {
						console.error("[VOT]", d);
					}), m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/localization/locales/en.json": (d) => {
			"use strict";
			d.exports = JSON.parse("{\"recommended\":\"recommended\",\"translateVideo\":\"Translate video\",\"disableTranslate\":\"Turn off\",\"translationSettings\":\"Translation settings\",\"subtitlesSettings\":\"Subtitles settings\",\"resetSettings\":\"Reset settings\",\"videoBeingTranslated\":\"The video is being translated\",\"videoLanguage\":\"Video language\",\"translationLanguage\":\"Translation language\",\"translationTake\":\"The translation will take\",\"translationTakeMoreThanHour\":\"The translation will take more than an hour\",\"translationTakeAboutMinute\":\"The translation will take about a minute\",\"translationTakeFewMinutes\":\"The translation will take a few minutes\",\"translationTakeApproximatelyMinutes\":\"The translation will take approximately {0} minutes\",\"translationTakeApproximatelyMinute\":\"The translation will take approximately {0} minutes\",\"requestTranslationFailed\":\"Failed to request video translation\",\"audioNotReceived\":\"Audio link not received\",\"audioFormatNotSupported\":\"The audio format is not supported\",\"VOTAutoTranslate\":\"Translate on open\",\"VOTDontTranslateYourLang\":\"Don't translate from my language\",\"VOTVolume\":\"Video volume:\",\"VOTVolumeTranslation\":\"Translation volume:\",\"VOTAutoSetVolume\":\"Reduce video volume to\",\"VOTShowVideoSlider\":\"Video volume slider\",\"VOTSyncVolume\":\"Link translation and video volume\",\"VOTDisableFromYourLang\":\"You have disabled the translation of the video in your language\",\"VOTVideoIsTooLong\":\"Video is too long\",\"VOTNoVideoIDFound\":\"No video ID found\",\"VOTSubtitles\":\"Subtitles\",\"VOTSubtitlesDisabled\":\"Disabled\",\"VOTSubtitlesMaxLength\":\"Subtitles max length\",\"VOTHighlightWords\":\"Highlight words\",\"VOTTranslatedFrom\":\"translated from\",\"VOTAutogenerated\":\"autogenerated\",\"VOTSettings\":\"VOT Settings\",\"VOTMenuLanguage\":\"Menu language\",\"VOTAuthors\":\"Authors\",\"VOTVersion\":\"Version\",\"VOTLoader\":\"Loader\",\"VOTBrowser\":\"Browser\",\"VOTShowPiPButton\":\"Show PiP button\",\"langs\":{\"auto\":\"Auto\",\"af\":\"Afrikaans\",\"ak\":\"Akan\",\"sq\":\"Albanian\",\"am\":\"Amharic\",\"ar\":\"Arabic\",\"hy\":\"Armenian\",\"as\":\"Assamese\",\"ay\":\"Aymara\",\"az\":\"Azerbaijani\",\"bn\":\"Bangla\",\"eu\":\"Basque\",\"be\":\"Belarusian\",\"bho\":\"Bhojpuri\",\"bs\":\"Bosnian\",\"bg\":\"Bulgarian\",\"my\":\"Burmese\",\"ca\":\"Catalan\",\"ceb\":\"Cebuano\",\"zh\":\"Chinese\",\"zh-Hans\":\"Chinese (Simplified)\",\"zh-Hant\":\"Chinese (Traditional)\",\"co\":\"Corsican\",\"hr\":\"Croatian\",\"cs\":\"Czech\",\"da\":\"Danish\",\"dv\":\"Divehi\",\"nl\":\"Dutch\",\"en\":\"English\",\"eo\":\"Esperanto\",\"et\":\"Estonian\",\"ee\":\"Ewe\",\"fil\":\"Filipino\",\"fi\":\"Finnish\",\"fr\":\"French\",\"gl\":\"Galician\",\"lg\":\"Ganda\",\"ka\":\"Georgian\",\"de\":\"German\",\"el\":\"Greek\",\"gn\":\"Guarani\",\"gu\":\"Gujarati\",\"ht\":\"Haitian Creole\",\"ha\":\"Hausa\",\"haw\":\"Hawaiian\",\"iw\":\"Hebrew\",\"hi\":\"Hindi\",\"hmn\":\"Hmong\",\"hu\":\"Hungarian\",\"is\":\"Icelandic\",\"ig\":\"Igbo\",\"id\":\"Indonesian\",\"ga\":\"Irish\",\"it\":\"Italian\",\"ja\":\"Japanese\",\"jv\":\"Javanese\",\"kn\":\"Kannada\",\"kk\":\"Kazakh\",\"km\":\"Khmer\",\"rw\":\"Kinyarwanda\",\"ko\":\"Korean\",\"kri\":\"Krio\",\"ku\":\"Kurdish\",\"ky\":\"Kyrgyz\",\"lo\":\"Lao\",\"la\":\"Latin\",\"lv\":\"Latvian\",\"ln\":\"Lingala\",\"lt\":\"Lithuanian\",\"lb\":\"Luxembourgish\",\"mk\":\"Macedonian\",\"mg\":\"Malagasy\",\"ms\":\"Malay\",\"ml\":\"Malayalam\",\"mt\":\"Maltese\",\"mi\":\"Māori\",\"mr\":\"Marathi\",\"mn\":\"Mongolian\",\"ne\":\"Nepali\",\"nso\":\"Northern Sotho\",\"no\":\"Norwegian\",\"ny\":\"Nyanja\",\"or\":\"Odia\",\"om\":\"Oromo\",\"ps\":\"Pashto\",\"fa\":\"Persian\",\"pl\":\"Polish\",\"pt\":\"Portuguese\",\"pa\":\"Punjabi\",\"qu\":\"Quechua\",\"ro\":\"Romanian\",\"ru\":\"Russian\",\"sm\":\"Samoan\",\"sa\":\"Sanskrit\",\"gd\":\"Scottish Gaelic\",\"sr\":\"Serbian\",\"sn\":\"Shona\",\"sd\":\"Sindhi\",\"si\":\"Sinhala\",\"sk\":\"Slovak\",\"sl\":\"Slovenian\",\"so\":\"Somali\",\"st\":\"Southern Sotho\",\"es\":\"Spanish\",\"su\":\"Sundanese\",\"sw\":\"Swahili\",\"sv\":\"Swedish\",\"tg\":\"Tajik\",\"ta\":\"Tamil\",\"tt\":\"Tatar\",\"te\":\"Telugu\",\"th\":\"Thai\",\"ti\":\"Tigrinya\",\"ts\":\"Tsonga\",\"tr\":\"Turkish\",\"tk\":\"Turkmen\",\"uk\":\"Ukrainian\",\"ur\":\"Urdu\",\"ug\":\"Uyghur\",\"uz\":\"Uzbek\",\"vi\":\"Vietnamese\",\"cy\":\"Welsh\",\"fy\":\"Western Frisian\",\"xh\":\"Xhosa\",\"yi\":\"Yiddish\",\"yo\":\"Yoruba\",\"zu\":\"Zulu\"},\"streamNoConnectionToServer\":\"There is no connection to the server\",\"searchField\":\"Search...\",\"VOTTranslateAPIErrors\":\"Translate errors from the API\",\"VOTDetectService\":\"Language detection service\",\"VOTProxyWorkerHost\":\"Enter the proxy worker address\",\"VOTM3u8ProxyHost\":\"Enter the address of the m3u8 proxy worker\",\"proxySettings\":\"Proxy Settings\",\"translationTakeApproximatelyMinute2\":\"The translation will take approximately {0} minutes\",\"VOTAudioBooster\":\"Extended translation volume increase\",\"VOTSubtitlesDesign\":\"Subtitles design\",\"VOTSubtitlesFontSize\":\"Font size of subtitles\",\"VOTSubtitlesOpacity\":\"Transparency of the subtitle background\",\"VOTSubtitlesDownloadFormat\":\"The format for downloading subtitles\",\"VOTDownloadWithName\":\"Download files with the video name\",\"VOTUpdateLocaleFiles\":\"Update localization files\",\"VOTLocaleHash\":\"Locale hash\",\"VOTUpdatedAt\":\"Updated at\",\"VOTNeedWebAudioAPI\":\"To enable this, you must have a Web Audio API\",\"VOTMediaCSPEnabledOnSite\":\"Media CSP is enabled on this site\",\"VOTOnlyBypassMediaCSP\":\"Use it only for bypassing Media CSP\",\"VOTNewAudioPlayer\":\"Use the new audio player\",\"VOTUseNewModel\":\"Use an experimental variation of Yandex voices for some videos\",\"TranslationDelayed\":\"The translation is slightly delayed\",\"VOTTranslationCompletedNotify\":\"The translation on the {0} has been completed!\",\"VOTSendNotifyOnComplete\":\"Send a notification that the video has been translated\",\"VOTBugReport\":\"Report a bug\",\"VOTTranslateProxyDisabled\":\"Disabled\",\"VOTTranslateProxyEnabled\":\"Enabled\",\"VOTTranslateProxyEverything\":\"Proxy everything\",\"VOTTranslateProxyStatus\":\"Proxying mode\",\"VOTTranslatedBy\":\"Translated by {0}\",\"VOTStreamNotAvailable\":\"Translate stream isn't available\",\"VOTTranslationTextService\":\"Text translation service\",\"VOTNotAffectToVoice\":\"Doesn't affect the translation of text in voice over\",\"DontTranslateSelectedLanguages\":\"Don't translate from selected languages\",\"showVideoVolumeSlider\":\"Display the video volume slider\",\"hotkeysSettings\":\"Hotkeys settings\",\"None\":\"None\",\"VOTUseLivelyVoice\":\"Use lively voices. Speakers sound like native Russians.\",\"miscSettings\":\"Misc settings\",\"services\":{\"yandexbrowser\":\"Yandex Browser\",\"msedge\":\"Microsoft Edge\",\"rust-server\":\"Rust Server\"},\"aboutExtension\":\"About extension\",\"appearance\":\"Appearance\",\"buttonPositionInWidePlayer\":\"Button position in wide player\",\"position\":{\"left\":\"Left\",\"right\":\"Right\",\"top\":\"Top\",\"default\":\"Default\"},\"secs\":\"secs\",\"autoHideButtonDelay\":\"Delay before hiding the translate button\",\"notFound\":\"not found\",\"minButtonPositionContainer\":\"The button position only changes in players larger than 600 pixels.\",\"VOTTranslateProxyStatusDefault\":\"Completely disabling proxying in your country may break the extension\",\"PressTheKeyCombination\":\"Press the key combination...\",\"VOTUseAudioDownload\":\"Use audio download\",\"VOTUseAudioDownloadWarning\":\"Disabling audio downloads may affect the functionality of the extension\",\"VOTAccountRequired\":\"You need to log in to use this feature\",\"VOTMyAccount\":\"My account\",\"VOTLogin\":\"Login\",\"VOTLogout\":\"Logout\",\"VOTRefresh\":\"Refresh\",\"VOTYandexToken\":\"Enter the Yandex OAuth Token\",\"VOTYandexTokenInfo\":\"You can manually set the account token in this field. Please note that we don't check its validity before sending a translate request\",\"VOTLoginViaToken\":\"Login via token\"}");
		},
		"./src/localization/localizationProvider.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { j: () => T });
					var h = p("./src/localization/locales/en.json"), g = p("./src/config/config.js"), _ = p("./src/utils/debug.ts"), v = p("./src/utils/gm.ts"), b = p("./src/utils/localization.ts"), x = p("./src/utils/storage.ts"), C = p("./src/utils/utils.ts"), w = d([
						v,
						b,
						x,
						C
					]);
					[v, b, x, C] = w.then ? (await w)() : w;
					class LocalizationProvider {
						storageKeys = [
							"localePhrases",
							"localeLang",
							"localeHash",
							"localeUpdatedAt",
							"localeLangOverride"
						];
						lang;
						locale;
						defaultLocale = (0, C.GW)(h);
						cacheTTL = 7200;
						localizationUrl = `${g.hx}/master/src/localization`;
						_langOverride = "auto";
						constructor() {
							this.lang = this.getLang(), this.locale = {};
						}
						async init() {
							this._langOverride = await x.d.get("localeLangOverride", "auto"), this.lang = this.getLang();
							let d = await x.d.get("localePhrases", "");
							return this.setLocaleFromJsonString(d), this;
						}
						get langOverride() {
							return this._langOverride;
						}
						getLang() {
							return this.langOverride === "auto" ? b.v : this.langOverride;
						}
						getAvailableLangs() {
							return "auto.en.ru.af.am.ar.az.bg.bn.bs.ca.cs.cy.da.de.el.es.et.eu.fa.fi.fr.gl.hi.hr.hu.hy.id.it.ja.jv.kk.km.kn.ko.lo.mk.ml.mn.ms.mt.my.ne.nl.pa.pl.pt.ro.si.sk.sl.sq.sr.su.sv.sw.tr.uk.ur.uz.vi.zh.zu".split(".");
						}
						async reset() {
							for (let d of this.storageKeys) await x.d.delete(d);
							return this;
						}
						buildUrl(d, f = !1) {
							let p = f ? `?timestamp=${(0, C.lg)()}` : "";
							return `${this.localizationUrl}${d}${p}`;
						}
						async changeLang(d) {
							let f = this.langOverride;
							return f === d ? !1 : (await x.d.set("localeLangOverride", d), this._langOverride = d, this.lang = this.getLang(), await this.update(!0), !0);
						}
						async checkUpdates(d = !1) {
							_.A.log("Check locale updates...");
							try {
								let f = await (0, v.G3)(this.buildUrl("/hashes.json", d));
								if (!f.ok) throw f.status;
								let p = await f.json();
								return await x.d.get("localeHash") === p[this.lang] ? !1 : p[this.lang];
							} catch (d) {
								return console.error("[VOT] [localizationProvider] Failed to get locales hash:", d), !1;
							}
						}
						async update(d = !1) {
							let f = await x.d.get("localeUpdatedAt", 0);
							if (!d && f + this.cacheTTL > (0, C.lg)() && await x.d.get("localeLang") === this.lang) return this;
							let p = await this.checkUpdates(d);
							if (await x.d.set("localeUpdatedAt", (0, C.lg)()), !p) return this;
							_.A.log("Updating locale...");
							try {
								let f = await (0, v.G3)(this.buildUrl(`/locales/${this.lang}.json`, d));
								if (!f.ok) throw f.status;
								let m = await f.text();
								await x.d.set("localePhrases", m), await x.d.set("localeHash", p), await x.d.set("localeLang", this.lang), this.setLocaleFromJsonString(m);
							} catch (d) {
								console.error("[VOT] [localizationProvider] Failed to get locale:", d), this.setLocaleFromJsonString(await x.d.get("localePhrases", ""));
							}
							return this;
						}
						setLocaleFromJsonString(d) {
							try {
								let f = JSON.parse(d) || {};
								this.locale = (0, C.GW)(f);
							} catch (d) {
								console.error("[VOT] [localizationProvider]", d), this.locale = {};
							}
							return this;
						}
						getFromLocale(d, f) {
							return d?.[f] ?? this.warnMissingKey(d, f);
						}
						warnMissingKey(d, f) {
							console.warn("[VOT] [localizationProvider] locale", d, "doesn't contain key", f);
						}
						getDefault(d) {
							return this.getFromLocale(this.defaultLocale, d) ?? d;
						}
						get(d) {
							return this.getFromLocale(this.locale, d) ?? this.getDefault(d);
						}
					}
					let T = new LocalizationProvider();
					await T.init(), m();
				} catch (d) {
					m(d);
				}
			}, 1);
		},
		"./src/styles/main.scss": () => {
			GM_addStyle(".vot-button{--vot-helper-theme:var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243));--vot-helper-ontheme:var(--vot-ontheme-rgb,var(--vot-onprimary-rgb,255,255,255));box-sizing:border-box;vertical-align:middle;text-align:center;text-overflow:ellipsis;min-width:64px;height:36px;color:rgb(var(--vot-helper-ontheme));background-color:rgb(var(--vot-helper-theme));font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:pointer;outline:none;font-size:14px;font-weight:500;line-height:36px;transition:box-shadow .2s;display:inline-block;position:relative;box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;border:none!important;border-radius:4px!important;padding:0 16px!important}.vot-button[hidden]{display:none!important}.vot-button::-moz-focus-inner{border:none!important}.vot-button:before,.vot-button:after{content:\"\";opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit!important}.vot-button:before{background-color:rgb(var(--vot-helper-ontheme));transition:opacity .2s}.vot-button:after{background:radial-gradient(circle,currentColor 1%,#0000 1%) 50%/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-button:hover{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.vot-button:hover:before{opacity:.08}.vot-button:active{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.vot-button:active:after{opacity:.32;background-size:100% 100%;transition:background-size}.vot-button[disabled=true]{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.12);color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);box-shadow:none;cursor:initial}.vot-button[disabled=true]:before,.vot-button[disabled=true]:after{opacity:0}.vot-outlined-button{--vot-helper-theme:var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243));box-sizing:border-box;vertical-align:middle;text-align:center;text-overflow:ellipsis;min-width:64px;height:36px;color:rgb(var(--vot-helper-theme));font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:pointer;background-color:#0000;outline:none;font-size:14px;font-weight:500;line-height:34px;display:inline-block;position:relative;border:solid 1px rgba(var(--vot-onsurface-rgb,0,0,0),.24)!important;border-radius:4px!important;margin:0!important;padding:0 16px!important}.vot-outlined-button[hidden]{display:none!important}.vot-outlined-button::-moz-focus-inner{border:none!important}.vot-outlined-button:before,.vot-outlined-button:after{content:\"\";opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:3px!important}.vot-outlined-button:before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-outlined-button:after{background:radial-gradient(circle,currentColor 1%,#0000 1%) 50%/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-outlined-button:hover:before{opacity:.04}.vot-outlined-button:active:after{opacity:.16;background-size:100% 100%;transition:background-size}.vot-outlined-button[disabled=true]{color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);cursor:initial;background-color:#0000}.vot-outlined-button[disabled=true]:before,.vot-outlined-button[disabled=true]:after{opacity:0}.vot-text-button{--vot-helper-theme:var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243));box-sizing:border-box;vertical-align:middle;text-align:center;text-overflow:ellipsis;min-width:64px;height:36px;color:rgb(var(--vot-helper-theme));font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:pointer;background-color:#0000;outline:none;font-size:14px;font-weight:500;line-height:36px;display:inline-block;position:relative;border:none!important;border-radius:4px!important;margin:0!important;padding:0 8px!important}.vot-text-button[hidden]{display:none!important}.vot-text-button::-moz-focus-inner{border:none!important}.vot-text-button:before,.vot-text-button:after{content:\"\";opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit!important}.vot-text-button:before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-text-button:after{background:radial-gradient(circle,currentColor 1%,#0000 1%) 50%/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-text-button:hover:before{opacity:.04}.vot-text-button:active:after{opacity:.16;background-size:100% 100%;transition:background-size}.vot-text-button[disabled=true]{color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);cursor:initial;background-color:#0000}.vot-text-button[disabled=true]:before,.vot-text-button[disabled=true]:after{opacity:0}.vot-icon-button{--vot-helper-onsurface:rgba(var(--vot-onsurface-rgb,0,0,0),.87);box-sizing:border-box;vertical-align:middle;text-align:center;text-overflow:ellipsis;width:36px;height:36px;fill:var(--vot-helper-onsurface);color:var(--vot-helper-onsurface);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:pointer;background-color:#0000;outline:none;font-size:14px;font-weight:500;line-height:36px;display:inline-block;position:relative;border:none!important;border-radius:50%!important;margin:0!important;padding:0!important}.vot-icon-button[hidden]{display:none!important}.vot-icon-button::-moz-focus-inner{border:none!important}.vot-icon-button:before,.vot-icon-button:after{content:\"\";opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit!important}.vot-icon-button:before{background-color:var(--vot-helper-onsurface);transition:opacity .2s}.vot-icon-button:after{background:radial-gradient(circle,currentColor 1%,#0000 1%) 50%/10000% 10000% no-repeat;transition:opacity .3s,background-size .4s}.vot-icon-button:hover:before{opacity:.04}.vot-icon-button:active:after{opacity:.32;background-size:100% 100%;transition:background-size,opacity}.vot-icon-button[disabled=true]{color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);fill:rgba(var(--vot-onsurface-rgb,0,0,0),.38);cursor:initial;background-color:#0000}.vot-icon-button[disabled=true]:before,.vot-icon-button[disabled=true]:after{opacity:0}.vot-icon-button svg{fill:inherit;stroke:inherit;width:24px;height:36px}.vot-hotkey{justify-content:space-between;align-items:start;display:flex}.vot-hotkey-label{word-break:break-word;max-width:80%}.vot-hotkey-button{--vot-helper-surface:rgba(var(--vot-onsurface-rgb),.2);--vot-helper-theme:var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243));box-sizing:border-box;vertical-align:middle;text-align:center;width:fit-content;min-width:32px;height:fit-content;font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:pointer;background-color:#0000;outline:none;font-size:15px;line-height:1.5;display:inline-block;position:relative;border:solid 1px rgba(var(--vot-onsurface-rgb,0,0,0),.24)!important;border-radius:4px!important;margin:0!important;padding:0 8px!important}.vot-hotkey-button[hidden]{display:none!important}.vot-hotkey-button::-moz-focus-inner{border:none!important}.vot-hotkey-button:before,.vot-hotkey-button:after{content:\"\";opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:3px!important}.vot-hotkey-button:before{background-color:rgb(var(--vot-helper-theme));transition:opacity .2s}.vot-hotkey-button:after{background:radial-gradient(circle,currentColor 1%,#0000 1%) 50%/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-hotkey-button:hover:before{opacity:.04}.vot-hotkey-button:active:after{opacity:.16;background-size:100% 100%;transition:background-size}.vot-hotkey-button[data-status=active]{color:rgb(var(--vot-helper-theme))}.vot-hotkey-button[data-status=active]:before{opacity:.04}.vot-hotkey-button[disabled=true]{color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);cursor:initial;background-color:#0000}.vot-hotkey-button[disabled=true]:before,.vot-hotkey-button[disabled=true]:after{opacity:0}.vot-textfield{display:inline-block;--vot-helper-theme:rgb(var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243)))!important;--vot-helper-safari1:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important;--vot-helper-safari2:rgba(var(--vot-onsurface-rgb,0,0,0),.6)!important;--vot-helper-safari3:rgba(var(--vot-onsurface-rgb,0,0,0),.87)!important;font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif)!important;text-align:start!important;padding-top:6px!important;font-size:16px!important;line-height:1.5!important;position:relative!important}.vot-textfield[hidden]{display:none!important}.vot-textfield>input,.vot-textfield>textarea{box-sizing:border-box!important;border-style:solid!important;border-width:1px!important;border-color:transparent var(--vot-helper-safari2)var(--vot-helper-safari2)!important;width:100%!important;height:inherit!important;color:rgba(var(--vot-onsurface-rgb,0,0,0),.87)!important;-webkit-text-fill-color:currentColor!important;font-family:inherit!important;font-size:inherit!important;line-height:inherit!important;caret-color:var(--vot-helper-theme)!important;background-color:#0000!important;border-radius:4px!important;margin:0!important;padding:15px 13px!important;transition:border .2s,box-shadow .2s!important;box-shadow:inset 1px 0 #0000,inset -1px 0 #0000,inset 0 -1px #0000!important}.vot-textfield>input:not(:focus):not(.vot-show-placeholer)::-moz-placeholder{color:#0000!important}.vot-textfield>textarea:not(:focus):not(.vot-show-placeholer)::-moz-placeholder{color:#0000!important}.vot-textfield>input:not(:focus):not(.vot-show-placeholer)::-moz-placeholder{color:#0000!important}.vot-textfield>textarea:not(:focus):not(.vot-show-placeholer)::-moz-placeholder{color:#0000!important}.vot-textfield>input:not(:focus):not(.vot-show-placeholer)::-webkit-input-placeholder{color:#0000!important}.vot-textfield>textarea:not(:focus):not(.vot-show-placeholer)::-webkit-input-placeholder{color:#0000!important}.vot-textfield>input:not(:focus):placeholder-shown,.vot-textfield>textarea:not(:focus):placeholder-shown{border-top-color:var(--vot-helper-safari2)!important}.vot-textfield>input+span,.vot-textfield>textarea+span{font-family:inherit;width:100%!important;max-height:100%!important;color:rgba(var(--vot-onsurface-rgb,0,0,0),.6)!important;cursor:text!important;pointer-events:none!important;font-size:75%!important;line-height:15px!important;transition:color .2s,font-size .2s,line-height .2s!important;display:flex!important;position:absolute!important;top:0!important;left:0!important}.vot-textfield>input:not(:focus):placeholder-shown+span,.vot-textfield>textarea:not(:focus):placeholder-shown+span{font-size:inherit!important;line-height:68px!important}.vot-textfield>input+span:before,.vot-textfield>input+span:after,.vot-textfield>textarea+span:before,.vot-textfield>textarea+span:after{content:\"\"!important;box-sizing:border-box!important;border-top:solid 1px var(--vot-helper-safari2)!important;pointer-events:none!important;min-width:10px!important;height:8px!important;margin-top:6px!important;transition:border .2s,box-shadow .2s!important;display:block!important;box-shadow:inset 0 1px #0000!important}.vot-textfield>input+span:before,.vot-textfield>textarea+span:before{border-left:1px solid #0000!important;border-radius:4px 0!important;margin-right:4px!important}.vot-textfield>input+span:after,.vot-textfield>textarea+span:after{border-right:1px solid #0000!important;border-radius:0 4px!important;flex-grow:1!important;margin-left:4px!important}.vot-textfield>input.vot-show-placeholer+span:before,.vot-textfield>textarea.vot-show-placeholer+span:before{margin-right:0!important}.vot-textfield>input.vot-show-placeholer+span:after,.vot-textfield>textarea.vot-show-placeholer+span:after{margin-left:0!important}.vot-textfield>input:not(:focus):placeholder-shown+span:before,.vot-textfield>input:not(:focus):placeholder-shown+span:after,.vot-textfield>textarea:not(:focus):placeholder-shown+span:before,.vot-textfield>textarea:not(:focus):placeholder-shown+span:after{border-top-color:#0000!important}.vot-textfield:hover>input:not(:disabled),.vot-textfield:hover>textarea:not(:disabled){border-color:transparent var(--vot-helper-safari3)var(--vot-helper-safari3)!important}.vot-textfield:hover>input:not(:disabled)+span:before,.vot-textfield:hover>input:not(:disabled)+span:after,.vot-textfield:hover>textarea:not(:disabled)+span:before,.vot-textfield:hover>textarea:not(:disabled)+span:after{border-top-color:var(--vot-helper-safari3)!important}.vot-textfield:hover>input:not(:disabled):not(:focus):placeholder-shown,.vot-textfield:hover>textarea:not(:disabled):not(:focus):placeholder-shown{border-color:var(--vot-helper-safari3)!important}.vot-textfield>input:focus,.vot-textfield>textarea:focus{border-color:transparent var(--vot-helper-theme)var(--vot-helper-theme)!important;box-shadow:inset 1px 0 var(--vot-helper-theme),inset -1px 0 var(--vot-helper-theme),inset 0 -1px var(--vot-helper-theme)!important;outline:none!important}.vot-textfield>input:focus+span,.vot-textfield>textarea:focus+span{color:var(--vot-helper-theme)!important}.vot-textfield>input:focus+span:before,.vot-textfield>input:focus+span:after,.vot-textfield>textarea:focus+span:before,.vot-textfield>textarea:focus+span:after{border-top-color:var(--vot-helper-theme)!important;box-shadow:inset 0 1px var(--vot-helper-theme)!important}.vot-textfield>input:disabled,.vot-textfield>input:disabled+span,.vot-textfield>textarea:disabled,.vot-textfield>textarea:disabled+span{border-color:transparent var(--vot-helper-safari1)var(--vot-helper-safari1)!important;color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important;pointer-events:none!important}.vot-textfield>input:disabled+span:before,.vot-textfield>input:disabled+span:after,.vot-textfield>textarea:disabled+span:before,.vot-textfield>textarea:disabled+span:after,.vot-textfield>input:disabled:placeholder-shown,.vot-textfield>input:disabled:placeholder-shown+span,.vot-textfield>textarea:disabled:placeholder-shown,.vot-textfield>textarea:disabled:placeholder-shown+span{border-top-color:var(--vot-helper-safari1)!important}.vot-textfield>input:disabled:placeholder-shown+span:before,.vot-textfield>input:disabled:placeholder-shown+span:after,.vot-textfield>textarea:disabled:placeholder-shown+span:before,.vot-textfield>textarea:disabled:placeholder-shown+span:after{border-top-color:#0000!important}@media not all and (-webkit-min-device-pixel-ratio:.0000264583),not all and (min-resolution:.001dpcm){@supports ((-webkit-appearance:none)){.vot-textfield>input,.vot-textfield>input+span,.vot-textfield>textarea,.vot-textfield>textarea+span,.vot-textfield>input+span:before,.vot-textfield>input+span:after,.vot-textfield>textarea+span:before,.vot-textfield>textarea+span:after{transition-duration:.1s!important}}}.vot-checkbox{--vot-helper-theme:var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243));--vot-helper-ontheme:var(--vot-ontheme-rgb,var(--vot-onprimary-rgb,255,255,255));z-index:0;color:rgba(var(--vot-onsurface-rgb,0,0,0),.87);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);text-align:start;font-size:16px;line-height:1.5;display:inline-block;position:relative}.vot-checkbox-sub{padding-left:28px!important}.vot-checkbox[hidden]{display:none!important}.vot-checkbox>input{-webkit-appearance:none;appearance:none;z-index:10000;box-sizing:border-box;opacity:1;cursor:pointer;background:0 0;outline:none;width:18px;height:18px;transition:border-color .2s,background-color .2s;display:block;position:absolute;border:2px solid!important;border-color:rgba(var(--vot-onsurface-rgb,0,0,0),.6)!important;border-radius:2px!important;margin:3px 1px!important;padding:0!important}.vot-checkbox>input+span{box-sizing:border-box;width:inherit;cursor:pointer;font-family:inherit;font-weight:400;display:inline-block;position:relative;padding-left:30px!important}.vot-checkbox>input+span:before{content:\"\";background-color:rgb(var(--vot-onsurface-rgb,0,0,0));opacity:0;pointer-events:none;width:40px;height:40px;transition:opacity .3s,transform .2s;display:block;position:absolute;top:-8px;left:-10px;transform:scale(1);border-radius:50%!important}.vot-checkbox>input+span:after{content:\"\";z-index:10000;pointer-events:none;width:10px;height:5px;transition:border-color .2s;display:block;position:absolute;top:3px;left:1px;transform:translate(3px,4px)rotate(-45deg);box-sizing:content-box!important;border:0 solid #0000!important;border-width:0 0 2px 2px!important}.vot-checkbox>input:checked,.vot-checkbox>input:indeterminate{background-color:rgb(var(--vot-helper-theme));border-color:rgb(var(--vot-helper-theme))!important}.vot-checkbox>input:checked+span:before,.vot-checkbox>input:indeterminate+span:before{background-color:rgb(var(--vot-helper-theme))}.vot-checkbox>input:checked+span:after,.vot-checkbox>input:indeterminate+span:after{border-color:rgb(var(--vot-helper-ontheme,255,255,255))!important}.vot-checkbox>input:hover{box-shadow:none!important}.vot-checkbox>input:indeterminate+span:after{transform:translate(4px,3px);border-left-width:0!important}.vot-checkbox:hover>input+span:before{opacity:.04}.vot-checkbox:active>input,.vot-checkbox:active:hover>input:not(:disabled){border-color:rgb(var(--vot-helper-theme))!important}.vot-checkbox:active>input:checked{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.6);border-color:#0000!important}.vot-checkbox:active>input+span:before{opacity:1;transition:transform,opacity;transform:scale(0)}.vot-checkbox>input:disabled{cursor:initial;border-color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important}.vot-checkbox>input:disabled:checked,.vot-checkbox>input:disabled:indeterminate{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);border-color:#0000!important}.vot-checkbox>input:disabled+span{color:rgba(var(--vot-onsurface-rgb,0,0,0),.38);cursor:initial}.vot-checkbox>input:disabled+span:before{opacity:0;transform:scale(0)}.vot-slider{display:inline-block;--vot-safari-helper1:rgba(var(--vot-primary-rgb,33,150,243),.04)!important;--vot-safari-helper2:rgba(var(--vot-primary-rgb,33,150,243),.12)!important;--vot-safari-helper3:rgba(var(--vot-primary-rgb,33,150,243),.16)!important;--vot-safari-helper4:rgba(var(--vot-primary-rgb,33,150,243),.24)!important;width:100%!important;color:rgba(var(--vot-onsurface-rgb,0,0,0),.87)!important;font-family:var(--vot-font,\"Roboto\",\"Segoe UI\",BlinkMacSystemFont,system-ui,-apple-system)!important;text-align:start!important;font-size:16px!important;line-height:1.5!important}.vot-slider[hidden]{display:none!important}.vot-slider>input{-webkit-appearance:none!important;appearance:none!important;cursor:pointer!important;background-color:#0000!important;border:none!important;width:100%!important;height:36px!important;margin:0 0 -36px!important;padding:0!important;display:block!important;position:relative!important;top:24px!important}.vot-slider>input:hover{box-shadow:none!important}.vot-slider>input:last-child{margin:0!important;position:static!important}.vot-slider>input:before{content:\"\"!important;width:calc(100%*var(--vot-progress,0))!important;background:rgb(var(--vot-primary-rgb,33,150,243))!important;height:2px!important;display:block!important;position:absolute!important;top:calc(50% - 1px)!important}.vot-slider>input:disabled{cursor:default!important;opacity:.38!important}.vot-slider>input:disabled+span{color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important}.vot-slider>input:disabled::-webkit-slider-runnable-track{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important}.vot-slider>input:disabled::-moz-range-track{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important}.vot-slider>input:disabled::-ms-fill-lower{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important}.vot-slider>input:disabled::-ms-fill-upper{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)!important}.vot-slider>input:disabled::-moz-range-thumb{background-color:rgb(var(--vot-onsurface-rgb,0,0,0))!important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb,255,255,255))!important;transform:scale(4)!important}.vot-slider>input:disabled::-ms-thumb{background-color:rgb(var(--vot-onsurface-rgb,0,0,0))!important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb,255,255,255))!important;transform:scale(4)!important}.vot-slider>input:disabled::-webkit-slider-thumb{background-color:rgb(var(--vot-onsurface-rgb,0,0,0))!important;box-shadow:0 0 0 1px rgb(var(--vot-surface-rgb,255,255,255))!important;transform:scale(4)!important}.vot-slider>input:disabled::-ms-fill-upper{opacity:.38!important}.vot-slider>input:disabled::-moz-range-progress{background-color:rgba(var(--vot-onsurface-rgb,0,0,0),.87)!important}.vot-slider>input:disabled:-webkit-slider-thumb{color:rgb(var(--vot-surface-rgb,255,255,255))!important}.vot-slider>input:active::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--vot-safari-helper4)!important}.vot-slider>input:active::-moz-range-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb,33,150,243),.24)!important}.vot-slider>input:active::-ms-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb,33,150,243),.24)!important}.vot-slider>input:focus{outline:none!important}.vot-slider>input::-webkit-slider-runnable-track{background-color:rgba(var(--vot-primary-rgb,33,150,243),.24)!important;border-radius:1px!important;width:100%!important;height:2px!important;margin:17px 0!important}.vot-slider>input::-moz-range-track{background-color:rgba(var(--vot-primary-rgb,33,150,243),.24)!important;border-radius:1px!important;width:100%!important;height:2px!important;margin:17px 0!important}.vot-slider>input::-ms-track{box-sizing:border-box!important;background-color:#0000!important;border:none!important;border-radius:1px!important;width:100%!important;height:2px!important;margin:17px 0!important;padding:0 17px!important}.vot-slider>input::-webkit-slider-thumb{-webkit-appearance:none!important;appearance:none!important;background-color:rgb(var(--vot-primary-rgb,33,150,243))!important;border:none!important;border-radius:50%!important;width:2px!important;height:2px!important;transition:box-shadow .2s!important;transform:scale(6)!important}.vot-slider>input::-moz-range-thumb{-webkit-appearance:none!important;appearance:none!important;background-color:rgb(var(--vot-primary-rgb,33,150,243))!important;border:none!important;border-radius:50%!important;width:2px!important;height:2px!important;transition:box-shadow .2s!important;transform:scale(6)!important}.vot-slider>input::-ms-thumb{-webkit-appearance:none!important;appearance:none!important;background-color:rgb(var(--vot-primary-rgb,33,150,243))!important;border:none!important;border-radius:50%!important;width:2px!important;height:2px!important;transition:box-shadow .2s!important;transform:scale(6)!important}.vot-slider>input::-webkit-slider-thumb{-webkit-appearance:none!important;margin:0!important}.vot-slider>input::-moz-range-thumb{-moz-appearance:none!important}.vot-slider>input::-ms-thumb{margin:0 17px!important}.vot-slider>input::-moz-range-progress{background-color:rgb(var(--vot-primary-rgb,33,150,243))!important;border-radius:1px!important;height:2px!important}.vot-slider>input::-ms-fill-lower{background-color:rgb(var(--vot-primary-rgb,33,150,243))!important;border-radius:1px!important;height:2px!important}.vot-slider>input::-ms-fill-upper{background-color:rgb(var(--vot-primary-rgb,33,150,243))!important;border-radius:1px!important;height:2px!important}.vot-slider>input::-moz-focus-outer{border:none!important}.vot-slider>span{margin-bottom:36px!important;display:inline-block!important}.vot-slider:hover>input::-webkit-slider-thumb{box-shadow:0 0 0 2px var(--vot-safari-helper1)!important}.vot-slider:hover>input::-ms-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb,33,150,243),.04)!important}.vot-slider:hover>input:hover::-moz-range-thumb{box-shadow:0 0 0 2px rgba(var(--vot-primary-rgb,33,150,243),.04)!important}.vot-slider-label-value{margin-left:4px!important}.vot-select{font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);text-align:start;color:var(--vot-helper-theme);fill:var(--vot-helper-theme);justify-content:space-between;align-items:center;font-size:14px;font-weight:400;line-height:1.5;display:flex;--vot-helper-theme-rgb:var(--vot-onsurface-rgb,0,0,0)!important;--vot-helper-theme:rgba(var(--vot-helper-theme-rgb),.87)!important;--vot-helper-safari1:rgba(var(--vot-onsurface-rgb,0,0,0),.6)!important;--vot-helper-safari2:rgba(var(--vot-onsurface-rgb,0,0,0),.87)!important}.vot-select[hidden]{display:none!important}.vot-select-outer{cursor:pointer;justify-content:space-between;align-items:center;width:120px;max-width:120px;display:flex;border:1px solid var(--vot-helper-safari1)!important;border-radius:4px!important;padding:0 5px!important;transition:border .2s!important}.vot-select-outer:hover{border-color:var(--vot-helper-safari2)!important}.vot-select-title{text-overflow:ellipsis;white-space:nowrap;font-family:inherit;overflow:hidden}.vot-select-arrow-icon{justify-content:center;align-items:center;width:20px;height:32px;display:flex}.vot-select-arrow-icon svg{fill:inherit;stroke:inherit}.vot-select-content-list{flex-direction:column;display:flex}.vot-select-content-list .vot-select-content-item{cursor:pointer;border-radius:8px!important;padding:5px 10px!important}.vot-select-content-list .vot-select-content-item:not([inert]):hover{background-color:#2a2c31}.vot-select-content-list .vot-select-content-item[data-vot-selected=true]{color:rgb(var(--vot-primary-rgb,33,150,243));background-color:rgba(var(--vot-primary-rgb,33,150,243),.2)}.vot-select-content-list .vot-select-content-item[data-vot-selected=true]:hover{background-color:rgba(var(--vot-primary-rgb,33,150,243),.1)!important}.vot-select-content-list .vot-select-content-item[inert]{cursor:default;color:rgba(var(--vot-onsurface-rgb,0,0,0),.38)}.vot-select-content-list .vot-select-content-item[hidden]{display:none!important}.vot-header{color:rgba(var(--vot-helper-onsurface-rgb),.87);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);text-align:start;font-weight:700;line-height:1.5}.vot-header[hidden]{display:none!important}.vot-header:not(:first-child){padding-top:8px}.vot-header-level-1{font-size:2em}.vot-header-level-2{font-size:1.5em}.vot-header-level-3{font-size:1.17em}.vot-header-level-4{font-size:1em}.vot-header-level-5{font-size:.83em}.vot-header-level-6{font-size:.67em}.vot-info{color:rgba(var(--vot-helper-onsurface-rgb),.87);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);text-align:start;-webkit-user-select:text;user-select:text;font-size:16px;line-height:1.5;display:flex}.vot-info[hidden]{display:none!important}.vot-info>:not(:first-child){color:rgba(var(--vot-helper-onsurface-rgb),.5);flex:1;margin-left:8px!important}.vot-details{color:rgba(var(--vot-helper-onsurface-rgb),.87);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);text-align:start;cursor:pointer;justify-content:space-between;align-items:center;font-size:16px;line-height:1.5;transition:background .5s;display:flex;border-radius:.5em!important;margin:-.5em!important;padding:.5em!important}.vot-details[hidden]{display:none!important}.vot-details-arrow-icon{width:20px;height:32px;fill:rgba(var(--vot-helper-onsurface-rgb),.87);justify-content:center;align-items:center;display:flex;transform:scale(1.25)rotate(-90deg)}.vot-details:hover{background:rgba(var(--vot-onsurface-rgb,0,0,0),.04)}.vot-lang-select{--vot-helper-theme-rgb:var(--vot-onsurface-rgb,0,0,0);--vot-helper-theme:rgba(var(--vot-helper-theme-rgb),.87);color:var(--vot-helper-theme);fill:var(--vot-helper-theme);justify-content:space-between;align-items:center;display:flex}.vot-lang-select[hidden]{display:none!important}.vot-lang-select-icon{justify-content:center;align-items:center;width:32px;height:32px;display:flex}.vot-lang-select-icon svg{fill:inherit;stroke:inherit}.vot-segmented-button{--vot-helper-theme-rgb:var(--vot-onsurface-rgb,0,0,0);--vot-helper-theme:rgba(var(--vot-helper-theme-rgb),.87);-webkit-user-select:none;user-select:none;background:rgb(var(--vot-surface-rgb,255,255,255));max-width:100vw;height:32px;color:var(--vot-helper-theme);fill:var(--vot-helper-theme);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:default;z-index:2147483647;align-items:center;font-size:16px;line-height:1.5;transition:opacity .5s;display:flex;position:absolute;top:5rem;left:50%;overflow:hidden;transform:translate(-50%);border-radius:4px!important}.vot-segmented-button[hidden]{display:none!important}.vot-segmented-button *{box-sizing:border-box!important}.vot-segmented-button .vot-separator{background:rgba(var(--vot-helper-theme-rgb),.1);width:1px;height:50%}.vot-segmented-button .vot-separator[hidden]{display:none!important}.vot-segmented-button .vot-segment,.vot-segmented-button .vot-segment-only-icon{height:100%;color:inherit;background-color:#0000;justify-content:center;align-items:center;transition:background-color .1s ease-in-out;display:flex;position:relative;overflow:hidden;border:none!important;padding:0 8px!important}.vot-segmented-button .vot-segment[hidden],.vot-segmented-button [hidden].vot-segment-only-icon{display:none!important}.vot-segmented-button .vot-segment:before,.vot-segmented-button .vot-segment-only-icon:before,.vot-segmented-button .vot-segment:after,.vot-segmented-button .vot-segment-only-icon:after{content:\"\";opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit!important}.vot-segmented-button .vot-segment:before,.vot-segmented-button .vot-segment-only-icon:before{background-color:rgb(var(--vot-helper-theme-rgb));transition:opacity .2s}.vot-segmented-button .vot-segment:after,.vot-segmented-button .vot-segment-only-icon:after{background:radial-gradient(circle,currentColor 1%,#0000 1%) 50%/10000% 10000% no-repeat;transition:opacity 1s,background-size .5s}.vot-segmented-button .vot-segment:hover:before,.vot-segmented-button .vot-segment-only-icon:hover:before{opacity:.04}.vot-segmented-button .vot-segment:active:after,.vot-segmented-button .vot-segment-only-icon:active:after{opacity:.16;background-size:100% 100%;transition:background-size}.vot-segmented-button .vot-segment-only-icon{min-width:32px;padding:0!important}.vot-segmented-button .vot-segment-label{white-space:nowrap;color:inherit;font-weight:400;margin-left:8px!important}.vot-segmented-button[data-status=success] .vot-translate-button{color:rgb(var(--vot-primary-rgb,33,150,243));fill:rgb(var(--vot-primary-rgb,33,150,243))}.vot-segmented-button[data-status=error] .vot-translate-button{color:#f28b82;fill:#f28b82}.vot-segmented-button[data-loading=true] #vot-loading-icon{display:block!important}.vot-segmented-button[data-loading=true] #vot-translate-icon{display:none!important}.vot-segmented-button[data-direction=column]{flex-direction:column;height:fit-content}.vot-segmented-button[data-direction=column] .vot-segment-label{display:none}.vot-segmented-button[data-direction=column]>.vot-segment-only-icon,.vot-segmented-button[data-direction=column]>.vot-segment{padding:8px!important}.vot-segmented-button[data-direction=column] .vot-separator{width:50%;height:1px}.vot-segmented-button[data-position=left]{top:12.5vh;left:50px}.vot-segmented-button[data-position=right]{top:12.5vh;left:auto;right:0}.vot-segmented-button svg{width:24px;fill:inherit;stroke:inherit}.vot-tooltip{--vot-helper-theme-rgb:var(--vot-onsurface-rgb,0,0,0);--vot-helper-theme:rgba(var(--vot-helper-theme-rgb),.87);--vot-helper-ondialog:rgb(var(--vot-ondialog-rgb,37,38,40));--vot-helper-border:rgb(var(--vot-tooltip-border,69,69,69));-webkit-user-select:none;user-select:none;background:rgb(var(--vot-surface-rgb,255,255,255));color:var(--vot-helper-theme);fill:var(--vot-helper-theme);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:default;z-index:2147483647;opacity:0;align-items:center;width:max-content;max-width:calc(100vw - 10px);height:max-content;font-size:14px;line-height:1.5;transition:opacity .5s;display:flex;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;box-shadow:0 1px 3px #0000001f;border-radius:4px!important;padding:4px 8px!important}.vot-tooltip[hidden]{display:none!important}.vot-tooltip[data-trigger=click]{-webkit-user-select:text;user-select:text}.vot-tooltip.vot-tooltip-bordered{border:1px solid var(--vot-helper-border)}.vot-tooltip *{box-sizing:border-box!important}.vot-menu{--vot-helper-surface-rgb:var(--vot-surface-rgb,255,255,255);--vot-helper-surface:rgb(var(--vot-helper-surface-rgb));--vot-helper-onsurface-rgb:var(--vot-onsurface-rgb,0,0,0);--vot-helper-onsurface:rgba(var(--vot-helper-onsurface-rgb),.87);-webkit-user-select:none;user-select:none;background-color:var(--vot-helper-surface);color:var(--vot-helper-onsurface);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);cursor:default;z-index:2147483647;visibility:visible;opacity:1;transform-origin:top;min-width:300px;font-size:16px;line-height:1.5;transition:opacity .3s,transform .1s;position:absolute;top:calc(5rem + 48px);left:50%;overflow:hidden;transform:translate(-50%)scale(1);border-radius:8px!important}.vot-menu *{box-sizing:border-box!important}.vot-menu[hidden]{pointer-events:none;visibility:hidden;opacity:0;transform:translate(-50%)scale(0);display:block!important}.vot-menu-content-wrapper{min-height:100px;max-height:calc(var(--vot-container-height,75vh) - (5rem + 32px + 16px)*2);flex-direction:column;display:flex;overflow:auto}.vot-menu-header-container{flex-shrink:0;align-items:flex-start;min-height:31px;display:flex}.vot-menu-header-container:empty{padding:0 0 16px!important}.vot-menu-header-container>.vot-icon-button{margin-inline-end:4px!important;margin-top:4px!important}.vot-menu-title-container{font-size:inherit;font-weight:inherit;text-align:start;outline:0;flex:1;display:flex;margin:0!important}.vot-menu-title{flex:1;font-size:16px;font-weight:400;line-height:1;padding:16px!important}.vot-menu-body-container{box-sizing:border-box;overscroll-behavior:contain;flex-direction:column;gap:8px;min-height:1.375rem;display:flex;overflow:auto;scrollbar-color:rgba(var(--vot-helper-onsurface-rgb),.1)var(--vot-helper-surface)!important;padding:0 16px!important}.vot-menu-body-container::-webkit-scrollbar{background:var(--vot-helper-surface)!important;width:12px!important;height:12px!important}.vot-menu-body-container::-webkit-scrollbar-track{background:var(--vot-helper-surface)!important;width:12px!important;height:12px!important}.vot-menu-body-container::-webkit-scrollbar-thumb{background:rgba(var(--vot-helper-onsurface-rgb),.1)!important;border:5px solid var(--vot-helper-surface)!important;-webkit-border-radius:1ex!important}.vot-menu-body-container::-webkit-scrollbar-thumb:hover{border:3px solid var(--vot-helper-surface)!important}.vot-menu-body-container::-webkit-scrollbar-corner{background:var(--vot-helper-surface)!important}.vot-menu-footer-container{flex-shrink:0;justify-content:flex-end;display:flex;padding:16px!important}.vot-menu-footer-container:empty{padding:16px 0 0!important}.vot-menu[data-position=left]{transform-origin:0;top:12.5vh;left:240px}.vot-menu[data-position=right]{transform-origin:100%;top:12.5vh;left:auto;right:-80px}.vot-dialog{--vot-helper-surface-rgb:var(--vot-surface-rgb,255,255,255);--vot-helper-surface:rgb(var(--vot-helper-surface-rgb));--vot-helper-onsurface-rgb:var(--vot-onsurface-rgb,0,0,0);--vot-helper-onsurface:rgba(var(--vot-helper-onsurface-rgb),.87);max-width:initial;max-height:initial;width:min(var(--vot-dialog-width,512px),100%);top:50%;bottom:50%;background-color:var(--vot-helper-surface);height:fit-content;color:var(--vot-helper-onsurface);font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);-webkit-user-select:none;user-select:none;visibility:visible;opacity:1;transform-origin:50%;border-radius:8px;font-size:16px;line-height:1.5;transition:opacity .3s,transform .1s;display:block;position:fixed;top:0;bottom:0;left:0;right:0;overflow-x:auto;overflow-y:hidden;transform:scale(1);box-shadow:0 0 16px #0000001f,0 16px 16px #0000003d;margin:auto!important;padding:0!important}[hidden]>.vot-dialog{pointer-events:none;opacity:0;transition:opacity .1s,transform .2s;transform:scale(.5)}.vot-dialog-container{visibility:visible;z-index:2147483647;position:absolute}.vot-dialog-container[hidden]{pointer-events:none;visibility:hidden;display:block!important}.vot-dialog-container *{box-sizing:border-box!important}.vot-dialog-backdrop{opacity:1;background-color:#0009;transition:opacity .3s;position:fixed;top:0;bottom:0;left:0;right:0}[hidden]>.vot-dialog-backdrop{pointer-events:none;opacity:0}.vot-dialog-content-wrapper{flex-direction:column;max-height:75vh;display:flex;overflow:auto}.vot-dialog-header-container{flex-shrink:0;align-items:flex-start;min-height:31px;display:flex}.vot-dialog-header-container:empty{padding:0 0 20px}.vot-dialog-header-container>.vot-icon-button{margin-inline-end:4px!important;margin-top:4px!important}.vot-dialog-title-container{font-size:inherit;font-weight:inherit;outline:0;flex:1;display:flex;margin:0!important}.vot-dialog-title{flex:1;font-size:115.385%;font-weight:700;line-height:1;padding:20px 20px 16px!important}.vot-dialog-body-container{box-sizing:border-box;overscroll-behavior:contain;flex-direction:column;gap:16px;min-height:1.375rem;display:flex;overflow:auto;scrollbar-color:rgba(var(--vot-helper-onsurface-rgb),.1)var(--vot-helper-surface)!important;padding:0 20px!important}.vot-dialog-body-container::-webkit-scrollbar{background:var(--vot-helper-surface)!important;width:12px!important;height:12px!important}.vot-dialog-body-container::-webkit-scrollbar-track{background:var(--vot-helper-surface)!important;width:12px!important;height:12px!important}.vot-dialog-body-container::-webkit-scrollbar-thumb{background:rgba(var(--vot-helper-onsurface-rgb),.1)!important;border:5px solid var(--vot-helper-surface)!important;-webkit-border-radius:1ex!important}.vot-dialog-body-container::-webkit-scrollbar-thumb:hover{border:3px solid var(--vot-helper-surface)!important}.vot-dialog-body-container::-webkit-scrollbar-corner{background:var(--vot-helper-surface)!important}.vot-dialog-footer-container{flex-shrink:0;justify-content:flex-end;display:flex;padding:16px!important}.vot-dialog-footer-container:empty{padding:20px 0 0!important}.vot-inline-loader{aspect-ratio:5;--vot-loader-bg:no-repeat radial-gradient(farthest-side,rgba(var(--vot-onsurface-rgb,0,0,0),.38)94%,transparent);background:var(--vot-loader-bg),var(--vot-loader-bg),var(--vot-loader-bg),var(--vot-loader-bg);background-size:20% 100%;height:8px;animation:.75s infinite alternate dotsSlide,1.5s infinite alternate dotsFlip}.vot-loader-text{--vot-helper-theme:var(--vot-theme-rgb,var(--vot-primary-rgb,33,150,243));fill:rgb(var(--vot-helper-theme));font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);font-size:12px;font-weight:500}@keyframes dotsSlide{0%,10%{background-position:0 0,0 0,0 0,0 0}33%{background-position:0 0,33.3333% 0,33.3333% 0,33.3333% 0}66%{background-position:0 0,33.3333% 0,66.6667% 0,66.6667% 0}90%,to{background-position:0 0,33.3333% 0,66.6667% 0,100% 0}}@keyframes dotsFlip{0%,49.99%{transform:scale(1)}50%,to{transform:scale(-1)}}.vot-label{align-items:center;gap:4px;font-family:inherit;font-size:16px;display:flex}.vot-label-icon{width:20px;height:20px;margin-top:2px}.vot-label-icon>svg{width:20px;height:20px}.vot-account{justify-content:space-between;align-items:center;gap:1rem;display:flex}.vot-account-container,.vot-account-wrapper,.vot-account-buttons{align-items:center;gap:1rem;display:flex}.vot-account-avatar{min-width:36px;max-width:36px;min-height:36px;max-height:36px;overflow:hidden}.vot-account-avatar-img{object-fit:cover;border-radius:50%;width:36px;height:36px}.vot-account [hidden]{display:none!important}.vot-subtitles{--vot-subtitles-background:rgba(var(--vot-surface-rgb,46,47,52),var(--vot-subtitles-opacity,.8));background:var(--vot-subtitles-background,#2e2f34cc);width:max-content;max-width:100%;max-height:100%;color:var(--vot-subtitles-color,#e3e3e3);pointer-events:all;font-size:20px;font-family:var(--vot-font-family,\"Roboto\",\"Segoe UI\",system-ui,sans-serif);box-sizing:border-box;-webkit-user-select:none;user-select:none;flex-wrap:wrap;gap:0 3px;line-height:normal;display:flex;position:relative;border-radius:.5em!important;padding:.5em!important}.vot-subtitles-widget{z-index:2147483647;pointer-events:none;justify-content:center;align-items:center;width:50%;min-height:20%;max-height:100%;display:flex;position:absolute;top:75%;left:25%}.vot-subtitles-info{flex-direction:column;gap:2px;display:flex;padding:6px!important}.vot-subtitles-info-service{color:var(--vot-subtitles-context-color,#86919b);margin-bottom:8px!important;font-size:10px!important;line-height:1!important}.vot-subtitles-info-header{color:var(--vot-subtitles-header-color,#fff);margin-bottom:6px!important;font-size:20px!important;font-weight:500!important;line-height:1!important}.vot-subtitles-info-context{color:var(--vot-subtitles-context-color,#86919b);font-size:12px!important;line-height:1.2!important}.vot-subtitles span{cursor:pointer;position:relative;font-size:inherit!important;font-family:inherit!important;line-height:normal!important}.vot-subtitles span.passed{color:var(--vot-subtitles-passed-color,#2196f3)}.vot-subtitles span:before{content:\"\";z-index:-1;width:100%;height:100%;position:absolute;top:2px;bottom:2px;left:-2px;right:-2px;border-radius:4px!important;padding:0 2px!important}.vot-subtitles span:hover:before{background:var(--vot-subtitles-hover-color,#ffffff8c)}.vot-subtitles span.selected:before{background:var(--vot-subtitles-passed-color,#2196f3)}#vot-subtitles-info.vot-subtitles-info *{-webkit-user-select:text!important;user-select:text!important}:root{--vot-font-family:\"Roboto\",\"Segoe UI\",system-ui,sans-serif;--vot-primary-rgb:139,180,245;--vot-onprimary-rgb:32,33,36;--vot-surface-rgb:32,33,36;--vot-onsurface-rgb:227,227,227;--vot-subtitles-color:rgb(var(--vot-onsurface-rgb,227,227,227));--vot-subtitles-passed-color:rgb(var(--vot-primary-rgb,33,150,243))}vot-block{font-family:inherit;display:block;visibility:visible!important}.vot-portal{display:inline}.vot-portal-local{z-index:2147483647;position:fixed;top:0;left:0}");
		},
		"./src/subtitles.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						I: () => SubtitlesProcessor,
						o: () => SubtitlesWidget
					});
					var h = p("./node_modules/@vot.js/ext/dist/helpers/youtube.js"), g = p("./node_modules/@vot.js/shared/dist/utils/subs.js"), _ = p("./node_modules/lit-html/lit-html.js"), v = p("./src/config/config.js"), b = p("./src/localization/localizationProvider.ts"), x = p("./src/ui.js"), C = p("./src/ui/components/tooltip.ts"), w = p("./src/utils/gm.ts"), T = p("./src/utils/localization.ts"), E = p("./src/utils/storage.ts"), D = p("./src/utils/translateApis.ts"), O = p("./src/utils/utils.ts"), A = d([
						b,
						x,
						C,
						w,
						T,
						E,
						D,
						O
					]);
					[b, x, C, w, T, E, D, O] = A.then ? (await A)() : A;
					class SubtitlesProcessor {
						static formatYandexTokens(d) {
							let f = d.startMs + d.durationMs;
							return d.tokens.reduce((p, m, h) => {
								let g = d.tokens[h + 1], _ = p[p.length - 1], v = _?.alignRange?.end ?? 0, b = v + m.text.length;
								if (m.alignRange = {
									start: v,
									end: b
								}, p.push(m), g) {
									let d = m.startMs + m.durationMs, h = g.startMs ? g.startMs - d : f - d;
									p.push({
										text: " ",
										startMs: d,
										durationMs: h,
										alignRange: {
											start: b,
											end: b + 1
										}
									});
								}
								return p;
							}, []);
						}
						static createTokens(d, f) {
							let p = d.text.split(/([\n \t])/).reduce((d, p) => {
								if (!p.length) return d;
								let m = d[d.length - 1] ?? f, h = m?.alignRange?.end ?? 0, g = h + p.length;
								return d.push({
									text: p,
									alignRange: {
										start: h,
										end: g
									}
								}), d;
							}, []), m = Math.floor(d.durationMs / p.length), h = d.startMs + d.durationMs;
							return p.map((f, g) => {
								let _ = g === p.length - 1, v = d.startMs + m * g, b = _ ? h - v : m;
								return {
									...f,
									startMs: v,
									durationMs: b
								};
							});
						}
						static processTokens(d, f) {
							let p = [], m, { source: h, isAutoGenerated: g } = f;
							for (let f of d.subtitles) {
								let d = f?.tokens?.length, _ = d && (h === "yandex" || h === "youtube" && g) ? SubtitlesProcessor.formatYandexTokens(f) : SubtitlesProcessor.createTokens(f, m);
								m = _[_.length - 1], p.push({
									...f,
									tokens: _
								});
							}
							return d.containsTokens = !0, p;
						}
						static formatYoutubeSubtitles(d, f = !1) {
							if (!d?.events?.length) return console.error("[VOT] Invalid YouTube subtitles format:", d), {
								containsTokens: f,
								subtitles: []
							};
							let p = {
								containsTokens: f,
								subtitles: []
							};
							for (let m = 0; m < d.events.length; m++) {
								let h = d.events[m];
								if (!h.segs) continue;
								let g = h.dDurationMs;
								d.events[m + 1] && h.tStartMs + h.dDurationMs > d.events[m + 1].tStartMs && (g = d.events[m + 1].tStartMs - h.tStartMs);
								let _ = [], v = g;
								for (let d = 0; d < h.segs.length; d++) {
									let f = h.segs[d], p = f.utf8.trim();
									if (p === "\n") continue;
									let m = f.tOffsetMs ?? 0, b = g, x = h.segs[d + 1];
									x?.tOffsetMs && (b = x.tOffsetMs - m, v -= b), _.push({
										text: p,
										startMs: h.tStartMs + m,
										durationMs: x ? b : v
									});
								}
								let b = _.map((d) => d.text).join(" ");
								b && p.subtitles.push({
									text: b,
									startMs: h.tStartMs,
									durationMs: g,
									...f ? { tokens: _ } : {}
								});
							}
							return p;
						}
						static cleanJsonSubtitles(d) {
							let { containsTokens: f, subtitles: p } = d;
							return {
								containsTokens: f,
								subtitles: p.map((d) => ({
									...d,
									text: d.text.replace(/(<([^>]+)>)/gi, "")
								}))
							};
						}
						static async fetchSubtitles(d) {
							let { source: f, isAutoGenerated: p, format: m } = d, { url: _ } = d;
							if (f === "youtube") {
								let d = h.A.getPoToken();
								if (d) {
									let f = h.A.getDeviceParams();
									_ += `&potc=1&pot=${d}&${f}`;
								}
							}
							try {
								let h = await (0, w.G3)(_, { timeout: 7e3 }), v;
								if (["vtt", "srt"].includes(m)) {
									let d = await h.text();
									v = (0, g.vk)(d, "json");
								} else v = await h.json();
								return f === "youtube" ? v = SubtitlesProcessor.formatYoutubeSubtitles(v, p) : f === "vk" && (v = SubtitlesProcessor.cleanJsonSubtitles(v)), v.subtitles = SubtitlesProcessor.processTokens(v, d), console.log("[VOT] Processed subtitles:", v), v;
							} catch (d) {
								return console.error("[VOT] Failed to process subtitles:", d), {
									containsTokens: !1,
									subtitles: []
								};
							}
						}
						static async getSubtitles(d, f) {
							let { host: p, url: m, detectedLanguage: h, videoId: g, duration: _, subtitles: v = [] } = f;
							try {
								let f = await Promise.race([d.getSubtitles({
									videoData: {
										host: p,
										url: m,
										videoId: g,
										duration: _
									},
									requestLang: h
								}), (0, O.wR)(5e3, "Timeout")]);
								console.log("[VOT] Subtitles response:", f), f.waiting && console.error("[VOT] Failed to get Yandex subtitles");
								let b = (f.subtitles ?? []).reduce((d, f) => (f.language && !d.find((d) => d.source === "yandex" && d.language === f.language && !d.translatedFromLanguage) && d.push({
									source: "yandex",
									format: "json",
									language: f.language,
									url: f.url
								}), f.translatedLanguage && d.push({
									source: "yandex",
									format: "json",
									language: f.translatedLanguage,
									translatedFromLanguage: f.language,
									url: f.translatedUrl
								}), d), []);
								return [...b, ...v].sort((d, f) => {
									if (d.source !== f.source) return d.source === "yandex" ? -1 : 1;
									if (d.language !== f.language && (d.language === T.v || f.language === T.v)) return d.language === T.v ? -1 : 1;
									if (d.source === "yandex") {
										if (d.translatedFromLanguage !== f.translatedFromLanguage) return !d.translatedFromLanguage || !f.translatedFromLanguage ? d.language === f.language ? d.translatedFromLanguage ? 1 : -1 : d.translatedFromLanguage ? -1 : 1 : d.translatedFromLanguage === h ? -1 : 1;
										if (!d.translatedFromLanguage) return d.language === h ? -1 : 1;
									}
									return d.source !== "yandex" && d.isAutoGenerated !== f.isAutoGenerated ? d.isAutoGenerated ? 1 : -1 : 0;
								});
							} catch (d) {
								let f = d.message === "Timeout" ? "Failed to get Yandex subtitles: timeout" : "Error in getSubtitles function";
								throw console.error(`[VOT] ${f}`, d), d;
							}
						}
					}
					class SubtitlesWidget {
						constructor(d, f, p, m, h = void 0) {
							this.video = d, this.container = f, this.site = p, this.tooltipLayoutRoot = h, this.portal = m, this.subtitlesContainer = this.createSubtitlesContainer(), this.position = {
								left: 25,
								top: 75
							}, this.dragging = {
								active: !1,
								offset: {
									x: 0,
									y: 0
								}
							}, this.subtitles = null, this.subtitleLang = void 0, this.lastContent = null, this.highlightWords = !1, this.fontSize = 20, this.opacity = .2, this.maxLength = 300, this.abortController = new AbortController(), this.bindEvents(), this.updateContainerRect();
						}
						createSubtitlesContainer() {
							return this.subtitlesContainer = document.createElement("vot-block"), this.subtitlesContainer.classList.add("vot-subtitles-widget"), this.container.appendChild(this.subtitlesContainer), this.subtitlesContainer;
						}
						bindEvents() {
							let { signal: d } = this.abortController;
							this.onPointerDownBound = (d) => this.onPointerDown(d), this.onPointerUpBound = () => this.onPointerUp(), this.onPointerMoveBound = (d) => this.onPointerMove(d), this.onTimeUpdateBound = () => this.update(), document.addEventListener("pointerdown", this.onPointerDownBound, { signal: d }), document.addEventListener("pointerup", this.onPointerUpBound, { signal: d }), document.addEventListener("pointermove", this.onPointerMoveBound, { signal: d }), this.video?.addEventListener("timeupdate", this.onTimeUpdateBound, { signal: d }), this.resizeObserver = new ResizeObserver(() => this.onResize()), this.resizeObserver.observe(this.container);
						}
						onPointerDown(d) {
							if (!this.subtitlesContainer.contains(d.target)) return;
							let f = this.subtitlesContainer.getBoundingClientRect(), p = this.container.getBoundingClientRect();
							this.dragging = {
								active: !0,
								offset: {
									x: d.clientX - f.left,
									y: d.clientY - f.top
								},
								containerOffset: {
									x: p.left,
									y: p.top
								}
							};
						}
						onPointerUp() {
							this.dragging.active = !1;
						}
						onPointerMove(d) {
							if (!this.dragging.active) return;
							d.preventDefault();
							let { width: f, height: p } = this.container.getBoundingClientRect(), { containerOffset: m, offset: h } = this.dragging;
							this.position = {
								left: (d.clientX - h.x - m.x) / f * 100,
								top: (d.clientY - h.y - m.y) / p * 100
							}, this.applySubtitlePosition();
						}
						onResize() {
							this.updateContainerRect();
						}
						updateContainerRect() {
							this.containerRect = this.container.getBoundingClientRect(), this.applySubtitlePosition();
						}
						applySubtitlePosition() {
							let { width: d, height: f } = this.containerRect, { offsetWidth: p, offsetHeight: m } = this.subtitlesContainer, h = (d - p) / d * 100, g = (f - m) / f * 100;
							this.position.left = Math.max(0, Math.min(this.position.left, h)), this.position.top = Math.max(0, Math.min(this.position.top, g)), this.subtitlesContainer.style.left = `${this.position.left}%`, this.subtitlesContainer.style.top = `${this.position.top}%`, this.tokenTooltip?.updatePos();
						}
						processTokens(d) {
							if (d.at(-1).alignRange.end <= this.maxLength) return d;
							let f = [], p = [], m = 0;
							for (let h of d) m += h.text.length, p.push(h), m > this.maxLength && (f.push(this.trimChunk(p)), p = [], m = 0);
							p.length && f.push(this.trimChunk(p));
							let h = this.video.currentTime * 1e3;
							return f.find((d) => d[0].startMs < h && h < d.at(-1).startMs + d.at(-1).durationMs) || f[0];
						}
						trimChunk(d) {
							return d[0]?.text === " " && d.shift(), d.at(-1)?.text === " " && d.pop(), d;
						}
						async translateStrTokens(d) {
							let f = this.subtitleLang, p = b.j.lang;
							if (this.strTranslatedTokens) {
								let m = await (0, D.Tl)(d, f, p);
								return [this.strTranslatedTokens, m];
							}
							let m = await (0, D.Tl)([this.strTokens, d], f, p);
							return this.strTranslatedTokens = m[0], m;
						}
						releaseTooltip() {
							return this.tokenTooltip && (this.tokenTooltip.target.classList.remove("selected"), this.tokenTooltip.release(), this.tokenTooltip = void 0), this;
						}
						onClick = async (d) => {
							if (this.tokenTooltip?.target === d.target && this.tokenTooltip?.container) {
								this.tokenTooltip.showed ? d.target.classList.add("selected") : d.target.classList.remove("selected");
								return;
							}
							this.releaseTooltip(), d.target.classList.add("selected");
							let f = d.target.textContent.trim().replace(/[.|,]/, ""), p = await E.d.get("translationService", v.mE), m = x.A.createSubtitleInfo(f, this.strTranslatedTokens || this.strTokens, p);
							this.tokenTooltip = new C.A({
								target: d.target,
								anchor: this.subtitlesBlock,
								layoutRoot: this.tooltipLayoutRoot,
								content: m.container,
								parentElement: this.portal,
								maxWidth: this.subtitlesContainer.offsetWidth,
								borderRadius: 12,
								bordered: !1,
								position: "top",
								trigger: "click"
							}), this.tokenTooltip.create();
							let h = this.strTokens, g = await this.translateStrTokens(f);
							h !== this.strTokens || !this.tokenTooltip?.showed || (m.header.textContent = g[1], m.context.textContent = g[0], this.tokenTooltip.setContent(m.container), this.tokenTooltip.create());
						};
						renderTokens(d, f) {
							return d.map((d) => {
								let p = this.highlightWords && (f > d.startMs + d.durationMs / 2 || f > d.startMs - 100 && d.startMs + d.durationMs / 2 - f < 275);
								return (0, _.qy)`<span
        @click="${this.onClick}"
        class="${p ? "passed" : ""}"
      >
        ${d.text.replace("\\n", "<br>")}
      </span>`;
							});
						}
						setContent(d, f = void 0) {
							if (this.releaseTooltip(), this.subtitleLang = f, !d || !this.video) {
								this.subtitles = null, (0, _.XX)(null, this.subtitlesContainer);
								return;
							}
							this.subtitles = d, this.update();
						}
						setMaxLength(d) {
							typeof d == "number" && d > 0 && (this.maxLength = d, this.update());
						}
						setHighlightWords(d) {
							this.highlightWords = !!d, this.update();
						}
						setFontSize(d) {
							this.fontSize = d, this.subtitlesBlock && (this.subtitlesBlock.style.fontSize = `${d}px`);
						}
						setOpacity(d) {
							this.opacity = ((100 - d) / 100).toFixed(2), this.subtitlesBlock && this.subtitlesBlock.style.setProperty("--vot-subtitles-opacity", this.opacity);
						}
						stringifyTokens(d) {
							return d.map((d) => d.text).join("");
						}
						update() {
							if (!this.video || !this.subtitles) return;
							let d = this.video.currentTime * 1e3, f = this.subtitles.subtitles.findLast((f) => f.startMs < d && d < f.startMs + f.durationMs);
							if (!f) {
								(0, _.XX)(null, this.subtitlesContainer), this.subtitlesBlock = null, this.releaseTooltip();
								return;
							}
							let p = this.processTokens(f.tokens), m = this.renderTokens(p, d), h = JSON.stringify(m);
							if (h !== this.lastContent) {
								this.lastContent = h;
								let d = this.stringifyTokens(p);
								d !== this.strTokens && (this.releaseTooltip(), this.strTokens = d, this.strTranslatedTokens = ""), (0, _.XX)((0, _.qy)`<vot-block
          class="vot-subtitles"
          style="font-size: ${this.fontSize}px; --vot-subtitles-opacity: ${this.opacity}"
          >${m}</vot-block
        >`, this.subtitlesContainer), this.subtitlesBlock = this.subtitlesContainer.querySelector(".vot-subtitles");
							}
						}
						release() {
							this.abortController.abort(), this.resizeObserver.disconnect(), this.releaseTooltip(), this.subtitlesContainer.remove();
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/types/components/tooltip.ts": (d, f, p) => {
			"use strict";
			p.d(f, {
				G: () => h,
				X: () => m
			});
			let m = [
				"left",
				"top",
				"right",
				"bottom"
			], h = ["hover", "click"];
		},
		"./src/types/components/votButton.ts": (d, f, p) => {
			"use strict";
			p.d(f, { X: () => m });
			let m = [
				"default",
				"top",
				"left",
				"right"
			], h = null;
		},
		"./src/types/storage.ts": (d, f, p) => {
			"use strict";
			p.d(f, { w: () => m });
			let m = "autoTranslate.dontTranslateLanguages.enabledDontTranslateLanguages.enabledAutoVolume.autoVolume.buttonPos.showVideoSlider.syncVolume.downloadWithName.sendNotifyOnComplete.subtitlesMaxLength.highlightWords.subtitlesFontSize.subtitlesOpacity.subtitlesDownloadFormat.responseLanguage.defaultVolume.onlyBypassMediaCSP.newAudioPlayer.showPiPButton.translateAPIErrors.translationService.detectService.translationHotkey.m3u8ProxyHost.proxyWorkerHost.translateProxyEnabled.translateProxyEnabledDefault.audioBooster.useLivelyVoice.autoHideButtonDelay.useAudioDownload.compatVersion.localePhrases.localeLang.localeHash.localeUpdatedAt.localeLangOverride.account.ttsSettings.geminiApiKey".split(".");
		},
		"./src/ui.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => UI });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/styles/main.scss"), _ = p("./src/localization/localizationProvider.ts"), v = d([_]);
					_ = (v.then ? (await v)() : v)[0];
					class UI {
						static createEl(d, f = [], p = null) {
							let m = document.createElement(d);
							return f.length && m.classList.add(...f), p !== null && m.append(p), m;
						}
						static createHeader(d, f = 4) {
							let p = UI.createEl("vot-block", ["vot-header", `vot-header-level-${f}`]);
							return p.append(d), p;
						}
						static createInformation(d, f) {
							let p = UI.createEl("vot-block", ["vot-info"]), m = UI.createEl("vot-block");
							(0, h.XX)(d, m);
							let g = UI.createEl("vot-block");
							return (0, h.XX)(f, g), p.append(m, g), {
								container: p,
								header: m,
								value: g
							};
						}
						static createButton(d) {
							let f = UI.createEl("vot-block", ["vot-button"]);
							return f.append(d), f;
						}
						static createTextButton(d) {
							let f = UI.createEl("vot-block", ["vot-text-button"]);
							return f.append(d), f;
						}
						static createOutlinedButton(d) {
							let f = UI.createEl("vot-block", ["vot-outlined-button"]);
							return f.append(d), f;
						}
						static createIconButton(d) {
							let f = UI.createEl("vot-block", ["vot-icon-button"]);
							return (0, h.XX)(d, f), f;
						}
						static createInlineLoader() {
							return UI.createEl("vot-block", ["vot-inline-loader"]);
						}
						static createPortal(d = !1) {
							return UI.createEl("vot-block", [`vot-portal${d ? "-local" : ""}`]);
						}
						static createSubtitleInfo(d, f, p) {
							let m = UI.createEl("vot-block", ["vot-subtitles-info"]);
							m.id = "vot-subtitles-info";
							let h = UI.createEl("vot-block", ["vot-subtitles-info-service"], _.j.get("VOTTranslatedBy").replace("{0}", p)), g = UI.createEl("vot-block", ["vot-subtitles-info-header"], d), v = UI.createEl("vot-block", ["vot-subtitles-info-context"], f);
							return m.append(h, g, v), {
								container: m,
								translatedWith: h,
								header: g,
								context: v
							};
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/accountButton.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => AccountButton });
					var h = p("./src/config/config.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/localization/localizationProvider.ts"), v = p("./src/ui.js"), b = p("./src/ui/icons.ts"), x = d([_, v]);
					[_, v] = x.then ? (await x)() : x;
					class AccountButton {
						container;
						accountWrapper;
						buttons;
						usernameEl;
						avatarEl;
						avatarImg;
						actionButton;
						refreshButton;
						tokenButton;
						onClick = new g.Z();
						onRefresh = new g.Z();
						onClickSecret = new g.Z();
						_loggedIn;
						_username;
						_avatarId;
						constructor({ loggedIn: d = !1, username: f = "unnamed", avatarId: p = "0/0-0" } = {}) {
							this._loggedIn = d, this._username = f, this._avatarId = p;
							let m = this.createElements();
							this.container = m.container, this.accountWrapper = m.accountWrapper, this.buttons = m.buttons, this.usernameEl = m.usernameEl, this.avatarEl = m.avatarEl, this.avatarImg = m.avatarImg, this.actionButton = m.actionButton, this.refreshButton = m.refreshButton, this.tokenButton = m.tokenButton;
						}
						createElements() {
							let d = v.A.createEl("vot-block", ["vot-account"]), f = v.A.createEl("vot-block", ["vot-account-wrapper"]);
							f.hidden = !this._loggedIn;
							let p = v.A.createEl("img", ["vot-account-avatar-img"]);
							p.src = `${h.cL}/${this._avatarId}/islands-retina-middle`, p.loading = "lazy", p.alt = "user avatar";
							let m = v.A.createEl("vot-block", ["vot-account-avatar"], p), g = v.A.createEl("vot-block", ["vot-account-username"]);
							g.textContent = this._username, f.append(m, g);
							let _ = v.A.createEl("vot-block", ["vot-account-buttons"]), x = v.A.createOutlinedButton(this.buttonText);
							x.addEventListener("click", () => {
								this.onClick.dispatch();
							});
							let C = v.A.createIconButton(b.GA);
							C.hidden = this._loggedIn, C.addEventListener("click", () => {
								this.onClickSecret.dispatch();
							});
							let w = v.A.createIconButton(b.M9);
							return w.addEventListener("click", () => {
								this.onRefresh.dispatch();
							}), _.append(x, C, w), d.append(f, _), {
								container: d,
								accountWrapper: f,
								buttons: _,
								usernameEl: g,
								avatarImg: p,
								avatarEl: m,
								actionButton: x,
								refreshButton: w,
								tokenButton: C
							};
						}
						addEventListener(d, f) {
							switch (d) {
								case "click":
									this.onClick.addListener(f);
									break;
								case "click:secret":
									this.onClickSecret.addListener(f);
									break;
								case "refresh":
									this.onRefresh.addListener(f);
									break;
							}
							return this;
						}
						removeEventListener(d, f) {
							switch (d) {
								case "click":
									this.onClick.removeListener(f);
									break;
								case "click:secret":
									this.onClickSecret.removeListener(f);
									break;
								case "refresh":
									this.onRefresh.removeListener(f);
									break;
							}
							return this;
						}
						get buttonText() {
							return this._loggedIn ? _.j.get("VOTLogout") : _.j.get("VOTLogin");
						}
						get loggedIn() {
							return this._loggedIn;
						}
						set loggedIn(d) {
							this._loggedIn = d, this.accountWrapper.hidden = !this._loggedIn, this.actionButton.textContent = this.buttonText, this.tokenButton.hidden = this._loggedIn;
						}
						get avatarId() {
							return this._avatarId;
						}
						set avatarId(d) {
							this._avatarId = d ?? "0/0-0", this.avatarImg.src = `${h.cL}/${this._avatarId}/islands-retina-middle`;
						}
						get username() {
							return this._username;
						}
						set username(d) {
							this._username = d ?? "unnamed", this.usernameEl.textContent = this._username;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/checkbox.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Checkbox });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/ui.js"), v = d([_]);
					_ = (v.then ? (await v)() : v)[0];
					class Checkbox {
						container;
						input;
						label;
						onChange = new g.Z();
						_labelHtml;
						_checked;
						_isSubCheckbox;
						constructor({ labelHtml: d, checked: f = !1, isSubCheckbox: p = !1 }) {
							this._labelHtml = d, this._checked = f, this._isSubCheckbox = p;
							let m = this.createElements();
							this.container = m.container, this.input = m.input, this.label = m.label;
						}
						createElements() {
							let d = _.A.createEl("label", ["vot-checkbox"]);
							this._isSubCheckbox && d.classList.add("vot-checkbox-sub");
							let f = document.createElement("input");
							f.type = "checkbox", f.checked = this._checked, f.addEventListener("change", () => {
								this._checked = f.checked, this.onChange.dispatch(this._checked);
							});
							let p = _.A.createEl("span");
							return (0, h.XX)(this._labelHtml, p), d.append(f, p), {
								container: d,
								input: f,
								label: p
							};
						}
						addEventListener(d, f) {
							return this.onChange.addListener(f), this;
						}
						removeEventListener(d, f) {
							return this.onChange.removeListener(f), this;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
						get disabled() {
							return this.input.disabled;
						}
						set disabled(d) {
							this.input.disabled = d;
						}
						get checked() {
							return this._checked;
						}
						set checked(d) {
							this._checked !== d && (this._checked = this.input.checked = d, this.onChange.dispatch(this._checked));
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/details.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Details });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/ui.js"), v = p("./src/ui/icons.ts"), b = d([_]);
					_ = (b.then ? (await b)() : b)[0];
					class Details {
						container;
						header;
						arrowIcon;
						onClick = new g.Z();
						_titleHtml;
						constructor({ titleHtml: d }) {
							this._titleHtml = d;
							let f = this.createElements();
							this.container = f.container, this.header = f.header, this.arrowIcon = f.arrowIcon;
						}
						createElements() {
							let d = _.A.createEl("vot-block", ["vot-details"]), f = _.A.createEl("vot-block");
							f.append(this._titleHtml);
							let p = _.A.createEl("vot-block", ["vot-details-arrow-icon"]);
							return (0, h.XX)(v.mQ, p), d.append(f, p), d.addEventListener("click", () => {
								this.onClick.dispatch();
							}), {
								container: d,
								header: f,
								arrowIcon: p
							};
						}
						addEventListener(d, f) {
							return this.onClick.addListener(f), this;
						}
						removeEventListener(d, f) {
							return this.onClick.removeListener(f), this;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/dialog.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Dialog });
					var h = p("./src/core/eventImpl.ts"), g = p("./src/ui.js"), _ = p("./src/ui/icons.ts"), v = d([g]);
					g = (v.then ? (await v)() : v)[0];
					class Dialog {
						container;
						backdrop;
						box;
						contentWrapper;
						headerContainer;
						titleContainer;
						title;
						closeButton;
						bodyContainer;
						footerContainer;
						onClose = new h.Z();
						_titleHtml;
						_isTemp;
						constructor({ titleHtml: d, isTemp: f = !1 }) {
							this._titleHtml = d, this._isTemp = f;
							let p = this.createElements();
							this.container = p.container, this.backdrop = p.backdrop, this.box = p.box, this.contentWrapper = p.contentWrapper, this.headerContainer = p.headerContainer, this.titleContainer = p.titleContainer, this.title = p.title, this.closeButton = p.closeButton, this.bodyContainer = p.bodyContainer, this.footerContainer = p.footerContainer;
						}
						createElements() {
							let d = g.A.createEl("vot-block", ["vot-dialog-container"]);
							this._isTemp && d.classList.add("vot-dialog-temp"), d.hidden = !this._isTemp;
							let f = g.A.createEl("vot-block", ["vot-dialog-backdrop"]), p = g.A.createEl("vot-block", ["vot-dialog"]), m = g.A.createEl("vot-block", ["vot-dialog-content-wrapper"]), h = g.A.createEl("vot-block", ["vot-dialog-header-container"]), v = g.A.createEl("vot-block", ["vot-dialog-title-container"]), b = g.A.createEl("vot-block", ["vot-dialog-title"]);
							b.append(this._titleHtml), v.appendChild(b);
							let x = g.A.createIconButton(_.jr);
							x.classList.add("vot-dialog-close-button"), f.addEventListener("click", () => {
								this.close();
							}), x.addEventListener("click", () => {
								this.close();
							}), h.append(v, x);
							let C = g.A.createEl("vot-block", ["vot-dialog-body-container"]), w = g.A.createEl("vot-block", ["vot-dialog-footer-container"]);
							return m.append(h, C, w), p.appendChild(m), d.append(f, p), {
								container: d,
								backdrop: f,
								box: p,
								contentWrapper: m,
								headerContainer: h,
								titleContainer: v,
								title: b,
								closeButton: x,
								bodyContainer: C,
								footerContainer: w
							};
						}
						addEventListener(d, f) {
							return this.onClose.addListener(f), this;
						}
						removeEventListener(d, f) {
							return this.onClose.removeListener(f), this;
						}
						open() {
							return this.hidden = !1, this;
						}
						remove() {
							return this.container.remove(), this.onClose.dispatch(), this;
						}
						close() {
							return this._isTemp ? this.remove() : (this.hidden = !0, this.onClose.dispatch(), this);
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
						get isDialogOpen() {
							return !this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/downloadButton.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => DownloadButton });
					var h = p("./src/core/eventImpl.ts"), g = p("./src/ui.js"), _ = p("./src/ui/icons.ts"), v = d([g]);
					g = (v.then ? (await v)() : v)[0];
					class DownloadButton {
						button;
						loaderMain;
						loaderText;
						onClick = new h.Z();
						_progress = 0;
						constructor() {
							let d = this.createElements();
							this.button = d.button, this.loaderMain = d.loaderMain, this.loaderText = d.loaderText;
						}
						createElements() {
							let d = g.A.createIconButton(_.nO), f = d.querySelector(".vot-loader-main"), p = d.querySelector(".vot-loader-text");
							return d.addEventListener("click", () => {
								this.onClick.dispatch();
							}), {
								button: d,
								loaderMain: f,
								loaderText: p
							};
						}
						addEventListener(d, f) {
							return this.onClick.addListener(f), this;
						}
						removeEventListener(d, f) {
							return this.onClick.removeListener(f), this;
						}
						get progress() {
							return this._progress;
						}
						set progress(d) {
							this._progress = d, this.loaderText.textContent = d === 0 ? "" : d.toString(), !(d > 1) && (this.loaderMain.style.opacity = d === 0 ? "1" : "0");
						}
						set hidden(d) {
							this.button.hidden = d;
						}
						get hidden() {
							return this.button.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/hotkeyButton.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						A: () => HotkeyButton,
						_: () => formatKeysCombo
					});
					var h = p("./src/core/eventImpl.ts"), g = p("./src/localization/localizationProvider.ts"), _ = p("./src/ui.js"), v = d([g, _]);
					[g, _] = v.then ? (await v)() : v;
					class HotkeyButton {
						container;
						button;
						onChange = new h.Z();
						_labelHtml;
						_key;
						pressedKeys;
						recording = !1;
						constructor({ labelHtml: d, key: f = null }) {
							this._labelHtml = d, this._key = f, this.pressedKeys = new Set();
							let p = this.createElements();
							this.container = p.container, this.button = p.button;
						}
						stopRecordingKeys() {
							this.recording = !1, document.removeEventListener("keydown", this.keydownHandle), document.removeEventListener("keyup", this.keyupOrBlurHandle), document.removeEventListener("blur", this.keyupOrBlurHandle), this.button.removeAttribute("data-status"), this.pressedKeys.clear();
						}
						keydownHandle = (d) => {
							if (!(!this.recording || d.repeat)) {
								if (d.preventDefault(), d.code === "Escape") {
									this.key = null, this.button.textContent = this.keyText, this.stopRecordingKeys();
									return;
								}
								this.pressedKeys.add(d.code), this.button.textContent = formatKeysCombo(this.pressedKeys);
							}
						};
						keyupOrBlurHandle = () => {
							this.recording && (this.key = formatKeysCombo(this.pressedKeys), this.stopRecordingKeys());
						};
						createElements() {
							let d = _.A.createEl("vot-block", ["vot-hotkey"]), f = _.A.createEl("vot-block", ["vot-hotkey-label"]);
							f.textContent = this._labelHtml;
							let p = _.A.createEl("vot-block", ["vot-hotkey-button"]);
							return p.textContent = this.keyText, p.addEventListener("click", () => {
								p.dataset.status = "active", this.recording = !0, this.pressedKeys.clear(), this.button.textContent = g.j.get("PressTheKeyCombination"), document.addEventListener("keydown", this.keydownHandle), document.addEventListener("keyup", this.keyupOrBlurHandle), document.addEventListener("blur", this.keyupOrBlurHandle);
							}), d.append(f, p), {
								container: d,
								button: p,
								label: f
							};
						}
						addEventListener(d, f) {
							return this.onChange.addListener(f), this;
						}
						removeEventListener(d, f) {
							return this.onChange.removeListener(f), this;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
						get key() {
							return this._key;
						}
						get keyText() {
							return this._key ? this._key?.replace("Key", "").replace("Digit", "") : g.j.get("None");
						}
						set key(d) {
							this._key !== d && (this._key = d, this.button.textContent = this.keyText, this.onChange.dispatch(this._key));
						}
					}
					function formatKeysCombo(d) {
						let f = Array.isArray(d) ? d : Array.from(d);
						return f.map((d) => d.replace("Key", "").replace("Digit", "")).join("+");
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/label.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Label });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/ui.js"), _ = d([g]);
					g = (_.then ? (await _)() : _)[0];
					class Label {
						container;
						icon;
						_labelText;
						_icon;
						constructor({ labelText: d, icon: f }) {
							this._labelText = d, this._icon = f;
							let p = this.createElements();
							this.container = p.container, this.icon = p.icon;
						}
						createElements() {
							let d = g.A.createEl("vot-block", ["vot-label"]);
							d.textContent = this._labelText;
							let f = g.A.createEl("vot-block", ["vot-label-icon"]);
							return this._icon && (0, h.XX)(this._icon, f), d.appendChild(f), {
								container: d,
								icon: f
							};
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/languagePairSelect.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => LanguagePairSelect });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/localization/localizationProvider.ts"), _ = p("./src/ui.js"), v = p("./src/ui/icons.ts"), b = p("./src/ui/components/select.ts"), x = d([
						g,
						_,
						b
					]);
					[g, _, b] = x.then ? (await x)() : x;
					class LanguagePairSelect {
						container;
						fromSelect;
						directionIcon;
						toSelect;
						dialogParent;
						_fromSelectTitle;
						_fromDialogTitle;
						_fromItems;
						_toSelectTitle;
						_toDialogTitle;
						_toItems;
						constructor({ from: { selectTitle: d = g.j.get("videoLanguage"), dialogTitle: f = g.j.get("videoLanguage"), items: p }, to: { selectTitle: m = g.j.get("translationLanguage"), dialogTitle: h = g.j.get("translationLanguage"), items: _ }, dialogParent: v = document.documentElement }) {
							this._fromSelectTitle = d, this._fromDialogTitle = f, this._fromItems = p, this._toSelectTitle = m, this._toDialogTitle = h, this._toItems = _, this.dialogParent = v;
							let b = this.createElements();
							this.container = b.container, this.fromSelect = b.fromSelect, this.directionIcon = b.directionIcon, this.toSelect = b.toSelect;
						}
						createElements() {
							let d = _.A.createEl("vot-block", ["vot-lang-select"]), f = new b.A({
								selectTitle: this._fromSelectTitle,
								dialogTitle: this._fromDialogTitle,
								items: this._fromItems,
								dialogParent: this.dialogParent
							}), p = _.A.createEl("vot-block", ["vot-lang-select-icon"]);
							(0, h.XX)(v.z3, p);
							let m = new b.A({
								selectTitle: this._toSelectTitle,
								dialogTitle: this._toDialogTitle,
								items: this._toItems,
								dialogParent: this.dialogParent
							});
							return d.append(f.container, p, m.container), {
								container: d,
								fromSelect: f,
								directionIcon: p,
								toSelect: m
							};
						}
						setSelectedValues(d, f) {
							return this.fromSelect.setSelectedValue(d), this.toSelect.setSelectedValue(f), this;
						}
						updateItems(d, f) {
							return this._fromItems = d, this._toItems = f, this.fromSelect = this.fromSelect.updateItems(d), this.toSelect = this.toSelect.updateItems(f), this;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/select.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Select });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/localization/localizationProvider.ts"), v = p("./src/ui.js"), b = p("./src/ui/icons.ts"), x = p("./src/ui/components/dialog.ts"), C = p("./src/ui/components/textfield.ts"), w = d([
						_,
						v,
						x,
						C
					]);
					[_, v, x, C] = w.then ? (await w)() : w;
					class Select {
						container;
						outer;
						arrowIcon;
						title;
						dialogParent;
						labelElement;
						_selectTitle;
						_dialogTitle;
						multiSelect;
						_items;
						isLoading = !1;
						isDialogOpen = !1;
						onSelectItem = new g.Z();
						onBeforeOpen = new g.Z();
						contentList;
						selectedItems = [];
						selectedValues;
						constructor({ selectTitle: d, dialogTitle: f, items: p, labelElement: m, dialogParent: h = document.documentElement, multiSelect: g }) {
							this._selectTitle = d, this._dialogTitle = f, this._items = p, this.multiSelect = g ?? !1, this.labelElement = m, this.dialogParent = h, this.selectedValues = this.calcSelectedValues();
							let _ = this.createElements();
							this.container = _.container, this.outer = _.outer, this.arrowIcon = _.arrowIcon, this.title = _.title;
						}
						static genLanguageItems(d, f) {
							return d.map((d) => {
								let p = `langs.${d}`, m = _.j.get(p);
								return {
									label: m === p ? d.toUpperCase() : m,
									value: d,
									selected: f === d
								};
							});
						}
						multiSelectItemHandle = (d, f) => {
							let p = f.value;
							this.selectedValues.has(p) && this.selectedValues.size > 1 ? (this.selectedValues.delete(p), f.selected = !1) : (this.selectedValues.add(p), f.selected = !0), d.dataset.votSelected = this.selectedValues.has(p).toString(), this.updateSelectedState(), this.onSelectItem.dispatch(Array.from(this.selectedValues));
						};
						singleSelectItemHandle = (d) => {
							let f = d.value;
							this.selectedValues = new Set([f]);
							for (let d of this.selectedItems) d.dataset.votSelected = (d.dataset.votValue === f).toString();
							for (let d of this._items) d.selected = d.value === f;
							this.updateTitle(), this.onSelectItem.dispatch(f);
						};
						createDialogContentList() {
							let d = v.A.createEl("vot-block", ["vot-select-content-list"]);
							for (let f of this._items) {
								let p = v.A.createEl("vot-block", ["vot-select-content-item"]);
								p.textContent = f.label, p.dataset.votSelected = f.selected === !0 ? "true" : "false", p.dataset.votValue = f.value, f.disabled && (p.inert = !0), p.addEventListener("click", (d) => {
									if (!d.target.inert) return this.multiSelect ? this.multiSelectItemHandle(p, f) : this.singleSelectItemHandle(f);
								}), d.appendChild(p);
							}
							return this.selectedItems = Object.values(d.childNodes), d;
						}
						createElements() {
							let d = v.A.createEl("vot-block", ["vot-select"]);
							this.labelElement && d.append(this.labelElement);
							let f = v.A.createEl("vot-block", ["vot-select-outer"]), p = v.A.createEl("vot-block", ["vot-select-title"]);
							p.textContent = this.visibleText;
							let m = v.A.createEl("vot-block", ["vot-select-arrow-icon"]);
							return (0, h.XX)(b.mQ, m), f.append(p, m), f.addEventListener("click", () => {
								if (!(this.isLoading || this.isDialogOpen)) try {
									this.isLoading = !0;
									let d = new x.A({
										titleHtml: this._dialogTitle,
										isTemp: !0
									});
									this.onBeforeOpen.dispatch(d), this.dialogParent.appendChild(d.container);
									let f = new C.A({ labelHtml: _.j.get("searchField") });
									f.addEventListener("input", (d) => {
										for (let f of this.selectedItems) f.hidden = !f.textContent?.toLowerCase().includes(d);
									}), this.contentList = this.createDialogContentList(), d.bodyContainer.append(f.container, this.contentList), d.addEventListener("close", () => {
										this.isDialogOpen = !1, this.selectedItems = [];
									});
								} finally {
									this.isLoading = !1;
								}
							}), d.appendChild(f), {
								container: d,
								outer: f,
								arrowIcon: m,
								title: p
							};
						}
						calcSelectedValues() {
							return new Set(this._items.filter((d) => d.selected).map((d) => d.value));
						}
						addEventListener(d, f) {
							return d === "selectItem" ? this.onSelectItem.addListener(f) : d === "beforeOpen" && this.onBeforeOpen.addListener(f), this;
						}
						removeEventListener(d, f) {
							return d === "selectItem" ? this.onSelectItem.removeListener(f) : d === "beforeOpen" && this.onBeforeOpen.removeListener(f), this;
						}
						updateTitle() {
							return this.title.textContent = this.visibleText, this;
						}
						updateSelectedState() {
							if (this.selectedItems.length > 0) for (let d of this.selectedItems) {
								let f = d.dataset.votValue;
								if (!f) continue;
								d.dataset.votSelected = this.selectedValues.has(f).toString();
							}
							return this.updateTitle(), this;
						}
						setSelectedValue(d) {
							this.multiSelect ? this.selectedValues = new Set(Array.isArray(d) ? d.map(String) : [String(d)]) : this.selectedValues = new Set([String(d)]);
							for (let d of this._items) d.selected = this.selectedValues.has(String(d.value));
							return this.updateSelectedState(), this;
						}
						updateItems(d) {
							this._items = d, this.selectedValues = this.calcSelectedValues(), this.updateSelectedState();
							let f = this.contentList?.parentElement;
							if (!this.contentList || !f) return this;
							let p = this.contentList;
							return this.contentList = this.createDialogContentList(), f.replaceChild(this.contentList, p), this;
						}
						get visibleText() {
							return this.multiSelect ? this._items.filter((d) => this.selectedValues.has(d.value)).map((d) => d.label).join(", ") ?? this._selectTitle : this._items.find((d) => d.selected)?.label ?? this._selectTitle;
						}
						set selectTitle(d) {
							this._selectTitle = d, this.updateTitle();
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/slider.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Slider });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/ui.js"), v = d([_]);
					_ = (v.then ? (await v)() : v)[0];
					class Slider {
						container;
						input;
						label;
						onInput = new g.Z();
						_labelHtml;
						_value;
						_min;
						_max;
						_step;
						constructor({ labelHtml: d, value: f = 50, min: p = 0, max: m = 100, step: h = 1 }) {
							this._labelHtml = d, this._value = f, this._min = p, this._max = m, this._step = h;
							let g = this.createElements();
							this.container = g.container, this.input = g.input, this.label = g.label, this.update();
						}
						updateProgress() {
							let d = (this._value - this._min) / (this._max - this._min);
							return this.container.style.setProperty("--vot-progress", d.toString()), this;
						}
						update() {
							return this._value = this.input.valueAsNumber, this._min = +this.input.min, this._max = +this.input.max, this.updateProgress(), this;
						}
						createElements() {
							let d = _.A.createEl("vot-block", ["vot-slider"]), f = document.createElement("input");
							f.type = "range", f.min = this._min.toString(), f.max = this._max.toString(), f.step = this._step.toString(), f.value = this._value.toString();
							let p = _.A.createEl("span");
							return (0, h.XX)(this._labelHtml, p), d.append(f, p), f.addEventListener("input", () => {
								this.update(), this.onInput.dispatch(this._value, !1);
							}), {
								container: d,
								label: p,
								input: f
							};
						}
						addEventListener(d, f) {
							return this.onInput.addListener(f), this;
						}
						removeEventListener(d, f) {
							return this.onInput.removeListener(f), this;
						}
						get value() {
							return this._value;
						}
						set value(d) {
							this._value = d, this.input.value = d.toString(), this.updateProgress(), this.onInput.dispatch(this._value, !0);
						}
						get min() {
							return this._min;
						}
						set min(d) {
							this._min = d, this.input.min = this._min.toString(), this.updateProgress();
						}
						get max() {
							return this._max;
						}
						set max(d) {
							this._max = d, this.input.max = this._max.toString(), this.updateProgress();
						}
						get step() {
							return this._step;
						}
						set step(d) {
							this._step = d, this.input.step = this._step.toString();
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/sliderLabel.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => SliderLabel });
					var h = p("./src/ui.js"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					class SliderLabel {
						container;
						strong;
						_labelText;
						_labelEOL;
						_value;
						_symbol;
						constructor({ labelText: d, labelEOL: f = "", value: p = 50, symbol: m = "%" }) {
							this._labelText = d, this._labelEOL = f, this._value = p, this._symbol = m;
							let h = this.createElements();
							this.container = h.container, this.strong = h.strong;
						}
						createElements() {
							let d = h.A.createEl("vot-block", ["vot-slider-label"]);
							d.textContent = this.labelText;
							let f = h.A.createEl("strong", ["vot-slider-label-value"]);
							return f.textContent = this.valueText, d.append(f), {
								container: d,
								strong: f
							};
						}
						get labelText() {
							return `${this._labelText}${this._labelEOL}`;
						}
						get valueText() {
							return `${this._value}${this._symbol}`;
						}
						get value() {
							return this._value;
						}
						set value(d) {
							this._value = d, this.strong.textContent = this.valueText;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/textfield.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Textfield });
					var h = p("./src/core/eventImpl.ts"), g = p("./src/ui.js"), _ = d([g]);
					g = (_.then ? (await _)() : _)[0];
					class Textfield {
						container;
						input;
						label;
						onInput = new h.Z();
						onChange = new h.Z();
						_labelHtml;
						_multiline;
						_placeholder;
						_value;
						constructor({ labelHtml: d = "", placeholder: f = "", value: p = "", multiline: m = !1 }) {
							this._labelHtml = d, this._multiline = m, this._placeholder = f, this._value = p;
							let h = this.createElements();
							this.container = h.container, this.input = h.input, this.label = h.label;
						}
						createElements() {
							let d = g.A.createEl("vot-block", ["vot-textfield"]), f = document.createElement(this._multiline ? "textarea" : "input");
							this._labelHtml || f.classList.add("vot-show-placeholer"), f.placeholder = this._placeholder, f.value = this._value;
							let p = g.A.createEl("span");
							return p.append(this._labelHtml), d.append(f, p), f.addEventListener("input", () => {
								this._value = this.input.value, this.onInput.dispatch(this._value);
							}), f.addEventListener("change", () => {
								this._value = this.input.value, this.onChange.dispatch(this._value);
							}), {
								container: d,
								label: p,
								input: f
							};
						}
						addEventListener(d, f) {
							return d === "change" ? this.onChange.addListener(f) : d === "input" && this.onInput.addListener(f), this;
						}
						removeEventListener(d, f) {
							return d === "change" ? this.onChange.removeListener(f) : d === "input" && this.onInput.removeListener(f), this;
						}
						get value() {
							return this._value;
						}
						set value(d) {
							this._value !== d && (this.input.value = this._value = d, this.onChange.dispatch(this._value));
						}
						get placeholder() {
							return this._placeholder;
						}
						set placeholder(d) {
							this.input.placeholder = this._placeholder = d;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/tooltip.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => Tooltip });
					var h = p("./src/types/components/tooltip.ts"), g = p("./src/ui.js"), _ = p("./src/utils/utils.ts"), v = d([g, _]);
					[g, _] = v.then ? (await v)() : v;
					class Tooltip {
						showed = !1;
						target;
						anchor;
						content;
						position;
						trigger;
						parentElement;
						layoutRoot;
						offsetX;
						offsetY;
						hidden;
						autoLayout;
						pageWidth;
						pageHeight;
						globalOffsetX;
						globalOffsetY;
						maxWidth;
						backgroundColor;
						borderRadius;
						_bordered;
						container;
						onResizeObserver;
						intersectionObserver;
						constructor({ target: d, anchor: f = void 0, content: p = "", position: m = "top", trigger: h = "hover", offset: g = 4, maxWidth: _ = void 0, hidden: v = !1, autoLayout: b = !0, backgroundColor: x = void 0, borderRadius: C = void 0, bordered: w = !0, parentElement: T = document.body, layoutRoot: E = document.documentElement }) {
							if (!(d instanceof HTMLElement)) throw Error("target must be a valid HTMLElement");
							this.target = d, this.anchor = f instanceof HTMLElement ? f : d, this.content = p, typeof g == "number" ? this.offsetY = this.offsetX = g : (this.offsetX = g.x, this.offsetY = g.y), this.hidden = v, this.autoLayout = b, this.trigger = Tooltip.validateTrigger(h) ? h : "hover", this.position = Tooltip.validatePos(m) ? m : "top", this.parentElement = T, this.layoutRoot = E, this.borderRadius = C, this._bordered = w, this.maxWidth = _, this.backgroundColor = x, this.updatePageSize(), this.init();
						}
						static validatePos(d) {
							return h.X.includes(d);
						}
						static validateTrigger(d) {
							return h.G.includes(d);
						}
						setPosition(d) {
							return this.position = Tooltip.validatePos(d) ? d : "top", this.updatePos(), this;
						}
						setContent(d) {
							return this.content = d, this.destroy(), this;
						}
						onResize = () => {
							this.updatePageSize(), this.updatePos();
						};
						onClick = () => {
							this.showed ? this.destroy() : this.create();
						};
						onScroll = () => {
							requestAnimationFrame(() => {
								this.updatePageSize(), this.updatePos();
							});
						};
						onHoverPointerDown = (d) => {
							d.pointerType !== "mouse" && this.create();
						};
						onHoverPointerUp = (d) => {
							d.pointerType !== "mouse" && this.destroy();
						};
						onMouseEnter = () => {
							this.create();
						};
						onMouseLeave = () => {
							this.destroy();
						};
						updatePageSize() {
							if (this.layoutRoot !== document.documentElement) {
								let { left: d, top: f } = this.parentElement.getBoundingClientRect();
								this.globalOffsetX = d, this.globalOffsetY = f;
							} else this.globalOffsetX = 0, this.globalOffsetY = 0;
							return this.pageWidth = (this.layoutRoot.clientWidth || document.documentElement.clientWidth) + window.pageXOffset, this.pageHeight = (this.layoutRoot.clientHeight || document.documentElement.clientHeight) + window.pageYOffset, this;
						}
						onIntersect = ([d]) => {
							if (!d.isIntersecting) return this.destroy(!0);
						};
						init() {
							return this.onResizeObserver = new ResizeObserver(this.onResize), this.intersectionObserver = new IntersectionObserver(this.onIntersect), document.addEventListener("scroll", this.onScroll, {
								passive: !0,
								capture: !0
							}), this.trigger === "click" ? (this.target.addEventListener("pointerdown", this.onClick), this) : (this.target.addEventListener("mouseenter", this.onMouseEnter), this.target.addEventListener("mouseleave", this.onMouseLeave), this.target.addEventListener("pointerdown", this.onHoverPointerDown), this.target.addEventListener("pointerup", this.onHoverPointerUp), this);
						}
						release() {
							return this.destroy(), document.removeEventListener("scroll", this.onScroll, { capture: !0 }), this.trigger === "click" ? (this.target.removeEventListener("pointerdown", this.onClick), this) : (this.target.removeEventListener("mouseenter", this.onMouseEnter), this.target.removeEventListener("mouseleave", this.onMouseLeave), this.target.removeEventListener("pointerdown", this.onHoverPointerDown), this.target.removeEventListener("pointerup", this.onHoverPointerUp), this);
						}
						create() {
							return this.destroy(!0), this.showed = !0, this.container = g.A.createEl("vot-block", ["vot-tooltip"], this.content), this.bordered && this.container.classList.add("vot-tooltip-bordered"), this.container.setAttribute("role", "tooltip"), this.container.dataset.trigger = this.trigger, this.container.dataset.position = this.position, this.parentElement.appendChild(this.container), this.updatePos(), this.backgroundColor !== void 0 && (this.container.style.backgroundColor = this.backgroundColor), this.borderRadius !== void 0 && (this.container.style.borderRadius = `${this.borderRadius}px`), this.hidden && (this.container.hidden = !0), this.container.style.opacity = "1", this.onResizeObserver?.observe(this.layoutRoot), this.intersectionObserver?.observe(this.target), this;
						}
						updatePos() {
							if (!this.container) return this;
							let { top: d, left: f } = this.calcPos(this.autoLayout), p = this.pageWidth - this.offsetX * 2, m = this.maxWidth ?? Math.min(p, this.pageWidth - Math.min(f, this.pageWidth - p));
							return this.container.style.transform = `translate(${f}px, ${d}px)`, this.container.style.maxWidth = `${m}px`, this;
						}
						calcPos(d = !0) {
							if (!this.container) return {
								top: 0,
								left: 0
							};
							let { left: f, right: p, top: m, bottom: h, width: g, height: v } = this.anchor.getBoundingClientRect(), { width: b, height: x } = this.container.getBoundingClientRect(), C = (0, _.qE)(b, 0, this.pageWidth), w = (0, _.qE)(x, 0, this.pageHeight), T = f - this.globalOffsetX, E = p - this.globalOffsetX, D = m - this.globalOffsetY, O = h - this.globalOffsetY;
							switch (this.position) {
								case "top": {
									let f = (0, _.qE)(D - w - this.offsetY, 0, this.pageHeight);
									return d && f + this.offsetY < w ? (this.position = "bottom", this.calcPos(!1)) : {
										top: f,
										left: (0, _.qE)(T - C / 2 + g / 2, this.offsetX, this.pageWidth - C - this.offsetX)
									};
								}
								case "right": {
									let f = (0, _.qE)(E + this.offsetX, 0, this.pageWidth - C);
									return d && f + C > this.pageWidth - this.offsetX ? (this.position = "left", this.calcPos(!1)) : {
										top: (0, _.qE)(D + (v - w) / 2, this.offsetY, this.pageHeight - w - this.offsetY),
										left: f
									};
								}
								case "bottom": {
									let f = (0, _.qE)(O + this.offsetY, 0, this.pageHeight - w);
									return d && f + w > this.pageHeight - this.offsetY ? (this.position = "top", this.calcPos(!1)) : {
										top: f,
										left: (0, _.qE)(T - C / 2 + g / 2, this.offsetX, this.pageWidth - C - this.offsetX)
									};
								}
								case "left": {
									let f = Math.max(0, T - C - this.offsetX);
									return d && f + C > T - this.offsetX ? (this.position = "right", this.calcPos(!1)) : {
										top: (0, _.qE)(D + (v - w) / 2, this.offsetY, this.pageHeight - w - this.offsetY),
										left: f
									};
								}
								default: return {
									top: 0,
									left: 0
								};
							}
						}
						destroy(d = !1) {
							if (!this.container) return this;
							if (this.showed = !1, this.onResizeObserver?.disconnect(), this.intersectionObserver?.disconnect(), d) return this.container.remove(), this;
							let f = this.container;
							return f.style.opacity = "0", f.addEventListener("transitionend", () => {
								f?.remove();
							}, { once: !0 }), this;
						}
						set bordered(d) {
							this._bordered = d, this.container?.classList.toggle("vot-tooltip-bordered");
						}
						get bordered() {
							return this._bordered;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/votButton.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => VOTButton });
					var h = p("./node_modules/lit-html/lit-html.js"), g = p("./src/ui.js"), _ = p("./src/ui/icons.ts"), v = d([g]);
					g = (v.then ? (await v)() : v)[0];
					class VOTButton {
						container;
						translateButton;
						separator;
						pipButton;
						separator2;
						menuButton;
						label;
						_position;
						_direction;
						_status;
						_labelHtml;
						constructor({ position: d = "default", direction: f = "default", status: p = "none", labelHtml: m = "" }) {
							this._position = d, this._direction = f, this._status = p, this._labelHtml = m;
							let h = this.createElements();
							this.container = h.container, this.translateButton = h.translateButton, this.separator = h.separator, this.pipButton = h.pipButton, this.separator2 = h.separator2, this.menuButton = h.menuButton, this.label = h.label;
						}
						static calcPosition(d, f) {
							return f ? d <= 44 ? "left" : d >= 66 ? "right" : "default" : "default";
						}
						static calcDirection(d) {
							return ["default", "top"].includes(d) ? "row" : "column";
						}
						createElements() {
							let d = g.A.createEl("vot-block", ["vot-segmented-button"]);
							d.dataset.position = this._position, d.dataset.direction = this._direction, d.dataset.status = this._status;
							let f = g.A.createEl("vot-block", ["vot-segment", "vot-translate-button"]);
							(0, h.XX)(_.cg, f);
							let p = g.A.createEl("span", ["vot-segment-label"]);
							p.append(this._labelHtml), f.appendChild(p);
							let m = g.A.createEl("vot-block", ["vot-separator"]), v = g.A.createEl("vot-block", ["vot-segment-only-icon"]);
							(0, h.XX)(_.B9, v);
							let b = g.A.createEl("vot-block", ["vot-separator"]), x = g.A.createEl("vot-block", ["vot-segment-only-icon"]);
							return (0, h.XX)(_.kO, x), d.append(f, m, v, b, x), {
								container: d,
								translateButton: f,
								separator: m,
								pipButton: v,
								separator2: b,
								menuButton: x,
								label: p
							};
						}
						showPiPButton(d) {
							return this.separator2.hidden = this.pipButton.hidden = !d, this;
						}
						setText(d) {
							return this._labelHtml = this.label.textContent = d, this;
						}
						remove() {
							return this.container.remove(), this;
						}
						get tooltipPos() {
							switch (this.position) {
								case "left": return "right";
								case "right": return "left";
								default: return "bottom";
							}
						}
						set status(d) {
							this._status = this.container.dataset.status = d;
						}
						get status() {
							return this._status;
						}
						set loading(d) {
							this.container.dataset.loading = d.toString();
						}
						get loading() {
							return this.container.dataset.loading === "true";
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
						get position() {
							return this._position;
						}
						set position(d) {
							this._position = this.container.dataset.position = d;
						}
						get direction() {
							return this._direction;
						}
						set direction(d) {
							this._direction = this.container.dataset.direction = d;
						}
						set opacity(d) {
							this.container.style.opacity = d.toString();
						}
						get opacity() {
							return Number(this.container.style.opacity);
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/components/votMenu.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { A: () => VOTMenu });
					var h = p("./src/ui.js"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					class VOTMenu {
						container;
						contentWrapper;
						headerContainer;
						bodyContainer;
						footerContainer;
						titleContainer;
						title;
						_position;
						_titleHtml;
						constructor({ position: d = "default", titleHtml: f = "" }) {
							this._position = d, this._titleHtml = f;
							let p = this.createElements();
							this.container = p.container, this.contentWrapper = p.contentWrapper, this.headerContainer = p.headerContainer, this.bodyContainer = p.bodyContainer, this.footerContainer = p.footerContainer, this.titleContainer = p.titleContainer, this.title = p.title;
						}
						createElements() {
							let d = h.A.createEl("vot-block", ["vot-menu"]);
							d.hidden = !0, d.dataset.position = this._position;
							let f = h.A.createEl("vot-block", ["vot-menu-content-wrapper"]);
							d.appendChild(f);
							let p = h.A.createEl("vot-block", ["vot-menu-header-container"]), m = h.A.createEl("vot-block", ["vot-menu-title-container"]);
							p.appendChild(m);
							let g = h.A.createEl("vot-block", ["vot-menu-title"]);
							g.append(this._titleHtml), m.appendChild(g);
							let _ = h.A.createEl("vot-block", ["vot-menu-body-container"]), v = h.A.createEl("vot-block", ["vot-menu-footer-container"]);
							return f.append(p, _, v), {
								container: d,
								contentWrapper: f,
								headerContainer: p,
								bodyContainer: _,
								footerContainer: v,
								titleContainer: m,
								title: g
							};
						}
						setText(d) {
							return this._titleHtml = this.title.textContent = d, this;
						}
						remove() {
							return this.container.remove(), this;
						}
						set hidden(d) {
							this.container.hidden = d;
						}
						get hidden() {
							return this.container.hidden;
						}
						get position() {
							return this._position;
						}
						set position(d) {
							this._position = this.container.dataset.position = d;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/icons.ts": (d, f, p) => {
			"use strict";
			p.d(f, {
				B9: () => g,
				GA: () => A,
				M9: () => O,
				U0: () => b,
				Xd: () => E,
				c1: () => x,
				cg: () => h,
				jr: () => T,
				kO: () => _,
				mQ: () => C,
				nO: () => v,
				w2: () => D,
				z3: () => w
			});
			var m = p("./node_modules/lit-html/lit-html.js");
			let h = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path
    id="vot-translate-icon"
    fill-rule="evenodd"
    d="M15.778 18.95L14.903 21.375C14.8364 21.5583 14.7197 21.7083 14.553 21.825C14.3864 21.9417 14.203 22 14.003 22C13.6697 22 13.3989 21.8625 13.1905 21.5875C12.9822 21.3125 12.9447 21.0083 13.078 20.675L16.878 10.625C16.9614 10.4417 17.0864 10.2917 17.253 10.175C17.4197 10.0583 17.603 10 17.803 10H18.553C18.753 10 18.9364 10.0583 19.103 10.175C19.2697 10.2917 19.3947 10.4417 19.478 10.625L23.278 20.7C23.4114 21.0167 23.378 21.3125 23.178 21.5875C22.978 21.8625 22.7114 22 22.378 22C22.1614 22 21.9739 21.9375 21.8155 21.8125C21.6572 21.6875 21.5364 21.525 21.453 21.325L20.628 18.95H15.778ZM19.978 17.2H16.378L18.228 12.25L19.978 17.2Z"
  ></path>
  <path
    d="M9 14L4.7 18.3C4.51667 18.4833 4.28333 18.575 4 18.575C3.71667 18.575 3.48333 18.4833 3.3 18.3C3.11667 18.1167 3.025 17.8833 3.025 17.6C3.025 17.3167 3.11667 17.0833 3.3 16.9L7.65 12.55C7.01667 11.85 6.4625 11.125 5.9875 10.375C5.5125 9.625 5.1 8.83333 4.75 8H6.85C7.15 8.6 7.47083 9.14167 7.8125 9.625C8.15417 10.1083 8.56667 10.6167 9.05 11.15C9.78333 10.35 10.3917 9.52917 10.875 8.6875C11.3583 7.84583 11.7667 6.95 12.1 6H2C1.71667 6 1.47917 5.90417 1.2875 5.7125C1.09583 5.52083 1 5.28333 1 5C1 4.71667 1.09583 4.47917 1.2875 4.2875C1.47917 4.09583 1.71667 4 2 4H8V3C8 2.71667 8.09583 2.47917 8.2875 2.2875C8.47917 2.09583 8.71667 2 9 2C9.28333 2 9.52083 2.09583 9.7125 2.2875C9.90417 2.47917 10 2.71667 10 3V4H16C16.2833 4 16.5208 4.09583 16.7125 4.2875C16.9042 4.47917 17 4.71667 17 5C17 5.28333 16.9042 5.52083 16.7125 5.7125C16.5208 5.90417 16.2833 6 16 6H14.1C13.75 7.18333 13.275 8.33333 12.675 9.45C12.075 10.5667 11.3333 11.6167 10.45 12.6L12.85 15.05L12.1 17.1L9 14Z"
  ></path>
  <path
    id="vot-loading-icon"
    style="display:none"
    d="M19.8081 16.3697L18.5842 15.6633V13.0832C18.5842 12.9285 18.5228 12.7801 18.4134 12.6707C18.304 12.5613 18.1556 12.4998 18.0009 12.4998C17.8462 12.4998 17.6978 12.5613 17.5884 12.6707C17.479 12.7801 17.4176 12.9285 17.4176 13.0832V15.9998C17.4176 16.1022 17.4445 16.2028 17.4957 16.2915C17.5469 16.3802 17.6205 16.4538 17.7092 16.505L19.2247 17.38C19.2911 17.4189 19.3645 17.4443 19.4407 17.4547C19.5169 17.4652 19.5945 17.4604 19.6688 17.4407C19.7432 17.4211 19.813 17.3869 19.8741 17.3402C19.9352 17.2934 19.9864 17.2351 20.0249 17.1684C20.0634 17.1018 20.0883 17.0282 20.0982 16.952C20.1081 16.8757 20.1028 16.7982 20.0827 16.7239C20.0625 16.6497 20.0279 16.5802 19.9808 16.5194C19.9336 16.4586 19.8749 16.4077 19.8081 16.3697ZM18.0015 10C16.8478 10 15.6603 10.359 14.7011 11C13.7418 11.641 12.9415 12.4341 12.5 13.5C12.0585 14.5659 11.8852 16.0369 12.1103 17.1684C12.3353 18.3 12.8736 19.4942 13.6894 20.31C14.5053 21.1258 15.8684 21.7749 17 22C18.1316 22.2251 19.4341 21.9415 20.5 21.5C21.5659 21.0585 22.359 20.2573 23 19.298C23.641 18.3387 24.0015 17.1537 24.0015 16C23.9998 14.4534 23.5951 13.0936 22.5015 12C21.4079 10.9064 19.5481 10.0017 18.0015 10ZM18.0009 20.6665C17.0779 20.6665 16.1757 20.3928 15.4082 19.88C14.6408 19.3672 14.0427 18.6384 13.6894 17.7857C13.3362 16.933 13.2438 15.9947 13.4239 15.0894C13.604 14.1842 14.0484 13.3527 14.7011 12.7C15.3537 12.0474 16.1852 11.6029 17.0905 11.4228C17.9957 11.2428 18.934 11.3352 19.7867 11.6884C20.6395 12.0416 21.3683 12.6397 21.8811 13.4072C22.3939 14.1746 22.6676 15.0769 22.6676 15.9998C22.666 17.237 22.1738 18.4231 21.299 19.298C20.4242 20.1728 19.2381 20.665 18.0009 20.6665Z"
  ></path>
</svg>`, g = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
  <path
    d="M120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h104L80-743q-12-12-12-28.5T80-800q12-12 28.5-12t28.5 12l143 144v-104q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm40 360q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"
  />
</svg>`, _ = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
  <path
    d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"
  />
</svg>`, v = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 0 24 24" class="vot-loader" id="vot-loader-download">
  <path class="vot-loader-main" d="M12 15.575C11.8667 15.575 11.7417 15.5542 11.625 15.5125C11.5083 15.4708 11.4 15.4 11.3 15.3L7.7 11.7C7.5 11.5 7.40417 11.2667 7.4125 11C7.42083 10.7333 7.51667 10.5 7.7 10.3C7.9 10.1 8.1375 9.99583 8.4125 9.9875C8.6875 9.97917 8.925 10.075 9.125 10.275L11 12.15V5C11 4.71667 11.0958 4.47917 11.2875 4.2875C11.4792 4.09583 11.7167 4 12 4C12.2833 4 12.5208 4.09583 12.7125 4.2875C12.9042 4.47917 13 4.71667 13 5V12.15L14.875 10.275C15.075 10.075 15.3125 9.97917 15.5875 9.9875C15.8625 9.99583 16.1 10.1 16.3 10.3C16.4833 10.5 16.5792 10.7333 16.5875 11C16.5958 11.2667 16.5 11.5 16.3 11.7L12.7 15.3C12.6 15.4 12.4917 15.4708 12.375 15.5125C12.2583 15.5542 12.1333 15.575 12 15.575ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V16C4 15.7167 4.09583 15.4792 4.2875 15.2875C4.47917 15.0958 4.71667 15 5 15C5.28333 15 5.52083 15.0958 5.7125 15.2875C5.90417 15.4792 6 15.7167 6 16V18H18V16C18 15.7167 18.0958 15.4792 18.2875 15.2875C18.4792 15.0958 18.7167 15 19 15C19.2833 15 19.5208 15.0958 19.7125 15.2875C19.9042 15.4792 20 15.7167 20 16V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z"/>
  <text class="vot-loader-text" dominant-baseline="middle" text-anchor="middle" x="50%" y="50%"></text>
</svg>`, b = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 0 24 24">
  <path d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm2-4h8v-2H6v2Zm10 0h2v-2h-2v2ZM6 12h2v-2H6v2Zm4 0h8v-2h-8v2Z"/>
</svg>`, x = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960">
  <path d="M555-80H405q-15 0-26-10t-13-25l-12-93q-13-5-24.5-12T307-235l-87 36q-14 5-28 1t-22-17L96-344q-8-13-5-28t15-24l75-57q-1-7-1-13.5v-27q0-6.5 1-13.5l-75-57q-12-9-15-24t5-28l74-129q7-14 21.5-17.5T220-761l87 36q11-8 23-15t24-12l12-93q2-15 13-25t26-10h150q15 0 26 10t13 25l12 93q13 5 24.5 12t22.5 15l87-36q14-5 28-1t22 17l74 129q8 13 5 28t-15 24l-75 57q1 7 1 13.5v27q0 6.5-2 13.5l75 57q12 9 15 24t-5 28l-74 128q-8 13-22.5 17.5T738-199l-85-36q-11 8-23 15t-24 12l-12 93q-2 15-13 25t-26 10Zm-73-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm0-80q-25 0-42.5-17.5T422-480q0-25 17.5-42.5T482-540q25 0 42.5 17.5T542-480q0 25-17.5 42.5T482-420Zm-2-60Zm-40 320h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Z"/>
</svg>`, C = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
  <path
    d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"
  />
</svg>`, w = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
  <path
    d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"
  />
</svg>`, T = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960">
  <path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/>
</svg>`, E = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none">
    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1"/>
  </g>
</svg>`, D = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none">
    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-9.5a3.625 3.625 0 0 1 1.348 6.99a.8.8 0 0 0-.305.201c-.044.05-.051.114-.05.18L13 14a1 1 0 0 1-1.993.117L11 14v-.25c0-1.153.93-1.845 1.604-2.116a1.626 1.626 0 1 0-2.229-1.509a1 1 0 1 1-2 0A3.625 3.625 0 0 1 12 6.5"/>
  </g>
</svg>`, O = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none">
    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/>
    <path fill="currentColor" d="M20 9a1 1 0 0 1 1 1v1a8 8 0 0 1-8 8H9.414l.793.793a1 1 0 0 1-1.414 1.414l-2.496-2.496a1 1 0 0 1-.287-.567L6 17.991a1 1 0 0 1 .237-.638l.056-.06l2.5-2.5a1 1 0 0 1 1.414 1.414L9.414 17H13a6 6 0 0 0 6-6v-1a1 1 0 0 1 1-1m-4.793-6.207l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L14.586 7H11a6 6 0 0 0-6 6v1a1 1 0 1 1-2 0v-1a8 8 0 0 1 8-8h3.586l-.793-.793a1 1 0 0 1 1.414-1.414"/>
  </g>
</svg>`, A = (0, m.JW)`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path fill="currentColor" d="M7 15q1.25 0 2.125-.875T10 12t-.875-2.125T7 9t-2.125.875T4 12t.875 2.125T7 15m0 3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6q2.025 0 3.538 1.15T12.65 10h8.375L23 11.975l-3.5 4L17 14l-2 2l-2-2h-.35q-.625 1.8-2.175 2.9T7 18"/>
  </svg>`;
		},
		"./src/ui/manager.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { o: () => UIManager });
					var h = p("./node_modules/@vot.js/shared/dist/utils/subs.js"), g = p("./src/ui.js"), _ = p("./src/config/config.js"), v = p("./src/localization/localizationProvider.ts"), b = p("./src/utils/VOTLocalizedError.js"), x = p("./src/utils/debug.ts"), C = p("./src/utils/gm.ts"), w = p("./src/utils/storage.ts"), T = p("./src/utils/utils.ts"), E = p("./src/ui/components/votButton.ts"), D = p("./src/ui/views/overlay.ts"), O = p("./src/ui/views/settings.ts"), A = d([
						g,
						v,
						b,
						C,
						w,
						T,
						E,
						D,
						O
					]);
					[g, v, b, C, w, T, E, D, O] = A.then ? (await A)() : A;
					class UIManager {
						root;
						portalContainer;
						tooltipLayoutRoot;
						initialized = !1;
						videoHandler;
						data;
						votGlobalPortal;
						votOverlayView;
						votSettingsView;
						constructor({ root: d, portalContainer: f, tooltipLayoutRoot: p, data: m = {}, videoHandler: h }) {
							this.root = d, this.portalContainer = f, this.tooltipLayoutRoot = p, this.videoHandler = h, this.data = m;
						}
						isInitialized() {
							return this.initialized;
						}
						initUI() {
							if (this.isInitialized()) throw Error("[VOT] UIManager is already initialized");
							return this.initialized = !0, this.votGlobalPortal = g.A.createPortal(), document.documentElement.appendChild(this.votGlobalPortal), this.votOverlayView = new D.i({
								root: this.root,
								portalContainer: this.portalContainer,
								tooltipLayoutRoot: this.tooltipLayoutRoot,
								globalPortal: this.votGlobalPortal,
								data: this.data,
								videoHandler: this.videoHandler
							}), this.votOverlayView.initUI(), this.votSettingsView = new O.r({
								globalPortal: this.votGlobalPortal,
								data: this.data,
								videoHandler: this.videoHandler
							}), this.votSettingsView.initUI(), this;
						}
						initUIEvents() {
							if (!this.isInitialized()) throw Error("[VOT] UIManager isn't initialized");
							this.votOverlayView.initUIEvents(), this.votOverlayView.addEventListener("click:translate", async () => {
								await this.handleTranslationBtnClick();
							}).addEventListener("click:pip", async () => {
								if (!this.videoHandler) return;
								let d = this.videoHandler.video === document.pictureInPictureElement;
								await (d ? document.exitPictureInPicture() : this.videoHandler.video.requestPictureInPicture());
							}).addEventListener("click:settings", async () => {
								this.videoHandler?.subtitlesWidget.releaseTooltip(), this.votSettingsView.open(), await (0, T.Eh)();
							}).addEventListener("click:downloadTranslation", async () => {
								if (!(!this.votOverlayView.isInitialized() || !this.videoHandler?.downloadTranslationUrl || !this.videoHandler.videoData)) {
									try {
										if (!this.data.downloadWithName || !C.yx) return (0, T.Wo)(this.videoHandler.downloadTranslationUrl);
										this.votOverlayView.downloadTranslationButton.progress = 0;
										let d = await (0, C.G3)(this.videoHandler.downloadTranslationUrl, { timeout: 0 });
										if (!d.ok) throw Error(`HTTP ${d.status}`);
										let f = (0, T.Le)(this.videoHandler.videoData.downloadTitle);
										await (0, T.MR)(d, f, (d) => {
											this.votOverlayView.downloadTranslationButton.progress = d;
										});
									} catch (d) {
										console.error("[VOT] Download translation failed:", d), (0, T.Wo)(this.videoHandler.downloadTranslationUrl);
									}
									this.votOverlayView.downloadTranslationButton.progress = 0;
								}
							}).addEventListener("click:downloadSubtitles", async () => {
								if (!this.videoHandler || !this.videoHandler.yandexSubtitles || !this.videoHandler.videoData) return;
								let d = this.data.subtitlesDownloadFormat ?? "json", f = (0, h.vk)(this.videoHandler.yandexSubtitles, d), p = new Blob([d === "json" ? JSON.stringify(f) : f], { type: "text/plain" }), m = this.data.downloadWithName ? (0, T.Le)(this.videoHandler.videoData.downloadTitle) : `subtitles_${this.videoHandler.videoData.videoId}`;
								(0, T.WN)(p, `${m}.${d}`);
							}).addEventListener("input:videoVolume", (d) => {
								this.videoHandler && (this.videoHandler.setVideoVolume(d / 100), this.data.syncVolume && this.videoHandler.syncVolumeWrapper("video", d));
							}).addEventListener("input:translationVolume", () => {
								if (!this.videoHandler) return;
								let d = this.data.defaultVolume ?? 100;
								this.videoHandler.audioPlayer.player.volume = d / 100, this.data.syncVolume && (this.videoHandler.syncVolumeWrapper("translation", d), ["youtube", "googledrive"].includes(this.videoHandler.site.host) && this.videoHandler.site.additionalData !== "mobile" && this.videoHandler.setVideoVolume(this.videoHandler.tempOriginalVolume / 100));
							}).addEventListener("select:subtitles", async (d) => {
								await this.videoHandler?.changeSubtitlesLang(d);
							}), this.votSettingsView.initUIEvents(), this.votSettingsView.addEventListener("update:account", async (d) => {
								this.videoHandler && (this.videoHandler.votClient.apiToken = d?.token);
							}).addEventListener("change:autoTranslate", async (d) => {
								d && this.videoHandler && !this.videoHandler?.hasActiveSource() && await this.handleTranslationBtnClick();
							}).addEventListener("change:showVideoVolume", () => {
								this.votOverlayView.isInitialized() && (this.votOverlayView.videoVolumeSlider.container.hidden = !this.data.showVideoSlider || this.votOverlayView.votButton.status !== "success");
							}).addEventListener("change:audioBuster", async () => {
								if (!this.votOverlayView.isInitialized()) return;
								let d = this.votOverlayView.translationVolumeSlider.value;
								this.votOverlayView.translationVolumeSlider.max = this.data.audioBooster ? _.T8 : 100, this.votOverlayView.translationVolumeSlider.value = (0, T.qE)(d, 0, 100);
							}).addEventListener("change:useLivelyVoice", () => {
								this.videoHandler?.stopTranslate();
							}).addEventListener("change:subtitlesHighlightWords", (d) => {
								this.videoHandler?.subtitlesWidget.setHighlightWords(this.data.highlightWords ?? d);
							}).addEventListener("input:subtitlesMaxLength", (d) => {
								this.videoHandler?.subtitlesWidget.setMaxLength(this.data.subtitlesMaxLength ?? d);
							}).addEventListener("input:subtitlesFontSize", (d) => {
								this.videoHandler?.subtitlesWidget.setFontSize(this.data.subtitlesFontSize ?? d);
							}).addEventListener("input:subtitlesBackgroundOpacity", (d) => {
								this.videoHandler?.subtitlesWidget.setOpacity(this.data.subtitlesOpacity ?? d);
							}).addEventListener("change:proxyWorkerHost", (d) => {
								!this.data.translateProxyEnabled || !this.videoHandler || (this.videoHandler.votClient.host = this.data.proxyWorkerHost ?? d);
							}).addEventListener("select:proxyTranslationStatus", () => {
								this.videoHandler?.initVOTClient();
							}).addEventListener("change:useNewAudioPlayer", () => {
								this.videoHandler && (this.videoHandler.stopTranslate(), this.videoHandler.createPlayer());
							}).addEventListener("change:onlyBypassMediaCSP", () => {
								this.videoHandler && (this.videoHandler.stopTranslate(), this.videoHandler.createPlayer());
							}).addEventListener("select:translationTextService", () => {
								this.videoHandler && (this.videoHandler.subtitlesWidget.strTranslatedTokens = "", this.videoHandler.subtitlesWidget.releaseTooltip());
							}).addEventListener("change:showPiPButton", () => {
								this.votOverlayView.isInitialized() && (this.votOverlayView.votButton.pipButton.hidden = this.votOverlayView.votButton.separator2.hidden = !this.votOverlayView.pipButtonVisible);
							}).addEventListener("select:buttonPosition", (d) => {
								if (!this.votOverlayView.isInitialized()) return;
								let f = this.data.buttonPos ?? d;
								this.votOverlayView.updateButtonLayout(f, E.A.calcDirection(f));
							}).addEventListener("select:menuLanguage", async () => {
								await this.reloadMenu();
							}).addEventListener("click:bugReport", () => {
								if (!this.videoHandler) return;
								let d = new URLSearchParams(this.videoHandler.collectReportInfo()).toString();
								window.open(`${_.Ek}/issues/new?${d}`, "_blank")?.focus();
							}).addEventListener("click:resetSettings", async () => {
								let d = await w.d.list();
								await Promise.all(d.map(async (d) => await w.d.delete(d))), await w.d.set("compatVersion", _.r4), window.location.reload();
							});
						}
						async reloadMenu() {
							if (!this.votOverlayView?.isInitialized()) throw Error("[VOT] OverlayView isn't initialized");
							if (this.videoHandler?.stopTranslation(), this.release(), this.initUI(), this.initUIEvents(), !this.videoHandler) return this;
							await this.videoHandler.updateSubtitlesLangSelect(), this.videoHandler.subtitlesWidget.portal = this.votOverlayView.votOverlayPortal, this.videoHandler.subtitlesWidget.strTranslatedTokens = "";
						}
						async handleTranslationBtnClick() {
							if (!this.votOverlayView?.isInitialized()) throw Error("[VOT] OverlayView isn't initialized");
							if (!this.videoHandler) return this;
							if (x.A.log("[handleTranslationBtnClick] click translationBtn"), this.videoHandler.hasActiveSource()) return x.A.log("[handleTranslationBtnClick] video has active source"), this.videoHandler.stopTranslation(), this;
							if (this.votOverlayView.votButton.status !== "none" || this.votOverlayView.votButton.loading) return x.A.log("[handleTranslationBtnClick] translationBtn isn't in none state"), this.videoHandler.actionsAbortController.abort(), this.videoHandler.stopTranslation(), this;
							try {
								if (x.A.log("[handleTranslationBtnClick] trying execute translation"), !this.videoHandler.videoData?.videoId) throw new b.n("VOTNoVideoIDFound");
								(this.videoHandler.site.host === "vk" && this.videoHandler.site.additionalData === "clips" || this.videoHandler.site.host === "douyin") && (this.videoHandler.videoData = await this.videoHandler.getVideoData()), x.A.log("[handleTranslationBtnClick] Run translateFunc", this.videoHandler.videoData.videoId), await this.videoHandler.translateFunc(this.videoHandler.videoData.videoId, this.videoHandler.videoData.isStream, this.videoHandler.videoData.detectedLanguage, this.videoHandler.videoData.responseLanguage, this.videoHandler.videoData.translationHelp);
							} catch (d) {
								if (console.error("[VOT]", d), !(d instanceof Error)) return this.transformBtn("error", String(d)), this;
								let f = d.name === "VOTLocalizedError" ? d.localizedMessage : d.message;
								this.transformBtn("error", f);
							}
							return this;
						}
						isLoadingText(d) {
							return typeof d == "string" && (d.includes(v.j.get("translationTake")) || d.includes(v.j.get("TranslationDelayed")));
						}
						transformBtn(d, f) {
							if (!this.votOverlayView?.isInitialized()) throw Error("[VOT] OverlayView isn't initialized");
							return this.votOverlayView.votButton.status = d, this.votOverlayView.votButton.loading = d === "error" && this.isLoadingText(f), this.votOverlayView.votButton.setText(f), this.votOverlayView.votButtonTooltip.setContent(f), this;
						}
						releaseUI(d = !1) {
							if (!this.isInitialized()) throw Error("[VOT] UIManager isn't initialized");
							return this.votOverlayView.releaseUI(!0), this.votSettingsView.releaseUI(!0), this.votGlobalPortal.remove(), this.initialized = d, this;
						}
						releaseUIEvents(d = !1) {
							if (!this.isInitialized()) throw Error("[VOT] UIManager isn't initialized");
							return this.votOverlayView.releaseUIEvents(!1), this.votSettingsView.releaseUIEvents(!1), this.initialized = d, this;
						}
						release() {
							return this.releaseUI(!0), this.releaseUIEvents(!1), this;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/views/overlay.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { i: () => OverlayView });
					var h = p("./node_modules/@vot.js/shared/dist/data/consts.js"), g = p("./src/ui.js"), _ = p("./src/ui/components/languagePairSelect.ts"), v = p("./src/ui/components/select.ts"), b = p("./src/ui/components/slider.ts"), x = p("./src/ui/components/sliderLabel.ts"), C = p("./src/ui/components/tooltip.ts"), w = p("./src/ui/components/votButton.ts"), T = p("./src/ui/components/votMenu.ts"), E = p("./src/ui/icons.ts"), D = p("./src/config/config.js"), O = p("./src/core/eventImpl.ts"), A = p("./src/localization/localizationProvider.ts"), j = p("./src/utils/storage.ts"), F = p("./src/utils/utils.ts"), U = p("./src/ui/components/downloadButton.ts"), W = p("./src/ui/components/label.ts"), G = d([
						g,
						_,
						v,
						b,
						x,
						C,
						w,
						T,
						A,
						j,
						F,
						U,
						W
					]);
					[g, _, v, b, x, C, w, T, A, j, F, U, W] = G.then ? (await G)() : G;
					class OverlayView {
						root;
						tooltipLayoutRoot;
						portalContainer;
						globalPortal;
						dragging = !1;
						initialized = !1;
						data;
						videoHandler;
						cancelDraggingEvents = ["pointercancel", "touchcancel"];
						onClickSettings = new O.Z();
						onClickPiP = new O.Z();
						onClickTranslate = new O.Z();
						onClickDownloadTranslation = new O.Z();
						onClickDownloadSubtitles = new O.Z();
						onSelectFromLanguage = new O.Z();
						onSelectToLanguage = new O.Z();
						onSelectSubtitles = new O.Z();
						onInputVideoVolume = new O.Z();
						onInputTranslationVolume = new O.Z();
						votOverlayPortal;
						votButton;
						votButtonTooltip;
						votMenu;
						downloadTranslationButton;
						downloadSubtitlesButton;
						openSettingsButton;
						languagePairSelect;
						subtitlesSelectLabel;
						subtitlesSelect;
						videoVolumeSliderLabel;
						videoVolumeSlider;
						tranlsationVolumeSliderLabel;
						translationVolumeSlider;
						constructor({ root: d, portalContainer: f, tooltipLayoutRoot: p, globalPortal: m, data: h = {}, videoHandler: g }) {
							this.root = d, this.portalContainer = f, this.tooltipLayoutRoot = p, this.globalPortal = m, this.data = h, this.videoHandler = g;
						}
						isInitialized() {
							return this.initialized;
						}
						calcButtonLayout(d) {
							return this.isBigContainer && ["left", "right"].includes(d) ? {
								direction: "column",
								position: d
							} : {
								direction: "row",
								position: "default"
							};
						}
						addEventListener(d, f) {
							switch (d) {
								case "click:settings":
									this.onClickSettings.addListener(f);
									break;
								case "click:pip":
									this.onClickPiP.addListener(f);
									break;
								case "click:downloadTranslation":
									this.onClickDownloadTranslation.addListener(f);
									break;
								case "click:downloadSubtitles":
									this.onClickDownloadSubtitles.addListener(f);
									break;
								case "click:translate":
									this.onClickTranslate.addListener(f);
									break;
								case "input:videoVolume":
									this.onInputVideoVolume.addListener(f);
									break;
								case "input:translationVolume":
									this.onInputTranslationVolume.addListener(f);
									break;
								case "select:fromLanguage":
									this.onSelectFromLanguage.addListener(f);
									break;
								case "select:toLanguage":
									this.onSelectToLanguage.addListener(f);
									break;
								case "select:subtitles":
									this.onSelectSubtitles.addListener(f);
									break;
							}
							return this;
						}
						removeEventListener(d, f) {
							switch (d) {
								case "click:settings":
									this.onClickSettings.removeListener(f);
									break;
								case "click:pip":
									this.onClickPiP.removeListener(f);
									break;
								case "click:downloadTranslation":
									this.onClickDownloadTranslation.removeListener(f);
									break;
								case "click:downloadSubtitles":
									this.onClickDownloadSubtitles.removeListener(f);
									break;
								case "click:translate":
									this.onClickTranslate.removeListener(f);
									break;
								case "input:videoVolume":
									this.onInputVideoVolume.removeListener(f);
									break;
								case "input:translationVolume":
									this.onInputTranslationVolume.removeListener(f);
									break;
								case "select:fromLanguage":
									this.onSelectFromLanguage.removeListener(f);
									break;
								case "select:toLanguage":
									this.onSelectToLanguage.removeListener(f);
									break;
								case "select:subtitles":
									this.onSelectSubtitles.removeListener(f);
									break;
							}
							return this;
						}
						initUI(d = "default") {
							if (this.isInitialized()) throw Error("[VOT] OverlayView is already initialized");
							this.initialized = !0;
							let { position: f, direction: p } = this.calcButtonLayout(d);
							this.votOverlayPortal = g.A.createPortal(!0), this.portalContainer.appendChild(this.votOverlayPortal), this.votButton = new w.A({
								position: f,
								direction: p,
								status: "none",
								labelHtml: A.j.get("translateVideo")
							}), this.votButton.opacity = 0, this.pipButtonVisible || this.votButton.showPiPButton(!1), this.root.appendChild(this.votButton.container), this.votButtonTooltip = new C.A({
								target: this.votButton.translateButton,
								content: A.j.get("translateVideo"),
								position: this.votButton.tooltipPos,
								hidden: p === "row",
								bordered: !1,
								parentElement: this.votOverlayPortal,
								layoutRoot: this.tooltipLayoutRoot
							}), this.votMenu = new T.A({
								titleHtml: A.j.get("VOTSettings"),
								position: f
							}), this.root.appendChild(this.votMenu.container), this.downloadTranslationButton = new U.A(), this.downloadTranslationButton.hidden = !0, this.downloadSubtitlesButton = g.A.createIconButton(E.U0), this.downloadSubtitlesButton.hidden = !0, this.openSettingsButton = g.A.createIconButton(E.c1), this.votMenu.headerContainer.append(this.downloadTranslationButton.button, this.downloadSubtitlesButton, this.openSettingsButton);
							let m = this.videoHandler?.videoData?.detectedLanguage ?? "en", O = this.data.responseLanguage ?? "ru";
							this.languagePairSelect = new _.A({
								from: {
									selectTitle: A.j.get(`langs.${m}`),
									items: v.A.genLanguageItems(h.xm, m)
								},
								to: {
									selectTitle: A.j.get(`langs.${O}`),
									items: v.A.genLanguageItems(h.Xh, O)
								}
							}), this.subtitlesSelectLabel = new W.A({ labelText: A.j.get("VOTSubtitles") }), this.subtitlesSelect = new v.A({
								selectTitle: A.j.get("VOTSubtitlesDisabled"),
								dialogTitle: A.j.get("VOTSubtitles"),
								labelElement: this.subtitlesSelectLabel.container,
								dialogParent: this.globalPortal,
								items: [{
									label: A.j.get("VOTSubtitlesDisabled"),
									value: "disabled",
									selected: !0
								}]
							});
							let j = this.videoHandler ? this.videoHandler.getVideoVolume() * 100 : 100;
							this.videoVolumeSliderLabel = new x.A({
								labelText: A.j.get("VOTVolume"),
								value: j
							}), this.videoVolumeSlider = new b.A({
								labelHtml: this.videoVolumeSliderLabel.container,
								value: j
							}), this.videoVolumeSlider.hidden = !this.data.showVideoSlider || this.votButton.status !== "success";
							let F = this.data.defaultVolume ?? 100;
							return this.tranlsationVolumeSliderLabel = new x.A({
								labelText: A.j.get("VOTVolumeTranslation"),
								value: F
							}), this.translationVolumeSlider = new b.A({
								labelHtml: this.tranlsationVolumeSliderLabel.container,
								value: F,
								max: this.data.audioBooster ? D.T8 : 100
							}), this.translationVolumeSlider.hidden = this.votButton.status !== "success", this.votMenu.bodyContainer.append(this.languagePairSelect.container, this.subtitlesSelect.container, this.videoVolumeSlider.container, this.translationVolumeSlider.container), this;
						}
						initUIEvents() {
							if (!this.isInitialized()) throw Error("[VOT] OverlayView isn't initialized");
							this.votButton.container.addEventListener("click", (d) => {
								d.preventDefault(), d.stopPropagation(), d.stopImmediatePropagation();
							}), this.votButton.translateButton.addEventListener("pointerdown", async () => {
								this.onClickTranslate.dispatch();
							}), this.votButton.pipButton.addEventListener("pointerdown", async () => {
								this.onClickPiP.dispatch();
							}), this.votButton.menuButton.addEventListener("pointerdown", async () => {
								this.votMenu.hidden = !this.votMenu.hidden;
							});
							let enableDraggingByEvent = (d) => {
								this.dragging = !0, d.preventDefault();
							};
							this.votButton.container.addEventListener("pointerdown", enableDraggingByEvent), this.root.addEventListener("pointerup", this.disableDragging), this.root.addEventListener("pointermove", this.handleContainerPointerMove), this.votButton.container.addEventListener("touchstart", enableDraggingByEvent, { passive: !1 }), this.root.addEventListener("touchend", this.disableDragging), this.root.addEventListener("touchmove", this.handleContainerTouchMove, { passive: !1 });
							for (let d of this.cancelDraggingEvents) document.addEventListener(d, this.disableDragging);
							this.votMenu.container.addEventListener("click", (d) => {
								d.preventDefault(), d.stopPropagation(), d.stopImmediatePropagation();
							});
							for (let d of ["pointerdown", "mousedown"]) this.votMenu.container.addEventListener(d, (d) => {
								d.stopImmediatePropagation();
							});
							return this.downloadTranslationButton.addEventListener("click", async () => {
								this.onClickDownloadTranslation.dispatch();
							}), this.downloadSubtitlesButton.addEventListener("click", async () => {
								this.onClickDownloadSubtitles.dispatch();
							}), this.openSettingsButton.addEventListener("click", async () => {
								this.onClickSettings.dispatch();
							}), this.languagePairSelect.fromSelect.addEventListener("selectItem", (d) => {
								this.videoHandler?.videoData && (this.videoHandler.videoData.detectedLanguage = d), this.onSelectFromLanguage.dispatch(d);
							}), this.languagePairSelect.toSelect.addEventListener("selectItem", async (d) => {
								this.videoHandler?.videoData && (this.videoHandler.translateToLang = this.videoHandler.videoData.responseLanguage = d), this.data.responseLanguage = d, await j.d.set("responseLanguage", this.data.responseLanguage), this.onSelectToLanguage.dispatch(d);
							}), this.subtitlesSelect.addEventListener("beforeOpen", async (d) => {
								if (!this.videoHandler?.videoData) return;
								let f = `${this.videoHandler.videoData.videoId}_${this.videoHandler.videoData.detectedLanguage}_${this.videoHandler.videoData.responseLanguage}_${this.data.useLivelyVoice}`;
								if (this.videoHandler.cacheManager.getSubtitles(f)) return;
								this.votButton.loading = !0;
								let p = g.A.createInlineLoader();
								p.style.margin = "0 auto", d.footerContainer.appendChild(p), await this.videoHandler.loadSubtitles(), d.footerContainer.removeChild(p), this.votButton.loading = !1;
							}), this.subtitlesSelect.addEventListener("selectItem", (d) => {
								this.onSelectSubtitles.dispatch(d);
							}), this.videoVolumeSlider.addEventListener("input", (d, f) => {
								this.videoVolumeSliderLabel.value = d, !f && this.onInputVideoVolume.dispatch(d);
							}), this.translationVolumeSlider.addEventListener("input", async (d, f) => {
								this.tranlsationVolumeSliderLabel.value = d, this.data.defaultVolume = d, await j.d.set("defaultVolume", this.data.defaultVolume), !f && this.onInputTranslationVolume.dispatch(d);
							}), this;
						}
						updateButtonLayout(d, f) {
							return this.isInitialized() ? (this.votMenu.position = d, this.votButton.position = d, this.votButton.direction = f, this.votButtonTooltip.hidden = f === "row", this.votButtonTooltip.setPosition(this.votButton.tooltipPos), this) : this;
						}
						async moveButton(d) {
							if (!this.isInitialized()) return this;
							let f = w.A.calcPosition(d, this.isBigContainer);
							if (f === this.votButton.position) return this;
							let p = w.A.calcDirection(f);
							return this.data.buttonPos = f, this.updateButtonLayout(f, p), this.isBigContainer && await j.d.set("buttonPos", f), this;
						}
						async handleDragMove(d, f, p = this.root.getBoundingClientRect()) {
							if (!this.dragging) return this;
							d.preventDefault();
							let m = f - p.left, h = m / p.width * 100;
							return await this.moveButton(h), this;
						}
						disableDragging = () => {
							this.dragging = !1;
						};
						handleContainerPointerMove = async (d) => {
							await this.handleDragMove(d, d.clientX);
						};
						handleContainerTouchMove = async (d) => {
							await this.handleDragMove(d, d.touches[0].clientX);
						};
						updateButtonOpacity(d) {
							return !this.isInitialized() || !this.votMenu.hidden || (this.votButton.opacity = d), this;
						}
						releaseUI(d = !1) {
							if (!this.isInitialized()) throw Error("[VOT] OverlayView isn't initialized");
							return this.votButton.remove(), this.votMenu.remove(), this.votButtonTooltip.release(), this.votOverlayPortal.remove(), this.initialized = d, this;
						}
						releaseUIEvents(d = !1) {
							if (!this.isInitialized()) throw Error("[VOT] OverlayView isn't initialized");
							this.root.removeEventListener("pointerup", this.disableDragging), this.root.removeEventListener("pointermove", this.handleContainerPointerMove), this.root.removeEventListener("touchend", this.disableDragging), this.root.removeEventListener("touchmove", this.handleContainerTouchMove);
							for (let d of this.cancelDraggingEvents) document.removeEventListener(d, this.disableDragging);
							return this.onClickSettings.clear(), this.onClickPiP.clear(), this.onClickTranslate.clear(), this.onClickDownloadTranslation.clear(), this.onClickDownloadSubtitles.clear(), this.onSelectFromLanguage.clear(), this.onSelectToLanguage.clear(), this.onSelectSubtitles.clear(), this.onInputVideoVolume.clear(), this.onInputTranslationVolume.clear(), this.initialized = d, this;
						}
						release() {
							return this.releaseUI(!0), this.releaseUIEvents(!1), this;
						}
						get isBigContainer() {
							return this.root.clientWidth > 550;
						}
						get pipButtonVisible() {
							return (0, F.Bs)() && !!this.data.showPiPButton;
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/ui/views/settings.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { r: () => SettingsView });
					var h = p("./node_modules/@vot.js/core/dist/types/yandex.js"), g = p("./node_modules/@vot.js/ext/dist/types/service.js"), _ = p("./node_modules/@vot.js/shared/dist/data/consts.js"), v = p("./node_modules/lit-html/lit-html.js"), b = p("./src/index.js"), x = p("./src/audioDownloader/index.ts"), C = p("./src/audioDownloader/strategies/index.ts"), w = p("./src/config/config.js"), T = p("./src/core/eventImpl.ts"), E = p("./src/localization/localizationProvider.ts"), D = p("./src/types/components/votButton.ts"), O = p("./src/ui.js"), A = p("./src/utils/debug.ts"), j = p("./src/utils/gm.ts"), F = p("./src/utils/storage.ts"), U = p("./src/utils/translateApis.ts"), W = p("./src/utils/utils.ts"), G = p("./src/ui/components/accountButton.ts"), K = p("./src/ui/components/checkbox.ts"), q = p("./src/ui/components/details.ts"), J = p("./src/ui/components/dialog.ts"), Y = p("./src/ui/components/hotkeyButton.ts"), X = p("./src/ui/components/label.ts"), Z = p("./src/ui/components/select.ts"), Q = p("./src/ui/components/slider.ts"), $ = p("./src/ui/components/sliderLabel.ts"), ee = p("./src/ui/components/textfield.ts"), te = p("./src/ui/components/tooltip.ts"), ne = p("./src/ui/icons.ts"), re = d([
						b,
						x,
						C,
						E,
						O,
						j,
						F,
						U,
						W,
						G,
						K,
						q,
						J,
						Y,
						X,
						Z,
						Q,
						$,
						ee,
						te
					]);
					[b, x, C, E, O, j, F, U, W, G, K, q, J, Y, X, Z, Q, $, ee, te] = re.then ? (await re)() : re;
					class SettingsView {
						globalPortal;
						initialized = !1;
						data;
						videoHandler;
						onClickBugReport = new T.Z();
						onClickResetSettings = new T.Z();
						onUpdateAccount = new T.Z();
						onChangeAutoTranslate = new T.Z();
						onChangeShowVideoVolume = new T.Z();
						onChangeAudioBooster = new T.Z();
						onChangeUseLivelyVoice = new T.Z();
						onChangeSubtitlesHighlightWords = new T.Z();
						onChangeProxyWorkerHost = new T.Z();
						onChangeUseNewAudioPlayer = new T.Z();
						onChangeOnlyBypassMediaCSP = new T.Z();
						onChangeShowPiPButton = new T.Z();
						onInputSubtitlesMaxLength = new T.Z();
						onInputSubtitlesFontSize = new T.Z();
						onInputSubtitlesBackgroundOpacity = new T.Z();
						onInputAutoHideButtonDelay = new T.Z();
						onSelectItemProxyTranslationStatus = new T.Z();
						onSelectItemTranslationTextService = new T.Z();
						onSelectItemButtonPosition = new T.Z();
						onSelectItemMenuLanguage = new T.Z();
						dialog;
						accountHeader;
						accountButton;
						accountButtonRefreshTooltip;
						accountButtonTokenTooltip;
						translationSettingsHeader;
						autoTranslateCheckbox;
						dontTranslateLanguagesCheckbox;
						dontTranslateLanguagesSelect;
						autoSetVolumeSliderLabel;
						autoSetVolumeCheckbox;
						autoSetVolumeSlider;
						showVideoVolumeSliderCheckbox;
						audioBoosterCheckbox;
						audioBoosterTooltip;
						syncVolumeCheckbox;
						downloadWithNameCheckbox;
						sendNotifyOnCompleteCheckbox;
						useLivelyVoiceCheckbox;
						useLivelyVoiceTooltip;
						useAudioDownloadCheckbox;
						useAudioDownloadCheckboxLabel;
						useAudioDownloadCheckboxTooltip;
						subtitlesSettingsHeader;
						subtitlesDownloadFormatSelectLabel;
						subtitlesDownloadFormatSelect;
						subtitlesDesignDetails;
						hotkeysSettingsHeader;
						translateHotkeyButton;
						proxySettingsHeader;
						proxyM3U8HostTextfield;
						proxyWorkerHostTextfield;
						proxyTranslationStatusSelectLabel;
						proxyTranslationStatusSelectTooltip;
						proxyTranslationStatusSelect;
						miscSettingsHeader;
						translateAPIErrorsCheckbox;
						useNewAudioPlayerCheckbox;
						useNewAudioPlayerTooltip;
						onlyBypassMediaCSPCheckbox;
						onlyBypassMediaCSPTooltip;
						translationTextServiceLabel;
						translationTextServiceSelect;
						translationTextServiceTooltip;
						detectServiceLabel;
						detectServiceSelect;
						appearanceDetails;
						aboutExtensionDetails;
						bugReportButton;
						resetSettingsButton;
						constructor({ globalPortal: d, data: f = {}, videoHandler: p }) {
							this.globalPortal = d, this.data = f, this.videoHandler = p;
						}
						isInitialized() {
							return this.initialized;
						}
						initUI() {
							if (this.isInitialized()) throw Error("[VOT] SettingsView is already initialized");
							this.initialized = !0, this.dialog = new J.A({ titleHtml: E.j.get("VOTSettings") }), this.globalPortal.appendChild(this.dialog.container), this.accountHeader = O.A.createHeader(E.j.get("VOTMyAccount")), this.accountButton = new G.A({
								avatarId: this.data.account?.avatarId,
								username: this.data.account?.username,
								loggedIn: !!this.data.account?.token
							}), F.d.isSupportOnlyLS ? (this.accountButton.refreshButton.setAttribute("disabled", "true"), this.accountButton.actionButton.setAttribute("disabled", "true")) : this.accountButtonRefreshTooltip = new te.A({
								target: this.accountButton.refreshButton,
								content: E.j.get("VOTRefresh"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							}), this.accountButtonTokenTooltip = new te.A({
								target: this.accountButton.tokenButton,
								content: E.j.get("VOTLoginViaToken"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							}), this.translationSettingsHeader = O.A.createHeader(E.j.get("translationSettings")), this.autoTranslateCheckbox = new K.A({
								labelHtml: E.j.get("VOTAutoTranslate"),
								checked: this.data.autoTranslate
							});
							let d = this.data.dontTranslateLanguages ?? [];
							this.dontTranslateLanguagesCheckbox = new K.A({
								labelHtml: E.j.get("DontTranslateSelectedLanguages"),
								checked: this.data.enabledDontTranslateLanguages
							}), this.dontTranslateLanguagesSelect = new Z.A({
								dialogParent: this.globalPortal,
								dialogTitle: E.j.get("DontTranslateSelectedLanguages"),
								selectTitle: d.map((d) => E.j.get(`langs.${d}`)).join(", ") ?? E.j.get("DontTranslateSelectedLanguages"),
								items: Z.A.genLanguageItems(_.xm).map((f) => ({
									...f,
									selected: d.includes(f.value)
								})),
								multiSelect: !0,
								labelElement: this.dontTranslateLanguagesCheckbox.container
							});
							let f = this.data.autoVolume ?? w.JD;
							this.autoSetVolumeSliderLabel = new $.A({
								labelText: E.j.get("VOTAutoSetVolume"),
								value: f
							}), this.autoSetVolumeCheckbox = new K.A({
								labelHtml: this.autoSetVolumeSliderLabel.container,
								checked: this.data.enabledAutoVolume ?? !0
							}), this.autoSetVolumeSlider = new Q.A({
								labelHtml: this.autoSetVolumeCheckbox.container,
								value: f
							}), this.showVideoVolumeSliderCheckbox = new K.A({
								labelHtml: E.j.get("showVideoVolumeSlider"),
								checked: this.data.showVideoSlider
							}), this.audioBoosterCheckbox = new K.A({
								labelHtml: E.j.get("VOTAudioBooster"),
								checked: this.data.audioBooster
							}), this.videoHandler?.audioContext || (this.audioBoosterCheckbox.disabled = !0, this.audioBoosterTooltip = new te.A({
								target: this.audioBoosterCheckbox.container,
								content: E.j.get("VOTNeedWebAudioAPI"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							})), this.syncVolumeCheckbox = new K.A({
								labelHtml: E.j.get("VOTSyncVolume"),
								checked: this.data.syncVolume
							}), this.downloadWithNameCheckbox = new K.A({
								labelHtml: E.j.get("VOTDownloadWithName"),
								checked: this.data.downloadWithName
							}), this.downloadWithNameCheckbox.disabled = !j.yx, this.sendNotifyOnCompleteCheckbox = new K.A({
								labelHtml: E.j.get("VOTSendNotifyOnComplete"),
								checked: this.data.sendNotifyOnComplete
							}), this.useLivelyVoiceCheckbox = new K.A({
								labelHtml: E.j.get("VOTUseLivelyVoice"),
								checked: this.data.useLivelyVoice
							}), this.useLivelyVoiceTooltip = new te.A({
								target: this.useLivelyVoiceCheckbox.container,
								content: E.j.get("VOTAccountRequired"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal,
								hidden: !!this.data.account?.token
							}), this.data.account?.token || (this.useLivelyVoiceCheckbox.disabled = !0), this.useAudioDownloadCheckboxLabel = new X.A({
								labelText: E.j.get("VOTUseAudioDownload"),
								icon: ne.Xd
							}), this.useAudioDownloadCheckbox = new K.A({
								labelHtml: this.useAudioDownloadCheckboxLabel.container,
								checked: this.data.useAudioDownload
							}), j.B0 || (this.useAudioDownloadCheckbox.disabled = !0), this.useAudioDownloadCheckboxTooltip = new te.A({
								target: this.useAudioDownloadCheckboxLabel.container,
								content: E.j.get("VOTUseAudioDownloadWarning"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							}), this.dialog.bodyContainer.append(this.accountHeader, this.accountButton.container, this.translationSettingsHeader, this.autoTranslateCheckbox.container, this.dontTranslateLanguagesSelect.container, this.autoSetVolumeSlider.container, this.showVideoVolumeSliderCheckbox.container, this.audioBoosterCheckbox.container, this.syncVolumeCheckbox.container, this.downloadWithNameCheckbox.container, this.sendNotifyOnCompleteCheckbox.container, this.useLivelyVoiceCheckbox.container, this.useAudioDownloadCheckbox.container), this.subtitlesSettingsHeader = O.A.createHeader(E.j.get("subtitlesSettings")), this.subtitlesDownloadFormatSelectLabel = new X.A({ labelText: E.j.get("VOTSubtitlesDownloadFormat") }), this.subtitlesDownloadFormatSelect = new Z.A({
								selectTitle: this.data.subtitlesDownloadFormat ?? E.j.get("VOTSubtitlesDownloadFormat"),
								dialogTitle: E.j.get("VOTSubtitlesDownloadFormat"),
								dialogParent: this.globalPortal,
								labelElement: this.subtitlesDownloadFormatSelectLabel.container,
								items: _.EG.map((d) => ({
									label: d.toUpperCase(),
									value: d,
									selected: d === this.data.subtitlesDownloadFormat
								}))
							}), this.subtitlesDesignDetails = new q.A({ titleHtml: E.j.get("VOTSubtitlesDesign") }), this.dialog.bodyContainer.append(this.subtitlesSettingsHeader, this.subtitlesDownloadFormatSelect.container, this.subtitlesDesignDetails.container), this.hotkeysSettingsHeader = O.A.createHeader(E.j.get("hotkeysSettings")), this.translateHotkeyButton = new Y.A({
								labelHtml: E.j.get("translateVideo"),
								key: this.data.translationHotkey
							}), this.dialog.bodyContainer.append(this.hotkeysSettingsHeader, this.translateHotkeyButton.container), this.proxySettingsHeader = O.A.createHeader(E.j.get("proxySettings")), this.proxyM3U8HostTextfield = new ee.A({
								labelHtml: E.j.get("VOTM3u8ProxyHost"),
								value: this.data.m3u8ProxyHost,
								placeholder: w.se
							}), this.proxyWorkerHostTextfield = new ee.A({
								labelHtml: E.j.get("VOTProxyWorkerHost"),
								value: this.data.proxyWorkerHost,
								placeholder: w.Pm
							});
							let p = [
								E.j.get("VOTTranslateProxyDisabled"),
								E.j.get("VOTTranslateProxyEnabled"),
								E.j.get("VOTTranslateProxyEverything")
							], m = this.data.translateProxyEnabled ?? 0, h = b.k && w.vZ.includes(b.k);
							this.proxyTranslationStatusSelectLabel = new X.A({
								icon: h ? ne.Xd : void 0,
								labelText: E.j.get("VOTTranslateProxyStatus")
							}), h && (this.proxyTranslationStatusSelectTooltip = new te.A({
								target: this.proxyTranslationStatusSelectLabel.icon,
								content: E.j.get("VOTTranslateProxyStatusDefault"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							})), this.proxyTranslationStatusSelect = new Z.A({
								selectTitle: p[m],
								dialogTitle: E.j.get("VOTTranslateProxyStatus"),
								dialogParent: this.globalPortal,
								labelElement: this.proxyTranslationStatusSelectLabel.container,
								items: p.map((d, f) => ({
									label: d,
									value: f.toString(),
									selected: f === m,
									disabled: f === 0 && j.up
								}))
							}), this.dialog.bodyContainer.append(this.proxySettingsHeader, this.proxyM3U8HostTextfield.container, this.proxyWorkerHostTextfield.container, this.proxyTranslationStatusSelect.container), this.miscSettingsHeader = O.A.createHeader(E.j.get("miscSettings")), this.translateAPIErrorsCheckbox = new K.A({
								labelHtml: E.j.get("VOTTranslateAPIErrors"),
								checked: this.data.translateAPIErrors ?? !0
							}), this.translateAPIErrorsCheckbox.hidden = E.j.lang === "ru", this.useNewAudioPlayerCheckbox = new K.A({
								labelHtml: E.j.get("VOTNewAudioPlayer"),
								checked: this.data.newAudioPlayer
							}), this.videoHandler?.audioContext || (this.useNewAudioPlayerCheckbox.disabled = !0, this.useNewAudioPlayerTooltip = new te.A({
								target: this.useNewAudioPlayerCheckbox.container,
								content: E.j.get("VOTNeedWebAudioAPI"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							}));
							let g = this.videoHandler?.site.needBypassCSP ? `${E.j.get("VOTOnlyBypassMediaCSP")} (${E.j.get("VOTMediaCSPEnabledOnSite")})` : E.j.get("VOTOnlyBypassMediaCSP");
							this.onlyBypassMediaCSPCheckbox = new K.A({
								labelHtml: g,
								checked: this.data.onlyBypassMediaCSP,
								isSubCheckbox: !0
							}), this.videoHandler?.audioContext || (this.onlyBypassMediaCSPTooltip = new te.A({
								target: this.onlyBypassMediaCSPCheckbox.container,
								content: E.j.get("VOTNeedWebAudioAPI"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							})), this.onlyBypassMediaCSPCheckbox.disabled = !this.data.newAudioPlayer && !!this.videoHandler?.audioContext, this.data.newAudioPlayer || (this.onlyBypassMediaCSPCheckbox.hidden = !0), this.translationTextServiceLabel = new X.A({
								labelText: E.j.get("VOTTranslationTextService"),
								icon: ne.w2
							});
							let v = this.data.translationService ?? w.mE;
							this.translationTextServiceSelect = new Z.A({
								selectTitle: E.j.get(`services.${v}`),
								dialogTitle: E.j.get("VOTTranslationTextService"),
								dialogParent: this.globalPortal,
								labelElement: this.translationTextServiceLabel.container,
								items: U.vN.map((d) => ({
									label: E.j.get(`services.${d}`),
									value: d,
									selected: d === v
								}))
							}), this.translationTextServiceTooltip = new te.A({
								target: this.translationTextServiceLabel.icon,
								content: E.j.get("VOTNotAffectToVoice"),
								position: "bottom",
								backgroundColor: "var(--vot-helper-ondialog)",
								parentElement: this.globalPortal
							}), this.detectServiceLabel = new X.A({ labelText: E.j.get("VOTDetectService") });
							let x = this.data.detectService ?? w.K2;
							return this.detectServiceSelect = new Z.A({
								selectTitle: E.j.get(`services.${x}`),
								dialogTitle: E.j.get("VOTDetectService"),
								dialogParent: this.globalPortal,
								labelElement: this.detectServiceLabel.container,
								items: U.qh.map((d) => ({
									label: E.j.get(`services.${d}`),
									value: d,
									selected: d === x
								}))
							}), this.appearanceDetails = new q.A({ titleHtml: E.j.get("appearance") }), this.aboutExtensionDetails = new q.A({ titleHtml: E.j.get("aboutExtension") }), this.bugReportButton = O.A.createOutlinedButton(E.j.get("VOTBugReport")), this.resetSettingsButton = O.A.createButton(E.j.get("resetSettings")), this.dialog.bodyContainer.append(this.miscSettingsHeader, this.translateAPIErrorsCheckbox.container, this.useNewAudioPlayerCheckbox.container, this.onlyBypassMediaCSPCheckbox.container, this.translationTextServiceSelect.container, this.detectServiceSelect.container, this.appearanceDetails.container, this.aboutExtensionDetails.container, this.bugReportButton, this.resetSettingsButton), this;
						}
						initUIEvents() {
							if (!this.isInitialized()) throw Error("[VOT] SettingsView isn't initialized");
							return this.accountButton.addEventListener("click", async () => {
								if (!F.d.isSupportOnlyLS) {
									if (this.accountButton.loggedIn) return await F.d.delete("account"), this.data.account = {}, this.updateAccountInfo();
									window.open(w.xW, "_blank")?.focus();
								}
							}), this.accountButton.addEventListener("click:secret", async () => {
								let d = new J.A({
									titleHtml: E.j.get("VOTLoginViaToken"),
									isTemp: !0
								});
								this.globalPortal.appendChild(d.container);
								let f = O.A.createEl("vot-block", void 0, E.j.get("VOTYandexTokenInfo")), p = new ee.A({
									labelHtml: E.j.get("VOTYandexToken"),
									value: this.data.account?.token
								});
								p.addEventListener("change", async (d) => {
									this.data.account = d ? {
										expires: Date.now() + 3153418e4,
										token: d
									} : {}, await F.d.set("account", this.data.account), this.updateAccountInfo();
								}), d.bodyContainer.append(f, p.container);
							}), this.accountButton.addEventListener("refresh", async () => {
								F.d.isSupportOnlyLS || (this.data.account = await F.d.get("account", {}), this.updateAccountInfo());
							}), this.autoTranslateCheckbox.addEventListener("change", async (d) => {
								this.data.autoTranslate = d, await F.d.set("autoTranslate", this.data.autoTranslate), A.A.log("autoTranslate value changed. New value:", d), this.onChangeAutoTranslate.dispatch(d);
							}), this.dontTranslateLanguagesCheckbox.addEventListener("change", async (d) => {
								this.data.enabledDontTranslateLanguages = d, await F.d.set("enabledDontTranslateLanguages", this.data.enabledDontTranslateLanguages), A.A.log("enabledDontTranslateLanguages value changed. New value:", d);
							}), this.dontTranslateLanguagesSelect.addEventListener("selectItem", async (d) => {
								this.data.dontTranslateLanguages = d, await F.d.set("dontTranslateLanguages", this.data.dontTranslateLanguages), A.A.log("dontTranslateLanguages value changed. New value:", d);
							}), this.autoSetVolumeCheckbox.addEventListener("change", async (d) => {
								this.data.enabledAutoVolume = d, await F.d.set("enabledAutoVolume", this.data.enabledAutoVolume), A.A.log("enabledAutoVolume value changed. New value:", d);
							}), this.autoSetVolumeSlider.addEventListener("input", async (d) => {
								this.data.autoVolume = this.autoSetVolumeSliderLabel.value = d, await F.d.set("autoVolume", this.data.autoVolume), A.A.log("autoVolume value changed. New value:", d);
							}), this.showVideoVolumeSliderCheckbox.addEventListener("change", async (d) => {
								this.data.showVideoSlider = d, await F.d.set("showVideoSlider", this.data.showVideoSlider), A.A.log("showVideoVolumeSlider value changed. New value:", d), this.onChangeShowVideoVolume.dispatch(d);
							}), this.audioBoosterCheckbox.addEventListener("change", async (d) => {
								this.data.audioBooster = d, await F.d.set("audioBooster", this.data.audioBooster), A.A.log("audioBooster value changed. New value:", d), this.onChangeAudioBooster.dispatch(d);
							}), this.syncVolumeCheckbox.addEventListener("change", async (d) => {
								this.data.syncVolume = d, await F.d.set("syncVolume", this.data.syncVolume), A.A.log("syncVolume value changed. New value:", d);
							}), this.downloadWithNameCheckbox.addEventListener("change", async (d) => {
								this.data.downloadWithName = d, await F.d.set("downloadWithName", this.data.downloadWithName), A.A.log("downloadWithName value changed. New value:", d);
							}), this.sendNotifyOnCompleteCheckbox.addEventListener("change", async (d) => {
								this.data.sendNotifyOnComplete = d, await F.d.set("sendNotifyOnComplete", this.data.sendNotifyOnComplete), A.A.log("sendNotifyOnComplete value changed. New value:", d);
							}), this.useLivelyVoiceCheckbox.addEventListener("change", async (d) => {
								this.data.useLivelyVoice = d, await F.d.set("useLivelyVoice", this.data.useLivelyVoice), A.A.log("useLivelyVoice value changed. New value:", d), this.onChangeUseLivelyVoice.dispatch(d);
							}), this.useAudioDownloadCheckbox.addEventListener("change", async (d) => {
								this.data.useAudioDownload = d, await F.d.set("useAudioDownload", this.data.useAudioDownload), A.A.log("useAudioDownload value changed. New value:", d);
							}), this.subtitlesDownloadFormatSelect.addEventListener("selectItem", async (d) => {
								this.data.subtitlesDownloadFormat = d, await F.d.set("subtitlesDownloadFormat", this.data.subtitlesDownloadFormat), A.A.log("subtitlesDownloadFormat value changed. New value:", d);
							}), this.subtitlesDesignDetails.addEventListener("click", () => {
								let d = new J.A({
									titleHtml: E.j.get("VOTSubtitlesDesign"),
									isTemp: !0
								});
								this.globalPortal.appendChild(d.container);
								let f = new K.A({
									labelHtml: E.j.get("VOTHighlightWords"),
									checked: this.data.highlightWords
								}), p = this.data.subtitlesMaxLength ?? 300, m = new $.A({
									labelText: E.j.get("VOTSubtitlesMaxLength"),
									labelEOL: ":",
									symbol: "",
									value: p
								}), h = new Q.A({
									labelHtml: m.container,
									value: p,
									min: 50,
									max: 300
								}), g = this.data.subtitlesFontSize ?? 20, _ = new $.A({
									labelText: E.j.get("VOTSubtitlesFontSize"),
									labelEOL: ":",
									symbol: "px",
									value: g
								}), v = new Q.A({
									labelHtml: _.container,
									value: g,
									min: 8,
									max: 50
								}), b = this.data.subtitlesOpacity ?? 20, x = new $.A({
									labelText: E.j.get("VOTSubtitlesOpacity"),
									labelEOL: ":",
									value: b
								}), C = new Q.A({
									labelHtml: x.container,
									value: b
								});
								d.bodyContainer.append(f.container, h.container, v.container, C.container), f.addEventListener("change", async (d) => {
									this.data.highlightWords = d, await F.d.set("highlightWords", this.data.highlightWords), A.A.log("highlightWords value changed. New value:", d), this.onChangeSubtitlesHighlightWords.dispatch(d);
								}), h.addEventListener("input", (d) => {
									m.value = d, this.data.subtitlesMaxLength = d, F.d.set("subtitlesMaxLength", this.data.subtitlesMaxLength), A.A.log("highlightWords value changed. New value:", d), this.onInputSubtitlesMaxLength.dispatch(d);
								}), v.addEventListener("input", (d) => {
									_.value = d, this.data.subtitlesFontSize = d, F.d.set("subtitlesFontSize", this.data.subtitlesFontSize), A.A.log("subtitlesFontSize value changed. New value:", d), this.onInputSubtitlesFontSize.dispatch(d);
								}), C.addEventListener("input", (d) => {
									x.value = d, this.data.subtitlesOpacity = d, F.d.set("subtitlesOpacity", this.data.subtitlesOpacity), A.A.log("subtitlesOpacity value changed. New value:", d), this.onInputSubtitlesBackgroundOpacity.dispatch(d);
								});
							}), this.translateHotkeyButton.addEventListener("change", async (d) => {
								this.data.translationHotkey = d, await F.d.set("translationHotkey", this.data.translationHotkey), A.A.log("translationHotkey value changed. New value:", d);
							}), this.proxyM3U8HostTextfield.addEventListener("change", async (d) => {
								this.data.m3u8ProxyHost = d || w.se, await F.d.set("m3u8ProxyHost", this.data.m3u8ProxyHost), A.A.log("m3u8ProxyHost value changed. New value:", this.data.m3u8ProxyHost);
							}), this.proxyWorkerHostTextfield.addEventListener("change", async (d) => {
								this.data.proxyWorkerHost = d || w.Pm, await F.d.set("proxyWorkerHost", this.data.proxyWorkerHost), A.A.log("proxyWorkerHost value changed. New value:", this.data.proxyWorkerHost), this.onChangeProxyWorkerHost.dispatch(d);
							}), this.proxyTranslationStatusSelect.addEventListener("selectItem", async (d) => {
								this.data.translateProxyEnabled = Number.parseInt(d), await F.d.set("translateProxyEnabled", this.data.translateProxyEnabled), await F.d.set("translateProxyEnabledDefault", !1), A.A.log("translateProxyEnabled value changed. New value:", this.data.translateProxyEnabled), this.onSelectItemProxyTranslationStatus.dispatch(d);
							}), this.translateAPIErrorsCheckbox.addEventListener("change", async (d) => {
								this.data.translateAPIErrors = d, await F.d.set("translateAPIErrors", this.data.translateAPIErrors), A.A.log("translateAPIErrors value changed. New value:", d);
							}), this.useNewAudioPlayerCheckbox.addEventListener("change", async (d) => {
								this.data.newAudioPlayer = d, await F.d.set("newAudioPlayer", this.data.newAudioPlayer), A.A.log("newAudioPlayer value changed. New value:", d), this.onlyBypassMediaCSPCheckbox.disabled = this.onlyBypassMediaCSPCheckbox.hidden = !d, this.onChangeUseNewAudioPlayer.dispatch(d);
							}), this.onlyBypassMediaCSPCheckbox.addEventListener("change", async (d) => {
								this.data.onlyBypassMediaCSP = d, await F.d.set("onlyBypassMediaCSP", this.data.onlyBypassMediaCSP), A.A.log("onlyBypassMediaCSP value changed. New value:", d), this.onChangeOnlyBypassMediaCSP.dispatch(d);
							}), this.translationTextServiceSelect.addEventListener("selectItem", async (d) => {
								this.data.translationService = d, await F.d.set("translationService", this.data.translationService), A.A.log("translationService value changed. New value:", d), this.onSelectItemTranslationTextService.dispatch(d);
							}), this.detectServiceSelect.addEventListener("selectItem", async (d) => {
								this.data.detectService = d, await F.d.set("detectService", this.data.detectService), A.A.log("detectService value changed. New value:", d);
							}), this.appearanceDetails.addEventListener("click", () => {
								let d = new J.A({
									titleHtml: E.j.get("appearance"),
									isTemp: !0
								});
								this.globalPortal.appendChild(d.container);
								let f = new K.A({
									labelHtml: E.j.get("VOTShowPiPButton"),
									checked: this.data.showPiPButton
								});
								f.hidden = !(0, W.Bs)();
								let p = (this.data.autoHideButtonDelay ?? w.qU) / 1e3, m = new $.A({
									labelText: E.j.get("autoHideButtonDelay"),
									labelEOL: ":",
									symbol: ` ${E.j.get("secs")}`,
									value: p
								}), h = new Q.A({
									labelHtml: m.container,
									value: p,
									min: .1,
									max: 3,
									step: .1
								}), g = new X.A({
									labelText: E.j.get("buttonPositionInWidePlayer"),
									icon: ne.w2
								}), _ = new Z.A({
									selectTitle: E.j.get("buttonPositionInWidePlayer"),
									dialogTitle: E.j.get("buttonPositionInWidePlayer"),
									labelElement: g.container,
									dialogParent: this.globalPortal,
									items: D.X.map((d) => ({
										label: E.j.get(`position.${d}`),
										value: d,
										selected: d === this.data.buttonPos
									}))
								}), v = new te.A({
									target: g.icon,
									content: E.j.get("minButtonPositionContainer"),
									position: "bottom",
									backgroundColor: "var(--vot-helper-ondialog)",
									parentElement: this.globalPortal
								}), b = new X.A({ labelText: E.j.get("VOTMenuLanguage") }), x = new Z.A({
									selectTitle: E.j.get(`langs.${E.j.langOverride}`),
									dialogTitle: E.j.get("VOTMenuLanguage"),
									labelElement: b.container,
									dialogParent: this.globalPortal,
									items: Z.A.genLanguageItems(E.j.getAvailableLangs(), E.j.langOverride)
								});
								d.bodyContainer.append(f.container, h.container, _.container, x.container), d.addEventListener("close", () => {
									v.release();
								}), f.addEventListener("change", async (d) => {
									this.data.showPiPButton = d, await F.d.set("showPiPButton", this.data.showPiPButton), A.A.log("showPiPButton value changed. New value:", d), this.onChangeShowPiPButton.dispatch(d);
								}), h.addEventListener("input", async (d) => {
									m.value = d;
									let f = Math.round(d * 1e3);
									A.A.log("autoHideButtonDelay value changed. New value:", f), this.data.autoHideButtonDelay = f, await F.d.set("autoHideButtonDelay", this.data.autoHideButtonDelay), this.onInputAutoHideButtonDelay.dispatch(d);
								}), _.addEventListener("selectItem", async (d) => {
									A.A.log("buttonPos value changed. New value:", d), this.data.buttonPos = d, await F.d.set("buttonPos", this.data.buttonPos), this.onSelectItemButtonPosition.dispatch(d);
								}), x.addEventListener("selectItem", async (d) => {
									let f = await E.j.changeLang(d);
									f && (this.data.localeUpdatedAt = await F.d.get("localeUpdatedAt", 0), this.onSelectItemMenuLanguage.dispatch(d));
								});
							}), this.aboutExtensionDetails.addEventListener("click", () => {
								let d = new J.A({
									titleHtml: E.j.get("aboutExtension"),
									isTemp: !0
								});
								this.globalPortal.appendChild(d.container);
								let f = O.A.createInformation(`${E.j.get("VOTVersion")}:`, GM_info.script.version || E.j.get("notFound")), p = O.A.createInformation(`${E.j.get("VOTAuthors")}:`, GM_info.script.author ?? E.j.get("notFound")), m = O.A.createInformation(`${E.j.get("VOTLoader")}:`, `${GM_info.scriptHandler} v${GM_info.version}`), h = O.A.createInformation(`${E.j.get("VOTBrowser")}:`, `${W.R5.browser.name} ${W.R5.browser.version} (${W.R5.os.name} ${W.R5.os.version})`), g = new Date((this.data.localeUpdatedAt ?? 0) * 1e3).toLocaleString(), _ = (0, v.qy)`${this.data.localeHash}<br />(${E.j.get("VOTUpdatedAt")}
        ${g})`, b = O.A.createInformation(`${E.j.get("VOTLocaleHash")}:`, _), x = O.A.createOutlinedButton(E.j.get("VOTUpdateLocaleFiles"));
								d.bodyContainer.append(f.container, p.container, m.container, h.container, b.container, x), x.addEventListener("click", async () => {
									await F.d.set("localeHash", ""), await E.j.update(!0), window.location.reload();
								});
							}), this.bugReportButton.addEventListener("click", () => {
								this.onClickBugReport.dispatch();
							}), this.resetSettingsButton.addEventListener("click", () => {
								this.onClickResetSettings.dispatch();
							}), this;
						}
						initDebugUI() {
							return this;
						}
						addEventListener(d, f) {
							switch (d) {
								case "click:bugReport":
									this.onClickBugReport.addListener(f);
									break;
								case "click:resetSettings":
									this.onClickResetSettings.addListener(f);
									break;
								case "update:account":
									this.onUpdateAccount.addListener(f);
									break;
								case "change:autoTranslate":
									this.onChangeAutoTranslate.addListener(f);
									break;
								case "change:showVideoVolume":
									this.onChangeShowVideoVolume.addListener(f);
									break;
								case "change:audioBuster":
									this.onChangeAudioBooster.addListener(f);
									break;
								case "change:useLivelyVoice":
									this.onChangeUseLivelyVoice.addListener(f);
									break;
								case "change:subtitlesHighlightWords":
									this.onChangeSubtitlesHighlightWords.addListener(f);
									break;
								case "change:proxyWorkerHost":
									this.onChangeProxyWorkerHost.addListener(f);
									break;
								case "change:useNewAudioPlayer":
									this.onChangeUseNewAudioPlayer.addListener(f);
									break;
								case "change:onlyBypassMediaCSP":
									this.onChangeOnlyBypassMediaCSP.addListener(f);
									break;
								case "change:showPiPButton":
									this.onChangeShowPiPButton.addListener(f);
									break;
								case "input:subtitlesMaxLength":
									this.onInputSubtitlesMaxLength.addListener(f);
									break;
								case "input:subtitlesFontSize":
									this.onInputSubtitlesFontSize.addListener(f);
									break;
								case "input:subtitlesBackgroundOpacity":
									this.onInputSubtitlesBackgroundOpacity.addListener(f);
									break;
								case "input:autoHideButtonDelay":
									this.onInputAutoHideButtonDelay.addListener(f);
									break;
								case "select:proxyTranslationStatus":
									this.onSelectItemProxyTranslationStatus.addListener(f);
									break;
								case "select:translationTextService":
									this.onSelectItemTranslationTextService.addListener(f);
									break;
								case "select:buttonPosition":
									this.onSelectItemButtonPosition.addListener(f);
									break;
								case "select:menuLanguage":
									this.onSelectItemMenuLanguage.addListener(f);
									break;
							}
							return this;
						}
						removeEventListener(d, f) {
							switch (d) {
								case "click:bugReport":
									this.onClickBugReport.removeListener(f);
									break;
								case "click:resetSettings":
									this.onClickResetSettings.removeListener(f);
									break;
								case "update:account":
									this.onUpdateAccount.removeListener(f);
									break;
								case "change:autoTranslate":
									this.onChangeAutoTranslate.removeListener(f);
									break;
								case "change:showVideoVolume":
									this.onChangeShowVideoVolume.removeListener(f);
									break;
								case "change:audioBuster":
									this.onChangeAudioBooster.removeListener(f);
									break;
								case "change:useLivelyVoice":
									this.onChangeUseLivelyVoice.removeListener(f);
									break;
								case "change:subtitlesHighlightWords":
									this.onChangeSubtitlesHighlightWords.removeListener(f);
									break;
								case "change:proxyWorkerHost":
									this.onChangeProxyWorkerHost.removeListener(f);
									break;
								case "change:useNewAudioPlayer":
									this.onChangeUseNewAudioPlayer.removeListener(f);
									break;
								case "change:onlyBypassMediaCSP":
									this.onChangeOnlyBypassMediaCSP.removeListener(f);
									break;
								case "change:showPiPButton":
									this.onChangeShowPiPButton.removeListener(f);
									break;
								case "input:subtitlesMaxLength":
									this.onInputSubtitlesMaxLength.removeListener(f);
									break;
								case "input:subtitlesFontSize":
									this.onInputSubtitlesFontSize.removeListener(f);
									break;
								case "input:subtitlesBackgroundOpacity":
									this.onInputSubtitlesBackgroundOpacity.removeListener(f);
									break;
								case "input:autoHideButtonDelay":
									this.onInputAutoHideButtonDelay.removeListener(f);
									break;
								case "select:proxyTranslationStatus":
									this.onSelectItemProxyTranslationStatus.removeListener(f);
									break;
								case "select:translationTextService":
									this.onSelectItemTranslationTextService.removeListener(f);
									break;
								case "select:buttonPosition":
									this.onSelectItemButtonPosition.removeListener(f);
									break;
								case "select:menuLanguage":
									this.onSelectItemMenuLanguage.removeListener(f);
									break;
							}
							return this;
						}
						releaseUI(d = !1) {
							if (!this.isInitialized()) throw Error("[VOT] SettingsView isn't initialized");
							return this.dialog.remove(), this.accountButtonRefreshTooltip?.release(), this.accountButtonTokenTooltip?.release(), this.audioBoosterTooltip?.release(), this.useAudioDownloadCheckboxTooltip?.release(), this.useNewAudioPlayerTooltip?.release(), this.onlyBypassMediaCSPTooltip?.release(), this.translationTextServiceTooltip?.release(), this.proxyTranslationStatusSelectTooltip?.release(), this.initialized = d, this;
						}
						releaseUIEvents(d = !1) {
							if (!this.isInitialized()) throw Error("[VOT] SettingsView isn't initialized");
							return this.onClickBugReport.clear(), this.onClickResetSettings.clear(), this.onUpdateAccount.clear(), this.onChangeAutoTranslate.clear(), this.onChangeShowVideoVolume.clear(), this.onChangeAudioBooster.clear(), this.onChangeUseLivelyVoice.clear(), this.onChangeSubtitlesHighlightWords.clear(), this.onChangeProxyWorkerHost.clear(), this.onChangeUseNewAudioPlayer.clear(), this.onChangeOnlyBypassMediaCSP.clear(), this.onChangeShowPiPButton.clear(), this.onInputSubtitlesMaxLength.clear(), this.onInputSubtitlesFontSize.clear(), this.onInputSubtitlesBackgroundOpacity.clear(), this.onInputAutoHideButtonDelay.clear(), this.onSelectItemProxyTranslationStatus.clear(), this.onSelectItemTranslationTextService.clear(), this.onSelectItemButtonPosition.clear(), this.onSelectItemMenuLanguage.clear(), this.initialized = d, this;
						}
						release() {
							return this.releaseUI(!0), this.releaseUIEvents(!1), this;
						}
						updateAccountInfo() {
							if (!this.isInitialized()) throw Error("[VOT] SettingsView isn't initialized");
							let d = !!this.data.account?.token;
							return this.accountButton.avatarId = this.data.account?.avatarId, this.useLivelyVoiceTooltip.hidden = this.accountButton.loggedIn = d, this.accountButton.username = this.data.account?.username, this.useLivelyVoiceCheckbox.disabled = !d, this.onUpdateAccount.dispatch(this.data.account), this;
						}
						open() {
							if (!this.isInitialized()) throw Error("[VOT] SettingsView isn't initialized");
							return this.dialog.open();
						}
						close() {
							if (!this.isInitialized()) throw Error("[VOT] SettingsView isn't initialized");
							return this.dialog.close();
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/VOTLocalizedError.js": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, { n: () => VOTLocalizedError });
					var h = p("./src/localization/localizationProvider.ts"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					class VOTLocalizedError extends Error {
						constructor(d) {
							super(h.j.getDefault(d)), this.name = "VOTLocalizedError", this.unlocalizedMessage = d, this.localizedMessage = h.j.get(d);
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/VideoObserver.js": (d, f, p) => {
			"use strict";
			p.d(f, { c: () => VideoObserver });
			var m = p("./node_modules/requestidlecallback-polyfill/index.js"), h = p("./node_modules/@vot.js/shared/dist/data/alternativeUrls.js"), g = p("./src/core/eventImpl.ts"), _ = p("./src/utils/debug.ts");
			class VideoObserver {
				static adKeywords = new Set([
					"advertise",
					"advertisement",
					"promo",
					"sponsor",
					"banner",
					"commercial",
					"preroll",
					"midroll",
					"postroll",
					"ad-container",
					"sponsored"
				]);
				constructor() {
					this.videoCache = new WeakSet(), this.observedNodes = {
						added: new Set(),
						removed: new Set()
					}, this.onVideoAdded = new g.Z(), this.onVideoRemoved = new g.Z(), this.observer = new MutationObserver(this.handleMutations);
				}
				isAdRelated(d) {
					let f = [
						"class",
						"id",
						"title"
					];
					for (let p of f) {
						let f = d.getAttribute(p);
						if (f && VideoObserver.adKeywords.has(f.toLowerCase())) return !0;
					}
					return !1;
				}
				hasAudio(d) {
					return h.sx.includes(window.location.hostname) ? !d.muted : d.mozHasAudio === void 0 ? d.webkitAudioDecodedByteCount === void 0 ? "audioTracks" in d && d.audioTracks.length > 0 || !d.muted : d.webkitAudioDecodedByteCount > 0 : d.mozHasAudio;
				}
				isValidVideo(d) {
					if (this.isAdRelated(d)) return !1;
					let f = d.parentElement;
					for (; f && !this.isAdRelated(f);) f = f.parentElement;
					return f ? !1 : this.hasAudio(d) ? !0 : (_.A.log("Ignoring video without audio:", d), !1);
				}
				traverseDOM(d) {
					if (d instanceof HTMLVideoElement) {
						this.checkVideoState(d);
						return;
					}
					let f = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT, { acceptNode: (d) => d.tagName === "VIDEO" || d.shadowRoot ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
					for (; f.nextNode();) {
						let d = f.currentNode;
						d instanceof HTMLVideoElement && this.checkVideoState(d), d.shadowRoot && this.traverseDOM(d.shadowRoot);
					}
				}
				checkVideoState(d) {
					if (this.videoCache.has(d)) return;
					this.videoCache.add(d);
					let onLoadedData = () => {
						this.isValidVideo(d) && this.onVideoAdded.dispatch(d), d.removeEventListener("loadeddata", onLoadedData);
					}, onEmptied = () => {
						d.isConnected || (this.onVideoRemoved.dispatch(d), this.videoCache.delete(d), d.removeEventListener("emptied", onEmptied));
					};
					d.addEventListener("emptied", onEmptied), d.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA ? onLoadedData() : d.addEventListener("loadeddata", onLoadedData);
				}
				handleMutations = (d) => {
					for (let f of d) {
						if (f.type !== "childList") continue;
						for (let d of f.addedNodes) this.observedNodes.added.add(d);
						for (let d of f.removedNodes) this.observedNodes.removed.add(d);
					}
					window.requestIdleCallback(() => {
						for (let d of this.observedNodes.added) this.traverseDOM(d);
						for (let d of this.observedNodes.removed) if (d.querySelectorAll) {
							let f = d.querySelectorAll("video");
							for (let d of f) d.isConnected || (this.onVideoRemoved.dispatch(d), this.videoCache.delete(d));
						}
						this.observedNodes.added.clear(), this.observedNodes.removed.clear();
					}, { timeout: 1e3 });
				};
				enable() {
					this.observer.observe(document.documentElement, {
						childList: !0,
						subtree: !0
					}), this.traverseDOM(document.documentElement);
				}
				disable() {
					this.observer.disconnect(), this.videoCache = new WeakSet();
				}
			}
		},
		"./src/utils/debug.ts": (d, f, p) => {
			"use strict";
			p.d(f, { A: () => m });
			let m = { log: (...d) => {} };
		},
		"./src/utils/gm.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						B0: () => C,
						G3: () => GM_fetch,
						O6: () => x,
						up: () => b,
						yx: () => w
					});
					var h = p("./src/config/config.js"), g = p("./src/utils/debug.ts"), _ = p("./src/utils/utils.ts"), v = d([_]);
					_ = (v.then ? (await v)() : v)[0];
					let b = GM_info?.scriptHandler && !h.Wl.includes(GM_info.scriptHandler), x = typeof GM < "u", C = typeof unsafeWindow < "u", w = typeof GM_xmlhttpRequest < "u";
					async function GM_fetch(d, f = {}) {
						let { timeout: p = 15e3,...m } = f, h = new AbortController();
						try {
							if (typeof d == "string" && d.includes("api.browser.yandex.ru")) throw Error("Preventing yandex cors");
							return await fetch(d, {
								signal: h.signal,
								...m
							});
						} catch (f) {
							g.A.log("GM_fetch preventing CORS by GM_xmlhttpRequest", f.message);
							let h = (0, _.dJ)(m.headers);
							return new Promise((f, g) => {
								GM_xmlhttpRequest({
									method: m.method || "GET",
									url: d.toString(),
									responseType: "blob",
									data: m.body,
									timeout: p,
									headers: h,
									onload: (d) => {
										let p = d.responseHeaders.split(/\r?\n/).reduce((d, f) => {
											let [, p, m] = f.match(/^([\w-]+): (.+)$/) || [];
											return p && (d[p] = m), d;
										}, {}), m = new Response(d.response, {
											status: d.status,
											headers: p
										});
										Object.defineProperty(m, "url", { value: d.finalUrl ?? "" }), f(m);
									},
									ontimeout: () => g(Error("Timeout")),
									onerror: (d) => g(Error(d)),
									onabort: () => g(Error("AbortError"))
								});
							});
						}
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/iframeConnector.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						IA: () => ensureServiceIframe,
						Io: () => initIframeService,
						Ok: () => generateMessageId,
						WF: () => _,
						d4: () => isIframe,
						hG: () => requestDataFromMainWorld,
						yB: () => hasServiceIframe
					});
					var h = p("./src/utils/utils.ts"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					let _ = "vot_iframe", isIframe = () => window.self !== window.top, generateMessageId = () => `main-world-bridge-${performance.now()}-${Math.random()}`, hasServiceIframe = (d) => document.getElementById(d);
					async function setupServiceIframe(d, f, p) {
						let m = document.createElement("iframe");
						m.style.position = "absolute", m.style.zIndex = "-1", m.style.display = "none", m.id = f, m.src = `${d}#${_}`, document.body.appendChild(m);
						let g = new Promise((d) => {
							let handleMessage = ({ data: f }) => {
								f.messageType === `say-${p}-iframe-is-ready` && (window.removeEventListener("message", handleMessage), d(!0));
							};
							window.addEventListener("message", handleMessage);
						});
						return await Promise.race([g, (0, h.wR)(15e3, "Service iframe did not have time to be ready")]), m;
					}
					async function ensureServiceIframe(d, f, p, m) {
						if (f.includes("#")) throw Error("The src parameter should not contain a hash (#) character.");
						let h = hasServiceIframe(p);
						if (h) {
							if (d !== null) return d;
							h?.remove();
						}
						return d = await setupServiceIframe(f, p, m), d;
					}
					function initIframeService(d, f) {
						window.addEventListener("message", f), window.parent.postMessage({
							messageType: `say-${d}-iframe-is-ready`,
							messageDirection: "response"
						}, "*");
					}
					function requestDataFromMainWorld(d, f) {
						let p = generateMessageId();
						return new Promise((m, h) => {
							let handleMessage = ({ data: f }) => {
								f?.messageId === p && f.messageType === d && f.messageDirection === "response" && (window.removeEventListener("message", handleMessage), f.error ? h(f.error) : m(f.payload));
							};
							window.addEventListener("message", handleMessage), window.postMessage({
								messageId: p,
								messageType: d,
								messageDirection: "request",
								...f !== void 0 && { payload: f }
							}, "*");
						});
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/localization.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						o: () => secsToStrTime,
						v: () => v
					});
					var h = p("./src/localization/localizationProvider.ts"), g = d([h]);
					h = (g.then ? (await g)() : g)[0];
					let _ = .66, v = navigator.language?.substring(0, 2).toLowerCase() || "en";
					function secsToStrTime(d) {
						let f = Math.floor(d / 60), p = Math.floor(d % 60), m = p / 60;
						if (m >= _ && (f += 1, p = 0), f >= 60) return h.j.get("translationTakeMoreThanHour");
						if (f <= 1) return h.j.get("translationTakeAboutMinute");
						let g = String(f);
						return f !== 11 && f % 10 == 1 ? h.j.get("translationTakeApproximatelyMinute2").replace("{0}", g) : ![
							12,
							13,
							14
						].includes(f) && [
							2,
							3,
							4
						].includes(f % 10) ? h.j.get("translationTakeApproximatelyMinute").replace("{0}", g) : h.j.get("translationTakeApproximatelyMinutes").replace("{0}", g);
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/storage.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						_: () => updateConfig,
						d: () => w
					});
					var h = p("./src/config/config.js"), g = p("./src/localization/localizationProvider.ts"), _ = p("./src/types/storage.ts"), v = p("./src/utils/debug.ts"), b = p("./src/utils/gm.ts"), x = d([g, b]);
					[g, b] = x.then ? (await x)() : x;
					let C = {
						numToBool: [
							["autoTranslate"],
							["dontTranslateYourLang", "enabledDontTranslateLanguages"],
							["autoSetVolumeYandexStyle", "enabledAutoVolume"],
							["showVideoSlider"],
							["syncVolume"],
							["downloadWithName"],
							["sendNotifyOnComplete"],
							["highlightWords"],
							["onlyBypassMediaCSP"],
							["newAudioPlayer"],
							["showPiPButton"],
							["translateAPIErrors"],
							["audioBooster"],
							["useNewModel", "useLivelyVoice"]
						],
						number: [["autoVolume"]],
						array: [["dontTranslateLanguage", "dontTranslateLanguages"]],
						string: [
							["hotkeyButton", "translationHotkey"],
							["locale-lang-override", "localeLangOverride"],
							["locale-lang", "localeLang"]
						]
					};
					function getCompatCategory(d, f, p) {
						if (typeof f == "number") return p?.number.some((f) => f[0] === d) ? "number" : "numToBool";
						if (Array.isArray(f)) return "array";
						if (typeof f == "string" || f === null) return "string";
					}
					function convertByCompatCategory(d, f) {
						return [
							"string",
							"array",
							"number"
						].includes(d) ? f : !!f;
					}
					async function updateConfig(d) {
						if (d.compatVersion === h.r4) return d;
						let f = Object.values(C).flat().reduce((d, f) => (f[1] && (d[f[0]] = void 0), d), {}), p = await w.getValues(f), m = Object.fromEntries(Object.entries(p).filter(([d, f]) => f !== void 0)), _ = {
							...d,
							...m
						}, v = Object.keys(_).reduce((d, f) => (d[f] = void 0, d), {}), b = await w.getValues(v), x = d;
						for (let [d, f] of Object.entries(_)) {
							let p = getCompatCategory(d, f, C);
							if (!p) continue;
							let h = C[p].find((f) => f[0] === d);
							if (!h) continue;
							let _ = h[1] ?? d;
							if (b[d] === void 0) continue;
							let v = convertByCompatCategory(p, f);
							d === "autoVolume" && f < 1 && (v = Math.round(f * 100)), x[_] = v, m[d] !== void 0 && await w.delete(d), _ === "localeLangOverride" && await g.j.changeLang(f), await w.set(_, v);
						}
						return {
							...x,
							compatVersion: "2025-05-09"
						};
					}
					let w = new class {
						supportGM;
						supportGMPromises;
						supportGMGetValues;
						constructor() {
							this.supportGM = typeof GM_getValue == "function", this.supportGMPromises = b.O6 && typeof GM?.getValue == "function", this.supportGMGetValues = b.O6 && typeof GM?.getValues == "function", v.A.log(`[VOT Storage] GM Promises: ${this.supportGMPromises} | GM: ${this.supportGM}`);
						}
						get isSupportOnlyLS() {
							return !this.supportGM && !this.supportGMPromises;
						}
						syncGet(d, f) {
							if (this.supportGM) return GM_getValue(d, f);
							let p = (window.localStorage.getItem(d));
							if (!p) return f;
							try {
								return JSON.parse(p);
							} catch {
								return f;
							}
						}
						async get(d, f) {
							return this.supportGMPromises ? await GM.getValue(d, f) : Promise.resolve(this.syncGet(d, f));
						}
						async getValues(d) {
							return this.supportGMGetValues ? await GM.getValues(d) : Object.fromEntries(await Promise.all(Object.entries(d).map(async ([d, f]) => {
								let p = await this.get(d, f);
								return [d, p];
							})));
						}
						syncSet(d, f) {
							return this.supportGM ? GM_setValue(d, f) : window.localStorage.setItem(d, JSON.stringify(f));
						}
						async set(d, f) {
							return this.supportGMPromises ? await GM.setValue(d, f) : Promise.resolve(this.syncSet(d, f));
						}
						syncDelete(d) {
							return this.supportGM ? GM_deleteValue(d) : window.localStorage.removeItem(d);
						}
						async delete(d) {
							return this.supportGMPromises ? await GM.deleteValue(d) : Promise.resolve(this.syncDelete(d));
						}
						syncList() {
							return this.supportGM ? GM_listValues() : _.w;
						}
						async list() {
							return this.supportGMPromises ? await GM.listValues() : Promise.resolve(this.syncList());
						}
					}();
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/translateApis.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						Tl: () => translate,
						qh: () => E,
						vN: () => D
					});
					var h = p("./src/config/config.js"), g = p("./src/utils/gm.ts"), _ = p("./src/utils/storage.ts"), v = p("./node_modules/@google/genai/dist/web/index.mjs"), b = d([g, _]);
					[g, _] = b.then ? (await b)() : b;
					let x = new class {
						isFOSWLYError(d) {
							return Object.hasOwn(d, "error");
						}
						async request(d, f = {}) {
							try {
								let p = await ((0, g.G3)(`${h.k$}${d}`, {
									timeout: 3e3,
									...f
								})), m = await (p.json());
								if (this.isFOSWLYError(m)) throw m.error;
								return m;
							} catch (d) {
								console.error(`[VOT] Failed to get data from FOSWLY Translate API, because ${d.message}`);
								return;
							}
						}
						async translateMultiple(d, f, p) {
							let m = await (this.request("/translate", {
								method: "POST",
								headers: { "Content-Type": "application/json" },
								body: JSON.stringify({
									text: d,
									lang: f,
									service: p
								})
							}));
							return m ? m.translations : d;
						}
						async translate(d, f, p) {
							let m = await (this.request(`/translate?${new URLSearchParams({
								text: d,
								lang: f,
								service: p
							})}`));
							return m ? m.translations[0] : d;
						}
						async detect(d, f) {
							let p = await (this.request(`/detect?${new URLSearchParams({
								text: d,
								service: f
							})}`));
							return p ? p.lang : "en";
						}
					}(), C = { async detect(d) {
						try {
							let f = await (0, g.G3)(h.sl, {
								method: "POST",
								body: d,
								timeout: 3e3
							});
							return await f.text();
						} catch (d) {
							return console.error(`[VOT] Error getting lang from text, because ${d.message}`), "en";
						}
					} }, w = new class {
						ai = null;
						model;
						apiKey = null;
						constructor() {
							this.model = "models/gemini-2.5-flash-lite";
						}
						async initializeApiKey() {
							if (this.apiKey === null) try {
								let d = await (Promise.resolve().then(function webpackMissingModule() {
									var d = Error("Cannot find module './storage.js'");
									throw d.code = "MODULE_NOT_FOUND", d;
								})), f = d.votStorage;
								this.apiKey = await f.get("geminiApiKey", ""), this.apiKey && this.apiKey.trim() !== "" ? this.ai = new v.M4({ apiKey: this.apiKey }) : console.warn("[VOT] Gemini API key not found in storage");
							} catch (d) {
								console.error("[VOT] Error initializing Gemini API key:", d), this.apiKey = "";
							}
						}
						async translate(d, f) {
							try {
								if (await this.initializeApiKey(), !this.ai) return console.warn("[VOT] Gemini API key not found, returning original text"), d;
								let p = [{ googleSearch: {} }], m = {
									thinkingConfig: { thinkingBudget: 24576 },
									tools: p
								}, h = [{
									role: "user",
									parts: [{ text: `Translate the following text to ${f}. Return only the translated text without any additional comments or explanations:\n\n${d}` }]
								}], g = await (this.ai.models.generateContentStream({
									model: this.model,
									config: m,
									contents: h
								})), _ = "";
								for await (let d of g) _ += d.text;
								return _.trim();
							} catch (f) {
								return console.error(`[VOT] Error translating with Gemini: ${f.message}`), d;
							}
						}
						async updateApiKey(d) {
							this.apiKey = d, d && d.trim() !== "" ? this.ai = new v.M4({ apiKey: d }) : this.ai = null;
							try {
								let f = await (Promise.resolve().then(function webpackMissingModule() {
									var d = Error("Cannot find module './storage.js'");
									throw d.code = "MODULE_NOT_FOUND", d;
								})), p = f.votStorage;
								await p.set("geminiApiKey", d);
							} catch (d) {
								console.error("[VOT] Error saving Gemini API key to storage:", d);
							}
						}
						hasApiKey() {
							return this.apiKey !== null && this.apiKey.trim() !== "";
						}
					}();
					async function translate(d, f = "", p = "ru") {
						let m = await _.d.get("translationService", h.mE);
						switch (m) {
							case "yandexbrowser":
							case "msedge": {
								let h = f && p ? `${f}-${p}` : p;
								return Array.isArray(d) ? await x.translateMultiple(d, h, m) : await x.translate(d, h, m);
							}
							case "gemini":
								if (Array.isArray(d)) {
									let f = [];
									for (let m of d) {
										let d = await w.translate(m, p);
										f.push(d);
									}
									return f;
								}
								return await w.translate(d, p);
							default: return d;
						}
					}
					async function detect(d) {
						let f = await votStorage.get("detectService", defaultDetectService);
						switch (f) {
							case "yandexbrowser":
							case "msedge": return await x.detect(d, f);
							case "rust-server": return await C.detect(d);
							default: return "en";
						}
					}
					let T = ["yandexbrowser", "msedge"], E = [...T, "rust-server"], D = [...T, "gemini"];
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/tts.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						D4: () => synthesizeSpeech,
						O2: () => getVoiceByLanguage,
						ZN: () => synthesizeSpeechStream
					});
					var h = p("./src/utils/storage.ts"), g = p("./node_modules/edge-tts-universal/dist/browser.js"), _ = d([h]);
					h = (_.then ? (await _)() : _)[0];
					let b = [
						{
							name: "en-US-JennyNeural",
							lang: "en-US",
							gender: "Female"
						},
						{
							name: "en-US-GuyNeural",
							lang: "en-US",
							gender: "Male"
						},
						{
							name: "uk-UA-OstapNeural",
							lang: "uk-UA",
							gender: "Male"
						},
						{
							name: "uk-UA-PolinaNeural",
							lang: "uk-UA",
							gender: "Female"
						},
						{
							name: "ru-RU-SvetlanaNeural",
							lang: "ru-RU",
							gender: "Female"
						},
						{
							name: "ru-RU-DmitryNeural",
							lang: "ru-RU",
							gender: "Male"
						}
					];
					async function getAvailableVoices() {
						try {
							let d = await g.default.getVoices();
							return d.map((d) => ({
								name: d.ShortName,
								lang: d.Locale,
								gender: d.Gender
							}));
						} catch (d) {
							return console.warn("[VOT] Failed to get voices from Edge TTS, using default list", d), b;
						}
					}
					async function synthesizeSpeech(d) {
						try {
							let { text: f, voice: p = "en-US-JennyNeural", rate: m = 1, volume: h = 1, pitch: _ = 1 } = d, v = new g.default({
								voice: p,
								rate: Math.round((m - 1) * 100),
								volume: Math.round((h - 1) * 100),
								pitch: Math.round((_ - 1) * 100)
							}), b = await v.toArrayBuffer(f);
							return {
								audioBuffer: b,
								metadata: { wordBoundaries: [] }
							};
						} catch (d) {
							throw console.error("[VOT] Error synthesizing speech", d), d;
						}
					}
					async function synthesizeSpeechStream(d, f) {
						try {
							let { text: p, voice: m = "en-US-JennyNeural", rate: h = 1, volume: _ = 1, pitch: v = 1 } = d, b = new g.default({
								voice: m,
								rate: Math.round((h - 1) * 100),
								volume: Math.round((_ - 1) * 100),
								pitch: Math.round((v - 1) * 100)
							}), x = await b.toStream(p);
							for await (let d of x) f && f(d);
						} catch (d) {
							throw console.error("[VOT] Error synthesizing speech stream", d), d;
						}
					}
					async function getVoiceByLanguage(d) {
						let f = await getAvailableVoices(), p = f.find((f) => f.lang.startsWith(d));
						return p ? p.name : "en-US-JennyNeural";
					}
					async function getTTSSettings() {
						let d = await h.d.get("ttsSettings", {
							voice: "en-US-JennyNeural",
							rate: 1,
							volume: 1,
							pitch: 1,
							service: "edge-tts"
						});
						return d;
					}
					var v = {
						synthesizeSpeech,
						synthesizeSpeechStream,
						getAvailableVoices,
						getVoiceByLanguage,
						getTTSSettings,
						availableVoices: b
					};
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/utils.ts": (d, f, p) => {
			"use strict";
			p.a(d, async (d, m) => {
				try {
					p.d(f, {
						Bs: () => isPiPAvailable,
						CK: () => initHls,
						Eh: () => exitFullscreen,
						GW: () => toFlatObj,
						HD: () => T,
						Le: () => clearFileName,
						MR: () => downloadTranslation,
						R5: () => E,
						UV: () => waitForCondition,
						WN: () => downloadBlob,
						Wo: () => openDownloadTranslation,
						dJ: () => getHeaders,
						lg: () => getTimestamp,
						qE: () => clamp,
						wR: () => timeout
					});
					var h = p("./node_modules/bowser/es5.js"), g = p.n(h), _ = p("./node_modules/browser-id3-writer/dist/browser-id3-writer.mjs"), v = p("./node_modules/@vot.js/shared/dist/data/consts.js"), b = p("./src/utils/localization.ts"), x = d([b]);
					b = (x.then ? (await x)() : x)[0];
					let C = /(?:https?|www|\bhttp\s+)[^\s/]*?(?:\.\s*[a-z]{2,}|\/)\S*|#[^\s#]+|auto-generated\s+by\s+youtube|provided\s+to\s+youtube\s+by|released\s+on|paypal?|0x[\da-f]{40}|[13][1-9a-z]{25,34}|4[\dab][1-9a-z]{93}|t[1-9a-z]{33}/gi, w = new Set([
						"uk",
						"be",
						"bg",
						"mk",
						"sr",
						"bs",
						"hr",
						"sl",
						"pl",
						"sk",
						"cs"
					]), T = (() => v.Xh.includes(b.v) ? b.v : w.has(b.v) ? "ru" : "en")(), E = g().getParser(window.navigator.userAgent).getResult(), isPiPAvailable = () => "pictureInPictureEnabled" in document && document.pictureInPictureEnabled;
					function initHls() {
						return typeof Hls < "u" && Hls?.isSupported() ? new Hls({
							debug: !1,
							lowLatencyMode: !0,
							backBufferLength: 90
						}) : void 0;
					}
					function cleanText(d, f) {
						return (d + " " + (f || "")).replace(C, "").replace(/[^\p{L}]+/gu, " ").substring(0, 450).trim();
					}
					function downloadBlob(d, f) {
						let p = URL.createObjectURL(d), m = document.createElement("a");
						m.href = p, m.download = f, m.click(), URL.revokeObjectURL(p);
					}
					function clearFileName(d) {
						return d.trim().length === 0 ? new Date().toLocaleDateString("en-us").replaceAll("/", "-") : d.replace(/^https?:\/\//, "").replace(/[\\/:*?"'<>|]/g, "-");
					}
					function getTimestamp() {
						return Math.floor(Date.now() / 1e3);
					}
					function getHeaders(d) {
						return d instanceof Headers ? Object.fromEntries(d.entries()) : Array.isArray(d) ? Object.fromEntries(d) : d || {};
					}
					function clamp(d, f = 0, p = 100) {
						return Math.min(Math.max(d, f), p);
					}
					function toFlatObj(d) {
						return Object.entries(d).reduce((f, [p, m]) => {
							if (m === void 0) return f;
							if (typeof m != "object") return f[p] = m, f;
							let h = Object.entries(toFlatObj(d[p])).reduce((d, [f, m]) => (d[`${p}.${f}`] = m, d), {});
							return {
								...f,
								...h
							};
						}, {});
					}
					async function exitFullscreen() {
						let d = document;
						(d.fullscreenElement || d.webkitFullscreenElement) && (d.webkitExitFullscreen && await d.webkitExitFullscreen(), d.exitFullscreen && await d.exitFullscreen());
					}
					let sleep = (d) => new Promise((f) => setTimeout(f, d));
					function timeout(d, f = "Operation timed out") {
						return new Promise((p, m) => {
							setTimeout(() => m(Error(f)), d);
						});
					}
					async function waitForCondition(d, f, p = !1) {
						let m = !1;
						return Promise.race([(async () => {
							for (; !d() && !m;) await sleep(100);
						})(), new Promise((d, h) => {
							setTimeout(() => {
								m = !0, p ? h(Error(`Wait for condition reached timeout of ${f}`)) : d();
							}, f);
						})]);
					}
					async function _downloadTranslationWithProgress(d, f, p = (d) => {}) {
						let m = d.body?.getReader();
						if (!m) throw Error("Response body is not readable");
						let h = new Uint8Array(f), g = 0;
						for (;;) {
							let { done: d, value: _ } = await m.read();
							if (d) break;
							h.set(_, g), g += _.length, p(Math.round(g / f * 100));
						}
						return h.buffer;
					}
					async function downloadTranslation(d, f, p = (d) => {}) {
						let m = +(d.headers.get("Content-Length") ?? 0), h = await (m ? _downloadTranslationWithProgress(d, m, p) : d.arrayBuffer());
						p(100);
						let g = new _.Q(h);
						return g.setFrame("TIT2", f), g.addTag(), downloadBlob(g.getBlob(), `${f}.mp3`), !0;
					}
					function openDownloadTranslation(d) {
						window.open(d, "_blank")?.focus();
					}
					m();
				} catch (d) {
					m(d);
				}
			});
		},
		"./src/utils/volume.ts": (d, f, p) => {
			"use strict";
			p.d(f, { q: () => syncVolume });
			function syncVolume(d, f, p, m) {
				let h = f;
				return f > m ? (h = p + (f - m), h = h > 100 ? 100 : Math.max(h, 0), d.volume = h / 100) : f < m && (h = p - (m - f), h = h > 100 ? 100 : Math.max(h, 0), d.volume = h / 100), h;
			}
		}
	}, f = {};
	function __webpack_require__(p) {
		var m = f[p];
		if (m !== void 0) return m.exports;
		var h = f[p] = { exports: {} };
		return d[p].call(h.exports, h, h.exports, __webpack_require__), h.exports;
	}
	(() => {
		var d = typeof Symbol == "function" ? Symbol("webpack queues") : "__webpack_queues__", f = typeof Symbol == "function" ? Symbol("webpack exports") : "__webpack_exports__", p = typeof Symbol == "function" ? Symbol("webpack error") : "__webpack_error__", resolveQueue = (d) => {
			d && d.d < 1 && (d.d = 1, d.forEach((d) => d.r--), d.forEach((d) => d.r-- ? d.r++ : d()));
		}, wrapDeps = (m) => m.map((m) => {
			if (typeof m == "object" && m) {
				if (m[d]) return m;
				if (m.then) {
					var h = [];
					h.d = 0, m.then((d) => {
						g[f] = d, resolveQueue(h);
					}, (d) => {
						g[p] = d, resolveQueue(h);
					});
					var g = {};
					return g[d] = (d) => d(h), g;
				}
			}
			var _ = {};
			return _[d] = (d) => {}, _[f] = m, _;
		});
		__webpack_require__.a = (m, h, g) => {
			var _;
			g && ((_ = []).d = -1);
			var v = new Set(), exports = m.exports, x, C, w, T = new Promise((d, f) => {
				w = f, C = d;
			});
			T[f] = exports, T[d] = (d) => (_ && d(_), v.forEach(d), T.catch((d) => {})), m.exports = T, h((m) => {
				x = wrapDeps(m);
				var fn, getResult = () => x.map((d) => {
					if (d[p]) throw d[p];
					return d[f];
				}), h = new Promise((f) => {
					fn = () => f(getResult), fn.r = 0;
					var fnQueue = (d) => d !== _ && !v.has(d) && (v.add(d), d && !d.d && (fn.r++, d.push(fn)));
					x.map((f) => f[d](fnQueue));
				});
				return fn.r ? h : getResult();
			}, (d) => (d ? w(T[p] = d) : C(exports), resolveQueue(_))), _ && _.d < 0 && (_.d = 0);
		};
	})(), __webpack_require__.n = (d) => {
		var f = d && d.__esModule ? () => d.default : () => d;
		return __webpack_require__.d(f, { a: f }), f;
	}, __webpack_require__.d = (exports, f) => {
		for (var p in f) __webpack_require__.o(f, p) && !__webpack_require__.o(exports, p) && Object.defineProperty(exports, p, {
			enumerable: !0,
			get: f[p]
		});
	}, __webpack_require__.o = (d, f) => Object.prototype.hasOwnProperty.call(d, f);
	var p = __webpack_require__("./src/index.js");
})();
