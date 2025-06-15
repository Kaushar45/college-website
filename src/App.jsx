import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import React from "react";
import Footer from "./components/Footer";

import VoiceControl from "./VoiceControl";
function App() {
  return (
    <>
      <Navbar />
      <h1>Hello,I am Home Page</h1>
      <VoiceControl />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
