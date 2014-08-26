var fs = require('fs'),
    path = require('path');

module.exports = function(options){
    var base = '', items = [];
    if(options.hasOwnProperty('items')){
        items = options.items;
    }
    if(options.hasOwnProperty('base')){
        base = options.base;
    }

    return function(req, res, next){
        var host = ['http://', req.headers.host].join(''),
            target = [host, req.url].join('');

        if(base && items && items.length){
            var o = null;
            items.map(function(item){
                if(item.active && item.filename && (target.indexOf(item.target) > -1)){
                    o = item;
                }
            });
            if(o){
                var filename = path.join(base, o.filename);
                fs.stat(filename, function(err, stat){
                    if(err){
                        next(err);
                    }else{
                        console.log('hold:%s', req.url);
                        var stream = fs.createReadStream(filename);
                        stream.pipe(res);
                    }
                });
            }else{
                next();
            }
        }else{
            next();
        }
    };
};