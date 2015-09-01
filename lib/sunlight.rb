module Sunlight

  class Base
    include HTTParty

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


end
