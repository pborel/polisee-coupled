class AddopensecretsIdToLegislators < ActiveRecord::Migration
  def change
    add_column :legislators, :opensecrets_id, :string
  end
end
