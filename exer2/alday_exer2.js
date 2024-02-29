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

}

function storePassword(name, p1, p2){

}

console.log(validatePassword("Hey12345", "Hey12345"))
console.log(reversePassword("Hey12345"))