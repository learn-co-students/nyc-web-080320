class SnailsController < ApplicationController
  
  def index
    @snails = Snail.all
    # render :index
  end

  def show 
    @snail = Snail.find(params[:id])

    # render :show
  end 
  
  def new 
    @snail = Snail.new
    # render :new
  end 

  def create 
    snail = Snail.create(snail_params)
    # redirect_to snail_path(@snail.id)
    # redirect_to @snail
    redirect_to snail_path(snail)
  end

  def edit 
    @snail = Snail.find(params[:id])
    
    # render :edit
  end 
  
  def update
    snail = Snail.find(params[:id])
    snail.update(snail_params)

    redirect_to snail_path(snail)
  end 

  private 

  def snail_params
    params.require(:snail).permit(:name, :age, :slime_level)
  end 
end


