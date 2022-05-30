const stringAndDecorate = (word, cb) => cb(word);

let cutDown = stringAndDecorate('supercalifragilisticexpialidocious',
    cut => cut.replace(/c/g, '2c').split('2')
)
console.log(cutDown)

let replaceAs = stringAndDecorate('supercalifragilisticexpialidocious',
    up => up.replaceAll('a','A')
)

function out(str) {
    return {
        originalString: str,
        modifiedString: replaceAs,
        numberReplaced: replaceAs.split('A').length - 1,
        length: replaceAs.length };
}

console.table(out('supercalifragilisticexpialidocious'))
