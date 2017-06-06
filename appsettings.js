"use strict";
var appsettings = appsettings || {};
(function (settings) {
    settings.Config = {
        DBConnection: {
            host: process.env.SQLDEV_DOMAINNAME,
            user: process.env.SQLDEV_DBUSERNAME,
            password: process.env.SQLDEV_DBPASSWORD,
            database: 'microdb'
        }
    };
} (appsettings));
module.exports = appsettings;
