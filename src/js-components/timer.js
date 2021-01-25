"use strict";
var Timer = /** @class */ (function () {
    function Timer(minutes, player) {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.player = player;
        this.seconds = minutes * 60;
        this.timerHandler = document.querySelector("#" + this.player);
    }
    Timer.prototype.start = function () {
        var _this = this;
        var interval = setInterval(function () { return _this.timedown(); }, 1000);
        return interval;
    };
    ;
    Timer.prototype.stop = function () {
        clearInterval(this.start());
    };
    ;
    Timer.prototype.timedown = function () {
        this.timerHandler.innerHTML = this.convertSeconds(this.seconds);
        if (this.seconds > 0) {
            this.seconds--;
            return this.seconds;
        }
        else
            this.stop();
    };
    Timer.prototype.convertSeconds = function (s) {
        var min = Math.floor(s / 60);
        var sec = s % 60;
        min = min < 10 ? parseInt('0' + min) : min;
        sec = sec < 10 ? parseInt('0' + sec) : sec;
        return min + ':' + sec;
    };
    return Timer;
}());
module.exports = Timer;
