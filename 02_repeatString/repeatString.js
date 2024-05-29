const repeatString = function (string, number) {
  let finalString = ``;
  if (number < 0) return "ERROR";
  for (let i = 1; i <= number; i++) {
    finalString += string;
  }
  return finalString;
};

repeatString(`hey`, 3);

// Do not edit below this line
module.exports = repeatString;
