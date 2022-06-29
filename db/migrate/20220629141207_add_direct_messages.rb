class AddDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.integer :creator_id, foreign_key: true, null: false, index: true
      t.integer :conversation_id, foreign_key: true, null: false, index: true
      t.integer :replied_message_id, foreign_key: true, index: true
      t.text :content, null: false
      t.timestamps
    end
    drop_table :messages
    create_table :messages do |t|
      t.integer :creator_id, foreign_key: true, null: false, index: true
      t.integer :channel_id, foreign_key: true, null: false, index: true
      t.integer :replied_message_id, foreign_key: true, index: true
      t.text :content, null: false
      t.timestamps
    end
  end
end
