var questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of ReadMe?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: ["Apache", "MIT", "Perl", "None"]
    }
]

module.exports = questions