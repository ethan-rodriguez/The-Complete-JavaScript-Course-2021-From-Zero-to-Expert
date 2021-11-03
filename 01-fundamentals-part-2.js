'use strict'; // must be first line in order to use.

// ACTIVATING STRICT MODE (ABOVE)
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio' // reserved word error
// const private = 534  // reserved work error


//======FUNCTIONS=======

// function logger() {
//     console.log('My name is Jonas');
// }

// // calling / running / invoking
// logger();
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)
// console.log(fruitProcessor(5, 0)) // altrnate way

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)