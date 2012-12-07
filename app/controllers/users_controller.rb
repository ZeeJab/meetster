class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def show
    user_id = params[:id]
    @user = User.find(user_id)
  end

  def create
    @user = User.new(:name => params[:name], :description => params[:description], :twitter => params[:twitter], :photo => params[:photo])
    @user.event_id = Event.last.id
    if @user.save
      render :json => {"flash" => "You've been added. Have a good time!"}
    end
  end

  def destroy
    user = User.find(params[:id])
    user.delete
  end

  def data
    render :json => User.fresh
  end

end
