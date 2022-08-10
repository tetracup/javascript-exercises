const sumAll = function() {
let sum;
let smallerNum;
let biggerNum;

function SetVariables(arg1, arg2)
{
    smallerNum = arg1;
    biggerNum = arg2;
}

for(let i = 0; i < arguments.length; i++)
{
    if(arguments[i] < 0 || typeof(arguments[i]) != "number")
    return 'ERROR'
}

if(arguments[0]>arguments[1])
    SetVariables(arguments[1], arguments[0])
else
    SetVariables(arguments[0], arguments[1])

sum = (biggerNum-(smallerNum - 1)) * ((smallerNum + biggerNum)/2)
return sum
};

// Do not edit below this line
module.exports = sumAll;
