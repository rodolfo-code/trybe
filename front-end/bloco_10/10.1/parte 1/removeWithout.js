const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((element, index) => {
   return element === item ? arr.splice(index, 1) : arr
  });
  return arr
}

module.exports = myRemoveWithoutCopy;
