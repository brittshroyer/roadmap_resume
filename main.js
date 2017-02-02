$(document).ready(function() {
//scroll to start of drive
  $('.states').scrollTop($('.states')[0].scrollHeight);
  console.log($('.states')[0].scrollHeight);

  var initialDistance = $('.states').scrollTop();

  var calcMileage = function(){
    var distanceRemaining = $('.states').scrollTop();
    var distanceTraveled = initialDistance - distanceRemaining;
    console.log('distance traveled:',distanceTraveled);
    // translate ohio sign
    $('.ohioWelcome').css('transform', 'translateZ('+distanceTraveled/6+'px)');
    $('.post').css('height', 10+distanceTraveled/16+'px');
    if(distanceTraveled>1500){
      var i90Distance = distanceTraveled - 1500;
      $('.i90').css('transform', 'translateZ('+i90Distance/6+'px)');
      // $('.i90post').css('height', i90distance+'px');
    }
    if(distanceTraveled>2000){
      $('.bellTower').css('margin-top', 30 - distanceTraveled/220 +'%');
    }
    if(distanceTraveled>2500){
      $('.colgate').css('transform', 'translateZ('+i90Distance/6+'px)');
    }


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
