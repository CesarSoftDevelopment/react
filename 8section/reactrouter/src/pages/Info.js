import React from 'react'
import { useParams } from 'react-router-dom';

const Info = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>More information about the product: {id}</h1>
    </div>
  )
}

export default Info