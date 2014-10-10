Rails.application.routes.draw do

  root 'application#index'
  get '/mixd', to: 'portfolio#mixd'
  get '*path' => 'application#index'

end
