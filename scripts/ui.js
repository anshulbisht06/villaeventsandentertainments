$(document).ready(function(){
  $('section').css('height',$(window).height());
	$('.tooltipped').tooltip({delay: 25});
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
$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: true,
      gutter: 0,
      belowOrigin: true,
      alignment: 'right'
    }
  );
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
});
