import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../actions/CartControl';

function Orders() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const userID = user.uid;

                const response = await axios.get(`https://ratna-supermarket.vercel.app/allOrder/${userID}`, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET',
                        'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
                    }
                });
                const ordersGot = response.data;
                setOrders(ordersGot);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='mt-[120px] flex justify-center'>
                <div className='container w-1/2 shadow-lg p-4'>
                    <h2 className="text-2xl font-bold mb-4">Orders</h2>
                    {orders.map((order, index) => (
                        <div key={index} className="mb-4 border border-gray-300 p-4 flex justify-between">
                           <div>
                            <ul>
                                {order.order.map((item, itemIndex) => (
                                    <li key={itemIndex} className="mb-2">
                                        <span className="font-semibold">Product Name:</span> {item.productName}, 
                                        <span className="font-semibold"> Discount Price:</span> {item.discountPrice}, 
                                        <span className="font-semibold"> Count:</span> {item.count}
                                    </li>
                                ))}
                            </ul>
                            
                            <h3 className="text-sm font-semibold mb-2">Order ID: {order._id}</h3>
                            </div>
                            <div>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                             onClick={()=>{
                                navigate(`/tracking/${order._id}`);
                             }}>
                                Track
                            </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Orders;
