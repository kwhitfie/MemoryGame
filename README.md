# MemoryGame

## Game Description

Classic memory game where you match pairs of tiles in a grid in a set amount of turns.

# Pseudocode

## HTML / CSS

- [ ] Create a grid of tiles, tiles have a flip and unflipped version with one being disabled depending on state
- [ ] Text showing amount of turns remaining, changes when game finishes to show victory/defeat
- [ ] Restart button that appears when game is over

## Javascript

- [x] Create a card class
  - <ins>Variables</ins>
    - [ ] State: Flipped, Unflipped, Matched
    - [x] ID: used to match with pair
  - <ins>Methods</ins>
    - [x] Flip card => switch between flip and unflipped and perform some kind of animation

- [ ] Generate a randomized grid => assign pairs with matching ids and images and make all cards face down. Method can be used to restart the game
- [ ] Store number of currently matched pairs (default 0) as well as the maximum amount of pairs (grid size / 2) when starting the game
- [ ] Check if matched (card1, card2) => Check if ids match. If false, change both states to unflipped, if true, change both states to matched and increment total amount of matched pairs. Decrement no of turns remaining
- [ ] Array of cards that are currently flipped => if size of 2, check if matched then reset count to 0.
- [ ] Check win/lose state after each match check. If all pairs are matched => **Win**. If any pairs left unmatched when no of turns reaches 0 => **Lose**
- [ ] Player should not be able to flip already matched cards and matched cards should look distinguishable from those in play

### Optional - Stuff to add if I have time

- [ ] Disable player input when card flip animation is playing
- [ ] Multiple difficulties (bigger grids, less turns)
