// Import the createServer function from the http module
import { createServer } from "http";

// Create a new HTTP server
const server = createServer((req, res) => {
    // Check the URL of the request and respond accordingly
    if (req.url === '/') {
        res.end("Hello This is Home"); // Respond with "Hello This is Home" for the root URL
    } else if (req.url === '/about') {
        res.end("Hello This is About"); // Respond with "Hello This is About" for the /about URL
    } else {
        res.end("Page Not Found"); // Respond with "Page Not Found" for any other URL
    }
});

// Make the server listen on port 8000
server.listen(8000, () => {
    console.log("Listening on default port 8000"); // Log a message when the server starts listening
});

// Now go to your browser and hit localhost:8000, you'll see the results