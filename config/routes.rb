Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static#home"
  
  #ability to login
  resources :sessions, only: [:create]

  #ability to create accounts 
  resources :registrations, only: [:create]

  #ability to check to see if a user is logged in or not
  get :logged_in, to:"sessions#logged_in"

  #ability to log them out
  delete :logout, to: "sessions#logout"
end
