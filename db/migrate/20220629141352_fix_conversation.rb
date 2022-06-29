class FixConversation < ActiveRecord::Migration[5.2]
  def change
    drop_table :conversation_participant
    create_table :conversation_participants do |t|
      t.integer :participant_id, null: false, foreign_key: true, index: true
      t.integer :conversation_id, null: false, foreign_key: true, index: true
      t.timestamps
    end
  end
end
