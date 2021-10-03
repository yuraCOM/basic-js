import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str)  {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  let buffer = str[0]
  let count = 1
  for (let i = 1; i <= str.length+1; i++) {
    if (buffer === str[i]){
      count+=1
    }
    else {
      if (count !==1){
        arr.push(count+buffer)
      }
      else{
        arr.push(buffer)
      }
      buffer = str[i]
      count = 1
    }
  }
  return  arr.join('')
}
