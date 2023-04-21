// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (number) =>{
    /* The purpose of this funtion is to input a number and return whether that number is at, below, or above our boiling temp of 212. Then return said number and its boiling state. Eg:

    const temperature1 = 42
    Expected output: "42 is below boiling point"

    const temperature2 = 350
    Expected output: "350 is above boiling point"

    const temperature3 = 212 
    Expected output: "212 is at boiling point"
    */
    let res = ''
    if (number > 212){
        res = `${number} is above boiling point`
    }
    else if (number === 212){
        res = "212 is at boiling point"
    }
    else {
        res = `${number} is below boinling point`
    }
    return res 
}
console.log(boilingPoint(212))
// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const combineArrays = (Array1,Array2) =>{
    /* The purpose of this function is to combine two arrays and return the of COMBINED array.
    Eg: const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
        const padres1998WorldSeriesRuns = [6, 3, 5, 3]
        Expected output: 9
    */ 
    res = Array1.concat(Array2)
    return res.length
}
console.log(combineArrays(padres1984WorldSeriesRuns,padres1998WorldSeriesRuns));


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

const revyStringy = (sentence) =>{
    /* The purpose of this funciton is to take a string as a paramter. Then return the reverse of that string
    Eg: const currentCohort = "Charlie 2023"
        Expected output: "3202 eilrahC"
    */
    return sentence.split("").reverse().join("")
}

console.log(revyStringy(currentCohort))
// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

const returnLast = (Array,number) => {
    /* The purpose of this code is to input an array and a wanted value. Then return the last index of the wanted value. Note with our example below, there are two identical values. So we want the object that appears last in the array. 
    Eg: const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]
        const givenValue1 = 42
        Expected output: 7

        const givenValue2 = 10
        Expected output: 8
    */
    let res = ''
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] === number){
            res = i
        }
    }
    return res
} 
console.log(returnLast(numberOfConnections,10))
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

const largeToSmall = (list) => {
    /* The purpose of this code is to input an array. Then sort all the numbers inside the array from largest to smallest.
    Eg:const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
        Expected output: [82, 80, 79, 77, 76, 73, 72]

        const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
        Expected output: [68, 67, 66, 66, 62, 59, 59]
    */ 
    return list.sort().reverse()

}

console.log(largeToSmall(sanDiegoSummerTemperatures))