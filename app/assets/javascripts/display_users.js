$(function() {

});

function getUsers () {
  var i = 0;
  $.ajax({
  type: "GET",
  url: "/data"
  }).done(function( msg, i ) {
    setInterval(function(msg, i){showUsers(msg, i), }, 1000);
  });
}

function showUsers (data, i) {
  if(i > data.length){
    clearInterval();
    getUsers();
  }
  var img = $('<img>').attr('src',data[i].photo),
      name = $('<h1>').text(data[i].name),
      lookingFor = $('<h4>').text(data[i].looking_for),
      description = $('<div>').addClass('description').text(data[i].description),
      twitter = $('<div>').addClass('twitter').text(data[i].twitter),
      currentUser = $('div.current-user');

      currentUser.empty();
      currentUser.prepend(lookingFor).prepend(twitter).prepend(description).prepend(name).prepend(img);
}