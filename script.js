// This is how I can target the html and then display whatever text I want

document.querySelector('header > div > h1').innerHTML = "Guessing Game"

document.querySelector('header > div > h2').innerHTML = "Loops"

document.querySelector('main > h1').innerHTML = "Hi/lo Guessing Game"

document.querySelector('main > h2').innerHTML = "How many guesses will it take for you to get the right answer?"

document.querySelector('main > h3').innerHTML = "Instructions"

document.querySelector('p').innerHTML = "In this game you try to guess a random number between 0 and 16 in as few tries as possible. You will be be awarded a ribbon for your skills. Good Luck. If you want to start over or play again just refresh the page."


//  This is the start of the game stuff

let correctNumber = Math.floor(Math.random() * 15) + 1

console.log(`The correct number is ${correctNumber}`)

let guessed = false

let totalGuesses = 0

let gamerGuess = 0

correctNumber += totalGuesses

// this is for the button 
function evalGuess() {

totalGuesses += 1

gamerGuess = document.querySelector('#guess').value

console.log(totalGuesses, gamerGuess)

const feedback = document.querySelector('#feedback')

if (gamerGuess == correctNumber) {

    feedback.innerText = 'Great job!'
    giveAward()

} else if (gamerGuess > correctNumber && gamerGuess < 16) {

    feedback.innerText = 'Too high, try again'

} else if (gamerGuess < correctNumber && gamerGuess > 0) {
    
    feedback.innerText = 'Too low, try again'
} else {
    feedback.innerText = 'Please choose a number between 1 and 15 then try again'
    totalGuesses -= 1
}
document.querySelector('#attempts').innerText = totalGuesses
}

// function that awards different awards to the user
function giveAward() {
console.log('Congratulations! Here is your award!')

    let imagePath = '#'

    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'gallery/blue1stplaceribbon.png'
    break;
        case 4:
        case 5:
        case 6:
            imagePath = 'gallery/red2ndplaceribbon.png'
    break;
        case 7:
        case 8:
        case 9: 
            imagePath = 'gallery/yellow3rdplaceribbon.png'
    }

    const awardImg = document.createElement('img') // this creates an <img> element

        awardImg.setAttribute('src', imagePath)

    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImg)
}