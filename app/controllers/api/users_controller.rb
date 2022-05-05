class Api::UsersController < ApplicationController

    skip_before_action :authorized!, only: [:create]
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: UserSerializer.new(user), status: :created
    end

    def show
        render json: UserSerializer.new(@current_user), status: :ok
    end



    private

    def user_params
        params.permit(:email, :password_digest, :username, :role)
    end
end
