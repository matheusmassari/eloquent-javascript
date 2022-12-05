// Criar uma funcão counter que tenha um metodo incrementar e um metodo getCounter

const privateCounter = () => {
    let counter = 0;

    return {
        increment: (value = 1) => {
            counter += value;
        },
        getValue: () => {
            return console.log(counter);
        },
    };
};

// const counter = privateCounter() 
// counter.increment(5)
// counter.getValue()

const privateSecret = () => {
    let secretString = 'supersecret'

    return {
        getValue: () => {
            return console.log(secretString)
        }
    }
}

const secret = privateSecret()
secret.getValue()