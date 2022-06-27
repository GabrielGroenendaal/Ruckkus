class FixUserFinally < ActiveRecord::Migration[5.2]
    def change
        drop_table :users
        create_table :users do |t|
          t.string :username, index: true, null: false, unique: true
          t.string :user_tag, null: false, index: true, default: '0001'
          t.string :status, null: false, inclusion: { in: [ "online", "do not disturb", "away", "offline"]}, default: 'offline'
          t.text :description, null: false, default: "Fill this in!"
          t.string :email, null: false, index: true, unique: true
          t.string :password_digest, null: false
          t.string :user_url, null: false, default: 'https://i.imgur.com/Jcptpog.png'
          t.string :session_token, unique: true, null: false 
          t.timestamps 
        end
      end
    end
    