//16 creation of web server
// const http = require('http');

// const server= http.createServer((req,res)=>{
//     res.end('Hello From the other side');

// });

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log('Listening to the port number 8000');
// });


//17


// const http = require('http');

// const server= http.createServer((req,res)=>{
//     console.log(req.url);
//     res.end('Hello From the other side');

// });

// server.listen(8000, "127.0.0.1", ()=>{
//     console.log('Listening to the port number 8000');
// });



const http = require('http');
const fs = require('fs');


const server= http.createServer((req,res)=>{
    if(req.url== "/"){
        res.end('Hello From the other side');
     }
     else if (req.url=="/about")
     {
         res.end("Hello from the aboutus side")
     }

     else if (req.url=="/contact")
     {

         res.end("Hello from the contact side")
     }
     else if (req.url=="/userapi")      // 19
     {
         fs.readFile(`${__dirname}userapi/api.json`,'utf-8',(err,data)=>{
             console.log(data);
             const objdata=JSON.parse(data);
             res.end(objdata[0].name);
            // res.end(data)
         });
         
        
     }
     else{
          res.writeHead(404,{"content-type": "text/html"});
         res.end("<h1>404 error page, Page does not exist</h1>")
     }

   });

server.listen(8000, "127.0.0.1", ()=>{
    console.log('Listening to the port number 8000');
});


