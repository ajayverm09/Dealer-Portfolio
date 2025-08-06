import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import PropertyPage from "./components/Property";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Faq from "./components/Faq";

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/properties" element={<PropertyPage/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/faq" element={<Faq/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
