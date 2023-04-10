/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    - It'll be Step 1, Step 3, and then Step 2. This is because Step 2 is technically coming from an asynchronous function that will output "Step 2" after at least 2 seconds.
 *
 *
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    - Printed exactly in the order I mentioned. Step 1, Step 3, and Step 2.
 *
 *
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *    - It will stil be the same. This is because Step 1 is added to the event loop, then the snooze() call, then Step 3. Step 1 will log, then it reaches snooze().
 *      Snooze() then uses setTimeout(), which is an async function so it doesn't block the execution of the rest of the code, therefore Step 3 logs.
 *      SetTimout() sends Step 2 to the end of the event loop and it executes after Step 3.
 *
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

