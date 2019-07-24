# empleado-cli

[![Downloads](https://img.shields.io/npm/dt/empleado-cli.svg)](https://www.npmjs.com/package/empleado-cli)
[![Version](https://img.shields.io/node/v/empleado-cli.svg)](https://www.npmjs.com/package/empleado-cli)
![License](https://img.shields.io/github/license/mecm1993/empleado-cli.svg)

For those whom do not like to leave the terminal.

## Installation

```bash
$ npm install -g empleado-cli
# or
$ yarn global add empleado-cli
```

## Usage

```bash
$ emplea [options] [arguments]
```

## Options

|Option         |Description            |
|---------------|-----------------------|
|-c, --category |the category of the jobs, currently available `MOBILE`, `SOFTWARE`, `SYSADMIN`, `TELNET`, `WEB` | 
|-h, --help     |print emplea command line options |
|-s, --size     |the size of the job list          |
|-p, --page     |the page                          |

## Example

```bash
# Find the latest 5 jobs in the list
$ emplea -s 5
```
<img src="resources/example-1.png" alt="Find the latest 5 jobs in the list">

```bash
# Find the latest 3 jobs from the category WEB
$ emplea -s 3 -c WEB
```
<img src="resources/example-2.png" alt="Find the latest 3 jobs from the category WEB">
