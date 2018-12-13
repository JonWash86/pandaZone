
$("#pandaButton").on('click', function() {
  player.loadVideoById('3esjoo4NoGQ')
})

var serveRandom = function(){

}

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
