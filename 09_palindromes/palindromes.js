const reverseString = require('../03_reverseString/reverseString')

const palindromes = function (string) {
    string = string.toLowerCase()
    let testString = ""
    
    for(let i = 0; i < string.length; i++)
    {
        let code = string.charCodeAt(i)
        if(code >= 97 && code <= 122)
            testString+=string.charAt(i)
    }
    let string1
    let string2 
    let s1Ends2Start = []
    if(testString.length%2 != 0)
        s1Ends2Start.push((testString.length-1)/2, (testString.length+1)/2)
    else
        s1Ends2Start.push(testString.length/2, testString.length/2)
    string1 = testString.substring(0, s1Ends2Start[0])
    string2 = testString.substring(s1Ends2Start[1], testString.length)
    string2 = reverseString(string2)
    if(string1 == string2)
        return true
    return false
};

// Do not edit below this line
module.exports = palindromes;
