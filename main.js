$(document).ready(function() {
//scroll to start of drive
  $('.states').scrollTop($('.states')[0].scrollHeight);
  console.log($('.states')[0].scrollHeight);

  var initialDistance = $('.states').scrollTop();

  var calcMileage = function(){
    var distanceRemaining = $('.states').scrollTop();
    // console.log('distance remaining', distanceRemaining);
    var distanceTraveled = initialDistance - distanceRemaining;
    console.log('distance traveled:',distanceTraveled);
    // $('.ohioWelcome').css('animation', 'translateOhio 2s');
    $('.ohioWelcome').css('transform', 'translateZ('+distanceTraveled/6+'px)');
    $('.post').css('height', distanceTraveled/16+'px');
  }

  $('.states').scroll(function(){
    calcMileage();
  });

  // var calcMileage = $('.states').scroll(function(){
  //   var distanceRemaining = $('.states').scrollTop();
  //   console.log('distance remaining', distanceRemaining);
  //   var distanceTraveled = initialDistance - distanceRemaining;
  //   console.log('distance traveled:',distanceTraveled);
  //   return distanceTraveled;
  // });

  // $('.states').scroll(function(){
  //   console.log(calcMileage);
  // });















});
