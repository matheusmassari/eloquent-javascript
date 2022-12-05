// Curry functions - escrever uma função que seja capaz de multiplicar(1)(2)(3)

function curry (fn) {
    var arity = fn.length
    console.log('arity: ', arity);
    return function f1(...args) {
        if(args.length >= arity) {
            console.log('argumentos suficientes');
            return fn(...args)
        } else {
            console.log('preciso de mais argumentos');
            return function f2(...maisArgs) {
                var newArgs = args.concat(maisArgs)
                return f1(...newArgs)
            }
        }
    }
}

const curriedSum = curry((a,b,c) => a + b + c)
console.log(curriedSum(1)(2)(3))

const get = curry((property, object) => object[property])






