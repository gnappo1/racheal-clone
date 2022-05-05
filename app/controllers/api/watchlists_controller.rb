class Api::WatchlistsController < ApplicationController

    def index
        watchlists = Watchlist.all
        render json: watchlists
    end

    def show
        watchlist = Watchlist.find(params[:id])
        render json: watchlist
    end

    def create
        watchlist = Watchlist.create!(watchlist_params)
        render json: watchlist, status: :created
    end

    private

    def watchlist_params
        params.permit(:user_id, :movie_id, :rating, :comment)
    end
end
