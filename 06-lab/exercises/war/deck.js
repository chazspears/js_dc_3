/*

Card Game of War Exercise Part 2.

*/

var suits = ['hearts', 'clubs', 'spades', 'diamonds']
var ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
var score = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
var deck = []

/*

Card Scores: ace: 1, two: 2, three: 3, four: 4, ... jack: 11, king: 12, queen: 13

*/

/*

Create a `constructor` (A function that returns an object) for a card. Each card should have a suit, rank and score as well as a title. The title should be a string descriptor for the card, like 'Ace of Hearts' or 'Four of Clubs'

Test out your constructor by creating a new card, `console.log`ing it to make sure you're getting what you expect. You should get something like:

{
  suit: 'hearts',
  rank: 'ace',
  title: 'ace of hearts',
  score: 1
}

*/

var eachCard = function(suits, ranks, score){
  this.suits = suits;
  this.ranks = ranks;
  this.score = score;
}

var aceOfHearts = new eachCard("Spades", "Queen", 12 );
console.log(aceOfHearts)


/*
The new array for the deck
*/

var createNewDeck = function(){
for( var i = 0; i < suits.length; i++){
  for(var j = 0; j < ranks.length; j++){
  var card = new  eachCard(suits[i], ranks[j], score[j]);
//console.log(card)
deck.push(card)

  }
}
}
createNewDeck()

var shuffledDeck = function shuffle(deck) {
  var i = 0
    , j = 0
    , temp = null

  for (i = deck.length - 1; i > 0; i -= 1){
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
return deck

  }
}
shuffledDeck()
console.log(deck);

/*
function shuffleArray(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}
*/


//console.log(deck)

playerOneDeck = deck.slice(0,26);
playerTwoDeck = deck.slice(26,53);

console.log(playerOneDeck)
console.log(playerTwoDeck)



//console.log(deck)

/*

Write a constructor function called player. A player should have a username that is a string and a hand that is an array of cards.

Instantiate two instances of your player object.

var player = function(username, hand){
  this.username = username;
  this.hand = hand;
}

/*
  var playerOne = new player('Chaz', hand = deck[1,23,4,5,2,54,7,2])
  console.log(playerOne)
*/
