import { alwaysTrue } from './main.js';

describe('#alwaysTrue', () => {
  it('should always return true', () => {
    expect(alwaysTrue()).toEqual(true);
  });
});
