"use strict";

/********************* OBJECTS *********************/

// TASK CONSTRUCTOR
function Task(id, proj, desc, dead, urg = false, pri = true) {
    this.id = id;
    this.projectName = proj;
    this.description = desc;
    this.deadline = dead;
    this.isUrgent = urg;
    this.isPrivate = pri;
}

let t1 = new Task("task-1", "Web Applications I", "Complete Lab 2", Date.parse('2020-03-27 11:30'), false, true);
let t2 = new Task("task-2", "Personal", "Buy some groceries", Date.parse('2020-04-04'), false, false);
let t3 = new Task("task-3", "", "Read a good book", Date.parse('2020-05-05 14:00'), true, true);
let t4 = new Task("task-4", "Web Applications I", "Complete Lab 3", Date.parse('2020-03-07 08:35'), false, true);
let t5 = new Task("task-5", "Personal", "Watch Star Wars Saga", Date.parse('2020-03-17 14:15'), true, false);

const tasks = [];

tasks.push(t1);
tasks.push(t2);
tasks.push(t3);
tasks.push(t4);
tasks.push(t5);

// document.addEventListener('load', event => {});

// Populate taskListSection from array
const tasksListSection = document.querySelector('.content .middle-section ul');
const taskTemplate = document.getElementById('taskTemplate');
for (let task of tasks) {
    let t = taskTemplate.cloneNode(true);
    t.style.display = "block";
    t.setAttribute("id", task.id);
    t.querySelector('.task input[type=checkbox]').setAttribute("id", task.id + "-checkbox");
    t.querySelector('.task label').setAttribute("for", task.id + "-checkbox");
    let date = new Date(task.deadline);
    t.querySelector('.deadline p').innerText = date.toString();
    t.querySelector('.task label').innerText = task.description;
    t.querySelector('.task span').innerText = task.projectName;
    if (task.isUrgent) t.querySelector('.task input[type=checkbox]').classList.add("important");
    // if (isExpired) set red text;
    tasksListSection.insertAdjacentElement('beforeend', t);
}

const asideAll = document.getElementById('aside-all');
asideAll.addEventListener('click', event => {
    let toDisplay = document.querySelectorAll('li[id|=task]');
    for (let l of toDisplay) l.style.display = "block";
    let activeAside = document.querySelector('.aside ul li.active');
    activeAside.classList.remove('active');
    document.getElementById('aside-all').classList.add('active');
});

const asideImportant = document.getElementById('aside-important');
asideImportant.addEventListener('click', event => {
    let toHide = document.querySelectorAll('li[id|=task]');
    for (let l of toHide) l.style.display = "none";
    let toDisplay = document.querySelectorAll('li[id|=task] input.important');
    for (let d of toDisplay) {
        let id = d.getAttribute('id');
        let indexOfFirst = id.indexOf('-') + 1;
        id = id.substring(0, id.indexOf('-', indexOfFirst));
        document.getElementById(id).style.display = "block";
    }
    let activeAside = document.querySelector('.aside ul li.active');
    activeAside.classList.remove('active');
    document.getElementById('aside-important').classList.add('active');
});

const asideToday = document.getElementById('aside-today');
asideToday.addEventListener('click', event => {
    document.querySelectorAll('li[id|=task]').style.display = "none";
    let toDisplay = document.querySelectorAll('li[id|=task] input.important');
    for (let d of toDisplay) {
        let id = d.getAttribute('id');
        id = id.substring(0, indexOf('-'));
        document.getElementById(id).style.display = "block";
        document.getElementById('aside-important').classList.add("active");
    }
});

const asideNext7Days = document.getElementById('aside-next7days');
asideNext7Days.addEventListener('click', event => {
    document.querySelectorAll('li[id|=task]').style.display = "none";
    let toDisplay = document.querySelectorAll('li[id|=task] input.important');
    for (let d of toDisplay) {
        let id = d.getAttribute('id');
        id = id.substring(0, indexOf('-'));
        document.getElementById(id).style.display = "block";
        document.getElementById('aside-important').classList.add("active");
    }
});

const asidePrivate = document.getElementById('aside-private');
asidePrivate.addEventListener('click', event => {
    document.querySelectorAll('li[id|=task]').style.display = "none";
    let toDisplay = document.querySelectorAll('li[id|=task] input.important');
    for (let d of toDisplay) {
        let id = d.getAttribute('id');
        id = id.substring(0, indexOf('-'));
        document.getElementById(id).style.display = "block";
        document.getElementById('aside-important').classList.add("active");
    }
});

const asideShared = document.getElementById('aside-shared');
asideShared.addEventListener('click', event => {
    document.querySelectorAll('li[id|=task]').style.display = "none";
    let toDisplay = document.querySelectorAll('li[id|=task] input.important');
    for (let d of toDisplay) {
        let id = d.getAttribute('id');
        id = id.substring(0, indexOf('-'));
        document.getElementById(id).style.display = "block";
        document.getElementById('aside-important').classList.add("active");
    }
});