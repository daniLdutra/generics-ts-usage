function getFirstElement<T>(arr: T[], defaultValue: T): T {
  return arr.length > 0 ? arr[0] : defaultValue
}

const numbers = [1, 2, 3, 4, 5];
const firstNumber = getFirstElement(numbers, 1);
console.log(firstNumber); // Exit: 1

const fruit = ['apple', 'banana', 'orange'];
const firstFruit = getFirstElement(fruit, '');
console.log(firstFruit); // Exit: "apple"
