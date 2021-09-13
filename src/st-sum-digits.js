import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let z = 0
  if ( n === 10){
    console.log("zzzzzzzz 1111111111")
    z = 1
  }
  else{
    // console.log(String(n).split(''))
    let z = getSumFirst(n)
    console.log("zzzzzzzz 2222222222222")
    console.log(z)
    return  Number(z)>9 ? getSumFirst(z) : z
  }
  console.log(z)
  return z
}

function getSumFirst(n) {
  n = Math.abs(n)
  console.log(n)
  n = String(n).split('')
  console.log(n)
  n = n.reduce( (acc, item) =>{
    // acc = +acc
    // item = + item
    acc = +acc + (+item)
    // console.log(acc)
    return acc
  }, 0)
  console.log(n)
  return n
}
