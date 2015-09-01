class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string  :name
      t.string  :email
      t.string  :linkedin_url
      t.string  :github_url
      t.string  :twitter_url
      t.string  :website_url
      t.string  :image_url
      t.text    :bio

      t.timestamps
    end
  end
end
