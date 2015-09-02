class FavoritesController < ApplicationController

  include Sunlight

  def index
    if guest_user
      render json: {message: "You are not logged in"}
    else
      @bills = []
      favorite_ids = current_user.favorites.pluck(:external_id)
      get_favorites(favorite_ids) unless favorite_ids.empty?
      render json: @bills
    end
  end

  def create
    #add a method to include notify at as a strech goal
    @favorite = current_user.favorites.find_or_create_by(
        external_id: params[:external_id],
        record_type: "bill")
    render json: @favorite.external_id
  end

  def destroy
    @favorite = current_user.favorites.where(external_id: params[:external_id]).first
    @favorite.destroy
    render json: @favorite.external_id
  end

  private
  def get_favorites(favorite_ids)
    sunlight_client = Congress.new
    favorite_ids.each do |id|
      response = sunlight_client.bill(id)
      bill_data = response["results"][0]
      @bills.push(bill_data)
    end
  end
end


