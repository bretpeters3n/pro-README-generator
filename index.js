// PSUEDO CODING // Generate README.md with
// Title of my project and sections entitled Description, Table of Contents,
// Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
let questions = [
  {
    type: "input",
    message: "Title - What is the title of your project?\n",
    name: "projTitle",
  },
  {
    type: "input",
    message:
      "Desription - Describe your project. (answer as many of these questions as possible)\nWhat was your motivation?\nWhy was it built?\nWhat problem does it solve?\nWhat did you learn?\n",
    name: "projDescription",
  },
  {
    type: "input",
    message:
      "Installation - What are the steps required to install your project?\nProvide a step-by-step description of how to get the development environment running.\n",
    name: "projInstallation",
  },
  {
    type: "input",
    message: "Usage - Provide instructions and examples for use.\n",
    name: "projUsage",
  },
  {
    type: "list",
    message:
      "License - If you would like to include a license, please choose one.\n",
    name: "projLicense",
    choices: [
      "Apache License 2.0",
      "MIT License",
      "Creative Commons Zero v1.0 Universal",
      "Mozilla Public License 2.0",
    ],
  },
  {
    type: "input",
    message:
      "Contribute - If you are open to contributing on this project, please provide instructions and/or rules to contribute.\n",
    name: "projContribute",
  },
  {
    type: "input",
    message:
      "Tests - If you have any tests you would like to describe to users, explan them here.\n",
    name: "projTests",
  },
  {
    type: "input",
    message:
      "Questions - Are there any questions remaining about this project? Include them here.\n",
    name: "projQuestions",
  },
];
// inquirer
//   .prompt([
//     {
//       type: "input",
//       message: "What is the title of your project?",
//       name: "projTitle",
//     },
//     {
//       type: "input",
//       message:
//         "Please describe your project. What was your motivation? Why was it built? What problem does it solve? What did you learn?",
//       name: "projDescription",
//     },
//     {
//       type: "password",
//       message: "Re-enter password to confirm:",
//       name: "confirm",
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log("Success!")
//       : console.log("You forgot your password already?!")
//   );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // inquirer.prompt(questions).then((answers) => {
  //   console.log(`Here are your answers:\n
  //   Title: ${projTitle}\n
  //   Description: ${projDescription}\n
  //   Installation: ${projInstallation}\n
  //   Usage: ${projUsage}\n
  //   License: ${projLicense}\n
  //   Contribute: ${projContribute}\n
  //   Tests: ${projTests}\n
  //   Questions: ${projQuestions}\n`);
  // });
  inquirer.prompt(questions).then((answers) => {
    console.log(`Here are your answers:\n
    Title: ${answers.projTitle}\n
    Description: ${answers.projDescription}\n
    Installation: ${answers.projInstallation}\n
    Usage: ${answers.projUsage}\n
    License: ${answers.projLicense}\n
    Contribute: ${answers.projContribute}\n
    Tests: ${answers.projTests}\n
    Questions: ${answers.projQuestions}\n`);
  });
}

// Function call to initialize app
init();
