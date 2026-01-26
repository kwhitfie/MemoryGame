# MemoryGame

## Game Description

Classic memory game where you match pairs of tiles in a grid in a set amount of turns.

# Pseudocode

## HTML / CSS

- [x] Create a grid of tiles, tiles have a flip and unflipped version with one being disabled depending on state
- [x] Text showing amount of turns remaining, changes when game finishes to show victory/defeat
- [x] Restart button that appears when game is over
- [x] Hand-drawn assets to be created and added
- [x] Correct styling on multiple resolutions and grid sizes

## Javascript

- [x] Create a card class
  - <ins>Variables</ins>
    - [x] State: Flipped, Unflipped, Matched
    - [x] ID: used to match with pair
  - <ins>Methods</ins>
    - [x] Flip card => switch between flip and unflipped and perform some kind of animation

- [x] Generate a randomized grid => assign pairs with matching ids and images and make all cards face down. Method can be used to restart the game
- [x] Store number of currently matched pairs (default 0) as well as the maximum amount of pairs (grid size / 2) when starting the game
- [x] Check if matched (card1, card2) => Check if ids match. If false, change both states to unflipped, if true, change both states to matched and increment total amount of matched pairs. Decrement no of turns remaining
- [x] Array of cards that are currently flipped => if size of 2, check if matched then reset count to 0.
- [x] Check win/lose state after each match check. If all pairs are matched => **Win**. If any pairs left unmatched when no of turns reaches 0 => **Lose**
- [x] Player should not be able to flip already matched cards and matched cards should look distinguishable from those in play

### Optional - Features to add if I have time

- [x] Disable player input when card flip animation is playing
- [x] Multiple difficulties (bigger grids, less turns)
