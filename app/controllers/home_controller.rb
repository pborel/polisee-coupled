class HomeController < ApplicationController
  def index
    session[:user_id] = 1 if !session[:user_id]
    current_user
    @location_path = "/#{params[:path]}"
  end
end
