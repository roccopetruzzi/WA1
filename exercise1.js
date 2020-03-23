"use strict";

var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// const wordsList = ["hello", "thisIsAnArray", "  gr8 course\n", "WA1", "WA1-course", "Web Applications I", "Web Applications I "];
// console.log(wordsList);

// for (let [i, w] of wordsList.entries()) {
//     w = w.trim();
//     const l = w.length;
//     (l < 2) ? wordsList[i] = '': wordsList[i] = w.substring(0, 2) + w.substring(l - 2);
// }
// console.log(wordsList);

// // Create acronyms for the courses

// const acronyms = [];

// for (const c of courses) {
//     const words = c.split(' ');
//     let acronym = '';
//     for (const w of words)
//         acronym += w[0].toUpperCase();

//     acronyms.push(acronym);
// }

// const output = [];
// for (let [i, a] of acronyms.entries()) {
//     // output.push(a + ' - ' + courses[i]) ;
//     output.push(`${a} - ${courses[i]}`);
// }

// output.sort();
// console.log(output);

// // console.log(courselist) ;
// console.log(courses);
// console.log(acronyms);


// console.log(words);