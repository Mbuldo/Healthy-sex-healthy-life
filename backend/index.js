const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for the educational content page
app.get('/education', (req, res) => {
  res.sendFile(__dirname + '/public/education.html');
});

// Route for the symptom checker page
app.get('/symptoms', (req, res) => {
  res.sendFile(__dirname + '/public/symptoms.html');
});

// Route for the quiz page
app.get('/quiz', (req, res) => {
  res.sendFile(__dirname + '/public/quiz.html');
});

// Route for the resources page
app.get('/resources', (req, res) => {
  res.sendFile(__dirname + '/public/resources.html');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
