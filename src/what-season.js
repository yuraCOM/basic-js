import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {


  const seasons = {
    11 : 'winter',
    0 : 'winter',
    1 : 'winter',
    2 : 'spring',
    3 : 'spring',
    4 : 'spring',
    5 : 'summer',
    6 : 'summer',
    7 : 'summer',
    8 : 'autumn',
    9 : 'autumn',
    10 : 'autumn',
  }

  if (!date){
    console.log( 'Unable to determine the time of year!')
    return  'Unable to determine the time of year!'
  }

  if(date.toString().split('.').join('') === 'Invalid Date'){
    console.log( "Invalid date!")
    return  "Invalid date!"
  }
  else {
    try {
      date.getTime();
    } catch (error) {
      throw new Error ('Invalid date!');
    }
    console.log(date.toLocaleString().split('.'))
    let m = date.toLocaleString().split('.')[1]-1
    console.log(m)
    console.log(seasons[m])
    return seasons[m]
  }
}

