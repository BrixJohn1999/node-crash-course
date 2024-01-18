const fs = require("fs");


// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString())
// })
// console.log('last line')


// writing files
fs.writeFile('./docs/blog1.txt', 'helloWorld 123', () => {
    console.log('file was written')

})

// directories

// deleting files

https://youtu.be/OIBIXYLJjsI?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=1471