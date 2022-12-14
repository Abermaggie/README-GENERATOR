import inquirer from 'inquirer';
import fs from 'fs';

const generateREADME = ({ project_name, purpose, problem, licenseOptions, collaboratorsEx, collaboratorsGit, chooseSub, deployment}) =>
`# ${project_name}



## Description
${purpose} ${problem}

## Installation
  - 
  -
  -
  
## Usage

## Credits
Individual Collaborators:
  - ${collaboratorsEx} / GitHub Username: ${collaboratorsGit}
  -
  -

Third Part Contributors:
  -
  -
  -
Tutorials:
  -
  -
  -

## License
Licensed under the ${licenseOptions}.

  `
;

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
      type: 'input',
      name: 'collaboratorsEx',
      message: 'Please name one individual collaborator that contributed to project success:',
    },
    {
      type: 'input',
      name: 'collaboratorsGit',
      message: 'Please input the Github username for this collaborator:',
    },
    // {
    //   type: 'checkbox',
    //   name: 'chooseSub',
    //   message: 'In addition to the minimum requirements for a README, please select any additional content you would like added:',
    //   choices: ['Table of Contents', 'Tests', 'Badges','Features','How to Contribute'],
    // },
    // {
    //   type: 'confirm',
    //   name: 'deployment',
    //   message: 'Do you intend to or have you already publically deployed this project?',
    // },
  ])
  .then((answers) => {
    console.log(answers);
    const readMeContent = generateREADME(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
