# TwitterExample::Application.configure do
#   # Settings specified here will take precedence over those in config/application.rb.

#   # Code is not reloaded between requests.
#   config.cache_classes = true

#   # Eager load code on boot. This eager loads most of Rails and
#   # your application in memory, allowing both thread web servers
#   # and those relying on copy on write to perform better.
#   # Rake tasks automatically ignore this option for performance.
#   config.eager_load = true

#   # Full error reports are disabled and caching is turned on.
#   config.consider_all_requests_local       = false
#   config.action_controller.perform_caching = true

#   # Enable Rack::Cache to put a simple HTTP cache in front of your application
#   # Add `rack-cache` to your Gemfile before enabling this.
#   # For large-scale production use, consider using a caching reverse proxy like nginx, varnish or squid.
#   # config.action_dispatch.rack_cache = true

#   # Disable Rails's static asset server (Apache or nginx will already do this).
#   config.serve_static_assets = false

#   # Compress JavaScripts and CSS.
#   config.assets.js_compressor = :uglifier
#   # config.assets.css_compressor = :sass

#   # Do not fallback to assets pipeline if a precompiled asset is missed.
#   config.assets.compile = false

#   # Generate digests for assets URLs.
#   config.assets.digest = true

#   # Version of your assets, change this if you want to expire all your assets.
#   config.assets.version = '1.0'

#   # Specifies the header that your server uses for sending files.
#   # config.action_dispatch.x_sendfile_header = "X-Sendfile" # for apache
#   # config.action_dispatch.x_sendfile_header = 'X-Accel-Redirect' # for nginx

#   # Force all access to the app over SSL, use Strict-Transport-Security, and use secure cookies.
#   # config.force_ssl = true

#   # Set to :debug to see everything in the log.
#   config.log_level = :info

#   # Prepend all log lines with the following tags.
#   # config.log_tags = [ :subdomain, :uuid ]

#   # Use a different logger for distributed setups.
#   # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)

#   # Use a different cache store in production.
#   # config.cache_store = :mem_cache_store

#   # Enable serving of images, stylesheets, and JavaScripts from an asset server.
#   # config.action_controller.asset_host = "http://assets.example.com"

#   # Precompile additional assets.
#   # application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
#   # config.assets.precompile += %w( search.js )

#   # Ignore bad email addresses and do not raise email delivery errors.
#   # Set this to true and configure the email server for immediate delivery to raise delivery errors.
#   # config.action_mailer.raise_delivery_errors = false

#   # Enable locale fallbacks for I18n (makes lookups for any locale fall back to
#   # the I18n.default_locale when a translation can not be found).
#   config.i18n.fallbacks = true

#   # Send deprecation notices to registered listeners.
#   config.active_support.deprecation = :notify

#   # Disable automatic flushing of the log to improve performance.
#   # config.autoflush_log = false

#   # Use default logging formatter so that PID and timestamp are not suppressed.
#   config.log_formatter = ::Logger::Formatter.new
# end
TwitterExample::Application.configure do
  config.cache_classes = false
  config.eager_load = false
  config.consider_all_requests_local       = false
  config.action_controller.perform_caching = false
  config.action_mailer.raise_delivery_errors = false
  config.active_support.deprecation = :log
  config.active_record.migration_error = :page_load
  config.assets.debug = true
  config.twitter_key = "60SHRZwpBcNfezeueyeKY0VKx"
  config.twitter_secret = "K3cNX7KL33k3MwBfYSOgu627X6Gj2nqm845yKRGVQNtADjBj81"

#    # Set Sunlight API config
  ENV['SUNLIGHT_KEY'] = "6f32253a69584783ba98cbf86120d2d7"
#     # Set environment secrets
  ENV['ORIGIN'] = 'http://localhost:8080'
  ENV['OAUTH_CALLBACK'] = 'http://127.0.0.1:3000/access_token'
  secret_key_base = "493f5c5a69827e7508a85069e7b0f15d0e856d5ca4faab444b8a97520b559ee316a89419ecd5f0cdca9d6e41f86ee89b040b24e6dcfa2b416ba5895bd86eaff0"
  twitter_key = "60SHRZwpBcNfezeueyeKY0VKx"
  twitter_secret = "K3cNX7KL33k3MwBfYSOgu627X6Gj2nqm845yKRGVQNtADjBj81"
  ENV['SECRET_KEY_BASE'] = '493f5c5a69827e7508a85069e7b0f15d0e856d5ca4faab444b8a97520b559ee316a89419ecd5f0cdca9d6e41f86ee89b040b24e6dcfa2b416ba5895bd86eaff0'
  ENV['TWITTER_CONSUMER_KEY'] = '60SHRZwpBcNfezeueyeKY0VKx'
  ENV['TWITTER_CONSUMER_SECRET'] = 'K3cNX7KL33k3MwBfYSOgu627X6Gj2nqm845yKRGVQNtADjBj81'
end
