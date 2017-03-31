
$(document).ready(function() {

//initial ready box
$('#ready').mouseover(function(){
  $(this).css('background-color', '#509CF0');
});
$('#ready').mouseout(function(){
  $(this).css('background-color', 'grey');
});
$('#ready').on('click', function(){
  $('#startBox').css('display', 'none');
  $('.gameover').fadeOut(1000);
});
$('.call').on('mouseover', function(){
  $('.screenWrap').css('visibility', 'visibile');
  $('#contact').css('visibility', 'visible');
});
$('.call').on('mouseout', function(){
  $('#contact').css('visibility', 'hidden');
  $('.screenWrap').css('visibility', 'hidden');
});
$('.portfolioSign').on('click', function(){
  $('.project-dim-cover').css('visibility', 'visible');
  $('.project-modal').css('visibility', 'visible');
});
$('.modal-exit').on('click', function(){
  $('.project-dim-cover').css('visibility', 'hidden');
  $('.project-modal').css('visibility', 'hidden')
});

//restart box
$('#restart').mouseover(function(){
  $(this).css('background-color', '#509CF0');
});
$('#restart').mouseout(function(){
  $(this).css('background-color', 'grey');
});
$('.sendButton').mouseover(function(){
  $(this).css('background-color', '#509CF0');
});
$('.sendButton').mouseout(function(){
  $(this).css('background-color', 'grey');
});
$('#resume').mouseover(function(){
  $(this).css('background-color', '#509CF0');
});
$('#resume').mouseout(function(){
  $(this).css('background-color', 'grey');
});
$('#restart').on('click', function(){
  location.reload();
});

//on page load, scroll to bottom of the road
  $('.states').scrollTop($('.states')[0].scrollHeight);
  console.log($('.states')[0].scrollHeight);

//store total height of road div to later calculate distance traveled
  var initialDistance = $('.states').scrollTop();

//drive using key press up and down arrows
  $(document).keydown(function(e){
    if(e.which == 38){
      console.log('keypress working!');
      $(".states").animate({
              scrollTop:  '-=50',
              behavior: 'smooth'
         });
    }else if(e.which == 40){
      $('.states').animate({
          scrollTop: '+=50',
          behavior: 'smooth'
      });
    }
  });

  var drive = function(){
    var distanceRemaining = $('.states').scrollTop();
    var distanceTraveled = initialDistance - distanceRemaining;
    console.log('distance traveled:',distanceTraveled);
    // translate ohio sign
    $('.ohioWelcome').css('transform', 'translateZ('+distanceTraveled/6+'px)');
    $('.post').css('height', 20+distanceTraveled/16+'px');
    //i90 sign & clouds
    if(distanceTraveled>1500){
      var i90Distance = distanceTraveled - 1500;
      $('.i90').css('transform', 'translateZ('+i90Distance/6+'px)');
      $('.cloudBody').css('margin-left', -1100 + i90Distance/3 + 'px');
      $('.cloud2').css('margin-left', 1000 - i90Distance/5 + 'px');
    }
    //beta house
    if(distanceTraveled > 1900 && distanceTraveled < 5800){
      $('.bellTower').css('margin-top', 30 - distanceTraveled/220 +'%');
    }
    //colgate exit sign
    if(distanceTraveled>2000){
      var colgateDistance = distanceTraveled - 2000;
      $('.colgate').css('transform', 'translateZ('+colgateDistance/12+'px)');
    }
    if(distanceTraveled>3250){
      var stoplightDistance = distanceTraveled - 3300;
      $('.anchor').css('transform', 'translateZ('+ (stoplightDistance/6)+'px)');
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
      $('.hill').css('border', 2 + 'px solid #005C09');
    }
    if(distanceTraveled > 6000 ){
      $('.hill').css('background', '#fff');
      $('.ground').css('background', '#fff');
    }else{
      $('.hill').css('background', '#007B0C');
      $('.ground').css('background', '#007B0C');
    }
    if(distanceTraveled > 9000 ){
      var towerDistance = distanceTraveled - 9000;
      $('.degree').fadeOut('slow');
      $('.bellTower').css('margin-top', 3.76818 + towerDistance/50 +'%');
    }
    if(distanceTraveled < 5000 || distanceTraveled > 9000){
      $('#snow').addClass('hidden');
    }else{
      $('#snow').removeClass('hidden');
    }
    if(distanceTraveled > 10000 && distanceTraveled < 20750){
      var i40distance = distanceTraveled - 10000;
      $('.i40').css('transform', 'translateZ('+i40distance/6+'px)');
      $('.hill').fadeOut(2000);
      $('.ground').css('background','#b1a688');
        $('.cactus').fadeIn('slow')
    }else{
      $('.hill').fadeIn('slow');
      $('.cactus').fadeOut('fast');
      // $('.tower').fadeIn('fast');
    }
    if(distanceTraveled > 12000){
      var sunDistance = distanceTraveled - 12000;
      $('.sun').css('transform', 'translateX('+ sunDistance/4 + 'px) translateY('+ sunDistance/7 + 'px)');
      $('.cactusPart').css('transform', 'translateX('+ sunDistance/8 + 'px)');
    }
    if(distanceTraveled > 12500){
      $('.sky').css('opacity', .70);
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
      $('.cave').fadeIn(2000);
      $('.caveHole').fadeIn(2000);
      $('.caliWelcome').fadeIn(2000);
    }else{
      $('.rock').fadeIn();
      $('.ground').css('left', -1 + '%');
      $('.cliff').fadeOut();
      $('.cave').fadeOut();
      $('.caveHole').fadeOut();
      $('.caliWelcome').fadeOut();
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
      $('.sky').css('opacity', 1);
      $('.desertSky').css('opacity', 0);
      $('.caliSky').css('opacity', 1);
      $('.plane').addClass('fly');
      $('.hill').css('background', '#78AB46');
      $('.hill').css('border', 2 + 'px solid green');
      $('.hill2').css('border', 'none');
      $('.ground').css('background', '#78AB46');
      var propeller = setInterval(function(){
        $('.prop').toggleClass('soar');
      }, 10);
      setTimeout(function(){
        clearInterval(propeller);
      }, 11000);    // setTimeout(soaring, 12000);
    }else{
      $('.plane').removeClass('fly');
    }
    if(distanceTraveled > 21500){
      $('.hill1').css('left', '-' + 18 + '%' );
      $('.hill').addClass('hillRoll');
    }else{
      $('.hill1').css('left', 0);
      $('.hill').removeClass('hillRoll');
    }
    if(distanceTraveled > 22400){
      $('.hill1').addClass('leftPull');
      $('.hill2').addClass('rightPull');
  }else{
    $('.hill1').removeClass('leftPull');
    $('.hill2').removeClass('rightPull');
  }
  if(distanceTraveled > 22900){
    var capitolDistance = distanceTraveled - 22900
    $('.capitol').css('transform','translateY(-' + capitolDistance/6 + 'px)');
  }
  if(distanceTraveled > 23000){
    $('.stick').fadeIn();
  }else{
    $('.stick').fadeOut();
  }
  if(distanceTraveled > 23923){
    var capApproach = distanceTraveled - 23923;
    $('.capitol').css('transform', 'translateY(-' + 170 + 'px)' + 'scale(' + capitolDistance/1000 + ')');
    $('.capitol').css('top', 405 - capApproach/7 + 'px');
    $('.capitol').css('right', 20 + capApproach/55 + 'px');
  }
  if(distanceTraveled > 25000){
    $('.bootstrap').addClass('rise1');
    $('.chrome').addClass('rise2');
    $('.react').addClass('rise3');
    $('.js').addClass('rise4');
    $('.htmlCss').addClass('rise5');
    $('.git').addClass('rise6');
    $('.node').addClass('rise7');
    $('.endSign').animate({
      opacity: 1
    },3500);
    $('.footer').css('visibility','visible');
    $('.fa').animate({
      opacity: 1
    },3500);
    setTimeout(function(){
      $('.header').fadeIn('slow');
    },2500);
    //prevent scrolling
    $('.states').css('overflow', 'hidden');
  }else{
    $('.bootstrap').removeClass('rise1');
    $('.chrome').removeClass('rise2');
    $('.react').removeClass('rise3');
    $('.js').removeClass('rise4');
    $('.htmlCss').removeClass('rise5');
    $('.git').removeClass('rise6');
    $('.node').removeClass('rise7');
    $('.header').css('display', 'none');
  }
}
  $('.states').scroll(function(){
    drive();
  });
});
