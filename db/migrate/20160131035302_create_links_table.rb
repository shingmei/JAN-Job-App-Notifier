class CreateLinksTable < ActiveRecord::Migration
  def change
    create_table :links_tables do |t|
		t.text :company_name
		t.text :url
		t.text :status # unopened, opened, closed
    end
  end
end
