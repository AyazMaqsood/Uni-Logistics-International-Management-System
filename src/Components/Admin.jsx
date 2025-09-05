import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-wrap m-3">
        <Link to="/" className="btn btn-dark m-2 text-decoration-none">
          Home
        </Link>
        <Link
          to="/adminnewshipment1"
          className="btn btn-dark m-2 text-decoration-none"
        >
          Ship
        </Link>
        <Link
          to="/trackorderpage"
          className="btn btn-dark m-2 text-decoration-none"
        >
          Track
        </Link>
        <Link to="/profile" className="btn btn-dark m-2 text-decoration-none">
          Profile
        </Link>
      </div>

      <h3 className="m-4">Admin Dashboard</h3>
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
              <td>Ali Khan</td>
              <td>ADM12345</td>
              <td>5 Sep 2025</td>
              <td>10 Sep 2025</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>Sara Malik</td>
              <td>ADM67890</td>
              <td>6 Sep 2025</td>
              <td>12 Sep 2025</td>
              <td>Shipped</td>
            </tr>
            <tr>
              <td>Bilal Ahmed</td>
              <td>ADM54321</td>
              <td>7 Sep 2025</td>
              <td>13 Sep 2025</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>Hina Tariq</td>
              <td>ADM98765</td>
              <td>8 Sep 2025</td>
              <td>14 Sep 2025</td>
              <td>Out for delivery</td>
            </tr>
            <tr>
              <td>Zeeshan Raza</td>
              <td>ADM11122</td>
              <td>9 Sep 2025</td>
              <td>15 Sep 2025</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
