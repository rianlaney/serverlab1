const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
//body

app.get('/api/users', (req, res)=>{
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends)
})

app.get('/weather/:temperature', (req, res)=>{
    const phrase = `<h3>It was ${req.params.temperature} today </h3>`;
    res.status(200).send(phrase)
}) //weather???



//body
app.listen(4000, ()=>console.log(`server is live on port 4000`))


// step two: npm init -y
// step three run nodemon "whateverfile.js"