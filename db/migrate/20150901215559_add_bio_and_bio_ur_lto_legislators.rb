class AddBioAndBioUrLtoLegislators < ActiveRecord::Migration
  def change
    add_column :legislators, :bio, :text
    add_column :legislators, :bio_URL, :string
  end
end
