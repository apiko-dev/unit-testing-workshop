import { runWithRetry } from './runWithRetry.js';

const mockErrorMsg = 'Mock Error Message';

describe('#runWithRetry', () => {
  it('should return result in 1st try if resolved', async () => {
    const expectedRes = 22;
    const mockDoSomething = jest.fn().mockResolvedValueOnce(expectedRes);
    const doSomethingWithRetry = runWithRetry(mockDoSomething);

    await expect(doSomethingWithRetry('foo')).resolves.toEqual(expectedRes);
    expect(mockDoSomething).toHaveBeenCalledTimes(1);
    expect(mockDoSomething).toHaveBeenCalledWith('foo');
  });

  it('should return result in 2st try if resolved', async () => {
    const expectedRes = 22;
    const mockDoSomething = jest
      .fn()
      .mockRejectedValueOnce(new Error(mockErrorMsg))
      .mockResolvedValueOnce(expectedRes);
    const doSomethingWithRetry = runWithRetry(mockDoSomething);

    await expect(doSomethingWithRetry('foo')).resolves.toEqual(expectedRes);
    expect(mockDoSomething).toHaveBeenCalledTimes(2);
    expect(mockDoSomething).toHaveBeenCalledWith('foo');
  });

  // TODO:
  // should reject if threshold is exceeded
});
