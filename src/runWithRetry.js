//
//
//
//
export function runWithRetry(taskFn) {
  return (...args) => {
    return taskFn(...args);
  };
}
