import React from "react";
import { Link } from "react-router-dom";

export default function NewShipmentStep3() {
  return (
    <div className="container mt-4">
      <h3>New Shipment - Payment</h3>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Schedule a date for shipment</label>
          <input type="date" className="form-control" />
        </div>
        <p>The shipment will be delivered on 10 sep 2025</p>
        <div className="mb-3">
          <label className="form-label">Select mode of payment</label>
          <select className="form-select">
            <option>Cash on Delivery</option>
            <option>Credit Card</option>
            <option>Bank Transfer</option>
          </select>
        </div>
      </form>
      <div className="text-end">
        <Link to="/confirmed" className="btn btn-dark">Confirm</Link>
      </div>
    </div>
  );
}
