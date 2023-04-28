// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer:
10

// b) Verify and explain:
"The word 'LEARN' has 5 letters and '2023' has 4. Very important is JS counts spaces as objects in a string. Therefore, our ' ' gets us to 10"

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer:
'o'

// b) Verify and explain:
"The action of putting '[]' next to a string is called indexing. Which counts up to the place of the number inside the '[]'. Important to note that index counting starts at '0'. So we count H[0],e[1],l[2],l[3],o[4]. Thus giving us an output of 'o' "
// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer:
'Ruby'

// b) Verify and explain:
"The action of putting '[]' next to an array is called indexing. Which counts up to the place of the number inside the '[]'. Important to note that index counting starts at '0'. So we count 'JavaScript' [0], and them 'Ruby'[1]. Since out index is 1, we returned Ruby. "
// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
'TypeError: weekendDays.toUpperCase is not a function'

// b) Verify and explain:

"Each data type has functions and operators that explictly work for them. While there may be some overlap, they tend to be special for each. The operator 'toUpperCase() is to take a string and turn all its letters to upper case. Since the object type we are calling it to contains strings, it is an array. Therefore this operator wont work."

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer:
'number'
// b) Verify and explain:
"We have two things working here. First being out 'typeof'operator. Which returns the type of any data structure we pass thorugh it. Secondly is the '.length' operator. Which always returns the data type of a number. Since its asking how long is the given object being passed. "
