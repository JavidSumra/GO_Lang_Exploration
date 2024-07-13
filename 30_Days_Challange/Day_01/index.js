// Activity 1:
// Variable Declaration

var rollNumber = 57;
console.log(rollNumber);

let myName = "Javid";
console.log(myName);

// Activity 2:
// Constant Declaration

const isPass = true;
console.log(isPass);

// Activity 3:
// Data Types

let details = {
  age: 20,
  UG_passingYear: 2025,
  hobby: "Traveling",
};

const marks_Array = [10, 20, 30, 40];

console.log(typeof marks_Array);
console.log(typeof details);
console.log(typeof isPass);
console.log(typeof myName);

// Activity 4:
// Reassigning Variables

let isAssignable = true;
console.log(`Before Reassign:${isAssignable}`);
isAssignable = false;
console.log(`After Reassign:${isAssignable}`);

const isNotAssignable = 55;
console.log(`Before Reassign:${isNotAssignable}`);
isNotAssignable = 90; // It Gives TypeError: Assignment to constant variable
console.log(`After Reassign:${isNotAssignable}`);
