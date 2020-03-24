"use strict";

//  FUNCTION TO PRINT MAIN MENU
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

//  FUNCTION TO GET USER INPUT
// ver 0.0
// function getOption() {
//     var readlineSync = require('readline-sync');
//     var option = readlineSync.question('> ');
//     return option
// }
// ver 2.0
//const getOption = (readlineSync = require('readline-sync')) => readlineSync.question('> ');
// ver 1.0
const getInput = (question) => {
    var readlineSync = require('readline-sync');
    return readlineSync.question(question);
};

// FUNCTION TO GET Y/n ANSWER -> to modify...
const yesOrNo = (readlineSync = require('readline-sync')) => readlineSync.question('Please anwser Y (Yes) or n (No). ').toUpperCase();

function Task(desc, dead = new Date(), urg = false, pri = true) {
    this.desc = desc;
    this.dead = dead;
    this.urg = urg;
    this.pri = pri;
}

//  MAIN
const appointments = [];
let option = '';
while (option != 4) {
    printOptions();
    option = getInput('> ');
    switch (option) {
        case "1":
            let desc = getInput("Please, provide the task description: ");

            let urg = getInput("Is it urgent? [Y/n] ").toUpperCase();
            while (urg.length > 1 || (urg != 'N' && urg != 'Y')) {
                urg = yesOrNo();
            }
            (urg == 'Y') ? urg = true: urg = false;
            let pri = getInput("Is it private? [Y/n] ");
            while (pri.length > 1 || (pri != 'N' && pri != 'Y')) {
                pri = yesOrNo();
            }

            let dead = getInput("When do you want to schedule it? ");
            appointments.push(new Task(desc, dead, urg, pri));
            break;
        case "2":
            console.log("opt2");
            break;
        case "3":
            console.log("opt3");
            break;
        case "4":
            return 0;
            break;
        default:
            console.log("Sorry, you entered an invalid option. Please try again.");
            break;
    }
}

//HELPER 

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