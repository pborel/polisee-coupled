class FavoritesController < ApplicationController

  include Sunlight

  def index
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

  def create
    #add a method to include notify at as a strech goal
    @favorite = current_user.favorites.create(
        external_id: params[:external_id],
        record_type: "bill")
    render json: @favorite.external_id
  end

  def destroy
    @favorite = current_user.favorites.where(external_id: params[:external_id]).first
    @favorite.destroy
    render json: @favorite.external_id
  end
end


