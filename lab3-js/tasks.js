"use strict";

/********************* OBJECTS *********************/

// Task constructor
function Task(id, proj, desc, dead, urg = false, pri = true) {
    this.id = id;
    this.projectName = proj;
    this.description = desc;
    this.deadline = dead;
    this.isUrgent = urg;
    this.isPrivate = pri;
}

/********************* MAIN *********************/

// Create the array
const tasks = [];
// Create the Tasks
let t1 = new Task("task-1", "Web Applications I", "Complete Lab 2", Date.parse('2020-03-27 11:30'), false, true);
let t2 = new Task("task-2", "Personal", "Buy some groceries", Date.parse('2020-04-06 10:55'), false, false);
let t3 = new Task("task-3", "", "Read a good book", Date.parse('2020-04-11 14:00'), true, true);
let t4 = new Task("task-4", "Web Applications I", "Complete Lab 3", Date.parse('2020-03-07 08:35'), false, true);
let t5 = new Task("task-5", "Personal", "Watch Star Wars Saga", Date.parse('2020-03-17 14:15'), true, false);
// Push the Tasks into the array
tasks.push(t1);
tasks.push(t2);
tasks.push(t3);
tasks.push(t4);
tasks.push(t5);

// Populate taskListSection from array
const tasksListSection = document.querySelector('.content .middle-section ul');
const taskTemplate = document.getElementById('taskTemplate');
for (let task of tasks) {
    // clone the template node
    let t = taskTemplate.cloneNode(true);
    // set attributes and classes accordingly
    t.setAttribute("id", task.id);
    t.setAttribute("private", task.isPrivate);
    t.querySelector('.task input[type=checkbox]').setAttribute("id", task.id + "-checkbox");
    t.querySelector('.task label').setAttribute("for", task.id + "-checkbox");
    let date = new Date(task.deadline);
    date = date.toString();
    t.querySelector('.deadline').setAttribute("timestamp", task.deadline);
    t.querySelector('.deadline p').innerText = date.substring(0, date.indexOf('GMT') - 4);
    t.querySelector('.task label').innerText = task.description;
    t.querySelector('.task span').innerText = task.projectName;
    // set Class important
    if (task.isUrgent) t.querySelector('.task input[type=checkbox]').classList.add("important");
    // set Class expired (timer)
    let timer = new Date();
    let now = timer.getTime();
    let deadline = task.deadline;
    if (Number(deadline) > Number(now)) timer = (deadline - now);
    else timer = 0;
    setTimeout(() => { t.querySelector('.deadline').classList.add('expired') }, timer);
    // insert computed element in page
    tasksListSection.insertAdjacentElement('beforeend', t);
    t.style.display = "block";
}

/********************* EVENT LISTENERS *********************/

// Add event lsiteners AFTER the document has been loaded
document.addEventListener('DOMContentLoaded', event => {

    // Event listener on ALL button (Aside)
    const asideAll = document.getElementById('aside-all');
    asideAll.addEventListener('click', event => {
        // display all tasks
        let toDisplay = document.querySelectorAll('li[id|=task]');
        for (let l of toDisplay) l.style.display = "block";
        // set selected button on aside as active
        let activeAside = document.querySelector('.aside ul li.active');
        activeAside.classList.remove('active');
        document.getElementById('aside-all').classList.add('active');
    });

    // Event listener on IMPORTANT button (Aside)
    const asideImportant = document.getElementById('aside-important');
    asideImportant.addEventListener('click', event => {
        // hide all tasks
        let toHide = document.querySelectorAll('li[id|=task]');
        for (let l of toHide) l.style.display = "none";
        // select only tasks with class .important and display them
        let toDisplay = document.querySelectorAll('li[id|=task] input.important');
        for (let d of toDisplay) d.parentNode.parentNode.parentNode.style.display = "block";
        // set selected button on aside as active
        let activeAside = document.querySelector('.aside ul li.active');
        activeAside.classList.remove('active');
        document.getElementById('aside-important').classList.add('active');
    });

    // Event listener on TODAY button (Aside)
    const asideToday = document.getElementById('aside-today');
    asideToday.addEventListener('click', event => {
        // hide all tasks
        let toHide = document.querySelectorAll('li[id|=task]');
        for (let l of toHide) l.style.display = "none";
        // compute today's date and timestamp
        let now = new Date();
        let nowTimestamp = Number(now.getTime());
        let nowDay = Number(now.getDate());
        // select all divs with .deadline class 
        let toDisplay = document.querySelectorAll('li[id|=task] .deadline');
        // filter which ones to display
        for (let d of toDisplay) {
            // compute task timestamp and date
            let taskTimestamp = Number(d.getAttribute('timestamp'));
            let day = new Date(taskTimestamp);
            let taskDay = Number(day.getDate());
            let diff = Math.abs(taskTimestamp - nowTimestamp);
            // if they are the same dom and their diff (timestamp) is less than 24H       
            if (taskDay == nowDay && diff <= (60 * 60 * 24 * 1000))
                d.parentNode.parentNode.style.display = "block";
        }
        // set selected button on aside as active
        let activeAside = document.querySelector('.aside ul li.active');
        activeAside.classList.remove('active');
        document.getElementById('aside-today').classList.add('active');
    });

    // Event listener on NEXT7DAYS button (Aside)
    const asideNext7Days = document.getElementById('aside-next7days');
    asideNext7Days.addEventListener('click', event => {
        // hide all tasks
        let toHide = document.querySelectorAll('li[id|=task]');
        for (let l of toHide) l.style.display = "none";
        // get today's date and time (midnight)
        let now = new Date();
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        // get today's midnight timestamp
        let nowTimestamp = Number(now.getTime());
        // select all divs with .deadline class 
        let toDisplay = document.querySelectorAll('li[id|=task] .deadline');
        for (let d of toDisplay) {
            // compute the task timestamp
            let taskTimestamp = Number(d.getAttribute('timestamp'));
            // if the task ts is between today's ts and 7 days from now ts, display them
            if (taskTimestamp <= nowTimestamp + (60 * 60 * 24 * 7 * 1000) && taskTimestamp >= nowTimestamp)
                d.parentNode.parentNode.style.display = "block";
        }
        // set selected button on aside as active
        let activeAside = document.querySelector('.aside ul li.active');
        activeAside.classList.remove('active');
        document.getElementById('aside-next7days').classList.add('active');
    });

    // Event listener on PRIVATE button (Aside)
    const asidePrivate = document.getElementById('aside-private');
    asidePrivate.addEventListener('click', event => {
        // hide all tasks
        let toHide = document.querySelectorAll('li[id|=task]');
        for (let l of toHide) l.style.display = "none";
        // select all li elements with private attiribute set
        let toDisplay = document.querySelectorAll('li[private]');
        for (let d of toDisplay) {
            let isPrivate = d.getAttribute('private');
            // if the task is private, display it
            if (isPrivate == 'true') d.style.display = "block";
        }
        // set selected button on aside as active
        let activeAside = document.querySelector('.aside ul li.active');
        activeAside.classList.remove('active');
        document.getElementById('aside-private').classList.add('active');
    });

    // Event listener on SHARED button (Aside)
    const asideShared = document.getElementById('aside-shared');
    asideShared.addEventListener('click', event => {
        // hide all tasks
        let toHide = document.querySelectorAll('li[id|=task]');
        for (let l of toHide) l.style.display = "none";
        // select all li elements with private attiribute set
        let toDisplay = document.querySelectorAll('li[private]');
        for (let d of toDisplay) {
            let isPrivate = d.getAttribute('private');
            // if the task is NOT private (ie. shared), display it
            if (isPrivate == 'false') d.style.display = "block";
        }
        // set selected button on aside as active
        let activeAside = document.querySelector('.aside ul li.active');
        activeAside.classList.remove('active');
        document.getElementById('aside-shared').classList.add('active');
    });

});