const CATEGORIES = require('./models/jobCategory.enum');

module.exports = {
  validateInput: (args) => {
    let _values = {
      page: 1,
      pageSize: 10,
      jobCategory: 'None',
    };

    if (args.hasOwnProperty('p') || args.hasOwnProperty('page')) {
      _values.page = args['p'] || args['page'];
    }

    if (args.hasOwnProperty('s') || args.hasOwnProperty('size')) {
      _values.pageSize = args['s'] || args['size'];
    }

    if (args.hasOwnProperty('c') || args.hasOwnProperty('category')) {
      const _categoryKey = args['c'] || args['category'];
      _values.jobCategory = CATEGORIES[_categoryKey];
    }

    if (!args.hasOwnProperty('p') && !args.hasOwnProperty('page')
        && !args.hasOwnProperty('s') && !args.hasOwnProperty('size')
        && !args.hasOwnProperty('c') && !args.hasOwnProperty('category')) {
      console.log('Usage: emplea [options] [arguments]');
      console.log('');
      console.log('Options:');
      console.log('  -c, --category               the category of the jobs, currently available');
      console.log('                               MOBILE, SOFTWARE, SYSADMIN, TELNET, WEB');
      console.log('  -h, --help                   print emplea command line options');
      console.log('  -p, --page                   the pagination page');
      console.log('  -s, --size                   the size of the job list');
      console.log('');
      console.log('Documentation can be found at <https://mecm1993.github.io/empleado-cli/>');
      _values = undefined;
    }

    return _values;
  },
};
