import http  from "http";

const port = process.env.port || 8000;

const server = http.createServer((req,res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>sadasdasdcasrgvdvfdv</h1><p>adassacsdvsdv</p>')
})
server.listen(port,()=> {
   console.log(`server is listening on port ${port}`);
})