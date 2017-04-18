var shell       = require('shelljs');

module.exports = {
  executeCommand: function(command) {
      var status = new Spinner(command.description);
      status.start();

      if (shell.exec(command.cmd).code !== 0) {
          shell.echo('Error: ' + command.cmd + ' failed');
          shell.exit(1);
      }

      status.stop();
  }
};