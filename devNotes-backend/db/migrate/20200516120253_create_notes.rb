class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :topic
      t.string :url
      t.text :content

      t.timestamps
    end
  end
end
