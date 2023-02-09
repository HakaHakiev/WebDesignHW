// let numbers = ;
function findMaxEven(numbers) {
  max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  }
  console.log(`The max of ${numbers} is ${max}`);
}
findMaxEven([2, -4, 5, 3, 9, 0, 1]);
// The max of 2,-4,5,3,9,0,1 is 2
