'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },  

  orderDelivery: function({sat}) {
    return console.log(sat)
  }
};

const { name, openingHours, categories } = restaurant;

restaurant.orderDelivery(openingHours);


// const {sat: day} = restaurant.openingHours;

// console.log(day)


// DESESTRUCTURE OBJECTS



// console.log(name, openingHours, categories);



// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);


// // DEFAULT VALUES

// const {menu = [], starterMenu: startes =[]} = restaurant;

// console.log(menu, startes);

// MUTATING VARIABLES

// let a = 111;
// let b = 999;

// const obj = {
//   a: 3, b: 8
// };


// ({a, b} = obj);
// console.log(a, b)


// const { fri: {close, open}} = openingHours;

// console.log(close, open);

/*
const { fri: {close, open}} = restaurant.openingHours;
console.log(close, open)
*/

// const { fri: {close: o, open: x}} = openingHours;

// console.log(o, x);





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




  