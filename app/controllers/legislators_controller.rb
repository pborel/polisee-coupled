class LegislatorsController < ApplicationController

  include Sunlight

  def index
    @legislators = legislators_in(49441)
    render json: @legislators
  end

  def show

  end

private
  def legislators_in(zip)
    ids = rep_ids_in(zip)
    local_legislators_with(ids)
  end

  def local_legislators_with(ids)
    reps = Legislator.where(:bioguide_id => ids)
  end

  def rep_ids_in(zip)
    rep_data = sunlight_api_query_of(zip)
    ids = get_ids_from(rep_data)
  end

  def sunlight_api_query_of(zip)
    client = create_sunlight_connection
    local_reps_raw_data = client.local_legislators(zip)
  end

  def get_ids_from(rep_data)
    parsed_data = JSON.parse(rep_data.body)
    ids = parsed_data['results'].map{|rep| rep['bioguide_id']}
  end

  def create_sunlight_connection
    Congress.new
  end

end

