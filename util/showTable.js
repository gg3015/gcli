const Table = require('cli-table2')

const table = new Table({
  head: ['name', 'url', 'desc'],
  style: {
    head:['green']
  }
})

function showTable(tempList) {
  const list = tempList
  if (list.length > 0) {
    list.forEach(key => {
      table.push([key.name, key.url,key.desc])
      if (table.length === list.length) {
        console.log(table.toString())
        
        process.exit()
      }
    })
  } else {
    console.log(table.toString())
    console.log('It looks empty, add one first!')
    process.exit()
  }
}

exports.showTable = showTable