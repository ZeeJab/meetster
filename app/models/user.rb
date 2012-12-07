class User < ActiveRecord::Base

  scope :fresh, where(event_id: Event.last.id)

  belongs_to :event

end
