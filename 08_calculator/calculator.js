
const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element
  });
  return sum
};

const multiply = function(arr) {
  let sum = arr[0];
  for(let i = 1; i < arr.length; i++)
  {
    sum *= arr[i]
  }
  return sum
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
  let sum = 1
	for(let i = num + 1; i >= 1; i--)
  {
    sum *= i;
  }
  sum /= (num+1)
  return sum 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
