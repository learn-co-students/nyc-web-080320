class SessionsController < ApplicationController
  def reset_page_count
    # cookies[:page_count] = 0
    session.delete(:page_count)

    redirect_back fallback_location: snails_path
  end 
end
