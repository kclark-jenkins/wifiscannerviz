var config      = require('config');
var CLI         = require('clui');
var services    = config.get('services');

var flags     = require('./cli/flags');
var executor  = require('./cli/executor');
var cui       = require('./cli/cui');

var startup = function() {
    cui.showBanner();
    flags.checkFlags(argv = require('minimist')(process.argv.slice(2)));
    //executeCommand(services.start.mongo);
};

startup();