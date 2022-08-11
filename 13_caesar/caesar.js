const caesar = function(phrase, num) {
    let shiftedString = ""
    num = num%26
    for(let i = 0; i < phrase.length; i++)
    {
        let newChar = phrase[i]
        let code = newChar.charCodeAt(0)
        if(code >= 97 && code <= 122)
        {
            let newCode = code+num
            if(newCode > 122)
                newCode = newCode - 122 + 96
            else if(newCode < 97)
                newCode = 123 - (97 - newCode)
            newChar = String.fromCharCode(newCode)
        }
        else
        {
            newChar = newChar.toLowerCase()
            code = newChar.charCodeAt(0)
            if(code >= 97 && code <= 122)
            {
                let newCode = code+num
                if(newCode > 122)
                    newCode = newCode - 122 + 96
                else if(newCode < 97)
                    newCode = 123 - (97 - newCode)
                newChar = String.fromCharCode(newCode)
                newChar = newChar.toUpperCase()
            }
        }
        shiftedString+=newChar
    }
    return shiftedString
};

// Do not edit below this line
module.exports = caesar;
