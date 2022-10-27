import { runWithRetry } from './runWithRetry.js';

describe('#runWithRetry', () => {
  it('should return result in 1st try if resolved', () => {
    const expectedRes = 22;
    const mockDoSomething = jest.fn(() => expectedRes);
    const doSomethingWithRetry = runWithRetry(mockDoSomething);

    expect(doSomethingWithRetry('foo')).toEqual(expectedRes);
    expect(mockDoSomething).toHaveBeenCalledTimes(1);
    expect(mockDoSomething).toHaveBeenCalledWith('foo');
  });

  // TODO:
  // should return result in 2st try if resolved
  // should reject if threshold is exceeded
});
