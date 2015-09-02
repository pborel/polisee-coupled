class AddTransparancyIdToLegislators < ActiveRecord::Migration
  def change
    add_column :legislators, :transparancy_id, :string
  end
end
