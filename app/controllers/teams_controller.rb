class TeamsController < ApplicationController
  before_action :set_team, only: [:show]

  # GET /teams
  # GET /teams.json
  def index
    @teams = Team.all
    render json: @teams
  end

  # GET /teams/1
  # GET /teams/1.json
  def show
    @member = Team.find([params: id])
    render json: @member
  end

end
