# Javascript + operator unexpected behavior with undefined and null
This repository demonstrates the unexpected behavior of JavaScript's + operator when used with `undefined` and `null` values.

## Bug Description
The `+` operator in JavaScript doesn't always behave as expected when one of the operands is `undefined` or `null`.  Specifically:
* When adding a number to `undefined`, the result is `NaN` (Not a Number).
* When adding a number to `null`, the result is the number itself (because `null` is coerced to 0).

This can lead to unexpected results in your code if you're not aware of this behavior. This repo provides example code to illustrate this and shows a possible solution.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using Node.js (or your preferred JavaScript runtime).

You'll observe the unexpected outputs printed to the console.

## Solution
The `bugSolution.js` file provides a solution by explicitly checking for undefined or null values before performing the addition. This makes the code more robust and less prone to unexpected errors.
