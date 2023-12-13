do {
    var playAgain = true
    let randomNumber = Math.floor(Math.random() * 100)

    if (randomNumber <= 33) {
        var computerChoice = 'S'
    }
    else if (randomNumber <= 66) {
        var computerChoice = 'W'
    }
    else {
        var computerChoice = 'G'
    }

    let userChoice = prompt('Enter S for Snake, W for Water and G for Gun')

    if (userChoice == computerChoice) {
        alert('Tie')
    }
    else if ((userChoice == 'S' && computerChoice == 'G') ||
        (userChoice == 'G' && computerChoice == 'W') ||
        (userChoice == 'W' && computerChoice == 'S')) {
        alert('You lost')
    }
    else {
        alert('Congrats! You won')
    }
    playAgain = confirm('Would you like to play again?')
} while (playAgain)