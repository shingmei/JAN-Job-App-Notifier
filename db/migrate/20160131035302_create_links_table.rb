class CreateLinksTable < ActiveRecord::Migration
  def change
    create_table :links do |t|
		t.text :company_name
		t.text :url
		t.text :status # unopened, opened, closed
		t.text :page_hash
    end
  end
end
