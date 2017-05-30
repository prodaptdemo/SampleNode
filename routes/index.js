
/*
 * GET home page.
 */
var mysql = require('mysql'),
    util=require('util'),
    settings = require('../appsettings').Config;

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};
exports.insertcontact = function (req, res) {
    var db = mysql.createConnection(settings.DBConnection);
    db.connect();
    db.query(util.format('CALL sp_insertcontact("%s","%s","%s");', req.body.name, req.body.location, req.body.phone), function (er, r, f) {       
        if (er) {
            res.json({ status: false, message: er });
        }
        else {
            db.query(util.format('CALL sp_getcontacts();'), function (e, rw, ft) {
                db.destroy();
                if (e) {
                    res.json({ status: true, message: 'Contact Inserted. Not able to fetch',data:[] });
                }
                else {
                    res.json({ status: true, message: 'Contact Inserted.',data:rw[0] });
                }
            });           
        }
    });    
};
exports.getcontacts = function (req, res) {
    var db = mysql.createConnection(settings.DBConnection);
    db.connect();
    db.query(util.format('CALL sp_getcontacts();'), function (e, rw, ft) {
        db.destroy();
        if (e) {
            res.json({ status: true, message: 'Contact Inserted. Not able to fetch', data: [] });
        }
        else {
            res.json({ status: true, message: 'Contact Inserted.', data: rw[0] });
        }
    });
};
