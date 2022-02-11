const gameAudio = new Audio()
gameAudio.src = "./audio/game.mp3"
const volumeBtn = document.querySelector("#muteIcon")
let isMute = false

const mute = () => {
    // let isMute = false
    if(isMute === true){
        gameAudio.pause()
        volumeBtn.classList.remove("fa-volume-high")
        volumeBtn.classList.add("fa-volume-off")
        isMute = false
    } else {
        gameAudio.play()
        volumeBtn.classList.add("fa-volume-high")
        volumeBtn.classList.remove("fa-volume-off")
        isMute = true
    }

}

volumeBtn.addEventListener("click", mute)

// document.addEventListener("DOMContentLoaded", gameAudio.play())
// document.addEventListener("load", gameAudio.play())