import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disks, turnsSpeed ) {
    let calcHanoiObj = { turns: 0, seconds: 0 }
    calcHanoiObj.turns = 2**disks - 1
    calcHanoiObj.seconds = Math.floor(calcHanoiObj.turns * 3600 / turnsSpeed)
    console.log(calcHanoiObj)
    return calcHanoiObj
}
