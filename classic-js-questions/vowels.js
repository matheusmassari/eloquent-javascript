const findVowels = (str) => {
    count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    str.split("").map((letter) => {
        if (vowels.includes(letter)) {
            count++;
        }
    });
    return count;
};

console.log(findVowels("Tralha"));
