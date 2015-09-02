class CreateCycleAmounts < ActiveRecord::Migration
  def change
    create_table :cycle_amounts do |t|
      t.integer :year
      t.float :amount
      t.integer :legislator_id
      t.integer :count

      t.timestamps
    end
  end
end
