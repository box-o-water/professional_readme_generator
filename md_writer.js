const writemd = userInput => {
    return`
# professional_readme_generator

![open issues](https://img.shields.io/github/issues-raw/box-o-water/${userInput.repo_name})
![closed issues](https://img.shields.io/github/issues-closed-raw/box-o-water/${userInput.repo_name})

## Description

Add a description.

Click [here](https://box-o-water.github.io/${userInput.repo_name}) to view the professional_readme_generator.

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

N/A

## Usage

N/A

## Contributing

N/A

# Tests

N/A

# Questions

N/A

## Credits

N/A

## License

Licensed under the [MIT](/LICENSE) license.

`
}

module.exports = writemd;