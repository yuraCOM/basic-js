import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  console.log(String(n).split(''))
  let arr = String(n).split('').map(Number);
  console.log(arr)
  let minIndex = arr.indexOf(Math.min(...arr));
  console.log(minIndex)
  arr.splice(minIndex, 1);
  console.log(arr)
  return Number(arr.join(''))
}
