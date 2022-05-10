// function wordScores(arr) {
//   let newArr = [];
//   for (let x of arr) {
//     let num = 0;
//     for (let y of x) {
//       num += obj[y.toUpperCase()];
//     }
//     newArr.push(num);
//   }
//   return newArr;
// }

function scoreWords(words) {
  return words.map(word => scoreWord(word));
}

function scoreWord(word){
  let wordScore = 0
  for (let letter of word) {
    let letterScore = LETTER_TO_VALUE[letter.toUpperCase()] || null;
    if(!letterScore) return null;

    wordScore += letterScore;
  }
  return wordScore;
}

let LETTER_TO_VALUE = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
