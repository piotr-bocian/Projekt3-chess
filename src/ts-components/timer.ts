class Timer {
    seconds: number;
    player: string;
    timerHandler: Element;
    interval: number;
    constructor (minutes: number, player: string, interval?:number) {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.player = player;
        this.seconds = minutes * 60;
        this.timerHandler = document.querySelector(`#${this.player}`)!;
        this.interval = 0;
    }

    start(){
    this.interval = window.setInterval(() => this.timedown(), 1000);
    };

    stop() {
    window.clearInterval(this.interval);
    };
    
    timedown() {
        this.timerHandler.innerHTML = this.convertSeconds(this.seconds);
        if (this.seconds > 0) {
          this.seconds--;
          return this.seconds;
        } else this.stop();
      }

    convertSeconds(s: number) {
        let min = Math.floor(s / 60);
        let sec = s % 60;
        min = min < 10 ? parseInt('0' + min) : min;
        sec = sec < 10 ? parseInt('0' + sec) : sec;
        return min + ':' + sec;
    }
}

module.exports = Timer;