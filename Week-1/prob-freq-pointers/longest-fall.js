"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 * Write a function called longestFall, which accepts an array of integers,
 * and returns the length of the longest consecutive decrease of integers.
 */
function longestFall(nums) {
  let longestFall = 0;

  let iterator = 0;

  while (iterator < nums.length) {
      console.log("index:", iterator, "num:", nums[iterator])
      //lowest a streak can be is 1!! not 0!!
    let currentStreak = 1;
        while (nums[iterator + 1] < nums[iterator]) {
          iterator++;
          currentStreak++;
        }
    longestFall = currentStreak > longestFall ? currentStreak : longestFall;
    currentStreak = 1;
    iterator++;
  }
  return longestFall;
}
