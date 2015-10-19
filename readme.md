# [Mystery Word](file:///Users/BDep/GA-WDI/game-project/index.html)

### Game Structure
#### _Game Module_
*Memory Game:*
  - player flips any 3 cards, if set of cards is found, set remains visible, a letter is revealed & player gains 10 seconds
  - if flipped cards are not a match, they are hidden

*Guessing Game:*
  - gets player's input and matches it to mystery word (an array of predetermined letters), if player’s guess is correct, player wins game & timer is stopped
  - if player's guess is incorrect, player loses 10 seconds

*Memory Game:*
  - displays clues that hint at a particular letter

#### _DOM Elements_
  - start game button linked to timer/counter
  - flip-card game - includes divs for each 'card'
  - memory game - includes buttons for each clue
  - word game - renders correct guess and time left after incorrect guess (winState)

#### _Technologies Used_
- jQuery

#### _Unsolved Problems_
  - Timer only displays time in seconds.
  - Flip-cards: will append several images to a card if it is clicked more than once, setInterval is set up such that player may flip more than 3 cards at a time
  - Word game display doesn't account for capitalized letters
  - Setting a required sequence of click events from the player and pausing the timer for the Memory Game (game was modified several times as a result)
