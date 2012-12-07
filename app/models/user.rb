class User < ActiveRecord::Base

  scope :fresh, where(event_id: Event.last.id)

  validates :name, :presence => true
  validates :description, :presence => true
  validates :looking_for, :presence => true

  belongs_to :event

end
