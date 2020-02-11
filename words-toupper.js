function toUpper(sentence){
    return sentence.match(/[A-Za-z]+/gim).map(s => s.toUpperCase()).join(", ")
}

console.log(toUpper('Hi, how are you?'))