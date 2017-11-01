(function() {

  $('.available').on('click', function reserveTable() {

    let tableNum = $(this).text();

    if ($(this).hasClass('reserved')) {
      return false;
    }

    $(this).addClass('selected');

    $('.form').animate({width: '575px'});
    $('.form').animate({height: '500px'});
    $('.form').animate({top: '240px'});
    $('.form').css('display', 'flex');


    $('#table-number').text('Table Number: ' + tableNum);



    $('#save').click(function saveReservation() {
        $('.selected').addClass('reserved');
        $('.selected').removeClass('available');
        $('.selected').removeClass('selected');

        $('.form').animate({height: '500px'});
        $('.form').animate({top: '-600px'}, 350, 'linear');
    });

    $('#close').click(function cancelReservation() {
        $('.selected').removeClass('selected');

        $('.form').animate({height: '500px'});
        $('.form').animate({top: '-600px'}, 350, 'linear');
    });


  });

})();
