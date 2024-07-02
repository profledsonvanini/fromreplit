// Import CJS
const fs = require("fs");
const path = require("path");
const http = require("http");
const { error } = require("console");

// console.log(error)

// fs.readFile('./fisfedles/index.html', function(err, data){
//   try {
//     console.log(data.toString());
//   } catch(err) {
//     console.log("Erooou!: "+ err);
//   }
// })

// fs.readFile(path.join(__dirname, "files", "index.html"), (__dirname, file) => {
//   try {
//     console.table("this is awesome");
//     console.log(file.toString());
//   } catch (error) {
//     console.log("Erooou!: " + error);
//   }
// });
fs.createReadStream