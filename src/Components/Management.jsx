import React from "react";
import { Link } from "react-router-dom";

export default function Management() {
  return (
    <div className="container-fluid">
     
      <div className="d-flex flex-wrap m-3">
        <Link to="/" className="btn btn-dark m-2 text-decoration-none">Home</Link>
        <Link to="/managementnew1" className="btn btn-dark m-2 text-decoration-none">Ship</Link>
        <Link to="/trackorderpage" className="btn btn-dark m-2 text-decoration-none">Track</Link>
        <Link to="/profile" className="btn btn-dark m-2 text-decoration-none">Profile</Link>
      </div>

      
      <h3 className="m-4">Shipments Dashboard</h3>
      <p className="m-4">Displaying 1–5 of 5 results</p>

      
      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Shipment</th>
              <th>Order Date</th>
              <th>Exp. Delivery Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Smith</td>
              <td>FGR6151FR9</td>
              <td>7 sep 2025</td>
              <td> 16 sep 2025</td>
              <td>Out for delivery</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>TY0562EES</td>
              <td> 3 sep 2025</td>
              <td>17 sep 2025</td>
              <td>Out for delivery</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>ER56148RT3</td>
              <td>7 sep 2025</td>
              <td> 17 Sep 2025</td>
              <td>Out for delivery</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>GD5651DF5</td>
              <td>7 April 2022</td>
              <td>7 April 2022</td>
              <td>Deliverd </td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>GD5651DF5</td>
              <td>7 April 2022</td>
              <td>7 April 2022</td>
              <td>Deliverd</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
