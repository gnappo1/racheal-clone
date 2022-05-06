class Movie < ApplicationRecord
    has_many :watchlists,  dependent: :destroy
    has_many :users, through: :watchlists
    belongs_to :creator, class_name: "User"

    validates :title, :image_url, :genre, :total_time, presence: true
    validates :plot, length: { maximum: 500 }
end
