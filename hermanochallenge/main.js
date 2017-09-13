$(document).ready(function() {
  var prefix, status;
  var rand = Math.round(Math.random()*5)
  prefix = "HERMANO PULLUP POT:"
  total = 0
  document.getElementById('kit-prefix').innerHTML = prefix;
  document.getElementById('kit-eth-status').innerHTML = "TARGET +4 PULLUPS";
  $.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function( data ) {
    eths = data.USD * 0.34474
    ethStatus = "$" + eths.toFixed(2) + " ETH"
    document.getElementById('kit-ltc-status').innerHTML = ethStatus;
  })
  Tabletop.init({
    key: "1Zi7bHxKFCMb_1gR3IvZtcfpLEwv8g1ijtbeZQKM7x_k"
  , callback: function(data,tableTop){
      console.log(data);
      for(var i=0; i < data.length; i++) {
          var name = data[i].Name
          var current = parseInt(data[i].Target) - parseInt(data[i].Current) - 4
          var borderClass = ""
          if (current < 0) {
              current = "-" + current
              borderClass = "red"
          } else if (current == 0) {
              current = "+" + current
              borderClass = "red"
          } else if (current > 3) {
              current = "+" + current
              borderClass = "green"
          } else {
              current = "+" + current
              borderClass = "white"
          }

          var htmlToAdd = '<div class="player-summary ' + borderClass+ '"><div class="player-name">'+name+'</div><div class="player-pullups">'+current+'</div></div>'

          document.getElementById('challenge-summary').innerHTML += htmlToAdd
      }

  }
  , simpleSheet: true})

})
