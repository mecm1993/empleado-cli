# empleado-cli

[![Downloads](https://img.shields.io/npm/dt/empleado-cli.svg)](https://www.npmjs.com/packages/empleado-cli)
[![Version](https://img.shields.io/npm/v/empleado-cli.svg)](https://www.npmjs.com/packages/empleado-cli)

For those whom do not like to leave the terminal you can find the jobs posted in [emplea.do](https://emplea.do) which is a Dominican site to find jobs related to Informatics (in most of the casess 😅😆).

## Installation 💻

```bash
$ npm install -g empleado-cli
# or
$ yarn global add empleado-cli
```

## Usage 🚀

```bash
$ emplea [options] [arguments]
```

### Options

|Option         |Description            |
|---------------|-----------------------|
|-c, --category |the category of the jobs, currently available `MOBILE`, `SOFTWARE`, `SYSADMIN`, `TELNET`, `WEB` | 
|-h, --help     |print emplea command line options |
|-s, --size     |the size of the job list          |
|-p, --page     |the pagination page               |

## Examples 💥

```bash
# Find the latest 5 jobs in the list
$ emplea -s 5
```
<img src="https://i.ibb.co/BcC7Y9q/example-1.png" alt="Find the latest 5 jobs in the list">

```bash
# Find the latest 3 jobs from the category WEB
$ emplea -s 3 -c WEB
```
<img src="https://i.ibb.co/QfMKbMF/example-2.png" alt="Find the latest 3 jobs from the category WEB">
