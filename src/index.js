import timeHistoryContainer from './js-components/timeHistoryContainer';
import Timer from './js-components/timer';

document.body.appendChild(timeHistoryContainer());
var TimerTry = new Timer(1, 'timer-white');
var TimerTry1 = new Timer(1, 'timer-black');

// TEST:
if (true) {TimerTry.start()};
let el = document.getElementById('timer-black');
if (true) {TimerTry1.start()};

// el.addEventListener('mouseenter', function() {TimerTry.stop() });
// el.addEventListener('mouseleave', function() {TimerTry.start() });