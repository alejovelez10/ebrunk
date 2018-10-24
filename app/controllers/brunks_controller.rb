class BrunksController < ApplicationController
before_action :authenticate_runner!
layout 'runner_home'

  def step1
    @property = Property.find(params[:id])
    @properties = Property.where(brunk: true).where.not(runner_id: current_runner.id).paginate(:page => params[:page], :per_page => 20)
  end

  def step2
     @property = Property.find(params[:id1])
     @property1 = Property.find(params[:id2])
     cookies[:property]   = @property.id 
     cookies[:property1] = @property1.id

  end

  def my_brunks

    @brunks = current_runner.brunks

  end

  def show
    @brunk = Brunk.find(params[:id])
    @brunk_tracing = BrunkTracing.all
  end

  def show_required
    @brunk = Brunk.find(params[:id])
  end


  def brunks_required

     @brunks = current_runner.brunks_one

  end


  def create_brunk
     
     Brunk.create(runner_one_id: params[:idrunnerone], runner_two_id: params[:idrunnertwo], property_one_id: params[:idprone], property_two_id: params[:idprtwo])

  end


 def new_comment_brunk
     
  @brunk_tracing = BrunkTracing.create(brunk_id: params[:brunk_id], comment: params[:comment], offer: params[:offer], runner_id: params[:runner_id])
  
  end


end



  