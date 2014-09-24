var path = require('path'),
    http = require('http'),
    express   = require('express');

var controller = require('./controller.js'),
    filter = require('./filter.js'),
    //keywords = require('./keywords.js'),
    proxy = require('./proxy.js');

var root =  path.resolve(__dirname, '..', '..', '..'),
    configDir = path.resolve(root, 'config');

var settings = require(path.join(configDir, 'settings.json'));
//拦截过滤器的配置目录
var dir = settings.filter;
var base = path.join(configDir, dir);
var items = require(path.join(base, 'items.json'));
//var keywordsSettings = require(path.join(configDir, 'keywords.json'));
if(dir && items){
    var app = express();
    app.use(express.favicon());
    //app.use(express.logger());
    app.use('/ctrl', controller({ base: base, items: items }));
    app.use(filter({ base: base, items: items }));
    /*
    if(keywordsSettings){
        app.use(keywords({ base: base, items: items, settings: keywordsSettings }));
    }
    */
    app.use(proxy);
    app.use(function(err, req, res, next){
        if(err){
            console.error(err);
        }
    });

    var node = http.createServer(app);
    node.on('listening',function(){
        console.log('ok, http proxy server is running!');
    });
    node.listen(80);
    console.log('http proxy server running!');
}else{
    console.log('http proxy server config error!');
}
