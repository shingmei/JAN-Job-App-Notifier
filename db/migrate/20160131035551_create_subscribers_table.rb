class CreateSubscribersTable < ActiveRecord::Migration
  def change
    create_table :subscribers_tables do |t|
		t.text :email
    end
  end
end
