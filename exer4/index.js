const fs = require('fs');
const {v4 : uuidv4} = require('uuid')
const validator = require('validator');

// Generates a 
function generateUniqueID(firstName, lastName){
    var newFirst = firstName.slice(0,1);
    const userID = uuidv4().slice(0,8)
    var newName = newFirst.toLowerCase() + lastName.toLowerCase() + userID;

    return newName
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