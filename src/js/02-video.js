import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(savedTime);
}

const updateTime = function (currentTime) {
  localStorage.setItem(STORAGE_KEY, currentTime.seconds);
};

player.on('timeupdate', throttle(updateTime, 1000));
