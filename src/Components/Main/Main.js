import React from 'react'
import './Main.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';


export default function Main() {
  return (
    <div className='mainMain'>
        <NavBar/>

        <h3 className='mainTask'>Enter Task: </h3>
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        
      }}
      className='mainInput'
    >
      <TextField fullWidth label="Click to Type !" id="fullWidth" />
    </Box>
    <Button variant="contained" className='btn2'>Add Tasks !</Button>
    </div>
  )
}
