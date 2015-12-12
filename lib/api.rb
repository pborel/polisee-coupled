module Api
  include Sunlight
  include Twitter


  def self.create_legislators
    self.query_sunlight_data
    3.times do
      self.query_twitter_images
      sleep(16.minutes)
    end
  end

  # def self.populate_secondary_info
    # self.query_for_transparancy_id
    # self.query_for_entity_overview
    # self.remove_p_tags
  # end

# private

  # def self.query_for_transparancy_id
  #   sunlight_client = Transparancy.new
  #   legislators =  Legislator.where(transparancy_id: [nil,""])
  #   legislators.each do |legislator|
  #     response = (sunlight_client.transparancy_id(legislator.bioguide_id)).response.body
  #     parsed_response = JSON.parse(response)
  #     if parsed_response.length > 0
  #       id = parsed_response[0]["id"]
  #       legislator.update(transparancy_id: id)
  #     end
  #   end
  # end

  # def self.query_for_entity_overview
  #   sunlight_client = Transparancy.new
  #   legislators = Legislator.where.not(transparancy_id: [nil,""])
  #   legislators.each do |legislator|
  #     response = (sunlight_client.entity_overview(legislator)).response.body
  #     data = JSON.parse(response)
  #     self.add_bio_fields_to_legislator(legislator, data)
  #     self.add_cycle_details(legislator, data)
  #   end
  # end


  def self.query_sunlight_data
    sunlight_client = Congress.new
    (1..11).each do |page_number|
      response_data = sunlight_client.all_legislators(page_number)
      legislators = JSON.parse(response_data.body)
      legislators["results"].each do |rep|
        self.create(rep)
      end
    end
  end

  def self.query_twitter_images
    legislator_without_image = Legislator.where(image: ["", nil])
    # while legislator_without_image
        legislator_without_image.first(180).each do |legislator|
          if legislator.twitter_id.nil? || legislator.twitter_id == ""
            legislator.update(image: "https://lh4.ggpht.com/B2UjZIJ0iwp0LfkUnITqp_iYek9PWEXuXLOHl3XYPMR_2zEGsHPR6ruu4OeQKOfvJnJ8=w300-rw")
          else
            twitter_client = Twitter::REST::Client.new do |config|
              config.consumer_key        = ENV['TWITTER_CONSUMER_KEY']
              config.consumer_secret     = ENV['TWITTER_CONSUMER_SECRET']
            end
            twitter_profile = twitter_client.user(legislator.twitter_id)
            small_image_url = twitter_profile.profile_image_url.to_s
            original_size_url = small_image_url.sub("_normal.",".")
            legislator.update(image: original_size_url)
          end
        end
      # end
  end

  def self.add_bio_fields_to_legislator(legislator, data)
    if data["metadata"]["bio"] && data["metadata"]["bio_url"]
      legislator.update(bio: data["metadata"]["bio"],
                        bio_URL: data["metadata"]["bio_url"])
    end
  end

  def self.remove_p_tags
    legislators = Legislator.where.not(bio: nil)
    legislators.each do |legislator|
      new_bio = legislator.bio.gsub("<p>", '').gsub('</p>','')
      legislator.update(bio: new_bio)
    end
  end

  def self.add_cycle_details(legislator, data)
      cycles = data["totals"].keys.delete_if{|value| value == "-1"}
      cycles.each do |year|
        cycleDetails = data["totals"][year]
        legislator.cycle_amounts.create(year: year,
                                        count: cycleDetails["recipient_count"],
                                        amount: cycleDetails["recipient_amount"])
      end
  end

  def self.create(rep)
    legislator = Legislator.new(
      bioguide_id: rep["bioguide_id"],
      birthday: rep["birthday"],
      chamber: rep["chamber"],
      contact_form: rep["contact_form"],
      crp_id: rep["crp_id"],
      district: rep["district"],
      facebook_id: rep["facebook_id"],
      fax: rep["fax"],
      first_name: rep["first_name"],
      gender: rep["gender"],
      govtrack_id: rep["govtrack_id"],
      in_office: rep["in_office"],
      last_name: rep["last_name"],
      leadership_role: rep["leadership_role"],
      lis_id: rep["lis_id"],
      middle_name: rep["middle_name"],
      name_suffix: rep["name_suffix"],
      nickname: rep["nickname"],
      oc_email: rep["oc_email"],
      ocd_id: rep["ocd_id"],
      office: rep["office"],
      party: rep["party"],
      phone: rep["phone"],
      state: rep["state"],
      state_name: rep["state_name"],
      state_rank: rep["state_rank"],
      term_end: rep["term_end"],
      term_start: rep["term_start"],
      thomas_id: rep["thomas_id"],
      title: rep["title"],
      twitter_id: rep["twitter_id"],
      votesmart_id: rep["votesmart_id"],
      website: rep["website"],
      image: rep["image"]
      )
    legislator.save
  end


end
