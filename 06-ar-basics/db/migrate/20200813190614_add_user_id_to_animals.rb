class AddUserIdToAnimals < ActiveRecord::Migration[6.0]
  def change
    add_column :animals, :user_id, :integer
  end
end
