const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const arrEmp = [];

const profQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Managers name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!");
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the Managers employee ID number',
            validate: idNumber => {
                if (idNumber) {
                    return true;
                } else {
                    console.log("Please enter the employee ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: emailAddr => {
                if (emailAddr) {
                    return true;
                } else {
                    console.log("Please enter your email address!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Please enter your office number!");
                    return false;
                }
            }
        }
    ]);

    // buildTeamOrNah();
};

const engineerClass = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
            message: "Enter the engineer's name:",
            validate: engineInput => {
                if (engineInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's ID:",
            validate: engineID => {
                if (engineID) {
                    return true;
                } else {
                    console.log("Please enter the engineer's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email:",
            validate: engineEmail => {
                if (engineEmail) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineer's Github username:",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please the engineer's Github username!");
                    return false;
                }
            }
        }
        
    ]);
};

const internClass = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
            message: "Enter the intern's name:",
            validate: internInput => {
                if (internInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's ID:",
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log("Please enter the intern's ID!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email:",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the intern's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Where did the intern attend school?",
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            }
        }
    
    ]);
};

const buildTeamOrNah = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'Do you want to add team members or not?',
            choices: ['Engineer', 'Intern', 'Quit']

        }).then(data => {
            if (data.choice === 'Engineer') {
                engineerClass();
            } else if (data.choice === 'Intern') {
                internClass();
            } else (data.choice === 'Quit'); {
                render(arrEmp);    
            }
        });

    
};


internClass();

// console.log(nameInput);



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
