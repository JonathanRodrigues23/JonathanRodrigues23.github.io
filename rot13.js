function rot13(str) {
    let newStr = str.split("")

    for (let i = 0; i < str.length; i++) {
        if(str[i].codePointAt() < 65 || str[i].codePointAt() > 90) {}
        else if ((str[i].codePointAt() + 13) > 90) {
            newStr[i] = String.fromCodePoint(str[i].codePointAt() - 13)
        }
        else {
            newStr[i] = String.fromCodePoint(str[i].codePointAt() + 13)
        }
    }
    
    return newStr.join("")
}

console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("SERR CVMMN!"))
