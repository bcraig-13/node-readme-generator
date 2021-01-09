// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const renderReadme = ({
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    licenses,
    ghname,
    email,
}) => {
    return `# ${title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Licenses](#licenses)
* [Contact](#contact)
    
## Description
${description}
## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${tests}
## Licenses
${licenses}
## Contact
* GitHub: ${ghname}
* Email: ${email}`;
}

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your project?",
            name: "title",
            default: "Project Title",
        },
        {
            type: "input",
            message: "Write a description for your project.",
            name: "description",
            default: "Project Description",
        },
        {
            type: "input",
            message: "Write installation instructions for your project",
            name: "installation",
        },
        {
            type: "input",
            message: "Write the usage for your app",
            name: "usage",
        },
        {
            type: "input",
            message: "List all of the contributions to your project.",
            name: "contributing",
        },
        {
            type: "input",
            message: "Write the test instructions for your project.",
            name: "tests",
        },
        {
            type: "input",
            message: "Inlcude all licenses for your project.",
            name: "licenses",
        },
        // {
        //     //badges section
        // },
        {
            type: "input",
            message: "Enter your GitHub username.",
            name: "ghname",
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email",
        },
    ])
}


function createNewFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
      } else {
        console.log("All Done!");
      }
    });
};

function init() {
    promptUser().then((data) => {
        const template = renderReadme(data);
        createNewFile(`./Generated-README.md`, template);
    })
}

init();