const Table = require('cli-table3');
const CLI = require('clui');
const Spinner = CLI.Spinner;

const _countdown = new Spinner(
    'Loading...  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);
const _table = new Table({
  head: ['Title', 'Type', 'Company', 'Date', 'Link'],
});

module.exports = {
  loading: (active) => {
    if (active) {
      _countdown.start();
    } else {
      _countdown.stop();
    }
  },

  loadTable: (data) => {
    return _table.push([
      data['title'],
      data['type'],
      data['company'],
      data['date'],
      data['link'],
    ]);
  },

  getTable: () => {
    return _table;
  },

  transformToJob: (data) => {
    return {
      title: data.hasOwnProperty('jobTitle') ? data['jobTitle'] : '',
      link: data.hasOwnProperty('JobLink') ? data['JobLink'] : '',
      uri: data.hasOwnProperty('JobURI') ? data['JobURI'] : '',
      company: data.hasOwnProperty('jobCompany') ? data['jobCompany'] : '',
      location: data.hasOwnProperty('jobLocation') ? data['jobLocation'] : '',
      date: data.hasOwnProperty('jobDate') ? data['jobDate'] : new Date(),
      category: data.hasOwnProperty('jobCategory') ? data['jobCategory'] : '',
      type: data.hasOwnProperty('jobType') ? data['jobType'] : '',
    };
  },
};
