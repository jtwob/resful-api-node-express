const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const clientRoutes = require("./routes/clientRoutes");
const app = express();
const PORT = 8080;

//set up to receive JSON and string data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes as middleware

//client routes
app.use("/", clientRoutes);

//api routes
app.use("/api", apiRoutes);

//server listening
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
