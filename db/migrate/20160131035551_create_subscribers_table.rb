class CreateSubscribersTable < ActiveRecord::Migration
  def change
    create_table :subscribers do |t|
		t.text :email
    end
  end
end
