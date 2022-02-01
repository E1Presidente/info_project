const express = require('express');
const cors = require('cors');
const fs = require('fs');
const store = require('./store.json');


const app = express();
const port = 3500;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
})
app.get("/", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    response.send(
        "<h1>Server is running and ready!</h1>"
    );
});
app.post("/", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "*");
    console.log(request.body);
});
// fs.readFile(hardwarePath, 'utf-8', (error, data) => {
//     console.log(data)
// })
// fs.readdir(store.drives, (error, files) => {
    // console.log(files)
// })
// console.log(store);