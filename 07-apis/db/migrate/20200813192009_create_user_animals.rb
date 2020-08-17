class CreateUserAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :user_animals do |t|
      t.integer :user_id
      t.integer :animal_id
    end
  end
end
