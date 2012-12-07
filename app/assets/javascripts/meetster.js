$(function() {
  $('#booth').photobooth().on("image",sendPhoto);
  $('form').submit(takePhoto);
  //The below is to stop people from messing with their photos.
  $('#booth ul').hide();
});

function takePhoto () {
  $('.trigger').trigger('click');
}

function sendPhoto(event, dataURL) {
  $.ajax({
  type: "POST",
  url: "/users",
  data: { name: $('input#user_name').val(),
          description: $('input#user_description').val(),
          looking_for: $('input#user_looking_for').val(),
          photo: dataURL }
  }).done(function( msg ) {
    $('input[type="text"]').val('');
});
}