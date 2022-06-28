class Api::UsersController < ApplicationController
      skip_before_action :verify_authenticity_token
  
      def new 
          render :new
      end
      
      def show 
          render :show
      end
  
      def create
         @user = User.new(user_params)
         @user.user_tag = tag_creator()
          if @user.save
              login!(@user)
              render :show
          else
              #flash.now[:errors] = @user.errors.full_messages
              render json: @user.errors.full_messages, status: 422
        end
  
      end
      
      private
      def tag_creator 
        tag = '';
        4.times do
          int = rand(10)
          int = int.to_s
          tag += int
        end
        return tag
      end

      def user_params
          params.require(:user).permit(:username, :password, :email)
      end
  end
  