const leapYears = function (year) {
  let remainderOfFour = year % 4;
  let remainderOf100 = year % 100;
  let remainderOf400 = year % 400;
  if (remainderOfFour === 0 && remainderOf100 === 0 && remainderOf400 === 0) {
    return true;
  } else if (remainderOfFour === 0 && remainderOf100 !== 0) {
    return true;
  } else {
    return false;
  }
};
leapYears(2000);

// Do not edit below this line
module.exports = leapYears;
