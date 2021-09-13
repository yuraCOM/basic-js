import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (!sampleActivity || typeof(sampleActivity) != "string" || isNaN(sampleActivity) || +sampleActivity === Infinity ){
    console.log(+sampleActivity)
    console.log(isNaN(sampleActivity))
    console.log(false, '1')
    return false
  }
  else{
    if ( sampleActivity <=0 || +sampleActivity > 5730 ){
      console.log(+sampleActivity)
      console.log(false, '2')
      return false
    }
    else {
      let sAct = +sampleActivity
      let age = Math.ceil(Math.log(MODERN_ACTIVITY/sAct) / (0.693 / HALF_LIFE_PERIOD))
      console.log(sAct)
      // console.log(age)
      if (age<=0 ){
        console.log(age)
        console.log(false, '3')
        return false
      }
      else {
        console.log(age)
        return age
      }
    }
  }
}