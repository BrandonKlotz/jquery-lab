(function() {

  let form = $('.form');
  let selectedTable = $(".selected");
  $(".details").hide();

  $('.available').on('click', function selectTable() { // Selects table to make reservation

    let tableNum = $(this).text();

    if ($(this).hasClass('reserved')) {
      $(this).off("click");
      return false;
    } else {
      $("#reserveTable").show(300);
      $("#reserveName").autofocus = true;
      let tablenum = $(this).text();
      $("#tablenum").text(tablenum);
    }

    $(this).addClass('selected');

    form.animate({width: '575px'});
    form.animate({height: '500px'});
    form.animate({top: '240px'});
    form.css('display', 'flex');

    $('#table-number').text('Table Number: ' + tableNum);

    $('#save').click(function saveReservation() {
      submitReservation();
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

    function submitReservation() {

      let partyName = $('party-name').val();
      let partySize = $('party-size').val();
      let partyTel = $('party-num').val();

      $(".details", ".selected").append("<p>Party Size: " + partySize + "</p>");
      $(".details", ".selected").prepend("<p>Name: " + partyName +"</p>");

      selectedTable.addClass("reserved");
      selectedTable.removeClass("available");
      selectedTable.removeClass("selected");

      form.animate({height: '500px'});
      form.animate({top: '-600px'}, 350, 'linear');

      $('party-name').val("");
      $('party-size').val("");
      $('party-num').val("");

      }

      $(".table").hover(function() {
        // debugger;
        let className = $(this).attr("class");

        if (className !== "table available") {
          $(this).css("cursor", "not-allowed");
          $(".details", this).show(100);
          } else {
            $(".details", this).hide(100);
            $(this).css("cursor", "pointer");
          }
        },
        function() {
          $(".details", this).hide(100);

      });


  });

})();
