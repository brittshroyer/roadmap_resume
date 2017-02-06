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
      $('.cloudBody').css('margin-left', -1100 + i90Distance/3 + 'px');
      $('.cloud2').css('margin-left', 1000 - i90Distance/3 + 'px');
      // $('.i90post').css('height', i90distance+'px');
    }
    if(distanceTraveled>2000){
      $('.bellTower').css('margin-top', 30 - distanceTraveled/220 +'%');
      var colgateDistance = distanceTraveled - 2000;
      $('.colgate').css('transform', 'translateZ('+colgateDistance/12+'px)');
    }
    if(distanceTraveled < 3500 ){
      $('.ground').css('background-color', '#15C223');
    }
    if(distanceTraveled > 38500 ){
      $('.ground').css('background-color', '#35D95F');
    }
    if(distanceTraveled > 4800 ){
      $('.ground').css('background-color', '#4AEB76');
    }
    if(distanceTraveled > 5500 ){
      $('.ground').css('background-color', '#75FF9D');
    }
    if(distanceTraveled > 6500 ){
      $('.ground').css('background-color', '#C8FFD8');
    }
    if(distanceTraveled > 7500 ){
      $('.ground').css('background-color', '#fff');
    }
    if(distanceTraveled < 3500 || distanceTraveled > 7000){
      $('#snow').addClass('hidden');
    }else{
      $('#snow').removeClass('hidden');
    }
    // if(distanceTraveled > 2500){
    //   $('#snow').fadeOut();
    // }


    // if(distanceTraveled>3200){
    //   $('.anchor').css('transform', 'translateY(-'+(distanceTraveled-3000)/6+'px');
    // }
    if(distanceTraveled>3250){
      var stoplightDistance = distanceTraveled - 3300;
      $('.anchor').css('transform', 'translateZ('+ (stoplightDistance/6)+'px)');
      // $('.anchor').css('top', 36+'%)');
    }
    // if(distanceTraveled>4000){
    //   $('.cloudBody').fadeOut();
    // }
    // if(distanceTraveled>2200){
    //   var colgateDistance = distanceTraveled - 1000;
    //   $('.colgate').css('transform', 'translateZ('+colgateDistance/10+'px)');
    // }


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
