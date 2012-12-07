$(function() {
  $('#booth').photobooth().on("image",sendPhoto);
  $('button').click(takePhoto);
  //The below is to stop people from messing with their photos or submitting them without the form.
  $('#booth ul').hide();
});

function takePhoto () {
  $('.trigger').trigger('click');
}

function sendPhoto(event, dataURL) {
  console.log($('input#name').val());
  console.log($('input#description').val());
  $.ajax({
  type: "POST",
  url: "/users",
  data: { name: $('input#name').val(),
          description: $('input#description').val(),
          twitter: $('input#twitter').val(),
          photo: dataURL }
  }).done(function( msg ) {
    $('input[type="text"]').val('');
});
}