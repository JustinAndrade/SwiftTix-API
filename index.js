const server = require("./server/server");

const port = 5000;

server.listen(port, () => {
  console.log(`Server is currently listening on port ${port}`);
});
