/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. */

function palindrome(str) {
  let regex = /[a-zA-Z0-9]/ig;
  let newStr = str.match(regex).join('').toLowerCase();
  let reverseStr = str.match(regex).reverse().join('').toLowerCase();
  return newStr === reverseStr;
}



palindrome("eye");