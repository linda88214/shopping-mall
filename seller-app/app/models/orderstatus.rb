class Orderstatus < ApplicationRecord
	has_many :orders
	belongs_to :seller 
	belongs_to :buyer
end
