import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { TechStack } from "./pages/TechStack";
import { MyProjects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
