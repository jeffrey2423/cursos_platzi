"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    initPlugins() {
        this.plugins.forEach((plugin) => {
            plugin.run(this);
        });
    }
    initPlayer() {
        this.container = document.createElement("div");
        this.container.style.position = "relative";
        this.media.parentNode.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }
    isVideoPlaying(video) {
        return !!(video.currentTime > 0 &&
            !video.paused &&
            !video.ended &&
            video.readyState > 2);
    }
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    togglePlay() {
        if (this.isVideoPlaying(this.media)) {
            this.pause();
        }
        else {
            this.play();
        }
    }
    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}
exports.default = MediaPlayer;
//# sourceMappingURL=MediaPlayer.js.map