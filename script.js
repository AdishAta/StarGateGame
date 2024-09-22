const gameBoard = document.getElementById('game-board');
const gameInfo = document.getElementById('game-info');
let player

function startGame() {
  const player1Name = document.getElementById('player1-name').value;
  const player1Water = parseInt(document.getElementById('player1-water').value);

  if (player1Name.trim() === '' || isNaN(player1Water) || player1Water <= 0) {
      alert('Please enter valid player name and water supply.');
      return;
  }
  player = {name : player1Name,water:player1Water}

  const gameSettings = document.getElementById('game-settings');
  gameSettings.style.display = 'none';

  const playerInfo = document.getElementById('player-names-left');
  playerInfo.textContent = `Player 1: ${player1Name} (Water Supply: ${player1Water})`;
  updateActionsRemainingDisplay();
}


const startGameButton = document.getElementById('start-game');
startGameButton.addEventListener('click', startGame);

for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 5; j++) {
        const cell = document.createElement('td');
        cell.className = 'grid-square';
        cell.addEventListener('click',()=>{
          handlePlayerAction('dig',i,j)
          handlePlayerAction('move',i,j)
        })
        row.appendChild(cell);
    }

    gameBoard.appendChild(row);
}


const playerLocation = gameBoard.rows[2].cells[2];
let playerRow = 2;
let playerCol = 2;
playerLocation.innerHTML = '<img src="Assets/Player.png" alt="player">'
playerLocation.style.backgroundImage = `url(Assets/Stargate.png)`

function moveTo(i,j){
  if(Math.abs(playerRow - i) + Math.abs(playerCol - j) == 1)
    {gameBoard.rows[i].cells[j].innerHTML = '<img src="Assets/Player.png" alt="player">';
    gameBoard.rows[playerRow].cells[playerCol].innerHTML = ''
    playerCol = j;
    playerRow = i;
    actionsRemaining--;
  }
  }
  
  
  function dig(i,j){
    function checkClass(cell,checker){
      if(!cell.classList.contains('dug') && cell.classList.contains(checker)) return true
      else false
    }

    function toggleClass(cell,theClass){
      cell.classList.toggle('dug')
      cell.classList.toggle(theClass)
    }
    function makeStyle(cell,clueOrItem){
      if(clueOrItem == 'clue'){
        const number = cell.dataset.number;
        const direction = cell.dataset.direction;
        cell.style.backgroundImage = `url('Assets/Item ${number} - clue_${direction}.png')`;

      }
      else{
        const number = cell.dataset.number
        cell.style.backgroundImage = `url('Assets/Item ${number}.png')`;

      }
    }

    const cell = gameBoard.rows[i].cells[j];

    if(playerCol == j && playerRow == i){
      if(checkClass(cell,'oasisInit')){
        toggleClass(cell,'oasisFin')
      }
      else if(checkClass(cell,'mirageInit')){
        toggleClass(cell,'mirageFin')
      }
      else if(checkClass(cell,'clueInit')){
        toggleClass(cell,'clueFin')
        makeStyle(cell,'clue')
      }
      else if(checkClass(cell,'itemInit')){
        toggleClass(cell,'itemFin')
        makeStyle(cell,'item');
      }

      
      else if(!cell.classList.contains('dug')) cell.classList.add('dug')
      
      actionsRemaining--;
    }
  }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let actionsRemaining = 3;

function handlePlayerAction(actionType, row, col) {
    if(player.water<1){
      updateActionsRemainingDisplay()
      alert("You lost!")
    }
    if (actionsRemaining <= 1) {
        actionsRemaining = 3;
        player.water--;
        return;
    }
    

    switch (actionType) {
        case 'move':
            moveTo(row, col);
            break;
        case 'dig':
            dig(row, col);
            break;
        default:
            alert('Invalid action type.');
    }

    updateActionsRemainingDisplay();
    updateWaterRemainingDisplay();
}

function updateActionsRemainingDisplay() {
    const roundInfo = document.getElementById('round-info');
    roundInfo.textContent = `Actions Remaining: ${actionsRemaining}`;
}
function updateWaterRemainingDisplay() {
  const roundInfo = document.getElementById('player-names-left');
  player.textContent = `Player 1: ${player.name} (Water Supply: ${player.water})`;
}


const numComponents = 3;
const numClues = 6;
let takenCells = [];
let cluedRows = []
let cluedCols = []
takenCells.push({
  row:playerRow,
  col:playerCol
})

for(let i = 0 ; i < numClues;i++){
  let row,col
  let side,cell
  let takenCell,cluedCol,cluedRow;
  if(i < 3){ 
      do{
        side=getRandomInt(0,1);
        row = side == 0 ? 0:4 
        col = getRandomInt(1,3)

        takenCell = takenCells.some(takenCells=>takenCells.row === row && takenCells.col == col);
        cluedCol = cluedCols.some(cluedCols=>cluedCols.col==col && col == 2);
        cluedRow = cluedRows.some(cluedRows=>cluedRows.row == row)

      }while((takenCell || cluedCol||cluedRow))
}
  else{ 
      do{
        side=getRandomInt(0,1); 
        col = side == 0 ? 0:4
        row = getRandomInt(1,3)

        
        takenCell = takenCells.some(takenCells=>takenCells.row === row && takenCells.col == col);
        cluedRow = cluedRows.some(cluedRows=>cluedRows.row == row)
        cluedCol = cluedCols.some(cluedCols=>cluedCols.col==col);


      }while(takenCell || cluedRow || cluedCol)
  }

  cell  = gameBoard.rows[row].cells[col]
  
  if(i < 3){
    if(side == 0) {
      cell.classList.add(`clueInit`)
      cell.dataset.direction='DOWN'
    }
    else {
      cell.classList.add(`clueInit`)
      cell.dataset.direction='UP'
    }
    cell.dataset.number=i+1;
    cluedCols.push(col)
  }
  else{
    if(side == 0){
      cell.classList.add(`clueInit`)
      cell.dataset.direction='RIGHT'
    }
    else{
            cell.classList.add(`clueInit`)
            cell.dataset.direction='LEFT'          
          }
    cell.dataset.number=i-2
    cluedRows.push(row);
    
    let componentRow = cluedRows[i-3]
    let componentCol = cluedCols[i-3]
    const component = gameBoard.rows[componentRow].cells[(componentCol)]

    component.classList.add(`itemInit`)
    component.dataset.number=i-2
    takenCells.push({row:componentRow,col:componentCol})
  }

  takenCells.push({row,col})

}

const numOases = 4;
let mirage = getRandomInt(0,3);
for (let i = 0; i < numOases; i++) {
  let row,col;
  do{
    row = getRandomInt(0, 4); 
    col = getRandomInt(0, 4); 
  }while(takenCells.some(takenCells=>takenCells.row === row && takenCells.col == col))

  takenCells.push({
    row,
    col
  })

  console.log(takenCells)
  const cell = gameBoard.rows[row].cells[col];
  
    if(i!=mirage){
      cell.classList.add('oasisInit')
    }
    else{
      cell.classList.add('mirageInit')
    }
}

//TO SHOWS THE CLUES

// const clues = document.querySelectorAll('.clueInit')

// clues.forEach(clue=>{
//   const num = clue.dataset.number
//   const dir = clue.dataset.direction
//   clue.style.backgroundImage = `url('Assets/Item ${num} - clue_${dir}.png')`
// })
