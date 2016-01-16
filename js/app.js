$( document ).ready(function() {

  var selectStore;

  // add item click button and val of input becomes next item
  // $('.addItem').click(function() {
  //   addItem();
  // });

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
  });

  function addItem() {
    var gitem = $('input').val();
    console.log(gitem);
    $('ul').append("<li><div class=\"item\"><p>"+gitem+"</p><i class=\"fa fa-minus-square\"></i></div></li>");
    $('input').val('');
  }

  function addStore(store) {
    var idStore = store.replace(/\s+/g, '');
    $('.stores').append('<h3>'+store+'</h3>')
      .append('<ul id=\''+idStore+'\'></ul>');
    $('ul').sortable({containment: 'parent',
      tolerance: 'pointer'
    });
    $('ul').on('click', 'i', function() {
  //    $(this).parents('.item').css('background-color', 'yellow');
        $(this).parents('.item').remove();
    });
    $('h3').click(function() {
      selectStore = this.innerHTML;
      selectStore = selectStore.replace(/\s+/g, '');
      console.log(selectStore);
    });
  }

});
