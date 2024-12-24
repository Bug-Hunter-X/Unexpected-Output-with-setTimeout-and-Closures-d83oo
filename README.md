# Unexpected Output with setTimeout and Closures

This repository demonstrates a common JavaScript closure issue related to the use of `setTimeout` within a loop.  The code appears to intend to log the numbers 0 through 9 with a one-second delay between each. However, due to the way closures work in JavaScript, it unexpectedly logs the value 10 ten times. 

## Problem
The issue lies in the way JavaScript's `setTimeout` function handles the variable `i`.  By the time the `setTimeout` callbacks finally execute, the loop has already completed, and `i` has reached its final value of 10.  Each callback therefore uses the same value of `i` (10). 

## Solution
The solution involves creating a new scope for each iteration of the loop using an immediately invoked function expression (IIFE) or `let`'s block scope feature:

**Solution 1 (IIFE):**
```javascript
function myFunction() {
  for (let i = 0; i < 10; i++) {
    (function(j) {
      setTimeout(() => {
        console.log(j);
      }, 1000);
    })(i);
  }
}
```

**Solution 2 (Let):**
This approach leverages the block scoping of `let`. 
```javascript
function myFunction() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
```
This works as expected because `let` creates a new variable `i` for each loop iteration.

Both solutions correctly capture the value of `i` at each iteration of the loop, resulting in the expected output.