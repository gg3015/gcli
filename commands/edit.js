const inquirer = require('inquirer')
const fs = require('fs')
const templateList = require(`${__dirname}/../template`)
const { saveFile } = require(`${__dirname}/../util/saveFile`)
const symbols = require('log-symbols')
const { exec } = require('child_process')
const chalk = require('chalk')
chalk.level = 1

if (templateList.length < 1) {
    console.log(chalk.yellow(symbols.warning), chalk.yellow('There is no avaliable template for editing'))
    inquirer.prompt({
        name: 'add',
        type: 'confirm',
        message: 'add one?',
        default: false
    }).then(answer => {
        if (answer.add) {
            exec('chong add')
        } else {
            process.exit()
        }
    }, err => {
        console.log(chalk.red(symbols.error), chalk.red(err))
    })
}
let choices = []
templateList.map(item => {
    choices.push(item.name)
})
let question = [{
    type: 'list',
    name: 'choosedTemplateName',
    message: 'Choose a template',
    choices: choices
}, {
    type: 'list',
    name: 'choosedEditType',
    choices: ['name', 'url', 'desc'],
    message: 'Choose an edit type'
},
{
    type: 'input',
    name: 'newValue',
    message(res) {
        return `Please enter new ${res.choosedEditType}`
    }
}]

inquirer.prompt(question).then(answer => {
    const { choosedTemplateName, choosedEditType, newValue} = answer
    let id
    if (!newValue) {
        console.log('\n', chalk.yellow(symbols.warning), chalk.yellow(`New value of ${choosedEditType} if empty, nothing will changed!`))
        console.log('\n', chalk.green(symbols.success), chalk.green('See you later'))
        process.exit()
    }

    for (let index = 0; index < templateList.length; index++) {
        const item = templateList[index]
        if (item['name'] === choosedTemplateName) {
            switch (choosedEditType) {
                case 'name':
                    newValue && (item.name = newValue)
                    break;
                case 'url':
                    newValue && (item.url = newValue)
                case 'desc':
                    newValue && (item.desc = newValue)
                    break;
                default:
                    break;
            }
            item.lastModifiedTime = new Date().toLocaleString()
            break
        }
    }
    saveFile(templateList,'updated')
})