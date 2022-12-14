import inquirer from 'inquirer';
import fs from 'fs';


const badgeURL = "![GitHub license](https://img.shields.io/badge/license-";
const badgeTail = "-blue.svg";

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
      choices: ['Apache 2.0', 'BSD3', 'MIT', 'GPL3.0','none'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please explain how another developer might go about contributing to your project.'
    },
    {
      type: 'editor',
      name: 'testing',
      message: 'Please provide numbered entries in the editor explaining testing methods for this project.'
    },
    {
      type: 'editor',
      name: 'roadMap',
      message: 'Please enter the roadMap for future upgrades or anything to be added.'
    },
    {
      type:'input',
      name: 'email',
      message: 'Please provide your email address for a way for users to reachout for support'
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'Please enter your GitHub username',
    }

  ])
  .then((answers) => {
    let readMeContent = generateREADME(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });


  let generateREADME = ({ project_name, purpose, installation, usage, contributorsHuman, contributors3rd, licenseOptions, contributing, testing, roadMap, email, gitHub}) =>
`# ${project_name}

<img width="100" alt="badge for licensure" src="https://img.shields.io/badge/License-${licenseOptions}-blue.svg">

## Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contribute](#contributing-to-this-project)
- [Testing](#testing-methods)
- [Road_Map](#road-map)
- [Questions](#questions)
- [License](#license)

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

## Contributing to this Project
${contributing}

## Testing Methods
${testing}

## Road Map
${roadMap}

## Questions
For support,\
Contact Me: ${email}\
GitHub User Profile: www.github.com/${gitHub}

## License
Licensed under the ${licenseOptions}.

  `
;