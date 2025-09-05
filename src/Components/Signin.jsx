import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
      <div className="w-100 mt-5">
        <div className="sign-cont w-50 m-auto bg-secondary  text-center pt-3">
          <input type="text" placeholder="Username" className="m-3" />
          <br />
          <input type="text" placeholder="Password" className="m-3" />
          <br />
          <div className="sigin-box mt-2">
             <small className="" style={{color:"white"}}>
            This Account is Used by:
        </small>
        <select className='ms-3' name="" id="">
            <option value="" >Customer</option>
            <option value="">Admin</option>
        </select>
        <br />
         <p>
          New User ? <button className="mt-4 " style={{}}><Link to="/signup" className="text-black text-decoration-none">Create Account</Link></button>
         </p>
          <button className="btn btn-dark mt-5 me-auto">
            <Link to="/profile" className="text-white text-decoration-none">
              Login
            </Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
