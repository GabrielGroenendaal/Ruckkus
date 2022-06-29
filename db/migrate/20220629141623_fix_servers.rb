class FixServers < ActiveRecord::Migration[5.2]
  def change
    drop_table :servers
    create_table :servers do |t|
      t.integer :owner_id, index: true, null: false, foreign_key: true
      t.string :name, index: true, null: false, default: 'Server'
      t.boolean :is_public, null: false, index: true
      t.timestamps
    end
  end
end
