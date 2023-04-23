var questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of ReadMe?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a detailed description of your application \n(Your motivation, Why did you build this project?, What problem does it solve?, What did you learn?, What makes your project stand out?):"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your application:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on using your application:"
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
        message: "Please include instructions on how to contribute to your application:"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
]

module.exports = questions