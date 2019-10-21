let DBToConnet = "";
const dotenv = require('dotenv');
dotenv.config();

if(process.env.NODE_ENV==="production") {
  DBToConnet = require('knex')({
    client: 'pg',
    connection: {
      connectionString : process.env.DATABASE_URL,
      ssl : true
    }
  });
} else if(process.env.NODE_ENV==="test") {
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