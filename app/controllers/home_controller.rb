require 'net/https'

class HomeController < ActionController::Base
  layout 'application'
  before_action :set_variables
  def index
  end

  def redirect_demo
    uri = URI(@api_link)
    http = ::Net::HTTP.new(uri.host, uri.port)
    # http.use_ssl = true
    request = ::Net::HTTP::Post.new(uri.path, {'Content-Type' => 'application/json', "Authorization" => "Bearer lSHQbeevaDaJQclsd7Ul20U5Cto1"})
    request.body = params.require(:call_request).permit(:name, :pronoun, :phone_number).to_json
    response = http.request(request)
    # render plain: response.to_s
    redirect_to root_path
  end

  private
  def set_variables
    @app_link = 'https://ucall-app.etronresearch.work/'
    @api_link = 'http://api.etronresearch.work:10101/v1/api/make-demo-call'
  end
end
