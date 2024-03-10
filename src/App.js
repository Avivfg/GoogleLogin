import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services, SignIn } from "./components/pages";

function App() {
  const [user, setUser] = useState({}); // in real cases, we would use something better (like redux)
  // instead of useState, for managing the users

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<SignIn setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
