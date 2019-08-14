Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users do
  #  only: [:index, :edit, :update] 
    collection do
      get :search
    end
  end
  
  resources :groups, only: [:new, :delete, :edit, :update, :create] do 
    resources :messages, only: [:index, :create]
  end
end
