require 'bcrypt'

class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :email, presence: true, uniqueness: true
    validates :user_tag, presence: true, length: { minimum: 4 }
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :user_url, presence: true
    validates :status, presence: true
    validates :description, presence: true
    attr_reader :password
    before_validation :ensure_session_token


    
    # Encryption
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user.nil?
        @user.is_password?(password) ? @user : nil
    end

    private 
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end
end
