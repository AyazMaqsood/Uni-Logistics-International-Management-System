import React from "react";
import { Link } from "react-router-dom";

export default function NewShipmentStep2() {
  return (
    <div className="container mt-4">
      <h3>New Shipment - Details</h3>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">What are the contents?</label>
          <div>
            <input type="radio" name="contents" /> Documents
            <input type="radio" name="contents" className="ms-3" /> Package
          </div>
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Additional details"
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Select Packaging</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter packaging type"
          />
        </div>
      </form>

      <div className="text-end">
        <Link to="/newshipmentstep3" className="btn btn-dark">
          Next
        </Link>
      </div>
    </div>
  );
}
