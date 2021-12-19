const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000
const path = require("path")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactJiu')
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"));
db.once('open', function () {
    console.log("We are connected bro");
})

const contactSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String
});

const Contact = mongoose.model("Contact", contactSchema)

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

// console.log(__dirname);
console.log(path.join(__dirname, "/public", "indexSign.html"))

const staticPath = path.join(__dirname, "index.html")


// app.use(express.static("indexSign"));
// app.use(express.static(path.join(__dirname, "/public",  "indexSign.html" )));

//  app.use(express.static(staticPath));

// // console.log(staticPath);
//  console.log(path.join(__dirname, "/public", "indexSign.html"));
//  console.log(path.join(__dirname, "/public"));

app.get('/', (req, res) => {
    //     // const data = fs.readFileSync('indexSign.html');
    //     // res.send(data.toString());
    //     // res.send('indexSign.html')
    //     // res.sendFile(path.join(__dirname, "/public"))
    //     // res.sendFile(staticPath)
    //    app.use(express.static(path.join(__dirname, "/public")));
    //     // res.send("Hello")
    res.sendFile(staticPath);
})

app.post('/indexSign.html', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database");
    })
})

// app.get('/about', (req, res) => {
//     res.send('<h1> About Server </h1> <p> this is  about</p>')
// })

// app.get('/signin', (req, res) => {
//     // res.send('<h1> First Server </h1> <p> this  is first </p>')
//      const data = fs.readFileSync('indexSign.html');
//      res.send(data.toString());
//     res.send('indexSign.html')
// })

// app.get('', (req, res) => {
//     res.end('<h1> Not Found </h1> <p> this is Not Found</p>')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})