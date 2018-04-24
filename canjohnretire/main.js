$(document).ready(function() {
  // $(".test").hide();
  // $(".test").fadeIn(4000, function() {});
  var prefix, status;
  var rand = Math.round(Math.random()*5)
  prefix = "JOHN HAS:"
  total = 0
  document.getElementById('kit-prefix').innerHTML = prefix;
  $.get( "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD", function( data ) {
    eths = data.USD * 7.6337630559
    total += eths
    if(total > 300000) {
        retireStatus = "JOHN CAN RETIRE!!!"
        document.getElementById('kit-retire-status').innerHTML = retireStatus;
    }
    ethStatus = "$" + eths.toFixed(2) + " ETH"
    document.getElementById('kit-eth-status').innerHTML = ethStatus;
  })

  $.get( "https://min-api.cryptocompare.com/data/price?fsym=XRB&tsyms=USD", function( data ) {
    xrbs = data.USD * 40.94223278
    total += xrbs
    if(total > 300000) {
        retireStatus = "JOHN CAN RETIRE!!!"
        document.getElementById('kit-retire-status').innerHTML = retireStatus;
    }
    xrbStatus = "$" + xrbs.toFixed(2) + " XRB"
    document.getElementById('kit-xrb-status').innerHTML = xrbStatus;
  })


  $.get( "https://min-api.cryptocompare.com/data/price?fsym=XLM&tsyms=USD", function( data ) {
    xlms = data.USD * 1644.43021307
    total += xlms
    if(total > 300000) {
        retireStatus = "JOHN CAN RETIRE!!!"
        document.getElementById('kit-retire-status').innerHTML = retireStatus;
    }
    xlmStatus = "$" + xlms.toFixed(2) + " XLM"
    document.getElementById('kit-xlm-status').innerHTML = xlmStatus;
  })
})
