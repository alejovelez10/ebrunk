Rails.application.routes.draw do
  #brunk routes
  get 'brunks/step1/:id' , to: 'brunks#step1', as: 'step1'
  get 'brunks/step2/:id1/:id2' , to: 'brunks#step2', as: 'step2'
  get 'brunks/my_brunks', to: 'brunks#my_brunks', as: 'my_brunks'
  get 'brunks/show/:id', to: 'brunks#show', as: 'show'
  get 'brunks/show_required/:id', to: 'brunks#show_required', as: 'show_required'
  get 'brunks/brunks_required', to: 'brunks#brunks_required', as: 'brunks_required'

  post 'brunks/create_brunk', to: 'brunks#create_brunk', as: 'create_brunk'
  get "get_properties", to: "properties#get_properties"
  #
  resources :properties
  resources :countries
  devise_for :runners , :controllers => { :omniauth_callbacks => "omniauth_callbacks" }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#index'
  
  get "runner/home", to: "welcome#runner_home", as: "runner_home"
  
  get "pagina_show", to: "welcome#pagina_show", as: "pagina_show"
  
  get "runners/avatar", to: "welcome#runners_avatar", as: "runners_avatar"

  get "index/contacs", to: "welcome#index_contacs", as: "index_contacs"

  post "cambios/:id", to: "properties#cambios", as: "cambios"

  #contacto routes

  post "new_contact", to: "contacts#create", as: "new_contact"
  get 'properties/:id' , to: 'properties#show', as: 'properties_show'

  
  get 'crear_call/:id' , to: 'contacts#crear_call', as: 'crear_call'  
  post "new_comment_brunk", to: "brunks#new_comment_brunk", as: "new_comment_brunk"

end


