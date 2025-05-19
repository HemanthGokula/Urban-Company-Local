import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import AcServiceAndRepair from "./All Service Pages/AcServiceAndRepair.jsx";
import AcServiceAndRepairModal from "./ACServiceAndRepair/AcServiceAndRepairModal.jsx";
import SalonForMenModal from "./SalonForMen/SalonForMenModal.jsx"
import MyFooter from "../Components/MyFooter";
import { useState } from "react";

// Shared Layout Component
const Layout = ({ setShowModal, children }) => {
  return (
    <>
      <Navbar setShowModal={setShowModal} />
      {children}
      <MyFooter />
    </>
  );
};

// Layout for AcServiceAndRepair with fixed styles
const AcServiceAndRepairLayout = ({ setShowModal, children }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "60px",
          margin: "0px",
          padding: "0px",
          zIndex: "5",
          position: "fixed",
          top: 0,
          bottom: 1,
        }}
      >
        <Navbar
          setShowModal={setShowModal}
          style={{
            backgroundColor: "white",
            position: "relative",
            zIndex: "5",
          }}
          linkColor="#666"
          img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_22e80550.png"
        />
      </div>
      {children}
      <MyFooter />
    </>
  );
};

// Layout for SalonForMen with fixed styles
const SalonForMenLayout = ({ setShowModal, children }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "60px",
          margin: "0px",
          padding: "0px",
          zIndex: "5",
          position: "fixed",
          top: 0,
          bottom: 1,
        }}
      >
        <Navbar
          setShowModal={setShowModal}
          style={{
            backgroundColor: "white",
            position: "relative",
            zIndex: "5",
          }}
          linkColor="#666"
          img="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_22e80550.png"
        />
      </div>
      {children}
      <MyFooter />
    </>
  );
};

export default function AppRoutes() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Routes>
      {/* Route for Homepage */}
      <Route
        path="/"
        element={
          <Layout setShowModal={setShowModal}>
            <HomePage showModal={showModal} setShowModal={setShowModal} />
          </Layout>
        }
      />

      {/* Route for AC Service and Repair */}
      <Route
        path="/ac-service-repair"
        element={
          <AcServiceAndRepairLayout setShowModal={setShowModal}>
            <AcServiceAndRepair />
          </AcServiceAndRepairLayout>
        }
      />

      {/* Route for AC Service and Repair Modal */}
      <Route
        path="/ac-service-repair/add-service"
        element={<AcServiceAndRepairModal />}
      />
    </Routes>
  );
}