// alert("hello")
const randomWordsDisplay = document.querySelector(".randomWords")
const gameOverCover = document.querySelector("#gameOver")
const startBtn = document.querySelector("#startBtn")
let gameOverScore = document.querySelector("#gameOverScore")
let playerInput = document.querySelector("#playerInput")
let timerDisplay = document.querySelector("#timer")
let scoreDisplay = document.querySelector("#score")
let score = 0;
let timer = 10
timerDisplay.innerText = timer
const newGameBtn = document.querySelector("#newGameBtn")
let timeInterval;

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

// const countDown = () => {
    //     timer--
    // }
    
        startBtn.addEventListener("click", () => {
        timeInterval = setInterval(countDown, 1000)
        wordsRandomizer()
        playerInput.focus()
})

function countDown() {
    // timeInterval = setInterval(countDown, 1000)
    timer--
    timerDisplay.innerText = timer

    if(timer === 0) {
        clearInterval(timeInterval)
        gameOverCover.style.display = "block"
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
        score++
        scoreDisplay.innerText = score
        timer += 2
        playerInput.value = ""    
        console.log(score)

        // if(text !== randomWordsDisplay.innerText){
        //     text.style.color = "red"
        // }
    }
}
playerInput.addEventListener("input", compareWords)



newGameBtn.addEventListener("click", () => {
    // window.location.reload()
    countDown()
    // wordsRandomizer()
    // compareWords()
    // startBtn
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