var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
proxy.on('error', function(e) {
    console.log('proxy.on');
    console.error(e);
});

module.exports = function(req, res, next){
    if(req.protocol != 'http'){
        console.log(req.protocol);
        console.log(req.host);
    }
    if(req.port && req.port != 80){
        console.log(req.host);
        console.log(req.port);
    }
    var host = ['http://', req.headers.host].join('');
    //console.log('proxy:', host, ' ip:', req.ip);
    proxy.web(req, res, { target: host });
};