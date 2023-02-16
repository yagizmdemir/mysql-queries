<div align="center">

# MySQL Queries For Node.js  
<!-- ![npm](https://img.shields.io/npm/v/enum2array?color=g&label=enum2array&logo=npm) ![npm](https://img.shields.io/npm/dy/enum2array?label=Downloads&logo=npm) [![CodeQL Analyze](https://github.com/sametcelikbicak/enum2array/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/codeql-analysis.yml) [![Build & Test](https://github.com/sametcelikbicak/enum2array/actions/workflows/build-test.yml/badge.svg)](https://github.com/sametcelikbicak/enum2array/actions/workflows/build-test.yml) ![dependabot](https://img.shields.io/badge/Dependabot-active-g?logo=dependabot)

 ![GitHub Repo stars](https://img.shields.io/github/stars/sametcelikbicak/enum2array?style=social) -->
 
Functions to help sql queries from Node.js to MySQL.
</div>

## Installation

```
npm i mysql-queries
```

## Usage

### Define an enum for testing
```typescript
export enum CustomType {
    TypeA = 1,
    TypeB = 2,
    TypeC = 3,
    TypeD = 4,
}
export enum CustomValue {
    TypeA = "valueA",
    TypeB = "valueB",
    TypeC = "valueC",
    TypeD = "valueD",
}
```

### Usage enum2array function

```typescript
import { enum2array } from "enum2array";
console.log(enum2array(CustomType));
console.log(enum2array(CustomValue));
```

## Results

### That is the result about function with "CustomType" enum

```
(4) [ArrayValue, ArrayValue, ArrayValue, ArrayValue]
0: ArrayValue {title: "TypeA", value: 1}
1: ArrayValue {title: "TypeB", value: 2}
2: ArrayValue {title: "TypeC", value: 3}
3: ArrayValue {title: "TypeD", value: 4}
length: 4
__proto__: Array(0)
```

### That is the result about function with "CustomValue" enum

```
(4) [ArrayValue, ArrayValue, ArrayValue, ArrayValue]
0: ArrayValue {title: "TypeA", value: "valueA"}
1: ArrayValue {title: "TypeB", value: "valueB"}
2: ArrayValue {title: "TypeC", value: "valueC"}
3: ArrayValue {title: "TypeD", value: "valueD"}
length: 4
__proto__: Array(0)
```

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