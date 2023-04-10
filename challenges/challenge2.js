/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 *    - Assumption:
 *        - "Hello there, Ducky"
 *        - "MAKE SCHOOL IS AWESOME!!!"
 *
 *
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 *    - If greet() rejects, the first then() will simply return a promise with the same value as the original promise, a reject.
 *      This is because the first then() is not provided with a failure handler.
 *    - The next then() would also return a promise with the same value as the original for the same reason.
 *    - Finally, it'll reach the catch() block, and that'll output "Received an error" and also output the error.
 *
 *
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 *    - If greet() succeeds, it'll output "Hello there, Ducky"
 *    - It will then return the settled promise value from the uppercaser(my_str). In this case, it'll be a rejected promise.
 *    - This rejected promise is then passed to the second .then(), which has no failure handler, so it simply returns a promise with
 *      the same settled value as the original, in this case a rejected promise from the uppercaser(my_str) function
 *    - This error will then be caught by the catch() function and ouput an error message and the error.
 *
 *
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 *
 *    Name this method spacer(str). It should run asynchronously, so use a
 *    setTimeout() and return a Promise.
 *
 *    Last, call spacer() after you call greeter() and uppercaser().
 *
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one.
 *
 *******************************************************************************
 */

 function spacer(str) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (typeof str === 'string') {
        resolve(str.split('').join(" "));
      } else {
        reject("Str must be a string!")
      }
    }, 2000);
  });
 }

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') {
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

name = "Ducky"
my_str = "Make school is dope!"
str = "Hello"

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(str);
    })
    .then((spacerResult) => {
      console.log(spacerResult)
    })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
