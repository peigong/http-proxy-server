var path = require('path'),
    http = require('http'),
    express   = require('express');

var createConfigHandler = require('server-helpers').createConfigHandler;
var configDir = path.resolve(__dirname, '..', '..', '..', 'config');
console.log(configDir);
var config= createConfigHandler(configDir);
console.log(config.settings);

var controller = require('./controller.js'),
    filter = require('./filter.js'),
    //keywords = require('./keywords.js'),
    proxy = require('./proxy.js');

//拦截过滤器的配置目录
var base = path.join(configDir, config.settings.filter.base);
var items = require(path.join(configDir, config.settings.filter.settings));
//var keywordsSettings = require(path.join(configDir, 'keywords.json'));
if(base && items){
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
