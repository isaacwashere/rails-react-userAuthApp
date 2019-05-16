class RegistrationsController < ApplicationController 

  #here will be able to tie directly into the activerecord create process 


  def create
    user = User.create! (
      email: params['user']['email'],
      password: params['user']['password'],
      #rails requires that new registrations you have a pword confirmation
      #its up to the FE app to require the user to do that
      password_confirmation: params['user']['password_confirmation']
    )
    if user 
      session[:user_id] = user.id 
      render json: {
        status: created,
        user: user
      }
    else 
      #status 500 because if the user could not create a user it means that some form of error happened
      render json: {
        status: 500
      }
    end 

  end 

end 

