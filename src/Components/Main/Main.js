import React, { useState } from 'react'
import './Main.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavBar from '../NavBar/NavBar';
import Button from '@mui/material/Button';
import Todo from '../Todo/Todo';


export default function Main() {
const [items, setItems]=useState(["Get Money","Learn More","Knowlwdge is Power"])
const [item, setItem]=useState()

const addItem=(iteminput)=>{
const newItems=[...items,iteminput]
setItems(newItems)
}
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
      <TextField fullWidth label="Click to Type !" id="fullWidth" onChange={(e)=>{setItem(e.target.value)}}/>
    </Box>
    <Button variant="contained" className='btn2' onClick={(e)=>{addItem(item)}}>Add Tasks !</Button>
    <div className='items'>
      {items.map((item)=>{
        return(
          <Todo data={item}/>
        )
      })}
    </div>
    </div>
  )
}
