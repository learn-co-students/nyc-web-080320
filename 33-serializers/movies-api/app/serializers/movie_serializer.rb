class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :score, :genre, :imageUrl, :year, :cast

  has_many :actors
  
  def cast
    self.object.movie_actors.map do |ma|
      { role: ma.role, actor: ma.actor.name }
    end
  end
end
