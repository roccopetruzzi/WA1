"use strict";

const wordsList = ["hello", "thisIsAnArray", "  gr8 course", "WA1", "WA1-course", "Web Applications I\n", "Web Applications I "];
//console.log(wordsList);

function shortner(wordsList) {
    for (let [i, w] of wordsList.entries()) {
        w = w.trim();
        const l = w.length;
        (l < 2) ? wordsList[i] = '': wordsList[i] = w.substring(0, 2) + w.substring(l - 2);
    }
}

shortner(wordsList);
console.log(wordsList);