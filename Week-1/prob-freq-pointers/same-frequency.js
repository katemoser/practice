// add whatever parameters you deem necessary & write docstring
function sameFrequency(num1, num2) {
  const frequencyCounter1 = makeFrequencyCounter(num1.toString());
  const frequencyCounter2 = makeFrequencyCounter(num2.toString());

  return Object.keys(frequencyCounter1)
    .every((key) => frequencyCounter1[key] === frequencyCounter2[key]);
}

function makeFrequencyCounter(word) {
  let frequencyCounter = {};
  for (let letter of word) {
    frequencyCounter[letter] = frequencyCounter[letter]
      ? frequencyCounter[letter] + 1
      : 1;
    console.log(frequencyCounter);
  }
  return frequencyCounter;
}
