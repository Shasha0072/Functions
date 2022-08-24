'use strict';

// const bookingArray = [];

// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 199 * numPassenger
// ) {
//   //   numPassenger = numPassenger || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };

//   console.log(booking);
//   bookingArray.push(booking);
// };

// createBooking('lh123');

const flight = 'LH234';
const jonas = {
  name: 'Shashwat Adhau',
  passport: 2132123,
};

const checkIn = function (flightName, passenger) {
  flightName = 'LH999';
  passenger.name = 'MR. ' + passenger.name;
};

const oneword = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Transformed string: ${fn(str)}`);
};

transformer('JavaScript is the best!!', upperFirstWord);
