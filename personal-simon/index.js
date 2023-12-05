const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const DB = require('./mongo-index.js');
const { peerProxy } = require('./peerProxy.js');
const WebSocket = require('ws')
const { peerProxy } = require('./peerProxy.js');

app.use(express.static("public"));

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Initialize scores
let scores = [];

// GetScores
apiRouter.get('/scores', (_req, res) => {
  res.send(scores);
});

// SubmitScore
apiRouter.post('/score', (req, res) => {
  scores = updateScores(req.body, scores);
  res.json(scores); // Send the updated scores as a response
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

async function loadScores() {
    const response = await fetch("/api/scores");
    const scores = await response.json();
};
  
    // Modify the DOM to display the scores


// function updateScores(newScore, existingScores) {
//   // Implement logic to update scores array based on new score
//   // For example, you might push the new score to the array
//   existingScores.push(newScore);
//   return existingScores;
// }