const reverseString = function(string) {
    let finalStr = "";
    for( let i = string.length - 1; i >= 0; i--)
    {
        finalStr += string[i]
    }
    return finalStr
};

// Do not edit below this line
module.exports = reverseString;
