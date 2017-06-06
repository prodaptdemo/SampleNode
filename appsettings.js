"use strict";
var appsettings = appsettings || {};
(function (settings) {
    settings.Config = {
        DBConnection: {
            host: process.env.DB6T_DOMAINNAME,
            user: process.env.DB6T_DBUSERNAME,
            password: process.env.DB6T_DBPASSWORD,
            database: 'microdb'
        }
    };
} (appsettings));
module.exports = appsettings;
