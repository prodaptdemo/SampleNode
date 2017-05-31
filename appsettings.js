"use strict";
var appsettings = appsettings || {};
(function (settings) {
    settings.Config = {
        DBConnection: {
            host: "'"+process.env.MYSQL_HOST+"'",
            user: "'"+process.env.MYSQL_USER+"'",
            password: "'"+process.env.MYSQL_PASS+"'",
            database: 'microdb'
        }
    };
} (appsettings));
module.exports = appsettings;
