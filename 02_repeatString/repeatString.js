const repeatString = function (string, number) {
  let finalString = ``;
  for (let i = 1; i <= number; i++) {
    finalString += string;
  }
  return finalString;
};

repeatString(`hey`, 3);

// Do not edit below this line
module.exports = repeatString;
