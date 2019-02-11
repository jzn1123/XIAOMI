$(function () {
  $('#shop-car').on('mouseenter',function () {
    $(this).css('backgroundColor','#ffffff');
    $('.car-info').css('display','block');
    $('#shop-car').css('color','#ff6f15');
  });
  $('#shop-car').on('mouseleave',function () {
    $(this).css('backgroundColor','#424242');
    $('.car-info').css('display','none');
    $('#shop-car').css('color','#b0b0b0');
  })
});