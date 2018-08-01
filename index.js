
//full deck of cards
  class Deck {
  constructor() {
    this.cards = [
      {value: 6, suit: 'hearts', kind: '6'},
      {value: 8, suit: 'hearts', kind: '8'},
      {value: 7, suit: 'hearts', kind: '7'},
      {value: 10, suit: 'hearts', kind: '10'},
      {value: 9, suit: 'hearts', kind: '9'},
      {value: 13, suit: 'hearts', kind: 'K'},
      {value: 12, suit: 'hearts', kind: 'Q'},
      {value: 11, suit: 'hearts', kind: 'J'},
      {value: 1, suit: 'hearts', kind: 'A'},
      {value: 3, suit: 'hearts', kind: '3'},
      {value: 2, suit: 'hearts', kind: '2'},
      {value: 5, suit: 'hearts', kind: '5'},
      {value: 4, suit: 'hearts', kind: '4'},

      {value: 19, suit: 'clubs', kind: '6'},
      {value: 21, suit: 'clubs', kind: '8'},
      {value: 20, suit: 'clubs', kind: '7'},
      {value: 23, suit: 'clubs', kind: '10'},
      {value: 22, suit: 'clubs', kind: '9'},
      {value: 26, suit: 'clubs', kind: 'K'},
      {value: 25, suit: 'clubs', kind: 'Q'},
      {value: 24, suit: 'clubs', kind: 'J'},
      {value: 14, suit: 'clubs', kind: 'A'},
      {value: 16, suit: 'clubs', kind: '3'},
      {value: 15, suit: 'clubs', kind: '2'},
      {value: 18, suit: 'clubs', kind: '5'},
      {value: 17, suit: 'clubs', kind: '4'},

      {value: 32, suit: 'diamonds', kind: '6'},
      {value: 34, suit: 'diamonds', kind: '8'},
      {value: 33, suit: 'diamonds', kind: '7'},
      {value: 36, suit: 'diamonds', kind: '10'},
      {value: 35, suit: 'diamonds', kind: '9'},
      {value: 39, suit: 'diamonds', kind: 'K'},
      {value: 38, suit: 'diamonds', kind: 'Q'},
      {value: 37, suit: 'diamonds', kind: 'J'},
      {value: 27, suit: 'diamonds', kind: 'A'},
      {value: 29, suit: 'diamonds', kind: '3'},
      {value: 28, suit: 'diamonds', kind: '2'},
      {value: 31, suit: 'diamonds', kind: '5'},
      {value: 30, suit: 'diamonds', kind: '4'},

      {value: 45, suit: 'spades', kind: '6'},
      {value: 47, suit: 'spades', kind: '8'},
      {value: 46, suit: 'spades', kind: '7'},
      {value: 49, suit: 'spades', kind: '10'},
      {value: 48, suit: 'spades', kind: '9'},
      {value: 52, suit: 'spades', kind: 'K'},
      {value: 51, suit: 'spades', kind: 'Q'},
      {value: 50, suit: 'spades', kind: 'J'},
      {value: 40, suit: 'spades', kind: 'A'},
      {value: 42, suit: 'spades', kind: '3'},
      {value: 41, suit: 'spades', kind: '2'},
      {value: 44, suit: 'spades', kind: '5'},
      {value: 43, suit: 'spades', kind: '4'},
    ];
  }

//sort method accepting custom compareFunction as parameter, set to ascending algorithm
  sortedDeck(){
    const sortedDeck = this.cards;
    sortedDeck.sort((a,b) => {
      return a.value - b.value;
    });
    return sortedDeck;
  }

//sort method accepting compareFunction [default] in conjunction with Math.random() to return a negative number and a positive number in equal amounts
  shuffledDeck(){
    const shuffledDeck = this.cards;
    shuffledDeck.sort(() => {
      return 0.5 - Math.random()
    });
    return shuffledDeck;
  }
}

export default Deck; 

//CODE TO CREATE A DECK FROM SCRATCH:
// var deck = [];
// var suit = ['blerg', 'woo'];
// var type = ['A', '2', '3'];
// var value = 1;
//
// function createDeck() {
//   for(var i=0; i<suit.length; i++){
//     for(var j=0; j<type.length; j++) {
//       var card = {suit: suit[i], type: type[j], value: value};
//       deck.push(card);
//       value++;
//     }
//   }
//   return deck;
// }
// console.log(deck);
// createDeck();

//FIRST VERSION OF CODE:
//full deck of cards
// const deck = [
//     {value: 6, suit: 'hearts', kind: '6'},
//     {value: 8, suit: 'hearts', kind: '8'},
//     {value: 7, suit: 'hearts', kind: '7'},
//     {value: 10, suit: 'hearts', kind: '10'},
//     {value: 9, suit: 'hearts', kind: '9'},
//     {value: 13, suit: 'hearts', kind: 'K'},
//     {value: 12, suit: 'hearts', kind: 'Q'},
//     {value: 11, suit: 'hearts', kind: 'J'},
//     {value: 1, suit: 'hearts', kind: 'A'},
//     {value: 3, suit: 'hearts', kind: '3'},
//     {value: 2, suit: 'hearts', kind: '2'},
//     {value: 5, suit: 'hearts', kind: '5'},
//     {value: 4, suit: 'hearts', kind: '4'},
//
//     {value: 19, suit: 'clubs', kind: '6'},
//     {value: 21, suit: 'clubs', kind: '8'},
//     {value: 20, suit: 'clubs', kind: '7'},
//     {value: 23, suit: 'clubs', kind: '10'},
//     {value: 22, suit: 'clubs', kind: '9'},
//     {value: 26, suit: 'clubs', kind: 'K'},
//     {value: 25, suit: 'clubs', kind: 'Q'},
//     {value: 24, suit: 'clubs', kind: 'J'},
//     {value: 14, suit: 'clubs', kind: 'A'},
//     {value: 16, suit: 'clubs', kind: '3'},
//     {value: 15, suit: 'clubs', kind: '2'},
//     {value: 18, suit: 'clubs', kind: '5'},
//     {value: 17, suit: 'clubs', kind: '4'},
//
//     {value: 32, suit: 'diamonds', kind: '6'},
//     {value: 34, suit: 'diamonds', kind: '8'},
//     {value: 33, suit: 'diamonds', kind: '7'},
//     {value: 36, suit: 'diamonds', kind: '10'},
//     {value: 35, suit: 'diamonds', kind: '9'},
//     {value: 39, suit: 'diamonds', kind: 'K'},
//     {value: 38, suit: 'diamonds', kind: 'Q'},
//     {value: 37, suit: 'diamonds', kind: 'J'},
//     {value: 27, suit: 'diamonds', kind: 'A'},
//     {value: 29, suit: 'diamonds', kind: '3'},
//     {value: 28, suit: 'diamonds', kind: '2'},
//     {value: 31, suit: 'diamonds', kind: '5'},
//     {value: 30, suit: 'diamonds', kind: '4'},
//
//     {value: 45, suit: 'spades', kind: '6'},
//     {value: 47, suit: 'spades', kind: '8'},
//     {value: 46, suit: 'spades', kind: '7'},
//     {value: 49, suit: 'spades', kind: '10'},
//     {value: 48, suit: 'spades', kind: '9'},
//     {value: 52, suit: 'spades', kind: 'K'},
//     {value: 51, suit: 'spades', kind: 'Q'},
//     {value: 50, suit: 'spades', kind: 'J'},
//     {value: 40, suit: 'spades', kind: 'A'},
//     {value: 42, suit: 'spades', kind: '3'},
//     {value: 41, suit: 'spades', kind: '2'},
//     {value: 44, suit: 'spades', kind: '5'},
//     {value: 43, suit: 'spades', kind: '4'},
// ];
//sort method accepting custom compareFunction as parameter, set to ascending algorithm
// let organizedDeck = deck.sort((a,b) => {
//   return a.value - b.value;
// });
// console.log(organizedDeck);

//sort method accepting compareFunction [default] in conjunction with Math.random() to return a negative number and a positive number in equal amounts
// let randoDeck = deck.sort(() => {
//   return 0.5 - Math.random()
//   });
// console.log(randoDeck);
