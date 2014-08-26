var express   = require('express');


module.exports = function(options){
    function control(active){
        var base = '', id_mapping = {};
        if(options.hasOwnProperty('items')){
            options.items.map(function(item){
                id_mapping[item.id] = item;
            });
        }
        return function (req, res){
            var id = req.params.id || '';
            if(id && id_mapping[id]){
                item = id_mapping[id];
                item.active = active;
                var msg = JSON.stringify(item, null, 4);
                console.log(msg);
                res.end(msg);
            }else{
                res.end('no zuo no die!');
            }
        };
    }

    var app = express();
    app.use(express.favicon());
    app.use(express.compress());
    app.use(express.router);

    app.get('/start/:id', control(true));
    app.get('/stop/:id', control(false));
    return app;
};