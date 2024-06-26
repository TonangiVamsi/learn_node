const http = require("http")

const server=http.createServer((req,res)=>{
    if(req==="/"){
        res.end('welcome to homepage')
    }
    else if(req==="/about"){
        res.end('welcome to about page')
    }
    else{
        res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
    }
})