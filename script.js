'use strict';


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

const me = {
    name: 'Elvis'
}

// me.age = 12;

// Nullish: null and undefined (not 0 or '');

me.age = 0;
console.log(me.age ?? me.name);




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
