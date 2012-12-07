class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:notice] = "You've been added. Have a good time!"
      render :json => User.fresh
    else
      render :new
    end
  end

  def destroy
    user = User.find(params[:id])
    user.delete
  end

end
