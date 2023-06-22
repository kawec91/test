const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

var addTwoNumbers = function (liste1, liste2) {
  let number1 = "";
  let number2 = "";
  for (let x = liste1.length - 1; x > -1; x--) {
    number1 += `${liste1[x]}`;
  }
  for (let x = liste2.length - 1; x > -1; x--) {
    number2 += `${liste2[x]}`;
  }
  let result = parseInt(number1) + parseInt(number2);
  let resultInString = result.toString().split("").reverse();
  console.log(resultInString);
  console.log(typeof resultInString);
  console.log(`---------end---------`);
  return resultInString;
};

addTwoNumbers(l1, l2);

const l3 = [0];
const l4 = [0];

addTwoNumbers(l3, l4);
const l5 = [9, 9, 9, 9, 9, 9, 9];
const l6 = [9, 9, 9, 9];
addTwoNumbers(l5, l6);
/////////////////////////////////
const x1P = 121;
var isPalindrome = function (x) {
  reverseX = "";
  for (let y = 0; y < x.toString().split("").reverse().length; y++) {
    reverseX += `${x.toString().split("").reverse()[y]}`;
  }

  if (x === parseInt(reverseX)) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isPalindrome(x1P);
const x2P = -121;
isPalindrome(x2P);
/////////////////////////////////
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let thisList = s.split("");
  let value = 0;
  for (let z = 0; z < thisList.length; z++) {
    if (thisList[z] == "I") {
      if (thisList[z + 1] == "V" || thisList[z + 1] == "X") {
        value -= roman[thisList[z]];
      } else {
        value += roman[thisList[z]];
      }
    } else if (thisList[z] == "X") {
      if (thisList[z + 1] == "L" || thisList[z + 1] == "C") {
        value -= roman[thisList[z]];
      } else {
        value += roman[thisList[z]];
      }
    } else if (thisList[z] == "C") {
      if (thisList[z + 1] == "D" || thisList[z + 1] == "M") {
        value -= roman[thisList[z]];
      } else {
        value += roman[thisList[z]];
      }
    } else {
      value += roman[thisList[z]];
    }
    return value;
  }
};

const myRoman1 = "IVI";
const myRoman2 = "LVIII";
const myRoman3 = "MCMXCIV";
romanToInt(myRoman1);
romanToInt(myRoman2);
romanToInt(myRoman3);
////////////////////////////////////////
