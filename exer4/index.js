const fs = require('fs');
const {v4 : uuidv4} = require('uuid')
const validator = require('validator');

//Generates a unique ID for a given user
function generateUniqueID(firstName, lastName){
    var newFirst = firstName.slice(0,1); //Gets the first character of the user
    const userID = uuidv4().slice(0,8) //Gets the first 8 characters in the generated ID
    var newName = newFirst.toLowerCase() + lastName.toLowerCase() + userID; //Concatenates newFirst and userID

    return newName //returns newName
}

function addAccount(firstName, lastName, email, age){
    if (Boolean(firstName) && Boolean(lastName) && Boolean(email) && Boolean(age)){
        if(firstName !== '' && lastName !== '' && email !== ''){    
            if (validator.isEmail(email) && age >= 18){
                var user = firstName + "," + lastName + "," + email + "," + age + "," + generateUniqueID(firstName, lastName)
                fs.appendFileSync("users.txt", user + '\n', "UTF-8",{'flags': 'a+'});
                return true
            }
        }
    }

    return false
}

module.exports = {addAccount, generateUniqueID}