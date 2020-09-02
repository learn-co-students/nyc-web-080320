class SnailsController < ApplicationController
  before_action :find_snail, only: [:show, :edit, :update, :destroy]

  def index
    @snails = Snail.where

    if params[:snail] 
      if params[:snail][:sort_word] == 'asc'   
        @snails = @snails.sort {|a, b| a.age - b.age}
      else
        @snails = @snails.sort {|a, b| b.age - a.age} 
      end 
    end 
    
    # render :index
  end

  def show 
    # @snail = Snail.find(params[:id])

    # render :show
  end 
  
  def new 
    @snail = Snail.new
    
    3.times {@snail.my_snaps.build}
    # render :new
  end 
  
  def create 
    @snail = Snail.create(snail_params)
    
    # byebug
    
    # snail = Snail.new(snail_params)
    # snail.save
    if @snail.save
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
    3.times {@snail.my_snaps.build}
    
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
    params.require(:snail).permit(:name, :age, :slime_level, :img_url, my_snaps_attributes: [:caption, :img_url])
  end 

  def snail_snap_params 
    params.require(:snail).permit(my_snaps_attributes: [:caption, :img_url])
  end 

  def find_snail 
    @snail = Snail.find(params[:id])
  end 
end


