import { useState } from 'react'
import { LogoHooBank } from '../LogoHooBank'

import { 
  NavbarContainer,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from './styles'

const listMenu = [
  { title: 'Home', url: 'home' },
  { title: 'About Us', url: 'about' },
  { title: 'Features', url: 'features' },
  { title: 'Solution', url: 'solution' },
]

export function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return(
    <NavbarContainer>
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
    </NavbarContainer>
  )
}