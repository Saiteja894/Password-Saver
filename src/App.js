import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PasswordForm from "./components/PasswordForm";
import Passwords from "./components/Passwords";
import PasswordState from "./context/password/PasswordState";

function App() {
  return (
    <PasswordState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<PasswordForm />} />
          <Route path="/passwords" element={<Passwords />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </PasswordState>
  );
}

export default App;
