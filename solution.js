//#1

function multiplyTwoNums(num1, num2) {
  console.log("Q1:", num1 * num2);
}

multiplyTwoNums(12, 3);

//#2

const multiplyTwoNums2 = function (num1, num2) {
  console.log("Q2.", num1 * num2);
};

multiplyTwoNums2(12, 3);

//#3

const multiplyTwoNums3 = (num1, num2) => {
  console.log("Q3:", num1 * num2);
};
multiplyTwoNums3(12, 3);

//#4

//function declaration
function remainder(num1, num2) {
  console.log("Q4.1", num1 % num2);
}

remainder(25, 4);

//function declaration as values

const remainder1 = function (num1, num2) {
  console.log("Q4.2:", num1 % num2);
};

remainder1(12, 5);

//Arrow function

const remainder2 = (num1, num2) => {
  console.log("Q4.3:", num1 % num2);
};

remainder2(23, 5);
