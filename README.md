This is a Scrabble helper. Currently only in Finnish, but I may add other languages.

This helper allows you keep track of how many letter tiles are left in your game of Scrabble.

The UI is as follows:

    - on top is shown the amount of tiles left in the bag (currently applies only for two-player games)

    - there are 25 individual letter tiles, one of which is the empty tile

    - each letter is modeled after its corresponding, physical letter tile; the value of the letter is represented by a
    small number on the lower right corner of the tile

    - under each letter is another element, where you can see the amount of letters left to be played,
    and on a smaller font, on the lower right corner of the element, how many pieces of that letter there are in total

    - each tile is clickable. When you press on a tile, a deduction is made from both the element underneath the tile,
    and from the total amount left in the bag.

    - the element underneath the tiles is also clickable, and functions as an "undo-button". Its functionality as of right now is merely an addition to the amount of letters left to be played, and the amount of letters left in the bag. YOU SHOULD NOT CLICK ON THE ELEMENT UNDER A TILE UNLESS YOU NEED TO UNDO A DEDUCTION FOR THAT SPECIFIC 
    LETTER.

    - when I figure out how to create an undo button that actually functions as an undo-button, I will implement it
    
    - when a letter count reaches zero, that tile's opacity is turned down, so it is clear which tiles
    have already been played

    - this helper is only as good as the data it receives; i.e, you need to manually enter the tiles that have been played, preferably after each turn. When the board becomes more full, you will need to be careful not to deduct tiles that were already on the board, which should already have been deducted.

    If anyone actually reads this and/or uses this helper, that's awesome! I am open to suggestions and advice on how to improve my code.

    improvements: 
    - removed inline onclick stuffs, replaced with eventlisteners
    - added check for situations where user accidentally clicks letter down to zero.
    Before, the letter would have still had lowered opacity, but this check returns that to the default.
    - user cannot add letters to more than the original amount