(function() {

  $(".details").hide();

  $('.available').on('click', function selectTable() { // Selects table to make Reservation

    let form = $('.form');

    if ($(this).hasClass('reserved')) {
      return false;
    }

    $(this).addClass('selected');

    let tableNum = $(this).text();
    $('#table-number').text('Table Number: ' + tableNum);


    // Pop Up Animation
    form.animate({width: '575px'});
    form.animate({height: '500px'});
    form.animate({top: '240px'});
    form.css('display','flex');

    $('#save').click(function() { // Save Reservation

      $(".selected").addClass('reserved');
      $(".selected").removeClass('selected');
      $(".selected").removeClass('available');

      // Pop Up Animation
      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');

    });

    $('#close').click(function() { // Cancel Reservation

      $(".selected").removeClass('selected');

      // Pop Up Animation
      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');

      return false;

    });

  });

})();
