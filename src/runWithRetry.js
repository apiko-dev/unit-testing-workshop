export function runWithRetry(taskFn) {
  return async (...args) => {
    let isResolved = false;
    let result = null;

    while (!isResolved) {
      try {
        result = await taskFn(...args);
        isResolved = true;
      } catch (err) {
        continue;
      }
    }

    return result;
  };
}
