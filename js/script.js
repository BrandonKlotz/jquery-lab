$(function() {


  $('.table').on('click', function() {
    $('.form').css('display', 'flex');
    $(this).addClass('.reserved');
    $('#table-number').text('Table Number: 1');
  });

  $('#save').on('click', function() {
    $('.form').css('display', 'none');
    // $(this).addClass('.reserved');
  });

  $('#close').on('click', function() {
    $('.form').css('display', 'none');
    $(this).removeClass('.reserved');
  });


});
