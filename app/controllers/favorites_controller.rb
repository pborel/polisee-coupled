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
    @favorite = current_user.favorites.find_or_create_by(external_id: params[:external_id])
    send_twilio_text(params[:external_id])
    render json: @favorite.external_id
  end

  def destroy
    @favorite = current_user.favorites.where(external_id: params[:external_id]).first
    @favorite.destroy
    render json: @favorite.external_id
  end

  private

  def send_twilio_text(bill_id)
    client = Twilio::REST::Client.new ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN']
    message = client.messages.create from: '4846853929', to: current_user.phone, body: "You are following: #{get_bill_title(bill_id)}"
  end
  def get_bill_title(bill_id)
    bill_data = get_bill_data(bill_id)
    return bill_data['short_title'] if bill_data['short_title']
    bill_data['official_title']
  end

  def get_bill_data(id)
    response = JSON.parse(Congress.new.bill(id).body)
    bill_data = response["results"][0]
  end


  def get_favorites(favorite_ids)
    favorite_ids.each do |id|
      bill_data = get_bill_data(id)
      @bills.push(bill_data)
    end
  end

end


