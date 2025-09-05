import React from 'react'
import { Link } from 'react-router-dom'

export default function Customer() {
  return (
    <div className="container-fluid">
     
      <div className="d-flex flex-wrap m-3">
        <Link to="/" className="btn btn-dark m-2 text-decoration-none">Home</Link>
        <Link to="/newshipmentstep1" className="btn btn-dark m-2 text-decoration-none">Ship</Link>
        <Link to="/trackorderpage" className="btn btn-dark m-2 text-decoration-none">Track</Link>
        <Link to="/profile" className="btn btn-dark m-2 text-decoration-none">Profile</Link>
      </div>

      
      <p className="m-4">
        Welcome back, Customer
        <br /><br />
        My Shipments 
        <br /><br />
        Displaying 1-5 of 5 results
      </p>

     
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Ali</td>
              <td>0300-1234567</td>
              <td>Lahore</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ahmed</td>
              <td>0301-9876543</td>
              <td>Karachi</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ali</td>
              <td>0300-1234567</td>
              <td>Lahore</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ahmed</td>
              <td>0301-9876543</td>
              <td>Karachi</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Hamza</td>
              <td>0300-1234567</td>
              <td>Lahore</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
