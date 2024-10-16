import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function Todo(props) {
  return (
    <div>
        <Alert key='success' variant='success'>
          {props.data}
        </Alert>
    </div>
  )
}
