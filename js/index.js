// Iteration 1: Names and Input
let hacker1 = 'Ian';
console.log(`The drivers name is ${hacker1}`);
let hacker2 = 'Jon';
console.log(`The navigators name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters!`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
    
} else (console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)) 
// Iteration 3: Loops

let hacker1iterable = `${hacker1}` 
let hacker1Upper = hacker1iterable.toUpperCase();
let outPut = ''
for (const letter of hacker1Upper) { 
    outPut += letter + " ";
}
console.log(outPut);
// let hackerOneIterable = `${hacker1}`;
//     let hackerOneUpper = hackerOneIterable.toUpperCase();
//     for (const letter of hackerOneUpper) {
//       console.log(letter);
//     }
let str2 = ""
for (let i = hacker2.length - 1; i >= 0; i --) {
    str2 += `${hacker2.length[i]}`;
}
    console.log(str2);
let a = 'Ian'
let b = 'Jon'
    if (a.localeCompare(b) < 0) {
        console.log("The driver's name goes first.");
    } else if (a.localeCompare(b) > 0) {
        console.log("Yo, the navigator goes first definitely.");
    } else { 
        console.log("What?! You both have the same name?")
    }