import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductInfoDoc from "./pages/ProductInfoDoc";
import Products from "./pages/Products";
import Export from "./pages/Export";
import Production from "./pages/Production";
import Feedback from "./pages/Feedback";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animats from "./assets/shefko.gif";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsOpen(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center h-screen"
        style={{ backgroundColor: "#ffffff" }}
      >
        <img src={Animats} alt="Loading..." className="w-36 h-36" />
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              openModal={openModal}
            />
          }
        >
          <Route
            index
            element={
              <Home
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                openModal={openModal}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export" element={<Export />} />
          <Route path="/production" element={<Production />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/info" element={<ProductInfoDoc />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
