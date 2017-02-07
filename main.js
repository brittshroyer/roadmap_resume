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
      $('.cloud2').css('margin-left', 1000 - i90Distance/5 + 'px');
      // $('.i90post').css('height', i90distance+'px');
    }
    if(distanceTraveled > 1900 && distanceTraveled < 7900){
      $('.bellTower').css('margin-top', 30 - distanceTraveled/220 +'%');
    }
    if(distanceTraveled>2000){
      var colgateDistance = distanceTraveled - 2000;
      $('.colgate').css('transform', 'translateZ('+colgateDistance/12+'px)');
    }
    if(distanceTraveled>3250){
      var stoplightDistance = distanceTraveled - 3300;
      $('.anchor').css('transform', 'translateZ('+ (stoplightDistance/6)+'px)');
      // $('.anchor').css('top', 36+'%)');
    }
    if(distanceTraveled > 5500 && distanceTraveled < 7700 ){
      var diploma = distanceTraveled - 5500;
      $('.degree').css('transform', 'translateY('+ diploma/5 + 'px)');
    }
    if(distanceTraveled > 5500 ){
      $('.hill').css('background', '#fff');
      $('.ground').css('background', '#fff');
    }else{
      $('.hill').css('background', '#22D132');
      $('.ground').css('background', '#22D132');
    }
    if(distanceTraveled > 9000 ){
      var towerDistance = distanceTraveled - 9000;
      $('.degree').fadeOut('slow');
      $('.bellTower').css('margin-top', towerDistance/50 +'%');
    }else{
      $('.degree').fadeIn('fast');
    }
    if(distanceTraveled < 5000 || distanceTraveled > 9000){
      $('#snow').addClass('hidden');
    }else{
      $('#snow').removeClass('hidden');
    }
    if(distanceTraveled > 10000){
      var i40distance = distanceTraveled - 10000;
      $('.i40').css('transform', 'translateZ('+i40distance/6+'px)');
      $('.hill').fadeOut('slow');
      $('.ground').css('background','#b1a688');
    }else{
      $('.hill').fadeIn('slow');
    }
    if(distanceTraveled > 11000){
      $('.cactus').fadeIn(2000);
    }else{
      $('.cactus').fadeOut('slow');
    }
    if(distanceTraveled > 12000){
      var sunDistance = distanceTraveled - 12000;
      $('.sun').css('transform', 'translateX('+ sunDistance/4 + 'px) translateY('+ sunDistance/7 + 'px)');
      $('.cactusPart').css('transform', 'translateX('+ sunDistance/12 + 'px)');
    }
    if(distanceTraveled > 12500){
      $('.sky').css('opacity', .65);
      $('.sun').css('background','red');
    }else{
      $('.sky').css('opacity', 0);
      $('.sun').css('background','#ff9944');
    }
    // if(distanceTraveled > 15000){
    //   $('.desertSky').css('background', 'black');
    // }

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
