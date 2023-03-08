import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./views/Home/Home";
import { Proyectos }  from "./views/Proyectos/Proyectos"
import { About } from "./views/About/About";
import { Contact } from "./Components/contact";



export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  );
};


