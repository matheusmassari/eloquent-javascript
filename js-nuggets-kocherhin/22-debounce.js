// debounce function

const debounce = (fn, timeout = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, timeout);
    };
};


const savedInput = (name) => {
    console.log(name);
};

const inputChange = debounce(savedInput, 2000);

inputChange("tchury babe")
inputChange("tchury babe 2");
inputChange("tchury babe 3");
