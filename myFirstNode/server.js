const http = require('http')
const fs = require('fs')
const port = 8090
const path = require('path')



    http.createServer(function(req,res){

        const read = getFilePath(req.url)
        console.log(read)

        if(read != undefined){
        fs.readFile(read, function(err, html){
            if (err) throw err

        res.writeHeader(200, {'content-type': 'text-html'})
        res.write(html)
        res.end()
        
        })}
    }).listen(port)


    function getFilePath(url){

        const basePath = '.'

        console.log(url)
    
        switch(url){
    
            case '/':
            return path.join(basePath, '/index.html');;
    
            case '/about':
            return path.join(basePath, '/about.html');
    
            case '/contact-me':
            return path.join(basePath, '/contact-me.html');

            default:
            return path.join(basePath, '/404.html');
        }
    
    }