var wifiscanner = require("wifiscanner");
var scannerObj  = require('wifi-control');
var Repeat = require("repeat");
var DataPoint = require("../models/dataPoint");

module.exports = {
    startScanning: function() {
        var s = {
            debug: false,
            iface: 'wlp2s0'
        };
        scannerObj.configure(s);
        this.scan();
    },
    scan: function() {
        Repeat(function() {
            scannerObj.scanForWiFi(function(error, networks) {
                if(error) {
                    console.log(error);
                }else {
                    var dt = (new Date).getTime();
                    for(var i=0; i<networks.networks.length; i++) {
                        var newPoint = new DataPoint({
                            ssid: networks.networks[i].ssid,
                            channel: networks.networks[i].channel,
                            signal_level: networks.networks[i].signal_level,
                            security: networks.networks[i].security,
                            timestamp: dt,
                            lat: 12,
                            lon: 12
                        });

                        newPoint.save(function(err) {
                            if(err) throw err;
                        })
                    }


                }
            });
        }).every(10000, 'ms').for(720, 'hours').start.in(1, 'sec');
    }
};