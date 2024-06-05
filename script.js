document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("video");
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playButton.textContent = "Pause";
        } else {
            video.pause();
            playButton.textContent = "Play";
        }
    });

    // Event listener for the mute button
    muteButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            muteButton.textContent = "Mute";
        } else {
            video.muted = true;
            muteButton.textContent = "Unmute";
        }
    });

    // Event listener for the full-screen button
    fullScreenButton.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome and Safari
            video.webkitRequestFullscreen();
        }
    });

    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
        var time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
        var value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
    });

    // Pause the video when the seek handle is being dragged
    seekBar.addEventListener("mousedown", function() {
        video.pause();
    });

    // Play the video when the seek handle is dropped
    seekBar.addEventListener("mouseup", function() {
        video.play();
    });

    // Event listener for the volume bar
    volumeBar.addEventListener("change", function() {
        video.volume = volumeBar.value;
    });
});
