function pigLatin(string) {
    testArr = []
    let prevIndex = 0
    for(let i = 0; i < string.length; i++)
    {
        if(string.charCodeAt(i) == 32)
        {
            
            testArr.push(string.substring(prevIndex, i))
            prevIndex = i + 1
        }
    }
    testArr.push(string.substring(prevIndex, string.length))

    function isVowel(char)
    {
        char.toLowerCase()
        let code = char.charCodeAt(0)
        switch(code)
        {
            case 97:
            case 101:
            case 105:
            case 111:
            case 117:
                return true
            default:
                return false
        }
    }

    function isSpecialCase(prev, cur)
    {
        return prev.charCodeAt(0) == 113 && cur.charCodeAt(0) == 117
    }
    let newArr = []
    testArr.forEach(element => {
        for(let i = 0; i < element.length; i++)
        {
            if(isVowel(element.charAt(i)))
            {
                if(i != 0 && isSpecialCase(element[i-1], element[i]))
                {
                    newArr.push(element.substring(i + 1, element.length) + element.substring(0, i + 1) + "ay")
                    break;
                }
                newArr.push(element.substring(i, element.length) + element.substring(0, i) + "ay")
                break;
            }
        }
    });

    let finalString = newArr[0]
    for(let i = 1; i < newArr.length; i++)
    {
        finalString += " " + newArr[i]
    }
    return finalString
};
  
// Do not edit below this line
module.exports = pigLatin;
