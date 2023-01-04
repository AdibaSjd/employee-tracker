
const inquirer = require("inquirer");
const fs = require ("fs");
const PageBuilder = require ('./PageBuilder');
const { default: Choice } = require("inquirer/lib/objects/choice");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");




const mainMenuQuestions = [{
    
      type: 'List',
      name: 'mainMenu',
      message: 'mainMenu',
      choices: ['managers', 'interns', 'engineers', 'createTeam'],
      filter(val) {
        return val.toLowerCase()
      }
    }]


function divert(mainMenu) {
  if (mainMenu === 'managers') {
    return doManagerQuestions
  }
  if (mainMenu === 'interns') {
    return doInternQuestions
  }
  if (mainMenu === 'engineers') {
    return doEngineerQuestions
  }
  else (mainMenu === 'createTeam')
  return 'createTeam'
}
divert();



const doInternQuestions = [{
   type: 'input',
   name: 'name',
   message: 'What is your name?',
},{
  type: 'input',
  name: 'email',
  message: 'What is your email?'
},{
  type: 'input',
  name: 'id',
  message:'What is your id?'
},{
  type: 'input',
  name: 'school',
  message:'What is your school?'
}];

const doManagerQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},{
 type: 'input',
 name: 'email',
 message: 'What is your email?'
},{
 type: 'input',
 name: 'id',
 message:'What is your id?'
},{
 type: 'input',
 name: 'officeNumber',
 message:'What is your officeNumber?'
}];

const doEngineerQuestions = [{
  type: 'input',
  name: 'name',
  message: 'What is your name?',
},{
 type: 'input',
 name: 'email',
 message: 'What is your email?'
},{
 type: 'input',
 name: 'id',
 message:'What is your id?'
},{
 type: 'input',
 name: 'Github',
 message:'What is your Github?'
}];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, PageBuilder (data), err => console.log(err))
  }
function init() {
    inquirer.prompt (mainMenuQuestions).then(answer => {
      console.log(answer)
      writeToFile ("index.html", answer)
    })
  }
init();

