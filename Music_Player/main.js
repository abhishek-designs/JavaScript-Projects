// Accessing the music player components first 
const audio = document.querySelector('audio');
const albumArt = document.querySelector('.album-art');
const playBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.backward-btn');
const nextBtn = document.querySelector('.forward-btn');
const icon = playBtn.querySelector('i');
const artist = document.querySelector('.player-content .artist-name');
const song = document.querySelector('.player-content .song-title');
const artImg = albumArt.querySelector('img');

// All the songs stored on the player
const songs = [
    {
        songName : 'Ocean',
        artistName : 'David Davis',
        songArt : 'ocean.jpg',
        song : 'David_Davis_-_Ocean.mp3'
    },
    {
        songName : 'Attention',
        artistName : 'Charlie Puth',
        songArt : 'Attention.png',
        song : 'Attention.mp3'
    },
    {
        songName : 'Believer',
        artistName : 'Imagine Dragons',
        songArt : 'Believer.jpg',
        song : 'Believer.mp3'
    }
];

// Specify wether the song is playing or not
let playing = false; // Initially the song is not playing
playBtn.title = 'Play song';

// Songs position, initially at first song
let position = 0; 

// Function to play the song
const playSong = () => {

    playing = true;
    audio.play(); // Playing the audio
    icon.classList.replace('fa-play','fa-pause'); // Changing the button according to play/pause
    albumArt.classList.add('spin'); // Spinning the album art while playing the song
    playBtn.title = 'Pause the song'; // Changing the btn's title according to the condition
};

// Function to pause the song
const pauseSong = () => {
    
    playing = false;
    audio.pause(); // Pause the audio
    icon.classList.replace('fa-pause','fa-play'); // Changing the button according to play/pause
    albumArt.classList.remove('spin'); // Avoid spinning the album art when the song is paused
    playBtn.title = 'Play song'; // Changing the btn's title according to the condition
};

// Play the audio through the play btn
playBtn.addEventListener('click',() => {

    playing ? pauseSong() : playSong();

});

// Adding functionality to prev & next btn
nextBtn.addEventListener('click',() => {
    // Play the next song
    if(position == songs.length - 1)
    {
        // Get back to the first song
        position = 0;
    }
    else
    {
        // Forward the song
        position++;
    }

    // Changing the song name and artist accroding to the condition
    switchContent(position);
    console.log(songs[position].songName+' is playing by '+songs[position].artistName);
});

prevBtn.addEventListener('click',() => {
    // Play the previous song
    if(position == 0)
    {
        // Jump to the last song
        position = songs.length - 1;
    }
    else
    {
        // Backwarding the music
        position--;
    }

    // Changing the song name and artist accroding to the condition
    switchContent(position);

    console.log(songs[position].songName+' is playing by '+songs[position].artistName);
});

// Function to switch the content
const switchContent = (position) => {
    song.innerHTML = songs[position].songName;
    artist.innerHTML = songs[position].artistName;
    artImg.src = 'img/'+songs[position].songArt;
    audio.src = 'music/'+songs[position].song;

    playSong();
};