var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var gReq, gRes;
proxy.on('error', function(e) {
    console.log('proxy.on');
    console.error(e);
    console.error(gReq);
    console.error(gRes);
});

module.exports = function(req, res, next){
    gReq = req;
    gRes = res;
    var host = ['http://', req.headers.host].join('');
    //console.log('proxy:', host, ' ip:', req.ip);, toProxy: true
    proxy.web(req, res, { target: host, forward: host });
};