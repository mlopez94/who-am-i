const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "templates");
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const arrEmp = [];

const profQuestions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the Managers name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the Manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the Managers employee ID number",
        validate: (idNumber) => {
          if (idNumber) {
            return true;
          } else {
            console.log("Please enter the employee ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
        validate: (emailAddr) => {
          if (emailAddr) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "number",
        message: "Enter your office number",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.number
      );

      arrEmp.push(manager);

      buildTeamOrNah();
    });

  //
};

const engineerClass = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the engineer's name:",
        validate: (engineInput) => {
          if (engineInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the engineer's ID:",
        validate: (engineID) => {
          if (engineID) {
            return true;
          } else {
            console.log("Please enter the engineer's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the engineer's email:",
        validate: (engineEmail) => {
          if (engineEmail) {
            return true;
          } else {
            console.log("Please enter the engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter the engineer's Github username:",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("Please the engineer's Github username!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );

      arrEmp.push(engineer);

      buildTeamOrNah();
    });
};

const internClass = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "intern",
        message: "Enter the intern's name:",
        validate: (internInput) => {
          if (internInput) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter the intern's ID:",
        validate: (internId) => {
          if (internId) {
            return true;
          } else {
            console.log("Please enter the intern's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter the intern's email:",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("Please enter the intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Where did the intern attend school?",
        validate: (internEmail) => {
          if (internEmail) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );

      arrEmp.push(intern);

      buildTeamOrNah();
    });
};

const buildTeamOrNah = () => {
  inquirer
    .prompt({
      type: "list",
      name: "choice",
      message: "Do you want to add team members or not?",
      choices: ["Engineer", "Intern", "Quit"],
    })
    .then((data) => {
      if (data.choice === "Engineer") {
        engineerClass();
      } else if (data.choice === "Intern") {
        internClass();
      } else {
        writeHTML(arrEmp);
      }
      
        
      
    });
};


const writeHTML = (fileContent) => {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(outputPath, render(arrEmp), "utf-8");
            console.log("File was created successfully");
            resolve();
        } catch(err) {
            reject(err);
            console.log(err);
        }
    });
};  
            

profQuestions();




