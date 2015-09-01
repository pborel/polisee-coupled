class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    current_user
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  def show
    @logged_in = !!current_user
    render json: @logged_in
  end
end
