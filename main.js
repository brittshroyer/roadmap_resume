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
    if(distanceTraveled > 6500 && distanceTraveled < 7800 ){
      var diploma = distanceTraveled - 5500;
      $('.degree').fadeIn('slow');
    }else{
      $('.degree').fadeOut('slow');
    }
    if(distanceTraveled > 5200){
      $('.hill').css('border', 2 + 'px solid white');
    }else{
      $('.hill').css('border', 2 + 'px solid green');
    }
    if(distanceTraveled > 6000 ){
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
        $('.cactus').fadeIn('fast')
    }else{
      $('.hill').fadeIn('slow');
      $('.cactus').fadeOut('fast');
    }
    if(distanceTraveled > 12000){
      var sunDistance = distanceTraveled - 12000;
      $('.sun').css('transform', 'translateX('+ sunDistance/4 + 'px) translateY('+ sunDistance/7 + 'px)');
      $('.cactusPart').css('transform', 'translateX('+ sunDistance/10 + 'px)');
    }
    if(distanceTraveled > 12500){
      $('.sky').css('opacity', .65);
      $('.sun').css('background','red');
    }else{
      $('.sky').css('opacity', 0);
      $('.sun').css('background','#ff9944');
    }
    if(distanceTraveled > 12800){
      var qDistance = distanceTraveled - 12800;
      $('.ql').fadeIn('slow');
      $('.ql').css('top', 393 - qDistance/8 + 'px');
    }else{
      $('.ql').fadeOut('fast');
    }
    if(distanceTraveled > 13400){
      var qlDistance = distanceTraveled - 13400;
      $('.ql').css('transform', 'translateX(-'+ qlDistance/6 + 'px)translateZ('+ qlDistance/4 + 'px)');
    }
    if(distanceTraveled > 14000){
      $('.nightCover').css('opacity', .85);
      $('body').css('filter', 'grayscale('+100+'%)');
    }else{
      $('.nightCover').css('opacity', 0);
      $('body').css('filter', 'grayscale('+0+'%)');
    }

    if(distanceTraveled > 15000){
      $('.shootingStar').addClass('animateStar');
      // $('body').remove($('.sky'));
    } else {
      $('.shootingStar').removeClass('animateStar');
      // $('body').append($('.sky'));
    }
    if(distanceTraveled > 15750){
      $('body').css('filter', 'grayscale('+0+'%)');
      $('.nightCover').css('opacity', 0);
      $('.sky').css('opacity', 0);
      $('.rock').fadeOut();
      $('.ground').css('background', '#006400');
      $('.ground').css('left', 45 + '%');
      $('.cliff').fadeIn(2000);
      $('.cave').fadeIn(2100);
      $('.caveHole').fadeIn();
    }else{
      $('.rock').fadeIn();
      $('.ground').css('left', -1 + '%');
      $('.cliff').fadeOut();
      $('.cave').fadeOut();
      $('.caveHole').fadeOut();
    }
    if(distanceTraveled > 16500){
      var caveDistance = distanceTraveled - 16500;
      $('.cliff').css('transform','translateZ(' + caveDistance/6 + 'px)' + ' rotate(-'+ 23 + 'deg)');
      $('.cave').css('transform','translateZ(' + caveDistance/6 + 'px)');
      $('.caveHole').css('transform','translateZ(' + caveDistance/6 + 'px)');
      $('.caliWelcome').css('transform','translateZ(' + caveDistance/6 + 'px)');
    }
    if(distanceTraveled > 20250){
      var planeDistance = distanceTraveled - 20250;
      $('.planePart').css('transform','translateX(-' + planeDistance/6 + 'px)');
      $('.topWing').css('transform','translateX(-' + planeDistance/6 + 'px)' + ' rotate(-'+ 26 + 'deg)');
      $('.bottomWing').css('transform','translateX(-' + planeDistance/6 + 'px)' + ' rotate(-'+ 17 + 'deg)');

    }
  }

  $('.states').scroll(function(){
    calcMileage();
  });

  // #343538
















});
