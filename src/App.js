import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Index from "./components/Index";
import { Routes, Route } from "react-router-dom";
import List from "./components/List";
import Context from "./components/Createcontextdata";
import Productdetail from "./components/Productdetail";
import Category from "./components/Category";

function App() {
  const [url, seturl] = useState("");
  return (
    <>
      <Context.Provider value={{ url, seturl }}>
        <Header />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/List" element={<List />} />
          <Route path="/Productdetail" element={<Productdetail />} />
          <Route path="/Category" element={<Category />} />
        </Routes>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
