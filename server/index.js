import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import Grid from 'gridfs-stream';
import {GridFsStorage} from 'multer-gridfs-storage';

const app= express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Hello to Ratna Supermarket API');
});

mongoose.connect('mongodb+srv://brutally:minavk@cluster0.cqilznl.mongodb.net/') // Replace with connection string from environment variable
  .then(() => {
    console.log('MongoDB Connected');
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
  })
  .catch(err => console.log(err));

let gfs;

mongoose.connection.once('open', () => {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);
});

const storage = new GridFsStorage({
  url: 'mongodb+srv://brutally:minavk@cluster0.cqilznl.mongodb.net/', // Replace with your MongoDB connection URL
  file: (req, file) => ({
    filename: req.file.originalname,
    metadata: { /* Add any additional metadata if needed */ }
  })
});
const upload = multer({ storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const writestream = gfs.createWriteStream({
    filename: req.file.originalname
  });

  writestream.write(req.file.buffer);

  writestream.on('close', (file) => {
    res.status(200).send('File uploaded successfully.');
    writestream.close(); // Explicitly close the stream
  });

  writestream.on('error', (err) => {
    console.error('Error uploading file:', err.message); // Log specific error message
    res.status(500).send('Error uploading file.');
  });

  writestream.end();
});


app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'File not found' });
    }
    const readstream = gfs.createReadStream(file.filename);
    readstream.pipe(res);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
});