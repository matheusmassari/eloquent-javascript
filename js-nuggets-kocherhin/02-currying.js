// Escrever uma função que consiga multiplicar(a)(b) e retornar o produto de a e b;

const multiply = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 * num2 * num3
        }
    };
};

const multiplicar = (num1) => (num2) => num1 * num2;

console.log(multiply(2)(4)(5));
