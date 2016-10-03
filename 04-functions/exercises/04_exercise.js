/*

Card Game of War Exercise Part 1.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

/*

Given the above suits and ranks array, write a function called createDeck that will take both as parameters and return a new array with all 52 possible card combinations. The returned 'Deck of Cards' should be an array with 52 strings in it, each representing a card (i.e. 'ace of Hearts')

Call createDeck and save the result into a variable called deckOfCards.

*/

<<<<<<< HEAD
function createDeck( suits, ranks ) {
var finalDeck = []

for(var i = 0; i < suits.length; i++) {
  for (var j = 0; j < ranks.length; j++) {
    finalDeck.push( ranks[j] + ' of ' + suits[i] )
  }
}
return finalDeck
}

var myDeck = createDeck( suits, ranks )
 console.log( myDeck )
=======


>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292

/*

Write a function called getRandomCard that will return one random card from deckOfCards whenever it is called.

Don't worry about removing the card from deckOfCards.

*/

<<<<<<< HEAD
function getRandomCard(myDeck){
  return Math.random ();
}
var randomCard = getRandomCard
console.log(randomCard)


=======
>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292



/*

Write a function called dealHand that takes a number as it's only parameter. This number represents the number of cards that dealHand should return.

If no number is passed in, then dealHand should still return one card. If dealHand is only returning one card, it returns that card as a string; if dealHand is returning more than one card, it returns the cards as an array.

*/
<<<<<<< HEAD
var cardType = new Object();
  cardType.suits
  cardType.ranks
var numberOfCards = [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]
function dealHand(numberOfCards){
  console.log()
}
=======


>>>>>>> 9d8c264deeba832960354784ef7ac77700c62292


/*

Create two variables, playerOneCards and playerTwoCards, and initialize them as empty arrays.

Deal both playerOneCards and playerTwoCards 7 cards each.

*/




/*

Write a function called showHand that takes a player's cards as an array and prints each card.

*/




/*

Get pumped:
Next class we're going to talk about objects, which will let us create cards that are easier to use because they contain attributes like suit and rank. Then, we'll be able to take two random cards and compare their score with each other!

*/
