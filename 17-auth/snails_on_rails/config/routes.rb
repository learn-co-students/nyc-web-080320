Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # resources :snails, only: [:index, :show, :new, :create, :edit, :update, :delete]
  
  resources :snails
  resources :comments
  resources :snail_snaps, only: [:new, :create, :index]

  delete '/sessions/reset_page_count', to: 'sessions#reset_page_count', as: 'page_reset'
  delete '/logout', to: 'sessions#logout', as: 'logout'

  post '/login', to: 'sessions#login', as: 'login'
  get '/sessions/new', to: 'sessions#new', as: 'new_login'

  # get "/snails", to: "snails#index", as: "snails" 
  # get "/snails/new", to: "snails#new", as: "new_snail"
  
  # get "/snails/:id", to: "snails#show", as: "snail"
  # get "/snails/:id/edit", to: "snails#edit", as: "edit_snail"
 


end
