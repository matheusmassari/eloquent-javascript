// Funcao Filter aplica um teste sobre um elemento dentro de um array
// Retornando um novo array apenas com os elementos que passaram o teste

function filter(array, test) {
    let passed = []
    for(let element of array) {
        if(test(element)) {
            passed.push(element)
        }
    } 
    return passed
}