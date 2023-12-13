/*
let obj = {
    'Harry': 98,
    'Rohan': 75,
    'Akash': 73
}

for(student in obj){
    console.log('The marks of ' + student + ' is ' + obj[student])
} */

/*
let num = prompt('Enter a number:')

while(num != 100){
    num = prompt('Incorrect number. Try again')
} */

let sum=0
let num = [1, 2, 3, 4, 5]

for(let n of num){
    sum += n
}
console.log(sum)