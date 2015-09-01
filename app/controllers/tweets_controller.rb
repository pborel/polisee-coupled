class TweetsController < ApplicationController
  def create
    current_user.tweet(params[:message])
    render json: params[:message]
  end

  # def twitter_params
    # params.require(:tweet).permit(:message)
  # end
end
