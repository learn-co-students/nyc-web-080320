class SnailsController < ApplicationController
  before_action :find_snail, only: [:show, :edit, :update, :destroy]

  def index
    @snails = Snail.all
    # render :index
  end

  def show 
    # @snail = Snail.find(params[:id])
    if session[:page_count]
      session[:page_count] = session[:page_count].to_i + 1
    else 
      session[:page_count] = 1
    end 
    # render :show
  end 

  
  def new 
    @snail = Snail.new
    # render :new
  end 

  def create 
    @snail = Snail.create(snail_params)
    # snail = Snail.new(snail_params)
    # snail.save
    if @snail.valid?
      flash[:success] = "WELCOME FELLOW SNAIL"
      redirect_to snail_path(@snail)
    else 
      flash[:my_errors] = @snail.errors.full_messages
      redirect_to new_snail_path
    end 
    # redirect_to snail_path(@snail.id)
    # redirect_to @snail
  end

  def edit 
    # @snail = Snail.find(params[:id])
    
    # render :edit
  end 
  
  def update
    # @snail = Snail.find(params[:id])
    if @snail.update(snail_params)
      redirect_to snail_path(@snail)
    else
      flash[:my_errors] = @snail.errors.full_messages
      redirect_to edit_snail_path(@snail)
    end 
    
  end 
  
  def destroy 
    # @snail = Snail.find(params[:id])
    @snail.destroy 

    redirect_to snails_path    
  end 

  private 

  def snail_params
    params.require(:snail).permit(:name, :age, :slime_level, :img_url)
  end 

  def find_snail 
    @snail = Snail.find(params[:id])
  end 
end


