import React from "react";
import "./App.css";
import * as house from "./pages";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<house.Explore />} />
            <Route path="/offers" element={<house.Offers />} />
            <Route path="/profile" element={<house.Profile />} />
            <Route path="/sign-in" element={<house.SignIn />} />
            <Route path="/sign-up" element={<house.SignUp />} />
            <Route path="/forgot-password" element={<house.ForgotPassword />} />
          </Routes>
          <Navbar />
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
