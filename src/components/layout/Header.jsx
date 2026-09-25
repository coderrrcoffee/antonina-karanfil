import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'
import MobileMenu from './MobileMenu.jsx'
import Button from '../ui/Button.jsx'
import { nav, tutor, contacts } from '../../content/site.js'
import brandLogo from '../../assets/brand/avatar.jpg'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  // Блокируем прокрутку страницы, пока открыто меню
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__brand">
          <img
            className="site-header__logo"
            src={brandLogo}
            alt=""
            width="38"
            height="38"
            loading="lazy"
          />
          <span className="site-header__brand-text">
            <span className="site-header__name">{tutor.name}</span>
            <span className="site-header__role">{tutor.role}</span>
          </span>
        </Link>

        <Nav items={nav} className="site-header__nav" />

        <div className="site-header__actions">
          <Button
            href={contacts.telegram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Пробное занятие
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-toggle__box" aria-hidden="true">
              <span className="menu-toggle__bar" />
              <span className="menu-toggle__bar" />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu open={open} items={nav} onNavigate={() => setOpen(false)} />
    </header>
  )
}
