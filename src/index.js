import timeHistoryContainer from './js-components/timeHistoryContainer';
import Timer from './js-components/timer';

document.body.appendChild(timeHistoryContainer());
var TimerTry = new Timer(60, 'timer-white');
if (true) {TimerTry.start()};