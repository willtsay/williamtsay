Rails.application.routes.draw do

  root 'application#index'
  get '/mixd', to: 'mixd#mixd'
  get '*path' => 'application#index'

end
