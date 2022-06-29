Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do

      resources :users
      resource :session, only: [:create, :destroy]

      resources :servers do 
          resources :channels, only: [:create]
      end

      resources :channels, only: [:update, :show, :destroy] do
          resources :messages, only: [:create]
      end

      resources :conversations, only: [:index, :show, :create, :destroy] do 
          resources :direct_messages, only: [:create]
      end

      resources :messages, only: [:update, :show, :destroy, :index]
      resources :direct_messages, only: [:update, :destroy, :show]

      resources :server_memberships, only: [:create, :destroy]
      resources :conversation_participants, only: [:create, :destroy]
      #resources :friendships, only: [:create, :destroy, :update, :index]
  end
  mount ActionCable.server => "/cable"
  root to: "static_pages#root"

end
