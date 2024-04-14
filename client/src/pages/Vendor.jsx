
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Vendor() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/endpoint');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/endpoint', { data: formData });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='mt-[100px] flex w-full justify-center'>
      <div>
      <h1 className='text-center'>Vendor</h1>

      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input type="text" value={formData} onChange={handleChange} className=' border-r-4 ' />
        <button type="submit">Send Data to Backend</button>
      </form>
      </div>
      </div>
    </>
  );
}

export default Vendor;