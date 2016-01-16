$( document ).ready(function() {

  // add item click button and val of input becomes next item
  $('button').click(function() {
    addItem();
  });

  $('input').keydown(function(enter) {
    if (enter.keyCode == 13) {
      addItem();
    }
  });

  function addItem() {
    var gitem = $('input').val();
    console.log(gitem);
    $('ul').append("<li><div class=\"item\"><p>"+gitem+"</p><i class=\"fa fa-minus-square\"></i></div></li>");
  }

  $('ul').on('click', 'i', function() {
//    $(this).parents('.item').css('background-color', 'yellow');
      $(this).parents('.item').remove();
  });

  $('ul').sortable({containment: 'parent',
    tolerance: 'pointer'
  });

});
