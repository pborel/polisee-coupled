# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.config.autoload_paths << Rails.root.join('lib')

TwitterExample::Application.initialize!
