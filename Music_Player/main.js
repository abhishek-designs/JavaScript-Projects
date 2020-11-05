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
const currTime = document.querySelector('.progress-timing .current-time');
const duraTime = document.querySelector('.progress-timing .duration-time');
const progressContain = document.querySelector('.progress-bar');
const progressBar = progressContain.querySelector('.current-progress');

// All the songs stored on the player as an array of objects
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
const playSong = () => {  // Arrow function, this could be written as function playSong() { };

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

    playing ? pauseSong() : playSong(); // Ternary operator

});

// Function to play next song
const nextSong = () => {
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
};

// Adding functionality to next btn
nextBtn.addEventListener('click',nextSong);

// Function to play previous song
const prevSong = () => {
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
};

// Adding functionality to next btn
prevBtn.addEventListener('click',prevSong);

// Function to switch the content
const switchContent = (position) => {
    song.innerHTML = songs[position].songName;
    artist.innerHTML = songs[position].artistName;
    artImg.src = `img/${songs[position].songArt}`; // Template literals this could be written as 'img/'+songs[position].songArt;
    audio.src = `music/${songs[position].song}`;

    // Play the song
    playSong();
};

// Updating the progress bar and the timings
audio.addEventListener('timeupdate',(e) => {
    let {currentTime, duration} = audio; // let currentTime = audio.currentTime;

    // To update the progress according to the current time we have to convert the song current time into percent for the progress width
    let progressWidth = (currentTime/duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

    // Rounding off the minutes and seconds
    let curMin = Math.floor(currentTime / 60);
    let curSec = Math.floor(currentTime % 60);

    let durationMin = Math.floor(duration / 60);
    let durationSec = Math.floor(duration % 60);

    // Append zero if the minutes/seconds lesser than 10
    if(curSec < 10)
    {
        curSec = `0${curSec}`;
        
    }
    if(durationSec < 10)
    {
        durationSec = `0${durationSec}`;
    }

    let curTime = `${curMin}:${curSec}`;
    let durTime = `${durationMin}:${durationSec}`;

    // Update the stats when the audio property gets loaded
    if(currentTime && duration)
    {
        currTime.innerHTML = `<p class="lead-2">${curTime}</p>`;
        duraTime.innerHTML = `<p class="lead-2">${durTime}</p>`;
    }

});

// Seek the audio to the time according to the user clicks on the progress bar
progressContain.addEventListener('click',(e) => {
    let progressPos = e.offsetX;
    let progressWidth = progressContain.clientWidth;
    let songDuration = audio.duration;

    // Carry out the current position through the progress position and width
    let curPos = (progressPos / progressWidth) * songDuration;

    audio.currentTime = curPos;
}); 

// Play next song when the current song ends
audio.addEventListener('ended',nextSong);