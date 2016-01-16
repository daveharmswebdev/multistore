$( document ).ready(function() {

  // add item click button and val of input becomes next item
  $('.addItem').click(function() {
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
    console.log(store);
    $('.stores').append('<h3>'+store+'</h3>')
      .append('<ul id=\''+store+'\'></ul>');
  }

  $('ul').on('click', 'i', function() {
//    $(this).parents('.item').css('background-color', 'yellow');
      $(this).parents('.item').remove();
  });

  $('ul').sortable({containment: 'parent',
    tolerance: 'pointer'
  });

});
