$(document).ready(function() {


closeGameContainers = function() {
  $(".game-content-container").each(function() {
    $(this).css("display", "none");
  })
}


$("#game_overview_link").click(function() {
  console.log("game overview link clicked");
  closeGameContainers();
  $("#game_overview").css("display", "inherit")
})



$("#game_how_to_play_link").click(function(){
  closeGameContainers();
  $("#game_how_to_play").css("display", "inherit");
})
$("#game_expansion_link").click(function(){
  closeGameContainers();
  $("#game_expansion").css("display", "inherit");
})






})
