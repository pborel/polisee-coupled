class LegislatorsController < ApplicationController

  include Sunlight

  def index
    if params[:zip]
      location_data = {zip: params[:zip]}
      @legislators = legislators_at(location_data)
      render json: @legislators
    elsif cookies[:lat_lng]
      @lat_lng = cookies[:lat_lng].split("|")
      location_data = {lat: @lat_lng[0], lng: @lat_lng[1]}
      @legislators = legislators_at(location_data)
      render json: @legislators
    else
      render json: {error: "You must have a zip or location enabled"}
    end
  end

  def show
    p params
    @legislator = Legislator.where(id: params[:id]).first
    legislator_data = {info: @legislator,
            cycle_details: @legislator.cycle_amounts}
    render json: legislator_data
  end

  def donors
    p "I AM IN THE DONORS"
    legislator = Legislator.find_by_id(823)
    client = transparancy_api
    donor_data = (client.top_donors(legislator, "2012")).body
    sector_data = (client.top_sectors(legislator, "2012")).body

    render json: [donor_data, sector_data]
  end

private

  def legislators_at(location_data)
    ids = rep_ids_at(location_data)
    local_legislators_with(ids)
  end

  def local_legislators_with(ids)
    reps = Legislator.where(:bioguide_id => ids)
  end

  def rep_ids_at(location_data)
    rep_data = sunlight_api_query_at(location_data)
    ids = get_ids_from(rep_data)
  end

  def sunlight_api_query_at(location_data)
    client = congress_api
    if location_data[:zip]
      local_reps_raw_data = client.local_legislators_in(location_data[:zip])
    else
      local_reps_raw_data = client.local_legislators_at(location_data[:lat],location_data[:lng])
    end
  end

  def get_ids_from(rep_data)
    parsed_data = JSON.parse(rep_data.body)
    ids = parsed_data['results'].map{|rep| rep['bioguide_id']}
  end

  def congress_api
    Congress.new
  end

  def transparancy_api
    Transparancy.new
  end


end

