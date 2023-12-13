let x = Math.floor(Math.random()*100) + 1
console.log(x)

for(let i = 0; i<100; i++){
    let guess = prompt('Enter your guess:')
    if(guess == x){
        console.log('Congrats! You got it right')
        break
    }
    alert('Try again!')
}