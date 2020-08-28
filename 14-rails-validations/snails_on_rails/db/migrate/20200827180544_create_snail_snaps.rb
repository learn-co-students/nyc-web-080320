class CreateSnailSnaps < ActiveRecord::Migration[6.0]
  def change
    create_table :snail_snaps do |t|
      t.string :img_url
      t.string :caption
      t.belongs_to :snail, null: false, foreign_key: true

      t.timestamps
    end
  end
end
