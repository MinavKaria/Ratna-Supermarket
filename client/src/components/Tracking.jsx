import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from 'react';

const steps = [
  'Payment Successful',
  'Order Received',
  'Order Shipped',
  'Order Delivered',
];

 function Tracking() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <>
       <div className='container mx-auto mt-44 '>
            <h1 className='px-[11rem] text-4xl mb-14 font-bold'>Order Tracking</h1>
            <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            </Box>
            <div className='container mx-auto hidden md:flex justify-center w-40 gap-52 mb-32 '>
                <img src="/delivery_1.svg" alt="" className={`${activeStep < 1 ? 'filter grayscale opacity-50' : ''}`}/>
                <img src="/delivery_2.svg" alt="" className={`${activeStep < 2 ? 'filter grayscale opacity-50' : ''}`} />
                <img src="/delivery_3.svg" alt="" className={`${activeStep < 3 ? 'filter grayscale opacity-50' : ''}`}/>
                <img src="/delivery_4.svg" alt="" className={`${activeStep <4 ? 'filter grayscale opacity-50' : ''}`}/>
            </div>

            <button className=' bg-red-600 px-3 text-white' onClick={()=>{
                setActiveStep((prevActiveStep) =>( prevActiveStep + 1))
            }}>Check</button>
        </div>
    </>
  );
}

export default Tracking;