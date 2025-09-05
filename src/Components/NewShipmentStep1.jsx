import { Link } from "react-router-dom";

export default function NewShipmentStep1() {
  return (
    <div className="container mt-4">
      <h3>New Shipment - Address</h3>
      <div className="row mt-4">
        <div className="col-md-6">
          <h5>From</h5>
          <form>
            <input type="text" className="form-control mb-2" placeholder="Name" />
            <input type="text" className="form-control mb-2" placeholder="Country" />
            <input type="text" className="form-control mb-2" placeholder="Address" />
            <input type="email" className="form-control mb-2" placeholder="Email Address" />
            <div className="row">
              <div className="col"><input type="text" className="form-control mb-2" placeholder="Zip Code" /></div>
              <div className="col"><input type="text" className="form-control mb-2" placeholder="City" /></div>
              <div className="col"><input type="text" className="form-control mb-2" placeholder="State" /></div>
            </div>
          </form>
        </div>

        
        <div className="col-md-6">
          <h5>To</h5>
          <form>
            <input type="text" className="form-control mb-2" placeholder="Name" />
            <input type="text" className="form-control mb-2" placeholder="Country" />
            <input type="text" className="form-control mb-2" placeholder="Address" />
            <input type="email" className="form-control mb-2" placeholder="Email Address" />
            <div className="row">
              <div className="col"><input type="text" className="form-control mb-2" placeholder="Zip Code" /></div>
              <div className="col"><input type="text" className="form-control mb-2" placeholder="City" /></div>
              <div className="col"><input type="text" className="form-control mb-2" placeholder="State" /></div>
            </div>
          </form>
        </div>
      </div>
      <div className="text-end mt-3">
        <Link to="/newshipmentstep2" className="btn btn-dark">Next</Link>
      </div>
    </div>
  );
}
