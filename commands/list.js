#!/usr/bin/env node
const { showTable } = require(`${__dirname}/../util/showTable`)
const templateList = require(`${__dirname}/../template`)

console.log('TemplateList as below:')
showTable(templateList)


