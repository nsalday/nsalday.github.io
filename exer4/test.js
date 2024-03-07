/*
    Name: Neil Vincent S. Alday
    Section: UV3L
    Date: 03/08/2024
    Exercise 4: JavaScript Basics part 2
*/

//Imports index.js
const index = require('./index.js');

//Test Cases
console.log(index.addAccount(["Neil", "Alday", "nsalday@gmail.com", 18])) //True
console.log(index.addAccount(["Neil", "", "nsalday@gmail.com", 18])) //False
console.log(index.addAccount(["", "Alday", "nsalday@gmail.com", 19])) //False
console.log(index.addAccount(["Neil", "Alday", "", 19])) //False
console.log(index.addAccount(["Neil", "Alday", "nsalday@gmail.com"])) //False
console.log(index.addAccount(["Neil", "Alday", 18])) //False
console.log(index.addAccount(["Alday", "nsalday@gmail.com", 18])) //False
console.log(index.addAccount(["Neil", "Alday", 18])) //False
console.log(index.addAccount(["Neil", 18])) //False
console.log(index.addAccount(["Neil"])) //False
console.log(index.addAccount([])) //False
console.log(index.addAccount(["Neil", "Alday", "nsalday@gmail.com", 17])) //False
console.log(index.addAccount(["Mark", "Day", "lain@gmail.com", 20])) //True