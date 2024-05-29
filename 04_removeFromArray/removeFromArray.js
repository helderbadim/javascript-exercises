const removeFromArray = function (array, ...elementToDelete) {
  const modifiedArray = [];
  array.forEach((element) => {
    if (!elementToDelete.includes(element)) {
      modifiedArray.push(element);
    }
  });
  return modifiedArray;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
