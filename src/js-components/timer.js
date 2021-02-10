"use strict";
class Timer {
    constructor(minutes, player) {
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.player = player;
        this.seconds = minutes * 60;
        this.timerHandler = document.querySelector(`#${this.player}`);
        this.interval = 0;
    }
    start() {
        this.interval = window.setInterval(() => this.timedown(), 1000);
    }
    ;
    pause() {
        window.clearInterval(this.interval);
    }
    ;
    stop() {
        this.pause();
        console.log("STOP");
    }
    timedown() {
        this.timerHandler.innerHTML = this.convertSeconds(this.seconds);
        if (this.seconds > 0) {
            this.seconds--;
            return this.seconds;
        }
        else
            this.stop();
        return;
    }
    convertSeconds(s) {
        let min = Math.floor(s / 60);
        let sec = s % 60;
        min = min < 10 ? '0' + min : min;
        sec = sec < 10 ? '0' + sec : sec;
        return min + ':' + sec;
    }
}
module.exports = Timer;
