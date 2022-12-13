// const fs = require('fs');
// const inquirer = require('inquirer');

import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
       type: "input",
       name: "project_type",
       message: "What is the name of your project?",
       default: "Iron Man" 
    },
    {
        type: "list",
        name: "list_question",
        message: "What programming language do you like?",
        choices: ['Javascript', 'C++', 'Python','Java'],
        default: "Javascript",
    },
    {
        type: "checkbox",
        name: "checkbox_question",
        message: "How many programming languages do you speak?",
        choices: ['Javascript', 'C++', 'Python','Java'],
        default: "Javascript",  
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
