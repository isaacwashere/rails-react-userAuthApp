class ApplicationController < ActionController::Base

  #need to put a flag in there
  #Rails has a set of rules when trying to commmunicate with a route 
  # one of the rules is that they use a CSRF Token(a token egenrated by the system, and it is secure because it uses the secret key value)
  # it checks to make sure that a user typing into a Rails form is actually the real user and not somone hijacking it 
  #with an API, all of that logic happend in a different app
  skip_before_action :verify_authenticity_token


end
