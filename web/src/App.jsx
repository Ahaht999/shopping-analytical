import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="brand">PriceIntel</Link>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
