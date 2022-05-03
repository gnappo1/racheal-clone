class User < ApplicationRecord
    has_many :watchlists,  dependent: :destroy
    has_many :movies, through: :watchlists

     # password security
     has_secure_password

     validates :username, presence: true, length: {in: 6..25}
     validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
     validates :password, length: {in: 8..25}
end
