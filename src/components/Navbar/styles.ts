import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.25rem 0;

  svg {
    z-index: 1;
  }

  @media(max-width: 768px) {
    padding: 2.25rem;
  }
`

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 3.4rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.background};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    visibility: hidden;
    width: 0;
   
    &.openMenu {
      width: 100%;
      visibility: revert;
      flex-direction: column;
      text-align: center;

      li {
        font-size: 1.75rem;
      }
    }
  }
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;
  color: ${(props) => props.theme.white70};

  &:hover {
    color: ${(props) => props.theme.white};
  }
`

export const NavbarToggler = styled.button`
  @media(max-width: 769px) {
    display: flex;
  }
  
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2em;
  height: 1.5em;
  position: relative;
  margin-left: 20px;
  border: 0;
  background: transparent;
  cursor: pointer;
  > span {
    display: inline-block;
    width: 100%;
    height: 8%;
    background: ${(props) => props.theme.white};
    transition: all 0.5s ease;
    transform-origin: left;
    &:nth-of-type(1),
    &:nth-of-type(5) {
      opacity: 0;
    }
    &:nth-of-type(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 70%;
    }
    &:nth-of-type(3) {
      transition-delay: 0.1s;
    }
    &:nth-of-type(4) {
      transition-delay: 0.2s;
      position: absolute;
      bottom: 0;
    }
  }
  &.activated {
    span {
      width: 0;
      &:nth-of-type(1) {
        width: 100%;
        animation: hamburger4animTop 0.8s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
      }
      &:nth-of-type(5) {
        width: 100%;
        animation: hamburger4animBottom 0.8s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
      }
    }
  }
`