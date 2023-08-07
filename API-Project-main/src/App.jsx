import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Login from './Pages/Login'
import Signup from './Pages/signup'
import NavigationBar from './Components/NavigationBar'
import FooterSection from './Components/FooterSection'
import CategoryPage from './Pages/CategoryPage'
import ProductPage from './Pages/ProductPage'
import Contact from "./Pages/Contact";
import About from "./Pages/About";


export default function App() {

  const [user, setUser] = useState(true)
  return (
    <>

      <NavigationBar />

      {
        user

          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productID" element={<ProductPage />} />
              <Route path="/products/category/:categoryName" element={<CategoryPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/login" replace={true} />} />
            </Routes>
          )

      }

      <FooterSection />


    </>
  )
}
