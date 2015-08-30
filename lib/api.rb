module Api
  include Sunlight
  include Twitter

## Next refactoring is to implement one method to refresh data

 #  def refresh_legislator_data
 #    self.query_sunlight_data
 #    self.query_twitter_images
 #  end

 # private

  def self.query_sunlight_data
    sunlight_client = Congress.new
    (1..11).each do |page_number|
      reps_search = sunlight_client.all_legislators(page_number)
      @local_legislators = JSON.parse(reps_search.body)
      @local_legislators["results"].each do |rep|
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
          image: rep["image"],
          fec_ids: rep["fec_ids"]
          )
        legislator.save
      end
    end
  end

  def self.query_twitter_images
    legislator_without_image = Legislator.where(image: nil)
    # while legislator_without_image
        legislator_without_image.first(180).each do |legislator|
          if legislator.twitter_id.nil?
            legislator.update(image: "https://lh4.ggpht.com/B2UjZIJ0iwp0LfkUnITqp_iYek9PWEXuXLOHl3XYPMR_2zEGsHPR6ruu4OeQKOfvJnJ8=w300-rw")
          else
            twitter_client = Twitter::REST::Client.new do |config|
              config.consumer_key        = ENV['TWITTER_CONSUMER_KEY']
              config.consumer_secret     = ENV['TWITTER_CONSUMER_SECRET']
            end
            twitter_profile = twitter_client.user(legislator.twitter_id)
            small_image_url = twitter_profile.profile_image_url.to_s
            original_size_url = small_image_url.sub("_normal.jpeg",".jpeg")
            original_size_url = original_size_url.sub("_normal.jpg", ".jpg")
            legislator.update(image: original_size_url)
          end
        end
      # end
  end

end
