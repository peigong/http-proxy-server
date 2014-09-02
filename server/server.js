﻿var path = require('path'),
    http = require('http'),
    express   = require('express');

var controller = require('./controller.js'),
    proxy = require('./proxy.js'),
    filter = require('./filter.js');

var root =  path.resolve(__dirname, '..', '..', '..'),
    configDir = path.resolve(root, 'config');

var settings = require(path.join(configDir, 'settings.json'));
//拦截过滤器的配置目录
var dir = settings.filter;
var base = path.join(configDir, dir);
var items = require(path.join(base, 'items.json'));
if(dir && items){
    var app = express();
    app.use(express.favicon());
    app.use('/ctrl', controller({ base: base, items: items }));
    app.use(filter({ base: base, items: items }));
    app.use(proxy);

    var node = http.createServer(app);
    server.listen(80);
}
