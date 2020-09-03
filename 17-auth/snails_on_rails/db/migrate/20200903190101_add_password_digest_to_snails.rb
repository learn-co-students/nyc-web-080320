class AddPasswordDigestToSnails < ActiveRecord::Migration[6.0]
  def change
    add_column :snails, :password_digest, :string
  end
end
