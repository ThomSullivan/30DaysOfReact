console.log('sanity')
// this is your main.js script
// LEVEL 1

let userAge = +prompt('Enter your age')
switch (true) {
    case userAge < 18:
        console.log(`You cannot drive wait another ${18-userAge} years`)
        break
    default:
        console.log('You are old enough to drive')
        break
}

let myAge = 36
if (myAge > userAge) {
    console.log(`I am ${myAge - userAge} years older than you`)
} else if (myAge == userAge) {
    console.log('We are the same age!')
} else {
    console.log(`You are ${userAge - myAge} years older than me`)
}

let a = 4
let b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}
a > b
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${b} is greater than ${a}`)

a % 2 == 0
    ? console.log(`${a} is an even number`)
    : console.log(`${a} is an odd number`)

// LEVEL 2

let grade = +prompt('Enter your grade')
switch (true) {
    case grade >= 90:
        console.log('Your grade is A')
        break
    case grade >= 70:
        console.log('Your grade is B')
        break
    case grade >= 60:
        console.log('Your grade is C')
        break
    case grade >= 50:
        console.log('Your grade is D')
        break
    default:
        console.log('Your grade is F')
        break
}

let month = prompt('Enter a month').toLowerCase()
if (month == 'september' || month == 'october' || month == 'november') {
    console.log(`${month} is in the season Autumn`)
} else if ( month == 'december' || month == 'january' || month == 'february'){
    console.log(`${month} is in the season Winter`)
} else if (month == 'march' || month == 'april' || month == 'may'){
    console.log(`${month} is in the season Spring`)
} else {
    console.log(`${month} is in the season Summer`)
}

let day = prompt('Enter the day of the week').toLowerCase()
if ((day == 'saturday') || (day == 'sunday')) {
    console.log(`${day} is a weekend`)
} else {
    console.log(`${day} is a working day`)
}

// LEVEL 3

if (month == 'february') {
    console.log(`${month} has 28 days or 29 days`)
} else if ('april'||'june'||'september'||'november'){
    console.log(`${month} has 30 days`)
} else {
    console.log(`${month} has 31 days`)
}