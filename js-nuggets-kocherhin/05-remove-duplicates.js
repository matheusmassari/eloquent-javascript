// Fazer fn que retorne valores unicos de um dado vetor

const categories = ["breakfast", "breakfast", "lunch", "dinner", "dinner"];

const getUniqueValues = (targetArray) => {
    return [...new Set(targetArray)]
}

console.log(getUniqueValues(categories))