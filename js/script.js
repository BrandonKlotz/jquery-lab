(function() {

  $(".details").hide();

  let form = $('.form');
  let selectedTable = $(".selected");


  $('.available').on('click', function selectTable() { // Selects table to make reservation

    let tableNum = $(this).text();

    $(this).addClass('selected');

    form.animate({width: '575px'});
    form.animate({height: '500px'});
    form.animate({top: '240px'});
    form.css('display', 'flex');

    $('#table-number').text('Table Number: ' + tableNum);

    $('#save').click(function saveReservation() {

      selectedTable.removeClass("selected");
      selectedTable.addClass("reserved");
      selectedTable.removeClass("available");

      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');
    
    });

    $('#close').click(function cancelReservation() {

      selectedTable.removeClass('selected');

      $("#reserveName").val("");
      $("#reserveSize").val("");
      $("#reservePhone").val("");

      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');

      return false;

    });
  });

  function submitReservation() {

    let partyName = $('party-name').val();
    let partySize = $('party-size').val();
    let partyTel = $('party-num').val();

    $('party-name').val("");
    $('party-size').val("");
    $('party-num').val("");

    }

})();
