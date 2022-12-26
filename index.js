const inquirer = require('inquirer');
const fs = require('fs');
const writemd = require('./md_writer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the repo name?',
      name: 'repo_name',
    }
  ])
  .then((data) => {

    const filename = `README_tmp.md`;

    fs.writeFile(filename, writemd(data), (err) =>
    err ? console.log(err) : console.log('Success!')
    );
  });
