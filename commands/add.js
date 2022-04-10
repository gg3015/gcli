#!/usr/bin/env node

const inquirer = require('inquirer')
const fs = require('fs')
const templateList = require(`${__dirname}/../template`)
const { showTable } = require(`${__dirname}/../util/showTable`)
const symbols = require('log-symbols')
const chalk = require('chalk')

chalk.level = 1

let question = [{
  name: 'name',
  type: 'input',
  message: 'Please enter a template name',
  validate(val) {
    if (!val) {
      return 'Name is required'
    } else if(templateList[val]){
      return `Template ${val} has already existed`
    } else {
      return true
    }
  }
}, {
  name: 'url',
  type: 'input',
  message: 'Please enter the url of a git repository that has a public status',
  validate(val) {
    if (val == '') return 'The url is required'
    return true
  }
  },{
    name: 'desc',
    type: 'input',
    message: 'Please enter some words as the desc of tempalte, optional',
    }]

inquirer.prompt(question).then(answers => {
  let { name, url , desc} = answers
  templateList.push({
    name,
    url: url.replace(/[\u0000-\u0019]/g, ''),
    desc,
    id: Date.now(),
    createTime: new Date().toLocaleString(),
    lastModifiedTime:''
  })
  fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateList), 'utf-8', (err) => {
    if (err) console.log(chalk.red(symbols.error), chalk.red(err))
    console.log('\n')
    console.log(chalk.green(symbols.success), chalk.green('Add a template sucessfully!\n'))
    console.log(chalk.green('The latest templateList is : \n'))
    showTable(templateList)
  })
})