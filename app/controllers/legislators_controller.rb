class LegislatorsController < ApplicationController

  include Sunlight

  def index
    if params[:zip]
      @legislators = legislators_at({zip: params[:zip]})
    else cookies[:lat_lng]
      @lat_lng = cookies[:lat_lng].split("|")
      @legislators = legislators_at({lat: @lat_lng[0], lng: @lat_lng[1]})
    end
      render json: @legislators
  end

  def show
    @legislator = Legislator.where(id: params[:id]).first
    legislator_data = {info: @legislator,
            cycle_details: @legislator.cycle_amounts}
    render json: legislator_data
  end

  def donors
    legislator = Legislator.find_by_id(params[:legislator_id])
    client = opensecrets_api
    donor_data = JSON.parse((client.top_donors(legislator, "2014")).body)
    sector_data = JSON.parse((client.top_sectors(legislator, "2014")).body)

    render json: {donor_data: donor_data, sector_data: sector_data}
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
    rep_data = get_reps_by(location_data)
    get_ids_from(rep_data)
  end

  def get_reps_by(location_data)
    if location_data[:zip]
      local_reps_raw_data = congress_api.local_legislators_in(location_data[:zip])
    else
      local_reps_raw_data = congress_api.local_legislators_at(location_data[:lat],location_data[:lng])
    end
  end

  def get_ids_from(rep_data)
    parsed_data = JSON.parse(rep_data.body)
    parsed_data['results'].map{|rep| rep['bioguide_id']}
  end

  def congress_api
    Congress.new
  end

  def opensecrets_api
    opensecrets.new
  end


end
