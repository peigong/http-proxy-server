var url = require('url');

module.exports = function(options){
    var base = '', id_mapping = {}, settings = options.settings;
    if(options.hasOwnProperty('items')){
        options.items.map(function(item){
            id_mapping[item.id] = item;
        });
    }
    return function(req, res, next){
        var host = req.headers.host, 
            conf = {}, id = '', key = '', word = '', keywords = {}, query = {};

        if(settings && settings[host]){
            conf = settings[host];
            if(conf.key && conf.keywords){
                key = conf.key;
                keywords = conf.keywords;
                query = url.parse(req.url, true).query;
                if(query && query[key]){
                    word = query[key];
                    console.log('keywords word:' + word);
                    if(word && keywords[word]){
                        id = keywords[word];
                        console.log('keywords id:' + id);
                        if(id && id_mapping[id]){
                            item = id_mapping[id];
                            item.active = true;
                            var msg = JSON.stringify(item, null, 4);
                            console.log(msg);
                            setTimeout(function(){
                                item.active = false;
                                var msg = JSON.stringify(item, null, 4);
                                console.log(msg);
                            }, 5 * 60 * 1e3);
                        }
                    }
                }
            }
        }
        next();
    };
};