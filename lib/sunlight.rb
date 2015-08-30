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

    # def local_legislators(lat, long)
    #   self.class.get("/legislators/locate",
    #                   headers: headers,
    #                   query: {latitude: lat, longitude: long})
    # end

    def local_legislators(zip)
      self.class.get("/legislators/locate",
                      headers: headers,
                      query: {zip: zip})
    end

    def bills
      self.class.get("/bills",
                      headers: headers)
    end

    def bill(bill_id)
      self.class.get('/bills',
                      headers: headers,
                      query: {bill_id: bill_id})
    end

    def headers
      {"X-APIKEY" => token}
    end

    def token
      ENV['SUNLIGHT_KEY']
    end

  end

end
