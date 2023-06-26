import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Footer from "./Components/Footer";
import { routes } from "./Components/utils/routes";
import Form from "./Components/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="/contact" element={<Form />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.favs} element={<Favs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;