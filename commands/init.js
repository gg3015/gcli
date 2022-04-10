#!/usr/bin/env node
const program = require('commander')
const ora = require('ora')
const download = require('download-git-repo')
const templateList = require(`${__dirname}/../template`)
const symbols = require('log-symbols')
const chalk = require('chalk')
chalk.level = 1
const fs = require('fs')
const path = require('path')
program.usage('<template-name> [project-name]')
program.parse(process.argv)
// 当没有输入参数的时候给个提示
if (program.args.length <= 1) {
  console.log(chalk.red('\n Arguments is rquired! \n '))
  program.help()
}

// 第一个参数是 webpack，第二个参数是 project-name
let templateName = program.args[1]
let projectName = program.args[2]
let templateProjectUrl

templateList.some(item => {
  if (item.name === templateName) {
    templateProjectUrl = item['url']
    return true
  }
})
if (!templateProjectUrl) {
  console.log(chalk.red('\n Template does not exit! \n '))
  process.exit()
}
if (!projectName) {
  console.log(chalk.red('\n Project should not be empty! \n '))
  process.exit()
}

try {
  fs.accessSync(projectName)
  console.log(chalk.yellow(symbols.warning), chalk.yellow(`folder ${projectName} has existed, will try create new folder`))
  projectName=projectName+' copy'
} catch (error) {
  // console.log(chalk.red(error))
}

console.log('targetUrl:', templateProjectUrl)
console.log(chalk.green('\n Start generating... \n'))
// 出现加载图标
const spinner = ora('Downloading...')
const isHttp = /http/.test(templateProjectUrl)
const finnalUrl = `${isHttp ? 'direct:' : ''}${templateProjectUrl}`
spinner.start()

download(finnalUrl, `./${projectName}`, {clone:isHttp}, (err) => {
  if (err) {
    spinner.fail()
    console.log(chalk.red(symbols.error), chalk.red(`Generation failed. ${err}`))
    return
  }
  // 结束加载图标
  spinner.succeed()
  console.log(chalk.green(symbols.success), chalk.green('Generation completed!'))
  console.log('\n To get started')
  console.log(`\n    cd ${projectName} \n`)
})

