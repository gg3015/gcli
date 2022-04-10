# gcli

A cli tool for developer to add and download template repository widthout git clone

## Installation
```bash
npm install gcli -g
```
this will register a global command `chong`
## How to use
Easily with command `list, add, delete, edit, init`, just try it.
### list all added template

```bash
chong list
```

### Add a new template

command add
```bash
chong add
```
With command `add` you will asked to enter three params `name`,`url`, `desc`(optionnal)

url sample:
```bash
https://github.com/gg3015/gcli.git
```
```bash
https://github.com/gg3015/gcli.git#main
```
```bash
gg3015/gcli
```

### Delete template
```bash
chong delete
```
### Edit template
can edit all three property
```bash
chong edit
```
### Init a project with template project
download template project to local with `template-name`, this command needs two params `<template-name>`, `[project-name]`(project-name used to create a project folder )
```bash
chong init <template-name> [project-name]
```
sample
```bash
chong init test myProject
```
## License

(The MIT License)

Copyright (c) 2022, Chong Gao &lt;276688721@qq.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.