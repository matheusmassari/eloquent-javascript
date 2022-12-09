const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    } else {
        let string1 = str1.split("").sort().join();
        let string2 = str2.split("").sort().join();
        if (string1 === string2) {
            return true
        } else {
            return false
        }
    }
};

console.log(isAnagram("borboleta", "letaborba"));
