class ChangePhotoColumn < ActiveRecord::Migration
  def change
    remove_column :users, :photo
    add_column :users, :photo, :binary
  end
end
