import Card from "./components/Cards";
import Greetings from "./components/Greetings";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Counter from "./pages/Counter";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Register />} />
          <Route path="*" element={<Register />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
