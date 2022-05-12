"use strict";

/** Given two positive integers, find out
 * if the two numbers have the same frequency of digits.
 */

 function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const count1 = {};
  const count2 = {};

  for (let i = 0; i < str1.length; i++) {
    count1[str1[i]] = (count1[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    count2[str2[j]] = (count2[str2[j]] || 0) + 1;
  }

  for (const key in count1) {
    if (count1[key] !== count2[key]) return false;
  }

  return true;
}
