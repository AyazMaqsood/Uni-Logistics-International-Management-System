import React from 'react'
import { Link } from 'react-router-dom'

export default function Trackorderpage() {
  return (
    <div>
      
      <div className="container trackpage-1 pt-5 ">
        <p className='fw-bold ps-2'>
        Shipment # <br />
        CR9876543234567
      </p>
      <hr className='border-dark border-4' />
      <div className=" d-flex justify-content-start gap-5 align-items-center ps-5">
        <div className="track-box bg-dark">.</div>
        <p className='fw-bold'>
        Deliver Successful.
        <br />
        Destination Country/Region : UK
        <br />

        Shipment Number : CR98765434567
        <br />
        Date : Thus,v 22/07/2022
        <br />
        Time: 12:56 PM
      </p></div>
      <hr className='border-dark border-4' />

      </div>


    </div>
  )
}
