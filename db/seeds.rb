# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Event.delete_all

u1 = User.create(:name => "Dustin", :description => "Full-stack Rails developer", :looking_for => "Looking to Get Hired", :photo => 'http://lh4.googleusercontent.com/-qhjtlHAB3zw/AAAAAAAAAAI/AAAAAAAABXY/Rxnl2Lzv1Xo/photo.jpg', :user_type => 'admin', :twitter => 'dcoates')
u2 = User.create(:name => "Zahra", :description => "Full-stack Rails developer and designer", :looking_for => "Looking to Hire", :photo => 'https://secure.gravatar.com/avatar/669e9edd2f5c61e0227fae5193065a81?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png', :user_type => 'admin', :twitter => 'zeejab')
u3 = User.create(:name => "Adrian", :description => "I love command line and JavaScript", :looking_for => "Looking for a Happy Time", :photo => 'https://secure.gravatar.com/avatar/669e9edd2f5c61e0227fae5193065a81?s=400&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png', :user_type => 'user', :twitter => 'theadrianb')

e1 = Event.create(:name => "GA Happy Hour")
u1.event = e1
u2.event = e1
u3.event = e1