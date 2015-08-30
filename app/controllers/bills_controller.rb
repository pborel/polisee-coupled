class BillsController < ApplicationController
  include Sunlight

  def index
    sunlight_client = Congress.new
    bills = sunlight_client.bills
    raw_data = JSON.parse(bills.body)
    render json: raw_data["results"]
  end

  def show
    sunlight_client = Congress.new
    @bill = sunlight_client.bill(params[bill_id:])
    render json: @bill
  end

end
