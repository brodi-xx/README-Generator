// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  {
        type: "input",
        name: "title",
        message: "What is the title of ReadMe?",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a detailed description of your application \n(Your motivation, Why did you build this project?, What problem does it solve?, What did you learn?, What makes your project stand out?):",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your application:",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on using your application:",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: "input",
        name: "credits",
        message: "If you worked on the project as a team or an organization, list your collaborators/team members"
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: ["Apache", "MIT", "Perl", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please include instructions on how to contribute to your application:",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (value) =>{ if(value){return true} else {return 'I need a value to continue'}}
    }
]

// TODO: Create a function to write README file - DEFINE NEXT (MINI Project and 13)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! README generated.'))
}
    // TODO: Create a function to initialize app
    function init() {
      inquirer
        .prompt(questions)
        .then((answers) => {
          const readmeContent = generateMarkdown(answers);
          writeToFile('README.md', readmeContent);
        })
        .catch((err) => console.error(err));
    }
    

// Function call to initialize app
init();