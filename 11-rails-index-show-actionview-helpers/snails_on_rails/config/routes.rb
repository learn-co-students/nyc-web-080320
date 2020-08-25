Rails.application.routes.draw do
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :snails, only: [:index, :show]

  # get "/snails", to: "snails#index", as: "snails" 
  # get "/snails/:id", to: "snails#show", as: "snail"
 


end
