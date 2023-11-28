import React, { useEffect } from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Components/Navbar";
import { useAuth } from "./AuthContext";

function App() {
  const {isAuthenticated,setIsAuthenticated}=useAuth()
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="min-h-full">
      <Navbar/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to={"/protected-route"} />} />
        <Route
            path="/protected-route"
            element={isAuthenticated ? <ProtectedRoute /> : <Navigate to={"/login"} />}
        />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to={"/protected-route"} />} />
     </Routes>
    </div>
  );
}

export default App;
