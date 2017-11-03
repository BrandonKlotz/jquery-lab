(function() {

  $('.available').on('click', function selectTable() { // Selects table to make Reservation

    if ($(this).hasClass('reserved')) {
      return false;
    } else {

    // Defines Selected Table + Table Number
    $(this).addClass('selected');
    let tableNum = $(this).text();
    $('#table-number').text('Table Number: ' + tableNum);

    // Pop Up Animation
    $('.form').animate({width: '575px'});
    $('.form').animate({height: '500px'});
    $('.form').animate({top: '240px'});
    $('.form').css('display', 'flex');
    }

  });

  // Save Reservation
  $('#save').click(function() {

    nameInput = $('#party-name').val();
    phoneInput = $('#party-num').val();
    partyInput = $('#party-size').val();

    //Verify Inputs were filled...
    if (nameInput != '' && phoneInput != '' && partyInput != '') {

      $('#formWrap').css('display', 'none'); //Hide Form once filled out.

      //Clear form for next use.
      $('#nameInput').val('');
      $('#phoneInput').val('');
      $('#partyInput').val('');

      $('.selected').removeClass('selected').addClass('reserved').removeClass('available');

      // Pop Up Animation Out
      $('.form').animate({height: '500px'});
      $('.form').animate({top: '-600px'}, 350, 'linear');

    } else {
      $('#alert').text('Please fill out all fields!');
    };

  });

  // Cancel Reservation
  $('#close').click(function() {

    $(".selected").removeClass('selected');
    $('#nameInput, #phoneInput, #partyInput').val('');

    // Pop Up Animation Out
    $('.form').animate({height: '500px'});
    $('.form').animate({top: '-600px'}, 350, 'linear');

    return false;

  });

})();
