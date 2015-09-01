class FavoritesController < ApplicationController

  include Sunlight

  def index
    current_user
    .favorites
    sunlight_client = Congress.new
    following_ids = @current_user.favorites.pluck(:external_id)
    p following_ids
    @bills = following_ids.map do |ids|
      sunlight_client.bill(ids)
    end
    render json: @bills
  end

  def create
    @favorite = @current_user.favorites.create(
        external_id: params[:bill_id],
        notify_at: Time.now + 1000,
        record_type: "bill")
    render json: @favorite.external_id
  end

  def destroy
    @favorite = @current_user.favorites.where(external_id: params[:external_id])
    @favorite.destroy
    render json: @favorite.external_id
  end
end


