const stringAndDecorate = (word, cb) => cb(word);

let cutDown = stringAndDecorate('supercalifragilisticexpialidocious',
    cut => cut.split('c')
)
console.log(cutDown)

let replaceAs = stringAndDecorate('supercalifragilisticexpialidocious',
    up => up.replaceAll('a','A')
)


function out(str) {
    let obj = {
        originalString: str,
        modifiedString: replaceAs,
        numberReplaced: replaceAs.split('A').length - 1,
        length: replaceAs.length }
    return obj;
}

console.table(out('supercalifragilisticexpialidocious'))