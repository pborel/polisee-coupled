class LegislatorsController < ApplicationController

  include Sunlight
  # Dont need this when refactored

  def index
    p params
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
    data = {info: @legislator,
            cycle_details: @legislator.cycle_amounts}
    render json: data
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
    client = create_sunlight_connection
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

  def create_sunlight_connection
    Congress.new
  end


end

