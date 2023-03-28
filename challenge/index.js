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


let [players1]  = game.players;
let [, players2]  = game.players;

console.log(players1);
console.log(players2);





// const [ goalkeeperBayern, ...fieldPlayersBayern ] = players1;
// console.log(goalkeeperBayern);
// console.log(fieldPlayersBayern);

// const [ goalkeeperBorussia, ...fieldPlayerBorussia ] = players2;
// console.log(goalkeeperBorussia);
// console.log(fieldPlayerBorussia);


const allPlayers = [...players1, ...players2];


console.log(allPlayers);


const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
console.log(players1Final);


const { team1: chanceOfWin1, x: draw, team2: chanceOfWin2 } = game.odds;

console.log(chanceOfWin1);
console.log(chanceOfWin2);



const compareChanceOfWinTheGame = function (x, y) {
    let teams = x >= y;


}




// let teamWithMoreChanceOfVictory = chanceOfWin1 >= chanceOfWin2;
// let teamWithMoreChanceOfVictory2 = chanceOfWin1 <= chanceOfWin2;

// console.log(teamWithMoreChanceOfVictory);
// console.log(teamWithMoreChanceOfVictory2);

// console.log(teamWithMoreChanceOfVictory && game.team2);


console.log(game.odds.team1);


let c = game.odds.team1 >= game.odds.team2;

console.log(c || game.team1);

// console.log(chanceOfWin1 >= chanceOfWin2 || chanceOfWin2 >= chanceOfWin1);