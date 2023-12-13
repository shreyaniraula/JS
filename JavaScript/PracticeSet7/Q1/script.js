// let firstElem = document.body.getElementsByTagName('nav')[0].firstElementChild

// firstElem.style.color = 'red'

let listElements = document.getElementsByTagName('li')
Array.from(listElements).forEach(element => {
    element.style.background = 'cyan'
});