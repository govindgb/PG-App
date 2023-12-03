const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root', // Replace with your username
  password: '', // Replace with your password
  database: 'pg_app' // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
  )
`;

// Execute the query to create the table
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error('Error creating table: ', error);
    return;
  }
  console.log('Users table created successfully');
});
