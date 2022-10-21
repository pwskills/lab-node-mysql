// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'abc',
  password: 'password'
});

const dumpData = () => {
  return new Promise(resolve => {
    connection.query('select * from sample.sample', (err, results)=> {
      if(results.length === 0) {
        connection.query('insert into sample.sample values(1,"sample")', (err, res)=> {
          console.log(err, res)
          resolve();
        })
      }
    })
  })
}

connection.query('CREATE DATABASE IF NOT EXISTS sample', async() => {
  console.log('DB INITIALIZED')

  connection.query('CREATE TABLE IF NOT EXISTS sample.sample (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))');

  console.log('TABLE CREATED');

  await dumpData();

  process.exit(0);
});
