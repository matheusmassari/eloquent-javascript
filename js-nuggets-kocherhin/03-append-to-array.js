// Escrever uma função que receba um array e um elemento, retornando um array com esse elemento ao fim

const appendElement = (array, element) => {
    newArray = [...array, element]
    return newArray
}

console.log(appendElement([1,2,3], 4))
