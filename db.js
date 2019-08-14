var mongojs = require('mongojs');

var databaseUrl = 'mongodb://127.0.0.1:27017/';
var collections = ['user'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};