
// Importing required modules
const http = require('http');

// Define your name
const myName = "Aditya Kashyap";

// Create a server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Log your name to the console
  console.log(myName);

  // Send your name as the response
  res.end(myName);
});

// Set the port to 4000
const PORT = 4000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});