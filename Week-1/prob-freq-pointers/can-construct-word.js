"use strict";
// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  const frequencyCounter = {};

//   make frequency counter out of letters
  for (let letter of letters) {
    frequencyCounter[letter] = frequencyCounter[letter]
      ? frequencyCounter[letter] + 1
      : 1;
      console.log(frequencyCounter);
  }
    // decrement letters in word
    for(let letter of word){
        if(frequencyCounter[letter] >0){
            frequencyCounter[letter]--;
        } else{
            return false;
        }
    }
    //if count of letters never goes below 0, return true
    return true;
  }

