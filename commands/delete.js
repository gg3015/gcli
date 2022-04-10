#!usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const { saveFile } = require('../util/saveFile')
let templateList = require(`${__dirname}/../template`)
chalk.level = 1

let question = [{
  name: 'name',
  mesage: 'Please input the name of tempalte for delete',
  validate(val){
    if (!val) {
      return 'Name is required'
    } else if (!templateList) {
      return 'Template does not exist!'
    } else {
      return true
    }
  }
}]

inquirer.prompt(question).then(answers => {
  let { name } = answers
  templateList = templateList.filter(item => {
    return item.name!==name
  })
  saveFile(templateList,'deleted')
})