import { useState, useEffect } from 'react'
import { LogoHooBank } from '../LogoHooBank'

import { 
  NavbarContainer,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from './styles'

const listMenu = [
  { title: 'Home', url: '#home' },
  { title: 'About Us', url: '#about' },
  { title: 'Features', url: '#features' },
  { title: 'Solution', url: '#solution' },
]

export function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [navbarIsFixed, setNavbarIsFixed] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 5) {
        setNavbarIsFixed(true);
      } else {
        setNavbarIsFixed(false);
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return(
    <NavbarContainer className={navbarIsFixed ? 'fixed' : ''}>
      <div>
        <LogoHooBank size="sm" />

        <Nav className={menuIsOpen ? 'openMenu' : ''}>
          {listMenu.map(item => (
            <NavItem key={item.title}>
              <NavLink href={item.url}>{item.title}</NavLink>
            </NavItem>
          ))}
        </Nav>

        <NavbarToggler
          className={menuIsOpen ? 'activated' : ''}
          onClick={toggleMenu}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} />
          ))}
        </NavbarToggler>
      </div>
    </NavbarContainer>
  )
}