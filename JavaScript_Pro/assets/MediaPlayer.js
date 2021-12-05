const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);

// class MediaPlayer {
//     constructor(config) {
//         this.media = config.el;
//     }
//     play() {
//         this.media.play();
//     }
//     pause() {
//         this.media.pause();
//     }
//     togglePlay() {
//         if (isVideoPlaying(this.media)) {
//             this.pause();
//         } else {
//             this.play();
//         }

//     }
// }
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.togglePlay = function () {
    if (isVideoPlaying(this.media)) {
        this.pause();
    } else {
        this.play();
    }

}

MediaPlayer.prototype.toggleMute = function () {
    if (this.media.muted) {
        this.unmute();
    } else {
        this.mute();
    }

}

export default MediaPlayer