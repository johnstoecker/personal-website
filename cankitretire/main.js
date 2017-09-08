$(document).ready(function() {
  var prefix, status;
  var rand = Math.round(Math.random()*5)
  prefix = "KIT HAS:"
  total = 0
  document.getElementById('kit-prefix').innerHTML = prefix;
  $.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function( data ) {
    eths = data.USD * 1.5319
    total += eths
    if(total > 500000) {
        retireStatus = "KIT CAN RETIRE!!!"
        document.getElementById('kit-retire-status').innerHTML = retireStatus;
    }
    ethStatus = "$" + eths.toFixed(2) + " ETH"
    document.getElementById('kit-eth-status').innerHTML = ethStatus;
  })

  $.get( "https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD", function( data ) {
    ltcs = data.USD * 6.6804
    total += ltcs
    if(total > 500000) {
        retireStatus = "KIT CAN RETIRE!!!"
        document.getElementById('kit-retire-status').innerHTML = retireStatus;
    }
    ltcStatus = "$" + ltcs.toFixed(2) + " LTC"
    document.getElementById('kit-ltc-status').innerHTML = ltcStatus;
  })
})
