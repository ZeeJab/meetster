class AddVisitorTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :description
      t.string :looking_for
      t.text :photo
      t.boolean :user_type

      t.timestamps
    end

    create_table :events do |t|
      t.string :name

      t.timestamps
    end
  end
end
