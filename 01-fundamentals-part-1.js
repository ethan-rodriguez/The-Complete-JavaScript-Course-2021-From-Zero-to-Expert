let js = 'amazing';
    // if (js === 'amazing') alert('JavaScript is FUN!');

    // 40 + 8 + 23 - 10
    // console.log(40 + 8 + 23 - 10);

    // console.log('Jonas');
    // console.log(23);

    // let firstName = 'Ethan';

    // console.log(firstName);
    // console.log(firstName);
    // console.log(firstName);

    // let country = 'United States'
    // let continent = 'North America'
    // let population = '350 million'

    // console.log(country)
    // console.log(continent)
    // console.log(population)

    // let javascriptIsFun = true;
    // console.log(javascriptIsFun)

    // console.log(typeof true);
    // console.log(typeof javascriptIsFun);
    // console.log(typeof 23);
    // console.log(typeof 'Ethan');

    // javascriptIsFun = 'Yes!'
    // console.log(javascriptIsFun)
    

    // let year;
    // console.log(year)
    // console.log(typeof year)


    // console.log(typeof null)
// const now = 2021
//     const ageEthan = now - 1975

//     console.log(ageEthan * 2, ageEthan / 10, 2 ** 3)

//     const firstName = 'Ethan'
//     const lastName = 'Rodriguez'

//     console.log(firstName + ' ' + lastName)

//     let x = 10 + 5;
//     x += 10; // x = x +10 = 25
//     // x *= 4
//     x++
//     x--
//     console.log(x)

// const age = 15


// --------- IF ELSE STATEMENTS -----------
// if(age >= 18) {
//     console.log('Sarah can start driving license 🚗')
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah is too  young.  Wait another ${yearsLeft} years`)
// }


// const birthYear = 1975;
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log (century)


// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('jonas'))


//TYPE COERCION
// console.log('I am ' + 46 + ' years old') // turns numbers into string

// console.log('23' - '10' - 3) // turns srings into numbers

// console.log(`23` * `2`)

// let n = `1` + 1; // converts to a string '11'
// n = n - 1;  // converts string '11' to a 11 and subtracts 1
// // console.log(n)

// // JAVASCRIPT HAS 5 FALSY VALUES: 0, '', undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))


// console.log(Boolean([])) // anything that is not the above is true

// const money = 10;
// if (money) {
//     console.log(`Don't spend it all`)
// } else {
//     console.log(`You should get a job!`)
// }

// let height;
// if (height) {
//     console.log('YAY! height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }

// const age = 18
// if(age === 18) console.log('You just became an adult (STRICT - No type coersion)')
// if(age == 18) console.log('You just became an adult (LOOSE - can convert string to a number)')

// const favorite = Number(prompt(`What's your favorite number?`))

// console.log(favorite)
// console.log(favorite, 'is a', typeof favorite)

// if (favorite === 23) {
//     console.log(`Cool! 23 is an amazing number!`)
// } else if (favorite === 7) {
//     console.log('7 is also a cool number')
// } else if (favorite === 8) {
//     console.log('8 is a cool number too')
// } else if (favorite === 9) {
//     console.log('9 is a cool number as well')
// } else {
//     console.log('Number is not 23 or 7')
// }


// if (favorite !== 23) {
//     console.log('Why not 23?')
// }


// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision) // false
// console.log(hasDriversLicense || hasGoodVision) // true
// console.log(!hasDriversLicense) // false

// const shouldDrive = hasDriversLicense && hasGoodVision

// // if (hasDriversLicense && hasGoodVision) { 
// //     console.log(`Sarah is able to drive!`)
// // } else {
// //     console.log(`Someone else should drive...`)
// // }

// const isTired = true
// console.log(hasDriversLicense && hasGoodVision && isTired)


// if (hasDriversLicense && hasGoodVision && !isTired) { 
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`)
// }

// CODE CHALLENGE 3

// const scoreDolphins = (96 + 108 + 89) / 3
// const scoreKoalas = (88 + 91 + 110) / 3
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins wins the trophy!')
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy!')
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!')
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 81) / 3
// const scoreKoalas = (109 + 95 + 86) / 3
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins wins the trophy!')
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy!')
// } else if (scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy!')
// }

// THE SWITCH STATEMENT

// const day = 'monday';

// switch(day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!')
// }


const age = 32

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

console.log(drink)