"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutoPause {
    constructor() {
        this.handleVisibilitychange = () => {
            const isVisible = document.visibilityState === "visible";
            if (isVisible) {
                this.player.play();
            }
            else {
                this.player.pause();
            }
        };
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this); //Se hace esto porque el this en handleIntersection es otro porque esta siendo llamado por otra funcion, entonces con bind se le dice que su this es el de la instancia
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold //Porcentaje el cual el observer se dara cuenta si el objeto apenas le queda ese % para salir o entro ya ese %
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilitychange);
    }
    handleIntersection(entries) {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
}
exports.default = AutoPause;
//# sourceMappingURL=AutoPause.js.map