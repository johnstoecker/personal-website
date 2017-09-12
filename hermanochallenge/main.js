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
})
