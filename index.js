const express = require ('express')
const PORT = 5000;

const app = express();
app.use(express.json())//parse json
app.get("/",(req,res) => {
    res.send("Hello world  to the era")
})

app.listen(PORT, ()=> {
    console.log(`success,running in http://localhost:${PORT}`)
})