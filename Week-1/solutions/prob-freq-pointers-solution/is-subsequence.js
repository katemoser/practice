"use strict";

/** Given two strings, check * whether the characters in the first string
 *  form a subsequence of the characters * in the second string. */

function isSubsequence(str1, str2) {
  if (!str1) return true;

  let str1Idx = 0;
  let str2Idx = 0;

  while (str2Idx < str2.length) {
    if (str2[str2Idx] === str1[str1Idx]) {
      str1Idx += 1;
    }
    if (str1Idx === str1.length) {
      return true;
    }
    str2Idx += 1;
  }

  return false;
}

