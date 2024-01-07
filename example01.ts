const tasks = [1, 2, 2, 3, 5, 4, 9, 3, 8];

// export function removeDuplicates<T>(tasks: T[]): T[] {
//   return tasks.filter((item, index) => tasks.indexOf(item) === index);
// }

//or

export function removeDuplicates<T>(tasks: T[]): T[] {
  const uniqueSet = new Set<T>(tasks);
  return Array.from(uniqueSet);
}

console.log(removeDuplicates(tasks)); // Exit [ 1, 2, 3, 5,4, 9, 8 ]
