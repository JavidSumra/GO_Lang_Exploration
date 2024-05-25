package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)

	fmt.Println("Enter the Rating of GO Lang:")
	rate, _ := reader.ReadString('\n')
	fmt.Printf("%s", rate)
}
