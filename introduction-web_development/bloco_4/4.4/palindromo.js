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

console.log()
console.log(itsPalindrome('pedro'))

// OU

//Duas formas de resolver o exercício
function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }
  
  function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); 

  