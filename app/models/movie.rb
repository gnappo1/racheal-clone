class Movie < ApplicationRecord
    has_many :watchlists,  dependent: :destroy
    has_many :users, through: :watchlists
end
