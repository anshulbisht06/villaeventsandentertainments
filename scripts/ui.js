$(document).ready(function(){
  // var viewPortHeight = $(window).height();
  // $('section').css('height', viewPortHeight);
  // $('#headingSlider').css('height', viewPortHeight);
	$('.tooltipped').tooltip({delay: 25});

  // var slider = $.fn.fsvs({
  //   autoPlay: false,
  //   speed: 1000,
  //   bodyID: 'content',
  //   selector: 'section.content',
  //   mouseSwipeDisance: 40,
  //   afterSlide: function (index) {
  //     console.log(index);
  //    },
  //   beforeSlide: function (index) {
  //     console.log(index,'before');
  //     // $('.site--header li').removeClass('active');
  //     // $('.site--header li').eq(index).addClass('active');
  //     // $('#scroll-down__btn').hide();
  //     // if(index=== 0) {
  //     //   $('.site--header').removeClass('nav-fadeIn');
  //     //   setTimeout(function() {
  //     //     $('.site--header').removeClass('top');
  //     //     $('.site--header .brand-logo img').attr('src', 'images/sports-unity-logo.png');
  //     //     $('.site--header').addClass('pos');
  //     //     $('.site--header').addClass('header--alt');
  //     //   }, 1000);
  //     // } else {
  //     //   $('.site--header').removeClass('pos');
  //     //   $('.site--header').addClass('top');
  //     //   setTimeout(function() {
  //     //     $('.site--header .brand-logo img').attr('src', 'images/navigation__logo.png');
  //     //     $('.site--header').removeClass('header--alt');
  //     //     $('.site--header').addClass('nav-fadeIn');
  //     //   }, 1000);
  //     // }
  //    },
  //   endSlide: function (index) {
  //     console.log('end index: ' + index);
  //    },
  //   mouseWheelEvents: true,
  //   mouseWheelDelay: false,
  //   mouseDragEvents: true,
  //   touchEvents: true,
  //   arrowKeyEvents: true,
  //   pagination: true,
  //   nthClasses: 2,
  //   detectHash: false
  // });

  $('.button-collapse').sideNav({
    menuWidth: 250,
    closeOnClick: true
  });

  $('.collapsible').collapsible();
  
  $('.slider').slider({
    full_width: true,
    indicators: false,
    transition: 1000,
    interval: 6000,
    height: 575
  });
  
  // $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrain_width: false,
  //     hover: true,
  //     gutter: 0,
  //     belowOrigin: true,
  //     alignment: 'right'
  // });

//   $('nav').click(function() {
//   var id = $(this).attr('id');
//   alert(id);
//   $('html, body').animate({
//       scrollTop: ($('#' + id + '.section').offset().top)
//   }, 2000);
// });
  
  var options = [
    {selector: '#aboutusCard', offset: 0, callback: 'Materialize.fadeInImage("#aboutusCard")' },
    {selector: '#servicesCard', offset: 0, callback: 'Materialize.fadeInImage("#servicesCard")' },
    {selector: '#contactusCard', offset: 0, callback: 'Materialize.fadeInImage("#contactusCard")' },
    {selector: '#servicesItems', offset: 0, callback: 'Materialize.showStaggeredList("#servicesItems")' }
  ];

  Materialize.scrollFire(options);

  // $('.nav-wrapper ul li a').click(function(e) {
  //   e.preventDefault();
  //   var index = $(this).parent().index();
  //   if(index === 0) {
  //     slider.slideToIndex(1);
  //   } else if(index === 1) {
  //     slider.slideToIndex(2);
  //   } else {
  //     slider.slideToIndex(3);
  //   }
  // })
});
