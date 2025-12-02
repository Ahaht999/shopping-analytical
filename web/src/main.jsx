import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import SearchPage from './pages/SearchPage'
import ProductPage from './pages/ProductPage'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<SearchPage/>} />
        <Route path="product/:id" element={<ProductPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
)
