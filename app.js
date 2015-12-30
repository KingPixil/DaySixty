(function($) {

  var str = prompt('Enter Some Text To Glitch')

  $('#text').append(str);

  var rdmtime;

  setInterval( function() {
    rdmtime = Math.floor(Math.random() * 400);
    console.log(rdmtime);
    $('#text').toggleClass('glitch');
  }, rdmtime);

})(jQuery);
