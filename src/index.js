import timeHistoryContainer from './js-components/timeHistoryContainer';
import Timer from './js-components/timer';

document.body.appendChild(timeHistoryContainer());
var TimerTry = new Timer(1, 'timer-white');

// TEST:
if (true) {TimerTry.start()};
let el = document.getElementById('timer-black');
el.addEventListener('mouseenter', function() {TimerTry.stop() });
el.addEventListener('mouseleave', function() {TimerTry.start() });