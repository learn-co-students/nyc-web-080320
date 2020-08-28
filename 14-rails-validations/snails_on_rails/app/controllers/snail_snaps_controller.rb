class SnailSnapsController < ApplicationController
  def new 
    @snail_snap = SnailSnap.new
  end 

  def create 
    snail_snap = SnailSnap.create(snail_snap_params)

    redirect_to snail_path(snail_snap.snail)
  end 

  private 
  
  def snail_snap_params
    params.require(:snail_snap).permit(:img_url, :caption, :snail_id)
  end
end
