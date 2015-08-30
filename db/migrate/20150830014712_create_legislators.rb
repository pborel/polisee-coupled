class CreateLegislators < ActiveRecord::Migration
  def change
    create_table :legislators do |t|
      t.string  :bioguide_id
      t.date    :birthday
      t.string  :chamber
      t.string  :contact_form
      t.string  :crp_id
      t.string  :district
      t.string  :facebook_id
      t.string  :fax
      t.string  :first_name
      t.string  :gender
      t.integer :govtrack_id
      t.boolean :in_office
      t.string  :last_name
      t.string  :leadership_role
      t.string  :lis_id
      t.string  :middle_name
      t.string  :name_suffix
      t.string  :nickname
      t.string  :oc_email
      t.string  :ocd_id
      t.string  :office
      t.string  :party
      t.string  :phone
      t.string  :state
      t.string  :state_name
      t.string  :state_rank
      t.date    :term_end
      t.date    :term_start
      t.integer :thomas_id
      t.string  :title
      t.string  :twitter_id
      t.string  :votesmart_id
      t.string  :website
      t.string  :image
      t.string  :fec_ids
      t.timestamps null: false
    end
  end
end

