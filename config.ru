# This file is used by Rack-based servers to start the application.

#\ puma

require ::File.expand_path('../config/environment',  __FILE__)
run Rails.application
