it('should price books correctly', function () {
  expect(getPrice(books[1])).toEqual(10.80);
  expect(getPrice(books[0])).toEqual(5.40);
});

it('should decrement copies correctly', function () {
  sellBook(books[3]);
  expect(books[3].copies).toEqual(3);
});

// TODO: additional tests here ...
