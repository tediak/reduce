import implementation from "./implementation.js"
import { reduceTests } from "./tests.js";

const args = [
  [
    [1, 2, 3, 4, 5],
    (a, b) => a + b,
    0
  ],
  [
    [1, 2, 3, 4, 5],
    (a, b) => a - b,
    100
  ],
  [
    [1, 2, 3, 4],
    (a, b) => a * b,
    0
  ],
  [
    [],
    (a, b) => a + b,
    -10
  ],
  [
    ['Hello', ' ', 'World'],
    (a, b) => a + b,
    ''
  ],
  [
    [undefined, 1, 2, 3, ' ', new Error('it happens')],
    (a, b) => a + b,
    null
  ],
];

const results = reduceTests(implementation, args);

console.table(results, ['ok', 'array', 'function', 'expected', 'received', 'error']);
