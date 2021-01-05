const myRemove = require("./remove");

// function myRemoveWithoutCopy(arr, item) {
//   for (let i = 0, len = arr.length; i < len; i += 1) {
//     if (arr[i] === item) {
//       arr.splice(i, 1);
//       i -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((element, index) => {
   return element === item ? arr.splice(index, 1) : arr
  });
  return arr
}

module.exports = myRemoveWithoutCopy;
