import parse from '../app/parse';

it(`parses addition of two fractions`, () => {
  expect(parse.parseInput("1/4 + 2/4")).toBe('3/4');
});
