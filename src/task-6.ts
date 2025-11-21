function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numResult = getFirstElement<number>([1, 2, 3]); // 1
const strResult = getFirstElement<string>(["a", "b", "c"]); // "a"
const boolResult = getFirstElement<boolean>([true, false, true]); // true

console.log(numResult);
console.log(strResult);
console.log(boolResult);
