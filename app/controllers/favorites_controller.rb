class FavoritesController < ApplicationController

  include Sunlight

  def index
    if guest_user
      render json: {message: "You are not logged in"}
    else
      sunlight_client = Congress.new
      following_ids = current_user.favorites.pluck(:external_id)
      @bills = []
      if following_ids.length > 0
        following_ids.each do |id|
          response = sunlight_client.bill(id)
          what_I_want = response["results"][0]
          @bills.push(what_I_want)
        end
      end
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


end


