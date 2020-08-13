class RemoveUserIdFromAnimals < ActiveRecord::Migration[6.0]
  def change
    remove_column :animals, :user_id
  end
end
