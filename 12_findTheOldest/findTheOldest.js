const findTheOldest = function(people) {
    let oldestArr = [0, 0]
    people.forEach(element => {

        let age = (element.yearOfDeath === undefined) ? 2022 - element.yearOfBirth : element.yearOfDeath - element.yearOfBirth
        
        if(age > oldestArr[0])
        {
            oldestArr[0] = age
            oldestArr.pop();
            oldestArr.push(element)
        }
        
    });
    return oldestArr[1]
};

// Do not edit below this line
module.exports = findTheOldest;
