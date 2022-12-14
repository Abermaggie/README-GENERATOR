import inquirer from 'inquirer';
import fs from 'fs';

const generateREADME = ({ project_name, purpose, problem, licenseOptions, collaborators, chooseSub, deployment}) =>
  `# ${project_name}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'project_name',
      message: 'What is your project name?',
    },
    {
      type: 'input',
      name: 'purpose',
      message: 'Please describe in 1-2 sentences your motivation for building this project. ',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'Please describe in 1-2 sentences the problem this project addresses/solves.',
    },
    {
      type: 'list',
      name: 'licenseOptions',
      message: 'Please choose the appropriate licensure for your project:',
      choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT License', 'ISC License','other'],
    },
    {
      type: 'number',
      name: 'collaborators',
      message: 'Please estimate the number of collaborators or 3rd party assets that attributed to project success:',
    },
    {
      type: 'checkbox',
      name: 'chooseSub',
      message: 'In addition to the minimum requirements for a README, please select any additional content you would like added:',
      choices: ['Table of Contents', 'Tests', 'Badges','Features','How to Contribute'],
    },
    {
      type: 'confirm',
      name: 'deployment',
      message: 'Do you intend to or have you already publically deployed this project?',
    },
  ])
  .then((answers) => {
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
