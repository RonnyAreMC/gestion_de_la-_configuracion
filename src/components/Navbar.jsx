import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#inicio" className="logo">Café Aroma</a>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          <li><a href="#inicio" onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#menu" onClick={() => setOpen(false)}>Menú</a></li>
          <li><a href="#nosotros" onClick={() => setOpen(false)}>Nosotros</a></li>
          <li><a href="#reservar" onClick={() => setOpen(false)}>Reservar</a></li>
        </ul>
      </div>
    </nav>
  )
}
