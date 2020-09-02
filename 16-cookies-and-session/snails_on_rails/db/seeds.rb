# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "...creating snails"
# 20.times do 
#   Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10))
# end 
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://grist.org/wp-content/uploads/2014/02/snail-wearing-sweater-katie-bradley.jpg?w=1024")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://i.ytimg.com/vi/UnrIlAfDP2c/maxresdefault.jpg")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://thumbs.dreamstime.com/b/snail-newborn-baby-knit-wool-hat-wearing-rose-isolated-white-31508223.jpg")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://thumbs.worthpoint.com/zoom/images2/1/0514/28/fenton-glass-snail-dapper-top-hat-bow_1_7e68c3b9c4e0f6ad6b8cd13432d709e2.jpg")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://purewows3.imgix.net/images/articles/2020_08/snail_dog_halloween_costume.png?auto=format,compress&cs=strip")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://cdn.instructables.com/ORIG/FZY/XC7L/GFRWQCPN/FZYXC7LGFRWQCPN.jpg?auto=webp")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://ychef.files.bbci.co.uk/800x450/p074bl3r.jpg")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://images.fineartamerica.com/images-medium-5/snail-on-train-tracks-guy-viner.jpg")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://c4.wallpaperflare.com/wallpaper/440/1018/492/nature-snail-hat-hd-wallpaper-preview.jpg")
Snail.create(name: Faker::FunnyName.name, age: rand(50..100), slime_level: rand(1..10), img_url: "https://lh3.googleusercontent.com/proxy/GdciLfUFXCxU98ZLUvkCdqSFXki7PQnoCJdX9-Bllb3wYbZ62ORsVF8r_r4ZvW7GCEhfMjMCdkyAolnezUzZBSOeMKXhSmubp7gWtNn5AyQ")

30.times do 
  SnailSnap.create(caption: Faker::Movies::BackToTheFuture.quote, img_url: Faker::Fillmurray.image, snail_id: Snail.all.sample.id)
end

50.times do 
  Comment.create(content: Faker::Hipster.sentence, snail_id: Snail.all.sample.id, snail_snap_id: SnailSnap.all.sample.id)
end

Comment


puts "Complete!!!"