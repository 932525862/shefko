import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Animats from "./assets/gifd.gif";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading uchun state

  const openModal = () => setIsOpen(true);

  // useEffect orqali loadingni 2 soniyadan keyin o'chiramiz
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 soniya
    return () => clearTimeout(timer); // Timerni tozalash
  }, []);

  if (isLoading) {
    // Loading paytida animatsiyani ko'rsatamiz
    return (
      <div
        className="flex items-center justify-center h-screen"
        style={{
          backgroundColor: "#ffffff", // Fonga #ffffff rangini beramiz
        }}
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
