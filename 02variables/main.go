package main

import "fmt"

const LoanAmount int = 3000 //! By Using `const` keyword we can declare constants and if first Latter is Capital Means it's a Public Variable
func main() {

	//? Type String
	var username string = "Javid"
	fmt.Println(username)
	fmt.Printf("The Type of Variable is %T \n", username) //! Here %T is Used to Print type of Variable

	//? Type Boolean
	var isValidPass bool = true
	fmt.Println(isValidPass)
	fmt.Printf("The Type of Variable is %T \n", isValidPass)

	//? Type Unsigned integer 8 byte
	var number uint8 = 255 //! Max Size / We Can use uint,uint16,uint32,uint64,uintptr,int
	fmt.Println(number)
	fmt.Printf("The Type of Variable is %T \n", number)

	//? Type float32
	var floatNum float32 = 43.123456789123456
	fmt.Println(floatNum)
	fmt.Printf("The Type of Variable is %T \n", floatNum)

	//? Type float64
	var floatNum_64 float64 = 43.123456789123456
	fmt.Println(floatNum_64)
	fmt.Printf("The Type of Variable is %T \n", floatNum_64)

	//? Type Complex

	//! Important To Create any Complex number in GO We Can use `complex` function
	var comp_num64 complex64 = complex(1, 2)

	//! Important To Create any Complex number in GO We Can Directly write as `Maths`
	var comp_num128 complex128 = 2 + 4i

	fmt.Println(comp_num64)
	fmt.Println(comp_num128)
	fmt.Println(comp_num128 + complex128(comp_num64))

	//? Default Values
	var anotherNumber int
	var anotherString string
	var anotherBool bool

	fmt.Println(anotherNumber, anotherString, anotherBool)

	//? Implicit Type

	var num_1 = 1
	fmt.Println(num_1)

	//! Walrus Operator

	num_2 := 7
	fmt.Println(num_2)

	fmt.Println(LoanAmount)
}
