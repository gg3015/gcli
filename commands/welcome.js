const figlet = require('figlet')
const lolcatjs = require('lolcatjs')

figlet('welcome !',{},function(err,data){
  if(err) console.log(err);
  lolcatjs.options.seed = Math.round(Math.random() * 1000);
  lolcatjs.options.colors = true;
  lolcatjs.fromString(data)
})
