it("should find the scores for each word", function() {
  expect(scoreWords(["a", "b", "c"])).toEqual([1, 3, 3]);
  expect(scoreWords(["apple", "banana", "cherry"])).toEqual([9, 8, 14]);
  expect(scoreWords(["ha", "sh", "yo", "ax", "hm"]))
    .toEqual([5, 5, 5, 9, 7]);
});

it("should handle non-letter chars by returning null for word", function() {
  expect(scoreWords(["hi!!!", "hello???"])).toEqual([null, null]);
  expect(scoreWords(["When", "I'm", "64"])).toEqual([10, null, null]);
  expect(scoreWords(["what", "", "a", "", "strange", "", "arrray", "!"]))
    .toEqual([10, 0, 1, 0, 8, 0, 9, null]);
});
