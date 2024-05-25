package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("Welcome to the Study of time in golang")

	presentTime := time.Now()

	fmt.Println(presentTime)

	//! We need to give fix time format as 01-02-2006 Monday 15:03:04

	fmt.Println(presentTime.Format("01-02-2006 Monday 15:03:04"))

	createdDate := time.Date(2004, time.April, 30, 12, 00, 00, 00, time.UTC)

	fmt.Println(createdDate)
}
