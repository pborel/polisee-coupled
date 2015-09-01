class BillsController < ApplicationController
  include Sunlight

  def index
    current_user if current_user
    path = params["tabName"]
    if path == "index" || path.nil?
      sunlight_client = Congress.new
      @bills = JSON.parse((sunlight_client.bills).body)
    else path == "upcoming"
      sunlight_client = Congress.new
      @bills = JSON.parse((sunlight_client.upcoming_bills).body)
    end
      render json: @bills["results"]
  end

  def show
    p params
    sunlight_client = Congress.new
    @bill = sunlight_client.bill(params[:bill_id])
    render json: @bill
  end

  def search
    query = "Medicare"
    sunlight_client = Congress.new
    @bills = sunlight_client.search_bills(query)
    render json: @bills
  end

end
