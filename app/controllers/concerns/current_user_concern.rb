#This is going to be a module 
module CurrentUserConcern
  extend ActiveSupport::Concern 

  included do 
    before_action :set_current_user 
  end 

  def set_current_user 
    #if a session has a user id, then set an instance variable 
    # here I am leveraging the session
    #only have to check to see, do I have a user id in the session? if so...
    # can use it to query the user, set the instance variable and then any method in the entire app...
    # only has to check to see if there is a current user 
    if session[:user_id]
      @current_user = User.find(session[:user_id])
  end 

end 

