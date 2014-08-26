var path = require('path'),
    http = require('http'),
    express   = require('express');

var controller = require('./controller.js'),
    proxy = require('./proxy.js'),
    filter = require('./filter.js');

var config = path.resolve(__dirname, '..', '..', '..', 'config');
var settings = require(path.join(config, 'settings.json'));
//拦截过滤器的配置目录
var dir = settings.filter;
var base = path.join(config, dir);
var items = require(path.join(base, 'items.json'));
if(dir && items){
    var app = express();
    app.use(express.favicon());
    app.use('/ctrl', controller({ base: base, items: items }));
    app.use(filter({ base: base, items: items }));
    app.use(proxy);

    var node = http.createServer(app);
    node.listen(80);
    console.log('server is running!');    
}else{
    console.log('config error.')
}
