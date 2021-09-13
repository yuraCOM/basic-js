import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  console.log(matrix)
  let newMatrix = matrix.toString().split(',')
  console.log(newMatrix)
  let count = 0
  newMatrix.forEach( item =>{
    let re = /^\^\^$/g
    item.match(re) ? count+=1 : false
  })
  console.log(count)
  return count
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
