class SnailSnapsController < ApplicationController
  def index 
    @snail_snaps = SnailSnap.all

    @comment = Comment.new
  end 

  def new 
    @snail_snap = SnailSnap.new
  end 

  def create 
    @current_snail.my_snaps << SnailSnap.create(snail_snap_params)

    redirect_to snail_path(@current_snail)
  end 

  private 
  
  def snail_snap_params
    params.require(:snail_snap).permit(:img_url, :caption)
  end
end
