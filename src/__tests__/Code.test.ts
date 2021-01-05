import { Code } from '../Code';

test(`Invalid KOATUU's`, () => {
  expect(() => new Code('')).toThrow(Error);
});
