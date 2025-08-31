import { Route, Routes } from "react-router-dom"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import HomePage from "./pages/home"
import Notfound from "./pages/not found"
import Product from "./pages/product"
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}


export default App
