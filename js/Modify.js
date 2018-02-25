$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});

$(function () {
  'use strict';
 
  $('.navbar').bootstrapAutoHideNavbar({
    disableAutoHide: false,
    delta: 5,
    duration: 250,
    shadow: true
  });
});