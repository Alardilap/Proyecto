
const express = require("express");
const app = express();
const PORT = 3001;
const router = require("./routes/index");
const morgan= require("morgan");
const cors= require("cors")


app.use(cors());
app.use("/rickandmorty",router);
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, (res) => {
    
  console.log('Server raised in port: ' + PORT);
});



