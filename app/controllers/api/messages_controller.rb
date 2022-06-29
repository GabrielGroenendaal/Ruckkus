

class Api::MessagesController < ApplicationController

      def show
            @message = Message.find(params[:id])
      end


      def create
            @message = Message.new(message_params)
            @channel = Channel.find(params[:channel_id])
            @message.sender_id = current_user.id
            @message.channel_id = @channel.id
            if @message.save!
                  ChannelChannel.broadcast_to(@channel, @message)
                  render :show 
            else  
                  render json: @message.errors.full_messages, status: 422
            end
      end


      def update 
            @message = Message.find(params[:id])
            @channel = Channel.find(@message.channel_id)
            if (@message && @message.sender_id == current_user.id) && @message.update(message_params)
                  ChannelChannel.broadcast_to(@channel, @message)
                  render :show 
            else  
                  render json: @message.errors.full_messages, status: 422
            end
      end


      def destroy 
            @message = Message.find(params[:id])
            @channel = Channel.find(@message.channel_id)
            if (@message.sender_id == current_user.id && @message.destroy)
                  ChannelChannel.broadcast_to(@channel, @message)
                  render :show 
            else  
                  render json: @message.errors.full_messages, status: 422
            end
      end

      private
      def message_params 
            params.require(:message).permit(:content)
      end
end