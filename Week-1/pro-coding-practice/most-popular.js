"use strict";
/** Takes a word
 * finds most common letter(s)
 * returns array of most common letter(s)
 */
function mostPopular(word) {
  let letterCounter = generateFrequencyCounter(word);
  let common = findMostCommon(letterCounter);
  console.log("most common letters:", common);
  return common;
}

/**takes a word (could be array or string?),
 * returns an object with the counts of each letter */
function generateFrequencyCounter(word) {
  let letterCounter = {};
  for (let letter of word) {
    letterCounter[letter] = letterCounter[letter]
      ? letterCounter[letter] + 1
      : 1;
  }
  return letterCounter;
}

/**takes a frequency counter and returns an array 
 * containing the key(s) with the highest value
 */
function findMostCommon(frequencyCounter){
  let mostCommon = [];
  let currentHighest = 0;
  for(let key in frequencyCounter){
    if (frequencyCounter[key] > currentHighest){
      currentHighest = frequencyCounter[key];
      mostCommon =[key];
    }else if(frequencyCounter[key] === currentHighest){
      mostCommon.push(key);
    }
  }
  return mostCommon;
}