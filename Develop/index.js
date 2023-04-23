// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const questions = require('./utils/questions');


// TODO: Create a function to write README file - DEFINE NEXT (MINI Project and 13)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! README generated.'))
}
    // TODO: Create a function to initialize app
    function init() {
        function promptQuestion(index) {
          inquirer.prompt(questions[index]).then((answers) => {
            // Check if there are more questions to ask
            if (index < questions.length - 1) {
              promptQuestion(index + 1);
            } else {
              // If there are no more questions, write the data to the README file
              const data = generateMarkdown(answers);
              writeToFile('README.md', data);
            }
          });
        }
      
        promptQuestion(0);
      }



// Function call to initialize app
init();