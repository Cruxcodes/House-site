import React from "react";
import "./App.css";
import * as house from "./pages";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className="pageContainer"> */}
          <Layout>
            <Routes>
              <Route path="/*" element={<house.Explore />} />
              <Route path="/offers" element={<house.Offers />} />
              <Route path="/profile" element={<ProtectedRoute />}>
                <Route path="/profile" element={<house.Profile />} />
              </Route>
              <Route path="/sign-in" element={<house.SignIn />} />
              <Route path="/sign-up" element={<house.SignUp />} />
              <Route
                path="/forgot-password"
                element={<house.ForgotPassword />}
              />
            </Routes>
          </Layout>

          {/* <Navbar /> */}
        {/* </div> */}
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
