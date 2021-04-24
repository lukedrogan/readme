/*WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Please enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please enter a brief project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please enter installation for your project:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Please enter usage information for your project:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Please enter any contribution guidelines for your project:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Please enter test instructions for your project:',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Please choose the license for your project:',
    name: 'license',
    choices: [
      "No License",
      "MIT",
      "Apache-2.0",
    ]},
    {
      type: 'input',
      message: 'Please enter your GitHub username:',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Please enter your email address:',
      name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(responses => writeToFile("readme.md", generateMarkdown({...responses})))

}

// Function call to initialize app
init();
