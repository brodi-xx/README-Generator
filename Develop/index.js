// TODO: Include packages needed for this application
var inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = require('./utils/questions');
console.log(questions);
// TODO: Create a function to write README file - DEFINE NEXT (MINI Project and 13)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'))
}
    // TODO: Create a function to initialize app
    function init() {
        inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
        })
    }



// Function call to initialize app
init();