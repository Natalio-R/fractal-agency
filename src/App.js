import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Menu, Footer } from "./components";
import { Home, Services } from "./pages";

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          {/* Paages  */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
