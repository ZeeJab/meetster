$(function() {
  getUsers();
});

var getUsersInterval;

function getUsers () {
  if($('div.current-user').length === 0){
    console.log("Whatever");
    return;
  }
  var i = 0;
  $.ajax({
  type: "GET",
  url: "/data"
  }).done(function( msg ) {
    message = msg;
    showUsers(msg, 0);
  });
}

function showUsers (data, i) {
  if(i >= data.length){
    console.log("cleared");
    getUsers();
  }
  var img = $('<img>').attr('src',data[i].photo) || "",
      name = $('<h1>').text(data[i].name),
      lookingFor = $('<h4>').text(data[i].looking_for),
      description = $('<div>').addClass('description').text(data[i].description),
      twitter = $('<div>').addClass('twitter').text(data[i].twitter),
      currentUser = $('div.current-user');

      currentUser.fadeOut();
      currentUser.empty();
      currentUser.prepend(lookingFor).prepend(twitter).prepend(description).prepend(name).prepend(img);
      currentUser.fadeIn();

  i++;

  setTimeout(function() {
    showUsers(data, i);
  }, 1000);
}