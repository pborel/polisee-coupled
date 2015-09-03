class TweetsController < ApplicationController
  def create
    render json: {error: "You must be logged in."} and return if guest_user
    current_user.tweet(params[:message])
    render json: params[:message]
  end

  # def twitter_params
    # params.require(:tweet).permit(:message)
  # end
end
