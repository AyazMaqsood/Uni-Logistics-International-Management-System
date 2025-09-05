import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "react-icons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./Components/Landingpage.jsx";
import Trackorderpage from "./Components/Trackorderpage.jsx";
import Signup from "./Components/Signup.jsx";
import Signin from "./Components/Signin.jsx";
import Profile from "./Components/Profile.jsx";
import Customer from "./Components/Customer.jsx";
import NewShipmentStep1 from "./Components/NewShipmentStep1.jsx";
import NewShipmentStep2 from "./Components/NewShipmentStep2.jsx";
import NewShipmentStep3 from "./Components/NewShipmentStep3.jsx";
import Confirmedshipment from "./Components/Confirmedshipment.jsx";
import Driver from "./Components/Driver.jsx";
import Management from "./Components/Management.jsx";
import Managementnew1 from "./Components/Managementnew1.jsx";
import Managementnew2 from "./Components/Managementnew2.jsx";
import Admin from "./Components/Admin.jsx";
import AdminNewShipment1 from "./Components/AdminNewShipment1.jsx";
import AdminNewShipment2 from "./Components/AdminNewShipment2.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/trackorderpage" element={<Trackorderpage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/newshipmentstep1" element={<NewShipmentStep1 />} />
        <Route path="/newshipmentstep2" element={<NewShipmentStep2 />} />
        <Route path="/newshipmentstep3" element={<NewShipmentStep3 />} />
        <Route path="/confirmed" element={<Confirmedshipment />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/management" element={<Management />} />
        <Route path="/managementnew1" element={<Managementnew1 />} />
        <Route path="/managementnew2" element={<Managementnew2 />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminnewshipment1" element={<AdminNewShipment1 />} />
        <Route path="/adminnewshipment2" element={<AdminNewShipment2 />} />
      </Routes>
    </BrowserRouter>
  );
}
