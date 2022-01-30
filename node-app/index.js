const express = require('express');
const fs = require('fs');
const store = require('./store.json');

const app = express();
const port = 3500;

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
})
app.get("/", (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.send(
        "<h1>Server is running and ready!</h1>"
    );
}) 
// fs.readFile(hardwarePath, 'utf-8', (error, data) => {
//     console.log(data)
// })
// fs.readdir(store.drives, (error, files) => {
    // console.log(files)
// })
// console.log(store);