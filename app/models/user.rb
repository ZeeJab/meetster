class User < ActiveRecord::Base
  validates :name, :presence => true
  validates :description, :presence => true
  validates :looking_for, :presence => true

  belongs_to :event

end
