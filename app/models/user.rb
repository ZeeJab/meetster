class User < ActiveRecord::Base
  validates :name, :presence => true, 
  validates :description, :presence => true
  validates :looking_for, :presence => true
  validates :twitter 

  belongs_to :event

end
