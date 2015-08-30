TwitterExample::Application.routes.draw do

  root 'home#index'

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'
  get 'bills/search', to: 'bills#search'

  resources :tweets, only: [:new, :create]
  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  resources :bills, only: [:index, :show]



  resources :legislators, only: [:index, :show] do
    resources :bills, only: [:index, :show]
  end



  get "/*path" => "home#index"
end
