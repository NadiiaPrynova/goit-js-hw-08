import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');

  const iframe = document.querySelector('iframe');
const player = new Player(iframe);
function saveTime(obj) {
    const seconds = obj.seconds;
    console.log(seconds);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
    }
const timeVideo = localStorage.getItem('videoplayer-current-time');
console.log(timeVideo);
if (timeVideo) {
player.setCurrentTime(timeVideo);  
}
player.on('timeupdate', throttle(saveTime, 1000)); 


