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


// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age
//     if(retirement > 0){
//         return retirement
//     } else {
//         return -1
//     }
//     // return `${firstName} retires in ${retirement} years`
// }

// const age = yearsUntilRetirement(1991, 'Jonas')
// console.log(age)

// console.log(yearsUntilRetirement(1950, 'Mike'))

// ======CODE CHALLENGE=====

// let dolphins = [44, 23, 71]
// let koalas = [65, 54, 49]


// const calcAverage = (team) => {
//     const sum = team.reduce((accum, currentVal) => accum + currentVal, 0)
//     return sum / 3
// }

// const avgDolphins = calcAverage(dolphins)
// const avgKoalas = calcAverage(koalas)


// const checkWinner = () => {
//     if(avgDolphins > avgKoalas && avgDolphins >= avgKoalas * 2){
//         console.log(`Dolphins win!`)
//     } else if(avgKoalas > avgDolphins && avgKoalas >= avgDolphins * 2){
//         console.log(`Koalas win!`)
//     } else {
//         console.log(`There is no winner.`)
//     }
    
// }
// console.log(checkWinner(avgKoalas, avgDolphins))


// ==== ARRAYS =====

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter'] // literal syntax
// console.log(friends)

// // const years = new Array(1991, 1984, 2008, 2020) // diffenent way to create an array.

// console.log(friends[0])

// console.log(friends.length) // give number of elements in array

// console.log(friends[friends.length - 1]) // can put an experssion in brackets....not a statement

// friends[2] = 'Jay' // arrays are not primative values, therefore a const can be changed.

// console.log(friends)

// const jonas = ['Jonas', 'Schmedtmann', 3037 -1991, 'teacher', friends]

// console.log(jonas)
// console.log(jonas.length)

// // Exercise

// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [calcAge([years[0]]), calcAge([years[1]])]
// console.log(ages)


// const friends = ['Michael', 'Steven', 'Peter']

// // ADD ELEMENTS
// const newLength = friends.push('Jay')
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// //REMOVE ELEMENTS
// friends.pop() // Last
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift() // First
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))



// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))

// if (friends.includes('Steven')) {
//     console.log('You have a friend')
// } else {
//     console.log('You dont have any friends')
// }

// ==== CODE CHALLENGE =====


// const bills = [125, 555, 44]
// const tips = []
// const totals = []

// function calcTip(billValue) {
//     if(billValue >= 50 && billValue <= 300){
//         totals.push(billValue + (billValue* .15))
//         tips.push(billValue * .15)
//         console.log(`A 15% tip is ${billValue * .15}`)
//     } else {
//         totals.push(billValue + (billValue* .20))
//         tips.push(billValue * .20)
//         console.log(`A 20% tip is ${billValue * .20}`)
//     }
// }
// calcTip(bills[0])
// console.log('Bills', bills)
// console.log('Tips', tips)
// console.log('Totals', totals)


const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .20
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip([2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)