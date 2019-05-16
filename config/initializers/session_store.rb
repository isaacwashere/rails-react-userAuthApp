#where we set the definitions of what the cookie will be structured like

#going to make the initializer dynamic based on the environment
if Rails.env == "production"
#the key is the name of session cookie and convention is to start it with an underscore
#domain is whatever the domain is 
  Rails.application.config.session_store :cookie_store, key: "_authentication_app", domain: "localhost:3000"
else 
  Rails.application.config.session_store :cookie_store, key: "_authentication_app"
end 

# if you have the domain listed, the browser is going to expect that the cookies are going to be set from that domain which will not work....
#...when doing this locally becaause won't be on that domain

