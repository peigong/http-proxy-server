var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
proxy.on('error', function(e) {
    console.log('proxy.on');
    console.error(e);
});

module.exports = function(req, res, next){
    var host = ['http://', req.headers.host].join('');
    //console.log('proxy:', host, ' ip:', req.ip);
    proxy.web(req, res, { target: host });
};