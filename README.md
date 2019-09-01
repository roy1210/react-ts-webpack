# react-ts-webpack-config

## Description

Webpack and babel settings for react and typescript without using create-react-app

## Install

Clone repo, cd into folder and run:

```console
$ sudo npm install
$ npm start
```

## Usage

1. Create new project  </br>
To create new project, delete `package-lock.json` then change the `name` in `package.json` and run `$ sudo npm install`

2. Update origin master (if did `git clone` rather than fork)

    Make new repository in github, change the orgin url as `git remote set-url <name> <newurl>` before `push origin master`

        example:
        ```
        ➜  react-ts-todo git:(master) git remote -v
        origin	https://github.com/roy1210/react-ts-webpack.git (fetch)
        origin	https://github.com/roy1210/react-ts-webpack.git (push)

        ➜  react-ts-todo git:(master) git remote set-url origin https://github.com/roy1210/react-ts-todo.git

        ➜  react-ts-todo git:(master) git remote -v
        origin	https://github.com/roy1210/react-ts-todo.git (fetch)
        origin	https://github.com/roy1210/react-ts-todo.git (push)
        ```
     Alternately, you may run `$ git remote remove origin` before `git remote add origin <new url>` OR just fork this repo.

## Requirement

- npm

## Note: If work with create-react-app

Run following command if react app with typescript created by `$ npm create-react-app AppName`

`$ npm i typescript @types/node @types/react @types/react-dom`
