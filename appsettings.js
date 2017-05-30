"use strict";
var appsettings = appsettings || {};
(function (settings) {
    settings.Config = {
        DBConnection: {
            host: '192.168.54.186',
            user: 'root',
            password: 'password',
            database: 'microdb'
        }
    };
} (appsettings));
module.exports = appsettings;