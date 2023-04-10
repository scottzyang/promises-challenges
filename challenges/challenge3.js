/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 *
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 *    - A regular sync function would assign the value of greeting and uppercasedgreeting. In this case, if the keyword async wasn't used in front
 *      of function greetAndUppercase, the two variables would simply be assigned to a promise object that is pending.
 *    - Using the async...await syntax allows each variable to assign when the promises have been resolved. It is essentially saying
 *      "Wait to assign the value of greeting until the greet() has resolved". This halts the async function from executing until this
 *       promise is resolved.
 *
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 *    - Similar to what I mentioned above, what is printed is a promise with a value of pending, since we did not "await" until the
 *      promise was resolved.
 *
 *
 * 3. Uncomment block #2 and run the code again. What happens now?
 *    - The output is exactly as anticipated. "HELLO THERE, DUCKY".
 *    - "Ducky" is passed into greetAndUppercase. It then gets passed into the greet() async function with the await operator.
 *    - greeting is then set equal to the resolved promise from greet(), same thing for uppercaser().
 *    - .then() will print the result returned from the greetAndUppercase async function.
 *
 *
 * 4. Write an asynchronous method 'spacer' that takes a string as input and
 *    returns the input string with a space added between each character. You
 *    can use your solution from Part 3.
 *
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 *
 *    'H E L L O   T H E R E ,   D U C K Y'
 *
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
      }, 500);
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
        }, 500);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spaces = await spacer(uppercasedGreeting)
    return spaces
}

/* Uncomment me! #1 */
result = greetAndUppercase('Ducky')
console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })
