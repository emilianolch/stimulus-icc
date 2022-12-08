Rails.application.routes.draw do
  get 'base/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'base#index'
end
