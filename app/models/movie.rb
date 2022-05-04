class Movie < ApplicationRecord
    has_many :watchlists,  dependent: :destroy
    has_many :users, through: :watchlists

    validates :title, :image_url, :genre, :total_time, presence: true
    validates :plot, length: { maximum: 200 }
end
