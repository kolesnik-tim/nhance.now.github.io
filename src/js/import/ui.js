import '../lib/selectize.min.js';
// import '../lib/maskedinput.js';
// import modal from 'jquery-modal';
// import modal from 'jquery-modal';

// //pop-up
// $('[rel="modal:open"]').on('click', function(event) {
//   $(this).modal({
//     fadeDuration: 200
//   });
//   return false;
// });


//footer
$('.footer__nav__block h3').on('click', function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $(this).next('ul').slideUp();
  } else{
    $('.footer__nav__block h3').removeClass('active').next('ul').slideUp();
    $(this).addClass('active');
    $(this).next('ul').slideDown();
  }
});


$(".use .btn, .intro__block a").on("click", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
});

//form
$('.sale__form .button').on('click', function(){
  setTimeout(function(){
    window.location.replace("https://www.nhancenow.com/offers/thank-you.html")
  }, 700);
});
// $('div form').submit(function(event) {
//   event.preventDefault(); // отменяем отправку формы

//   // собираем данные
//   // отправляем
//   $.ajax({/* ... */}).done(function(result) {
//       // переход
//       window.location.href = "http://test.com";
//   });
// });