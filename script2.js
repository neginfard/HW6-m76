function ratingStar(array) {
  let count = 0;
  let sum = 0;
  let countingSum = array.map((value, index) => {
    count += value;
    sum += value * (index + 1);
  });

  let result = (sum / count).toFixed(2);
  let rounded = Math.round(result);

  console.log(`${result} ${"".padStart(rounded, "*")}`);
}
let arr1 = [55, 67, 98, 115, 61];
let arr2 = [0, 2, 0, 1, 23];
let arr3 = [16, 17, 23, 40, 45];
ratingStar(arr3);
