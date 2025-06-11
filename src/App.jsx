import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <h1>Hello,I am Home Page</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </>
  );
}

export default App;
