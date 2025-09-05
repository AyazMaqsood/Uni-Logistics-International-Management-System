import React from "react";
import { Link } from "react-router-dom";

export default function Driver() {
  return (
    <div className="container-fluid">
      
      <div className="d-flex flex-wrap m-3">
        <Link to="/" className="btn btn-dark m-2 text-decoration-none">Home</Link>
        <Link to="/customer" className="btn btn-dark m-2 text-decoration-none">Customer</Link>
        <Link to="/trackorderpage" className="btn btn-dark m-2 text-decoration-none">Track</Link>
        <Link to="/profile" className="btn btn-dark m-2 text-decoration-none">Profile</Link>
      </div>

      
      <p className="m-4">
        Welcome back, Driver
        <br /><br />
        My Deliveries
        <br /><br />
        Displaying 1-5 of 5 results
      </p>

    
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Pickup</th>
              <th>Dropoff</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>Ali</td>
              <td>Lahore</td>
              <td>Karachi</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>102</td>
              <td>Ahmed</td>
              <td>Multan</td>
              <td>Islamabad</td>
              <td>In Transit</td>
            </tr>
            <tr>
              <td>103</td>
              <td>Hamza</td>
              <td>Faisalabad</td>
              <td>Lahore</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>104</td>
              <td>Khizar</td>
              <td>Peshawar</td>
              <td>Lahore</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>105</td>
              <td>Sheryiyar</td>
              <td>Khanewal</td>
              <td>Lahore</td>
              <td>Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
