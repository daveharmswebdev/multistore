$( document ).ready(function() {

  var selectStore;

  $('.addItem').on('click', function() {
    addItem();
  });

  $('input').keydown(function(enter) {
    if (enter.keyCode == 13) {
      addItem();
    }
  });

  $('.addStore').click(function() {
    var gstore = $('input').val();
    addStore(gstore);
    $('input').val('');
  });

  function addItem() {
    var gitem = $('input').val();
    // console.log(gitem);
    $('#'+selectStore).append("<li><div class=\"item uncheck\"><i class=\"fa fa-check-square\"></i><p>"+gitem+"</p><i class=\"fa fa-minus-square\"></i></div></li>");
    $('input').val('');
  }

  function addStore(store) {
    var idStore = store.replace(/\s+/g, '');
    $('.stores').append('<h3 class=\'notselected\'>'+store+'</h3>').append('<ul id=\''+idStore+'\' class=\'connectedSortable\'></ul>');
    $('ul').sortable({containment: 'parent',
      tolerance: 'pointer', connectWith: '.connectedSortable'
    });
    $('ul').on('click', '.fa-minus-square', function() {
        $(this).parents('.item').remove();
    });
    $('ul').on('click', '.fa-check-square',function() {
      $(this).closest('div').toggleClass('check uncheck');
    });
    $('h3').click(function() {
      selectStore = this.innerHTML;
      selectStore = selectStore.replace(/\s+/g, '');
      var hstore = $(this);
      // console.log($(this));
      // console.log(hstore);
      if (hstore.is('.notselected')) {
        hstore.removeClass('notselected').addClass('selected');
        hstore.next().removeClass('selected').addClass('notselected');
      }
    });
  }

});
