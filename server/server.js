const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser'); 


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.post('/api', (req, res) => {
    let data = req.body.data
    console.log(data)
})

app.listen(5000, () => console.log("Running on 5000"))
