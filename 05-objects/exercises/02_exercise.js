/*

Working with Objects

Your car from Exercise 1 should have atleast 4 properties, at least one of
which is a method. Use it to answer the prompts below.

*/
var myCar = new Object();
myCar.make = "Hyundai";
myCar.year = 2016;
myCar.model = "Elantra";
myCar.colOr = "Black";
myCar.status = function(newOrUsed) {
  if(myCar.year <= 2017){
    myCar.status = "Used";
  }
  else {
    myCar.status = "New";
  }

}
console.log(myCar.status)

/*

Redeclare your car here. It can either by by typing it out again or by
copying and pasting it here. Make sure you're assigning your car object to a
variable and that it meets the conditions above of having at least 4
properties, one of which is a method

*/

myCar

/*

Get one of the properties from your object using dot notation

*/

console.log( myCar.make)


/*

Get one of the properties from your object using bracket notation

*/

console.log( myCar['model'])

/*

Set one of the values of one of your properties using either dot notation or
bracket notation

*/

myCar['year'] = '2018'
console.log(myCar.year);
console.log(myCar.status)
/*

Call your car's method

*/
