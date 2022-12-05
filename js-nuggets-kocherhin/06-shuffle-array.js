// Write a function that randomly shuffle values inside an array

const shuffleItems = (items) => {
    return items
        .map((item) => ({ sort: Math.random(), value: item }))
        .sort((item1, item2) => item1.sort - item2.sort)
        .map((a) => a.value);
};

console.log(shuffleItems([1, 4, 5, 8, 9]));
