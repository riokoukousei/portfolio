$(function () {
  $("#menu-icon").click(function () {
    $("#menu-icon").css("display", "none");
    $("#menu").slideDown();
  });
  $("#close-menu").click(function () {
    $("#menu").css("display","none");
    $("#menu-icon").css("display","block");
  });


});
