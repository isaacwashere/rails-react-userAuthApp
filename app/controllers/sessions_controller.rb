class SessionsController < ApplicationController 

  #must import the concern
  include CurrentUserConcern

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

  #going to add a concern because want to do is give the ability to see if there is a current user (very similar to devise)
  #do it so that any method can check to see that a user is logged in or not 
  def logged_in
    #checks to see if a current user is available 
    
    if @current_user
      render json: {
        logged_in: true,
        user: @current_user
      }
    else 
      render json: {
        logged_in: false
      }
    end 

  end 

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end 



end 
