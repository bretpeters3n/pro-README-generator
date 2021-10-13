// PSUEDO CODING // Generate README.md with
// Title of my project and sections entitled Description, Table of Contents,
// Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

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
      "Contribute - If you are open to contributing on this project, please provide your GitHub username.\n",
    name: "projContributeGitHub",
  },
  {
    type: "input",
    message:
      "Contribute - If you are open to contributing on this project, please provide your email address.\n",
    name: "projContributeEmail",
  },
  {
    type: "input",
    message:
      "Tests - If you have any tests you would like to describe to users, explain them here.\n",
    name: "projTests",
  },
  {
    type: "input",
    message:
      "Questions - Are there any questions remaining about this project? Include them here.\n",
    name: "projQuestions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const README = generateMarkdown(data);
    writeToFile("readmes/README.md", README);
  });
}

// Function call to initialize app
init();
