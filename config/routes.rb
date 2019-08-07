Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :delete, :edit, :update, :create] do 
    resources :messages, only: [:index]
  end
end
