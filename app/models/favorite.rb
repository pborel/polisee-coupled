class Favorite < ActiveRecord::Base
  belongs_to :user
  validate :external_id, presence: true

end


