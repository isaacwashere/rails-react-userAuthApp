class User < ApplicationRecord
  # has secure password tells the User Model that the password digest field on the model needs to be encrypted
  has_secure_password

  validates_presence_of :email

  validates_uniqueness_of :email
end
