class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :snail_id
      t.belongs_to :snail_snap, null: false, foreign_key: true

      t.timestamps
    end
  end
end
