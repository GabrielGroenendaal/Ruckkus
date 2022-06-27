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
  
          if @user.valid?
              @user.save!
              login!(@user)
              render :show
          else
              flash.now[:errors] = @user.errors.full_messages
              render :json => @user
          end
  
      end
      
      private
      def user_params
          params.require(:user).permit(:username, :password)
      end
  end
  