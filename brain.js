//  - 0) player picks value 
//  - 1) player calls fun playerPick(<value>)
//  - 2) computer picks value
//  - 3) player and computer values are compared
//  - 4) winner is logged

const playerChoice = prompt('Choose your Warrior');

console.log(playerChoice);

const options = ['rock', 'paper', 'scissors'];

const optionsMap = {
    rock: {
        rock: 'Tie',
        paper: 'Loose',
        scissors: 'Enemy Felled!',

    }, 
    paper: {
        rock: 'Phyrric Victory',
        paper: 'Tie',
        scissors: 'Loose',
    },
       
    scissors: {
        rock: 'Loose',
        paper: 'Foe Vanquished!',
        scissors: 'Tie',
    },
}

const computerPick = () => {
    const random = Math.random();
    const length = options.length;
    const floor = Math.floor(random * length);
    return options[floor]
}

const play = () => {
    
    const computerChoice = computerPick();


    console.log(optionsMap[playerChoice][computerChoice]);
}

play()