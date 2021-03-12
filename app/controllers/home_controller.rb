class HomeController < ActionController::Base
  layout 'application'
  def index
    @app_link = "https://ucall-app.etronresearch.work/"
  end
end
