import express from 'express';
import http from 'http';
import path from 'path';

const app=express();
const __dirname=path.resolve();
const server=http.createServer(app);
const port=process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});


server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

