import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let x = arr.slice(0)
  for (let i = 0; i < x.length; i++) {
    if (x[i] === '--discard-next') {
      delNext(i, x)
    }

    if (x[i] === '--discard-prev') {
      delPrev(i,x)
    }

    if (x[i] === '--double-prev') {
      doublePrev(i,x)
    }

    if (x[i] === '--double-next') {
      doubleNext(i,x)
    }
  }
  delDel(x)
  // console.log('first = ', arr)
  // console.log('mod = ', x)
  return x
}


function delNext(i, arr ) {
  if (arr[i+1] === undefined || arr[i+1] === 'del'){
    // arr[i] = '*'
    arr.splice(i,1)
  } else{
    arr[i + 1] = 'del'
    arr.splice(i,1)
  }
}

function delPrev(i, arr ) {
  if (arr[i-1] === undefined || arr[i-1] === 'del' ) {
    arr.splice(i,1)
  }
  else{
    arr[i-1] = 'del'
    arr.splice(i,1)
  }
}

function doublePrev(i,arr) {
  if (arr[i-1] === undefined || arr[i-1] === 'del' ) {
    arr.splice(i,1)
  }
  else{
    arr[i] = arr[i-1]
  }
}

function doubleNext(i,arr){
  if (arr[i+1] === undefined) {
    arr.splice(i,1)
  }
  else{
    arr[i] = arr[i+1]
  }
}

function delDel(arr) {
  for (let i = 0; i < arr.length; i++) {
    (arr[i] === 'del') ? arr.splice(i,1) : false
  }
}


