const fibonacci = function(num) {
    if(num < 0 )
    return "OOPS"

    let prev = 0
    let cur = 1
    for(let i = 2; i <= num; i++)
    {
        let temp = cur
        cur = prev + cur
        prev = temp
    }
    
    return cur 
};

// Do not edit below this line
module.exports = fibonacci;
