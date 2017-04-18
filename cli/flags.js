var config      = require('config');
var services    = config.get('services');
var wifiScan    = require('../scanner/scanner');

module.exports = {
    checkFlags: function(flags) {
        if(flags.start == true) {
            for(service in services.start) {
                console.log(services.start[service]);
            }
        }else if(flags.stop == true) {
            for(service in services.stop) {
                console.log(services.stop[service]);
            }
        }else if(flags.start == 'mongodb') {
            console.log(services.start.mongodb);
        }else if(flags.start == 'jetty') {
            console.log(services.start.start);
        }else if(flags.start == 'scanner') {
            console.log('starting scanner');
            wifiScan.startScanning();
        }else if(flags.stop == 'mongodb') {
            console.log(services.stop.mongodb);
        }else if(flags.stop == 'jetty') {
            console.log(services.stop.jetty);
        }else if(flags.stopping == 'scanner') {
            console.log('stopping scanner');
        }else if(flags.restart == true) {
            for(service in services.stop) {
                console.log(services.stop[service]);
            }
            for(service in services.start) {
                console.log(services.start[service]);
            }
        }else if(flags.restart == 'mongodb') {
            console.log(services.stop.mongodb);
            console.log(services.start.mongodb);
        }else if(flags.restart == 'jetty') {
            console.log(services.stop.jetty);
            console.log(services.start.jetty);
        }else if(flags.restart == 'scanner') {
            console.log('stopping scanner');
            console.log('starting scanner');
        }
    }
}