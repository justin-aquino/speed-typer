// alert("hello")
const randomWordsDisplay = document.querySelector(".randomWords")
const gameOverCover = document.querySelector("#gameOver")
const startBtn = document.querySelector("#startBtn")
const container = document.querySelector(".container")
const difficultyDisplay = document.querySelector("#difficulty")
const diffSelection = Array.from(document.querySelectorAll(".diffLvl"))
let difficulty = "normal"
// let difficulty = localStorage.getItem("difficulty") !== null ? localStorage.getItem("difficulty") : "Normal";
// difficulty.style.color = "red"
difficultyDisplay.innerText = `Difficulty Level: ${difficulty}`
let gameOverScore = document.querySelector("#gameOverScore")
let playerInput = document.querySelector("#playerInput")
let timerDisplay = document.querySelector("#timer")
let scoreDisplay = document.querySelector("#score")
let score = 0;
let timer = 10
timerDisplay.innerText = timer
const newGameBtn = document.querySelector("#newGameBtn")
let timeInterval;
const gameAudio = new Audio()
gameAudio.src = "./audio/game.mp3"
const scoreAudio = new Audio()
scoreAudio.src = "./audio/score.mp3"
const timerAudio = new Audio()
timerAudio.src = "./audio/clock.mp3"
const gameOverAudio = new Audio()
gameOverAudio.src = "./audio/tires.mp3"


// let timeInterval = setInterval(countDown, 1000)
// let randomWord;

const words = [
    "Valorant",
    "Riot Games",
    "Twice",
    "Nayeon",
    "Jeongyeon",
    "Momo",
    "Sana",
    "Jihyo",
    "Mina",
    "Dahyun",
    "Chaeyoung",
    "Tzuyu",
    "Phasmophobia",
    "revenant",
    "shade",
    "yurei",
    "yokai",
    "onryo",
    "obake",
    "raiju",
    "javascript",
    "nation",
    "increase",
    "redux",
    "eucalyptus",
    "holy pandas",
    "boba linear thocks",
    "tangerines",
    "Mammoth 75",
    "cyberboard",
    "Cypher",
    "Neon",
    "Reyna",
    "Brimstone",
    "wingardium leviosa",
    "obliviate",
    "I solemnly swear that I am up to no good",
    "mischief managed",
    "Master has given Dobby a sock. Dobby is free!",
    "I am Prometheus! And you are just a god!",
    "silhouette",
    "Hepaticocholangiogastrostomy",
    "Condescend",
    "vengeance",
    "saccharine",
    "floccinaucinihilipilification",
    "expunge",
    "abysmal",
    "bouillon",
    "andragogy",
    "onomatopoeia",
    "soliloquy",
    "pneumonia",
    "liaison",
    "laissez faire",
    "ganache",
    "for(x = 0; x < array.length; x++)",
    // "",
    // "",
    // "",
    // "",
    // "",
    // "",
    // "",
    // "",
    // "",
    
]
// window.addEventListener("load", () => {
    gameAudio.play()
// })

// const countDown = () => {
    //     timer--
    // }

diffSelection.forEach((sel) => {
    sel.addEventListener("click", () => {
        difficulty = sel.innerText.toUpperCase()
        // console.log(sel.innerText)
        console.log(difficulty)
    })
})

console.log(difficulty)

startBtn.addEventListener("click", () => {
    timeInterval = setInterval(countDown, 1000)
    gameAudio.pause()
    wordsRandomizer()
    playerInput.focus()
})

function countDown() {
    // timeInterval = setInterval(countDown, 1000)
    timer--
    timerDisplay.innerText = timer

    if(timer < 5){
        timerAudio.play()
    } else {
        timerAudio.pause()
    }

    if(timer === 0) {
        clearInterval(timeInterval)
        gameOverAudio.play()
        timerAudio.pause()
        gameOverCover.style.display = "block"
        container.style.display = "none"
        gameOverScore.innerText = `Your score is: ${score}`
    }
}

const wordsRandomizer = () => {
    for (let x = 0; x < words.length; x++){
        let newIndex = Math.floor(Math.random() * words.length)
        randomWordsDisplay.innerText = words[newIndex]
    }
}





const compareWords = (e) => {
    let text = e.target.value.trim()
    // console.log(text)
    
    if(text === randomWordsDisplay.innerText){
        // console.log("yaas")
        // text.style.color = "blue"
        wordsRandomizer()
        // score++
        updateScore()
        scoreDisplay.innerText = score
        playerInput.value = ""    
        console.log(score)

        if(difficulty.toUpperCase() == "Easy".toUpperCase){
            timer += 6
        } else if (difficulty.toUpperCase() == "Normal".toUpperCase()){
            timer += 4
        } else {
            timer += 2
        }

        // if(text !== randomWordsDisplay.innerText){
        //     text.style.color = "red"
        // }
    }
}

const updateScore = () => {
    score++
    scoreAudio.play()
}

playerInput.addEventListener("input", compareWords)



newGameBtn.addEventListener("click", () => {
    // window.location.reload()
    container.style.display = "block"
    // countDown()
    gameAudio.play()
    randomWordsDisplay.innerText = ""
    score = 0
    timer = 10
    timerDisplay.innerText = timer
    // timeInterval = setInterval(countDown, 1000) // I needed to put a value in the timeInterval variable
    // again because when the timer ran out, clearInterval happened. Therefore the timerInterval variable had no more value. That's why the timer does not decrement.
  
    scoreDisplay.innerText = score
    // timeInterval = setInterval(countDown, 1000)
    playerInput.value = ""
    gameOverCover.style.display = "none";
    playerInput.focus()
})
// const gamePlay = () => {

// }
// console.log(input)