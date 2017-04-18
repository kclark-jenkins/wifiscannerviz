// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dbconfig = require('../dbconfig');
mongoose.connect(dbconfig.database); // connect to database

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('DataPoint', new Schema({
    ssid: String,
    channel: Number,
    signal_level: Number,
    security: String,
    timestamp: Number,
    lat: Number,
    lon: Number
}));