"use strict";
var appsettings = appsettings || {};
(function (settings) {
    settings.Config = {
        DBConnection: {
            host: '192.168.54.186',
            user: 'test',
            password: 'test',
            database: 'microdb'
        }
    };
} (appsettings));
module.exports = appsettings;