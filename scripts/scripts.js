var clicks = 0;

$("#pandaButton").on('click', function() {
    player.loadVideoById(pandaId.all[clicks].id);
    (clicks++);
})

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady(){
  player = new YT.Player('player',{
    height:'390',
    width:'640',
    videoId:'iVXtm-S2GbI',
    playervars: {
      'autoplay': 1
    },
    events:{
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event){
  event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event){
  if(event.data == YT.playerState.PLAYING && !done){
    setTimeout(stopVideo, 6000);
    done = true;
  }
}

function stopVideo(){
  player.stopVideo();
}

function shuffle(array){
  var index = array.length, t, i;
  while(index){
    i = Math.floor(Math.random() * index--);
    t = array[index];
    array[index] = array[i];
    array[i] = t;
  }
  return array;
}

function initPage(){
  pandaId.fetchAll();
  shuffle(pandaId.all);
}
