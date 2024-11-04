require('dotenv').config();

const express = require('express');
const path = require('path');
const { Pool } = require('pg');
const app = express();

const PORT = process.env.PORT || 3000;

// Set up PostgreSQL connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Query the database and print 5 names to the console
async function printNames() {
    try {
        const result = await pool.query('SELECT name FROM people LIMIT 5');
        const names = result.rows.map(row => row.name);
        console.log("Names from database:", names);
    } catch (error) {
        console.error("Error querying database:", error);
    }
}

// Call printNames when the server starts
printNames();

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
