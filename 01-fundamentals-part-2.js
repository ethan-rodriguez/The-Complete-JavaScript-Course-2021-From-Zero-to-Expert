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

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)
// // console.log(fruitProcessor(5, 0)) // altrnate way

// const appleOrangeJuice = fruitProcessor(2, 4)
// console.log(appleOrangeJuice)



//======FUNCTION DECLARATIONS VS EXPRESSIONS ========

//fuction declaration
// function calcAge1(birthYear) {
//     return 2021 - birthYear
// }

// const age1 = calcAge1(1975)
// console.log(age1, 'age 1')


// //function expression (expression produce values... and values can be tied to a variable)
// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear
// }

// const age2 = calcAge2(1975)
// console.log(age2, 'age 2')



// ======= ARROW FUNCTIONS ========

// const calcAge3 = birthYear => 2021 - birthYear
// const age3 = calcAge3(1975)
// console.log(age3)


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'))
// console.log(yearsUntilRetirement(1980, 'Ethan'))


// CODE CHALLENGE:
// What value of x is needed to print "12, 6"

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// let a = 0;
// let idx = 0;
// while (a < x) {
//     if (array[idx] % 2 === 0) {
//         a += array[idx]
//     }
//     idx += 1
// }

// console.log(a + ", " + idx)

// console.log(12, 6)
// Answer:  x = 8

// CODE CHALLENGE:
// class Sample {
//     constructor() {
//         this.a = 1;
//         this.b = 1;
//     }

//     functionOne(a) {
//         this.b = this.b + a;
//     }

//     functionTwo(b) {
//         for (let i = 0; i < this.b; i++) {
//             this.a += b
//         }
//     }

//     print() {
//         console.log(this.a + ", " + this.b);
//         //console.log(25, 6)
//     }

// }
//What values of x, y, and z are needed to print '25, 6'?

// const s = new Sample();
// s.functionOne(1); //1
// s.functionTwo(12); //12
// s.functionOne(4); //4
// s.print();


//CODE CHALLENGE
// What arguement must func() be called with in order to return 14?
// function func(a) {
//     if (a <= 0) {
//         return 1;
//     }
//     if (a % 2 == 0) {
//         return a;
//     } else {
//         return (func(a-1) + func(a-2));
//     }
// }

// const result = func(14)
// console.log(result, 'recursion function')




//CODING CHALLENGE FROM Charlene.
//Given a string, your task is to replace each of its charcters by the next one in the English aplhabet; ie replace a with b,

// function alphabeticChange(string) {
//     // let charToAscii = string.charCodeAt(0)
//     // console.log(charToAscii)

//     // let asciiToChar = String.fromCharCode(charToAscii) //how to turn number into character
//     // console.log(asciiToChar)

//     let stringSplit = string.split('')

//     let asciiArr = stringSplit.map((letter, idx) => String.fromCharCode(string.charCodeAt(idx) + 1)).join('').replace('{', 'a')

//     console.log(asciiArr, 'map')
// }

// alphabeticChange('crazy')


const calcAge = function(birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age
    if(retirement > 0){
        return retirement
    } else {
        return -1
    }
    // return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'))
console.log(yearsUntilRetirement(1950, 'Mike'))