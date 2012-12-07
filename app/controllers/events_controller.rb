class EventsController < ApplicationController

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(params[:event])
  end

  def show
    event = Event.last
    @event_name = event.name
    @event_users = event.users
    @event_users_count = @event_users.count
  end

end
