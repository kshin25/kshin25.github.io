/*
  custom js
  created by Fernando Bolima Jr.
  5/17/2018
*/
$(function(){
  ahover();
  aclick();
});

function ahover(){
  $('.nav-menu').hide();
  $(".main-ul li").mouseover(function(){
    $(this).siblings().find("a").addClass('li-hover');
  }).mouseout(function(){
    $(".main-ul li a").removeClass('li-hover');
  });
  $('nav').mouseover(function(){
    $('.nav').hide();
    $('.nav-menu').show();
  }).mouseout(function(){
    $('.nav-menu').hide();
    $('.nav').show();
  });
}
function aclick(){
  $(".main-ul li a").click(function(e){
    e.preventDefault();
    var link = $(this).attr('href');
    $(link).fadeIn('3000').siblings().hide();
    $('header').removeClass('animate-in').addClass('animate-out');
    $('.close-btn').delay(3000).fadeIn();
  });
  $(".nav-menu").click(function(e){
    $('header').removeClass('animate-out').addClass('animate-in');
  });
  $(".close-btn").click(function(){
    $('header').removeClass('animate-in').addClass('animate-out');
  });
}
