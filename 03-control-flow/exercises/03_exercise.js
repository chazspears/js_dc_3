/*

  In-class Exercise 02
  Independent coding

  Prompt:

  If we list the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all multiples of 3 or 5 below 1000.
*/
var myTotal = 0

for ( var i = 0; i < 10; i++ ) {
  if( i % 3 === 0 ) {
    console.log( i )
    myTotal += i
  } else if ( i % 5 === 0 ) {
    console.log( i )
    myTotal += i
  }
}

console.log( myTotal )
