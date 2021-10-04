// import { NotImplementedError } from '../extensions/index.js';
//
// /**
//  * Implement class VigenereCipheringMachine that allows us to create
//  * direct and reverse ciphering machines according to task description
//  *
//  * @example
//  *
//  * const directMachine = new VigenereCipheringMachine();
//  *
//  * const reverseMachine = new VigenereCipheringMachine(false);
//  *
//  * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
//  *
//  * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
//  *
//  * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
//  *
//  * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
//  *
//  */
// export default class VigenereCipheringMachine {
//   // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   direct;
//
//   constructor(direct){
//     this.direct = direct;
//   }
//
//   encrypt(message, key) {
//     if (message === undefined || key === undefined){
//       throw new Error('Incorrect arguments!');
//     }
//     message = message.toUpperCase();
//     key = key.toUpperCase();
//
//     let result = '';
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//
//     let keyNumber = 0;
//
//     console.log(message, key, result)
//     return message
//   }
//
//
//   decrypt(message, key) {
//     if (message === undefined || key === undefined){
//       throw new Error('Incorrect arguments!');
//     }
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//     message = message.toUpperCase();
//     key = key.toUpperCase();
//
//     let result = '';
//
//
//     console.log(message, key, result)
//
//     return message
//   }
//
// }
