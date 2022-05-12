"use strict";

// add whatever parameters you deem necessary & write docstring
/** takes a sorted array of integers and a target average
 * returns true if there is at least one pair of numbers
 * in the array that average to the target average
 *
 * multiple pointers
 */
function averagePair(sortedNums, targetAverage) {
  //start by comparing the first (lowest ) number to the last(highest) number
  //if too big, lower the last
  //if too small raise the first
  let lowerIndex = 0;
  let upperIndex = sortedNums.length - 1;

  while (lowerIndex < upperIndex) {
    let lower = sortedNums[lowerIndex];
    let upper = sortedNums[upperIndex];

    let currentAverage = _average([lower, upper]);
    if (currentAverage === targetAverage) {
      return true;
    } else if (currentAverage > targetAverage) {
      upperIndex--;
    } else if (currentAverage < targetAverage) {
      lowerIndex++;
    }
  }
  return false;

  function _average(nums) {
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    return sum / nums.length;
  }
}
