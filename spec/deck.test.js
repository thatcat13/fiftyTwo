//test ideas:
//there are 52 'cards' in the deck
//there are 13 of each suit
//there are quadruplicates of each type
//all cards have a value and a suit
//sort function returns proper ascending numerical order
//shuffle function returns randomized order

const Deck = require('./../index.js');
const testDeck = new Deck();

//this is a dummy test:
test('dummy test two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

test('the deck array has 52 objects', () => {
  expect(testDeck).toHaveLength(52);
});
