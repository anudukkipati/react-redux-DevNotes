class Note < ApplicationRecord
    validates :title, :topic, :url, :content, presence:true
end
