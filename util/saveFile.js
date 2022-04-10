const fs = require('fs')
const chalk = require('chalk')
const symbols = require('log-symbols')
const  { showTable } = require(`${__dirname}/../util/showTable`)

exports.saveFile = function (templateList,type) {
    fs.writeFile(`${__dirname}/../template.json`, JSON.stringify(templateList), 'utf-8', err => {
        if (err) console.log(chalk.supportsColorStderr(symbols.error), chalk.supportsColorStderr(err))
        console.log('\n')
        console.log(chalk.green(symbols.success), chalk.green(type+' successfully!\n'))
        console.log(chalk.green('The latest tmeplateList is: \n'))
        showTable(require(`${__dirname}/../template`))
    })
      
}