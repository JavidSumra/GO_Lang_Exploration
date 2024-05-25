package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Enter Your Role Number:")
	reader := bufio.NewReader(os.Stdin)

	// ! Don't forgot to handle Error

	rollNum, err := reader.ReadString('\n')

	if err != nil {
		fmt.Println(err)
		panic(err) //! It'll Stop the Current Execution
	} else {
		newNumber, _ := strconv.ParseFloat(strings.TrimSpace(rollNum), 64)
		fmt.Println("Your Friends Roll Number is", newNumber+1)
	}

}
