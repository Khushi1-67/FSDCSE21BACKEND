const fs = require ("fs");
fs.writeFile("student.txt", 'Name: Rahul \nRoll No. 101');
console.log("file created successfully");
let data = fs.readFileSync("student.txt", "utf-8");
console.log(data);
fs.appendFile("student.txt", "\nClass: b.tech cse");
console.log ("\n file updated successfully");