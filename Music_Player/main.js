// Accessing the music player components first 
const audio = document.querySelector('audio');
const albumArt = document.querySelector('.album-art');
const playBtn = document.querySelector('.play-pause-btn');
const prevBtn = document.querySelector('.backward-btn');
const nextBtn = document.querySelector('.forward-btn');
const icon = playBtn.querySelector('i');

// Specify wether the song is playing or not
let playing = false;

// Function to play the song
const playSong = () => {

    playing = true;
    audio.play(); // Playing the audio
    icon.classList.replace('fa-play','fa-pause'); // Changing the button according to play/pause
    albumArt.classList.add('spin'); // Spinning the album art while playing the song
};

// Function to pause the song
const pauseSong = () => {
    
    playing = false;
    audio.pause(); // Pause the audio
    icon.classList.replace('fa-pause','fa-play'); // Changing the button according to play/pause
    albumArt.classList.remove('spin'); // Avoid spinning the album art when the song is paused
};

// Play the audio through the play btn
playBtn.addEventListener('click',() => {

    playing ? pauseSong() : playSong();
    // if(playing)
    // {
    //     // Pause the song
    //     icon.classList.replace('fa-pause','fa-play');
    //     playing = false;
    //     pauseSong();
    // }
    // else
    // {
    //     // Play the song
    //     icon.classList.replace('fa-play','fa-pause');
    //     playing = true;
    //     playSong();
    // }
    // const icon = playBtn.querySelector('i');
    // icon.classList.replace('fa-play','fa-pause');
    // // audio.play();
});