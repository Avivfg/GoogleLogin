import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {
  About,
  Contact,
  Home,
  Services,
  SignIn,
  UserSection,
} from "./components/pages";
import { jwtDecode } from "jwt-decode";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      const decodedUser = jwtDecode(storedToken);
      setUser(decodedUser);
      // if (decodedUser.exp > Math.floor(Date.now() / 1000)) {
      //   setUser(decodedUser);
      // } else {
      //   localStorage.removeItem("authToken");
      // }
    }
  }, []);

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn setUser={setUser} />} />
        <Route path="/user" element={<UserSection user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
