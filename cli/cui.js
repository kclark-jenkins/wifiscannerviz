var clear       = require('clear');
var config      = require('config');
var chalk       = require('chalk');
var figlet      = require('figlet');
var banner      = config.get('banner');

module.exports = {
    showBanner: function() {
        clear();
        console.log(
            chalk.yellow(
                figlet.textSync(banner, { horizontalLayout: 'full' })
            )
        );
    }
};