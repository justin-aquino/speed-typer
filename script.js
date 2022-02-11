const gameAudio = new Audio()
gameAudio.src = "./audio/game.mp3"

document.addEventListener("DOMContentLoaded", gameAudio.play())
// document.addEventListener("load", gameAudio.play())