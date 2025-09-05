import React from 'react'
import { Link } from 'react-router-dom'

export default function Landingpage() {
  return (
    <div>
     <p className='w-75 mx-auto mt-5 ' style={{display:"flex",justifyContent:"flex-end"}}>
        <p className='btn-dark px-4 m-2'><Link to="/signup" className='text-decoration-none fs-4 text-black '>Sign In</Link></p>
     </p>
     <div className="container-fluid" style={{height:"100vh",backgroundColor:"#D9D9D9"}}> 
       <div className="container land-cont mt-3 d-flex align-items-center gap-2"> 
              <input type="text" placeholder='Enter Your Tracking Number' /> <button className='btn btn-dark px-4'><Link to="/trackorderpage" className='text-decoration-none fs-4 text-white'>Track </Link></button>
           </div>
     </div>

     
    </div>
  )
}
