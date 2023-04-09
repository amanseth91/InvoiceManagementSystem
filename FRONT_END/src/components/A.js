import React, {useEffect,useState} from 'react'
import axios from 'axios'
function A() {
    const [display,setDisplay]=useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/highRadius/display`)
        .then(res =>{
            console.log(res)
            setDisplay(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
  return (
    <div>
        <ul>
            {display.map(post =>(
                <li key={post.sl_no}>{post.sl_no} {post.business_code}</li>
            ))}
        </ul>
    </div>
  )
}

export default A