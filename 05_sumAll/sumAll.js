const sumAll = function (number1, number2) {
  let finalSum = 0;
  if (number1 < 0 || number2 < 0) {
    return `ERROR`;
  } else if (typeof number1 != `number` || typeof number2 != `number`) {
    return `ERROR`;
  } else if (number2 > number1) {
    for (let i = number1; i <= number2; i++) {
      finalSum += i;
    }
    return finalSum;
  } else if (number1 > number2) {
    for (i = number2; i <= number1; i++) {
      finalSum += i;
    }
    return finalSum;
  }
};

sumAll(1, "4");
// Do not edit below this line
module.exports = sumAll;
