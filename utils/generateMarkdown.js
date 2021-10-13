// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   return `string of markdown of chosen badge`;
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache License 2.0":
      license =
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT License":
      license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      license =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Mozilla Public License 2.0":
      license =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      console.log(`No license`);
  }

  return license;
}

// TODO: Create a function to generate markdown for README
// data is the response object
function generateMarkdown(data) {
  let licenseSection = "";
  const license = data.projLicense;
  if (license) {
    // build 'licenseSection'
    licenseSection = renderLicenseSection(license);
  }
  let contributeSection1 = "";
  let contributeSection2 = "";
  const github = data.projContributeGitHub;
  const email = data.projContributeEmail;
  if (github) {
    contributeSection1 = `You can contribute to this repo by contacting GitHub user <a href="https://github.com/${github}">${github}</a>`;
  }
  if (email) {
    contributeSection2 = `You can contact the creator at <a href="mailto: ${email}">${email}</a>`;
  }

  return `# ${data.projTitle}
  ${licenseSection}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.projDescription}

  ## Installation
  ${data.projInstallation}

  ## Usage
  ${data.projUsage}

  ## License
  ${licenseSection}

  This project is protected under the ${license} license.

  ## How to Contribute
  ${contributeSection1}

  ${contributeSection2}

  ## Tests
  ${data.projTests}

  ## Questions
  ${data.projQuestions}

  ${contributeSection1}
  
  ${contributeSection2}
  
`;
}

module.exports = generateMarkdown;
