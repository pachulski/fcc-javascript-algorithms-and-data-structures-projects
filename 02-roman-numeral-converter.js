/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    const arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000];
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M', 'MM', 'MMM'];
    let arabicBroken = [];
    let m = Math.floor(num/1000);
    let mRest = num % 1000;
    let c = Math.floor(mRest/100);
    let cRest = mRest % 100;
    let x = Math.floor(cRest/10);
    let xRest = cRest % 10; 
    if (m > 0) {
        arabicBroken.push(m*1000);
    }
    if (c > 0) {
        arabicBroken.push(c*100);
    }
    if (x > 0) {
        arabicBroken.push(x*10);
    }
    if (xRest > 0) {
        arabicBroken.push(xRest);
    }
    let finalRoman = arabicBroken.map(e => roman[arabic.indexOf(e)]).join('');
    return finalRoman;
   }
   
   convertToRoman(36);