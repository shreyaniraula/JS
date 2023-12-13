/* let a= prompt("What is your age?")
a=Number.parseInt(a)
if(a>10 && a<20)
    alert("Age lies between 10 and 20")
else
    alert("Age does not lie between 10 and 20")
*/

/*
let a = prompt("What is your favourite fruit")
switch (a) {
    case 'Mango':
        alert('Mango')
        break

    case 'Papaya':
        alert('Papaya')
        break

    case 'Orange':
        alert('Orange')
        break

    default:
        alert('Oh')
}
*/

/*
let num = prompt("Enter a number")
num = Number.parseInt(num)

if(num%2==0 && num%3==0)
    alert('Number is divisible by 2 and 3')
*/

let a= prompt("What is your age?")
a=Number.parseInt(a)

console.log('You can ' + ((a<18)?'not drive':'drive'))