// Activity 1
function addNum(a, b) {
  console.log(a + b);
}

function subNum(a, b) {
  console.log(a - b);
}

function mulNum(a, b) {
  console.log(a * b);
}

function divNum(a, b) {
  console.log(a / b);
}

function remNum(a, b) {
  if (b === 0) {
    console.log("Division by zero is not allowed");
  } else {
    console.log(a % b);
  }
}

// Activity 2
function addTwoNum(a, b) {
  a += b;
  console.log(a);
}

function subTwoNum(a, b) {
  a -= b;
  console.log(a);
}

// Activity 3
function compareNum(a, b) {
  if (a > b) {
    console.log(a, " is Greater than ", b);
  } else {
    console.log(b, " is Greater than ", a);
  }
}

function compareNum2(a, b) {
  if (a >= b) {
    console.log(a, " is Greater or equal to ", b);
  } else {
    console.log(b, " is Greater than ", a);
  }
}

function checkCompVal(a, b) {
  if (a == b) {
    console.log("Value of a and b are same");
  } else if (a === b) {
    console.log("Value and Type of a and b are same");
  }
}

function LogicOperator(condition1, condition2) {
  if (condition1 && condition2) {
    console.log("Both Condition are true");
  } else if (condition1 || condition2) {
    console.log(`Either ${condition1} or ${condition2} is true`);
  }

  console.log(`Inverse value of ${condition1} is ${!condition1}`);
  console.log(`Inverse value of ${condition2} is ${!condition2}`);
}

function whatIsNumSign(num) {
  num >= 0
    ? num === 0
      ? console.log("Number is Zero")
      : console.log(`${num} is Positive`)
    : console.log(`${num} is Negative`);
}
