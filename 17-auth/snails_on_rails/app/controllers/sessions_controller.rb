class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :login]

  def reset_page_count
    # cookies[:page_count] = 0
    session.delete(:page_count)

    redirect_back fallback_location: snails_path
  end 


  def new 
  end 


  def login 
    
    # find a user by their name
    snail = Snail.find_by(name: params[:session][:name])

    # Authenticate a user by their password
    if snail && snail.authenticate(params[:session][:password])
      session[:snail_id] = snail.id
      redirect_to snail_path(snail)
    else 
      flash[:error] = "Username or Password Incorrect"
      redirect_to new_login_path
    end 
  end 


  def logout
    session.delete(:snail_id)

    redirect_to snails_path
  end 


end
