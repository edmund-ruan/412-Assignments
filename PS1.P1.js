function reverseString(text) {
    let codeArray = [];

    for (let letterInd = 0; letterInd < text.length; letterInd++) {
        codeArray.push(text.charAt(letterInd));
    }

    codeArray.sort().reverse();

    let retString = '';

    for (let ind = 0; ind < codeArray.length; ind++){
        retString = retString.concat(codeArray[ind]);
    }

    return retString;
}

console.log(reverseString('exioi'))
console.log(reverseString('supercalifragilisticexpialidocious'))