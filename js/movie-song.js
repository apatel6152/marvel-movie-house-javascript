document.addEventListener('DOMContentLoaded', () => {
  const songList = [
    [
<<<<<<< Updated upstream
      "Avengers Theme", "Alan Silvestri", "music/avengers.mp3", "image/avenger.jpg"
=======
<<<<<<< HEAD
      'Avengers Theme',
      'Alan Silvestri',
      'music/avengers.mp3',
      'image/avenger.jpg',
>>>>>>> Stashed changes
    ],
    [
      "Thor:Rangnarok", "Devo", "music/thor.mp3", "image/thor3.jpg"
    ],
    [
      "Ironman Theme", "Black Sabbath", "music/ironman.mp3", "image/ironman2.jpg"
    ],
<<<<<<< Updated upstream
=======
    ['Gaurdians of Galaxy', 'Redbone', 'music/gog.mp3', 'image/guardians3.jpg'],
=======
      "Avengers Theme", "Alan Silvestri", "music/avengers.mp3", "image/avenger.jpg"
    ],
    [
      "Thor:Rangnarok", "Devo", "music/thor.mp3", "image/thor3.jpg"
    ],
    [
      "Ironman Theme", "Black Sabbath", "music/ironman.mp3", "image/ironman2.jpg"
    ],
>>>>>>> Stashed changes
    [
      "Marvel Unstoppable", "The Score", "music/unstoppable.mp3", "image/marvel.jpg"
    ],
    [
      "Gaurdians of Galaxy", "Redbone", "music/gog.mp3", "image/guardians3.jpg"
    ]
<<<<<<< Updated upstream
=======
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
  ];

  for (i = 0; i < songList.length; i++) {
    var s = songList[i];
    var number = parseInt(i) + 1;
<<<<<<< Updated upstream
    var artist = document.createTextNode(s[1]);
    var track_name = document.createTextNode(number + ": " + s[0]);
=======
<<<<<<< HEAD
    var track_name = document.createTextNode(number + ': ' + s[0]);
    var artist = document.createTextNode(s[1]);
=======
    var artist = document.createTextNode(s[1]);
    var track_name = document.createTextNode(number + ": " + s[0]);
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes

    var listItem = document.createElement('div');
    var track_text = document.createElement('h3');
    var artist_text = document.createElement('p');

    track_text.appendChild(track_name);
    artist_text.appendChild(artist);

    listItem.appendChild(track_text);
    listItem.appendChild(artist_text);

    listItem.classList.add('item');
    listItem.dataset.index = i;

    document.getElementById('list').appendChild(listItem);
  }
  displayTrack(0);

  var listItems = document.querySelectorAll('.item');
<<<<<<< Updated upstream
  listItems.forEach(el => {
=======
<<<<<<< HEAD
  listItems.forEach((el) => {
=======
  listItems.forEach(el => {
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
    el.onclick = () => {
      displayTrack(el.dataset.index);
    };
  });

  function displayTrack(i) {
    var active = document.querySelector('.is-active');
    if (active) {
      active.classList.remove('is-active');
    }
    var el = document.getElementById('list').children[i];
    el.classList.add('is-active');
    var song = songList[i],
      artist = song[0],
      track = song[1],
      audio = song[2],
      img = song[3],
      number = parseInt(i) + 1;

<<<<<<< Updated upstream
    document.getElementById('title').innerText = number + ": " + artist;
=======
<<<<<<< HEAD
    document.getElementById('title').innerText = number + ': ' + artist;
>>>>>>> Stashed changes
    document.getElementById('song_title').innerText = track;
    var albumImg = document.getElementById('song-img');
    albumImg.src = img;
    albumImg.alt = artist + " " + track;
    document.getElementById('audio').src = audio;
  }
<<<<<<< Updated upstream
})
=======
});
=======
    document.getElementById('title').innerText = number + ": " + artist;
    document.getElementById('song_title').innerText = track;
    var albumImg = document.getElementById('song-img');
    albumImg.src = img;
    albumImg.alt = artist + " " + track;
    document.getElementById('audio').src = audio;
  }
})
>>>>>>> 1b21f1d (Adding sign in and signup)
>>>>>>> Stashed changes
