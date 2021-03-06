var videoIds = [
  "DSehQsYU9h4",
  "YzVwrvbz_XA",
  "ZipGq3So7PY",
  "5Lh47WtOJeY",
  "y6GaPkkGZGw",
  "VTz5MtxrDTA",
  "iVXtm-S2GbI",
  "fYF1tIPjcAc",
  "c1cG5DlLsLE",
  "3esjoo4NoGQ",
  "QWCbRTBRIQM",
  "W4RE30l8zDY",
  "kOH27QkTVv4",
  "KKBQEDMiBJE",
  "GnaSNsk-M0c",
  "JbdzVlZ3nWQ"
];

var clicks = 0;

// This code loads the IFrame Player API code asynchronously.
$("#firstButton").on('click', function(){
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  $("#firstButton").hide();
})

$("#pandaButton").on('click', function() {
  clicks++;
    player.loadVideoById(videoIds[clicks]);
    console.log(videoIds[clicks]);
    if (clicks >= (videoIds.length - 1)){
      clicks = 0;
      shuffle(videoIds);
    }
    console.log(clicks)
})


//This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady(){
  $("#underlay").fadeIn();
  $("#pandaButton").fadeIn();
  player = new YT.Player('player',{
    height:'390',
    width:'640',
    videoId: videoIds[clicks],
    playervars: {
      'autoplay': 1
    },
    events:{
      'onReady': onPlayerReady,
      // 'onStateChange': onPlayerStateChange
    }
  });
}


//The API will call this function when the video player is ready.
function onPlayerReady(event){
  event.target.playVideo();
}

var done = false;
// function onPlayerStateChange(event){
//   if(event.data == YT.playerState.PLAYING && !done){
//     setTimeout(stopVideo, 6000);
//     done = true;
//   }
// }
//
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
