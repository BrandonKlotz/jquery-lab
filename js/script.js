$(function() {

  $('.table').on('click', function reserveTable() {


    let tableNum = $(this).text();
    $('.form').css('display', 'flex');
    $(this).addClass('reserved');
    $('#table-number').text('Table Number: ' + tableNum);
  });

  $('#save').on('click', function() {
    $('.form').css('display', 'none');
  });

  $('#close').on('click', function() {
    $(table).removeClass('reserved');
    $('.form').css('display', 'none');
  });

});
