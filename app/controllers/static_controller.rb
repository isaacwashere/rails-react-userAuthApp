class StaticController < ApplicationController 

  def home 
    render json: { status: "We gucci" }
  end 
end 
