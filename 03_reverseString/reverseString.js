const reverseString = function (originalString) {
  let reverse = ``;
  for (let i = originalString.length - 1; i >= 0; i--) {
    reverse += originalString[i];
  }
  return reverse;
};

reverseString(`hello`);

// Do not edit below this line
module.exports = reverseString;
