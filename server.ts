// eslint-disable-next-line @typescript-eslint/no-require-imports
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Path to your db.json file
const middlewares = jsonServer.defaults();

// Apply default middlewares (e.g., CORS, logging)
server.use(middlewares);

// Add a delay to all responses
server.use((req, res, next) => {
  setTimeout(() => next(), 1000); // Delay all responses by 1 second
});

// Use the router
server.use(router);

// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});