const fs = require("fs");

fs.writeFileSync("notes.txt","This file was created by NodeJs\n");
fs.appendFileSync("notes.txt","Second line appended to file.")