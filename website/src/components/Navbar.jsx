import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const linkClass = ({ isActive }) =>
    isActive ? 'navbar__links navbar__links--active' : 'navbar__links'

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="navbar__container">
          <NavLink to="/" id="navbar-logo" onClick={closeMenu}>
            Texas Geospatial Cancer Data Advocacy Project
          </NavLink>

          <ul className={isOpen ? 'navbar__menu navbar__menu--active' : 'navbar__menu'}>
            <li className="navbar__item">
              <NavLink to="/" className={linkClass} onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/departments" className={linkClass} onClick={closeMenu}>
                Departments
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/officers" className={linkClass} onClick={closeMenu}>
                Officers
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          <button
            className="navbar__toggle"
            id="mobile-menu"
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>
        </div>
      </nav>
    </header>
  )
}
