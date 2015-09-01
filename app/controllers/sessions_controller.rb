class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(env["omniauth.auth"])
    p "I am the user #{user.name}"
    session[:user_id] = user.id
    current_user
    p "I am the current user #{@current_user.name}"
    redirect_to root_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
