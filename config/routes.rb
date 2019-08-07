Rails.application.routes.draw do
  devise_for :users
  root to:  'messages#index'
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :delete, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
