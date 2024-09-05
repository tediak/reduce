const reduceTest = (reduceFn) => (arr, fn, defaultValue) => {
  const arrStringified = JSON.stringify(arr);
  const expected = arr.reduce(fn, defaultValue);
  try {
    const received = reduceFn(arr, fn, defaultValue);
    const result = expected === received;
    return {
      array: arrStringified,
      function: fn.toString(),
      expected,
      received,
      ok: result,
      error: null,
    };
  } catch (err) {
    return {
      array: arrStringified,
      function: fn.toString(),
      expected,
      received: null,
      ok: false,
      error: err.toString(),
    };
  }
}

export const reduceTests = (implementation, args) => {
  const test = reduceTest(implementation);
  const results = [];
  for (const arg of args) {
    results.push(test(...arg));
  }
  return results;
}
