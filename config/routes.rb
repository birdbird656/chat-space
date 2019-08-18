Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update] do
    collection do
      get :search
    end
  end
  resources :groups, only: [:new, :delete, :edit, :update, :create] do 
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end