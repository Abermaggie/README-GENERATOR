import inquirer from 'inquirer';
import fs from 'fs';

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
      message: 'Please describe your project in 3-4 sentences focusing on project motivation and the solutions your project offers. ',
    },
    {
    type: 'editor',
    name: 'installation',
    message: 'Please provide numbered instructions for any installations required for your project. Ex.(1. 2.)'
    },
    {
      type: 'editor',
      name: 'usage',
      message: 'In this section, you can provide captions for the images and videos you plan to upload to demonstrate project functionality.'
      },
      {
        type: 'editor',
        name: 'contributorsHuman',
        message: 'In dialog box, please provide any invidivual contributors and their GitHub profile links.'
      },
      {
        type: 'editor',
        name: 'contributors3rd',
        message: 'In dialog box, please provide any 3rd part assets that were used with this project.'
      },
      {
      type: 'list',
      name: 'licenseOptions',
      message: 'Please choose the appropriate licensure for your project:',
      choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT License', 'ISC License','other'],
    },

  ])
  .then((answers) => {
    let readMeContent = generateREADME(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


  let generateREADME = ({ project_name, purpose, installation, usage, contributorsHuman, contributors3rd, licenseOptions}) =>
`# ${project_name}


## Description
${purpose}

## Installation
${installation}


  
## Usage
${usage}

## Credits
Individual Collaborators:
${contributorsHuman}

Third Part Contributors:
${contributors3rd}

## License
Licensed under the ${licenseOptions}.

  `
;