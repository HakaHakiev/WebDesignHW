function numbersArr(numbers) {
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0 && number > 0) {
      evenNums.push(number);
    } else if (0 > number && number % 2 === -1) {
      oddNums.push(number);
    }
  }
  console.log(`Even: ${evenNums.join(",")}`);
  console.log(`Odd: ${oddNums.join(",")}`);
}
numbersArr([1, 6, -3, 5, 2, -8, 0, 4, 3]);
// Even: 6,2,4
// Odd: -3
