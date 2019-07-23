const fetch = require('../lib/fetch');
const validator = require('./validator');
const utils = require('./utils');
const info = require('../package.json');

const chalk = require('chalk');
const figlet = require('figlet');
const argv = require('minimist')(process.argv.slice(2));

/**
 * Fetch the job list and logs the output in a table
 * @param {undefined} none
 * @return {undefined} none
 */
function execute() {
  const data = validator.validateInput(argv);

  if (data !== undefined) {
    utils.loading(true);
    fetch.getJobList(data.page, data.pageSize, data.jobCategory)
        .then((res) => res.json())
        .then((json) => {
          console.log('');
          console.log('');
          json.forEach((element) => {
            const job = utils.transformToJob(element);
            utils.loadTable(job);
          });
          console.log(utils.getTable().toString());
          utils.loading(false);
        });
  }
};

figlet.text('Emplea.do-CLI', {
  font: 'Slant',
  horizontalLayout: 'full',
  verticalLayout: 'default',
}, (err, data) => {
  if (err) {
    console.log(chalk.red('Something went wrong...'));
    console.dir(chalk.red(err));
    return;
  }
  console.log(chalk.red.bold(data));
  console.log(`${chalk.red.bold('Version')} ${info.version}`);
  console.log('');

  execute();
}
);
