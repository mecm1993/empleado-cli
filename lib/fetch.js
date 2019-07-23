const fetch = require('node-fetch');

const _URL = 'https://api.cuatrokb.com/v1/empleado/jobs.json';

module.exports = {
  getJobList: (page = 1, pageSize = 10, jobCategory = 'None') => {
    return fetch(`${_URL}?page=${page}&PageSize=${pageSize}&JobCategory=${jobCategory}`);
  },
};
