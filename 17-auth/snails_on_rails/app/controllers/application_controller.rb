class ApplicationController < ActionController::Base
  # before_action :logged_in_snail
  before_action :authorized

  def logged_in_snail
    @current_snail = Snail.find_by(id: session[:snail_id])
  end 


  def authorized
    redirect_to new_login_path unless logged_in_snail
  end 

end
