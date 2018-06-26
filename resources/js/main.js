$(document).ready(function(){
  console.log('eeyyy');

  $("#flip").click(function(){
    if($('#panel').hasClass('active')) {
      $('#panel').removeClass('active');
    } else {
      $('#panel').addClass('active');
    }
  });

});
