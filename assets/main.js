$(document).ready(function() {

  $("#middle_earth_map_tile").click(function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];
  // build items array
  var items = [
      {
          src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/middle_earth_map.jpg',
          w: 3943,
          h: 2800
      },
      {
          src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/thrors_inset.jpg',
          w: 4032,
          h: 3024
      },
      {
          src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/moon_letters_glow.jpg',
          w: 4032,
          h: 3024
      }
  ];
  // define options (if needed)
  var options = {

  				        	mainClass : 'pswp--minimal--dark',
  					        barsSize : {top:0,bottom:0},
  						captionEl : false,
  						fullscreenEl : false,
  						shareEl : false,
  						bgOpacity : 0.85,
  						tapToClose : true,
  						tapToToggleControls : false,
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
  };
  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
  }
  )


$("#comics_tile").click(function() {
var pswpElement = document.querySelectorAll('.pswp')[0];
// build items array
var items = [
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/3goals.jpg',
        w: 1600,
        h: 1600
    },
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/mefloquine.jpg',
        w: 1600,
        h: 1600
    },
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/greetings.jpg',
        w: 1600,
        h: 1600
    },
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/pens.jpg',
        w: 1600,
        h: 1600
    },
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/dragon.jpg',
        w: 1600,
        h: 1600
    },
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/motorcycle.jpg',
        w: 1600,
        h: 1600
    },
    {
        src: 'https://stoeckerimages.s3.us-west-2.amazonaws.com/assets/pccomics/seriousIT.jpg',
        w: 1600,
        h: 1600
    }
];
// define options (if needed)
var options = {

				        	mainClass : 'pswp--minimal--dark',
					        barsSize : {top:0,bottom:0},
						captionEl : false,
						fullscreenEl : false,
						shareEl : false,
						bgOpacity : 0.85,
						tapToClose : true,
						tapToToggleControls : false,
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};
// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();
}
)

closeVideos = function() {
  $("#content").css("display", "inherit")
  $("#thronesy_player").css("display", "none");
  $("#wavesaw_player").css("display", "none");
  $(".video_player").each(function(){
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
}

openVideo = function(id) {
  $("#video_iframe").css("display", "flex");
  closeVideos();
  $("#content").css("display", "none")
  $("#"+id).css("display", "inherit")
}

$("#stoecker_tile").click(function() {
})

$("#thronesy_tile").click(function() {
  openVideo("thronesy_player");
  //$("#thronesy_iframe").css("display", "flex");
  //openVideo("https://www.youtube.com/embed/ZSJR-8v3RpU?list=PLugc43BMDjg-YMGXDES2FWA5YbGCUk4E-");
})

$("#video_close").click(function() {
  closeVideos();
  $("#video_iframe").css("display", "none")
})

$("#video_iframe").click(function() { closeVideos();
$("#video_iframe").css("display", "none");
})

$("#wavesaw_tile_play").click(function(){ openVideo("wavesaw_player");})

if ((window.location.href).includes("pccomics")){
  $("#comics_tile").click();
}

})
