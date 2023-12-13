/*let arr = [1, 2, 3, 4]
let x = prompt('Enter a number to add to the array')
arr.push(x)
console.log(arr)*/

/*let arr = [1, 2, 3, 4]

do {
    let x = prompt('Enter a number to add to the array')
    arr.push(x)
} while (x != 0)
console.log(arr)*/

/*
let arr = [10, 25, 33, 47, 51, 64, 72, 88, 99, 100]

function divisibleByTen(value){return (value%10==0)}

let filtered_arr = arr.filter(divisibleByTen)
console.log(filtered_arr)*/
/*
let arr = [1, 2, 3, 4, 5]

function square(item, index, array){
    array[index]=item*item
}

arr.forEach(square)

console.log(arr)*/

let arr=[5, 4, 3, 2, 1]

function factorial(num1, num2){
    return num1 * num2
}

let arr_factorial = arr.reduce(factorial)
console.log(arr_factorial)