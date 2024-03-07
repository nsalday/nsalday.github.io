//Imports
const fs = require('fs');
const {v4 : uuidv4} = require('uuid');
const validator = require('validator');

//Generates a unique ID for a given user
function generateUniqueID(firstName, lastName){
    var newFirst = firstName.slice(0,1); //Gets the first character of the user
    const userID = uuidv4().slice(0,8); //Gets the first 8 characters in the generated ID
    var newName = newFirst.toLowerCase() + lastName.toLowerCase() + userID; //Concatenates newFirst and userID

    return newName; //Returns newName
}

//Creates an account from the given user details and saves it in an account
function addAccount([firstName, lastName, email, age]){
    //Check if the parameters exist
    if (Boolean(firstName) && Boolean(lastName) && Boolean(email) && Boolean(age)){
        //Check if the strings are not empty strings
        if(firstName !== '' && lastName !== '' && email !== ''){    
            //Checks if the email is valid and the age is at least 18
            if (validator.isEmail(email) && age >= 18){
                //Generates a new user
                var user = firstName + "," + lastName + "," + email + "," + age + "," + generateUniqueID(firstName, lastName);
                //Saves details in users.txt
                fs.appendFileSync("users.txt", user + '\n', "UTF-8",{'flags': 'a+'});
                return true; //return true
            }
        }
    }

    return false; //If the conditions are not met, return false
}

module.exports = {addAccount, generateUniqueID}; //export