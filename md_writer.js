const writemd = userInput => {
    return`
# ${userInput.repo_name}

![open issues](https://img.shields.io/github/issues-raw/${userInput.username}/${userInput.repo_name})
![closed issues](https://img.shields.io/github/issues-closed-raw/${userInput.username}/${userInput.repo_name})

![license](https://img.shields.io/static/v1?label=license&message=${userInput.license.replace(/\s/g, '%20')}&color=blue)

## Description

${userInput.description}

Click [here](https://${userInput.username}.github.io/${userInput.repo_name}) to view the ${userInput.repo_name}.

![preview](/assets/images/${userInput.repo_name}_preview.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Credits](#credits)
- [License](#license)

## Installation

${userInput.installation}

## Usage

${userInput.usage}

## Contributing

${userInput.contributing}

# Tests

${userInput.tests}

# Questions

Visit my [${userInput.username}](https://github.com/${userInput.username}) profile page.

For any questions about this project, please send an email to <${userInput.email}>.

## Credits

${userInput.credits}

## License

Licensed under the [${userInput.license}](/LICENSE) license.

`
}

module.exports = writemd;