// JS Interview Question

// sum of Input number in function

function sumNum(num) {
  let rem = 0;
  let sum = 0;

  while (num > 0) {
    rem = num % 10;
    sum = sum + rem;
    num = parseInt(num / 10);
  }
  return sum;
}
console.log("\nSum of Input Number", sumNum(46));

// reverse of input number
function revNum(num) {
  let temp = num;
  let rem = 0;
  let rev = 0;
  let isPalindrome = false;

  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }

  if (rev === temp) {
    isPalindrome = true;
  }
  console.log("\nReverse of Input Number", rev);
  console.log("Palindrome =", isPalindrome);
}
revNum(121);

// reverse of Prime number
function primeCheck(num) {
  let isPrime;
  for (let i = 2; i <= num; i++) {
    if (num % i == 0 && num == i) {
      isPrime = true;
      break;
    }
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
console.log("\nInput Value is", primeCheck(5));

// gcd and lcm of Input numbers
function findGcdLcm(num1, num2) {
  let gcd;
  let lcm;
  let greaterVal;

  if (num1 > num2) {
    greaterVal = num1;
    smallerVal = num2;
  } else {
    greaterVal = num2;
    smallerVal = num1;
  }

  for (let i = 1; i <= greaterVal; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
      lcm = (num1 * num2) / gcd;
    }
  }

  console.log("\nGCD Value is", gcd);
  console.log("lcm Value is", lcm);
}

findGcdLcm(5, 10);

// Armstrong Number
function findArmstrong(num) {
  let temp = num;
  //   let numDigit = temp.length;
  //   console.log("digit length ", numDigit);
  const numDigit = num.length;
  //   console.log(digit);
  let rem;
  let sum = 0;
  let isArmstrong;

  while (num > 0) {
    rem = num % 10;
    sum = sum + rem ** 3;
    num = parseInt(num / 10);
  }

  if (sum === temp) {
    console.log("\nIt is an Armstrong Number ");
  } else {
    console.log("\nIt is not an Armstrong Number ");
  }
}
findArmstrong(153);

// Print Star

/*
 *****
 *****
 *****
 *****
 *****
 */
let n = 5;

function rectangleStar(n1) {
  let str = "";
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n1; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }
  console.log("Rectangle Star");
  console.log(str);
}
rectangleStar(n);

/*
 *
 **
 ***
 ****
 *****
 */

function leftTraingle(n1) {
  let str = "";
  for (let i = 0; i < n1 + 1; i++) {
    for (let j = 0; j < i; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }
  console.log("\nLeft Traingle Star");
  console.log(str);
}
leftTraingle(n);

/*
  s *
   **
  ***
 ****
***** 
 */

function rightTraingle(n1) {
  let str = "";
  for (let i = 0; i < n1 + 1; i++) {
    for (let j = 0; j < n1; j++) {
      if (j < n - i) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    str = str + "\n";
  }
  console.log("\nRight Traingle Star");
  console.log(str);
}
rightTraingle(n);

/*
 *****
 ****
 ***
 **
 *
 */

function reverseLeftTraingle(n1) {
  let str = "";
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n1 - i; j++) {
      str = str + "*";
    }
    str = str + "\n";
  }
  console.log("\nReverse Left Traingle Star");
  console.log(str);
}
reverseLeftTraingle(n);

/*
 *****
  ****
   ***
    **
 s   *
 */

function reverseRightTraingle(n1) {
  let str = "";
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n; j++) {
      if (j < i) {
        str = str + " ";
      } else {
        str = str + "*";
      }
    }
    str = str + "\n";
  }
  console.log("\nReverse Right Traingle Star");
  console.log(str);
}
reverseRightTraingle(n);

/*
num be n
if num is divisible by 3 print fizz
if num is divisible by 5 print buzz
if num is divible by both print fizzbuzz
if num is not divible by both print number
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i, "FizzBuzz");
    } else {
      if (i % 3 == 0) {
        console.log(i, "Fizz");
      }
      if (i % 5 == 0) {
        console.log(i, "Buzz");
      }
      if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
      }
    }
  }
}
fizzBuzz(25);

// fetch array valu which does not include number inside string value
let arr = [
  "dsdsd",
  "dasd54asd54as",
  "546dasds54d5as64",
  "drwerwe9rwe",
  "iuyiyuuj",
  "pwenwpokpoc",
];

let arr2 = [];
let arr3 = [];
let regex = /[\d]/;

console.log("\n");
for (let k of arr) {
  if (regex.test(k)) {
    arr2.push(k);
  }
  if (!regex.test(k)) {
    arr3.push(k);
  }
}
console.log(arr2);
console.log(arr3);
