// Find the number of occurrences of the minimum value of a list

let data = [3, 4, 5, 6, 6, 7, 2, 2, 2, 8, 3, 10, 9, 12];

const minimumOcurrence = (array) => {
    let minVal = Math.min(...array);
    return array.filter((element) => element === minVal).length
};

console.log(minimumOcurrence(data));
