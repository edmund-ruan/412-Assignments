

function evaluateHelper(expression) {
    console.log(expression.charAt(1));
    switch (expression.charAt(1)) {
        case '+':
            return (left, right) => left + right;
        case '-':
            return (left, right) => left - right;
        case '*':
            return (left, right) => left * right;
        case '/':
            return (left, right) => left / right;
        case '^':
            return (left, right) => left ** right;
    }
}

const identity = v => v;
identity('wow'); // wow

const evaluate = identity((a,b) => a + b);

const sum = identity((a,b) => a + b);
sum(1,8); //9






const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)


const getOperation = operator => {
    switch (operator) {
        case '+':
            return (left, right) => left + right;
            break;
    }
}
let mathFunction = getOperation('+');
console.log(mathFunction(30,12))


