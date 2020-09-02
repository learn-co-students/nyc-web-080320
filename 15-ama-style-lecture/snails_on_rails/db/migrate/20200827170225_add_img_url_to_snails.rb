class AddImgUrlToSnails < ActiveRecord::Migration[6.0]
  def change
    add_column :snails, :img_url, :string
  end
end
