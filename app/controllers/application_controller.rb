class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) if session[:user_id]
    p "I am the current user from the helper method #{@current_user.name}"
    @current_user
  end
end
