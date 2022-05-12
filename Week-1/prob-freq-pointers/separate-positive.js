"use strict";
// add whatever parameters you deem necessary & write docstring
function separatePositive(nums) {
  //solve with multiple pointers
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex < rightIndex) {
    if (nums[leftIndex] < 0 && nums[rightIndex] > 0) {
      [nums[leftIndex], nums[rightIndex]] = [nums[rightIndex], nums[leftIndex]];
      leftIndex += 1;
      rightIndex -= 1;
    } else {
      if (nums[leftIndex] > 0) {
        leftIndex += 1;
      } else {
        rightIndex -= 1;
      }
    }
  }
  return nums;
}
