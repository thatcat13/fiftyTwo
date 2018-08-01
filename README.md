# Metal Toad Code Challenge: Sort/Shuffle Deck o' Cards!
### Cat Janowitz

## Description:

Code Challenge:

1. Must provide a standard deck of 52 playing cards, with 4 suits

2. Must be able to sort the deck in ascending order.

    * You are free to determine what the term "ascending order" means for a deck of cards, but be ready to discuss your choice during the interview.

3. Must be able to randomly shuffle the deck of cards.

4. Can be in any language.

5. Be prepared to explain what you did and why you did it.

6. OPTIONAL - Provide functioning unit tests

## Installation Instructions

Clone project from GitHub repository, by copying and pasting the url of this GitHub repository following the $git clone command into your favorite command line program, such as Terminal on Mac:
```
$git clone https://github.com/thatcat13/fiftyTwo.git project
$cd project
$npm install
```

## Dependencies

Run `npm i` to install the development dependencies.


## Testing
Testing was attempted using Jest testing tool

## Notes
I really enjoyed the process of figuring out the approach to sort and shuffle a deck of cards. The deck of cards would be contained in a single array. The array would house 52 individual objects with at least 2 key-value pairs (value: 1-52, suit: spades, hearts, diamonds, clubs). I applied the .sort() method on the deck array to perform an ascending sort for each card according to the card's given value. I also implemented Math.random() to randomize the card objects within the array.

Research sources:
1. [MDN's Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
2. [Freecodecamp's forum on how Math.random() works to shuffle an array](https://forum.freecodecamp.org/t/how-does-math-random-work-to-sort-an-array/151540)

## Future Goals
I'd like to become more familiar with Jest testing library to unit test my code successfully
