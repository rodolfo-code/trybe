let palindrome = ""

function itsPalindrome (wordToCheck) {
    for (let i = wordToCheck.length-1; i >= 0; i--) {
        palindrome += wordToCheck[i]
    }
    if (palindrome === wordToCheck) {
        return true
    } else {
        return false
    }
}

console.log(itsPalindrome('pedro'))

// OU

const isPalindrome = (str) => str.split('').reverse().join('') === str? true: false;

console.log(isPalindrome('arara'))