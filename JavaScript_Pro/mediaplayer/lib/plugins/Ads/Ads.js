"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ads = void 0;
const ads_json_1 = require("./ads.json");
class Ads {
    constructor() {
        this.initAds();
    }
    static getIntance() {
        if (!Ads.instance) {
            Ads.instance = new Ads();
        }
        return Ads.instance;
    }
    initAds() {
        this.ads = [...ads_json_1.jsonAds];
    }
    getAd() {
        if (this.ads.length === 0) {
            this.initAds();
        }
        return this.ads.pop();
    }
}
exports.Ads = Ads;
//# sourceMappingURL=Ads.js.map