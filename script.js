'use strict';

// let hours = {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         }
// }

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     hours,

//     order(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
//     hours
// };




// const rest1 = {
//     name: 'DiMaria Ferdinando',
//     numGuests: 0
//     // numGuests: 192
// };

// const rest2 = {
//     name: 'Lazzana tomato',
//     owner: 'Nicolai Domingos'
// };

// // rest1.owner = rest1.name && 'Hey!';
// // rest2.owner = rest2.owner && 'Hey!';

// rest1.name &&= 'Hey!';
// rest2.owner &&= 'Hey!';

// console.log(rest1.name);
// console.log(rest2.owner);


// OR ASSIGMENT OPERATOR

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;


// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;


// NULLISH ASSIGMENT OPERATOR
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;



// console.log(rest1.numGuests);
// console.log(rest2.numGuests);





// use any data type, return any data type, short-circuting;

// -------- OR ------------

// console.log(3 || 'Elvis');
// console.log('' || 'Elvis');
// console.log(true || false);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 34 || null);

// const me = {
//     name: 'Elvis'
// }

// // me.age = 12;
// me.age = 0(FALSE!!!!!!!!!);
// console.log(me.age || me.name);


// -------- AND ------------


// const me = {
//     name: 'Elvis',
//     showName: function () {
//         return console.log(this.name);
//     }
// }

// me.showName && me.showName();


// THE NULLISH COALESCING OPERATOR;

// const me = {
//     name: 'Elvis'
// }

// // me.age = 12;

// // Nullish: null and undefined (not 0 or '');

// me.age = 0;
// console.log(me.age ?? me.name);




// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };


// NESTED DESESTRUCTURING
// const nested = [2, 3, [3, 4]];
// // const [, , arr] = nested;
// const [, , [i, j]] = nested;

// console.log(i, " ", j);



// DEFAULT VALUES

// const [a = 2, b = 4, c = 0] = [5, 7];

// console.log(a);
// console.log(b);
// console.log(c);


// console.log(restaurant.order(2,0));

// RECEIVE 2 RETURN VALUES FROM A FUNTION

// const [starterIndex, starterMenu] = restaurant.order(2, 0);
// console.log(starterIndex);
// console.log(starterMenu);


// const [first, second] = restaurant.categories;
// const [first, ,third] = restaurant.categories;

// console.log(first);
// console.log(third);



// let [main, secondary] = restaurant.categories;
// console.log(main);
// console.log(secondary);

// [main, secondary] = [secondary, main];

// console.log(main, " ", secondary);

// const temp = main;
// main = secondary;

// secondary = temp;

// console.log(temp, " ", secondary)



// const arr = [0, 1, 2];

// NOT GOOD!
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];


// console.log(a, " ", b, " ", c);

// // VERY GOOD!
// const [x, y, z] = arr;

// console.log(x, " ", y, " ", z);




















// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';










// FOR OF LOOPS



// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for(let items of menu) console.log(items);


// for (let itemsWithIndex of menu.entries()) {
//     console.log(itemsWithIndex);
// }

// for (let [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }












// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     hours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         }
//     }
// };


// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//     const open = restaurant.hours[day]?.open ?? 'close';
//     console.log(`On ${day}, we open at ${open}`);
// }




// ARRAYS
//IF OR ELSE

// const date = { birth: 16 }

// console.log(date?.birth ?? 'hey');


// const user = [{ name: 'Elvis', email: 'hello@jelvis.io' }];



// console.log(user[0]?.name ?? 'User array empty');









// const describeBe = {
//     age: 19,
//     name: 'elvis',
//     status: 'alone forever'
// }



// console.log(Object.values(describeBe));




// let myMap = new Map();


// myMap.set(document.querySelector("h1"), document.querySelector('h1').textContent);

// console.log(myMap);







// const questions = new Map([
//     ['question', 'What\'s the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'correct!!!'],
//     [false, 'Try again!']
// ]);


// console.log(questions);

// //Quiz app
// console.log(questions.get('question'));

// for(let [key, value] of questions) {
//     if (typeof key === 'number') console.log(`
//         Answer ${key}: ${value}
//     `);
// }

// const answer = +prompt('Your answer');

// answer === 3 ? console.log(questions.get(true)) : console.log(questions.get(false));




const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);


const events = [...new Set(gameEvents.values())];
// console.log(events);



const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);



for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}


// for (let x of events.values()) {
//     console.log(x.includes('GOAL') ? `[FIRST HALF] 17 ${x}` : '');
// }





// gameEvents.delete(64);

// console.log(gameEvents);
