TwitterExample::Application.configure do
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false
  config.action_mailer.raise_delivery_errors = false
  config.active_support.deprecation = :log
  config.active_record.migration_error = :page_load
  config.assets.debug = true
  config.twitter_key = "NRrzT6PKyd2MPxN3dmeDkTma8"
  config.twitter_secret = "OXXlamLNvgUHR7SREAr8oiQxLIL3h9Ay0Cj2d13rytnnkDEb2H"

   # Set Sunlight API config
  ENV['SUNLIGHT_KEY'] = "6f32253a69584783ba98cbf86120d2d7"
    # Set environment secrets
  ENV['ORIGIN'] = 'http://localhost:8080'
  ENV['OAUTH_CALLBACK'] = 'http://127.0.0.1:3000/access_token'
  ENV['SECRET_KEY_BASE'] = '493f5c5a69827e7508a85069e7b0f15d0e856d5ca4faab444b8a97520b559ee316a89419ecd5f0cdca9d6e41f86ee89b040b24e6dcfa2b416ba5895bd86eaff0'
  ENV['TWITTER_CONSUMER_KEY'] = 'AZG7oAw868o26emGcQPpfMdr0'
  ENV['TWITTER_CONSUMER_SECRET'] = 'U1ZCVQw3WwEDoaith3pjfOawJIWdIyRrNqviHZuS5vknwRWI7I'

end
