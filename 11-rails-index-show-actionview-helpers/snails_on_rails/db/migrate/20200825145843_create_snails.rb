class CreateSnails < ActiveRecord::Migration[6.0]
  def change
    create_table :snails do |t|
      t.string :name
      t.integer :age
      t.integer :slime_level

      t.timestamps
    end
  end
end
