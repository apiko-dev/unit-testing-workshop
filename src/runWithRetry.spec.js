import { runWithRetry } from './runWithRetry.js';

//
//
// should return result in 1st try if resolved
// should return result in 2st try if resolved
// should reject if threshold is exceeded
describe('#runWithRetry', () => {
  it('should return result in 1st try if resolved', () => {
    const expectedRes = 22;
    const mockDoSomething = () => expectedRes;
    expect(runWithRetry(mockDoSomething)).toEqual(expectedRes);
  });
});
