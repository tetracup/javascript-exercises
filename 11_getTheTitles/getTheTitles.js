const getTheTitles = function(books) {
    let titleArr = []
    books.forEach(element => {
        titleArr.push(element.title)
    });
    return titleArr
};

// Do not edit below this line
module.exports = getTheTitles;
