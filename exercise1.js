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

// FUNCTION TO GET Y/n ANSWER
// ver 0.0
//const yesOrNo = (readlineSync = require('readline-sync')) => readlineSync.question('Please anwser Y (Yes) or n (No). ').toUpperCase();
// ver 1.0
const yesOrNo = (question) => {
    var readlineSync = require('readline-sync');

    let ans = getInput(question).toUpperCase();
    while (ans.length > 1 || (ans != 'N' && ans != 'Y')) {
        ans = getInput('Please anwser Y (Yes) or n (No). ').toUpperCase();
    }
    (ans == 'Y') ? ans = true: ans = false;
    return ans;
};

function Task(desc, dead = new Date(), urg = false, pri = true) {
    this.description = desc;
    this.deadline = dead;
    this.isUrgent = urg;
    this.isPrivate = pri;
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
            let urg = yesOrNo("Is it urgent? [Y/n] ");
            let pri = yesOrNo("Is it private? [Y/n] ");
            let dead = new Date(Date.parse(getInput("When do you want to schedule it? ")));

            appointments.push(new Task(desc, dead, urg, pri));

            console.log(`Ok then! Task added.`);
            break;
        case "2":
            console.log(`Task removed successfully.`);
            break;
        case "3":
            console.log("Here's the list of the tasks:");
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