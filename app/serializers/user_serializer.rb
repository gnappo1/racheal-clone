class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :role
  has_many :watchlists
end
