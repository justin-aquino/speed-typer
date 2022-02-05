// alert("hello")
const randomWordsDisplay = document.querySelector(".randomWords")
const input = document.querySelector("#playerInput")
const timerDisplay = document.querySelector("#timer")
const scoreDisplay = document.querySelector("#score")
const newGameBtn = document.querySelector("#newGameBtn")
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

const wordsRandomizer = () => {
    for (let x = 0; x < words.length; x++){
        let newIndex = Math.floor(Math.random() * words.length)
        randomWordsDisplay.innerText = words[newIndex]
    }
}

wordsRandomizer()

// const gamePlay = () => {

// }
console.log(input)