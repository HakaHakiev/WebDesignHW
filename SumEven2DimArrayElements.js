let arr = [
  [1, 2, 3],
  [4, 5, 6],
];
let sum = function SumEven2DimArrayElements(arr) {
  let evenSum = 0;
  for (let i = 0; i <= arr.length; i++) {
    let num1 = +arr[0][i];
    let num2 = +arr[1][i];
    if (num1 % 2 === 0) {
      evenSum += num1;
    }
    if (num2 % 2 === 0) {
      evenSum += num2;
    }
  }
  console.log(evenSum); // 12
};
sum();
