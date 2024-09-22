# Stargate: The IK-1 team is on a mission
During the discovery of the planet EIK-235, the scout plane sent through the stargate crashed. General Hammond requested his IK-1 team to locate and repair the aircraft. Due to the lack of data on the plane, there is no information about the planet EIK-235, but the planet may play an essential role in establishing a scientific colony.

Passing through the stargate, the members of IK-1 arrive on a planet whose surface is 100% desert. The downed plane was found relatively quickly, but upon inspection, the engineers noticed that some parts needed for repair were missing. Help them find the lost parts.

## Description of the game
Brief overview
This is a cooperative game for 1-4 players in which players must find clues and their corresponding parts hidden in the sand on a 5x5 board. Each player has a water bottle containing six units of water, and the players aim to find the parts before someone runs out of water.

### The initial state of the board
The board is a 5x5-square grid, where four squares show an oasis, and the rest show sand. In addition, the positions of clues and parts are assigned and hidden from the player.

### Traces and parts
The following components must be found:

![Item 1](https://github.com/user-attachments/assets/90fcc387-bf1b-4cd6-afca-4f9bc27417d1)
![Item 2](https://github.com/user-attachments/assets/fdb4db45-db10-430e-b20e-a630083b92fa)
![Item 3](https://github.com/user-attachments/assets/a5107fcf-e735-4533-a23f-4e2b63ec966c)



Each part has two traces, which mark the field on which the part is located: one trace marks the column (north-south direction), while the other marks the row (east-west direction). The clues are randomly assigned.

When the player unearths the first clue space, they determine which row the engine will be in. When the second clue is discovered, the player can choose the exact location of that part. After that, if a player goes to the part's location and uses the Dig action, they have obtained the given part.

![Screen Shot 2024-09-22 at 16 35 09](https://github.com/user-attachments/assets/1e12a75d-b505-44a5-9ff6-7fbbc6734f41)


Oases
There are also four spaces marked as oases on the desert board:
Oasis marker.png

Only three of the four oases are actual water bodies:

![Oasismarker](https://github.com/user-attachments/assets/d6217074-4649-4a5b-9df9-7ac39b381a9a)


and one is just a mirage:
![Drought](https://github.com/user-attachments/assets/7c61bf76-2fef-4130-a8a9-3840dfafc52e)


When a player first uses the Dig action on an oasis, it becomes public whether or not it is a natural body of water. In the case of a water reservoir, the given player's water supply will filled (so it recovers to 6 units of water). In the rest of the game, if the player uses the Dig action on an already discovered water source, the player's water supply will be replenished.

Gameplay
A player's turn ends after using three actions. At the end of the round, the given player's water supply decreases by one, and the next player comes. In a one-player game, the player performs the actions one after the other, but in his case, after using three actions, his water decreases by one.

Actions
There are the following action types: Move, Dig. The player, in turn, performs the three actions from the action types. You can choose any of them in any order you want. (e.g. he uses 3 Moves in his turn or 2 Moves and 1 Dig...etc)

Move
If the player chooses the Move action, he can move to an adjacent square: up, down, left, or right, but never diagonally.

Digging
If the player chooses the Dig action, they can "dig up" the space they are standing on, revealing what was hidden under the space. If the player performs the Dig action on a sand field, the following may be below it:

Clue (3*2 pieces): This clue concerns where the flying part is. Each component has two clues: one tells you which row it is in and the other which column it is in. After digging it out, you must indicate which part it belongs to and whether the given clue refers to the row or column.
Component (3 pieces): The component is located at the intersection of the two clues belonging to the given component, which is available if the two clues that belong to it have already been revealed.
Empty Tile (12 pcs): Empty tiles, so no clues, no parts, no oasis.
If the player performs the Dig action on an oasis square (4 pieces) with a water reservoir (3 of the four oases) under it, their water resources are replenished. If there is a mirage (1 of the four oases) under the oasis square, it is indicated on the board that such a square is there, and nothing happens to the player's water supply.


The end of the game
Victory: If the player(s) find all three parts, they win together.
Failure: If either player runs out of water or time, you collectively lose the game.

Playground
![Board](https://github.com/user-attachments/assets/997c83ea-62b6-4f05-b5f6-10c72aab6556)


### Base Tasks
[X] Game board: The playing field is displayed with a 5x5 board. (1 point)    

[X] Game board: Oases appear in a random place on the same board (2 points)

[X] Game board: The player's figure is placed in the centre of the board (1 point)

[X] Movement: The figure can move to one of the adjacent squares. (2 points)

[X] Digging: We can reveal the field element on which the player stands and what is indicated under it. (2 points)

###  Medium tasks
[X] Home screen: players have the option to set a name (0.5 points)

[X] Home screen: setting players' primary water supply (0.5 points)

[X] Game board: clues are randomly assigned, initially invisible to the players. (1 point)

[X] Game board: player data is displayed (0.5 points)

[X] Actions: The player can perform three arbitrary actions in the round (1 point)

[X] Actions: It is indicated how many more actions he can perform in his turn, (1 point)

[ ] Actions: The player's water supply is reduced by one at the end of their turn. (0.5 points)

[ ] Digging: All parts can only be obtained after the two clues have been found. (1 point)

[ ] Digging: If the player performs digging in an oasis space, his water supply is replenished. (1 point)

[ ] Digging: Only three of the four oases can be filled with water. (1 point)

[ ] Game over: If a player runs out of water, it's game over. (0.5 points)

[ ] End of the game: If all three parts have been found, the game ends with victory. (0.5 points)

[ ] Multiplayer mode: set player number (0.5 points)

[ ] Multiplayer mode: players' figures appear in the middle of the board (0.5 points)

[ ] Multiplayer mode: the current player is indicated (0.5 points)

[ ] Multiplayer mode: actions can only be performed with the current player (0.5 points)

[ ] Good-looking appearance (1 point)

### Extra tasks (5 points)

[ ] Game board: at the start of the game, start a counter that is updated every second to indicate the elapsed time of the game. (1 point)

[ ] Home screen: allow the player(s) to specify how much time they want to complete the game, and after the specified time the game ends (1 point)

[ ] Movement: the step is animated (1 point)

[ ] Save: The game constantly saves its state in localStorage.(2 points)


The following things appear on the playing field:

5x5 matrix showing oases, player pieces, and fields revealed during the game
Player data: indicating which piece belongs to whom, the amount of water in the water bottle, how many more actions are available in the given round
The acquired parts
