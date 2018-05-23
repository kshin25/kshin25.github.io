/*
  custom js
  created by Fernando Bolima Jr.
  5/17/2018
*/
$(function(){
  modal();
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
    $(link).addClass('fadeIn-bottom');
    $('header').removeClass('animate-in').addClass('animate-out');
    $('.close-btn').delay(2000).fadeIn();
    $('nav').show();
  });
  $(".nav-menu").click(function(e){
    $('header').removeClass('animate-out').addClass('animate-in');
  });
  $(".close-btn").click(function(){
    $('header').removeClass('animate-in').addClass('animate-out');
  });
}
function modal(){
  $(".crud").click(function(e){
    e.preventDefault();
    $("#modal").fadeIn('3000');

  });
  $(".xbutton").click(function(e){
    e.preventDefault();
    $("#modal").fadeOut('3000');

  });
}
