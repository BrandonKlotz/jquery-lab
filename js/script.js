$(function() {

  $('.table').on('click', function() {

    let tableNum = $(this).text();
    $('.form').css('display', 'flex');
    $(this).addClass('reserved');
    $('#table-number').text('Table Number: ' + tableNum);
  });

  $('#save').on('click', function() {
    $('.form').css('display', 'none');
    // $(this).addClass('.reserved');
  });

  $('#close').on('click', function() {
    $('.form').css('display', 'none');
    $().removeClass('reserved');
  });

});
