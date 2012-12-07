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
    showUsers(msg, 0);
  });
}

function showUsers (data, i) {
  if(i >= data.length){
    console.log("cleared");
    getUsers();
  }
  console.log(data);

  var imgSrc = data[i].photo || " ",
      nameText = data[i].name || " ",
      descriptionText = data[i].description || " ",
      twitterText = data[i].twitter || " ";

  var img = $('<img>').attr('src', imgSrc),
      name = $('<h1>').text(nameText),
      description = $('<h2>').addClass('description').text(descriptionText) || "",
      twitter = $('<h2>').addClass('twitter').text("@" + twitterText) || "",
      currentUser = $('div.current-user');
      $('.current-user div#image').empty().append(img);
      $('.current-user div#info').empty().append(name).append(description).append(twitter);

  i++; //To cycle through.

  setTimeout(function() {
    showUsers(data, i);
  }, 4000);
}