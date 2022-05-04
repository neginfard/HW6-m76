function accumulatingArray(array) {
  let sum = 0;
  return array.map((value) => (sum += value));
}
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 5, 7];
let arr3 = [1, 0, 1, 0, 1];
let arr4 = [];
console.log(accumulatingArray(arr3));
