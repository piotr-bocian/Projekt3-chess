class Timer {
    seconds: number;
    player: string;
    timerHandler: Element;
    constructor (minutes: number, player: string) {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.player = player;
        this.seconds = minutes * 60;
        this.timerHandler = document.querySelector(`#${this.player}`)!; 
    }

    start(){
    var interval = setInterval(() => this.timedown(), 1000);
    return interval;
    };

    stop() {
    clearInterval(this.start())
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