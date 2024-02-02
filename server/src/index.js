const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require("../emer1-29456-firebase-adminsdk-c8u1s-e3947fe53c.json");

const app = express();
const port = 3000;

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://emer1-29456-default-rtdb.asia-southeast1.firebasedatabase.app'
});

const db = admin.database();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());

// API Endpoint to handle signup
app.post('/signup', (req, res) => {
  const { name, email, password, sex, dateOfBirth } = req.body;

  // Validate the data
  if (!name || !email || !password || !sex || !dateOfBirth) {
    return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  // Save data to Firebase Realtime Database
  var usersRef = db.ref('users');
  usersRef.push({
    name,
    email,
    password,
    sex,
    dateOfBirth
  });

  return res.status(200).json({ success: true });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
 