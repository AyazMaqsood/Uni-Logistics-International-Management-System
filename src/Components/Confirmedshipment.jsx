import React from "react";
import { Link } from "react-router-dom";

export default function Confirmedshipment() {
  return (
    <div className="container mt-5 text-center">
      <h3>Shipment Confirmed</h3>
      <p>Pickup is scheduled for 10 sep 2025 and delivery on 16 sep 2025</p>
      <Link to="/customer" className="btn btn-dark mt-3">
        View All Shipments
      </Link>
    </div>
  );
}
