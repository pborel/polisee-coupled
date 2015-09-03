# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150901215559) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cycle_amounts", force: true do |t|
    t.integer  "year"
    t.float    "amount"
    t.integer  "legislator_id"
    t.integer  "count"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "favorites", force: true do |t|
    t.integer  "user_id"
    t.string   "record_type"
    t.datetime "notify_at"
    t.string   "external_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "legislators", force: true do |t|
    t.string   "bioguide_id"
    t.date     "birthday"
    t.string   "chamber"
    t.string   "contact_form"
    t.string   "crp_id"
    t.string   "district"
    t.string   "facebook_id"
    t.string   "fax"
    t.string   "first_name"
    t.string   "gender"
    t.integer  "govtrack_id"
    t.boolean  "in_office"
    t.string   "last_name"
    t.string   "leadership_role"
    t.string   "lis_id"
    t.string   "middle_name"
    t.string   "name_suffix"
    t.string   "nickname"
    t.string   "oc_email"
    t.string   "ocd_id"
    t.string   "office"
    t.string   "party"
    t.string   "phone"
    t.string   "state"
    t.string   "state_name"
    t.string   "state_rank"
    t.date     "term_end"
    t.date     "term_start"
    t.integer  "thomas_id"
    t.string   "title"
    t.string   "twitter_id"
    t.string   "votesmart_id"
    t.string   "website"
    t.string   "image"
    t.string   "fec_ids"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "transparancy_id"
    t.text     "bio"
    t.string   "bio_URL"
  end

  create_table "teams", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "linkedin_url"
    t.string   "github_url"
    t.string   "twitter_url"
    t.string   "website_url"
    t.string   "image_url"
    t.string   "position"
    t.text     "bio"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "provider"
    t.string   "uid"
    t.string   "name"
    t.string   "oauth_token"
    t.string   "oauth_secret"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
