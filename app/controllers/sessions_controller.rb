class SessionsController < ApplicationController 

  #finding a specific user by passing the user and their email as a nested value
  def create 
    #finds whatever user that is in the system with the email you pass up
    #then it tries to run the authenticate method with whatever password got sent up and if...
    #it all works, store in the variable
    user = User
            .find_by(email: params["user"]["email"])
            .try(:authenticate, params["user"]["password"])

    #if a user is created want to communicate with the session and set the user ID equal to the User ID you just found 
    #okay so the user is successfully authenticated, want to make sure they now have a cookie on their system
    if user 
      #says store the user id, and it goes encrypted into their client(browser/mobile device)
      session[:user_id] = user.id
      render json: {
        status: :created,
        logged_in: true,
        user: user #pass back the entire user that you have in the database and you can show/use anything
      }
    
      #if user not able to log in successfully
      #status 401 is the unauthorized code, the universal HTTP code want to use if a user is not authenticated
    else 
      render json: {
        status: 401
      }
    end 
  end
end 
