#where set the definitions of what the cookie will be structured like
#the key is the name of session cookie and convention is to start it with an underscore
#domain is whatever the domain is 
Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "localhost:3000"

