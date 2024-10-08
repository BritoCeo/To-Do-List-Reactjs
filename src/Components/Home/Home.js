import React from 'react'
import './Home.css'
//import mtcLogo from '../images/mtc_logo.png'
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import mtcLogo from '../images/mtc_logo.png'

export default function Home() {
    const [isLoading, setLoading] = useState(false);
    
    const navigate=useNavigate()

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className='mainHome'>
        <h1 className='headingHome'>
            Welcome Blue Abassadors to your Tasks App !
        </h1>
        <img src={mtcLogo} alt='mtc logo' className='logoMTC'/>
        <Button
        variant="light"
        disabled={isLoading}
        //onClick={()=>{navigate('/main')} }
        onClick={isLoading ? handleClick : ()=>{navigate('/main')} }
        className='btn1'
        >
        {isLoading ? 'Loading…' : 'Click for Tasks !'}
        </Button>

    </div>
  )
}
