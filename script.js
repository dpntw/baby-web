const audio = document.getElementById("loopingAudio");


function playAudio() {
    audio.currentTime = 0;
    audio.play();
}

playAudio();
setInterval(() => {
 playAudio();
}, 850);