import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='text-center mt-5'>
     <h3>
        Welcome
     </h3>
     <h3>
        Who you are ?
     </h3>
     <div className=" mt-5">
        <button className='btn btn-dark w-25 mb-2'><Link  className='text-decoration-none w-100' to="/Customer">Customer</Link></button>
     <br />
     <small>OR</small>
     <br />
     <button className='btn btn-dark w-25 mt-2 mb-2'><Link className='text-decoration-none w-100' to="/admin">Admin</Link></button>
     <br />
     <small>OR</small>
     <br />
     <button className='btn btn-dark w-25 mt-2'><Link className='text-decoration-none 100' to="/driver">Driver</Link></button>
     <br />
     <small>OR</small>
     <br />
     <button className='btn btn-dark w-25 mt-2'><Link className='text-decoration-none 100' to="/management">Management</Link></button>
     </div>
    </div>
  )
}
