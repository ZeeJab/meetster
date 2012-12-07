class AddBackPhotoColumn < ActiveRecord::Migration
  remove_column :users, :photo
  add_column :users, :photo, :text
end
