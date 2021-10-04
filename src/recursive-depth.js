import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(arrN) {

        function getMaxDepth(arr, level){
          if ( !level ){
            level = 0;
          }
          if ( Array.isArray(arr) ) {
            level += 1;
            var p = level;
            for(var i=0; i<arr.length; i++){
              var c = arr[i];
              var sublevel = getMaxDepth(c, level)
              p = Math.max( p, sublevel);
              console.log(c,sublevel,p )
            }
            return p;
          }  else {
            return level;
          }
        }
        return getMaxDepth(arrN)
    }
}

// export default class DepthCalculator {
//     calculateDepth(arrN) {
//       Array.prototype.max = function() {
//         return Math.max.apply(null, this);
//       };
//
//       function f1(item, level = 0){
//         if (item instanceof Array){
//           return item.map(function(value, index){
//             return f1(value, level + 1)
//           }).max() - (level > 0 ? 0 : 1) // Если главный массив не считаем
//         }
//         return level;
//       }
//       return f1(arrN)
//     }
// }
