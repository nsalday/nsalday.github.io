function validatePassword(p1, p2){
    if (p1 == p2){
        for(var i = 0; i < p1.length; i++){
            if(!isNaN(parseInt(p1[i]))){
                if ((p1 != p1.toLowerCase()) && (p1 != p1.toUpperCase()) && (p1.length >= 8)){
                    return true
                }
            }
        }
    } 

    return false
}

function reversePassword(str){
    var newStr = ""

    for(var i = str.length - 1; i >= 0; i--){
        newStr += str[i]
    }

    return newStr
}

function storePassword(name, p1, p2){
    var newPass = 'name: "' + name + '"' + ', newpassword: "'
    if(p1 == p2){
        newPass += reversePassword(p1) + '"'
    } else {
        newPass += p1 + '"'
    }

    return newPass
}

console.log(validatePassword("Hey12345", "Hey12345"))
console.log(reversePassword("Hey12345"))
console.log(storePassword("Neil", "Hey12345", "ey12345"))