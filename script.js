// alert("hello")
const randomWordsDisplay = document.querySelector(".randomWords")
let playerInput = document.querySelector("#playerInput")
let timerDisplay = document.querySelector("#timer")
let scoreDisplay = document.querySelector("#score")
let score = 0;
let timer = 10
timerDisplay.innerText = timer
const newGameBtn = document.querySelector("#newGameBtn")
let timeInterval = setInterval(countDown, 1000)
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

]

// const countDown = () => {
//     timer--
// }

function countDown() {
    timer--
    timerDisplay.innerText = timer

    if(timer === 0) {
        clearInterval(timeInterval)
    }
}

const wordsRandomizer = () => {
    for (let x = 0; x < words.length; x++){
        let newIndex = Math.floor(Math.random() * words.length)
        randomWordsDisplay.innerText = words[newIndex]
    }
}

wordsRandomizer()




const compareWords = (e) => {
    let text = e.target.value
    // console.log(text)
    
    if(text === randomWordsDisplay.innerText){
        // console.log("yaas")
        wordsRandomizer()
        score++
        scoreDisplay.innerText = score
        playerInput.value = ""
        
        console.log(score)
    }
}
playerInput.addEventListener("input", compareWords)

playerInput.focus()
// const gamePlay = () => {

// }
// console.log(input)