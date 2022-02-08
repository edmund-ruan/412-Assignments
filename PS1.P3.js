const stringAndDecorate = (word, cb) => cb(word);

let cutDown = stringAndDecorate('supercalifragilisticexpialidocious',
    cut => cut.split('c')
)
console.log(cutDown)

let replaceAs = stringAndDecorate('supercalifragilisticexpialidocious',
    up => up.replaceAll('a','A')
)

console.table({
    originalString: 'supercalifragilisticexpialidocious',
    modifiedString: replaceAs,
    numberReplaced: replaceAs.split('A').length - 1,
    length: replaceAs.length }
)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const doMath = (value, operation) => operation(value);
let result = doMath(
    30,
    val => val + 12
)
console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const doMath = (value, operation) => operation(value);
function evaluate(t) {
    return doMath()
};

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)