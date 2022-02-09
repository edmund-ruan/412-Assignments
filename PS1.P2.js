const evaluate = expression => {
        switch (expression.charAt(1)) {
            case '+':
                return (expression) => Number(expression.charAt(0)) + Number(expression.charAt(2))
            case '-':
                return (expression) => Number(expression.charAt(0)) - Number(expression.charAt(2))
            case '*':
                return (expression) => Number(expression.charAt(0)) * Number(expression.charAt(2))
            case '^':
                return (expression) => Number(expression.charAt(0)) ** Number(expression.charAt(2))
            case '/':
                return (expression) => Number(expression.charAt(0)) / Number(expression.charAt(2))
            default:
                return new Error('Not an operator')
        }
}

const expression = '4+2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

const expression2 = '5*7';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

const expression3 = '6-1';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)

const expression4 = '9/2';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4)}`)

const expression5 = '2^8';
let operator5 = evaluate(expression5);
console.log(`${expression5} = ${operator5(expression5)}`)