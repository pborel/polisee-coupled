class HomeController < ApplicationController
  def index
    @location_path = "/#{params[:path]}"
  end
end
