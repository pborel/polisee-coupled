module Sunlight

  class Congress
    include HTTParty

    base_uri 'https://congress.api.sunlightfoundation.com/'

    def all_legislators(page)
      p headers
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

    def bills(page = 3, sponsor = nil)
      self.class.get("/bills",
                      headers: headers,
                      query: {per_page: 50, page: page})
    end

    def bill(bill_id)
      self.class.get('/bills',
                      headers: headers,
                      query: {bill_id: bill_id})
    end

    def max_results
      {per_page: 50}
    end

    def headers
      {"X-APIKEY" => token}
    end

    def token
      ENV['SUNLIGHT_KEY']
    end

  end

end
