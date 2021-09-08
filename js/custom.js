$(function(){
  $('.menu-btn').click(function(){
    // alert("Clicou no botão");
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
  $('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior","smoth")
  })
});