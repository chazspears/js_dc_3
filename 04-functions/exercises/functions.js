/*

  Functions

  Instructions ( How to use this file ):
  Uncomment lines of code and run the file using `node control-flow.js` to see their output. Make sure you recomment out the parts of the file you just executed before moving on!

  1. Declaring a function
  2. Using Parameters and Arguments
  3. Return values
  4. Using Scope
<<<<<<< HEAD
  5. Function composition
=======
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292

*/


/*

  1. Declaring a function

*/

// Function declaration
// function myFirstFunction() {
//   console.log( 'this is my first function' )
// }
<<<<<<< HEAD


=======
//
// myFirstFunction
// myFirstFunction()
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292


// ----------
// Referencing our function:
// myFirstFunction

// Calling our function
// myFirstFunction()


/*

  2. Using Parameters and Arguments

*/

// ----------

// var number = 0;
// function addOneToNumber() {
//   number += 1
// }
//
// function addTwoToNumber() {
//   number += 2
// }


// ----------
<<<<<<< HEAD
// function addOne( number ) {
//   return number + 1
// }
=======
// function addNumbers( numOne, numTwo ) {
//   console.log(numOne + numTwo)
// }
//
// addNumbers( 1, 2 )

>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292

/*

  3. Return values

*/

<<<<<<< HEAD
// Side effect
=======
// function addOne( numOne, numTwo ) {
//   return numOne + numTwo
// }
//
// var myNum = addOne( 5, 10 )
// console.log( myNum )



// // Side effect
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292
// var number = 0
//
// function addNumber( adder ) {
//   number += adder;
// }
//
// addNumber( 5 )
// // => number = 5;
<<<<<<< HEAD

// Output
=======
//
// // Output
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292
// function addNumbers( num1, num2 ) {
//   return num1 + num2
// }
//
// var number = addNumbers( 5, 10 )
// console.log( number ) // => 15



/*

  4. Using Scope

*/

// Scope Example 1:
// var a = 1
//
<<<<<<< HEAD
// function addThree( x ) {
//   return x + 3
// }
//
// var myNumber = addThree( a )


// Scope Example 2:
// function myFunction() {
//   var a = 1
// }
//
=======
// function addThree( ) {
//   return a + 3
// }




// Scope Example 2:
// function addNumbers( num1, num2) {
//   var a = num1
//   var b = num2
//
//   return a + b
// }
//
// myFunction()
//
// for (var a = 0; a < array.length; a++) {
//   array[a]
// }
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292
// console.log( a )


// Scope Example 3:
// var a = 1
//
// function myFunction() {
//   console.log( a )
// }

// Scope Example 4:
// var a = 1;
// function firstFunction() {
//   // do we expect this to work?
//   var b = 2
//
//   console.log( a )
//   console.log( b )
//
//   function internalFunction() {
//     var c = 3
//
//     // do we expect this to work?
//     console.log( a )
//     console.log( b )
//     console.log( c )
//   }
//
//   // do we expect this to work?
//   console.log( a )
//   console.log( b )
//   console.log( c )
// }
// // do we expect this to work?
// console.log( a )
// console.log( b )
// console.log( c )
<<<<<<< HEAD


/*

  5. Pure Function

*/
=======
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292
