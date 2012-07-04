exports.index = function(req, res){

    var data = require('../data/people.js');

    res.render('index', { title: 'Croydon Creatives Directory',people: data.people })
};