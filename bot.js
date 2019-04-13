const Discord = require('discord.js');
cont client = new Discord.Client();

var stands = Array{"Star Platinum", "Magicians Red", "Hermit Purple", "Hierophant Green", "Silver Chariot", "The Fool", "The World", "Tower of Gray", "Dark Blue Moon", "Strength", "Ebony Devil", "Yellow Temperance", "Hanged Man", "Emperor", "Empress", "Wheel of Fortune", "Justice", "Lovers", "Sun", "Death Thirteen", "Judgement", "High Priestess", "Geb", "Khnum", "Tohth", "Anubis", "Bastet", "Sethan", "Osiris", "Horus", "Atum", "Tenore Sax", "Cream", "Crazy Diamond", "Star Platinum DU", "The Hand", "Echoes", "Heavens Door", "Killer Queen", "Aqua Necklace", "Bad Company", "Red Hot Chili Pepper", "The Lock", "Surface", "Love Deluxe", "Pearl Jam", "Atom Heart Father", "Boy II Man", "Earth Wind and Fire", "Highway Star", "Stray Cat", "Super Fly", "Enigma", "Cheap Trick", "Gold Experience", "Sticky Fingers", "Moody Blues", "Sex Pistols", "Aerosmith", "Purple Haze", Spice Girl", "Silver Chariot", "King Crimson", "Black Sabbath", "Soft Machine", "Kraft Work", "Little Feet", "Man in the Mirror", "Mr.President", "Beach Boy", "The Grateful Dad", "Baby Face", "White Album", "Clash", "Talking Head", "Notorious B.I.G.", "Metallica", "Green Day", "Oasis", "Rolling Stones", "Stone Free", "Star Platinum: The World", "Kiss", "Burning Down the House", "Foo Fighters", "Weather Report", "Diver Down", "Whitesnake", "C-Moon", "Made in Heaven", "Goo Goo Dolls", "Manhattan Transfer", "Highway to Hell", "Marilyn Manson", "Jumpin' Jack Flash", "Limp Bizkit", "Survivor", "Planet Waves", "Dragons Dream", "Yo-Yo Ma", "Green, Green Grass of Home", "Jail House Lock", "Bohemian Rhapsody", "Sky High", "Under World", "Custom Stand", "Tusk", "Ball Breaker", "Oh! Lonesome Me", "Scary Monsters", "Cream Starter", "Ticket to Ride", "Dirty Deeds Done Dirt Cheap", "In a Silent Way", "Hey Ya!", "Tomb of the Boom", "Boku no Rhythm wo Kiitekure", "Wired", "Mandom", "Catch the Rainbow", "Sugar Mountains Spring", "Tatoo You!", "Tubar Bells", "20th Century Boy", "Civil War", "Chocolate Disco", "Diego's The World", "Soft & Wet", "Paisley Park", "Nut King Call", "Paper Moon King", "King Nothing", "Speed King", "JoJolion's Killer Queen", "Fun Fun Fun", "California King Bed", "Born this Way", "Les Feuilles", "I Am a Rock", "Doobie Wah!", "Love Love Deluxe", "Schott Key No. 1", "Schott Key No. 2", "Vitamin C", "Walking Heart", "Milagro Man", "Blue Hawaii", "Doggy Style", "Brain Storm", "Ozon Baby", "Doctor Wu", "Awaking III Leaves", "JoJolion's Tusk", "Dark Mirage", "Satanic Coupler", "Ptah", "The Book", "Memory of Jet", "The Cure", "Public Image Limited", "Joy Division", "Voodoo Child", "All Along the Watchtower", "Manic Depression", "Rainy Day Dream Away", "Dolly Dagger", "Night Bird Flying", "Stand User's Stand", "Love Note", "Gucci Bag Stand", "Remote Romance", "Berry Berry Skull", "Assy the Horse", "The World Over Heaver", "House of Holy", "JoJosapiens"}

bot.on('message', function(message){
      if(message.content == "d!RandomStand"){
          var fruit = stands[Math.floor(Math.random()*stands.length)]
          message.channel.send(fruit)
      }
    }


                   
bot.on('ready', function(){
    console.log("Ready");
});

bot.login(process.env.BOT_TOKEN)
//h
