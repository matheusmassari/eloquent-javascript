// Write a function to convert a string / phrase to title case

const titleCase = (str) => {
    return str
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

// const titleCase = str => {
//     return str[0].toUpperCase()
// }

console.log(titleCase("sHoRt aNd sToUt"));
