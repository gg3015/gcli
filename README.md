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