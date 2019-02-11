$(function () {
  $(".login-nav>a").click(function () {
    $(this).addClass('pitch').siblings().removeClass('pitch');
  });
});