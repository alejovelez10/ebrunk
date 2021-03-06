class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_runner!, :except => [:index, :show, :get_properties]
  layout 'runner_home', :only => [:new, :edit]

  def index
    if params[:search] || params[:search2] || params[:search3] || params[:search4] || params[:search5] || params[:search6]
      @properties = Property.all.search(params[:search],params[:search2], params[:search3],params[:search4],params[:search5],params[:search6]).paginate(:page => params[:page], :per_page => 4)
    else
      @properties = Property.all.paginate(:page => params[:page], :per_page => 4)
    end

    #@country = Country.all
    render :layout => "runners"
  end

  def get_properties
    if params[:search] || params[:search2] || params[:search3] || params[:search4] || params[:search5] || params[:search6]
      properties = Property.all.search(params[:search],params[:search2], params[:search3],params[:search4],params[:search5],params[:search6]).paginate(:page => params[:page], :per_page => 4)
    else
      properties = Property.all.paginate(:page => params[:page], :per_page => 4)
    end

    render :json => {
      data: ActiveModelSerializers::SerializableResource.new(properties, each_serializer: PropertySerializer)
    }
  end

  def show
    render :layout => "runners"
  end


  def new
    @property = Property.new
  end

  def cambios
    @property = Property.find(params[:id])
    @property.update(state_favorite: !@property.state_favorite)
  end

  def edit

  end

  def create
    @property = Property.new(property_params)

    respond_to do |format|
      if @property.save
        format.html { redirect_to runner_home_path, notice: 'Property was successfully created.' }
        format.json { render :show, status: :created, location: @property }
      else
        format.html { render :new }
        format.json { render json: @property.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /properties/1
  # PATCH/PUT /properties/1.json
  def update
    respond_to do |format|
      if @property.update(property_params)
        format.html { redirect_to @property, notice: 'Property was successfully updated.' }
        format.json { render :show, status: :ok, location: @property }
      else
        format.html { render :edit }
        format.json { render json: @property.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /properties/1
  # DELETE /properties/1.json
  def destroy
    @property.destroy
    respond_to do |format|
      format.html { redirect_to runner_home_path, notice: 'Property was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def property_params
      params.require(:property).permit(:type_of_offer,:price, :brunk_type, :brunk, :parking_lot, :property_type, :runner_id, :country_id, :department, :city, :address, :latitude, :length, :prince, :stratum, :area, :blueprints, :number_bedrooms, :number_bathrooms, :levels, :state, :state_favorite, :url_video, :images, property_images_attributes: [:id, :property_id, :runner_id, :file, :_destroy])
    end
end
