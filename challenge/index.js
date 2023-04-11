const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// let j = 1
// for (; j < 5; j++) {
//     console.log(`${j}`);
// }

// for (let i of game.scored.values()) {
//         console.log(`Goal ${j}: ${i}`);
// }



// let [players1, players2]  = game.players;

// console.log(players1);
// console.log(players2);





// const [ goalkeeperBayern, ...fieldPlayersBayern ] = players1;
// console.log(goalkeeperBayern);
// console.log(fieldPlayersBayern);

// const [ goalkeeperBorussia, ...fieldPlayerBorussia ] = players2;
// console.log(goalkeeperBorussia);
// console.log(fieldPlayerBorussia);


// const allPlayers = [...players1, ...players2];


// console.log(allPlayers);


// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// console.log(players1Final);


// const { odds: { team1: team1, x: draw, team2: team2 } } = game;





// // let teamWithMoreChanceOfVictory = chanceOfWin1 >= chanceOfWin2;
// // let teamWithMoreChanceOfVictory2 = chanceOfWin1 <= chanceOfWin2;

// // console.log(teamWithMoreChanceOfVictory);
// // console.log(teamWithMoreChanceOfVictory2);

// // console.log(teamWithMoreChanceOfVictory && game.team2);


// team1 < team2 && console.log(`team1 is more likely to win!`);

// // console.log(chanceOfWin1 >= chanceOfWin2 || chanceOfWin2 >= chanceOfWin1);



// /*
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//         'Hummels'],
//     date: 'Nov 9th, 2037',
// */


// 1


for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}


//2

let average = 0;
const odds = Object.values(game.odds)

for (const odd of odds)
    average += odd;

average /= odds.length
console.log(average);

//3

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}