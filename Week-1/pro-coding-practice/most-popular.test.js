it("should find the most popular", function() {
  expect(mostPopular("abbaaac")).toEqual(["a"]);
  expect(mostPopular("vroom")).toEqual(["o"]);
  expect(mostPopular("cabba")).toEqual(["a", "b"]);
});
