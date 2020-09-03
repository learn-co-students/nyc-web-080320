class Snail < ApplicationRecord
  # has_many :snail_snaps
  has_many :my_snaps, foreign_key: "snail_id", class_name: "SnailSnap"

  has_many :comments
  has_many :snail_snaps, through: :comments

  # name has to be unique
  # name has to exsist
  # age has to be greater then 18
  # slime_level has to be "low", "mid", "high"

  # -------Validations-------------
          # Attribute, helper Method, validation arguments
  # validates :name, uniqueness: true
  # validates :name, :age,  presence: true
  # validates :age, numericality: {greater_than_or_equal_to: 150} 
  # validates :slime_level, inclusion: {in: ["low", "mid", "high"]}

  # validate :name_can_not_be_greg

  has_secure_password

  # def password=(secret)
  #   pw = BCrypt::Password.create(secret)
  #   self.password_digest = pw
  # end 



  def name_can_not_be_greg
    if self && self.name.downcase == "greg"
      self.errors.add(:name, "Can not be Greg")
    end 
  end 

  
end
