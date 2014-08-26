var fs = require('fs'),
    path = require('path');

module.exports = function(options){
    var base = '', id_mapping = {}, target_mapping = {};
    if(options.hasOwnProperty('items')){
        options.items.map(function(item){
            id_mapping[item.id] = item;
            target_mapping[item.target] = item;
        });
    }
    if(options.hasOwnProperty('base')){
        base = options.base;
    }

    return function(req, res, next){
        var host = ['http://', req.headers.host].join(''),
            target = [host, req.url].join('');
        if(target_mapping.hasOwnProperty(target) && base){
            item = target_mapping[target];
            if(item.active && item.filename){
                var filename = path.join(base, item.filename);
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