json.array!(@teams) do |team|
  json.extract! team, :id, :name, :email, :linkedin_url, :github_url, :website_url
  json.url team_url(team, format: :json)
end
