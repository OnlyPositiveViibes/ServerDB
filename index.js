const mysql = require('mysql2/promise');
const db = require('./lib/db');
const server = require('./lib/server.js');

const app = {};

app.init = async () => {
    // pasiruosti pradinius folder'ius
    // pasiruosti pradinius failus
    // prisijungti prie DB
    const connection = await db.init( config.db);
    
    // uzkurti serveri
    server.init(connection);
};

app.init();

module.exports = app;