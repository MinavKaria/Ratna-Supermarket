import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Order from './cartOrderSchema.js';
const app = express();
dotenv.config();
app.use(cors({
  origin: ['*', 'http://localhost:5173'],
  methods: 'GET,POST,PUT',
  allowedHeaders: 'Content-Type,Authorization',
}));


app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected successfully');
} catch (error) {
  console.error('Error in connecting to MongoDB:', error);
}

app.get('/', (req, res) => {
  res.send('Hello to Ratna Supermarket API');
});

app.post('/orderItems',async (req, res) => {
  
  console.log(req.body);
  const newOrder = new Order({
    id: req.body.id,
    order: req.body.order,
    date: new Date(),
    orderStage: 1,
    imageLink: req.body.imageLink
  });

  await newOrder.save();

  try {
    // Add your code here to handle the order request

    res.send('Order received successfully');
  } catch (error) {
    console.error(error); 
    res.status(500).send('Internal Server Error');
  }
});

app.get('/allVendor', async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/allOrder/:id', async (req, res) => {
  console.log('allOrder')
  try {
    const orders = await Order.find({ id: req.params.id });
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.put('/updateStage/:id', async (req, res) => {
  console.log(req.body);
  try {
    const order = await Order.findOne({ _id: req.params.id });
    if (!order) {
      return res.status(404).send('Order not found');
    }
    order.orderStage = req.body.orderStage;
    await order.save();
    res.status(200).send('Order stage updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/order/:id', async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.id });
    if (!order) {
      res.status(404).send('Order not found');
    }
    res.send(order);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
