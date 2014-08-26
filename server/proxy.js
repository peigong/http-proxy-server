var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});
proxy.on('error', function(e) {
    console.log(e);
});

module.exports = function(req, res, next){
    var host = ['http://', req.headers.host].join('');
    console.log(['proxy:', host].join(''));
    proxy.web(req, res, { target: host });
};