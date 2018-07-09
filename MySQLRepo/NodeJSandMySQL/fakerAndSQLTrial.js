// importing faker package (to generate fake emails, usernames, etc.
// for our trial databases)
// also importing mysql package so we can interact with databases

var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    database: 'join_us',
    password: process.argv[2]
})

// selecting data
// // trying out MySQL connection
// var q = 'SELECT COUNT(*) FROM users';

// // opening MySQL query connection
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// inserting data (part 1)
// // trying out MySQL connection
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';

// // opening MySQL query connection
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// // inserting data (part 2, with faker)
// // trying out MySQL connection
// var person = {email: faker.internet.email()};

// var q = 'INSERT INTO users SET ?'

// // opening MySQL query connection
// connection.query(q, person, function (error, results) {
//   if (error) throw error;
//   console.log(results);
// });

// inserting data (part 3, in bulk)
var data = [];

for(var i=0; i<10; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

//console.log(data);

var q = 'INSERT INTO users (email, created_at) VALUES ?'

// opening MySQL query connection
connection.query(q, [data], function (error, results) {
  if (error) throw error;
  console.log(results);
});

// closing query connection
connection.end()