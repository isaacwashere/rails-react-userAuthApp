#inserting a level of middleware and using the Cors module to do it
# all the rules placed inside will be intercepted by the Rails config 
# at the top of the chain, want to establish the listed rules
# i.e. if an app tries to communicate with my system and it is not authorized to do so(i.e. from a non-whitelisted domain)...
#...they should not have any access to the system
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  
  #ALSO NEED TO DO THIS ENTIRE ALLOW BLOCK FOR A SITE IN PRODUCTION
  #may change due to what FrontE app working with and what port
  allow do 
    origins "http://localhost:3000"

    #resource with a star will allow all resources, allowing any headers, allowing certain methods (i.e. GET, POST, PUT etc.) 
    #credentials true is what will allow the passing of headers back and forth, i.e. passing the cookie from FE app to BE app
    resource "*", headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true
  end 
end 


