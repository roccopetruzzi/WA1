"use strict";

// ver 0.0
// function printOptions() {
//     console.log(`Hello! Welcome to todo_manager. You can:
//     1. Insert a new task;
//     2. Remove a task;
//     3. Show all the tasks;
//     4. Close the program;`);
// }
// ver 1.0
const printOptions = () => console.log(
    `Hello! Welcome to todo_manager. You can:
    1. Insert a new task;
    2. Remove a task;
    3. Show all the tasks;
    4. Close the program;`);

// ver 0.0
// function getOption() {
//     var readlineSync = require('readline-sync');
//     var option = readlineSync.question('> ');
//     return option
// }
// ver 1.0
// const getOption = () => {
//     var readlineSync = require('readline-sync');
//     return readlineSync.question('> ');
// };
// ver 2.0
const getOption = (readlineSync = require('readline-sync')) => readlineSync.question('> ');

printOptions();
console.log(getOption());

//HELPER 
// function Task(description, deadline = new Date(), urgent = false, private = true) {
//     this.description = description;
//     this.deadline = deadline;
//     this.urgent = urgent;
//     this.private = private;
// }

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