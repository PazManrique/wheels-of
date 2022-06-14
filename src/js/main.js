
$(document).ready(function() {
    var pp_btn = $('.play');
    pp_btn.click(function() {
       pp_btn.toggleClass('active');
       return false;
    });
  });