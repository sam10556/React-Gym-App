import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Generate from "./pages/Home/Generate";
import Track from "./pages/Home/Track";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Signup from "./pages/Home/Signup";
import Login from "./pages/Home/Login";
import Refresh from "./utils/refresh";

function App() {
  const [user, setUser] = useState(false);

  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Router>
          <Refresh setIsAuthenticated={setUser} />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generateWorkout" element={<Generate />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/track"
              element={<PrivateRoute element={<Track />} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
