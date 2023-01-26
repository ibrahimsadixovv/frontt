
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  axios from 'axios'

function Detail() {

  const [detail, setProduct] = useState({})
  const params = useParams()

  useEffect(() => {
    const id = params.id

    axios.get("http://localhost:5000/" + id).then(response => {
      setProduct(response.data)
    })

  })

  return (
    <div className='openCard'>
       fgfsd

     
    </div>
  );
}

export default Detail;