//  - 0) player picks value 
//  - 1) player calls fun playerPick(<value>)
//  - 2) computer picks value
//  - 3) player and computer values are compared
//  - 4) winner is logged

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
    console.log(options[floor], random, length, floor)
    return options[floor]
}

// const determineWinner = (player, computer) => {
//     if (player === 'rock') {
//         if (computer === 'rock') {
//             return 'Tie...'
//         }
//         if (computer === 'paper') {
//             return 'Rock defeats Paper';
//         }
//         return 'Enemy Felled!';
//     }

//     if (player === 'paper') {
//         if (computer === 'paper') {
//             return 'Tie...'
//         }
//         if (computer === 'scissors') {
//             return 'Scissors defeats Paper'
//         }
//         return 'Phyrric Victory!';
//     }

//     if (player === 'scissors') {
//         if (computer === 'scissors'){
//             return 'Tie...'
//         }
//         if (computer === 'rock') {
//             return 'Rock defeats Scissors'
//         }   
//         return 'Foe Vanquished!';
//     }
    
// }

const play = (playerChoice) => {
    
    const computerChoice = computerPick();

    // console.log(determineWinner(playerChoice, computerChoice))
    console.log(optionsMap[playerChoice][computerChoice]);
}

play('rock')
play('paper')
play('scissors')