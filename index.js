const inquirer = require('inquirer');
const fs = require('fs');
const writemd = require('./md_writer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
      default: 'box-o-water',
    },
    {
      type: 'input',
      message: 'What is the repo name?',
      name: 'repo_name',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide a short description of the project.',
      name: 'description',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide installation instructions in a single line. Tip: add ` * ` where to break list lines later.',
      name: 'installation',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide usage information in a single line. Tip: add ` * ` where to break list lines later.',
      name: 'usage',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide contributing instructions in a single line. Tip: add ` * ` where to break list lines later.',
      name: 'contributing',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide testing instructions in a single line. Tip: add ` * ` where to break list lines later.',
      name: 'tests',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide any credits in a single line. Tip: add ` * ` where to break list lines later.',
      name: 'credits',
      default: 'N/A',
    },
    {
      type: 'input',
      message: 'Provide a contact email.',
      name: 'email',
      default: 'boxooowater@gmail.com',
    },
    {
      type: 'list',
      message: 'Pick a license.',
      choices: ['None', 'Apache 2.0','GNU v3.0', 'MIT', 'Mozilla 2.0'],
      name: 'license',
      default: 'MIT',
    }
  ])
  .then((data) => {

    const filename = `README_new.md`;

    fs.writeFile(filename, writemd(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });
