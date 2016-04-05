$(document).ready(function() {


closeGameContainers = function() {
  $(".game-content-container").each(function() {
    $(this).css("display", "none");
  })
  $(".game-top-link").children().removeClass("active")
}


$("#game_overview_link").click(function() {
  console.log("game overview link clicked");
  closeGameContainers();
  $("#game_overview").css("display", "inherit")
  $("#game_overview_link").addClass("active")
})

$("#game_how_to_play_link").click(function(){
  closeGameContainers();
  $("#game_how_to_play").css("display", "inherit");
  $("#game_how_to_play_link").addClass("active")
})
$("#game_expansion_link").click(function(){
  closeGameContainers();
  $("#game_expansion").css("display", "inherit");
  $("#game_expansion_link").addClass("active")
})
$("#game_praise_link").click(function(){
  closeGameContainers();
  $("#game_praise").css("display", "inherit");
  $("#game_praise_link").addClass("active")
})

})
