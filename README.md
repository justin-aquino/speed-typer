# SEI-0124 Project 1: Speed-typer: Keylometers/Second
## IDEA
For my first project in this course, I decided to build my version of a speed typing challenge. As a novice mechanical keyboard enthusiast, I enjoy building keyboards using different switches depending on what sound profile and feel I am looking for at certain times. And to test out the build, I always use websites like [monkeytype](https:www.monkeytype.com) and [kbsim](https://kbs.im).


## TECH STACK TO BE USED:
> I plan on using HTML, CSS, Bootstrap/Other CSS Frameworks, and Javascript

## TECHNICAL OVERVIEW
I will be implementing three levels of difficulty. All difficulties will have the same design and interface. The words to be typed will be displayed one by one. Once the user types the word correctly, a new word will be generated, and the score will be incremented by one. I will also implement a timer that will be incremented depending on the difficulty chosen by the player.

## Levels of Difficulty Explained:
I will be making **different arrays** for different levels of difficulty.

#### EASY MODE
Short, easy-to-type words will be generated. Every time the player types in the word correctly, the score will increment, and another five seconds will be added to the running timer. Timer starts when player presses the first key.

#### NORMAL MODE
Medium-length, easy to type words / phrases will be generated. Every time the player types in the word correctly, the score will increment, and another 3 seconds will be added to the running timer. Timer starts when player presses the first key.

#### HARD MODE
Lengthy words or words with complicated spelling will be generated. Every time the player types in the word correctly, the score will increment, and another second will be added to the running timer. The timer starts as soon as the page loads.




## WIREFRAME

![Game Page Wireframe](wireframe.jpeg)

## MVP

1. Presentable and responsive design
2. 3 Levels of Difficulty
3. Randomly generate words and display using DOM Manipulation.
4. Increment Score and Timer when words match.
5. No word repetitions.
6. Reset button that resets the timer and input fields.
7. Timer countdown starts depending on difficulty.
8. Game over function.

## Stretch Goals

1. Only submit words typed by pressing enter.
2. If the word you submitted by pressing enter is spelled incorrectly, decrement timer.
3. Add different modes. Generate words according to theme. I.e anime theme, coding syntax.
4. Add different languages.
5. Add sounds everytime a key is pressed to simulate mechanical keyboard sounds.


## Possible Roadblocks

1. I need to research how to do the submit the words by pressing enter, instead of moving on to the next word once the word typed is matched.
2. Having enough words in each arrays if I am going to implement the no-repetition of words.
3. I'm not sure yet how to go about having the timer run only after the first key is pressed.


## PROJECT TIMELINE
#### This is only a guide. For accountability. 
2/4/22 - Barebones Finished. HTML, CSS
2/7/22 - First commit. Functions first half finished.
2/8/22 - Functions, second half. DOM Manipulation and display.**50% Finished**.
2/9/22 - MVP Finished and bug-free. Start working on Stretch goals one by one.
2/10/22 - Final debugging. Make script for smoother presentation.
2/11/22 - D-Day.

