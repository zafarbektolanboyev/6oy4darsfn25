import React from 'react'
import logo from '../assets/logo.png'
import './index.css'

function Header() {
  return (
    <header className='header-container'>
      <div className="logo">
        <a href="#">
            <img src={logo} alt="" />
        </a>
      </div>
      <nav className="nav">
        <ul>
            <li>
                Vakansiyalar
            </li>
            <li>
                Kandidatlar
            </li>
            <li>
                Kompaniyalar
            </li>
            <li>
                Xizmatlar
            </li>
            <li>
                Ta'lim
            </li>
        </ul>
      </nav>
      <div className="btns">
        <select name="lang" id="lang">
            <option value="O'zb">O'zb</option>
            <option value="Rus">Rus</option>
            <option value="Eng">Eng</option>
        </select>
        <button>Boshlash</button>
      </div>
    </header>
  )
}

export default Header
