let vowels = document.getElementById("vowels")
let consonants = document.getElementById("consonants")
let wordBox = document.getElementById("word")
let definition = document.getElementById("definition")


function generateConsonants(length) {
    let result = " ";
    const chars = "BCDFGHJKLMNPQRSTVWXYZ";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;  
}
function generateVowels(length) {
    let result = " ";
    const chars = "AEIOU";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;  
}

let generateLetters = document.getElementById("letters").onclick = function () { vowels.textContent = generateVowels(5);
consonants.textContent = generateConsonants(8)}

let clear = document.getElementById("clear").onclick = function () {
    document.getElementById("word").value = "";
    document.getElementById("definition").value = "";
}
