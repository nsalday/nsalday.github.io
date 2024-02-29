/*
    Name: Neil Vincet S. Alday
    Section: UV-3L
    Exercise 3: JavaScript Basics part 1
*/

// This function validates the password if it's valid or not
function validatePassword(p1, p2){
    // Checks if p1 is equal to p2. If not, return false
    if (p1 == p2){
        // Loops through p1's characters
        for(var i = 0; i < p1.length; i++){
            // If there is a number present in the string, check if there is at least one lowercase letter, at least one uppecase letter, and the string is at least 8 in length...
            if(!isNaN(parseInt(p1[i]))){
                if ((p1 != p1.toLowerCase()) && (p1 != p1.toUpperCase()) && (p1.length >= 8)){
                    return true // If conditions are met, return true
                }
            }
        }
    } 

    return false
}

// Reverses a given string
function reversePassword(str){
    var newStr = "" // Variable to store the new string

    // Traverses the string in a reverse order
    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i] // Increment the current character to newStr
    }

    return newStr // Return newStr
}

// Stores a new password of the user
function storePassword(name, p1, p2){
    var newPass = ""
    if(validatePassword(p1, p2) == true){ // If the two passwords match...
        newPass = reversePassword(p1) // add the new password to newPass with its reversed state
    } else {
        newPass = p1  // If they don't match, the newPass is still the p1
    }

    const user1 = {name: name, newpassword: newPass} //object
    return user1 // return user1
}

// Test Cases
console.log(validatePassword("Hey12345", "Hey12345"))
console.log(validatePassword("HEY12345", "HEY12345"))
console.log(reversePassword("Hey12345"))
console.log(storePassword("Neil", "Hey12345", "ey12345"))
console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass12345", "Pass12345"))
console.log(validatePassword("HELLO1234", "HELLO1234"))
console.log(storePassword("nene","1", "1"))
console.log(validatePassword("Hello1234", "Hello1234"))