TwitterExample::Application.routes.draw do
  get "favorites/index"
  get "favorites/create"
  get "favorites/destroy"
  root 'home#index'

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  # get 'bills/search', to: 'bills#search'

  resources :tweets, only: [:new, :create]
  resources :sessions, only: [:create]
  get 'check', to: 'sessions#show'

  resource :home, only: [:show]

  resources :bills, only: [:index, :show]

  resources :users, only: [:update, :destroy, :show]

  resources :favorites, only: [:create, :index, :destroy]

  resources :legislators, only: [:index, :show] do
    # resources :bills, only: [:index, :show]
  end

  resources :teams, only: [:index, :show]

  get "/*path" => "home#index"
end
