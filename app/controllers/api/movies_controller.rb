class Api::MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        movie = Movie.find_by(id: params[:id])
        render json: movie
    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end

    def update
        movie = Movie.find_by(id: params[:id])
        movie&.update!(movie_params)
        render json: movie, status: :created
        end

    def destroy
        movie = Movie.find_by(id: params[:id])
        movie&.destroy
        render json: {}, status: :no_content
    end

    private

    def movie_params
        params.permit(:title, :image_url, :genre, :plot, :total_time)
    end
end
