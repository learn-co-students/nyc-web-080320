class SnailsController < ApplicationController
  
  def index
    @snails = Snail.all
    # render :index
  end

  def show 
    @snail = Snail.find(params[:id])

    render :show
  end 

end
