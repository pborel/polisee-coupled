class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.string :record_type
      t.datetime :notify_at
      t.string :external_id
      t.timestamps
    end
  end
end
