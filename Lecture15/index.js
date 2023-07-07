const http = require('http');
const fs = require('fs');

 

 const home = fs.readFileSync('index.html');
 const about = fs.readFileSync('./about.html');
 const help = fs.readFileSync('./help.html');
 const contact = fs.readFileSync('./contact.html');
 
 const server = http.createServer((req, res)=>{
     console.log(req.url);
     url = req.url;
     res.setHeader('Content-Type', 'text/html');
    if(url== '/'){
        res.end(home);

    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/help'){
        res.end(help);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode= 404;
        res.end("<h2>404 not found</h2>")
    }
  })
  server.listen(3000, '127.0.0.1', ()=>{
console.log(`Server running at http://127.0.0.1:3000`);
  });