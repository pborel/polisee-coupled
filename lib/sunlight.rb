module Sunlight

  class Base
    include HTTParty

    def max_results
      {per_page: 50}
    end

    def headers
      {"X-APIKEY" => sunlight_token}
    end

    def sunlight_token
      ENV['SUNLIGHT_KEY']
    end

    def open_secrets_token
      ENV['OPENSECRETS_KEY']
    end

  end

  class Congress < Base
    base_uri 'https://congress.api.sunlightfoundation.com/'

    def all_legislators(page)
        self.class.get("/legislators",
                        headers: headers,
                        query: {per_page: 50, page: page})
    end

    def local_legislators_at(lat, lng)
      self.class.get("/legislators/locate",
                      headers: headers,
                      query: {latitude: lat, longitude: lng})
    end

    def local_legislators_in(zip)
      self.class.get("/legislators/locate",
                      headers: headers,
                      query: {zip: zip})
    end

    def bills(page = 1)
      self.class.get("/bills",
                      headers: headers,
                      query: {per_page: 50, page: page})
    end

    def bill(bill_id)
      self.class.get('/bills',
                      headers: headers,
                      query: {bill_id: bill_id})
    end

    def search_bills(query, page = 1)
      self.class.get('/bills/search',
                      headers: headers,
                      query: {query: query,
                              "history.enacted" => true,
                              per_page: 50,
                              page: page})
    end

    def upcoming_bills(page = 1)
      self.class.get('/upcoming_bills',
                      headers: headers,
                      query: {per_page: 50, page: page})
    end

  end

  class Opensecrets < Base
    base_uri 'http://www.opensecrets.org/api/'

    def legislators
      HTTParty.get("http://www.opensecrets.org/api/?method=getLegislators&id=MI&apikey=#{open_secrets_token}")
      # self.class.get( query: {  apikey: "2fb53176b3b43b71c93af6d27886bc8b",
                                # method: "getLegislators",
                                # id:     "MI" } )
    end

    # def opensecrets_id(bioguide_id)
    #   self.class.get( "/entities/id_lookup.json",
    #                     query:  {apikey: open_secrets_token,
    #                             bioguide_id: bioguide_id})
    # end
    #
    # def top_donors(legislator, year)
    #   url = "/aggregates/pol/#{legislator.opensecrets_id}/contributors.json"
    #   p url
    #   self.class.get( url,
    #                   query:  {apikey: open_secrets_token,
    #                           cycle: year,
    #                           limit: 10})
    # end
    #
    # def top_sectors(legislator, year)
    #   url = "/aggregates/pol/#{legislator.opensecrets_id}/contributors/sectors.json"
    #   self.class.get( url,
    #                   query:  {apikey: open_secrets_token,
    #                           cycle: year,
    #                           limit: 15})
    # end
    #
    # def entity_overview(legislator)
    #   url = "/entities/#{legislator.opensecrets_id}.json"
    #   self.class.get(url,
    #                 query: {apikey: open_secrets_token})
    # end

  end

end
