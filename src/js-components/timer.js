"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(minutes, player) {
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
        this.player = player;
        this.seconds = minutes * 60;
        this.restart = minutes * 60;
        this.timerHandler = document.querySelector(`#${this.player}`);
        this.interval = 0;
        this.timerHandler.innerHTML = minutes < 10 ? `0${minutes}:00` : `${minutes}:00`;
    }
    start() {
        this.timedown();
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
        // wywołanie okna modalnego
    }
    setTimer(time) {
        let minutes = parseInt(time.substring(0, 2));
        let seconds = parseInt(time.substring(3, 5));
        this.seconds = minutes * 60 + seconds;
    }
    ;
    restartTimer() {
        this.seconds = this.restart;
        this.start();
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
exports.Timer = Timer;
