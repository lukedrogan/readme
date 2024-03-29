// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "No License"){
    return ''
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "No License"){
    return ''
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License"){
    return ''
  }
  return `## License
  
  ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributors

${data.contribution}

## Tests 

${data.test}

## Questions

You can contact me on my github at [${data.username}](https://www.github.com/${data.username}/) or on email at ${data.email} with any questions

${renderLicenseSection(data.license)}

## Video

Please watch my video run through below:

`
}

module.exports = generateMarkdown;
