$(document).ready(function() {
  var prefix, status;
  var rand = Math.round(Math.random()*5)
  total = 0
  $.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function( data ) {
    eths = data.USD * 0.87072
    ethStatus = "$" + eths.toFixed(2) + " ETH"
    console.log(data.USD)
    if (data.USD > 657.65) {
      ethStatus = ethStatus + " -- sucker!"
    } else {
      ethStatus = ethStatus + " -- nice timing!"
    }
    document.getElementById('warning-eth-status').innerHTML = ethStatus;
  })
  Tabletop.init({
    key: "1xp9l4himQZeEx9z9dD37IQWp222-QTmpN8Jtx_yUWI4"
  , callback: function(data,tableTop){
      document.getElementById('challenge-summary').innerHTML = ""
      console.log(data);
      for(var i=0; i < data.length; i++) {
          console.log(name)
          var name = data[i].Name
          if (name && name != "") {
              var current = parseInt(data[i].Current)
              var start = parseInt(data[i].Start)
              var end = parseInt(data[i].End)
              var numHTML = ""
              var borderClass = ""
              if (current < start) {
                  numHTML = "-" + Math.abs(current - start)
                  borderClass = "red"
              } else if (current == start) {
                  numHTML = "+0"
                  borderClass = "red"
              } else if (current >= end) {
                  numHTML = "+" + (current - start)
                  borderClass = "green"
              } else {
                  numHTML = "+" + (current - start)
                  borderClass = "white"
              }

              var htmlToAdd = '<div class="player-summary ' + borderClass+ '"><div class="player-name">'+name+'</div><div class="player-pullups">'+numHTML+'</div></div>'

              document.getElementById('challenge-summary').innerHTML += htmlToAdd
          }
      }

  }
  , simpleSheet: true})

})
