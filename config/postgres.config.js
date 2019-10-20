let DBToConnet = "";

if(process.env.NODE_ENV==="prod") {
  DBToConnet = require('knex')({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl : true
    }
  });
} else {
  DBToConnet = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : 'hospital-appointment-booking'
    }
  });
}

const DB = DBToConnet;

module.exports = DB;