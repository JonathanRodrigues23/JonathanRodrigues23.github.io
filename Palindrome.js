function palindrome(str) {

    const newStr = str
        .replace(/\W|_/g, "")
        .toLowerCase()

    const reversedString = newStr
        .split("")
        .reverse()
        .join("")

    return newStr !== reversedString ? false : true
}
