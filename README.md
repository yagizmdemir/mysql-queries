<div align="center">

# MySQL Queries For Node.js  
<!-- ![npm](https://img.shields.io/npm/v/enum2array?color=g&label=enum2array&logo=npm) ![npm](https://img.shields.io/npm/dy/enum2array?label=Downloads&logo=npm) [![CodeQL Analyze](https://github.com/sametcelikbicak/enum2array/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/codeql-analysis.yml) [![Build & Test](https://github.com/sametcelikbicak/enum2array/actions/workflows/build-test.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/build-test.yml) ![dependabot](https://img.shields.io/badge/Dependabot-active-g?logo=dependabot)

 ![GitHub Repo stars](https://img.shields.io/github/stars/sametcelikbicak/enum2array?style=social) -->
 
Functions to help SQL queries from Node.js to MySQL.
</div>

## Pre-Requirements
MySQL js (https://github.com/mysqljs/mysql)

```sh
$ npm install mysql
```
or
```sh
$ npm install mysqljs/mysql
```

--------------------------------------------

Dotenv (github.com/motdotla/dotenv)

```sh
$ npm install dotenv --save
```

--------------------------------------------

Create .env file like or add lines to your .env file;
```
DB_HOST=your_db_host
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_database_name
```

## Installation

```
npm i node-mysql-queries
```

## Usage

### SELECT * FROM table_name
res = controller response
table_name = string (table name)
```typescript
selectAllSQL(res, 'table_name')
```

### SELECT * FROM table_name WHERE column_name = value
res = controller response
table_name = string (table name)
columns = string array (columns name) You can use multiple column like ['col1', 'col2']
values = array (values) You can use multiple value like [1, 'val2']
```typescript
selectWhereSQL(res, 'table_name', ['column_name'], [values])
```

### INSERT INTO posts SET id = 1, title = 'Hello World'
res = controller response
table_name = string (table name)
value = object for example: {id: 1, title: 'Hello World'}
```typescript
insertSQL(res, 'table_name', {value})
```

### UPDATE teble_name SET col1 = val1, col2 = val2 WHERE id = 1
res = controller response
table = string (table name)
columns = string array (columns name) You can use multiple column like ['col1', 'col2']
values = array (values) You can use multiple value like [1, 'val2']
where = string like (id = 1)
```typescript
updateSQL(res, 'table', ['columns'], [values], 'where')
```

### DELETE FROM table_name WHERE column = value
res = controller response
table_name = string (table name)
column = string (column name)
value = string (value)
```typescript
deleteSQL(res, 'table_name', 'column', 'value')
```

## Results

### Want to contribute?
You can read and follow our [CONTRIBUTING.md](CONTRIBUTING.md) and report it using
[GitHub Issues](https://github.com/yagizmdemir/mysql-queries/issues)! for reporting bugs, suggesting enhancements, bugfixes, new features and extras are welcome.


## Contributors ✨
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://yagizmdemir.com/"><img src="https://avatars.githubusercontent.com/u/87898868?v=4?s=100" width="100px;" alt="Yağız Mehmet Demir"/><br /><sub><b>Yağız Mehmet Demir</b></sub></a><br /><a href="#infra-yagizmdemir" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/yagizmdemir/mysql-queries/commits?author=yagizmdemir" title="Code">💻</a> <a href="https://github.com/yagizmdemir/mysql-queries/issues?q=author%3Ayagizmdemir" title="Bug reports">🐛</a> <a href="https://github.com/yagizmdemir/mysql-queries/commits?author=yagizmdemir" title="Documentation">📖</a> <a href="#example-yagizmdemir" title="Examples">💡</a> <a href="#maintenance-yagizmdemir" title="Maintenance">🚧</a> <a href="https://github.com/yagizmdemir/mysql-queries/commits?author=yagizmdemir" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->


This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!