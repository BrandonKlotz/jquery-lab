(function() {

  $(".details").hide();

  let form = $('.form');
  let selectedTable = $(".selected");

  $('.available').on('click', function selectTable() { // Selects table to make reservation

    if ($(this).hasClass('reserved')) {
      return false;
    }

    let tableNum = $(this).text();

    $(this).addClass('selected');
    $('#table-number').text('Table Number: ' + tableNum);

    form.animate({width: '575px'});
    form.animate({height: '500px'});
    form.animate({top: '240px'});
    form.css('display','flex');

    $('button').click(function() {

      selectedTable.addClass("reserved");
      selectedTable.removeClass("selected");
      selectedTable.removeClass("available");

      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');

    });

    $('#close').click(function() {

      selectedTable.removeClass('selected');
      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');

      return false;

    });

  });

})();
