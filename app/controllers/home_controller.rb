require 'net/https'

class HomeController < ActionController::Base
  layout 'application'
  before_action :set_variables
  def index
  end

  def redirect_demo
    uri = URI(@api_link)
    http = ::Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    request = ::Net::HTTP::Post.new(uri.path + params.require(:call_request).permit(:name, :phone, :gender).to_query(:demo), {'Content-Type' => 'application/json'},)
    response = http.request(request)
    body = JSON.parse(response.body)
    render plain: @app_link + 'demo/' + body['userId']
  end

  private
  def set_variables
    @app_link = 'https://ucall-app.etronresearch.work/'
    @api_link = 'https://ucall-api.etronresearch.work/'
  end
end
