// Funcao map, mapeia o elemento e transforma o mesmo, gerando um novo array apenas com os dados transformados

function map(array, transform) {
    let mapped = []
    for(let element of array) {
        mapped.push(transform(element))
    }
    return mapped
}