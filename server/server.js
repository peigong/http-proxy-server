﻿var path = require('path'),
    cluster = require('cluster/index.js');
var createServer = require('./app.js').createServer;

var root =  path.resolve(__dirname, '..', '..', '..');
var configDir = path.resolve(root, 'config'),
    logDir = path.resolve(root, 'logs'),
    pidDir = path.resolve(root, 'pids');

var server = createServer(configDir);

console.log(cluster);

if(server){
  cluster(server)
    .use(cluster.logger(logDir, 'debug'))
    .use(cluster.debug())
    .use(cluster.stats())
    .use(cluster.pidfiles(pidDir))
    .use(cluster.cli())
    .use(cluster.repl(10080))
    .listen(80);
}else{
  console.log('over!')
}
