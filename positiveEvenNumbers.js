function positiveNum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > 0 && number % 2 === 0) sum += number;
  }
  console.log(`sum: ${sum}`);
}
positiveNum([-2, 3, 7, 8, -1, 4, 2]);
// sum: 14
