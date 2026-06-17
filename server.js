import express from 'express';
import mysql from 'mysql2';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// 1. Setup MySQL Connection Pool
const db = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',            
    database: 'CONTACT', // Changed to lowercase to resolve the Windows MySQL match error
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test Database Connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Connected to MySQL Database successfully.');
    connection.release();
});

// 2. Setup Nodemailer Email Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yayaafeez197@gmail.com',
        pass: 'jmcnrokgcnsxyecv' 
    }
});

// 3. The Contact Form Route
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const sqlQuery = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";
    
    db.query(sqlQuery, [name, email, message], (dbErr, result) => {
        if (dbErr) {
            console.error('Database insertion error:', dbErr);
            return res.status(500).json({ error: 'Failed to save message to database' });
        }

        const mailOptions = {
            from: 'yayaafeez197@gmail.com',
            to: 'yayaafeez197@gmail.com', 
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new contact submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        transporter.sendMail(mailOptions, (mailErr, info) => {
            if (mailErr) {
                console.error('Email sending error:', mailErr);
                return res.status(200).json({ 
                    message: 'Message saved to database, but email notification failed.' 
                });
            }

            console.log('Notification email sent: ' + info.response);
            res.status(200).json({ message: 'Message saved and email sent successfully!' });
        });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});