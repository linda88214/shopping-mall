class CreateOrderstatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :orderstatuses do |t|
    	t.integer :ordernumber
    	t.date :orderdate
    	t.integer :total
    	t.string :status
    	t.text :note

    	t.belongs_to :seller 
    	t.belongs_to :buyer

      t.timestamps
    end
  end
end