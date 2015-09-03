class BillsController < ApplicationController
  include Sunlight

  def index
    path = params["tabName"]
    if path == "index" || path.nil?
      @bills = JSON.parse((sunlight_client.bills).body)
    else path == "upcoming"
      @bills = JSON.parse((sunlight_client.upcoming_bills).body)
    end
    render json: @bills["results"]
  end

  def show
    @bill = sunlight_client.bill(params[:bill_id])
    render json: @bill
  end

  def search
    @bills = sunlight_client.search_bills(params[:query])
    render json: @bills
  end

  private
  def sunlight_client
    sunlight_client = Congress.new
  end

end
