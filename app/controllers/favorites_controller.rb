class FavoritesController < ApplicationController
  def index
    @favorites = @current_user.favorites
    render json: @favorites
  end

  def create
    redirect_to root_path unless @current_user
    @favorite = @current_user.favorites.create(
        external_id: params[:bill_id],
        notify_at: Time.now + 1000,
        record_type: "bill")
    render json: @favorite.external_id
  end

  def destroy
    @favorite = @current_user.favorites.where(external_id: "FILL IN")
    @favorite.destroy
    render json: @favorite.external_id
  end
end
