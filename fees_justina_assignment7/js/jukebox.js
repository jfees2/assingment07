/*eslint-env browser*/


/*
allows the user to pick an artist/album from a drop down menu on a web page and then click a play button to play the actual album. Every time the play button is clicked, you need to keep track of which albums are being played and how often. There should be a button on the screen that reads “Show my favorite album”. When the user clicks this button, it should show the user’s favorite album based on how many times it’s been played. 



var Jukebox = function () {
    "use strict";
    var albums = [], self;
    
    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1, fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};

var jbox = new Jukebox();
var album1 = new Album("Operation Ivy", "Energy");
var album2 = new Album("Blink 182", "Dude Ranch");
var album3 = new Album("New Found Glory", "Sticks and Stones");

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album1.play();
album1.play();
album2.play();
album3.play();

window.console.log(album1, album2);*/


//build the juke
var jukeBox = {
    songs: ["Dark Side Of The Moon", "Atomic Dog", "New Person, Same Old Mistakes", "Driften", "God's Plan"],
    artist: ["Pink Flyod", "George Clinton", "Tame Impala", "Griz", "Drake"],
    plays: [0, 0, 0, 0, 0]
};

//determine song length
var numOfSongs = jukeBox.songs.length;

//loop and build drop down
for (var i = 0; i < numOfSongs; i++) {
    var opt = document.createElement("option");
    var val = document.createAttribute("value");
   
    val.value = i; 
    opt.setAttributeNode(val);
    
    //add text in drop down
    var songList = document.createTextNode(jukeBox.songs[i] + " - " + jukeBox.artist[i]);
    opt.appendChild(songList);
    var x = document.getElementById("song-drop-down"); if (x != null)    x.appendChild(opt);
}

$("#play-bttn").click(function() {
    //update count
    jukeBox.plays[$("#song-drop-down").val()]++;
});

function favSong() {
    //find most played
    var mostPlayed = 0;
    
    for (i = 1; i < numOfSongs; i++) {
        if (jukeBox.plays[i] > jukeBox.plays[mostPlayed]) {
            mostPlayed = i;
        }
    }
    
    //update mostplayed and display
    $("#display-fav").html(jukeBox.songs[mostPlayed] + " : Played " + jukeBox.plays[mostPlayed] + " times!");
}

$("#favorite").click(function() {
			favSong();
		});









